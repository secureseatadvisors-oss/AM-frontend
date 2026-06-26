export default function NavigationButtons({
  currentStep,
  totalSteps,
  loading = false,
  onPrevious,
  onNext,
  onSubmit,
}) {
  const isFirst = currentStep === 0;
  const isLast = currentStep === totalSteps - 1;

  return (
    <div className="mt-12 pt-8 border-t border-slate-200 flex items-center justify-between">

      {/* Previous */}

      <div>
        {!isFirst && (
          <button
            type="button"
            onClick={onPrevious}
            disabled={loading}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 font-semibold hover:bg-slate-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="text-lg">←</span>
            Previous
          </button>
        )}
      </div>

      {/* Right Side */}

      <div className="flex items-center gap-4">

        {/* Step Counter */}

        <span className="hidden sm:block text-sm text-slate-500 font-medium">
          Step{" "}
          <span className="font-bold text-slate-900">
            {currentStep + 1}
          </span>{" "}
          of{" "}
          <span className="font-bold text-slate-900">
            {totalSteps}
          </span>
        </span>

        {/* Continue */}

        {!isLast && (
          <button
            type="button"
            onClick={onNext}
            disabled={loading}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-lg shadow-blue-100 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            Continue
            <span className="text-lg">→</span>
          </button>
        )}

        {/* Submit */}

        {isLast && (
          <button
            type="button"
            onClick={onSubmit}
            disabled={loading}
            className="inline-flex items-center justify-center gap-3 px-8 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold shadow-lg shadow-green-100 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed min-w-[210px]"
          >
            {loading ? (
              <>
                <span className="w-5 h-5 border-[3px] border-white/40 border-t-white rounded-full animate-spin" />
                Saving...
              </>
            ) : (
              <>
                ✓ Submit Profile
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}