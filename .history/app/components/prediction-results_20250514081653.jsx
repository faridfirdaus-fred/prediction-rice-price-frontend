import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import PriceCard from "./price-card";
import PriceChart from "./price-chart";
import { useEffect } from "react";
import usePredictions from "../../hooks/use-predictions";

const PredictionResults = ({ data }) => {
  const { historical, getHistorical } = usePredictions();

  useEffect(() => {
    getHistorical();
  }, []);

  if (!data || !data.predictions) {
    return null;
  }

  const { year, month, predictions } = data;

  const monthNames = [
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

  const monthName = monthNames[month - 1];

  // Transform historical data for the chart
  const transformedHistoricalData = historical
    ? Object.entries(historical).reduce((acc, [quality, data]) => {
        data.forEach((item) => {
          const key = `${item.month}/${item.year}`;
          if (!acc[key]) {
            acc[key] = {
              month: item.month,
              year: item.year,
              premium: 0,
              medium: 0,
              low_quality: 0,
            };
          }
          acc[key][
            quality === "premium"
              ? "premium"
              : quality === "medium"
              ? "medium"
              : "low_quality"
          ] = item.price;
        });
        return acc;
      }, {})
    : {};

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative z-10 space-y-8"
    >
      {/* Page Title with improved styling */}
      <motion.div variants={item} className="mb-4">
        <div className="inline-block">
          <h1 className="text-2xl md:text-3xl font-bold mb-1">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-sky-600 dark:from-teal-400 dark:to-sky-400">
              Hasil Prediksi Harga Beras: {monthName} {year}
            </span>
          </h1>
          <div className="h-1 w-1/3 bg-gradient-to-r from-teal-500 to-sky-500 rounded-full"></div>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mt-3">
          Prediksi harga beras berdasarkan data historis dan model machine
          learning
        </p>
      </motion.div>

      {/* Side by Side Layout with enhanced card styling */}
      <motion.div variants={item} className="flex flex-col lg:flex-row gap-8">
        {/* Price Cards Column */}
        <div className="w-full lg:w-1/3 space-y-5">
          <Card className="overflow-hidden rounded-xl border-0 shadow-lg bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
            <CardHeader className="bg-gradient-to-r from-teal-600 to-sky-600 dark:from-teal-700 dark:to-sky-700 p-5">
              <CardTitle className="text-lg font-bold text-white flex items-center">
                <span className="bg-white/20 p-2 rounded-lg mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-bar-chart-2"
                  >
                    <line x1="18" x2="18" y1="20" y2="10"></line>
                    <line x1="12" x2="12" y1="20" y2="4"></line>
                    <line x1="6" x2="6" y1="20" y2="14"></line>
                  </svg>
                </span>
                Perbandingan Harga Beras
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5">
              <div className="space-y-4">
                {Object.entries(predictions).map(([quality, data], index) => (
                  <motion.div
                    key={quality}
                    variants={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.2 },
                    }}
                  >
                    <PriceCard
                      quality={quality}
                      estimatedPrice={data.estimated_price}
                      previousPrice={data.previous_price}
                    />
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chart Column */}
        <Card className="w-full lg:w-2/3 overflow-hidden rounded-xl shadow-lg border-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
          <CardHeader className="bg-gradient-to-r from-teal-600 to-sky-600 dark:from-teal-700 dark:to-sky-700 p-5">
            <CardTitle className="text-lg font-bold text-white flex items-center">
              <span className="bg-white/20 p-2 rounded-lg mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-line-chart"
                >
                  <path d="M3 3v18h18"></path>
                  <path d="m19 9-5 5-4-4-3 3"></path>
                </svg>
              </span>
              Grafik Perbandingan Harga
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5 bg-white/50 dark:bg-slate-800/50">
            <PriceChart
              data={{
                premium: predictions.premium,
                medium: predictions.medium,
                low_quality: predictions.low_quality,
                month: month,
                year: year,
              }}
              historicalData={Object.values(transformedHistoricalData)}
            />
          </CardContent>
        </Card>
      </motion.div>

      {/* Decorative elements with enhanced styling */}
      <div className="absolute -z-10 top-20 left-10 w-64 h-64 bg-gradient-to-r from-teal-400/10 to-cyan-500/10 dark:from-teal-600/10 dark:to-cyan-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-10 right-10 w-72 h-72 bg-gradient-to-r from-sky-400/10 to-indigo-500/10 dark:from-sky-600/10 dark:to-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-gradient-to-r from-cyan-400/5 to-sky-500/5 dark:from-cyan-600/5 dark:to-sky-500/5 rounded-full blur-3xl"></div>
    </motion.div>
  );
};

export default PredictionResults;
