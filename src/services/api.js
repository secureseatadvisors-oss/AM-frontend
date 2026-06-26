import axios from 'axios';

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api' });

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('ss_token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  (r) => r,
  (err) => {
    if (err.response?.status === 401) {
      localStorage.removeItem('ss_token');
      window.location.href = '/login';
    }
    return Promise.reject(err);
  }
);

export default api;
export const authAPI = {
  register: (data) => api.post('/auth/register', data),
  login: (data) => api.post('/auth/login', data),
};
export const chatAPI = {
  send: (message) => api.post('/chat', { message }),
  history: () => api.get('/student/history'),
};
export const studentAPI = {
  getProfile: () => api.get('/student/profile'),
  updateProfile: (data) => api.post('/student/profile', data),
};
export const workflowAPI = {
  getStatus: () => api.get('/workflow/status'),
  updateStage: (data) => api.post('/workflow/update', data),
};
