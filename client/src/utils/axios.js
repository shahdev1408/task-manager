import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8800/api", // your backend URL
  withCredentials: true,
});

// Attach token to every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors (optional but recommended)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log("Unauthorized - redirect to login");
      // optional: redirect user
      // window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;