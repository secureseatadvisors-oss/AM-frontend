function Section({ title, children }) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">

      <div className="px-6 py-4 border-b border-slate-100 bg-slate-50">

        <h3
          className="text-lg font-black text-slate-900"
          style={{ fontFamily: "Syne,sans-serif" }}
        >
          {title}
        </h3>

      </div>

      <div className="p-6">

        {children}

      </div>

    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0 gap-6">

      <span className="text-slate-500 text-sm font-medium">
        {label}
      </span>

      <span className="text-slate-900 text-sm font-semibold text-right break-words">
        {value || "—"}
      </span>

    </div>
  );
}

export default function ReviewStep({
  student,
  personal,
  academic,
  mhtcet,
  preferences,
}) {

  return (

    <div className="space-y-8">

      {/* Heading */}

      <section>

        <h2
          className="text-3xl font-black text-slate-900"
          style={{ fontFamily: "Syne,sans-serif" }}
        >
          Review Your Profile
        </h2>

        <p className="text-slate-500 mt-3 max-w-2xl leading-7">
          Please review every detail carefully before submitting.
          Once submitted, your profile will be locked until our team
          reviews it.
        </p>

      </section>

      {/* Student */}

      <Section title="Verified Information">

        <Row
          label="Counselling ID"
          value={student?.counsellingId}
        />

        <Row
          label="Full Name"
          value={student?.name}
        />

        <Row
          label="Email"
          value={student?.email}
        />

        <Row
          label="Mobile"
          value={student?.mobile}
        />

      </Section>

      {/* Personal */}

      <Section title="Personal Information">

        <Row
          label="Gender"
          value={personal.gender}
        />

        <Row
          label="Date of Birth"
          value={personal.date_of_birth}
        />

        <Row
          label="District"
          value={personal.district}
        />

        <Row
          label="Category"
          value={personal.category}
        />

        <Row
          label="Sub Category"
          value={personal.subcategory}
        />

        <Row
          label="Candidate Type"
          value={personal.candidate_type}
        />

        <Row
          label="Domicile"
          value={personal.domicile ? "Yes" : "No"}
        />

        <Row
          label="EWS"
          value={personal.ews ? "Yes" : "No"}
        />

        <Row
          label="TFWS"
          value={personal.tfws ? "Yes" : "No"}
        />

        <Row
          label="Minority"
          value={personal.minority ? "Yes" : "No"}
        />

        <Row
          label="PWD"
          value={personal.pwd ? "Yes" : "No"}
        />

      </Section>

      {/* Academic */}

      <Section title="Academic Information">

        <Row
          label="Board"
          value={academic.board}
        />

        <Row
          label="PCM Total"
          value={academic.pcm_total}
        />

        <Row
          label="PCM Percentage"
          value={
            academic.pcm_percentage
              ? `${academic.pcm_percentage}%`
              : ""
          }
        />

        <Row
          label="JEE Percentile"
          value={
            academic.jee_percentile
              ? `${academic.jee_percentile}%`
              : "Not Provided"
          }
        />

        <Row
          label="JEE Rank"
          value={
            academic.jee_rank || "Not Provided"
          }
        />

      </Section>

      {/* CET */}

      <Section title="MHT-CET Performance">

        <Row
          label="Physics"
          value={`${mhtcet.physics_percentile}%`}
        />

        <Row
          label="Chemistry"
          value={`${mhtcet.chemistry_percentile}%`}
        />

        <Row
          label="Mathematics"
          value={`${mhtcet.mathematics_percentile}%`}
        />

        <Row
          label="Overall Percentile"
          value={`${mhtcet.overall_percentile}%`}
        />

        <Row
          label="General Rank"
          value={mhtcet.general_rank}
        />

        <Row
          label="Category Rank"
          value={mhtcet.category_rank}
        />

      </Section>

      {/* Preferences */}

      <Section title="Preferences">

        <div className="grid md:grid-cols-2 gap-8">

          <div>

            <h4 className="font-bold text-slate-900 mb-4">
              Preferred Branches
            </h4>

            <div className="space-y-3">

              {preferences.preferred_branches.map(
                (branch, index) => (

                  <div
                    key={branch}
                    className="rounded-xl bg-blue-50 border border-blue-100 p-3 flex gap-4"
                  >

                    <div className="w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>

                    <div className="font-medium text-slate-900">
                      {branch}
                    </div>

                  </div>

                )
              )}

            </div>

          </div>

          <div>

            <h4 className="font-bold text-slate-900 mb-4">
              Preferred Districts
            </h4>

            <div className="space-y-3">

              {preferences.preferred_districts.map(
                (district, index) => (

                  <div
                    key={district}
                    className="rounded-xl bg-green-50 border border-green-100 p-3 flex gap-4"
                  >

                    <div className="w-7 h-7 rounded-full bg-green-600 text-white flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>

                    <div className="font-medium text-slate-900">
                      {district}
                    </div>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </Section>

      {/* Declaration */}

      <div className="rounded-3xl border border-amber-200 bg-amber-50 p-8">

        <h3
          className="text-xl font-black text-amber-900"
          style={{ fontFamily: "Syne,sans-serif" }}
        >
          Declaration
        </h3>

        <p className="mt-4 text-amber-800 leading-7">

          I confirm that all the information provided above is true
          and matches my official documents. I understand that
          incorrect information may affect my counselling guidance
          and seat prediction.

        </p>

      </div>

    </div>

  );

}