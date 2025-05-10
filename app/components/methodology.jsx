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
      icon: <Database className="h-16 w-16 text-teal-600 dark:text-teal-400" />,
      title: "Data Collection",
      description:
        "Historical rice price data is collected from various government agricultural databases, market reports, and research institutions. This comprehensive dataset includes price fluctuations spanning multiple years across different regions.",
      color: "bg-teal-50 dark:bg-teal-950/40",
      accentColor: "from-teal-500 to-cyan-600",
    },
    {
      icon: <FilterX className="h-16 w-16 text-cyan-600 dark:text-cyan-400" />,
      title: "Data Preprocessing & Cleaning",
      description:
        "Raw data undergoes thorough cleaning to handle missing values, outliers, and inconsistencies. The dataset is then normalized and standardized to ensure optimal model performance and accuracy in predictions.",
      color: "bg-cyan-50 dark:bg-cyan-950/40",
      accentColor: "from-cyan-500 to-sky-600",
    },
    {
      icon: <FileCog className="h-16 w-16 text-sky-600 dark:text-sky-400" />,
      title: "Feature Engineering",
      description:
        "Key features that influence rice prices are identified and extracted, including seasonal patterns, weather conditions, supply metrics, demand factors, and macroeconomic indicators. This step enhances the model's predictive capabilities.",
      color: "bg-sky-50 dark:bg-sky-950/40",
      accentColor: "from-sky-500 to-blue-600",
    },
    {
      icon: (
        <BrainCircuit className="h-16 w-16 text-blue-600 dark:text-blue-400" />
      ),
      title: "Model Selection & Development",
      description:
        "Various machine learning algorithms are evaluated, including time series models (ARIMA, SARIMA), regression models, and advanced neural networks. The best-performing models are selected based on accuracy metrics and domain suitability.",
      color: "bg-blue-50 dark:bg-blue-950/40",
      accentColor: "from-blue-500 to-indigo-600",
    },
    {
      icon: (
        <LineChart className="h-16 w-16 text-indigo-600 dark:text-indigo-400" />
      ),
      title: "Model Training & Validation",
      description:
        "Selected models are trained on historical data with rigorous cross-validation to ensure reliability. Hyperparameter tuning is performed to optimize model performance and minimize prediction errors.",
      color: "bg-indigo-50 dark:bg-indigo-950/40",
      accentColor: "from-indigo-500 to-violet-600",
    },
    {
      icon: (
        <BarChart3 className="h-16 w-16 text-violet-600 dark:text-violet-400" />
      ),
      title: "Prediction & Interpretation",
      description:
        "Trained models generate rice price predictions for future time periods. Results are analyzed by domain experts to provide context and insights, helping stakeholders make informed decisions based on the predicted market trends.",
      color: "bg-violet-50 dark:bg-violet-950/40",
      accentColor: "from-violet-500 to-purple-600",
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

        {/* Middle-left splash */}
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

        {/* Bottom-right splash */}
        <motion.div
          className="absolute bottom-20 -right-32 w-96 h-96 rounded-full bg-gradient-to-l from-indigo-400/20 to-violet-500/20 dark:from-indigo-600/15 dark:to-violet-600/15 blur-3xl"
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

        {/* Small decorative particles - Using predefined positions */}
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

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-sky-600 dark:from-teal-400 dark:to-sky-400">
            Rice Price Prediction Methodology
          </span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 dark:text-gray-300 mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Our advanced data-driven approach combines statistical analysis with
          machine learning techniques to deliver accurate and reliable rice
          price forecasts
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/10 border border-slate-100/80 dark:border-slate-700/30 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Process number badge */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500/10 to-sky-500/15 dark:from-teal-500/15 dark:to-sky-500/20 flex items-center justify-center">
                <span className="text-lg font-bold text-teal-700 dark:text-teal-300">
                  {index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className={`p-4 rounded-2xl ${process.color} self-start`}>
                  {process.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
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
