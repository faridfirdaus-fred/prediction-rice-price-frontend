import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

const PriceCard = ({ quality, estimatedPrice, previousPrice }) => {
  const priceDifference = estimatedPrice - previousPrice;
  const percentageChange = ((priceDifference / previousPrice) * 100).toFixed(2);
  const isIncrease = priceDifference > 0;

  const qualityDisplayNames = {
    premium: "Premium",
    medium: "Medium",
    low_quality: "Kualitas Rendah",
  };

  // Background color based on quality
  const bgColor =
    quality === "premium"
      ? "bg-amber-50 dark:bg-amber-950/30"
      : quality === "medium"
      ? "bg-sky-50 dark:bg-sky-950/30"
      : "bg-blue-50 dark:bg-blue-950/30";

  // Badge color
  const badgeColor = isIncrease
    ? "bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300"
    : "bg-sky-100 dark:bg-sky-900/50 text-sky-800 dark:text-sky-300";

  return (
    <Card className={`overflow-hidden border-0 shadow-md ${bgColor}`}>
      <CardContent className="p-0">
        {/* Header with title and percentage */}
        <div className="flex justify-between items-center p-4 border-b border-gray-100 dark:border-gray-800">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
            {qualityDisplayNames[quality]}
          </h3>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`${badgeColor} px-3 py-1 rounded-full flex items-center text-sm font-semibold`}
          >
            {isIncrease ? (
              <ArrowUp className="h-3 w-3 mr-1" />
            ) : (
              <ArrowDown className="h-3 w-3 mr-1" />
            )}
            {Math.abs(percentageChange)}%
          </motion.div>
        </div>

        {/* Price content */}
        <div className="grid grid-cols-2 p-4 gap-x-4 gap-y-3">
          <div className="col-span-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Harga Prediksi
            </p>
            <motion.p
              className="text-lg font-bold text-gray-900 dark:text-gray-100 mt-1"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Rp
              {estimatedPrice.toLocaleString("id-ID", {
                minimumFractionDigits: 0,
              })}
            </motion.p>
          </div>
          <div className="col-span-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Harga Bulan Sebelumnya
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-1">
              Rp
              {previousPrice.toLocaleString("id-ID", {
                minimumFractionDigits: 0,
              })}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PriceCard;
