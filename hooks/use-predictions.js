"use client"

import { useState } from "react";
import { fetchPredictions, fetchHistorical } from "../app/api/prediction";

const usePredictions = () => {
  const [predictions, setPredictions] = useState(null);
  const [historical, setHistorical] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getPredictions = async (year, month) => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchPredictions(year, month);
      setPredictions(data.predictions);
    } catch (err) {
      setError("Failed to fetch prediction.");
    } finally {
      setLoading(false);
    }
  };

  const getHistorical = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchHistorical();
      setHistorical(data.historical);
    } catch (err) {
      setError("Failed to fetch historical data.");
    } finally {
      setLoading(false);
    }
  };

  return {
    predictions,
    historical,
    loading,
    error,
    getPredictions,
    getHistorical,
  };
};

export default usePredictions;
