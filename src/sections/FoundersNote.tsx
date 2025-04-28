"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import founderImage from "@/assets/Founder-Image.jpg"; // Replace with your founder's photo
import signatureImage from "@/assets/Signature.png"; // Replace with CEO signature image

export default function FoundersNote() {
  return (
    <div className="bg-black relative rounded-3xl p-10 ml-32 mr-32 min-h-[400px] border border-gray-700 overflow-hidden">
      {/* Highlighted Border Effect */}
      <div className="absolute inset-0 rounded-3xl border-2 border-purple-500 opacity-20 pointer-events-none"></div>
      

        {/* Testimonial Text */}
        <p className="text-gray-400 text-lg leading-relaxed">
       <span className="text-xl font-extrabold text-purple-300"> From the desk of Adnan, Founder of Primescaler </span>
When I started Primescaler, I wasn’t looking to build just another digital agency.
I was building what I wish I had a results-driven partner who actually cared about scaling, not just “managing” campaigns.
I’ve worked with brands that had massive potential, but they were stuck.
Not because their product wasn’t good. Not because their audience didn’t exist.
But because they didn’t have the right systems, the right strategy, or the right team to scale smartly and aggressively.
<span className="text-xl font-extrabold text-gray-200"> That’s why Primescaler exists.</span><br/>
- To remove the fluff.<br/>
- To bring in qualified leads.<br/>
- To train teams that actually close.<br/>
- And to scale businesses to 20x with confidence and speed.<br/>
This isn’t just a business for me.
<span className="text-lg font-extrabold"> It’s a mission to redefine how growth should feel: predictable, powerful, and performance-backed. </span>
So, whether you're doing <strong>6 figures or already past 9</strong>, if you’re hungry to scale we’re here to build something massive with you.<br/>
Let’s create impact.<br/>
Let’s create revenue.<br/>
Let’s create momentum that doesn’t stop.



        </p>

        {/* Founder Info */}
        <div>
          <p className="font-bold text-white text-lg">– Adnan</p>
          <p className="text-gray-400 text-sm mb-2">Founder, Primescaler</p>
          {/* Signature */}
          <div className="w-32 h-16 relative">
            <Image
              src={signatureImage}
              alt="CEO Signature"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
  );
}
