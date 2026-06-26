import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../utils/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const refreshStudent = async () => {
  try {
    const { data } = await api.get("/student/profile");
    setStudent(data.student);
  } catch (err) {
    console.error(err);
  }
};

useEffect(() => {

  const token = localStorage.getItem("token");

  if (token) {

    api.defaults.headers.common["Authorization"] =
      `Bearer ${token}`;

    refreshStudent()
      .catch(() => {

        localStorage.removeItem("token");

        delete api.defaults.headers.common.Authorization;

      })
      .finally(() => setLoading(false));

  } else {

    setLoading(false);

  }

}, []);

  const login = (token, studentData) => {
    localStorage.setItem('token', token);
    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    setStudent(studentData);
  };

  const logout = () => {
    localStorage.removeItem('token');
    delete api.defaults.headers.common['Authorization'];
    setStudent(null);
  };

  return (
    <AuthContext.Provider
  value={{
    student,
    login,
    logout,
    loading,
    setStudent,
    refreshStudent,
  }}
>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
