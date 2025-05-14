"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BarChart2, ChevronDown } from "lucide-react";

const NavLink = ({ href, label, onClick, hasDropdown = false }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative "
    >
      <Link
        href={href}
        className={`flex items-center px-3 lg:max-w-7xl lg:mx-auto py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
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

  useEffect(() => {
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
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg border-b border-slate-100/80 dark:border-slate-700/30"
            : "bg-gradient-to-r from-amber-600 to-yellow-500 dark:from-amber-700 dark:to-yellow-600"
        }`}
      >
        <div className="container mx-auto px-4">
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
              <NavLink href="/" label="Home" />
              <NavLink href="/data-history" label="Historical Data" />
              <NavLink href="/documentation" label="Documentation" />
              <NavLink href="/methodology" label="Methodology" />
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
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
                href="/data-history"
                className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-amber-700 dark:hover:text-amber-300 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Historical Data
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
