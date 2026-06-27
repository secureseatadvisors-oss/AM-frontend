import api from "../utils/api";

export const chatAPI = {
  send(message) {
    return api.post("/ai/chat", {
      message,
    });
  },
};