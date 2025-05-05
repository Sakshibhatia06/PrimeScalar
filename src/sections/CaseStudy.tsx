"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import MedicalHealthCare1 from "@/assets/Medical&HealthCare (1).png";
import MedicalHealthCare2 from "@/assets/Medical&HealthCare (2).png";
import MedicalHealthCare3 from "@/assets/Medical&HealthCare (3).png";
import MedicalHealthCare4 from "@/assets/Medical&HealthCare (4).png";
import Dental1 from '@/assets/DentalService (1).png';
import Dental from '@/assets/DentalCaseStudy.png';
import Dental2 from '@/assets/DentalService.png';
import VideoPortfolio from '@/assets/DrivingInstitute.png';
import RealEstate from '@/assets/RealEstate (1).png';
import RealEstate1 from '@/assets/RealEstate (2).png';
import FoodCafe from '@/assets/Food&Cafes (1).png';
import FoodCafe1 from '@/assets/Food&Cafes (2).png';
import HairClinic from '@/assets/HairClinic (1).png';
import HairClinic1 from '@/assets/HairClinic (2).png';
import Health1 from '@/assets/Beauty (2).png';
import Health2 from '@/assets/Beauty (3).png';
import clsx from "clsx";
import { motion } from "framer-motion";

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
        { image: MedicalHealthCare3, label: "BEFORE RESULT" },
        { image: MedicalHealthCare4, label: "AFTER RESULT" },
        { image: MedicalHealthCare2, label: "BEFORE RESULT" },
        { image: MedicalHealthCare1, label: "AFTER RESULT" },
    ];
    const [current1, setCurrent1] = useState(0);

    const slides6 = [
        { image: Health1, label: "BEFORE RESULT" },
        { image: Health2, label: "AFTER RESULT" },
    ];
    const [current6, setCurrent6] = useState(0);

    // Slider 2
    const slides2 = [
        { image: Dental1, label: "BEFORE RESULT" },
        { image: Dental, label: "AFTER RESULT" },
        { image: Dental2, label: "AFTER RESULT" },
    ];
    const [current2, setCurrent2] = useState(0);

    const slides3 = [
        { image: RealEstate, label: "BEFORE RESULT" },
        { image: RealEstate1, label: "AFTER RESULT" },
    ];

    const [current3, setCurrent3] = useState(0);

    const slides4 = [
        { image: FoodCafe1, label: "BEFORE RESULT" },
        { image: FoodCafe, label: "AFTER RESULT" },
    ];

    const [current4, setCurrent4] = useState(0);
    const slides5 = [
        { image: HairClinic1, label: "BEFORE RESULT" },
        { image: HairClinic, label: "AFTER RESULT" },
    ];
    const [current5, setCurrent5] = useState(0);


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
            <div className="flex justify-center items-center lg:mb-20 mb-5">
                <motion.div
                    className="bg-white/10 max-w-fit text-center backdrop-blur-sm text-2xl md:text-4xl font-bold text-white px-6 py-2 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    RESULTS & CASE STUDIES
                </motion.div>
            </div>

            {/* Card 1 */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                <Card className="mb-16 text-white">
                    <CardContent className="flex flex-col lg:flex-row justify-between items-center">
                        <div className="flex flex-col gap-4 max-w-[650px]">
                            {/* Header & Tags */}
                            <div className="flex items-center gap-2 text-lg mb-6 bg-purple-400 text-black px-4 py-2 rounded-full font-bold">
                                <ArrowUpRight className="w-5 h-5" />
                                318K/MO TO 804K/MO IN 1 MONTHS
                            </div>
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.04, // Adjust speed here
                                        },
                                    },
                                }}
                                className="text-4xl font-bold mb-5 flex flex-wrap"
                            >
                                {"318K/MONTH TO 804K/MONTH IN 1 MONTHS.".split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                        className={
                                            char === " " ? "w-2" : char.match(/[804K MONTH]+/g) ? "text-purple-400" : ""
                                        }
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="flex flex-wrap gap-5 mb-2">
                                <span className="bg-purple-400 text-black px-3 py-1 rounded-full font-semibold">Niche: Medical & Healthcare</span>
                                <span className="border border-purple-400 text-purple-400 px-3 py-1 rounded-full font-semibold">600+ Conversions</span>
                                <span className="border border-white px-3 py-1 rounded-full font-semibold">$152K+ in Value</span>
                                <span className="border border-white px-3 py-1 rounded-full font-semibold"> 2X ROAS Growth</span>
                            </motion.div>

                            {/* 3 Column Table */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg text-gray-200">
                                <div>
                                    <p className="font-semibold mb-2 text-purple-400">Stagnating</p>
                                    <ul className="space-y-1 list-disc list-outside">
                                        <li>ROAS stuck at 3.26x</li>
                                        <li>High cost per conversion at $69.74</li>
                                        <li>Conversions limited to 348.98</li>
                                        <li>Nearly $24K+ ad spend with minimal scaling</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold mb-2 text-purple-400">Expectations</p>
                                    <ul className="space-y-1 list-disc list-outside">
                                        <li> Lower cost per conversion</li>
                                        <li> Higher number of qualified leads</li>
                                        <li>Improved ROI without
                                        increasing ad spend</li>
                                        <li>Smarter campaign optimization</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold mb-2 text-purple-400">Primescalar Results</p>
                                    <ul className="space-y-1 list-disc list-outside">
                                        <li>ROAS boosted to 6.10x</li>
                                        <li>Cost per conversion dropped to $41.69</li>
                                        <li>Conversions jumped to 600+</li>
                                        <li>Conversion value increased to
                                        $152K+ with similar budget</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>

                        {/* Slider 1 */}
                        <div className="relative w-[400px] mt-10 lg:mt-3 px-5 lg:px-2">
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
                                            className={`w-3 h-3 rounded-full ${index === current1 ? "bg-purple-500 scale-110" : "bg-gray-400"
                                                } transition-all`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>

            {/* Card 2 */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                <Card className="mb-16 text-white">
                    <CardContent className="flex flex-col lg:flex-row justify-between items-center gap-14">
                        {/* Slider 2 */}
                        <div className="relative w-[400px] mt-10 lg:mt-3 px-5 lg:px-2">
                            <div className="absolute inset-0 rounded-xl bg-purple-800 blur-3xl z-0" />
                            <div className="flex flex-col items-center gap-2 relative z-10">
                                <div className="text-black bg-purple-400 font-bold px-4 py-2 rounded-full mb-4">
                                    {slides2[current2].label}
                                </div>
                                <Image
                                    src={slides2[current2].image}
                                    alt="Case Study Slide"
                                    className="rounded-xl w-[400px] object-cover"
                                />
                                <div className="flex justify-center mt-4 space-x-2">
                                    {slides2.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrent2(index)}
                                            className={`w-3 h-3 rounded-full ${index === current2 ? "bg-purple-500 scale-110" : "bg-gray-400"
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
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.04, // Adjust speed here
                                        },
                                    },
                                }}
                                className="text-4xl font-bold mb-5 flex flex-wrap"
                            >
                                {"From Wasted Spend to Winning Campaigns: See the Real Numbers That Made the Difference".split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                        className={
                                            char === " " ? "w-2" : char.match(/[That Made the]+/g) ? "text-purple-400" : ""
                                        }
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.h2>

                            <motion.div initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="flex flex-wrap gap-5 mb-2">
                                <span className="bg-purple-400 text-black px-3 py-1 rounded-full font-semibold">Niche: Dental Services</span>
                                <span className="border border-purple-400 text-purple-400 px-3 py-1 rounded-full font-semibold">Meta Advertising</span>
                                <span className="border border-white px-3 py-1 rounded-full font-semibold">Performance Creative</span>
                                <span className="border border-white px-3 py-1 rounded-full font-semibold">CMO Consulting</span>
                            </motion.div>

                            {/* 3 Column Table */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg text-gray-200">
                                <div>
                                    <p className="font-semibold mb-2 text-purple-400">Stagnating</p>
                                    <ul className="space-y-1 list-disc list-outside">
                                        <li>AED 265.78 per lead</li>
                                        <li>Only 3 conversions with AED
                                        797 spend</li>
                                        <li>CTR below 3%</li>
                                        <li>Poor ad structure and weak
                                        copy</li>
                                        <li>No negative keywords used</li>
                                        <li>Untargeted locations</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold mb-2 text-purple-400">Expectations</p>
                                    <ul className="space-y-1 list-disc list-outside">
                                        <li>Reduce cost per
                                        conversion</li>
                                        <li>Get consistent daily
                                        leads</li>
                                        <li>Improve click-through
                                        rate</li>
                                        <li>Better ad quality and
                                        relevance</li>
                                        <li>Improve lead quality</li>
                                        <li> Focus on local high-intent areas                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold mb-2 text-purple-400">Primescalar Results</p>
                                    <ul className="space-y-1 list-disc list-outside">
                                        <li>AED 35.83 per lead</li>
                                        <li>38 conversions with AED 1,361 spend</li>
                                        <li>CTR boosted to over 8%</li>
                                        <li>Rewritten ad copy with strong CTA and
                                        intent match</li>
                                        <li>Wasted spend reduced through negative keywords</li>
                                        <li>Hyper-targeted local ads bringing real patients</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
            {/* Card 3 */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                <Card className="mb-16 text-white">
                    <CardContent className="flex flex-col lg:flex-row justify-between items-center gap-14">
                        <div className="flex flex-col gap-4 max-w-[650px]">
                            {/* Header & Tags */}
                            <div className="flex items-center gap-2 text-lg mb-6 bg-purple-400 text-black px-4 py-2 rounded-full font-bold">
                                <ArrowUpRight className="w-5 h-5" />
                                318K/MO TO 804K/MO IN 1 MONTHS
                            </div>
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.04, // Adjust speed here
                                        },
                                    },
                                }}
                                className="text-4xl font-bold mb-5 flex flex-wrap"
                            >
                                {"318K/MONTH TO 804K/MONTH IN 1 MONTHS.".split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                        className={
                                            char === " " ? "w-2" : char.match(/[804K MONTH]+/g) ? "text-purple-400" : ""
                                        }
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.h2>
                            <motion.div initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="flex flex-wrap gap-5 mb-2">
                                <span className="bg-purple-400 text-black px-3 py-1 rounded-full font-semibold">Niche: Real Estate</span>
                                <span className="border border-purple-400 text-purple-400 px-3 py-1 rounded-full font-semibold">144 Leads</span>
                                <span className="border border-white px-3 py-1 rounded-full font-semibold">26.16% Hook Rate</span>
                                <span className="border border-white px-3 py-1 rounded-full font-semibold">Up to 70% Lower Cost per Lead</span>
                            </motion.div>

                            {/* 3 Column Table */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg text-gray-200">
                                <div>
                                    <p className="font-semibold mb-2 text-purple-400">Stagnating</p>
                                    <ul className="space-y-1 list-disc list-outside">
                                        <li>- High cost per lead (up to AED
                                            435.59)</li>
                                        <li>Low lead volume (2–17 leads)</li>
                                        <li>Total leads capped at 144</li>
                                        <li>Very low hook rates (0.09%
                                            on some campaigns)</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold mb-2 text-purple-400">Expectations</p>
                                    <ul className="space-y-1 list-disc list-outside">
                                        <li>Reduce cost per lead
                                        significantly</li>
                                        <li>Scale lead volume without
                                        increasing CPL</li>
                                        <li>Improve hook rates with
                                        better ad creatives</li>
                                        <li>Maximize ROI from Meta
                                        ads</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold mb-2 text-purple-400">Primescalar Results</p>
                                    <ul className="space-y-1 list-disc list-outside">
                                        <li>Generated 76 leads in a single campaign</li>
                                        <li> Scaled from 144 to 1037+ total
                                        leads</li>
                                        <li>Hook rate improved to 34.15%</li>
                                        <li>Reduced CPL by up to 70% on top performing campaigns</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>

                        {/* Slider 1 */}
                        <div className="relative w-[400px] mt-10 lg:mt-3 px-5 lg:px-2">
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
                                            className={`w-3 h-3 rounded-full ${index === current3 ? "bg-purple-500 scale-110" : "bg-gray-400"
                                                } transition-all`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
            {/* Card 4 */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                <Card className="mb-16 text-white">
                    <CardContent className="flex flex-col lg:flex-row justify-between items-center gap-14">
                        {/* Slider 4 */}
                        <div className="relative w-[400px] mt-10 lg:mt-3 px-5 lg:px-2">
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
                                            className={`w-3 h-3 rounded-full ${index === current4 ? "bg-purple-500 scale-110" : "bg-gray-400"
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
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.04, // Adjust speed here
                                        },
                                    },
                                }}
                                className="text-4xl font-bold mb-5 flex flex-wrap"
                            >
                                {"318K/MONTH TO 804K/MONTH IN 1 MONTHS.".split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                        className={
                                            char === " " ? "w-2" : char.match(/[804K MONTH]+/g) ? "text-purple-400" : ""
                                        }
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.h2>
                            <motion.div initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="flex flex-wrap gap-5 mb-2">
                                <span className="bg-purple-400 text-black px-3 py-1 rounded-full font-semibold">Niche: Food & Cafes</span>
                                <span className="border border-purple-400 text-purple-400 px-3 py-1 rounded-full font-semibold">337 Website Leads</span>
                                <span className="border border-white px-3 py-1 rounded-full font-semibold">$2.91 CPL</span>
                                <span className="border border-white px-3 py-1 rounded-full font-semibold">120K+ Impressions</span>
                            </motion.div>

                            {/* 3 Column Table */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg text-gray-200">
                                <div>
                                    <p className="font-semibold mb-2 text-purple-400">Stagnating</p>
                                    <ul className="space-y-1 list-disc list-outside">
                                        <li>Low lead flow (avg. under 35
                                            leads per campaign)</li>
                                        <li>High CPL up to $3.33</li>
                                        <li> Reach capped around 5K–10K
                                        users</li>
                                        <li>Inconsistent campaign
                                        performance</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold mb-2 text-purple-400">Expectations</p>
                                    <ul className="space-y-1 list-disc list-outside">
                                        <li>Consistent lead generation</li>
                                        <li>CPL below $3</li>
                                        <li>Stronger reach &
                                        impressions</li>
                                        <li>Drive footfall via targeted
                                        local campaigns</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold mb-2 text-purple-400">Primescalar Results</p>
                                    <ul className="space-y-1 list-disc list-outside">
                                        <li>337 website leads in total</li>
                                        <li>$2.91 CPL—within target budget </li>
                                        <li>120,000+ impressions from just
                                        52K reach</li>
                                        <li>Significantly improved ad
                                        consistency and performance </li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
            {/* Card 5 */}

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                <Card className="mb-16 text-white">
                    <CardContent className="flex flex-col lg:flex-row justify-between items-center gap-14">
                        <div className="flex flex-col gap-4 max-w-[650px]">
                            {/* Header & Tags */}
                            <div className="flex items-center gap-2 text-lg mb-6 bg-purple-400 text-black px-4 py-2 rounded-full font-bold">
                                <ArrowUpRight className="w-5 h-5" />
                                318K/MO TO 804K/MO IN 1 MONTHS
                            </div>
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.04, // Adjust speed here
                                        },
                                    },
                                }}
                                className="text-4xl font-bold mb-5 flex flex-wrap"
                            >
                                {"Turning Clicks into Clients: How We Boosted Hair Clinic Leads in Just 2 Weeks".split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                        className={
                                            char === " " ? "w-2" : char.match(/[804K MONTH]+/g) ? "text-purple-400" : ""
                                        }
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.h2>

                            <motion.div initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="flex flex-wrap gap-5 mb-2">
                                <span className="bg-purple-400 text-black px-3 py-1 rounded-full font-semibold">Niche: Hair Clinic</span>
                                <span className="border border-purple-400 text-purple-400 px-3 py-1 rounded-full font-semibold">Meta Advertising</span>
                                <span className="border border-white px-3 py-1 rounded-full font-semibold">Performance Creative</span>
                                <span className="border border-white px-3 py-1 rounded-full font-semibold">CMO Consulting</span>
                            </motion.div>

                            {/* 3 Column Table */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg text-gray-200">
                                <div>
                                    <p className="font-semibold mb-2 text-purple-400">Stagnating</p>
                                    <ul className="space-y-1 list-disc list-outside">
                                        <li>Only 56 leads in 13 days</li>
                                        <li>Low reach of 14,260</li>
                                        <li>Poor impression volume
                                        (26,188)</li>
                                        <li>Limited ad performance due
                                        to poor segmentation</li>
                                        <li>No consistent growth in ad
                                        sets</li>
                                        <li>Missed follow-ups due to
                                        lead quality issues</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold mb-2 text-purple-400">Expectations</p>
                                    <ul className="space-y-1 list-disc list-outside">
                                        <li>Increase lead volume
                                        significantly</li>
                                        <li>Improve ad visibility</li>
                                        <li>Get ads seen by more
                                        potential clients</li>
                                        <li>Use better audience
                                        targeting</li>
                                        <li>Achieve steady
                                        performance across ad sets</li>
                                        <li>Improve lead intent</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold mb-2 text-purple-400">Primescalar Results</p>
                                    <ul className="space-y-1 list-disc list-outside">
                                        <li>73 leads in the next 13 days</li>
                                        <li>Reach increased to 26,002</li>
                                        <li>Impressions nearly doubled to 48,157</li>
                                        <li>Audience refined for more efficient lead
                                        generation</li>
                                        <li>Multiple ad sets delivered strong lead volume</li>
                                        <li>On-Facebook leads showed higher potential engagement and better conversion</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                        {/* Slider 5 */}
                        <div className="relative w-[400px] mt-10 lg:mt-3 px-5 lg:px-2">
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
                                            className={`w-3 h-3 rounded-full ${index === current5 ? "bg-purple-500 scale-110" : "bg-gray-400"
                                                } transition-all`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
            {/* Card 6 */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                <Card className="mb-16 text-white">
                    <CardContent className="flex flex-col lg:flex-row justify-between items-center">
                        <div className="relative w-[400px] mt-10 lg:mt-3 px-5 lg:px-2">
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
                                            className={`w-3 h-3 rounded-full ${index === current6 ? "bg-purple-500 scale-110" : "bg-gray-400"
                                                } transition-all`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 max-w-[650px]">
                            {/* Header & Tags */}
                            <div className="flex items-center gap-2 text-lg mb-6 bg-purple-400 text-black px-4 py-2 rounded-full font-bold">
                                <ArrowUpRight className="w-5 h-5" />
                                318K/MO TO 804K/MO IN 1 MONTHS
                            </div>
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.04, // Adjust speed here
                                        },
                                    },
                                }}
                                className="text-4xl font-bold mb-5 flex flex-wrap"
                            >
                                {"More Sales, Better ROAS: Performance-Driven Growth in Health & Beauty".split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                        className={
                                            char === " " ? "w-2" : char.match(/[804K MONTH]+/g) ? "text-purple-400" : ""
                                        }
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.h2>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="flex flex-wrap gap-5 mb-2">
                                <span className="bg-purple-400 text-black px-3 py-1 rounded-full font-semibold">Niche: Health, Beauty & Fitness</span>
                                <span className="border border-purple-400 text-purple-400 px-3 py-1 rounded-full font-semibold">Meta Advertising</span>
                                <span className="border border-white px-3 py-1 rounded-full font-semibold">Performance Creative</span>
                                <span className="border border-white px-3 py-1 rounded-full font-semibold">CMO Consulting</span>
                            </motion.div>

                            {/* 3 Column Table */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="grid grid-cols-1 md:grid-cols-3 gap-8 text-lg text-gray-200">
                                <div>
                                    <p className="font-semibold mb-2 text-purple-400">Stagnating</p>
                                    <ul className="space-y-1 list-disc list-outside">
                                        <li>195 purchases in 15 days</li>
                                        <li>Average ROAS of 3.72</li>
                                        <li>Some ad sets
                                        underperforming</li>
                                        <li>Room for creative and
                                        copy testing</li>
                                        <li>Audience fatigue starting
                                        to show</li>
                                        <li>Limited scaling potential</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold mb-2 text-purple-400">Expectations</p>
                                    <ul className="space-y-1 list-disc list-outside">
                                        <li>Scale up purchase volume</li>
                                        <li>Improve return on ad spend</li>
                                        <li>Balance performance across all
                                        ad sets</li>
                                        <li>Enhance engagement and clickto-purchase ratio</li>
                                        <li>Refresh targeting and expand
                                        reach</li>
                                        <li>Achieve sustainable growth
                                        with high ROAS</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold mb-2 text-purple-400">Primescalar Results</p>
                                    <ul className="space-y-1 list-disc list-outside">
                                        <li>226 purchases generated</li>
                                        <li>ROAS increased to 4.03</li>
                                        <li>Optimized delivery with consistent
                                        ROAS uplift</li>
                                        <li>A/B tested creatives improved
                                        purchase flow</li>
                                        <li>Introduced new lookalike audiences for scale</li>
                                        <li>Campaign scaled profitably without
                                        sacrificing efficiency</li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
            <motion.div 
            initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}>
                <Card className="mb-16 text-white">
                    <CardContent className="flex flex-col lg:flex-row justify-between items-center gap-14">
                        <div className="flex flex-col gap-4 max-w-[650px]">
                            {/* Header & Tags */}
                            <div className="flex items-center gap-2 text-lg mb-6 bg-purple-400 text-black px-4 py-2 rounded-full font-bold">
                                <ArrowUpRight className="w-5 h-5" />
                                318K/MO TO 804K/MO IN 1 MONTHS
                            </div>
                            <motion.h2
                                initial="hidden"
                                whileInView="visible"
                                variants={{
                                    hidden: {},
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.04, // Adjust speed here
                                        },
                                    },
                                }}
                                className="text-4xl font-bold mb-5 flex flex-wrap"
                            >
                                {"318K/MONTH TO 804K/MONTH IN 1 MONTHS.".split("").map((char, index) => (
                                    <motion.span
                                        key={index}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                        className={
                                            char === " " ? "w-2" : char.match(/[804K MONTH]+/g) ? "text-purple-400" : ""
                                        }
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.h2>
                            <motion.div    initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}

                             className="flex flex-wrap gap-5 mb-2">
                                <span className="bg-purple-400 text-black px-3 py-1 rounded-full font-semibold">Niche: Emirate driving school</span>
                                <span className="border border-purple-400 text-purple-400 px-3 py-1 rounded-full font-semibold">385 Leads</span>
                                <span className="border border-white px-3 py-1 rounded-full font-semibold">4.76 AED Cost Per Lead</span>
                                <span className="border border-white px-3 py-1 rounded-full font-semibold">High-Intent Campaign Success</span>
                            </motion.div>

                            {/* 3 Column Table */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-lg text-gray-200">
                                <div>
                                    <p className="font-semibold mb-2 text-purple-400">Stagnating</p>
                                    <ul className="space-y-1 list-disc list-outside">
                                        <li>Low enrollment rates
                                        despite ad spend</li>
                                        <li>High CPL making scaling
                                        unfeasible</li>
                                        <li>Weak campaign targeting
                                        led to drop-offs</li>
                                        <li>Inefficient lead funnel</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold mb-2 text-purple-400">Expectations</p>
                                    <ul className="space-y-1 list-disc list-outside">
                                        <li>Lower the cost per lead</li>
                                        <li>Reach more ready-to-enroll
                                        users</li>
                                        <li>Improve targeting to capture
                                        serious inquiries</li>
                                        <li>Boost overall sign-up volume</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold mb-2 text-purple-400">Primescalar Results</p>
                                    <ul className="space-y-1 list-disc list-outside">
                                        <li>Generated 385 high-quality leads</li>
                                        <li>Achieved a low 4.76 AED CPL </li>
                                        <li>- Engaged ready-to-convert audience
                                        with optimized targeting </li>
                                        <li>Increased lead-to-enrollment ratio
                                        with a streamlined funnel</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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
            </motion.div>

        </div>

    );
};

export default CaseStudy;


