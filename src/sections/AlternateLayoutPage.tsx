import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import VideoPortfolio from '@/assets/Portfolio.gif'
import clsx from "clsx";
import { Button } from "@/components/Button";
import Link from "next/link";

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
    <div
      className="min-h-screen mt-16 text-white py-5 px-5 md:px-10"
    >
      <h3 className="text-4xl md:text-5xl mb-10 font-medium text-center tracking-tighter">RESULTS & CASE STUDIES</h3>
      {/* Case Study 1 */}
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
            <Link href='/case-studies' className="w-[190px] mt-8">
              <Button>Join Now</Button>
            </Link>
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
            <Link href='/case-studies' className="w-[190px] mt-8">
              <Button>Join Now</Button>
            </Link>
          </div>

        </CardContent>
      </Card>


    </div>
  );
};

export default AlternateLayoutPage;

