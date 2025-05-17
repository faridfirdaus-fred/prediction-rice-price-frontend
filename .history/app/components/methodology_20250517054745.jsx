"use client";

import { motion } from "framer-motion";
import {
  Database,
  FilterX,
  LineChart,
  BrainCircuit,
  BarChart3,
  FileCog,
} from "lucide-react";

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

export default function Methodology() {
  const processes = [
    {
      icon: (
        <Database className="h-16 w-16 text-amber-600 dark:text-amber-400" />
      ),
      title: "Pengumpulan Data",
      description:
        "Data historis harga beras dikumpulkan dari berbagai database pertanian pemerintah, khususnya Badan Pusat Statistik (BPS). Dataset komprehensif ini mencakup fluktuasi harga yang meliputi beberapa tahun di berbagai wilayah.",
      color: "bg-amber-50 dark:bg-amber-950/40",
      accentColor: "from-amber-500 to-yellow-600",
    },
    {
      icon: (
        <FilterX className="h-16 w-16 text-yellow-600 dark:text-yellow-400" />
      ),
      title: "Pra-pemrosesan & Pembersihan Data",
      description:
        "Data mentah menjalani pembersihan menyeluruh untuk menangani nilai yang hilang, pencilan, dan inkonsistensi. Dataset kemudian dinormalisasi dan distandarisasi untuk memastikan performa model dan akurasi prediksi yang optimal.",
      color: "bg-yellow-50 dark:bg-yellow-950/40",
      accentColor: "from-yellow-500 to-amber-600",
    },
    {
      icon: (
        <FileCog className="h-16 w-16 text-amber-600 dark:text-amber-400" />
      ),
      title: "Interpolasi Polinomial Kubis Spline",
      description:
        "Metode interpolasi polinomial kubis spline diterapkan untuk menghaluskan data historis. Teknik ini memungkinkan pemodelan yang lebih akurat dengan mengisi celah data dan mengurangi noise pada data asli.",
      color: "bg-amber-50 dark:bg-amber-950/40",
      accentColor: "from-amber-500 to-yellow-600",
    },
    {
      icon: (
        <BrainCircuit className="h-16 w-16 text-yellow-600 dark:text-yellow-400" />
      ),
      title: "Pengembangan Model Regresi Polinomial",
      description:
        "Model regresi polinomial digunakan untuk memodelkan tren harga beras. Derajat polinomial yang optimal dipilih berdasarkan analisis kesalahan prediksi untuk memastikan keseimbangan antara overfitting dan underfitting.",
      color: "bg-yellow-50 dark:bg-yellow-950/40",
      accentColor: "from-yellow-500 to-amber-600",
    },
    {
      icon: (
        <LineChart className="h-16 w-16 text-amber-600 dark:text-amber-400" />
      ),
      title: "Validasi Model & Analisis Kesalahan",
      description:
        "Model divalidasi menggunakan data historis dengan validasi silang yang ketat untuk memastikan keandalan. Penyetelan parameter dilakukan untuk mengoptimalkan kinerja model dan meminimalkan kesalahan prediksi.",
      color: "bg-amber-50 dark:bg-amber-950/40",
      accentColor: "from-amber-500 to-yellow-600",
    },
    {
      icon: (
        <BarChart3 className="h-16 w-16 text-yellow-600 dark:text-yellow-400" />
      ),
      title: "Prediksi & Interpretasi Hasil",
      description:
        "Model yang terlatih menghasilkan prediksi harga beras untuk periode waktu mendatang. Hasil dianalisis untuk memberikan konteks dan wawasan, membantu pengguna membuat keputusan berdasarkan tren pasar yang diprediksi.",
      color: "bg-yellow-50 dark:bg-yellow-950/40",
      accentColor: "from-yellow-500 to-amber-600",
    },
  ];

  return (
    <section
      id="methodology"
      className="relative bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 py-20 min-h-screen overflow-hidden"
    >
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

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-600 dark:from-amber-400 dark:to-yellow-400">
            Metodologi Prediksi Harga Beras
          </span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Pendekatan berbasis data yang mengkombinasikan analisis statistik
          dengan teknik interpolasi polinomial untuk menghasilkan prakiraan
          harga beras yang akurat dan andal
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-amber-100/20 dark:shadow-amber-900/5 border border-amber-100/50 dark:border-amber-700/20 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Process number badge */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/10 to-yellow-500/15 dark:from-amber-500/15 dark:to-yellow-500/20 flex items-center justify-center">
                <span className="text-lg font-bold text-amber-700 dark:text-amber-300">
                  {index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className={`p-4 rounded-2xl ${process.color} self-start`}>
                  {process.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="w-full h-1 mt-6 rounded-full bg-gradient-to-r opacity-60 dark:opacity-40"
                style={{
                  backgroundImage: `linear-gradient(to right, ${process.accentColor
                    .replace("from-", "")
                    .replace("to-", "")})`,
                }}
              ></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
