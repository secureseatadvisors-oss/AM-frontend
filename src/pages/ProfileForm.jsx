import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

import FormLayout from "../components/profile/FormLayout";
import ProgressStepper from "../components/profile/ProgressStepper";
import NavigationButtons from "../components/profile/NavigationButtons";

import PersonalStep from "../components/profile/steps/PersonalStep";
import AcademicStep from "../components/profile/steps/AcademicStep";
import MHTCETStep from "../components/profile/steps/MHTCETStep";
import PreferenceStep from "../components/profile/steps/PreferenceStep";
import ReviewStep from "../components/profile/steps/ReviewStep";

import useProfileForm from "../hooks/useProfileForm.js";

const STEP_TITLES = [
  "Personal Details",
  "Academic Details",
  "MHT-CET Details",
  "Preferences",
  "Review & Submit",
];

export default function ProfileForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {  student, refreshStudent  } = useAuth();

  // Security
  if (
    student?.counsellingId &&
    id &&
    student.counsellingId !== id
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  const {
    loading,
    saving,

    step,

    personal,
    academic,
    mhtcet,
    preferences,

    errors,

    setPersonal,
    setAcademic,
    setMhtcet,
    setPreferences,

    nextStep,
    previousStep,

    submitProfile,

    loadProfile,
  } = useProfileForm();

  const [pageError, setPageError] = useState("");

  useEffect(() => {
    async function init() {
      try {
        await loadProfile();
      } catch (err) {
        setPageError(
          err?.response?.data?.message ||
            "Unable to load your profile."
        );
      }
    }

    init();
  }, []);

  //---------------------------------------------
  // Loading
  //---------------------------------------------

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F4F6F9] pt-24 flex justify-center items-center">
        <div className="bg-white rounded-3xl border border-slate-200 p-10 shadow-sm">
          <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="mt-5 text-slate-500 font-medium">
            Loading profile...
          </p>
        </div>
      </div>
    );
  }

  //---------------------------------------------
  // Error
  //---------------------------------------------

  if (pageError) {
    return (
      <div className="min-h-screen bg-[#F4F6F9] pt-24 flex justify-center items-center">

        <div className="bg-white rounded-3xl border border-red-200 p-10 w-full max-w-lg">

          <h2
            className="text-2xl font-black text-red-600 mb-3"
            style={{ fontFamily: "Syne,sans-serif" }}
          >
            Something went wrong
          </h2>

          <p className="text-slate-500 mb-8">
            {pageError}
          </p>

          <button
            onClick={() => navigate("/dashboard")}
            className="px-6 py-3 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition"
          >
            Back to Dashboard
          </button>

        </div>

      </div>
    );
  }

  //---------------------------------------------
  // Current Step
  //---------------------------------------------

  function renderStep() {
    switch (step) {
      case 0:
        return (
          <PersonalStep
            data={personal}
            setData={setPersonal}
            errors={errors}
            student={student}
          />
        );

      case 1:
        return (
          <AcademicStep
            data={academic}
            setData={setAcademic}
            errors={errors}
          />
        );

      case 2:
        return (
          <MHTCETStep
            data={mhtcet}
            setData={setMhtcet}
            errors={errors}
          />
        );

      case 3:
        return (
          <PreferenceStep
            data={preferences}
            setData={setPreferences}
            errors={errors}
          />
        );

      case 4:
        return (
          <ReviewStep
            student={student}
            personal={personal}
            academic={academic}
            mhtcet={mhtcet}
            preferences={preferences}
          />
        );

      default:
        return null;
    }
  }

  //---------------------------------------------
  // UI
  //---------------------------------------------

  return (
    <FormLayout>

      {/* Back */}

      <button
        onClick={() => navigate("/dashboard")}
        className="mb-8 text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
      >
        ← Back to Dashboard
      </button>

      {/* Heading */}

      <div className="mb-8">

        <p className="uppercase tracking-[3px] text-xs font-bold text-blue-600">
          Profile Completion
        </p>

        <h1
          className="text-4xl font-black text-slate-900 mt-2"
          style={{ fontFamily: "Syne,sans-serif" }}
        >
          Complete Your Profile
        </h1>

        <p className="text-slate-500 mt-3 max-w-2xl leading-7">
          Complete your counselling profile to unlock your
          confirmation PDF and receive personalised CAP
          guidance from our team.
        </p>

      </div>

      {/* Stepper */}

      <ProgressStepper
        currentStep={step}
        totalSteps={STEP_TITLES.length}
        titles={STEP_TITLES}
      />

      {/* Step */}

      <div className="mt-10">

        {renderStep()}

      </div>

      {/* Navigation */}

      <NavigationButtons
        currentStep={step}
        totalSteps={STEP_TITLES.length}
        loading={saving}
        onPrevious={previousStep}
        onNext={nextStep}
onSubmit={async () => {
    const result = await submitProfile();

    if (result?.success) {
      await refreshStudent();
      navigate("/dashboard");
    }
  }}
      />

    </FormLayout>
  );
}