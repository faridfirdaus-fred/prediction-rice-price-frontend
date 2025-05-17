"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Loader2, Calendar, LineChart, Info, BarChart2 } from "lucide-react";
import PredictionResults from "./prediction-results";
import usePredictions from "../../hooks/use-predictions";
import { useState } from "react";

// Predefined positions for decorative particles to prevent hydration errors
const particlePositions = [
  { top: 62.16, left: 13.52 },
  { top: 23.81, left: 34.5 },
  { top: 71.75, left: 14.23 },
  { top: 52.9, left: 67.93 },
  { top: 22.58, left: 12.23 },
  { top: 79.82, left: 62.96 },
  { top: 73.48, left: 47.51 },
  { top: 41.94, left: 53.89 },
];

const formSchema = z.object({
  year: z.string().min(1, "Tahun wajib diisi"),
  month: z.string().min(1, "Bulan wajib diisi"),
});

const PredictionForm = () => {
  const { predictions, loading, error, getPredictions } = usePredictions();
  const [submitted, setSubmitted] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      year: new Date().getFullYear().toString(),
      month: (new Date().getMonth() + 1).toString(),
    },
  });

  const onSubmit = async (data) => {
    setSubmitted(true);
    await getPredictions(parseInt(data.year), parseInt(data.month));
  };

  // Generate year options from 2024 to current year + 5
  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from(
    { length: currentYear - 2024 + 6 },
    (_, i) => 2024 + i
  );

  const months = [
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

  const NoDataDisplay = () => (
    <div className="flex flex-col items-center justify-center h-full min-h-[400px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-amber-100 to-yellow-100 dark:from-amber-900/30 dark:to-yellow-900/30 w-24 h-24 rounded-full flex items-center justify-center mb-6"
      >
        <BarChart2 className="w-10 h-10 text-amber-600 dark:text-amber-400" />
      </motion.div>
      <h3 className="text-xl font-bold text-amber-800 dark:text-amber-400 mb-3">
        Belum Ada Prediksi
      </h3>
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-xs">
        Silakan pilih tahun dan bulan pada form untuk melihat prakiraan harga
        beras terkini.
      </p>
    </div>
  );

  const LoadingDisplay = () => (
    <div className="flex flex-col items-center justify-center h-full min-h-[400px]">
      <motion.div
        className="w-16 h-16 rounded-full border-4 border-t-amber-600 border-yellow-400/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
      <p className="text-gray-600 dark:text-gray-300 mt-6 font-medium">
        Sedang memproses prediksi...
      </p>
    </div>
  );

  return (
    <div className="relative w-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-20 min-h-screen overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-left splash */}
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-amber-400/20 to-yellow-500/15 dark:from-amber-600/15 dark:to-yellow-600/10 blur-3xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: [0.8, 1.1, 1],
            y: [0, -8, 0, 8, 0],
          }}
          transition={{
            duration: 3,
            y: { repeat: Infinity, duration: 10, ease: "easeInOut" },
          }}
        />

        {/* Top-right splash */}
        <motion.div
          className="absolute top-10 right-0 w-80 h-80 rounded-full bg-gradient-to-tl from-orange-300/20 to-amber-400/20 dark:from-orange-500/15 dark:to-amber-600/15 blur-3xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: 0.8,
            scale: [0.9, 1.05, 0.9],
            x: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 2.5,
            delay: 0.4,
            x: { repeat: Infinity, duration: 12, ease: "easeInOut" },
          }}
        />

        {/* Middle-left splash */}
        <motion.div
          className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-amber-400/20 to-orange-300/20 dark:from-amber-600/15 dark:to-orange-500/15 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.7,
            rotate: [0, 5, 0, -5, 0],
            scale: [0.95, 1, 0.95],
          }}
          transition={{
            duration: 1.5,
            delay: 0.8,
            rotate: { repeat: Infinity, duration: 15, ease: "easeInOut" },
            scale: { repeat: Infinity, duration: 8, ease: "easeInOut" },
          }}
        />

        {/* Bottom-right splash */}
        <motion.div
          className="absolute bottom-20 -right-32 w-96 h-96 rounded-full bg-gradient-to-l from-orange-400/20 to-amber-500/20 dark:from-orange-600/15 dark:to-amber-600/15 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 0.8,
            y: [0, -15, 0, 15, 0],
          }}
          transition={{
            duration: 2,
            delay: 1.2,
            y: { repeat: Infinity, duration: 13, ease: "easeInOut" },
          }}
        />

        {/* Center splash */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-gradient-to-tr from-yellow-200/15 to-amber-300/10 dark:from-yellow-500/10 dark:to-amber-500/5 blur-3xl"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.6, 0.3, 0.6, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Small decorative particles */}
        <div className="absolute inset-0">
          {particlePositions.map((position, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-amber-500/30 dark:bg-amber-400/30"
              style={{
                top: `${position.top}%`,
                left: `${position.left}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 4 + (i % 5),
                repeat: Infinity,
                delay: i * 0.7,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mt-6 mx-auto px-6 max-w-7xl relative z-10">
        <motion.h2
          className="text-2xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-600 dark:from-amber-400 dark:to-yellow-400">
            Prediksi Harga Beras
          </span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Pilih tahun dan bulan untuk mendapatkan prakiraan harga beras akurat
          menggunakan sistem prediksi berbasis data historis
        </motion.p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Prediction Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl shadow-xl shadow-amber-100/20 dark:shadow-amber-900/5 border border-amber-100/50 dark:border-amber-700/20 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-amber-500 to-yellow-500 dark:from-amber-600 dark:to-yellow-600 p-6">
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CardTitle className="text-2xl flex items-center gap-2 text-white">
                    <span className="bg-white/20 p-2 rounded-lg">
                      <LineChart className="h-6 w-6" />
                    </span>
                    Form Prediksi
                  </CardTitle>
                  <CardDescription className="text-amber-100 dark:text-amber-100 mt-2">
                    Masukkan parameter waktu untuk memprediksi harga beras
                  </CardDescription>
                </motion.div>
              </CardHeader>
              <CardContent className="p-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="year"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-1 text-gray-700 dark:text-gray-300 font-medium">
                              <Calendar className="h-4 w-4 text-amber-600 dark:text-amber-400" />{" "}
                              Tahun
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="bg-white/70 dark:bg-slate-800/70 border-amber-200 dark:border-amber-700/30 focus:ring-amber-500/30 dark:focus:ring-amber-500/20 h-11">
                                  <SelectValue placeholder="Pilih tahun" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="max-h-[300px] bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-amber-200/50 dark:border-amber-800/30">
                                {yearOptions.map((year) => (
                                  <SelectItem
                                    key={year}
                                    value={year.toString()}
                                  >
                                    {year}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="month"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-1 text-gray-700 dark:text-gray-300 font-medium">
                              <Calendar className="h-4 w-4 text-amber-600 dark:text-amber-400" />{" "}
                              Bulan
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="bg-white/70 dark:bg-slate-800/70 border-amber-200 dark:border-amber-700/30 focus:ring-amber-500/30 dark:focus:ring-amber-500/20 h-11">
                                  <SelectValue placeholder="Pilih bulan" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-amber-200/50 dark:border-amber-800/30">
                                {months.map((month, index) => (
                                  <SelectItem
                                    key={index + 1}
                                    value={(index + 1).toString()}
                                  >
                                    {month}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage className="text-red-500" />
                          </FormItem>
                        )}
                      />
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-4"
                    >
                      <Button
                        type="submit"
                        className="w-full font-medium text-base bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 dark:from-amber-500 dark:to-yellow-400 dark:hover:from-amber-600 dark:hover:to-yellow-500 text-white border-0 shadow-lg shadow-amber-500/20 dark:shadow-amber-400/10 h-12 rounded-xl"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Memproses Prediksi...
                          </>
                        ) : (
                          "Mulai Prediksi Harga"
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="px-6 py-4 bg-gradient-to-r from-amber-50 to-yellow-50/70 dark:from-amber-900/20 dark:to-yellow-900/10 border-t border-amber-100 dark:border-amber-700/30">
                <div className="text-xs text-amber-800/80 dark:text-amber-400/80 flex items-center">
                  <Info className="h-3.5 w-3.5 mr-1.5" />
                  Data prediksi diperbarui secara berkala menggunakan sumber BPS
                  terbaru
                </div>
              </CardFooter>
            </Card>

            {/* Error message stays under the form */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-red-50/90 dark:bg-red-900/20 backdrop-blur-sm border border-red-200/80 dark:border-red-700/30 text-red-700 dark:text-red-300 rounded-lg shadow-sm"
              >
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Terjadi kesalahan: {error}
                </p>
              </motion.div>
            )}

            {/* Helpful information card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-6"
            >
              <Card className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/20 dark:to-yellow-900/20 border-0 shadow-md">
                <CardContent className="p-4 flex items-start">
                  <div className="bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-800/30 dark:to-yellow-800/20 p-2.5 rounded-full mr-3.5 mt-1 shadow-inner">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amber-600 dark:text-amber-400"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-amber-800 dark:text-amber-300">
                      Tentang Sistem Prediksi
                    </h4>
                    <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400 mt-1.5">
                      Model prediksi harga beras ini menggunakan interpolasi
                      polinomial cubis spline untuk penghalusan data dan regresi
                      polinomial untuk memprediksi data menggunakan data dari
                      BPS dari tahun 2013 - 2023.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Column - Results Display */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="h-full"
          >
            <Card className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl shadow-xl border border-amber-100/50 dark:border-amber-700/20 overflow-hidden h-full">
              <CardHeader className="bg-gradient-to-r from-yellow-500 to-amber-500 dark:from-yellow-600 dark:to-amber-600 p-5">
                <CardTitle className="text-lg font-bold text-white flex items-center">
                  <span className="bg-white/20 p-2 rounded-lg mr-3 shadow-inner">
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
                  Hasil Prakiraan Harga
                </CardTitle>
                <CardDescription className="text-amber-50/90">
                  {predictions
                    ? `Data prakiraan harga beras untuk ${
                        months[parseInt(form.getValues().month) - 1]
                      } ${form.getValues().year}`
                    : "Visualisasi hasil prediksi akan ditampilkan setelah memilih parameter"}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-5">
                {loading ? (
                  <LoadingDisplay />
                ) : predictions && !error ? (
                  <PredictionResults
                    data={{ predictions, ...form.getValues() }}
                  />
                ) : (
                  <NoDataDisplay />
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PredictionForm;
