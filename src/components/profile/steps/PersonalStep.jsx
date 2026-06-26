const DISTRICTS = [
  "Ahmednagar",
  "Akola",
  "Amravati",
  "Aurangabad",
  "Beed",
  "Bhandara",
  "Buldhana",
  "Chandrapur",
  "Dhule",
  "Gadchiroli",
  "Gondia",
  "Hingoli",
  "Jalgaon",
  "Jalna",
  "Kolhapur",
  "Latur",
  "Mumbai",
  "Mumbai Suburban",
  "Nagpur",
  "Nanded",
  "Nandurbar",
  "Nashik",
  "Osmanabad",
  "Palghar",
  "Parbhani",
  "Pune",
  "Raigad",
  "Ratnagiri",
  "Sangli",
  "Satara",
  "Sindhudurg",
  "Solapur",
  "Thane",
  "Wardha",
  "Washim",
  "Yavatmal",
];

const CATEGORIES = [
  "OPEN",
  "OBC",
  "SC",
  "ST",
  "VJ/NT-A",
  "VJ/NT-B",
  "VJ/NT-C",
  "VJ/NT-D",
  "SBC",
  "EWS",
];

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
        <p className="text-red-500 text-xs mt-1">{error}</p>
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
        className={`w-full rounded-xl border px-4 py-3 text-sm bg-white transition
        ${
          error
            ? "border-red-300 bg-red-50"
            : "border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        }`}
      >
        {children}
      </select>

      {error && (
        <p className="text-red-500 text-xs mt-1">{error}</p>
      )}
    </div>
  );
}

function Toggle({ checked, onChange, label }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex items-center gap-3"
    >
      <div
        className={`w-12 h-7 rounded-full transition relative ${
          checked ? "bg-blue-600" : "bg-slate-300"
        }`}
      >
        <div
          className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow transition ${
            checked ? "translate-x-5" : ""
          }`}
        />
      </div>

      <span className="text-sm font-medium text-slate-700">
        {label}
      </span>
    </button>
  );
}

function VerifiedCard({ title, value }) {
  return (
    <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
      <p className="text-xs uppercase tracking-wider text-green-600 font-bold">
        {title}
      </p>

      <div className="mt-2 flex items-center justify-between">

        <span className="font-semibold text-slate-900 break-all">
          {value}
        </span>

        <span className="text-green-600 text-sm font-bold">
          ✓ Verified
        </span>

      </div>
    </div>
  );
}

export default function PersonalStep({
  student,
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

      {/* VERIFIED */}

      <section>

        <h2
          className="text-2xl font-black text-slate-900"
          style={{ fontFamily: "Syne,sans-serif" }}
        >
          Verified Information
        </h2>

        <p className="text-slate-500 mt-2 mb-6">
          These details were verified during registration and cannot be changed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <VerifiedCard
            title="Full Name"
            value={student?.name}
          />

          <VerifiedCard
            title="Email"
            value={student?.email}
          />

          <VerifiedCard
            title="Mobile"
            value={student?.mobile}
          />

          <VerifiedCard
            title="Counselling ID"
            value={student?.counsellingId}
          />

        </div>

      </section>

      {/* PERSONAL */}

      <section>

        <h2
          className="text-2xl font-black text-slate-900 mb-6"
          style={{ fontFamily: "Syne,sans-serif" }}
        >
          Personal Information
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <Select
            label="Gender"
            value={data.gender}
            error={errors.gender}
            onChange={(e) =>
              set("gender", e.target.value)
            }
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </Select>

          <Input
            label="Date of Birth"
            type="date"
            value={data.date_of_birth}
            error={errors.date_of_birth}
            onChange={(e) =>
              set("date_of_birth", e.target.value)
            }
          />

          <Select
            label="District"
            value={data.district}
            error={errors.district}
            onChange={(e) =>
              set("district", e.target.value)
            }
          >
            <option value="">Select District</option>

            {DISTRICTS.map((d) => (
              <option key={d}>
                {d}
              </option>
            ))}
          </Select>

          <Select
            label="Category"
            value={data.category}
            error={errors.category}
            onChange={(e) =>
              set("category", e.target.value)
            }
          >
            <option value="">Select Category</option>

            {CATEGORIES.map((c) => (
              <option key={c}>
                {c}
              </option>
            ))}
          </Select>

          <Input
            label="Sub Category"
            value={data.subcategory}
            onChange={(e) =>
              set("subcategory", e.target.value)
            }
          />

          <Select
            label="Candidate Type"
            value={data.candidate_type}
            onChange={(e) =>
              set("candidate_type", e.target.value)
            }
          >
            <option value="">Select</option>

            <option>Maharashtra State</option>

            <option>Outside Maharashtra</option>

            <option>J&K Migrant</option>

          </Select>

        </div>

      </section>

      {/* ELIGIBILITY */}

      <section>

        <h2
          className="text-2xl font-black text-slate-900 mb-6"
          style={{ fontFamily: "Syne,sans-serif" }}
        >
          Eligibility
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

          <Toggle
            label="Maharashtra Domicile"
            checked={data.domicile}
            onChange={(v) => set("domicile", v)}
          />

          <Toggle
            label="EWS"
            checked={data.ews}
            onChange={(v) => set("ews", v)}
          />

          <Toggle
            label="TFWS"
            checked={data.tfws}
            onChange={(v) => set("tfws", v)}
          />

          <Toggle
            label="Minority"
            checked={data.minority}
            onChange={(v) => set("minority", v)}
          />

          <Toggle
            label="PWD"
            checked={data.pwd}
            onChange={(v) => set("pwd", v)}
          />

        </div>

      </section>

    </div>
  );
}