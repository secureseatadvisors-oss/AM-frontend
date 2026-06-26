import { useState, useEffect, useRef } from 'react';
import { chatAPI } from '../services/api';
import { useAuth } from '../context/AuthContext';

const STAGE_LABELS = {
  REGISTRATION_PENDING: 'Registration Pending',
  REGISTRATION_COMPLETE: 'Registered',
  DOCUMENT_VERIFICATION_PENDING: 'Docs Pending',
  DOCUMENT_VERIFIED: 'Docs Verified',
  OPTION_FORM_PENDING: 'Option Form Pending',
  OPTION_FORM_SUBMITTED: 'Option Form Done',
  CAP_ROUND_1: 'CAP Round 1',
  CAP_ROUND_2: 'CAP Round 2',
  CAP_ROUND_3: 'CAP Round 3',
  SEAT_ALLOTTED: 'Seat Allotted',
  FREEZE: 'Frozen',
  FLOAT: 'Floating',
  ADMISSION_CONFIRMED: 'Admitted ✓',
};

const QUICK_PROMPTS = [
  'What documents do I need for CAP?',
  'How do I fill the option form?',
  'Explain FREEZE vs FLOAT',
  'Predict colleges for my percentile',
  'What is my current counselling stage?',
];

function Message({ msg }) {
  const isUser = msg.role === 'user';
  return (
    <div className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold mt-1">
          SS
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? 'bg-blue-600 text-white rounded-br-sm'
            : 'bg-gray-100 text-gray-800 rounded-bl-sm'
        }`}
      >
        {msg.content}
        {msg.agentUsed && (
          <span className="block text-xs mt-1 opacity-50">via {msg.agentUsed}</span>
        )}
      </div>
    </div>
  );
}

function TypingIndicator() {
  return (
    <div className="flex gap-3 justify-start">
      <div className="w-8 h-8 rounded-full bg-blue-600 flex-shrink-0 flex items-center justify-center text-white text-xs font-bold">SS</div>
      <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-4 py-3">
        <div className="flex gap-1">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Chat() {
  const { student } = useAuth();
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: `Hi ${student?.name || 'there'}! 👋 I'm your SecureSeat AI counsellor for MHT CET 2026 CAP admissions.\n\nI can help you with:\n• College predictions based on your percentile\n• Building your preference list\n• Document checklist\n• Understanding FREEZE vs FLOAT\n• Any CAP counselling query\n\nWhat would you like to know?`,
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [stage, setStage] = useState(student?.capStage || 'REGISTRATION_PENDING');
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Load history on mount
  useEffect(() => {
    chatAPI.history().then(({ data }) => {
      if (data?.length > 1) {
        setMessages(data.slice(-30).map((m) => ({ role: m.role, content: m.content, agentUsed: m.agentUsed })));
      }
    }).catch(() => {});
  }, []);

  const send = async (text) => {
    const msg = text || input.trim();
    if (!msg || loading) return;
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: msg }]);
    setLoading(true);
    try {
      const { data } = await chatAPI.send(msg);
      setMessages((prev) => [...prev, { role: 'assistant', content: data.response, agentUsed: data.agentUsed }]);
      if (data.currentStage) setStage(data.currentStage);
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' }]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <div className="border-b bg-white px-4 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">SS</div>
          <div>
            <p className="font-semibold text-gray-900 text-sm">SecureSeat AI</p>
            <p className="text-xs text-green-500">● Online</p>
          </div>
        </div>
        <span className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full font-medium">
          {STAGE_LABELS[stage] || stage}
        </span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((m, i) => <Message key={i} msg={m} />)}
        {loading && <TypingIndicator />}
        <div ref={bottomRef} />
      </div>

      {/* Quick prompts */}
      {messages.length <= 1 && (
        <div className="px-4 pb-2 flex gap-2 flex-wrap">
          {QUICK_PROMPTS.map((p) => (
            <button
              key={p}
              onClick={() => send(p)}
              className="text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-full px-3 py-1.5 transition-colors"
            >
              {p}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="border-t bg-white px-4 py-3">
        <div className="flex gap-2 items-end">
          <textarea
            ref={inputRef}
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }}
            placeholder="Ask about CAP counselling, colleges, documents..."
            className="flex-1 border border-gray-200 rounded-2xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 resize-none max-h-32"
          />
          <button
            onClick={() => send()}
            disabled={!input.trim() || loading}
            className="bg-blue-600 hover:bg-blue-500 disabled:opacity-40 text-white rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center transition-colors"
          >
            <svg className="w-4 h-4 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
