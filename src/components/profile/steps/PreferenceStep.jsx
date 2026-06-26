const BRANCHES = [
  "Computer Engineering",
  "Information Technology",
  "Artificial Intelligence & Data Science",
  "Artificial Intelligence & Machine Learning",
  "Computer Science & Engineering",
  "Electronics & Telecommunication Engineering",
  "Electronics Engineering",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Chemical Engineering",
  "Production Engineering",
  "Instrumentation Engineering",
  "Automobile Engineering",
  "Data Science",
  "Cyber Security",
  "Internet of Things",
  "Robotics & Automation",
];

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

function PreferenceSelector({
  title,
  options,
  selected,
  setSelected,
  error,
}) {

  function add(value) {
    if (!value) return;

    if (selected.includes(value)) return;

    if (selected.length >= 5) return;

    setSelected([...selected, value]);
  }

  function remove(index) {
    const arr = [...selected];
    arr.splice(index, 1);
    setSelected(arr);
  }

  function moveUp(index) {
    if (index === 0) return;

    const arr = [...selected];

    [arr[index], arr[index - 1]] =
      [arr[index - 1], arr[index]];

    setSelected(arr);
  }

  function moveDown(index) {
    if (index === selected.length - 1) return;

    const arr = [...selected];

    [arr[index], arr[index + 1]] =
      [arr[index + 1], arr[index]];

    setSelected(arr);
  }

  return (

    <div>

      <h3
        className="text-xl font-black text-slate-900 mb-5"
        style={{fontFamily:"Syne,sans-serif"}}
      >
        {title}
      </h3>

      <select
        defaultValue=""
        onChange={(e)=>{
          add(e.target.value);
          e.target.value="";
        }}
        className="w-full rounded-xl border border-slate-200 px-4 py-3 bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      >

        <option value="">
          Select...
        </option>

        {options
          .filter(item=>!selected.includes(item))
          .map(item=>(

            <option key={item}>
              {item}
            </option>

          ))}

      </select>

      {error && (
        <p className="text-red-500 text-xs mt-2">
          {error}
        </p>
      )}

      <div className="space-y-3 mt-6">

        {selected.map((item,index)=>(

          <div
            key={item}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-4 flex items-center gap-4"
          >

            <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center">
              {index+1}
            </div>

            <div className="flex-1">

              <div className="font-semibold text-slate-900">
                {item}
              </div>

            </div>

            <div className="flex gap-2">

              <button
                type="button"
                onClick={()=>moveUp(index)}
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:bg-slate-100"
              >
                ↑
              </button>

              <button
                type="button"
                onClick={()=>moveDown(index)}
                className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:bg-slate-100"
              >
                ↓
              </button>

              <button
                type="button"
                onClick={()=>remove(index)}
                className="w-9 h-9 rounded-lg bg-red-50 border border-red-200 hover:bg-red-100"
              >
                ✕
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default function PreferenceStep({
  data,
  setData,
  errors,
}) {

  return (

    <div className="space-y-12">

      <section>

        <h2
          className="text-2xl font-black text-slate-900"
          style={{fontFamily:"Syne,sans-serif"}}
        >
          Counselling Preferences
        </h2>

        <p className="text-slate-500 mt-2">
          Select up to 5 branches and 5 preferred districts.
          Arrange them in the exact priority you want us to use.
        </p>

      </section>

      <div className="grid lg:grid-cols-2 gap-10">

        <PreferenceSelector
          title="Preferred Branches"
          options={BRANCHES}
          selected={data.preferred_branches}
          error={errors.preferred_branches}
          setSelected={(value)=>
            setData({
              ...data,
              preferred_branches:value
            })
          }
        />

        <PreferenceSelector
          title="Preferred Districts"
          options={DISTRICTS}
          selected={data.preferred_districts}
          error={errors.preferred_districts}
          setSelected={(value)=>
            setData({
              ...data,
              preferred_districts:value
            })
          }
        />

      </div>

      <div className="rounded-3xl bg-blue-50 border border-blue-200 p-6">

        <h3 className="font-bold text-blue-900 mb-3">
          💡 Recommendation
        </h3>

        <p className="text-sm text-blue-800 leading-7">

          Choose districts where you are genuinely willing to study.
          We will prioritize your first choices but may recommend
          alternatives if they significantly improve your admission
          chances.

        </p>

      </div>

    </div>

  );

}