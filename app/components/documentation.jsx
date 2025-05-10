"use client";

import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  LineChart,
  PieChart,
  MoveDown,
  FileText,
  AlertCircle,
  HelpCircle,
  ChevronRight,
  BookOpen,
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

export default function Documentation() {
  const documentationSections = [
    {
      icon: <Search className="h-16 w-16 text-teal-600 dark:text-teal-400" />,
      title: "Selecting Time Period",
      description:
        "Begin by selecting the year and month for your rice price prediction. Our model supports predictions for both near-term forecasting and longer-term market projections up to 5 years in advance.",
      color: "bg-teal-50 dark:bg-teal-950/40",
      accentColor: "from-teal-500 to-cyan-600",
      steps: [
        "Click on the year dropdown menu and select a year",
        "Select the desired month from the month dropdown",
        "Our system supports predictions from 2024 to the current year plus 5 years",
      ],
    },
    {
      icon: <MoveDown className="h-16 w-16 text-cyan-600 dark:text-cyan-400" />,
      title: "Running the Prediction",
      description:
        "After selecting your desired time frame, run the prediction model with a single click. Our system processes your request using advanced machine learning algorithms to generate accurate rice price forecasts.",
      color: "bg-cyan-50 dark:bg-cyan-950/40",
      accentColor: "from-cyan-500 to-sky-600",
      steps: [
        "Click the 'Predict Price' button after selecting the time period",
        "Wait briefly while our model processes your request",
        "Results will appear automatically below the form",
      ],
    },
    {
      icon: <LineChart className="h-16 w-16 text-sky-600 dark:text-sky-400" />,
      title: "Understanding Linear Charts",
      description:
        "Our prediction results include interactive line charts that display predicted rice prices alongside historical trends. These visualizations help you understand market patterns and the context of the predictions.",
      color: "bg-sky-50 dark:bg-sky-950/40",
      accentColor: "from-sky-500 to-blue-600",
      steps: [
        "Review the main prediction chart showing forecasted prices",
        "Hover over data points to see exact values and dates",
        "Compare prediction line with historical data trends",
      ],
    },
    {
      icon: <PieChart className="h-16 w-16 text-blue-600 dark:text-blue-400" />,
      title: "Interpreting Statistics",
      description:
        "Each prediction includes key statistical metrics that help you assess the reliability and context of the forecast. Understanding these metrics is essential for making informed decisions based on the predictions.",
      color: "bg-blue-50 dark:bg-blue-950/40",
      accentColor: "from-blue-500 to-indigo-600",
      steps: [
        "Check the confidence interval to understand prediction certainty",
        "Review error metrics (MAPE, RMSE) to assess model accuracy",
        "Consider the trend indicators to understand price movement direction",
      ],
    },
    {
      icon: (
        <BookOpen className="h-16 w-16 text-indigo-600 dark:text-indigo-400" />
      ),
      title: "Using Historical Comparisons",
      description:
        "Our system provides historical price comparisons that put predictions in context. By comparing forecasted prices with historical patterns, you can make more informed decisions based on seasonal trends and market cycles.",
      color: "bg-indigo-50 dark:bg-indigo-950/40",
      accentColor: "from-indigo-500 to-violet-600",
      steps: [
        "Navigate to the Historical Data section via the navbar",
        "Compare predicted prices against historical data from previous years",
        "Look for seasonal patterns that may affect your decision-making",
      ],
    },
    {
      icon: (
        <AlertCircle className="h-16 w-16 text-violet-600 dark:text-violet-400" />
      ),
      title: "Limitations & Considerations",
      description:
        "While our prediction model is highly accurate, it's important to understand its limitations. External factors such as policy changes, natural disasters, or global market disruptions may affect actual prices in ways the model cannot anticipate.",
      color: "bg-violet-50 dark:bg-violet-950/40",
      accentColor: "from-violet-500 to-purple-600",
      steps: [
        "Consider external factors not captured by the model",
        "Use predictions as guidance rather than absolute certainty",
        "For critical decisions, consult with domain experts alongside our predictions",
      ],
    },
  ];

  const faqItems = [
    {
      question: "How accurate are the rice price predictions?",
      answer:
        "Our model achieves approximately 85-92% accuracy for short-term predictions (1-3 months) and 75-85% for longer-term forecasts, based on historical testing and validation.",
    },
    {
      question: "How far into the future can I predict rice prices?",
      answer:
        "Our system supports predictions up to 5 years into the future, though accuracy tends to decrease with longer time horizons due to increasing uncertainty.",
    },
    {
      question: "What data sources are used for the predictions?",
      answer:
        "We use historical rice price data from government agricultural databases, market reports, and research institutions, combined with external factors like weather patterns and economic indicators.",
    },
    {
      question: "Can I export or download the prediction results?",
      answer:
        "Yes, prediction results can be downloaded in CSV format for further analysis or reporting. Look for the download icon in the prediction results section.",
    },
  ];

  return (
    <section
      id="documentation"
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
            Using the Rice Price Predictor
          </span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 dark:text-gray-300 mb-20 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Follow this step-by-step guide to effectively use our prediction
          system and make informed decisions based on forecasted rice prices
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {documentationSections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/10 border border-slate-100/80 dark:border-slate-700/30 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Section number badge */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-teal-500/10 to-sky-500/15 dark:from-teal-500/15 dark:to-sky-500/20 flex items-center justify-center">
                <span className="text-lg font-bold text-teal-700 dark:text-teal-300">
                  {index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className={`p-4 rounded-2xl ${section.color} self-start`}>
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {section.description}
                  </p>

                  {/* Steps list */}
                  <ul className="space-y-2">
                    {section.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-teal-500 dark:text-teal-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom accent line */}
              <div
                className="w-full h-1 mt-6 rounded-full bg-gradient-to-r opacity-60 dark:opacity-40"
                style={{
                  backgroundImage: `linear-gradient(to right, ${section.accentColor
                    .replace("from-", "")
                    .replace("to-", "")})`,
                }}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-24 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-indigo-600 dark:from-sky-400 dark:to-indigo-400">
            Frequently Asked Questions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm rounded-xl p-6 shadow-md border border-slate-100/80 dark:border-slate-700/30"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-30px" }}
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-teal-500 dark:text-teal-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                      {item.question}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Need help banner */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-teal-500/10 to-sky-500/10 dark:from-teal-600/10 dark:to-sky-600/10 rounded-2xl p-8 text-center backdrop-blur-sm border border-teal-200/20 dark:border-teal-700/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <FileText className="h-12 w-12 text-teal-600 dark:text-teal-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
            Need Additional Help?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            If you have questions or need assistance using our rice price
            prediction system, our support team is here to help. Contact us for
            personalized guidance.
          </p>
          <motion.a
            href="mailto:support@ricepricepredictor.com"
            className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-teal-600 to-sky-600 hover:from-teal-700 hover:to-sky-700 text-white font-medium rounded-lg transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact Support
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
