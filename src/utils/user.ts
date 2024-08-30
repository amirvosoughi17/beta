import axiosInstance from "./axiosInstance";

export const fetchUser = async () => {
  try {
    const { data } = await axiosInstance.get("/api/auth/me");
    return data;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export const logout = async () => {
  try {
    await axiosInstance.post("/api/auth/logout");
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
