"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BarChart2, ChevronDown, Sun, Moon } from "lucide-react";

const NavLink = ({ href, label, onClick, hasDropdown = false }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <Link
        href={href}
        className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
          isActive
            ? "text-amber-800 bg-amber-50 dark:text-amber-200 dark:bg-amber-900/20"
            : "text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-300 hover:bg-amber-50/50 dark:hover:bg-amber-900/10"
        }`}
        onClick={onClick}
      >
        {label}
        {hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
      </Link>
      {isActive && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-600 to-yellow-500 dark:from-amber-500 dark:to-yellow-400 rounded-full"
          layoutId="activeIndicator"
        />
      )}
    </motion.div>
  );
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark mode preference is stored
    const savedDarkMode = localStorage.getItem("darkMode") === "true";

    // Check if user prefers dark mode via system settings
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    // Set initial mode
    const initialDarkMode =
      savedDarkMode !== null ? savedDarkMode : prefersDarkScheme;
    setDarkMode(initialDarkMode);

    // Apply dark mode if needed
    if (initialDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Listen for scroll events
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    // Save preference
    localStorage.setItem("darkMode", newDarkMode.toString());

    // Update document class
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const navbarVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    hidden: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className="fixed w-full z-50"
    >
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg border-b border-slate-100/80 dark:border-slate-700/30"
            : "bg-gradient-to-r from-amber-600 to-yellow-500 dark:from-amber-700 dark:to-yellow-600"
        }`}
      >
        <div className="container lg:max-w-7xl lg:mx-auto mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/" className="flex items-center space-x-2">
                <BarChart2
                  className={`h-6 w-6 ${
                    scrolled
                      ? "text-amber-600 dark:text-amber-400"
                      : "text-white"
                  }`}
                />
                <span
                  className={`text-xl font-bold ${
                    scrolled
                      ? "text-amber-600 dark:text-amber-400"
                      : "text-white"
                  }`}
                >
                  Rice Price Predictor
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <NavLink href="/" label="Beranda" />
              <NavLink href="/documentation" label="Dokumentasi" />
              <NavLink href="/methodology" label="Metodologi" />

              {/* Dark Mode Toggle - Desktop */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${
                  scrolled
                    ? "bg-amber-50 text-amber-600 hover:bg-amber-100 dark:bg-amber-900/20 dark:text-amber-300 dark:hover:bg-amber-800/30"
                    : "bg-amber-500/20 text-white hover:bg-amber-500/30 dark:bg-amber-700/30 dark:hover:bg-amber-700/40"
                } transition-colors duration-200 ml-2`}
                aria-label={
                  darkMode ? "Aktifkan Mode Terang" : "Aktifkan Mode Gelap"
                }
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={darkMode ? "dark" : "light"}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {darkMode ? (
                      <Moon className="h-5 w-5" />
                    ) : (
                      <Sun className="h-5 w-5" />
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </div>

            {/* Mobile menu button and dark mode toggle */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Dark Mode Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${
                  scrolled
                    ? "bg-amber-50 text-amber-600 hover:bg-amber-100 dark:bg-amber-900/20 dark:text-amber-300 dark:hover:bg-amber-800/30"
                    : "bg-amber-500/20 text-white hover:bg-amber-500/30 dark:bg-amber-700/30 dark:hover:bg-amber-700/40"
                } transition-colors duration-200`}
                aria-label={
                  darkMode ? "Aktifkan Mode Terang" : "Aktifkan Mode Gelap"
                }
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.button>

              {/* Menu Toggle */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-md ${
                  scrolled
                    ? "text-amber-600 dark:text-amber-400 hover:bg-amber-50 dark:hover:bg-amber-900/10"
                    : "text-white hover:bg-amber-700/50 dark:hover:bg-amber-700/50"
                }`}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-lg border-b border-slate-100/80 dark:border-slate-700/30"
          >
            <div className="px-4 py-3 space-y-2">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-300 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/documentation"
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-300 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Documentation
              </Link>
              <Link
                href="/methodology"
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-300 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Methodology
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
