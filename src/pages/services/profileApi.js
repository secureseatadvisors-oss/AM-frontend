import api from "../utils/api";

const profileApi = {

  //------------------------------------------------
  // Get Complete Profile
  //------------------------------------------------

  async getProfile() {

    const { data } = await api.get("/student/profile");

    return data;

  },

  //------------------------------------------------
  // Save Draft
  //------------------------------------------------

  async saveDraft(payload) {

    const { data } = await api.post(
      "/student/profile/draft",
      payload
    );

    return data;

  },

  //------------------------------------------------
  // Update Profile
  //------------------------------------------------

  async updateProfile(payload) {

    const { data } = await api.put(
      "/student/profile",
      payload
    );

    return data;

  },

  //------------------------------------------------
  // Submit Profile
  //------------------------------------------------

  async submitProfile(payload) {

    const { data } = await api.post(
      "/student/profile/submit",
      payload
    );

    return data;

  },

  //------------------------------------------------
  // Profile Status
  //------------------------------------------------

  async getStatus() {

    const { data } = await api.get(
      "/student/profile/status"
    );

    return data;

  }

};

export default profileApi;