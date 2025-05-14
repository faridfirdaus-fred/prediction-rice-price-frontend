"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Area,
  AreaChart,
} from "recharts";
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs";

const PriceChart = ({ data, historicalData }) => {
  const [chartType, setChartType] = useState("line");

  // Fungsi untuk mengubah angka bulan ke nama bulan Indonesia
  const bulanIndo = [
    "",
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  // Ambil bulan & tahun dari data prediksi
  const predMonth = data?.month;
  const predYear = data?.year;
  const predMonthName =
    predMonth && predYear
      ? `${bulanIndo[predMonth]} ${predYear}`
      : "Bulan Ini (Prediksi)";

  // Hitung bulan & tahun sebelumnya
  let prevMonthName = "Bulan Lalu";
  if (predMonth && predYear) {
    let prevMonth = predMonth - 1;
    let prevYear = predYear;
    if (prevMonth < 1) {
      prevMonth = 12;
      prevYear = predYear - 1;
    }
    prevMonthName = `${bulanIndo[prevMonth]} ${prevYear}`;
  }

  // Transform and sort historical data
  const sortedHistoricalData = historicalData
    ? [...historicalData]
        .sort((a, b) => {
          // Convert to comparable format (YYYYMM)
          const dateA = a.year * 100 + a.month;
          const dateB = b.year * 100 + b.month;
          return dateA - dateB;
        })
        .map((item) => ({
          name: `${item.month}/${item.year}`,
          date: item.year * 100 + item.month, // For sorting
          Premium: item.premium,
          Medium: item.medium,
          "Kualitas Rendah": item.low_quality,
          type: "historical",
        }))
    : [];

  // Get the last 12 months of data
  const last12Months = sortedHistoricalData.slice(-12);

  // Transform data for the chart
  const chartData = [
    // Historical data points (last 12 months)
    ...last12Months,
    // Previous month
    {
      name: prevMonthName,
      date: 999999, // Ensure it's after historical data
      Premium: data.premium?.previous_price,
      Medium: data.medium?.previous_price,
      "Kualitas Rendah": data.low_quality?.previous_price,
      type: "previous",
    },
    // Current prediction
    {
      name: predMonthName,
      date: 9999999, // Ensure it's after previous month
      Premium: data.premium?.estimated_price,
      Medium: data.medium?.estimated_price,
      "Kualitas Rendah": data.low_quality?.estimated_price,
      type: "prediction",
    },
  ];

  // Custom tooltip to show different styles for different data types
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload;
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg ">
          <p className="font-bold mb-2">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: Rp {entry.value.toLocaleString("id-ID")}
            </p>
          ))}
          {dataPoint.type === "prediction" && (
            <p className="text-xs text-gray-500 mt-1">(Prediksi)</p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full">
      <Tabs defaultValue="line" onValueChange={setChartType} className="mb-4">
        <TabsList className="grid w-full max-w-xs grid-cols-2 bg-gradient-to-r from-amber-100 to-sky-100 rounded-lg shadow">
          <TabsTrigger value="line">Line Chart</TabsTrigger>
          <TabsTrigger value="area">Area Chart</TabsTrigger>
        </TabsList>
      </Tabs>

      <motion.div
        key={chartType}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full h-72 rounded-2xl  bg-white"
      >
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "line" ? (
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12 }}
                interval="preserveStartEnd"
              />
              <YAxis
                tickFormatter={(value) =>
                  new Intl.NumberFormat("id-ID", {
                    notation: "compact",
                    compactDisplay: "short",
                  }).format(value)
                }
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "#f59e0b11" }}
              />
              <Legend wrapperStyle={{ color: "#f59e0b", fontWeight: 500 }} />
              <Line
                type="monotone"
                dataKey="Premium"
                stroke="#f59e0b"
                strokeWidth={3}
                dot={{ r: 4, fill: "#f59e0b", stroke: "white", strokeWidth: 2 }}
                activeDot={{
                  r: 7,
                  fill: "#f59e0b",
                  stroke: "white",
                  strokeWidth: 2,
                }}
              />
              <Line
                type="monotone"
                dataKey="Medium"
                stroke="#0ea5e9"
                strokeWidth={3}
                dot={{ r: 4, fill: "#0ea5e9", stroke: "white", strokeWidth: 2 }}
                activeDot={{
                  r: 7,
                  fill: "#0ea5e9",
                  stroke: "white",
                  strokeWidth: 2,
                }}
              />
              <Line
                type="monotone"
                dataKey="Kualitas Rendah"
                stroke="#2563eb"
                strokeWidth={3}
                dot={{ r: 4, fill: "#2563eb", stroke: "white", strokeWidth: 2 }}
                activeDot={{
                  r: 7,
                  fill: "#2563eb",
                  stroke: "white",
                  strokeWidth: 2,
                }}
              />
            </LineChart>
          ) : (
            <AreaChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 12 }}
                interval="preserveStartEnd"
              />
              <YAxis
                tickFormatter={(value) =>
                  new Intl.NumberFormat("id-ID", {
                    notation: "compact",
                    compactDisplay: "short",
                  }).format(value)
                }
              />
              <Tooltip
                content={<CustomTooltip />}
                cursor={{ fill: "#0ea5e911" }}
              />
              <Legend wrapperStyle={{ color: "#0ea5e9", fontWeight: 500 }} />
              <Area
                type="monotone"
                dataKey="Premium"
                stackId="1"
                stroke="#f59e0b"
                fill="#fde68a"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="Medium"
                stackId="2"
                stroke="#0ea5e9"
                fill="#bae6fd"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="Kualitas Rendah"
                stackId="3"
                stroke="#2563eb"
                fill="#dbeafe"
                strokeWidth={2}
              />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default PriceChart;
