import axios from "axios";

const API = axios.create({
  baseURL: "/api",
});

export const fetchPortfolio = async () => {
  const { data } = await API.get("/portfolio");
  return data;
};

export const fetchStrategies = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/strategies");
    return response.data;
  } catch (error) {
    console.error("Error fetching strategies:", error);
    return [];
  }
};

export const fetchMarketUpdates = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/market-updates");
    return response.data;
  } catch (error) {
    console.error("Error fetching market updates:", error);
    return [];
  }
};

