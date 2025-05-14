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
    <motion.div variants={container} initial="hidden" animate="show">
      <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-blue-50">
        <CardHeader className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-t-lg">
          <CardTitle className="text-xl text-white">
            Hasil Prediksi: {monthName} {year}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg bg-white p-4 shadow-md mb-6"
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

            <h3 className="text-lg font-semibold mb-3">Perbandingan Harga</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(predictions).map(([quality, data], index) => (
                <motion.div key={quality} variants={item} className="h-full">
                  <PriceCard
                    quality={quality}
                    estimatedPrice={data.estimated_price}
                    previousPrice={data.previous_price}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PredictionResults;
