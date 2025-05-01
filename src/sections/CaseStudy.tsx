"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import MedicalHealthCare1 from "@/assets/Medical&HealthCare (1).png";
import MedicalHealthCare2 from "@/assets/Medical&HealthCare (2).png";
import Dental1 from '@/assets/DentalService (1).png';
import Dental from '@/assets/DentalCaseStudy.png';
import RealEstate from '@/assets/RealEstate (1).png';
import RealEstate1 from '@/assets/RealEstate (2).png';
import DuTelecom from '@/assets/DuTelecom (1).png';
import DuTelecom1 from '@/assets/DuTelecom (2).png';
import HairClinic from '@/assets/HairClinic (1).png';
import HairClinic1 from '@/assets/HairClinic (2).png';
import Health from '@/assets/Medical&HealthCare (1).png';
import Health1 from '@/assets/Medical&HealthCare (2).png';
import clsx from "clsx";

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
    { image: MedicalHealthCare2, label: "BEFORE RESULT" },
    { image: MedicalHealthCare1, label: "AFTER RESULT" },
  ];
  const [current1, setCurrent1] = useState(0);

  // Slider 2
  const slides2 = [
    { image: Dental1, label: "BEFORE RESULT" },
    { image: Dental, label: "AFTER RESULT" },
  ];
  const [current2, setCurrent2] = useState(0);

  const slides3 = [
    { image: RealEstate1, label: "BEFORE RESULT" },
    { image: RealEstate, label: "AFTER RESULT" },
  ];

  const [current3, setCurrent3] = useState(0);

  const slides4 = [
    { image: DuTelecom1, label: "BEFORE RESULT" },
    { image: DuTelecom, label: "AFTER RESULT" },
  ];

  const [current4, setCurrent4] = useState(0);
  const slides5 = [
    { image: HairClinic1, label: "BEFORE RESULT" },
    { image: HairClinic, label: "AFTER RESULT" },
  ];

  const [current5, setCurrent5] = useState(0);
  const slides6 = [
    { image: Health1, label: "BEFORE RESULT" },
    { image: Health, label: "AFTER RESULT" },
  ];
  const [current6, setCurrent6] = useState(0);


  // Autoplay intervals
  useEffect(() => {
    const timer1 = setInterval(() => {
      setCurrent1((prev) => (prev + 1) % slides1.length);
    }, 3000);
    const timer2 = setInterval(() => {
      setCurrent2((prev) => (prev + 1) % slides2.length);
    }, 3000);
    const timer3 = setInterval(() => {
        setCurrent3((prev) => (prev + 1) % slides3.length);
      }, 3000);
      const timer4 = setInterval(() => {
        setCurrent4((prev) => (prev + 1) % slides4.length);
      }, 3000);
      const timer5 = setInterval(() => {
        setCurrent5((prev) => (prev + 1) % slides5.length);
      }, 3000);
      const timer6 = setInterval(() => {
        setCurrent6((prev) => (prev + 1) % slides6.length);
      }, 3000);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      clearInterval(timer4);
      clearInterval(timer5);
      clearInterval(timer6);
    };
  }, []);

  return (
    <div className="min-h-screen mt-28 text-white px-5 md:px-10">
      <h3 className="text-4xl md:text-5xl mb-20 font-medium text-center tracking-tighter">
        RESULTS & CASE STUDIES
      </h3>

      {/* Card 1 */}
      <Card className="mb-16 text-white">
        <CardContent className="flex flex-col lg:flex-row justify-between items-center">
          <div className="flex flex-col gap-4 max-w-[650px]">
            {/* Header & Tags */}
            <div className="flex items-center gap-2 text-lg mb-6 bg-purple-400 text-black px-4 py-2 rounded-full font-bold">
              <ArrowUpRight className="w-5 h-5" />
              318K/MO TO 804K/MO IN 1 MONTHS
            </div>
            <h2 className="text-4xl font-bold mb-5">
              318K/MONTH TO <span className="text-purple-400">804K/MONTH</span> IN 1 MONTHS.
            </h2>
            <div className="flex flex-wrap gap-5 mb-2">
              <span className="bg-purple-400 text-black px-3 py-1 rounded-full font-semibold">Niche: Automobile</span>
              <span className="border border-purple-400 text-purple-400 px-3 py-1 rounded-full font-semibold">Meta Advertising</span>
              <span className="border border-white px-3 py-1 rounded-full font-semibold">Performance Creative</span>
              <span className="border border-white px-3 py-1 rounded-full font-semibold">CMO Consulting</span>
            </div>

            {/* 3 Column Table */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-lg text-gray-200">
              <div>
                <p className="font-semibold mb-2 text-purple-400">Stagnating</p>
                <ul className="space-y-1 list-disc list-outside">
                  <li>Performance ad creative.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-purple-400">Expectations</p>
                <ul className="space-y-1 list-disc list-outside">
                  <li>New improved Meta campaign</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-purple-400">Primescalar Results</p>
                <ul className="space-y-1 list-disc list-outside">
                  <li>Weekly iterations on performance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Slider 1 */}
          <div className="relative w-[400px]">
            <div className="absolute inset-0 rounded-xl bg-purple-800 blur-3xl z-0" />
            <div className="flex flex-col items-center gap-2 relative z-10">
              <div className="text-black bg-purple-400 font-bold px-4 py-2 rounded-full mb-4">
                {slides1[current1].label}
              </div>
              <Image
                src={slides1[current1].image}
                alt="Case Study Slide"
                className="rounded-xl w-[400px] h-auto object-cover"
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
          <div className="relative w-[400px]">
            <div className="absolute inset-0 rounded-xl bg-purple-800 blur-3xl z-0" />
            <div className="flex flex-col items-center gap-2 relative z-10">
              <div className="text-black bg-purple-400 font-bold px-4 py-2 rounded-full mb-4">
                {slides2[current2].label}
              </div>
              <Image
                src={slides2[current2].image}
                alt="Case Study Slide"
                className="rounded-xl w-[400px] h-[400px] object-cover"
              />
              <div className="flex justify-center mt-4 space-x-2">
                {slides2.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent2(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === current2? "bg-purple-500 scale-110" : "bg-gray-400"
                    } transition-all`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (same content as Card 1) */}
          <div className="flex flex-col gap-4 max-w-[650px]">
            {/* Header & Tags */}
            <div className="flex items-center gap-2 text-lg mb-6 bg-purple-400 text-black px-4 py-2 rounded-full font-bold">
              <ArrowUpRight className="w-5 h-5" />
              318K/MO TO 804K/MO IN 1 MONTHS
            </div>
            <h2 className="text-4xl font-bold mb-5">
              318K/MONTH TO <span className="text-purple-400">804K/MONTH</span> IN 1 MONTHS.
            </h2>
            <div className="flex flex-wrap gap-5 mb-2">
              <span className="bg-purple-400 text-black px-3 py-1 rounded-full font-semibold">Niche: Automobile</span>
              <span className="border border-purple-400 text-purple-400 px-3 py-1 rounded-full font-semibold">Meta Advertising</span>
              <span className="border border-white px-3 py-1 rounded-full font-semibold">Performance Creative</span>
              <span className="border border-white px-3 py-1 rounded-full font-semibold">CMO Consulting</span>
            </div>

            {/* 3 Column Table */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-lg text-gray-200">
              <div>
                <p className="font-semibold mb-2 text-purple-400">Stagnating</p>
                <ul className="space-y-1 list-disc list-outside">
                  <li>Performance ad creative.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-purple-400">Expectations</p>
                <ul className="space-y-1 list-disc list-outside">
                  <li>New improved Meta campaign</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-purple-400">Primescalar Results</p>
                <ul className="space-y-1 list-disc list-outside">
                  <li>Weekly iterations on performance</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
       {/* Card 3 */}
      <Card className="mb-16 text-white">
        <CardContent className="flex flex-col lg:flex-row justify-between items-center gap-14">
        <div className="flex flex-col gap-4 max-w-[650px]">
            {/* Header & Tags */}
            <div className="flex items-center gap-2 text-lg mb-6 bg-purple-400 text-black px-4 py-2 rounded-full font-bold">
              <ArrowUpRight className="w-5 h-5" />
              318K/MO TO 804K/MO IN 1 MONTHS
            </div>
            <h2 className="text-4xl font-bold mb-5">
              318K/MONTH TO <span className="text-purple-400">804K/MONTH</span> IN 1 MONTHS.
            </h2>
            <div className="flex flex-wrap gap-5 mb-2">
              <span className="bg-purple-400 text-black px-3 py-1 rounded-full font-semibold">Niche: Automobile</span>
              <span className="border border-purple-400 text-purple-400 px-3 py-1 rounded-full font-semibold">Meta Advertising</span>
              <span className="border border-white px-3 py-1 rounded-full font-semibold">Performance Creative</span>
              <span className="border border-white px-3 py-1 rounded-full font-semibold">CMO Consulting</span>
            </div>

            {/* 3 Column Table */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-lg text-gray-200">
              <div>
                <p className="font-semibold mb-2 text-purple-400">Stagnating</p>
                <ul className="space-y-1 list-disc list-outside">
                  <li>Performance ad creative.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-purple-400">Expectations</p>
                <ul className="space-y-1 list-disc list-outside">
                  <li>New improved Meta campaign</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-purple-400">Primescalar Results</p>
                <ul className="space-y-1 list-disc list-outside">
                  <li>Weekly iterations on performance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Slider 1 */}
          <div className="relative w-[400px]">
            <div className="absolute inset-0 rounded-xl bg-purple-800 blur-3xl z-0" />
            <div className="flex flex-col items-center gap-2 relative z-10">
              <div className="text-black bg-purple-400 font-bold px-4 py-2 rounded-full mb-4">
                {slides3[current3].label}
              </div>
              <Image
                src={slides3[current3].image}
                alt="Case Study Slide"
                className="rounded-xl w-[400px] h-auto object-cover"
              />
              <div className="flex justify-center mt-4 space-x-2">
                {slides3.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent3(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === current3 ? "bg-purple-500 scale-110" : "bg-gray-400"
                    } transition-all`}
                  />
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
       {/* Card 4 */}
      <Card className="mb-16 text-white">
        <CardContent className="flex flex-col lg:flex-row justify-between items-center gap-14">
          {/* Slider 4 */}
          <div className="relative w-[400px]">
            <div className="absolute inset-0 rounded-xl bg-purple-800 blur-3xl z-0" />
            <div className="flex flex-col items-center gap-2 relative z-10">
              <div className="text-black bg-purple-400 font-bold px-4 py-2 rounded-full mb-4">
                {slides4[current4].label}
              </div>
              <Image
                src={slides4[current4].image}
                alt="Case Study Slide"
                className="rounded-xl w-[400px] h-auto object-cover"
              />
              <div className="flex justify-center mt-4 space-x-2">
                {slides4.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent4(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === current4? "bg-purple-500 scale-110" : "bg-gray-400"
                    } transition-all`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (same content as Card 1) */}
          <div className="flex flex-col gap-4 max-w-[650px]">
            {/* Header & Tags */}
            <div className="flex items-center gap-2 text-lg mb-6 bg-purple-400 text-black px-4 py-2 rounded-full font-bold">
              <ArrowUpRight className="w-5 h-5" />
              318K/MO TO 804K/MO IN 1 MONTHS
            </div>
            <h2 className="text-4xl font-bold mb-5">
              318K/MONTH TO <span className="text-purple-400">804K/MONTH</span> IN 1 MONTHS.
            </h2>
            <div className="flex flex-wrap gap-5 mb-2">
              <span className="bg-purple-400 text-black px-3 py-1 rounded-full font-semibold">Niche: Automobile</span>
              <span className="border border-purple-400 text-purple-400 px-3 py-1 rounded-full font-semibold">Meta Advertising</span>
              <span className="border border-white px-3 py-1 rounded-full font-semibold">Performance Creative</span>
              <span className="border border-white px-3 py-1 rounded-full font-semibold">CMO Consulting</span>
            </div>

            {/* 3 Column Table */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-lg text-gray-200">
              <div>
                <p className="font-semibold mb-2 text-purple-400">Stagnating</p>
                <ul className="space-y-1 list-disc list-outside">
                  <li>Performance ad creative.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-purple-400">Expectations</p>
                <ul className="space-y-1 list-disc list-outside">
                  <li>New improved Meta campaign</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-purple-400">Primescalar Results</p>
                <ul className="space-y-1 list-disc list-outside">
                  <li>Weekly iterations on performance</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
       {/* Card 5 */}
      <Card className="mb-16 text-white">
        <CardContent className="flex flex-col lg:flex-row justify-between items-center gap-14">
        <div className="flex flex-col gap-4 max-w-[650px]">
            {/* Header & Tags */}
            <div className="flex items-center gap-2 text-lg mb-6 bg-purple-400 text-black px-4 py-2 rounded-full font-bold">
              <ArrowUpRight className="w-5 h-5" />
              318K/MO TO 804K/MO IN 1 MONTHS
            </div>
            <h2 className="text-4xl font-bold mb-5">
              318K/MONTH TO <span className="text-purple-400">804K/MONTH</span> IN 1 MONTHS.
            </h2>
            <div className="flex flex-wrap gap-5 mb-2">
              <span className="bg-purple-400 text-black px-3 py-1 rounded-full font-semibold">Niche: Automobile</span>
              <span className="border border-purple-400 text-purple-400 px-3 py-1 rounded-full font-semibold">Meta Advertising</span>
              <span className="border border-white px-3 py-1 rounded-full font-semibold">Performance Creative</span>
              <span className="border border-white px-3 py-1 rounded-full font-semibold">CMO Consulting</span>
            </div>

            {/* 3 Column Table */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-lg text-gray-200">
              <div>
                <p className="font-semibold mb-2 text-purple-400">Stagnating</p>
                <ul className="space-y-1 list-disc list-outside">
                  <li>Performance ad creative.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-purple-400">Expectations</p>
                <ul className="space-y-1 list-disc list-outside">
                  <li>New improved Meta campaign</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-purple-400">Primescalar Results</p>
                <ul className="space-y-1 list-disc list-outside">
                  <li>Weekly iterations on performance</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Slider 5 */}
          <div className="relative w-[400px]">
            <div className="absolute inset-0 rounded-xl bg-purple-800 blur-3xl z-0" />
            <div className="flex flex-col items-center gap-2 relative z-10">
              <div className="text-black bg-purple-400 font-bold px-4 py-2 rounded-full mb-4">
                {slides5[current5].label}
              </div>
              <Image
                src={slides5[current5].image}
                alt="Case Study Slide"
                className="rounded-xl w-[400px] h-auto object-cover"
              />
              <div className="flex justify-center mt-4 space-x-2">
                {slides5.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent5(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === current5 ? "bg-purple-500 scale-110" : "bg-gray-400"
                    } transition-all`}
                  />
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
       {/* Card 6 */}
      <Card className="mb-16 text-white">
        <CardContent className="flex flex-col lg:flex-row justify-between items-center gap-14">
          {/* Slider 6 */}
          <div className="relative w-[400px]">
            <div className="absolute inset-0 rounded-xl bg-purple-800 blur-3xl z-0" />
            <div className="flex flex-col items-center gap-2 relative z-10">
              <div className="text-black bg-purple-400 font-bold px-4 py-2 rounded-full mb-4">
                {slides6[current6].label}
              </div>
              <Image
                src={slides6[current6].image}
                alt="Case Study Slide"
                className="rounded-xl w-[400px] h-auto object-cover"
              />
              <div className="flex justify-center mt-4 space-x-2">
                {slides6.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent6(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === current6 ? "bg-purple-500 scale-110" : "bg-gray-400"
                    } transition-all`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (same content as Card 1) */}
          <div className="flex flex-col gap-4 max-w-[650px]">
            {/* Header & Tags */}
            <div className="flex items-center gap-2 text-lg mb-6 bg-purple-400 text-black px-4 py-2 rounded-full font-bold">
              <ArrowUpRight className="w-5 h-5" />
              318K/MO TO 804K/MO IN 1 MONTHS
            </div>
            <h2 className="text-4xl font-bold mb-5">
              318K/MONTH TO <span className="text-purple-400">804K/MONTH</span> IN 1 MONTHS.
            </h2>
            <div className="flex flex-wrap gap-5 mb-2">
              <span className="bg-purple-400 text-black px-3 py-1 rounded-full font-semibold">Niche: Automobile</span>
              <span className="border border-purple-400 text-purple-400 px-3 py-1 rounded-full font-semibold">Meta Advertising</span>
              <span className="border border-white px-3 py-1 rounded-full font-semibold">Performance Creative</span>
              <span className="border border-white px-3 py-1 rounded-full font-semibold">CMO Consulting</span>
            </div>

            {/* 3 Column Table */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-lg text-gray-200">
              <div>
                <p className="font-semibold mb-2 text-purple-400">Stagnating</p>
                <ul className="space-y-1 list-disc list-outside">
                  <li>Performance ad creative.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-purple-400">Expectations</p>
                <ul className="space-y-1 list-disc list-outside">
                  <li>New improved Meta campaign</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2 text-purple-400">Primescalar Results</p>
                <ul className="space-y-1 list-disc list-outside">
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

