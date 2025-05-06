"use client";

import React, { useEffect, useState, useRef } from "react";
import Button from "@/components/ui/button";
import { ArrowRight, Wand2 } from "lucide-react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isInView, setIsInView] = useState(true);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const router = useRouter();
  const { scrollY } = useViewportScroll();
  const scale = useTransform(scrollY, [0, 200], [1, 0.98]);

  // Handle scroll position for animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;
      if (scrollPosition > scrollThreshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check if video is in view
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        setIsInView(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Control video playback based on visibility
  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch((error) => {
          console.log("Video play failed:", error);
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  // Animation variants
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

  const handleButtonClick = () => {
    router.push("/text-to-graphics");
  };

  return (
    <div id="hero" className="w-full overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Left column - Text content */}
          <motion.div
            className="order-2 lg:order-1 mt-8 lg:mt-0 text-center lg:text-left"
            variants={fadeIn}
          >
            <motion.div className="relative">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-300 leading-tight"
                variants={fadeDown}
              >
                Express Yourself. No Labels, Just Art.
              </motion.h1>

              <motion.p
                className="text-base md:text-lg text-gray-700 dark:text-gray-300 mt-6 max-w-lg mx-auto lg:mx-0"
                variants={fadeUp}
              >
                We live in a world where everyone is their own brand. But what
                if self-expression wasn&apos;t about logos or labels? What if it
                was about creating something uniquely yours? Our platform
                transforms words into striking geometric art—Square Kufic meets
                the Latin alphabet. Whether it&apos;s your name, a mantra, or a
                secret message, craft it into a perfect square. Bold. Personal.
                Yours.
              </motion.p>

              <motion.div
                className="mt-8 max-w-xs sm:max-w-sm mx-auto lg:mx-0"
                variants={fadeUp}
              >
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.15)",
                    transition: { type: "spring", stiffness: 400, damping: 20 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    onClick={handleButtonClick}
                    text={
                      <div className="flex items-center justify-center gap-2 cursor-pointer">
                        <Wand2 size={18} className="cursor-pointer" />
                        <span>Design Your Diamond QR</span>
                        <motion.div
                          animate={{
                            x: [0, 5, 0],
                            transition: {
                              repeat: Infinity,
                              duration: 1.5,
                              ease: "easeOut",
                              repeatDelay: 0.5,
                            },
                          }}
                        >
                          <ArrowRight size={18} />
                        </motion.div>
                      </div>
                    }
                    width="w-full"
                    height="h-12"
                    className="flex items-center justify-center gap-2 shadow-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 dark:from-blue-600 dark:to-purple-500 transition-all duration-300 cursor-pointer"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right column - Video */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center cursor-pointer"
            variants={fadeDown}
          >
            <motion.div
              className="relative rounded-xl shadow-2xl border overflow-hidden w-full"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1 }}
              style={{ scale }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 25px 50px rgba(0, 0, 0, 0.18)",
                transition: { type: "spring", stiffness: 400, damping: 20 },
              }}
            >
              {/* Using aspect ratio instead of fixed height for responsiveness */}
              <div className="relative w-full pb-[75%] sm:pb-[80%] md:pb-[75%] lg:pb-[70%]">
                <video
                  ref={videoRef}
                  className="absolute inset-0 w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  {/* Replace with your video URL */}
                  <source src="/images/banner original.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Video overlay with gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 0.6,
                    transition: { delay: 0.4, duration: 0.8 },
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
