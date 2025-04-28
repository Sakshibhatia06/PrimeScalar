"use client";
// components/WhyChooseUs.tsx

import { motion } from 'framer-motion';
import { DollarSign, BarChart3, Repeat } from 'lucide-react';

const benefits = [
  {
    title: 'Results-First, Always',
    description:
      'We don’t just promise growth - we guarantee it. Our 7-day trial is backed by a money-back guarantee, because we believe our work should speak before we do.',
    icon: <DollarSign className="text-purple-400 w-6 h-6" />,
  },
  {
    title: 'Qualified Leads, Not Just Clicks',
    description:
      'We craft highly targeted campaigns designed to bring in buyers, not browsers. Every lead is qualified. Every campaign is ROI-obsessed.',
    icon: <BarChart3 className="text-purple-400 w-6 h-6" />,
  },
  {
    title: 'Sales Team Optimization',
    description:'We don’t stop at marketing. We train your sales team to close more deals, handle high-quality leads, and convert faster. That’s how you scale sustainably.',
    icon: <DollarSign className="text-purple-400 w-6 h-6" />,
  },
  {
    title: 'Proven 20x Scaling Systems',
    description:'Our frameworks are tested, battle-proven, and built to multiply. We don’t reinvent the wheel we put it in motion at 200 mph.',
    icon: <Repeat className="text-purple-400 w-6 h-6" />,
  },
  {
    title: 'Strategic Growth Partner',
    description:'We’re not a vendor. We’re your growth partner. We work hand-in-hand with you, aligning with your vision, goals, and bottom line to make every dollar count.',
    icon: <BarChart3 className="text-purple-400 w-6 h-6" />,
  },
];

export default function WhyUs() {
  return (
    <section className="relative z-10 py-20 px-4 sm:px-8 md:px-12 lg:px-20 bg-black overflow-hidden">
      {/* Fixed top border for beam start */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-900/80 to-transparent z-20" />


      {/* Animated spotlight beams */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-20 h-full bg-gradient-to-b from-purple-400/80 via-purple-500/30 to-transparent blur-3xl opacity-80 animate-lightBeam" />
        <div className="absolute top-0 left-1/2 w-20 h-full bg-gradient-to-b from-purple-400/80 via-purple-500/30 to-transparent blur-3xl opacity-80 animate-lightBeam delay-500" />
        <div className="absolute top-0 left-3/4 w-20 h-full bg-gradient-to-b from-purple-400/80 via-purple-500/30 to-transparent blur-3xl opacity-80 animate-lightBeam delay-1000" />
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block px-6 py-2 mb-4 text-sm font-medium border border-purple-500 rounded-full text-purple-300 bg-black/40"
        >
          BENEFITS
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl  font-bold tracking-tight text-white sm:text-3xl"
        >
          Why Choose Us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-4 sm:text-sm text-lg text-gray-400 max-w-2xl mx-auto"
        >
         <strong> Because scaling isn’t guesswork - it’s a science. And we’ve mastered it.</strong><br/>
In a world full of digital agencies offering generic services, Primescaler stands apart by delivering one thing: growth that pays off — fast, predictable, and measurable.
Here’s why 6–9 figure businesses choose Primescaler:

        </motion.p>
      </div>

      <div className="relative mt-16 grid gap-8 sm:grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            className="bg-gradient-to-b from-[#361d4b] to-black border border-purple-900/50 rounded-2xl p-6 backdrop-blur-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-black shadow-inner border border-purple-500 mb-4">
              {benefit.icon}
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-400 text-sm">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>

      <style jsx>{`
        @keyframes lightBeam {
          0% {
            transform: translateY(-80%);
            opacity: 0;
          }
          40% {
            opacity: 0.9;
          }
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
        }

        .animate-lightBeam {
          animation: lightBeam 5s ease-in-out infinite;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
