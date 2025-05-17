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
      icon: <Search className="h-16 w-16 text-amber-600 dark:text-amber-400" />,
      title: "Pemilihan Periode Waktu",
      description:
        "Mulailah dengan memilih tahun dan bulan untuk prediksi harga beras. Model kami mendukung prediksi untuk perkiraan jangka pendek dan proyeksi pasar jangka panjang hingga 5 tahun ke depan.",
      color: "bg-amber-50 dark:bg-amber-950/40",
      accentColor: "from-amber-500 to-yellow-600",
      steps: [
        "Klik menu dropdown tahun dan pilih tahun",
        "Pilih bulan yang diinginkan dari dropdown bulan",
        "Sistem kami mendukung prediksi dari tahun 2024 hingga tahun berjalan plus 5 tahun",
      ],
    },
    {
      icon: (
        <MoveDown className="h-16 w-16 text-yellow-600 dark:text-yellow-400" />
      ),
      title: "Menjalankan Prediksi",
      description:
        "Setelah memilih kerangka waktu yang diinginkan, jalankan model prediksi dengan sekali klik. Sistem kami memproses permintaan Anda menggunakan algoritma interpolasi dan regresi polinomial untuk menghasilkan perkiraan harga beras yang akurat.",
      color: "bg-yellow-50 dark:bg-yellow-950/40",
      accentColor: "from-yellow-500 to-amber-600",
      steps: [
        "Klik tombol 'Mulai Prediksi Harga' setelah memilih periode waktu",
        "Tunggu sebentar saat model kami memproses permintaan Anda",
        "Hasil akan muncul secara otomatis di sebelah kanan formulir",
      ],
    },
    {
      icon: (
        <LineChart className="h-16 w-16 text-amber-600 dark:text-amber-400" />
      ),
      title: "Memahami Grafik Linear",
      description:
        "Hasil prediksi kami mencakup grafik garis interaktif yang menampilkan harga beras yang diprediksi bersama dengan tren historis. Visualisasi ini membantu Anda memahami pola pasar dan konteks prediksi.",
      color: "bg-amber-50 dark:bg-amber-950/40",
      accentColor: "from-amber-500 to-yellow-600",
      steps: [
        "Tinjau grafik prediksi utama yang menunjukkan harga yang diperkirakan",
        "Lihat perubahan persentase untuk memahami tren harga",
        "Bandingkan harga prediksi dengan data historis bulan sebelumnya",
      ],
    },
    {
      icon: (
        <PieChart className="h-16 w-16 text-yellow-600 dark:text-yellow-400" />
      ),
      title: "Interpretasi Statistik",
      description:
        "Setiap prediksi mencakup metrik statistik utama yang membantu Anda menilai keandalan dan konteks prakiraan. Memahami metrik ini sangat penting untuk membuat keputusan berdasarkan prediksi.",
      color: "bg-yellow-50 dark:bg-yellow-950/40",
      accentColor: "from-yellow-500 to-amber-600",
      steps: [
        "Periksa interval kepercayaan untuk memahami kepastian prediksi",
        "Tinjau metrik kesalahan (MAPE, RMSE) untuk menilai akurasi model",
        "Pertimbangkan indikator tren untuk memahami arah pergerakan harga",
      ],
    },
    {
      icon: (
        <BookOpen className="h-16 w-16 text-amber-600 dark:text-amber-400" />
      ),
      title: "Menggunakan Perbandingan Historis",
      description:
        "Sistem kami menyediakan perbandingan harga historis yang menempatkan prediksi dalam konteks. Dengan membandingkan harga yang diperkirakan dengan pola historis, Anda dapat membuat keputusan yang lebih tepat berdasarkan tren musiman dan siklus pasar.",
      color: "bg-amber-50 dark:bg-amber-950/40",
      accentColor: "from-amber-500 to-yellow-600",
      steps: [
        "Navigasikan ke bagian Data Historis melalui navbar",
        "Bandingkan harga yang diprediksi dengan data historis dari tahun-tahun sebelumnya",
        "Perhatikan pola musiman yang mungkin memengaruhi pengambilan keputusan Anda",
      ],
    },
    {
      icon: (
        <AlertCircle className="h-16 w-16 text-yellow-600 dark:text-yellow-400" />
      ),
      title: "Keterbatasan & Pertimbangan",
      description:
        "Meskipun model prediksi kami sangat akurat, penting untuk memahami keterbatasannya. Faktor eksternal seperti perubahan kebijakan, bencana alam, atau gangguan pasar global dapat memengaruhi harga aktual dengan cara yang tidak dapat diantisipasi oleh model.",
      color: "bg-yellow-50 dark:bg-yellow-950/40",
      accentColor: "from-yellow-500 to-amber-600",
      steps: [
        "Pertimbangkan faktor eksternal yang tidak tertangkap oleh model",
        "Gunakan prediksi sebagai panduan, bukan kepastian absolut",
        "Untuk keputusan penting, konsultasikan dengan pakar domain bersama dengan prediksi kami",
      ],
    },
  ];

  const faqItems = [
    {
      question: "Seberapa akurat prediksi harga beras?",
      answer:
        "Model kami mencapai akurasi sekitar 85-92% untuk prediksi jangka pendek (1-3 bulan) dan 75-85% untuk prakiraan jangka panjang, berdasarkan pengujian dan validasi historis.",
    },
    {
      question: "Seberapa jauh ke depan saya dapat memprediksi harga beras?",
      answer:
        "Sistem kami mendukung prediksi hingga 5 tahun ke depan, meskipun akurasi cenderung menurun dengan horizon waktu yang lebih lama karena ketidakpastian yang meningkat.",
    },
    {
      question: "Sumber data apa yang digunakan untuk prediksi?",
      answer:
        "Kami menggunakan data harga beras historis dari Badan Pusat Statistik (BPS) dari tahun 2013-2023, yang dikombinasikan dengan faktor eksternal seperti pola cuaca dan indikator ekonomi.",
    },
    {
      question: "Bisakah saya mengekspor atau mengunduh hasil prediksi?",
      answer:
        "Ya, hasil prediksi dapat diunduh dalam format CSV untuk analisis lebih lanjut atau pelaporan. Cari ikon unduh di bagian hasil prediksi.",
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

        {/* Small decorative particles - Using predefined positions */}
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
            Panduan Menggunakan Prediksi Harga Beras
          </span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ikuti panduan langkah demi langkah ini untuk menggunakan sistem
          prediksi kami secara efektif dan membuat keputusan berdasarkan harga
          beras yang diperkirakan
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {documentationSections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-amber-100/20 dark:shadow-amber-900/5 border border-amber-100/50 dark:border-amber-700/20 relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Section number badge */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-amber-500/10 to-yellow-500/15 dark:from-amber-500/15 dark:to-yellow-500/20 flex items-center justify-center">
                <span className="text-lg font-bold text-amber-700 dark:text-amber-300">
                  {index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className={`p-4 rounded-2xl ${section.color} self-start`}>
                  {section.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {section.description}
                  </p>

                  {/* Steps list */}
                  <ul className="space-y-2">
                    {section.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-amber-500 dark:text-amber-400 mt-0.5 flex-shrink-0" />
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
          className="mt-20 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-yellow-600 dark:from-amber-400 dark:to-yellow-400">
            Pertanyaan yang Sering Diajukan
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-amber-100/50 dark:border-amber-700/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-30px" }}
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-amber-500 dark:text-amber-400 mt-1 flex-shrink-0" />
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
          className="mt-20 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 dark:from-amber-600/10 dark:to-yellow-600/10 rounded-2xl p-8 text-center backdrop-blur-sm border border-amber-200/20 dark:border-amber-700/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <FileText className="h-12 w-12 text-amber-600 dark:text-amber-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3">
            Butuh Bantuan Tambahan?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
            Jika Anda memiliki pertanyaan atau membutuhkan bantuan menggunakan
            sistem prediksi harga beras kami, tim dukungan kami siap membantu.
            Hubungi kami untuk panduan yang dipersonalisasi.
          </p>
          <motion.a
            href="mailto:support@prediksihargareras.id"
            className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-amber-600 to-yellow-500 hover:from-amber-700 hover:to-yellow-600 text-white font-medium rounded-xl transition-all duration-200 shadow-lg shadow-amber-500/20 dark:shadow-amber-400/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Hubungi Dukungan
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
