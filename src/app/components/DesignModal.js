"use client";

import React from "react";
import { motion } from "framer-motion";
import { X, CheckCircle, Settings } from "lucide-react";

const DesignModal = ({ isOpen, onClose, onGuideSelect, onSkipSelect }) => {
  if (!isOpen) return null;

  // Animation variants
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2 },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        delay: 0.1,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: { duration: 0.2 },
    },
  };

  const optionVariants = {
    hover: {
      scale: 1.03,
      borderColor: "rgba(147, 51, 234, 0.5)", // Subtle purple tint (matches header color)
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    tap: {
      scale: 0.98,
    },
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm p-4"
      variants={overlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
    >
      {/* Modal Container */}
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden w-full max-w-xl"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="relative px-6 pt-6 pb-4 border-b border-gray-100 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-center text-purple-600 dark:text-purple-400">
            How would you like to start?
          </h2>
          <motion.button
            className="absolute right-4 top-4 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <X size={24} />
          </motion.button>
        </div>

        {/* Modal Options */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Option 1: Guide me through */}
          <motion.div
            className="flex flex-col items-center p-6 border-2 border-gray-200 dark:border-gray-700 rounded-xl cursor-pointer"
            variants={optionVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={onGuideSelect}
          >
            <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
              <CheckCircle
                size={28}
                className="text-blue-600 dark:text-blue-400"
              />
            </div>
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200 text-center">
              Guide me through the design
            </p>
            <div className="mt-4 flex justify-center">
              <motion.div
                className="flex flex-col items-center space-y-1"
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
              >
                {/* Diamond shape stack graphic */}
                <div className="relative w-24 h-16">
                  <div className="absolute left-6 top-0 w-12 h-12 bg-gray-200 dark:bg-gray-600 rounded-sm transform rotate-45"></div>
                  <div className="absolute left-2 top-2 w-12 h-12 bg-gray-300 dark:bg-gray-500 rounded-sm transform rotate-45"></div>
                  <div className="absolute left-10 top-4 w-12 h-12 bg-gray-400 dark:bg-gray-400 rounded-sm transform rotate-45"></div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Option 2: Skip, go to designer */}
          <motion.div
            className="flex flex-col items-center p-6 border-2 border-gray-200 dark:border-gray-700 rounded-xl cursor-pointer"
            variants={optionVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={onSkipSelect}
          >
            <div className="mb-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
              <Settings
                size={28}
                className="text-blue-600 dark:text-blue-400"
              />
            </div>
            <p className="text-lg font-medium text-gray-800 dark:text-gray-200 text-center">
              Skip, go to designer
            </p>
            <div className="mt-4 flex justify-center">
              <motion.div
                className="w-16 h-16 bg-gray-300 dark:bg-gray-500 rounded-sm transform rotate-45"
                whileHover={{ rotate: 135, transition: { duration: 0.5 } }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DesignModal;
