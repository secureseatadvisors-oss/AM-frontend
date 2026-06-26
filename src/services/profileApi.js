import api from "../utils/api";

const profileApi = {

  async getProfile() {
    const { data } = await api.get(
      "/student/profile/details"
    );
    return data;
  },

  async updateProfile(payload) {
    const { data } = await api.put(
      "/student/profile/details",
      payload
    );
    return data;
  },

  async saveDraft(payload) {
    const { data } = await api.put(
      "/student/profile/details",
      payload
    );
    return data;
  },

  async submitProfile(payload) {
    const { data } = await api.post(
      "/student/profile/submit",
      payload
    );
    return data;
  },

};

export default profileApi;