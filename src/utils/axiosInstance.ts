import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 

  // || 
  "https://wixel-server.liara.run",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
