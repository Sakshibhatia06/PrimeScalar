"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import signatureImage from "@/assets/Signature.png";

export default function FoundersNote() {
  return (
    <section className="relative py-20 px-8 sm:px-16 lg:px-32 overflow-hidden bg-gradient-to-br from-[#1c0333] via-[#0d011a] to-black">

      {/* Main Content with animated border */}
      <motion.div
        initial={{ boxShadow: "0 0 0px #a855f7" }}
        animate={{ boxShadow: [
          "0 0 10px #a855f7",
          "0 0 20px #9333ea",
          "0 0 10px #a855f7",
        ] }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        className="relative z-10 bg-black/80 backdrop-blur-lg rounded-3xl p-10 sm:p-16 border-2 border-purple-800"
      >

        {/* Actual Inner Content */}
        <div className="relative z-10">

          {/* Founder’s Message */}
          <div className="text-gray-300 text-lg leading-relaxed space-y-6 text-justify">
          <p className="text-xl md:text-[60px] md:leading-none font-semibold tracking-tighter bg-purple-200 bg-[radial-gradient(100%_100%_at_top_right,rgb(138,32,138,.5),white,rgb(74,32,138,.5))] text-transparent bg-clip-text text-center">From the desk of Adnan, Founder of PRIMESCALAR</p>

            <p>
            When I started Primescaler, I wasn’t just building an ordinary digital agency.
I was creating the kind of partner I wished I had — someone who wasn’t just checking boxes or “managing” campaigns <br/>
But someone who cared deeply about real, measurable growth. About outcomes. About scale.
            </p>

            <p>
            I’ve worked with brands overflowing with potential - brands that deserved to win.
But they were stuck.
Not because their products weren’t strong.
Not because their audience wasn’t out there.
But because they lacked the right strategy, the right systems, and the right team to turn ambition into results.
            </p>

            <p className="text-xl font-bold text-white">
              That’s why Primescaler exists.
            </p>

            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To cut through the noise and remove the fluff.</li>
              <li>To deliver qualified leads — not just clicks or traffic.</li>
              <li>To build teams that know how to close, not just talk.</li>
              <li>And to scale businesses 10x, 20x, even more — with precision, speed, and purpose.</li>
            </ul>

            <p className="text-xl font-semibold text-purple-300">
            For me, this isn’t just business,
"It’s personal."
It’s a mission to redefine what growth should feel like:<br/>
<strong>Predictable. Powerful. Performance-backed.</strong>
            </p>

            <p>
              Whether you're doing <strong>6 figures</strong> or already past <strong>9 figures</strong>,
              if you’re hungry to scale, we’re here to build something massive with you.
            </p>

            <p className="font-bold text-white uppercase text-center font-serif tracking-widest">
              "Let’s create impact.<br/>
              Let’s create revenue.<br/>
              Let’s create momentum that doesn’t stop."
            </p>
          </div>

          {/* Signature Block */}
          <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div>
            <div className="relative w-60 h-28 sm:w-60 sm:h-28">
              <Image
                src={signatureImage}
                alt="CEO Signature"
                layout="fill"
                objectFit="contain"
                className="-ml-16"
              />
            </div>
              <p className="font-bold text-white text-xl">– Adnan</p>
              <p className="text-gray-400 text-sm">Founder, Primescaler</p>
            </div>
          </div>

        </div>

      </motion.div>

    </section>
  );
}
