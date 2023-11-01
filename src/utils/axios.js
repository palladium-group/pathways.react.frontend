import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "Content-type": "application/json",
  },
});

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  try {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (e) {
    console.log(e);
  }
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || "Something went wrong"),
);

export default axiosInstance;
