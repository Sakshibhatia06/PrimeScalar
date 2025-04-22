"use client";
// components/OurProcessSection.tsx
import { motion } from 'framer-motion';
import step1 from '@/assets/step (1).jpg'
import step2 from '@/assets/step (2).jpg'
import step3 from '@/assets/step (3).jpg'
import step4 from '@/assets/step (4).jpg'
import step5 from '@/assets/step (5).jpg'
import Image from 'next/image';

const processData = [
  {
    title: '1.	Discovery Call & Audit',
    description: 'We kick off with a discovery session to understand your business, goals, and challenges. This is followed by a comprehensive audit of your current strategies, identifying areas for growth and quick wins.',
    image: step1,
  },
  {
    title: '2.	Industry-Specific Strategy Blueprint',
    description: 'Based on the audit, we create a tailored blueprint designed specifically for your industry. This strategic roadmap includes branding, content, outreach, and automation steps to drive measurable success.',
    image: step2,
  },
  {
    title: '3.	Qualified Lead Generation Begins',
    description: 'We launch targeted campaigns to attract high-quality leads using proven funnels and ad strategies. Each lead is vetted to ensure alignment with your ideal client profile.',
    image: step3,
  },
  {
    title: '4.	Sales Team Coaching & Follow-up Systems',
    description: 'We empower your sales team with customized training, scripts, and CRM workflows. Automated follow-up systems are implemented to convert leads into long-term clients efficiently.',
    image: step4,
  },
  {
    title: '5.	Scale & Repeat',
    description: 'With systems in place and results flowing, we help you scale campaigns to increase ROI. We continuously test, optimize, and repeat what"s working to sustain predictable growth.',
    image: step5,
  }
];

export default function OurProcessPage() {
  return (
    <section className="bg-black text-white py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          OUR <span className="text-purple-400">PROCESS</span>.
        </h2>
        <p className="text-center text-lg text-white/70 mb-12">Turning vision into action</p>

        <div className="grid md:grid-cols-3 gap-6">
          {processData.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              <Image
                src={step.image}
                alt={step.title}
                width={400}
                height={200}
                className="object-cover w-[400px] h-[300px] group-hover:scale-125 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-6">
                <h3 className="text-2xl font-bold tracking-wide mb-2">{step.title}</h3>
                <p className="text-sm text-white/80">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
