const ACTIVE = "bg-blue-600 text-white border-blue-600";
const COMPLETE = "bg-green-500 text-white border-green-500";
const INACTIVE = "bg-white text-slate-400 border-slate-300";

export default function ProgressStepper({
  currentStep,
  totalSteps,
  titles,
}) {
  return (
    <div className="w-full">

      {/* Progress Line */}
      <div className="relative flex items-center justify-between">

        {titles.map((title, index) => {
          const completed = index < currentStep;
          const active = index === currentStep;

          return (
            <div
              key={title}
              className="relative flex flex-col items-center flex-1"
            >

              {/* Connecting Line */}
              {index !== totalSteps - 1 && (
                <div className="absolute top-5 left-1/2 w-full h-[2px]">
                  <div className="w-full h-full bg-slate-200 rounded-full overflow-hidden">

                    <div
                      className={`h-full transition-all duration-500 ${
                        completed
                          ? "bg-green-500 w-full"
                          : active
                          ? "bg-blue-600 w-1/2"
                          : "bg-transparent w-0"
                      }`}
                    />

                  </div>
                </div>
              )}

              {/* Circle */}
              <div
                className={`relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 font-bold text-sm transition-all duration-300 shadow-sm ${
                  completed
                    ? COMPLETE
                    : active
                    ? ACTIVE
                    : INACTIVE
                }`}
              >
                {completed ? "✓" : index + 1}
              </div>

              {/* Label */}
              <div className="mt-3 text-center px-2">

                <p
                  className={`text-sm font-semibold transition-colors ${
                    active
                      ? "text-slate-900"
                      : completed
                      ? "text-green-600"
                      : "text-slate-400"
                  }`}
                >
                  {title}
                </p>

                <p className="text-xs text-slate-400 mt-1 hidden md:block">
                  Step {index + 1}
                </p>

              </div>

            </div>
          );
        })}
      </div>

      {/* Bottom Progress Bar */}

      <div className="mt-8">

        <div className="flex justify-between mb-2">

          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Progress
          </span>

          <span className="text-xs font-bold text-blue-600">
            {Math.round(((currentStep + 1) / totalSteps) * 100)}%
          </span>

        </div>

        <div className="h-2 rounded-full bg-slate-200 overflow-hidden">

          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500"
            style={{
              width: `${((currentStep + 1) / totalSteps) * 100}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}