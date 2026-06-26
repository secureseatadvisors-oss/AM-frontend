import { useState } from "react";

import profileApi from "../services/profileApi";
import { validateStep } from "../utils/validation";

const PERSONAL_INITIAL = {
  gender: "",
  date_of_birth: "",
  district: "",
  category: "",
  subcategory: "",
  candidate_type: "",
  domicile: false,
  ews: false,
  tfws: false,
  minority: false,
  pwd: false,
};

const ACADEMIC_INITIAL = {
  board: "",
  pcm_total: "",
  pcm_percentage: "",
  jee_percentile: "",
  jee_rank: "",
};

const CET_INITIAL = {
  physics_percentile: "",
  chemistry_percentile: "",
  mathematics_percentile: "",
  overall_percentile: "",
  general_rank: "",
  category_rank: "",
};

const PREFERENCE_INITIAL = {
  preferred_branches: [],
  preferred_districts: [],
};

export default function useProfileForm() {

  //---------------------------------------
  // Loading
  //---------------------------------------

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  //---------------------------------------
  // Step
  //---------------------------------------

  const [step, setStep] = useState(0);

  //---------------------------------------
  // Errors
  //---------------------------------------

  const [errors, setErrors] = useState({});

  //---------------------------------------
  // Form State
  //---------------------------------------

  const [personal, setPersonal] =
    useState(PERSONAL_INITIAL);

  const [academic, setAcademic] =
    useState(ACADEMIC_INITIAL);

  const [mhtcet, setMhtcet] =
    useState(CET_INITIAL);

  const [preferences, setPreferences] =
    useState(PREFERENCE_INITIAL);

  //---------------------------------------
  // Helper
  //---------------------------------------

  function clearErrors() {
    setErrors({});
  }

  function resetForm() {

    setPersonal(PERSONAL_INITIAL);

    setAcademic(ACADEMIC_INITIAL);

    setMhtcet(CET_INITIAL);

    setPreferences(PREFERENCE_INITIAL);

    setErrors({});

    setStep(0);

  }


    //---------------------------------------
  // Load Existing Profile
  //---------------------------------------

  async function loadProfile() {
    try {
      setLoading(true);

      const res = await profileApi.getProfile();

      const profile = res?.data || {};

      //-----------------------------------
      // Personal
      //-----------------------------------

      if (profile.personal) {
        setPersonal({
          ...PERSONAL_INITIAL,
          ...profile.personal,
        });
      }

      //-----------------------------------
      // Academic
      //-----------------------------------

      if (profile.academic) {
        setAcademic({
          ...ACADEMIC_INITIAL,
          ...profile.academic,
        });
      }

      //-----------------------------------
      // CET
      //-----------------------------------

      if (profile.mhtcet) {
        setMhtcet({
          ...CET_INITIAL,
          ...profile.mhtcet,
        });
      }

      //-----------------------------------
      // Preferences
      //-----------------------------------

      if (profile.preferences) {
        setPreferences({
          ...PREFERENCE_INITIAL,
          preferred_branches:
            profile.preferences.preferred_branches || [],
          preferred_districts:
            profile.preferences.preferred_districts || [],
        });
      }

      //-----------------------------------
      // Resume Previous Progress
      //-----------------------------------

      if (typeof profile.currentStep === "number") {
        setStep(profile.currentStep);
      }

      clearErrors();
    } catch (error) {
      console.error("Profile loading failed", error);
      throw error;
    } finally {
      setLoading(false);
    }
  }

  //---------------------------------------
  // Save Draft (Optional)
  //---------------------------------------

  async function saveDraft() {
    try {
      await profileApi.saveDraft({
        currentStep: step,
        personal,
        academic,
        mhtcet,
        preferences,
      });
    } catch (err) {
      console.error("Draft save failed", err);
    }
  }

  //---------------------------------------
  // Helpers
  //---------------------------------------

  function getFormData() {
    return {
      personal,
      academic,
      mhtcet,
      preferences,
    };
  }

  function updateStep(newStep) {
    setStep(newStep);
  }

    //---------------------------------------
  // Validation
  //---------------------------------------

  function validateCurrentStep() {
    const validationErrors = validateStep(step, {
      personal,
      academic,
      mhtcet,
      preferences,
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return false;
    }

    setErrors({});
    return true;
  }

  //---------------------------------------
  // Next Step
  //---------------------------------------

  async function nextStep() {

    const valid = validateCurrentStep();

    if (!valid) return;

    const next = Math.min(step + 1, 4);

    setStep(next);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    //-----------------------------------
    // Save progress
    //-----------------------------------

    try {
      await profileApi.saveDraft({

        currentStep: next,

        personal,

        academic,

        mhtcet,

        preferences,

      });
    } catch (err) {
      console.error("Unable to save draft", err);
    }

  }

  //---------------------------------------
  // Previous Step
  //---------------------------------------

  function previousStep() {

    const prev = Math.max(step - 1, 0);

    setStep(prev);

    clearErrors();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  }

  //---------------------------------------
  // Jump To Step
  //---------------------------------------

  function goToStep(index) {

    if (index < 0) return;

    if (index > 4) return;

    setStep(index);

    clearErrors();

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  }

  //---------------------------------------
  // Check Completion
  //---------------------------------------

  function isProfileComplete() {

    return (

      personal.gender &&
      personal.date_of_birth &&
      personal.district &&
      personal.category &&

      academic.board &&
      academic.pcm_percentage &&

      mhtcet.physics_percentile &&
      mhtcet.chemistry_percentile &&
      mhtcet.mathematics_percentile &&
      mhtcet.overall_percentile &&
      mhtcet.general_rank &&

      preferences.preferred_branches.length > 0 &&
      preferences.preferred_districts.length > 0

    );

  }

    //---------------------------------------
  // Submit Profile
  //---------------------------------------

  async function submitProfile() {

    //-----------------------------------
    // Final Validation
    //-----------------------------------

    const valid = validateCurrentStep();

    if (!valid) return;

    if (!isProfileComplete()) {

      setErrors({
        submit:
          "Please complete all required information before submitting.",
      });

      return;

    }

    try {

      setSaving(true);

      setErrors({});

      //-----------------------------------
      // Payload
      //-----------------------------------

      const payload = {

        personal,

        academic: {

          ...academic,

          pcm_total:
            academic.pcm_total === ""
              ? null
              : Number(academic.pcm_total),

          pcm_percentage:
            academic.pcm_percentage === ""
              ? null
              : Number(academic.pcm_percentage),

          jee_percentile:
            academic.jee_percentile === ""
              ? null
              : Number(academic.jee_percentile),

          jee_rank:
            academic.jee_rank === ""
              ? null
              : Number(academic.jee_rank),

        },

        mhtcet: {

          ...mhtcet,

          physics_percentile:
            Number(mhtcet.physics_percentile),

          chemistry_percentile:
            Number(mhtcet.chemistry_percentile),

          mathematics_percentile:
            Number(mhtcet.mathematics_percentile),

          overall_percentile:
            Number(mhtcet.overall_percentile),

          general_rank:
            Number(mhtcet.general_rank),

          category_rank:
            mhtcet.category_rank === ""
              ? null
              : Number(mhtcet.category_rank),

        },

        preferences,

        profileCompleted: true,

      };

      //-----------------------------------
      // API
      //-----------------------------------

      const response =
        await profileApi.submitProfile(payload);

      //-----------------------------------
      // Success
      //-----------------------------------

      if (!response.success)
        throw new Error("Submission failed.");

      //-----------------------------------
      // Save final draft
      //-----------------------------------

      await profileApi.saveDraft({

        currentStep: 4,

        submitted: true,

      });

      //-----------------------------------
      // Return success
      //-----------------------------------

      return {

        success: true,

        profileCompleted: true,

      };

    } catch (err) {

      console.error("Submit Error:", err.response?.data);


      setErrors({

        submit:
          err?.response?.data?.message ||
          err.message ||
          "Unable to submit profile.",

      });

      return {

        success: false,

      };

    } finally {

      setSaving(false);

    }

  }

    //---------------------------------------
  // Exports
  //---------------------------------------

  return {

    //-----------------------------------
    // Loading
    //-----------------------------------

    loading,
    saving,

    //-----------------------------------
    // Step
    //-----------------------------------

    step,
    updateStep,
    nextStep,
    previousStep,
    goToStep,

    //-----------------------------------
    // Personal
    //-----------------------------------

    personal,
    setPersonal,

    //-----------------------------------
    // Academic
    //-----------------------------------

    academic,
    setAcademic,

    //-----------------------------------
    // CET
    //-----------------------------------

    mhtcet,
    setMhtcet,

    //-----------------------------------
    // Preferences
    //-----------------------------------

    preferences,
    setPreferences,

    //-----------------------------------
    // Errors
    //-----------------------------------

    errors,
    setErrors,
    clearErrors,

    //-----------------------------------
    // Actions
    //-----------------------------------

    loadProfile,
    submitProfile,
    saveDraft,

    //-----------------------------------
    // Helpers
    //-----------------------------------

    getFormData,
    isProfileComplete,
    resetForm,

  };

}