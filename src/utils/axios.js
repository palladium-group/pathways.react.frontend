import axios from "axios";

const axiosInstance = axios.create({
  headers: {
    "Content-type": "application/json",
  },
});

axios.interceptors.request.use((config) => {
  try {
    const token = localStorage.getItem("accessToken");
    if (config.url !== "/auth/sign-in") {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
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
