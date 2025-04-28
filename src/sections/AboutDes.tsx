"use client";

import Image from "next/image";
import { motion } from "framer-motion"; // Add Framer Motion
import step1 from "@/assets/step (1).jpg";

export default function AboutDes() {
  return (
    <div className="flex min-h-screen">
      {/* Main Content */}
      <div className="flex-1 ml-10 p-20 flex">
        <div className="max-w-2xl space-y-8">
          {/* Heading Animation */}
          <motion.h1
            className="text-5xl font-bold mb-8"
            id="our-story"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Story
          </motion.h1>

          {/* Paragraph Animation */}
          <motion.p
            className="text-gray-500 leading-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Primescaler was born out of a simple frustration - watching incredible businesses struggle to scale because agencies only focused on managing social media, not multiplying actual revenue.
            <strong className="text-purple-300 text-xl"> Founded by Adnan, </strong> a growth-driven entrepreneur with a decade of digital marketing experience and a passion for turning brands into high-performing sales machines, Primescaler exists to 
            <span className="font-extrabold text-lg text-gray-50"> bridge the gap between traffic and transactions. </span>
            From Dubai’s competitive business landscape to global markets, we’ve built Primescaler on a mission:
            <br />
            <span className="font-extrabold text-xl text-gray-50">
              “To make scaling predictable, profitable, and guaranteed.”
            </span>
            <br /> 
            With a <span className="font-semibold">no-BS approach</span>, Primescaler goes beyond campaigns. We dive deep into what truly drives ROI - audience behavior, conversion science, lead quality, and sales team performance.
            We offer every client a <span className="font-extrabold text-xl text-gray-50">7-day trial with guaranteed results</span>, if we don’t move the needle, you don’t pay.<br/>
            <strong className="text-gray-50 text-lg">
              Because when you’re chasing greatness, you need a partner who’s already running at your pace.
            </strong>
          </motion.p>
        </div>

        {/* Image Animation */}
        <motion.div
          className="ml-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <Image
            src={step1}
            alt="Coffee and Book"
            width={500}
            height={400}
            className="rounded-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
}
