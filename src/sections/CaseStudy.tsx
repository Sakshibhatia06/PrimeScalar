"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import VideoPortfolio1 from "@/assets/Casestudy1.png";
import VideoPortfolio2 from "@/assets/Casestudy2.png";
import VideoPortfolio3 from "@/assets/Casestudy3.png";
import VideoPortfolio4 from "@/assets/Casestudy4.png";
import clsx from "clsx";
import { Button } from "@/components/Button";
import Link from "next/link";

// Card wrapper
const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx("rounded-2xl shadow-xl", className)} {...props} />
);

// Card content padding
const CardContent = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx("p-6", className)} {...props} />
);

const CaseStudy = () => {
  // Slider 1
  const slides1 = [
    { image: VideoPortfolio1, label: "BEFORE RESULT" },
    { image: VideoPortfolio2, label: "AFTER RESULT" },
  ];
  const [current1, setCurrent1] = useState(0);

  // Slider 2
  const slides2 = [
    { image: VideoPortfolio3, label: "BEFORE RESULT" },
    { image: VideoPortfolio4, label: "AFTER RESULT" },
  ];
  const [current2, setCurrent2] = useState(0);

  // Autoplay intervals
  useEffect(() => {
    const timer1 = setInterval(() => {
      setCurrent1((prev) => (prev + 1) % slides1.length);
    }, 3000);
    const timer2 = setInterval(() => {
      setCurrent2((prev) => (prev + 1) % slides2.length);
    }, 3000);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
    };
  }, []);

  return (
    <div className="min-h-screen mt-28 text-white py-5 px-5 md:px-20">
      <h3 className="text-4xl md:text-5xl font-medium text-center tracking-tighter">
        RESULTS & CASE STUDIES
      </h3>

      {/* Card 1 */}
      <Card className="mb-16 text-white">
        <CardContent className="flex flex-col lg:flex-row justify-between items-center gap-14">
          <div className="flex flex-col gap-4 max-w-xl">
            {/* Header & Tags */}
            <div className="flex items-center gap-2 bg-purple-400 text-black px-4 py-2 rounded-full font-bold">
              <ArrowUpRight className="w-5 h-5" />
              318K/MO TO 804K/MO IN 1 MONTHS
            </div>
            <h2 className="text-4xl font-bold">
              318K/MONTH TO <span className="text-purple-400">804K/MONTH</span> IN 1 MONTHS.
            </h2>
            <div className="flex flex-wrap gap-2">
              <span className="bg-purple-400 text-black px-3 py-1 rounded-full font-semibold">Niche: Automobile</span>
              <span className="border border-purple-400 text-purple-400 px-3 py-1 rounded-full font-semibold">Meta Advertising</span>
              <span className="border border-white px-3 py-1 rounded-full font-semibold">Performance Creative</span>
              <span className="border border-white px-3 py-1 rounded-full font-semibold">CMO Consulting</span>
            </div>

            {/* 3 Column Table */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg text-gray-200">
              <div>
                <p className="font-semibold mb-2 text-purple-400">Stagnating</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Performance ad creative.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-purple-400">Expectations</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>New improved Meta campaign</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-purple-400">Primescalar Results</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Weekly iterations on performance</li>
                </ul>
              </div>
            </div>

            {/* Button */}
            <div className="w-[150px]">
              <Link href="/case-studies">
                <Button>Read More</Button>
              </Link>
            </div>
          </div>

          {/* Slider 1 */}
          <div className="relative w-[500px]">
            <div className="absolute inset-0 rounded-xl bg-purple-800 blur-3xl z-0" />
            <div className="flex flex-col items-center gap-2 relative z-10">
              <div className="text-black bg-purple-400 font-bold px-4 py-2 rounded-full mb-4">
                {slides1[current1].label}
              </div>
              <Image
                src={slides1[current1].image}
                alt="Case Study Slide"
                className="rounded-xl w-full h-auto object-cover"
              />
              <div className="flex justify-center mt-4 space-x-2">
                {slides1.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent1(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === current1 ? "bg-purple-500 scale-110" : "bg-gray-400"
                    } transition-all`}
                  />
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Card 2 */}
      <Card className="mb-16 text-white">
        <CardContent className="flex flex-col lg:flex-row justify-between items-center gap-14">
          {/* Slider 2 */}
          <div className="relative w-[500px]">
            <div className="absolute inset-0 rounded-xl bg-purple-800 blur-3xl z-0" />
            <div className="flex flex-col items-center gap-2 relative z-10">
              <div className="text-black bg-purple-400 font-bold px-4 py-2 rounded-full mb-4">
                {slides2[current2].label}
              </div>
              <Image
                src={slides2[current2].image}
                alt="Case Study Slide"
                className="rounded-xl  w-full h-auto object-cover"
              />
              <div className="flex justify-center mt-4 space-x-2">
                {slides2.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent2(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === current2 ? "bg-purple-500 scale-110" : "bg-gray-400"
                    } transition-all`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (same content as Card 1) */}
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg text-gray-200">
              <div>
                <p className="font-semibold mb-2 text-purple-400">Stagnating</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Performance ad creative.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-purple-400">Expectations</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>New improved Meta campaign</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-purple-400">Primescalar Results</p>
                <ul className="space-y-1 list-disc list-inside">
                  <li>Weekly iterations on performance</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CaseStudy;
