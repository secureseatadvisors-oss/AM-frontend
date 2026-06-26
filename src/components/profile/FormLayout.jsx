export default function FormLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#F4F6F9] pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Card */}
        <div className="bg-white border border-slate-200 rounded-[32px] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] overflow-hidden">

          {/* Top Accent */}
          <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-400" />

          {/* Content */}
          <div className="p-8 sm:p-10">

            {children}

          </div>

        </div>

      </div>
    </div>
  );
}