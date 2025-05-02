"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Header } from "./Header";

export default function AboutHeader() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);
  const pathname = usePathname();

  return (
    <div className="relative min-h-screen overflow-hidden text-white flex flex-col">
      {/* Moving Stars */}
      <Particles
        className="absolute inset-0"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 60,
          particles: {
            color: { value: "#F1F1F1" },
            number: { value: 80, density: { enable: true, area: 800 } },
            size: { value: 1 },
            move: { enable: true, speed: 0.4 },
            opacity: { value: 0.9 },
          },
        }}
      />

      {/* Background with Purple Gradient Completion */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a021c] via-[#2f1048] to-[#1f0531] opacity-80"></div>

      <Header></Header>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-grow text-center px-4">
      {/* Animated Text Block */}
      <motion.div
        className="bg-white/10 backdrop-blur-sm text-white px-4 py-1 rounded-full text-lg mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
       We don’t manage brands — we multiply them.
      </motion.div>

      {/* Animated Heading */}
      <motion.h1
        className="text-2xl md:text-3xl font-bold leading-tight max-w-4xl mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        
        Transforming workflows with AI powered automation. Primescaler is a high-performance digital scaling agency.
      </motion.h1>

      {/* Animated Paragraph */}
      <motion.p
        className="text-lg text-gray-300 max-w-2xl mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Which partners 
        with 6 to 9-figure businesses to drive up to 20x revenue growth — fast, smart, and with guaranteed results.
      </motion.p>

      {/* Animated Buttons */}
      <motion.div
        className="flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        
      </motion.div>
    </div>
     
    </div>
  );
}
