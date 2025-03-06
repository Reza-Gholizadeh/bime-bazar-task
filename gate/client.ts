import axios from "axios";

const client = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL || "https://front-end-task.bmbzr.ir",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
    withCredentials: true,
  },
});

client.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API Error:", error.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default client;
