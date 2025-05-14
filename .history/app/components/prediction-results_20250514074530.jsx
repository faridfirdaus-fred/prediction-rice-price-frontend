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
      className="relative z-10 space-y-6"
    >
      {/* Page Title */}
      <motion.div variants={item} className="mb-2">
        <h1 className="text-2xl md:text-3xl font-bold text-amber-800 dark:text-amber-400">
          Hasil Prediksi Harga Beras: {monthName} {year}
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mt-1">
          Prediksi harga beras berdasarkan data historis dan model machine
          learning
        </p>
      </motion.div>

      {/* Price Chart Card */}
      <motion.div variants={item}>
        <Card className="backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border border-white/20 dark:border-slate-700/30 shadow-xl rounded-xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-amber-600 to-yellow-500 dark:from-amber-700 dark:to-yellow-600">
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
          <CardContent className="p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-4 shadow-md border border-amber-100/50 dark:border-amber-900/20"
            >
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
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Price Comparison Card */}
      <motion.div variants={item}>
        <Card className="backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border border-white/20 dark:border-slate-700/30 shadow-xl rounded-xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-amber-600 to-yellow-500 dark:from-amber-700 dark:to-yellow-600">
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
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {Object.entries(predictions).map(([quality, data], index) => (
                <motion.div
                  key={quality}
                  variants={item}
                  className="h-full"
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
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-amber-400/10 dark:bg-amber-700/10 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 bottom-10 right-10 w-40 h-40 bg-yellow-400/10 dark:bg-yellow-700/10 rounded-full blur-3xl"></div>
      <div className="absolute -z-10 top-40 right-20 w-36 h-36 bg-orange-400/5 dark:bg-orange-700/5 rounded-full blur-3xl"></div>
    </motion.div>
  );
};

export default PredictionResults;
