import React, { useState } from "react";
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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PriceChart = ({ data }) => {
  const [chartType, setChartType] = useState("line");

  // Transform data for the chart
  const chartData = [
    {
      name: "Bulan Lalu",
      Premium: data.premium?.previous_price,
      Medium: data.medium?.previous_price,
      "Kualitas Rendah": data.low_quality?.previous_price,
    },
    {
      name: "Bulan Ini (Prediksi)",
      Premium: data.premium?.estimated_price,
      Medium: data.medium?.estimated_price,
      "Kualitas Rendah": data.low_quality?.estimated_price,
    },
  ];

  return (
    <div className="w-full">
      <Tabs defaultValue="line" onValueChange={setChartType} className="mb-4">
        <TabsList className="grid w-full max-w-xs grid-cols-2">
          <TabsTrigger value="line">Line Chart</TabsTrigger>
          <TabsTrigger value="area">Area Chart</TabsTrigger>
        </TabsList>
      </Tabs>

      <motion.div
        key={chartType}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="w-full h-72"
      >
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "line" ? (
            <LineChart
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" />
              <YAxis
                tickFormatter={(value) =>
                  new Intl.NumberFormat("id-ID", {
                    notation: "compact",
                    compactDisplay: "short",
                  }).format(value)
                }
              />
              <Tooltip
                formatter={(value) =>
                  new Intl.NumberFormat("id-ID").format(value)
                }
                labelStyle={{ fontWeight: "bold" }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="Premium"
                stroke="#f59e0b"
                strokeWidth={2}
                dot={{ r: 6 }}
                activeDot={{
                  r: 8,
                  fill: "#f59e0b",
                  stroke: "white",
                  strokeWidth: 2,
                }}
              />
              <Line
                type="monotone"
                dataKey="Medium"
                stroke="#10b981"
                strokeWidth={2}
                dot={{ r: 6 }}
                activeDot={{
                  r: 8,
                  fill: "#10b981",
                  stroke: "white",
                  strokeWidth: 2,
                }}
              />
              <Line
                type="monotone"
                dataKey="Kualitas Rendah"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={{ r: 6 }}
                activeDot={{
                  r: 8,
                  fill: "#3b82f6",
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
              <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
              <XAxis dataKey="name" />
              <YAxis
                tickFormatter={(value) =>
                  new Intl.NumberFormat("id-ID", {
                    notation: "compact",
                    compactDisplay: "short",
                  }).format(value)
                }
              />
              <Tooltip
                formatter={(value) =>
                  new Intl.NumberFormat("id-ID").format(value)
                }
                labelStyle={{ fontWeight: "bold" }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="Premium"
                stackId="1"
                stroke="#f59e0b"
                fill="#fef3c7"
              />
              <Area
                type="monotone"
                dataKey="Medium"
                stackId="2"
                stroke="#10b981"
                fill="#d1fae5"
              />
              <Area
                type="monotone"
                dataKey="Kualitas Rendah"
                stackId="3"
                stroke="#3b82f6"
                fill="#dbeafe"
              />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </motion.div>
    </div>
  );
};

export default PriceChart;
