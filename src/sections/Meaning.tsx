'use client';

import Tilt from 'react-parallax-tilt';
import Image from 'next/image';
import handshake from '@/assets/handshake.jpg';

export default function Meaning() {
  return (
    <section className="bg-black text-white px-6 md:px-20 py-20 font-sans">
      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px rgb(140,69,255,.7);
          color: transparent;
          font-weight: bold;
        }
      `}</style>

      <h2 className="text-center text-3xl md:text-5xl font-bold mb-16">
        The Meaning behind <span className="outline-text">PRIME</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        {/* Left Column */}
        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-bold">
            P — <span className="outline-text text-purple-400"> PRESTIGIOUS </span>
            </h3>
            <p className="text-gray-400 mt-2">
            We hold ourselves to the highest standards, delivering work that not only performs but commands respect. Our commitment to quality, creativity, 
            and professionalism elevates our clients and positions their brands as leaders in their industries.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">
            R — <span className="outline-text">RECOGNITION</span>
            </h3>
            <p className="text-gray-400 mt-2">
            We thrive on achieving results that speak for themselves. Every campaign, strategy, or design is crafted to leave a lasting impression — building recognition, credibility, and trust for our clients and their audiences.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold"> I — <span className="outline-text">INNOVATION</span></h3>
            <p className="text-gray-400 mt-2">
            Innovation is our fuel. We push boundaries, challenge norms, and embrace the unexpected to bring fresh, powerful ideas to life.
             By staying ahead of trends and technologies, we ensure every solution is not just relevant — but revolutionary.
            </p>
          </div>
        </div>

        {/* Center Tilt Image */}
        <Tilt
          glareEnable={true}
          glareMaxOpacity={0.45}
          scale={1.05}
          tiltMaxAngleX={20}
          tiltMaxAngleY={20}
        >
          <div className="w-full flex flex-col items-center">
            <Image
              src={handshake} // ✅ Replace this with your image path
              alt="Prime"
              width={400}
              height={700}
              className="rounded-lg shadow-lg"
            />
            <p className="text-center mt-6 font-medium text-lg">
              — In <span className="outline-text">PRIME</span>, We Rise.
            </p>
          </div>
        </Tilt>

        {/* Right Column */}
        <div className="space-y-10">
          <div>
            <h3 className="text-2xl font-bold">
            M — <span className="outline-text">MENTALITY</span>
            </h3>
            <p className="text-gray-400 mt-2">
Our growth-oriented mentality drives everything we do. With a mindset rooted in curiosity, resilience, and strategic focus,
 we approach every challenge with the belief that excellence is not just possible — it’s expected.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold"> E — <span className="outline-text">EXCELLENCE</span></h3>
            <p className="text-gray-400 mt-2">
Excellence is not a goal — it's our default. From ideation to execution, we obsess over the details to ensure every deliverable exceeds expectations and reflects the quality we’re known for.


            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
