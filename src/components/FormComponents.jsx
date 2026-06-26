// components/FormComponents.jsx
export const Field = ({ label, required, error, children }) => (
  <div className="mb-5">
    <label className="block text-sm font-bold text-slate-700 mb-2">
      {label} {required && <span className="text-blue-600">*</span>}
    </label>
    {children}
    {error && <p className="mt-1 text-xs text-red-500 font-medium">{error}</p>}
  </div>
);

export const Input = ({ error, ...props }) => (
  <input
    className={`w-full rounded-xl border px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 transition-all ${
      error ? "border-red-300 bg-red-50" : "border-slate-200"
    }`}
    {...props}
  />
);