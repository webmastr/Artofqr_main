"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Separator } from "../../components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Twitter,
  Instagram,
  Linkedin,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

// Tooltip Component
const SubscriptionTooltip = ({ message, type, show }) => {
  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={`absolute -top-12 left-0 right-0 mx-auto max-w-xs p-3 rounded-md shadow-lg flex items-center gap-2 ${
            type === "success"
              ? "bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800"
              : "bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800"
          }`}
        >
          {type === "success" ? (
            <CheckCircle
              className="text-green-500 dark:text-green-400"
              size={16}
            />
          ) : (
            <AlertCircle className="text-red-500 dark:text-red-400" size={16} />
          )}
          <span
            className={`text-sm ${
              type === "success"
                ? "text-green-700 dark:text-green-300"
                : "text-red-700 dark:text-red-300"
            }`}
          >
            {message}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

function FooterSection() {
  // State for email input and subscription status
  const [email, setEmail] = useState("");
  const [subscriptionStatus, setSubscriptionStatus] = useState({
    message: "",
    type: "", // "success" or "error"
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Auto-hide tooltip after success
  useEffect(() => {
    if (subscriptionStatus.type === "success" && subscriptionStatus.message) {
      setShowTooltip(true);
      const timer = setTimeout(() => {
        setShowTooltip(false);
        // Clear the message after the tooltip disappears
        setTimeout(() => {
          setSubscriptionStatus({ message: "", type: "" });
        }, 300);
      }, 5000);
      return () => clearTimeout(timer);
    } else if (subscriptionStatus.message) {
      setShowTooltip(true);
    }
  }, [subscriptionStatus]);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const socialLinks = [
    { icon: <Github size={20} />, label: "Github" },
    { icon: <Twitter size={20} />, label: "Twitter" },
    { icon: <Instagram size={20} />, label: "Instagram" },
    { icon: <Linkedin size={20} />, label: "LinkedIn" },
  ];

  const footerLinks = [
    {
      title: "Products",
      links: ["QR T-Shirts", "QR Hoodies", "QR Accessories", "Custom Designs"],
    },
    {
      title: "Resources",
      links: ["Portfolio", "How it Works", "Pricing", "Blog"],
    },
    {
      title: "Company",
      links: ["About Us", "Contact", "Careers", "Press Kit"],
    },
  ];

  // Newsletter subscription handler
  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setSubscriptionStatus({
        message: "Please enter a valid email address",
        type: "error",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch(
        "https://artqr-backend.vercel.app/newsletter/create-newsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setSubscriptionStatus({
          message: "Successfully subscribed to our newsletter!",
          type: "success",
        });
        setEmail("");
      } else {
        setSubscriptionStatus({
          message: data.message || "Something went wrong. Please try again.",
          type: "error",
        });
      }
    } catch (error) {
      setSubscriptionStatus({
        message: "Failed to connect to the server. Please try again later.",
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.section
      className="flex flex-col gap-6 w-full mt-20 md:mt-40 py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 mb-12"
          variants={staggerContainer}
        >
          {/* Logo and Description - Full width on smallest screens */}
          <motion.div
            className="col-span-2 sm:col-span-2 md:col-span-3 lg:col-span-2"
            variants={fadeIn}
          >
            <Image
              src="/images/logo.png"
              alt="Artofqr"
              width={200}
              height={200}
              className="object-contain mb-4 cursor-pointer"
            />
            <p className="text-gray-700 dark:text-gray-300 mt-4 mb-6 max-w-md">
              Create scannable QR code fashion that connects your physical style
              to your digital presence. Stand out with functional, stylish
              designs.
            </p>
            {/* Social Media Links */}
            <motion.div className="flex gap-3 mt-6" variants={staggerContainer}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:text-white transform transition-all duration-300 hover:scale-110 cursor-pointer"
                  variants={fadeIn}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Footer Links - Responsive layout for all screen sizes */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="col-span-1 mt-6 sm:mt-0"
            >
              <h3 className="font-bold text-lg mb-3 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300 cursor-pointer">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="cursor-pointer"
                  >
                    <a
                      href="#"
                      className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <Separator className="bg-gray-200 dark:bg-gray-800" />

        {/* Newsletter */}
        <motion.div
          className="py-8 flex flex-col md:flex-row justify-between items-center gap-4"
          variants={fadeIn}
        >
          <div className="max-w-md">
            <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300 cursor-pointer">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Get the latest news and updates on QR fashion trends.
            </p>
          </div>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col w-full md:w-auto relative"
          >
            <div className="flex w-full">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="p-3 rounded-l-md border border-gray-200 dark:border-gray-700 dark:bg-gray-800 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 w-full md:w-64"
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 dark:from-blue-600 dark:to-purple-500 text-white px-4 py-2 rounded-r-md transition-all duration-300 ${
                  isLoading ? "opacity-70 cursor-not-allowed" : "cursor-pointer"
                }`}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </button>
            </div>

            {/* Tooltip */}
            <SubscriptionTooltip
              message={subscriptionStatus.message}
              type={subscriptionStatus.type}
              show={showTooltip}
            />
          </form>
        </motion.div>

        <Separator className="bg-gray-200 dark:bg-gray-800" />

        {/* Copyright */}
        <motion.div
          className="pt-6 pb-8 flex flex-col md:flex-row justify-between items-center gap-4"
          variants={fadeIn}
        >
          <p className="text-gray-700 dark:text-gray-300 text-center md:text-left cursor-pointer">
            © {new Date().getFullYear()} Artofqr. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-6 justify-center">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Service", href: "/terms-conditions" },
            ].map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.05 }}>
                <Link
                  href={item.href}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 text-sm cursor-pointer"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default FooterSection;
