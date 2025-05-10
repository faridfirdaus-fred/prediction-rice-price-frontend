import axios from "axios";

export const fetchPredictions = async (year, month) => {
  // Remove trailing slash if exists
  const baseUrl = process.env.NEXT_PUBLIC_API_URL.endsWith("/")
    ? process.env.NEXT_PUBLIC_API_URL.slice(0, -1)
    : process.env.NEXT_PUBLIC_API_URL;

  const res = await axios.post(`${baseUrl}/predictions`, { year, month });
  return res.data;
};

export const fetchHistorical = async () => {
  // Remove trailing slash if exists
  const baseUrl = process.env.NEXT_PUBLIC_API_URL.endsWith("/")
    ? process.env.NEXT_PUBLIC_API_URL.slice(0, -1)
    : process.env.NEXT_PUBLIC_API_URL;

  const res = await axios.get(`${baseUrl}/historical`);
  return res.data;
};
