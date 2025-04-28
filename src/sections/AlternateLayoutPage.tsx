// pages/index.tsx
import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import VideoPortfolio from '@/assets/Portfolio.gif'
import clsx from "clsx";

// Card wrapper
const Card = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={clsx("rounded-2xl shadow-xl", className)}
    {...props}
  />
);

// Card content padding
const CardContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx("p-6", className)} {...props} />
);

const AlternateLayoutPage = () => {
  return (
    <div id="case-studies"
      className="min-h-screen mt-28 text-white py-5 px-5 md:px-20"
    >
      <h3 className="text-4xl md:text-5xl font-medium text-center tracking-tighter">RESULTS & CASE STUDIES</h3>
      {/* Case Study 1 */}
      <Card className="mb-16 text-white">
        <CardContent className="flex flex-col lg:flex-row justify-between items-center gap-14">
          <div className="flex flex-col gap-4 max-w-xl">
            <div className="flex items-center gap-2 bg-purple-400 text-black px-4 py-2 rounded-full font-bold">
              <ArrowUpRight className="w-5 h-5" />
              318K/MO TO 804K/MO IN 1 MONTHS
            </div>
            <h2 className="text-4xl font-bold">
              318K/MONTH TO <span className="text-purple-400">804K/MONTH</span> IN 1 MONTHS.
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-400 text-black px-3 py-1 rounded-full font-semibold">
                Niche: Automobile
              </span>
              <span className="border border-purple-400 text-purple-400 px-3 py-1 rounded-full font-semibold">
                Meta Advertising
              </span>
              <span className="border border-white px-3 py-1 rounded-full font-semibold">
                Performance Creative
              </span>
              <span className="border border-white px-3 py-1 rounded-full font-semibold">
                CMO Consulting
              </span>
            </div>
            <div className="text-lg space-y-1">
              <p>• Scripted and produced performance ad creative.</p>
              <p>• New improved Meta campaign structure to leverage performance creative.</p>
              <p>• Weekly iterations on performance creative to drive down CPA week-on-week.</p>
            </div>
          </div>

          {/* Glowing Chart Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-purple-800 blur-3xl z-0" />
            <Image
              src={VideoPortfolio}
              alt="Case Study 1"
              className="rounded-xl relative z-10"
            />
          </div>
        </CardContent>
      </Card>
      <Card className="mb-16 text-white">
        <CardContent className="flex flex-col lg:flex-row justify-between items-center gap-14">
           {/* Glowing Chart Image */}
           <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-purple-800 blur-3xl z-0" />
            <Image
              src={VideoPortfolio}
              alt="Case Study 1"
              className="rounded-xl relative z-10"
            />
          </div>
          <div className="flex flex-col gap-4 max-w-xl">
            <div className="flex items-center gap-2 bg-purple-400 text-black px-4 py-2 rounded-full font-bold">
              <ArrowUpRight className="w-5 h-5" />
              318K/MO TO 804K/MO IN 1 MONTHS
            </div>
            <h2 className="text-4xl font-bold">
              318K/MONTH TO <span className="text-purple-400">804K/MONTH</span> IN 1 MONTHS.
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-400 text-black px-3 py-1 rounded-full font-semibold">
                Niche: Automobile
              </span>
              <span className="border border-purple-400 text-purple-400 px-3 py-1 rounded-full font-semibold">
                Meta Advertising
              </span>
              <span className="border border-white px-3 py-1 rounded-full font-semibold">
                Performance Creative
              </span>
              <span className="border border-white px-3 py-1 rounded-full font-semibold">
                CMO Consulting
              </span>
            </div>
            <div className="text-lg space-y-1">
              <p>• Scripted and produced performance ad creative.</p>
              <p>• New improved Meta campaign structure to leverage performance creative.</p>
              <p>• Weekly iterations on performance creative to drive down CPA week-on-week.</p>
            </div>
          </div>
        </CardContent>
      </Card>

     
    </div>
  );
};

export default AlternateLayoutPage;
