"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, X } from "lucide-react";

function FAQSection() {
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    interest: "",
    favorite: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      if (scrollPosition > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const response = await fetch(
        "https://artqr-backend.vercel.app/newsletter/submit-user-info",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit information");
      }

      // Success handling
      setSubmitSuccess(true);
      setFormData({ name: "", interest: "", favorite: "" });

      // Close modal after successful submission with slight delay for feedback
      setTimeout(() => {
        setShowModal(false);
        setSubmitSuccess(false);
      }, 2000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants matching hero section
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fadeDown = {
    hidden: { opacity: 0, y: -40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
  };

  // FAQ data
  const faqItems = [
    {
      question: "How do Diamond QR on clothing work?",
      answer:
        "Diamond QR are printed using high-quality, durable ink that withstands washing and wear. When scanned with any smartphone camera, they direct to your customized digital profile, website, or social media page of your choice.",
    },
    {
      question: "Are the Diamond QR washable?",
      answer:
        "Yes! Diamond QR are printed with specialized ink that remains scannable after multiple wash cycles. We recommend washing inside-out with cold water and avoiding harsh bleaching agents to maximize longevity.",
    },
    {
      question: "Can I customize what my Diamond QR links to?",
      answer:
        "Absolutely. During checkout, you'll create an account that allows you to set and update your Diamond QR destination anytime. Link to your portfolio, social media, business page, or even create a special landing page.",
    },
    {
      question: "What materials are your products made from?",
      answer:
        "We use premium 100% organic cotton for our t-shirts and hoodies, ensuring both comfort and sustainability. Our accessories feature recycled materials wherever possible, aligning with our commitment to eco-friendly fashion.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship worldwide! International orders typically arrive within 7-14 business days. Shipping costs vary by location and will be calculated at checkout.",
    },
    {
      question: "What if my Diamond QR stops working?",
      answer:
        "We stand behind our products with a lifetime Diamond QR guarantee. If your code ever stops scanning properly due to normal wear and tear, we'll replace your item free of charge.",
    },
  ];

  // State to track which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function for FAQ items
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full overflow-hidden ">
      <motion.section
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300 cursor-pointer"
            variants={fadeDown}
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto cursor-pointer"
            variants={fadeUp}
          >
            Everything you need to know about our QR code fashion products and
            services.
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="max-w-3xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              className="mb-4 border-b border-gray-200 dark:border-gray-800 pb-4"
              variants={fadeIn}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: scrolled ? 0.98 : 1,
                transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
              }}
              whileHover={{
                scale: 1.01,
                transition: { type: "spring", stiffness: 400, damping: 20 },
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full py-4 px-2 text-left font-medium focus:outline-none cursor-pointer"
              >
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.question}
                </span>
                <motion.span
                  animate={{
                    rotate: openIndex === index ? 45 : 0,
                    backgroundColor:
                      openIndex === index ? "#8b5cf6" : "#6366f1",
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center w-6 h-6 rounded-full text-white bg-gradient-to-r from-blue-500 to-purple-600 cursor-pointer"
                >
                  {openIndex === index ? (
                    <Minus size={14} />
                  ) : (
                    <Plus size={14} />
                  )}
                </motion.span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                  marginBottom: openIndex === index ? "1rem" : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="overflow-hidden"
              >
                <p className="px-2 py-2 text-gray-700 dark:text-gray-300">
                  {item.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tell Us About You Section */}
        <motion.div
          className="text-center mt-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="max-w-2xl mx-auto mb-8" variants={fadeIn}>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Still have questions? We're here to help!
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Tell us about yourself and we'll get back to you with personalized
              assistance. Our team is ready to provide you with the information
              you need.
            </p>
          </motion.div>

          {/* Tell Us About You Button - centered below text */}
          <motion.div
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)",
              transition: { type: "spring", stiffness: 400, damping: 20 },
            }}
            whileTap={{ scale: 0.98 }}
            className="inline-block cursor-pointer"
          >
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-3 flex items-center justify-center gap-2 shadow-lg bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 dark:from-purple-600 dark:to-pink-500 text-white rounded-md font-medium transition-all duration-300 cursor-pointer"
            >
              <span>Tell Us About You</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  transition: {
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeOut",
                    repeatDelay: 0.5,
                  },
                }}
              >
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
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </motion.div>
            </button>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Modal Overlay */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-white dark:bg-gray-900 rounded-lg shadow-xl max-w-md w-full p-6 relative"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X size={24} />
            </button>

            <h3 className="text-2xl font-bold dark:text-white mb-6 bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
              Tell Us About You
            </h3>

            {submitSuccess && (
              <div className="mb-6 p-3 bg-green-100 border border-green-200 text-green-700 rounded-md">
                Information submitted successfully! We'll be in touch soon.
              </div>
            )}

            {submitError && (
              <div className="mb-6 p-3 bg-red-100 border border-red-200 text-red-700 rounded-md">
                {submitError}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                {/* Name Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>

                {/* Interest Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Interest
                  </label>
                  <input
                    type="text"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
                    placeholder="Fashion, Technology, etc."
                  />
                </div>

                {/* Favorite Field */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Your Favorite
                  </label>
                  <input
                    type="text"
                    name="favorite"
                    value={formData.favorite}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-white"
                    placeholder="Color, Food, Activity, etc."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white rounded-md font-medium transition-all duration-300 ${
                  isSubmitting ? "opacity-75 cursor-not-allowed" : ""
                }`}
                whileHover={
                  !isSubmitting
                    ? {
                        scale: 1.02,
                        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                      }
                    : {}
                }
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default FAQSection;
