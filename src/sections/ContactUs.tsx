'use client';

import { Button } from '@/components/Button';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone:'',
    website: '',
    message: '',
  });

  const handleChange = (event: { target: { name: any; value: any; }; }) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log(form);
  };

  return (
    <section className="min-h-screen bg-black text-white p-28 flex flex-col md:flex-row gap-8 relative">
      
      {/* Left Section */}
      <motion.div
        className="flex-1 flex flex-col justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Contact Badge */}
        <div className="flex items-center gap-2 mb-4">
          <Button>
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884l8 4.8 8-4.8A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4.8-8-4.8V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </Button>
          <span className="text-sm">Contact</span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold mb-4">Lets Talk!</h1>
        <p className="text-gray-400 mb-8">
          Send us a message and we will get back to you within 24 hours to arrange a call!
        </p>

        {/* Email Field */}
        <div className="bg-gray-900 p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-black p-2 rounded-full">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 2v.511l-8 4.99-8-4.99V6h16zM4 18V8l8 5 8-5v10H4z" />
              </svg>
            </div>
            <div>
              <p className="text-sm">Email us</p>
              <p className="text-gray-400 text-sm">Inquiry@primescaler.com</p>
            </div>
          </div>
          <Button> ➔ </Button>
        </div>


        {/* Call Field */}
        <div className="bg-gray-900 p-4 rounded-lg flex items-center justify-between mt-4">
          <div className="flex items-center gap-3">
            <div className="bg-black p-2 rounded-full">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2 3h4l3.6 7.59-1.35 2.45a11.72 11.72 0 005.8 5.8l2.45-1.35L21 18v4h-2c-9.39 0-17-7.61-17-17V3z" />
              </svg>
            </div>
            <div>
              <p className="text-sm">Call us</p>
              <p className="text-gray-400 text-sm">+971-55-159-6619</p>
            </div>
          </div>
          <Button> ➔ </Button>
        </div>

        {/* Location Field */}
        <div className="bg-gray-900 p-4 rounded-lg flex items-center justify-between mt-4">
          <div className="flex items-center gap-3">
            <div className="bg-black p-2 rounded-full">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
            </div>
            <div>
              <p className="text-sm">Our location</p>
              <p className="text-gray-400 text-sm">Business Bay, Dubai</p>
            </div>
          </div>
          <Button> ➔ </Button>
        </div>
      </motion.div>

      {/* Right Section */}
      <motion.form
        onSubmit={handleSubmit}
        className="flex-1 bg-gray-900 p-8 rounded-lg flex flex-col gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex gap-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={form.name}
            onChange={handleChange}
            className="bg-black p-4 rounded-lg w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            value={form.email}
            onChange={handleChange}
            className="bg-black p-4 rounded-lg w-full"
            required
          />
        </div>
        <input
            type="phone"
            name="phone"
            placeholder="Enter Your Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="bg-black p-4 rounded-lg w-full"
            required
          />
        <input
          type="text"
          name="website"
          placeholder="Business Type"
          value={form.website}
          onChange={handleChange}
          className="bg-black p-4 rounded-lg"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="bg-black p-4 rounded-lg min-h-[150px]"
        ></textarea>
        <button type="submit" className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff]">
          <div className="absolute inset-0">
            <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
            <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
            <div className="absolute inset-0 shadow-[0_0_10px_rgb(140,69,255,.7)_inset] rounded-lg"></div>
          </div>
          <span>Submit Now</span>
        </button>
      </motion.form>
    </section>
  );
}

