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
import { Loader2, Calendar, LineChart, Info } from "lucide-react";
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
  { top: 35.27, left: 82.16 },
  { top: 18.64, left: 63.29 },
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
        className="bg-gradient-to-r from-sky-100 to-teal-100 dark:from-sky-900/30 dark:to-teal-900/30 w-24 h-24 rounded-full flex items-center justify-center mb-6"
      >
        <LineChart className="w-10 h-10 text-teal-600 dark:text-teal-400" />
      </motion.div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">Belum Ada Prediksi</h3>
      <p className="text-gray-600 dark:text-gray-400 text-center max-w-xs">
        Pilih tahun dan bulan pada form di sebelah kiri untuk melihat prediksi harga beras.
      </p>
    </div>
  );

  const LoadingDisplay = () => (
    <div className="flex flex-col items-center justify-center h-full min-h-[400px]">
      <motion.div 
        className="w-16 h-16 rounded-full border-4 border-t-teal-600 border-sky-400/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />
      <p className="text-gray-600 dark:text-gray-300 mt-6 font-medium">Memproses prediksi...</p>
    </div>
  );

  return (
    <div className="relative w-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-20 min-h-screen overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-left splash */}
        <motion.div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-teal-400/20 to-cyan-500/15 dark:from-teal-600/15 dark:to-cyan-600/10 blur-3xl"
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
          className="absolute top-10 right-0 w-80 h-80 rounded-full bg-gradient-to-tl from-blue-300/20 to-sky-400/20 dark:from-blue-500/15 dark:to-sky-600/15 blur-3xl"
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

        {/* More background elements - keeping all existing ones */}
        <motion.div
          className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-sky-400/20 to-indigo-300/20 dark:from-sky-600/15 dark:to-indigo-500/15 blur-3xl"
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

        <motion.div
          className="absolute bottom-20 -right-32 w-96 h-96 rounded-full bg-gradient-to-l from-indigo-400/20 to-teal-500/20 dark:from-indigo-600/15 dark:to-teal-600/15 blur-3xl"
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

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-gradient-to-tr from-cyan-200/15 to-sky-300/10 dark:from-cyan-500/10 dark:to-sky-500/5 blur-3xl"
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
              className="absolute w-2 h-2 rounded-full bg-teal-500/30 dark:bg-teal-400/30"
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

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-sky-600 dark:from-teal-400 dark:to-sky-400">
            Rice Price Predictor
          </span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Select a year and month to generate accurate rice price forecasts
          using our advanced machine learning model
        </motion.p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column - Prediction Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-slate-900/10 border border-slate-100/80 dark:border-slate-700/30 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-teal-600 to-sky-600 dark:from-teal-700 dark:to-sky-700 text-white p-6">
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <LineChart className="h-6 w-6" />
                    Prediksi Harga Beras
                  </CardTitle>
                  <CardDescription className="text-teal-100 dark:text-sky-100 mt-2">
                    Masukkan tahun dan bulan untuk memprediksi harga beras
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
                            <FormLabel className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
                              <Calendar className="h-4 w-4 text-teal-600 dark:text-teal-400" />{" "}
                              Tahun
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="bg-white/70 dark:bg-slate-800/70 border-slate-200 dark:border-slate-700">
                                  <SelectValue placeholder="Pilih tahun" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="max-h-[300px] bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm">
                                {yearOptions.map((year) => (
                                  <SelectItem key={year} value={year.toString()}>
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
                            <FormLabel className="flex items-center gap-1 text-gray-700 dark:text-gray-300">
                              <Calendar className="h-4 w-4 text-sky-600 dark:text-sky-400" />{" "}
                              Bulan
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="bg-white/70 dark:bg-slate-800/70 border-slate-200 dark:border-slate-700">
                                  <SelectValue placeholder="Pilih bulan" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm">
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
                    >
                      <Button
                        type="submit"
                        className="w-full font-medium bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 dark:from-teal-600 dark:to-sky-600 dark:hover:from-teal-500 dark:hover:to-sky-500 text-white border-0 shadow-md shadow-teal-500/20 dark:shadow-teal-400/10"
                        disabled={loading}
                      >
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Memproses...
                          </>
                        ) : (
                          "Prediksi Harga"
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="px-6 py-4 bg-gray-50/80 dark:bg-slate-800/40 border-t border-gray-100 dark:border-slate-700/50">
                <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                  <Info className="h-3 w-3 mr-1" />
                  Prediksi diperbarui berdasarkan data historis terbaru
                </div>
              </CardFooter>
            </Card>

            {/* Error message stays under the form */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-red-50/80 dark:bg-red-900/20 backdrop-blur-sm border border-red-200/50 dark:border-red-700/30 text-red-700 dark:text-red-300 rounded-lg"
              >
                <p className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Error: {error}
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
              <Card className="bg-gradient-to-br from-sky-50 to-teal-50 dark:from-sky-900/20 dark:to-teal-900/20 border-0 shadow-md">
                <CardContent className="p-4 flex items-start">
                  <div className="bg-sky-100 dark:bg-sky-800/30 p-2 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-600 dark:text-sky-400">
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 16v-4"></path>
                      <path d="M12 8h.01"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-sky-800 dark:text-sky-300">Tentang Prediksi</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                      Model prediksi harga beras ini menggunakan metode machine learning dengan data historis 5 tahun terakhir dan mempertimbangkan faktor musiman.
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
            <Card className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl shadow-lg border border-slate-100/80 dark:border-slate-700/30 overflow-hidden h-full">
              <CardHeader className="bg-gradient-to-r from-sky-600 to-teal-600 dark:from-sky-700 dark:to-teal-700 text-white p-6">
                <CardTitle className="text-xl flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                  Hasil Prediksi
                </CardTitle>
                <CardDescription className="text-sky-100 dark:text-teal-100">
                  {predictions 
                    ? `Prediksi harga untuk ${months[parseInt(form.getValues().month) - 1]} ${form.getValues().year}`
                    : 'Visualisasi hasil prediksi akan muncul di sini'}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="p-5">
                {loading ? (
                  <LoadingDisplay />
                ) : predictions && !error ? (
                  <PredictionResults data={{ predictions, ...form.getValues() }} />
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