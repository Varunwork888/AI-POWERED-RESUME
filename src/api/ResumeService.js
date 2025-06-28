import axios from "axios";

export const baseURLL = "https://ai-powered-resume-backend-8.onrender.com";

export const axiosInstance = axios.create({
  baseURL: baseURLL,
});

export const generateResume = async (description) => {
  const response = await axiosInstance.post("/api/v1/resume/generate", {
    userDescription: description,
  });

  return response.data;
};
