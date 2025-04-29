"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import step1 from "@/assets/step (1).jpg";

export default function AboutDes() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen px-4 sm:px-8 lg:px-20 py-16 gap-10">
      {/* Text Content */}
      <div className="flex-1 space-y-8">
        {/* Heading Animation */}
        <motion.h1
          id="our-story"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="relative font-bold py-3 px-10 sm:px-14 rounded-lg text-lg sm:text-xl bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
            <div className="absolute inset-0">
              <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
              <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
              <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
            </div>
            <span>OUR STORY</span>
          </button>
        </motion.h1>

        {/* Paragraph Animation */}
        <motion.p
          className="text-gray-200 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Primescaler was born out of a simple frustration – watching incredible businesses struggle to scale because agencies only focused on managing social media, not multiplying actual revenue.
          <br />
          <strong className="text-purple-700 text-xl">FOUNDED BY ADNAN,</strong> a growth-driven entrepreneur with a decade of digital marketing experience and a passion for turning brands into high-performing sales machines, Primescaler exists to{" "}
          <span className="font-extrabold">bridge the gap between traffic and transactions.</span>
          <br />
          From Dubai’s competitive business landscape to global markets, we’ve built Primescaler on a mission:
          <br />
          <span className="font-extrabold">
            “To make scaling predictable, profitable, and guaranteed.”
          </span>
          <br />
          With a <span className="font-semibold">no-BS approach</span>, Primescaler goes beyond campaigns. We dive deep into what truly drives ROI — audience behavior, conversion science, lead quality, and sales team performance.
          <br />
          We offer every client a <span className="font-extrabold">7-day trial with guaranteed results</span> — if we don’t move the needle, you don’t pay.
          <br />
          <strong>
            Because when you’re chasing greatness, you need a partner who’s already running at your pace.
          </strong>
        </motion.p>
      </div>

      {/* Image Animation */}
      <motion.div
        className="flex justify-center items-center flex-1"
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
          className="rounded-2xl w-full max-w-[500px] h-auto"
        />
      </motion.div>
    </div>
  );
}
