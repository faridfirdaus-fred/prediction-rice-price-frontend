import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";

const PriceCard = ({ quality, estimatedPrice, previousPrice }) => {
  const priceDifference = estimatedPrice - previousPrice;
  const percentageChange = ((priceDifference / previousPrice) * 100).toFixed(2);
  const isIncrease = priceDifference > 0;

  const qualityDisplayNames = {
    premium: "Premium",
    medium: "Medium",
    low_quality: "Kualitas Rendah",
  };

  // Gradient color for header based on quality
  const headerGradient =
    quality === "premium"
      ? "bg-gradient-to-br from-amber-200 via-amber-50 to-white"
      : quality === "medium"
      ? "bg-gradient-to-br from-sky-200 via-emerald-50 to-white"
      : "bg-gradient-to-br from-blue-200 via-blue-50 to-white";

  // Badge color
  const badgeClass = isIncrease
    ? "bg-gradient-to-r from-amber-200 to-amber-400 text-amber-800 shadow"
    : "bg-gradient-to-r from-sky-200 to-sky-400 text-sky-800 shadow";

  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="h-full"
    >
      <Card className="shadow-xl border-0 bg-white rounded-2xl h-full">
        <CardHeader className={`pb-2 rounded-t-2xl ${headerGradient}`}>
          <CardTitle className="text-lg flex items-center justify-between text-gray-900">
            {qualityDisplayNames[quality]}
            <motion.div
              whileHover={{ scale: 1.1 }}
              className={`ml-2 ${badgeClass} px-2 py-1 rounded-full flex items-center gap-1 text-sm font-semibold`}
            >
              {isIncrease ? (
                <ArrowUp className="h-3 w-3 mr-1" />
              ) : (
                <ArrowDown className="h-3 w-3 mr-1" />
              )}
              {Math.abs(percentageChange)}%
            </motion.div>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Harga Prediksi</p>
              <motion.p
                className="text-md font-bold text-gray-900"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Rp{" "}
                {estimatedPrice.toLocaleString("id-ID", {
                  minimumFractionDigits: 0,
                })}
              </motion.p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Harga Bulan Sebelumnya
              </p>
              <p className="text-lg text-gray-700">
                Rp{" "}
                {previousPrice.toLocaleString("id-ID", {
                  minimumFractionDigits: 0,
                })}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default PriceCard;
