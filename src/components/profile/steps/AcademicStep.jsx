function Input({
  label,
  value,
  onChange,
  error,
  type = "text",
  placeholder = "",
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        {label}
      </label>

      <input
        type={type}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full rounded-xl border px-4 py-3 text-sm transition
        ${
          error
            ? "border-red-300 bg-red-50"
            : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        }`}
      />

      {error && (
        <p className="text-xs text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

function Select({
  label,
  value,
  onChange,
  children,
  error,
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700 mb-2">
        {label}
      </label>

      <select
        value={value || ""}
        onChange={onChange}
        className={`w-full rounded-xl border px-4 py-3 bg-white text-sm transition
        ${
          error
            ? "border-red-300 bg-red-50"
            : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        }`}
      >
        {children}
      </select>

      {error && (
        <p className="text-xs text-red-500 mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

const BOARDS = [
  "State Board (Maharashtra)",
  "CBSE",
  "ICSE / ISC",
  "Other",
];

export default function AcademicStep({
  data,
  setData,
  errors,
}) {

  function set(field, value) {
    setData({
      ...data,
      [field]: value,
    });
  }

  return (

    <div className="space-y-10">

      {/* Academic */}

      <section>

        <h2
          className="text-2xl font-black text-slate-900"
          style={{ fontFamily: "Syne,sans-serif" }}
        >
          Academic Information
        </h2>

        <p className="text-slate-500 mt-2 mb-8">
          Enter your Class 12 information exactly as mentioned on your marksheet.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <Select
            label="Class 12 Board"
            value={data.board}
            error={errors.board}
            onChange={(e) =>
              set("board", e.target.value)
            }
          >
            <option value="">
              Select Board
            </option>

            {BOARDS.map((board) => (
              <option key={board}>
                {board}
              </option>
            ))}

          </Select>

          <Input
            label="PCM Total Marks"
            type="number"
            value={data.pcm_total}
            error={errors.pcm_total}
            placeholder="Example : 273"
            onChange={(e) =>
              set("pcm_total", e.target.value)
            }
          />

          <Input
            label="PCM Percentage"
            type="number"
            value={data.pcm_percentage}
            error={errors.pcm_percentage}
            placeholder="Example : 91.00"
            onChange={(e) =>
              set("pcm_percentage", e.target.value)
            }
          />

        </div>

      </section>

      {/* Divider */}

      <div className="border-t border-slate-200" />

      {/* JEE */}

      <section>

        <div className="flex items-center gap-3 mb-4">

          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">

            📘

          </div>

          <div>

            <h2
              className="text-2xl font-black text-slate-900"
              style={{ fontFamily: "Syne,sans-serif" }}
            >
              JEE Main (Optional)
            </h2>

            <p className="text-slate-500">
              Leave blank if you didn't appear.
            </p>

          </div>

        </div>

        <div className="rounded-3xl border border-blue-100 bg-blue-50 p-6">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <Input
              label="JEE Percentile"
              type="number"
              value={data.jee_percentile}
              error={errors.jee_percentile}
              placeholder="Example : 95.45"
              onChange={(e) =>
                set("jee_percentile", e.target.value)
              }
            />

            <Input
              label="JEE Rank"
              type="number"
              value={data.jee_rank}
              error={errors.jee_rank}
              placeholder="Example : 14562"
              onChange={(e) =>
                set("jee_rank", e.target.value)
              }
            />

          </div>

        </div>

      </section>

      {/* Notice */}

      <section>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">

          <div className="flex gap-4">

            <div className="text-2xl">
              ⚠️
            </div>

            <div>

              <h3 className="font-bold text-amber-800">
                Please verify carefully
              </h3>

              <p className="text-sm text-amber-700 mt-2 leading-7">

                Wrong PCM marks or board information may affect your
                counselling recommendations. Please ensure everything
                matches your official marksheet.

              </p>

            </div>

          </div>

        </div>

      </section>

    </div>

  );

}