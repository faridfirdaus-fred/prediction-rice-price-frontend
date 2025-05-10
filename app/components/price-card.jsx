import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const PriceCard = ({ quality, estimatedPrice, previousPrice }) => {
  const priceDifference = estimatedPrice - previousPrice;
  const percentageChange = ((priceDifference / previousPrice) * 100).toFixed(2);
  const isIncrease = priceDifference > 0;

  const qualityDisplayNames = {
    premium: "Premium",
    medium: "Medium",
    low_quality: "Kualitas Rendah",
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className="shadow-md border-0 bg-white h-full">
        <CardHeader
          className={`pb-2 ${
            quality === "premium"
              ? "bg-gradient-to-br from-amber-50 to-white"
              : quality === "medium"
              ? "bg-gradient-to-br from-emerald-50 to-white"
              : "bg-gradient-to-br from-blue-50 to-white"
          }`}
        >
          <CardTitle className="text-lg flex items-center justify-between">
            {qualityDisplayNames[quality]}
            <Badge
              className={`${
                isIncrease
                  ? "bg-red-100 text-red-700 hover:bg-red-100"
                  : "bg-green-100 text-green-700 hover:bg-green-100"
              } ml-2`}
            >
              {isIncrease ? (
                <ArrowUp className="h-3 w-3 mr-1" />
              ) : (
                <ArrowDown className="h-3 w-3 mr-1" />
              )}
              {Math.abs(percentageChange)}%
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Harga Prediksi</p>
              <motion.p
                className="text-xl font-bold"
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
              <p className="text-sm text-muted-foreground">Harga Sebelumnya</p>
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
