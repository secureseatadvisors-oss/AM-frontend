function Input({
  label,
  value,
  onChange,
  error,
  type = "number",
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

function SubjectCard({
  title,
  value,
  onChange,
  error,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

      <h3
        className="text-xl font-black text-slate-900 mb-4"
        style={{ fontFamily: "Syne,sans-serif" }}
      >
        {title}
      </h3>

      <Input
        label="Percentile"
        value={value}
        error={error}
        placeholder="Example : 98.56"
        onChange={onChange}
      />

    </div>
  );
}

export default function MHTCETStep({
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

      {/* Heading */}

      <section>

        <h2
          className="text-2xl font-black text-slate-900"
          style={{ fontFamily: "Syne,sans-serif" }}
        >
          MHT-CET Performance
        </h2>

        <p className="text-slate-500 mt-2">
          Enter the official percentile values exactly as displayed on your scorecard.
        </p>

      </section>

      {/* Subjects */}

      <section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <SubjectCard
            title="Physics"
            value={data.physics_percentile}
            error={errors.physics_percentile}
            onChange={(e) =>
              set("physics_percentile", e.target.value)
            }
          />

          <SubjectCard
            title="Chemistry"
            value={data.chemistry_percentile}
            error={errors.chemistry_percentile}
            onChange={(e) =>
              set("chemistry_percentile", e.target.value)
            }
          />

          <SubjectCard
            title="Mathematics"
            value={data.mathematics_percentile}
            error={errors.mathematics_percentile}
            onChange={(e) =>
              set("mathematics_percentile", e.target.value)
            }
          />

        </div>

      </section>

      {/* Overall */}

      <section>

        <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-8">

          <p className="uppercase tracking-widest text-xs font-bold text-blue-100">
            Overall Performance
          </p>

          <div className="mt-6 max-w-sm">

            <Input
              label="Overall Percentile"
              value={data.overall_percentile}
              error={errors.overall_percentile}
              placeholder="Example : 99.21"
              onChange={(e) =>
                set("overall_percentile", e.target.value)
              }
            />

          </div>

        </div>

      </section>

      {/* Rank */}

      <section>

        <h2
          className="text-2xl font-black text-slate-900 mb-6"
          style={{ fontFamily: "Syne,sans-serif" }}
        >
          Ranking
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <Input
            label="General Rank"
            value={data.general_rank}
            error={errors.general_rank}
            placeholder="Example : 5234"
            onChange={(e) =>
              set("general_rank", e.target.value)
            }
          />

          <Input
            label="Category Rank"
            value={data.category_rank}
            error={errors.category_rank}
            placeholder="Optional"
            onChange={(e) =>
              set("category_rank", e.target.value)
            }
          />

        </div>

      </section>

      {/* Information */}

      <section>

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">

          <div className="flex gap-4">

            <div className="text-3xl">
              💡
            </div>

            <div>

              <h3 className="font-bold text-blue-900">
                How we use this information
              </h3>

              <p className="text-sm text-blue-800 mt-3 leading-7">

                Your counselling strategy is primarily generated using your
                Overall Percentile, General Rank, Category and preferred
                branches. Subject-wise percentiles help us estimate branch
                competitiveness more accurately.

              </p>

            </div>

          </div>

        </div>

      </section>

    </div>

  );

}