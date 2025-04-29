"use client";
import step4 from '@/assets/step (4).jpg';
import { Button } from '@/components/Button';
import { motion } from "framer-motion";
import step3 from '@/assets/step (3).jpg';
import step5 from '@/assets/step (5).jpg';
import step2 from '@/assets/step (2).jpg';
import Image from "next/image";

export default function ServicesSection() {
    return (
        <section className="bg-black text-white py-16 px-6 md:px-8">

            {/* Title */}
            <div className="flex justify-center items-center mb-12">
                <motion.div
                    className="bg-white/10 max-w-fit text-center backdrop-blur-sm text-2xl md:text-4xl font-bold text-white px-6 py-2 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    SERVICES OFFERED
                </motion.div>
            </div>

            {/* Services Grid */}
            <div className="max-w-6xl mx-auto p-10 grid md:grid-cols-2 gap-10 md:gap-10 items-start">

                {/* LEFT Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
                        <span className="text-purple-500 mr-2">•</span> Qualified Lead Generation
                    </h2>
                    <p className="text-gray-400 mb-8 text-base md:text-lg">
                        We specialize in creating highly focused, paid advertising campaigns that target your ideal customers with precision.
                    </p>

                    <h3 className="text-2xl font-semibold mb-4">What&#39;s included?</h3>
                    <ul className="space-y-3 text-base md:text-lg">
                        {[
                            "Targeted Paid Ads: Run highly focused ad campaigns designed to attract the right audience.",
                            "A/B Testing: Continuously test different ad variations to determine the most effective elements.",
                            "Funnel Optimization: Streamline and improve the entire sales funnel for better conversions.",
                            "ROI Tracking: Monitor and analyze the return on investment for each campaign.",
                            "Lead Quality Focus: Ensure the leads we bring are highly qualified and ready to convert.",
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <span className="text-purple-500 mt-1">•</span> {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* RIGHT Card */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition"
                >
                    {/* Image */}
                    <div className="relative w-full h-64 md:h-80">
                        <Image
                            src={step4}
                            alt="Meta Ads Image"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Investment Section */}
                    <div className="bg-gray-900 p-6 md:p-8 text-center">
                        <h4 className="text-2xl md:text-3xl font-bold mb-4">Qualified Lead Generation</h4>
                        <p className="text-gray-400 mb-6 text-base md:text-lg">
                            We create precise, high-converting paid ad campaigns with A/B testing, funnel optimization, and detailed ROI tracking.
                        </p>
                        <Button>
                            Book a Call
                        </Button>
                    </div>
                </motion.div>

            </div>
            <div className="max-w-6xl mx-auto mt-24 grid md:grid-cols-2 gap-10 md:gap-10 items-start">

                {/* RIGHT Card First (Mobile friendly flipping) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition order-2 md:order-1"
                >
                    <div className="relative w-full h-64 md:h-80">
                        <Image
                            src={step2}
                            alt="Meta Ads Image"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="bg-gray-900 p-6 md:p-8 text-center">
                        <h4 className="text-2xl md:text-3xl font-bold mb-4">Sales Team Training</h4>
                        <p className="text-gray-400 mb-6 text-base md:text-lg">
                            We equip your sales team with proven scripts, follow-up strategies, and CRM automation to close the leads we bring.
                        </p>
                        <Button>
                            Book a Call
                        </Button>
                    </div>
                </motion.div>

                {/* LEFT Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-1 md:order-2"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
                        <span className="text-purple-500 mr-2">•</span> Sales Enablement
                    </h2>
                    <p className="text-gray-400 mb-8 text-base md:text-lg">
                        Generating leads is only half the battle. We work closely with your sales team to ensure they can turn leads into loyal customers.
                    </p>

                    <h3 className="text-2xl font-semibold mb-4">What&#39;s included?</h3>
                    <ul className="space-y-3 text-base md:text-lg">
                        {[
                            "Sales Team Training: Equip your sales team with the skills and knowledge to close deals effectively.",
                            "Custom Sales Scripts: Provide tailored scripts for different lead types.",
                            "Follow-up Strategies: Set up systematic follow-ups to engage leads.",
                            "CRM Automation: Automate lead nurturing processes.",
                            "Closing Techniques: Teach how to handle objections and close efficiently.",
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <span className="text-purple-500 mt-1">•</span> {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

            </div>
            <div className="max-w-6xl mx-auto mt-24 grid md:grid-cols-2 gap-10 md:gap-10 items-start">

                {/* LEFT Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
                        <span className="text-purple-500 mr-2">•</span> Conversion Optimization
                    </h2>
                    <p className="text-gray-400 mb-8 text-base md:text-lg">
                        We take a deep dive into your landing pages to ensure they’re optimized for conversions. Through data-driven design improvements, tracking, and testing.
                    </p>

                    <h3 className="text-2xl font-semibold mb-4">What&#39;s included?</h3>
                    <ul className="space-y-3 text-base md:text-lg">
                        {[
                            "Landing Page Design: Create high-converting landing pages optimized for user engagement.",
                            "Behavior Tracking: Implement tracking systems to monitor visitor behavior and identify pain points.",
                            "A/B Testing for Landing Pages: Test variations of landing pages to find the most effective design.",
                            "Cost-per-Lead Reduction: Focus on optimizing conversion rates to reduce overall lead acquisition costs.",
                            "Continuous Optimization: Regularly update and optimize landing pages to maintain high performance.",
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <span className="text-purple-500 mt-1">•</span> {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* RIGHT Card */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition"
                >
                    {/* Image */}
                    <div className="relative w-full h-64 md:h-80">
                        <Image
                            src={step5}
                            alt="Meta Ads Image"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Investment Section */}
                    <div className="bg-gray-900 p-6 md:p-8 text-center">
                        <h4 className="text-2xl md:text-3xl font-bold mb-4"> Conversion Optimization</h4>
                        <p className="text-gray-400 mb-6 text-base md:text-lg">
                            We optimize your landing pages and tracking systems to reduce cost per lead and improve conversion rates.
                        </p>
                        <Button>
                            Book a Call
                        </Button>
                    </div>
                </motion.div>

            </div>
            <div className="max-w-6xl mx-auto mt-24 grid md:grid-cols-2 gap-10 md:gap-10 items-start">

                {/* RIGHT Card First (Mobile friendly flipping) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="rounded-2xl overflow-hidden border border-gray-700 hover:border-purple-500 transition order-2 md:order-1"
                >
                    <div className="relative w-full h-64 md:h-80">
                        <Image
                            src={step3}
                            alt="Meta Ads Image"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="bg-gray-900 p-6 md:p-8 text-center">
                        <h4 className="text-2xl md:text-3xl font-bold mb-4">7-Day Performance Trial</h4>
                        <p className="text-gray-400 mb-6 text-base md:text-lg">
                            Test our services with a one-week campaign to see results without a long-term commitment.
                        </p>
                        <Button>
                            Book a Call
                        </Button>
                    </div>
                </motion.div>

                {/* LEFT Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-1 md:order-2"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
                        <span className="text-purple-500 mr-2">•</span> 7-Day Performance Trial
                    </h2>
                    <p className="text-gray-400 mb-8 text-base md:text-lg">
                        We understand the need for results. That’s why we offer a no-risk, 7-day performance trial. This allows you to test our strategies and see real-world results in just one week, without making a long-term commitment.
                    </p>

                    <h3 className="text-2xl font-semibold mb-4">What&#39;s included?</h3>
                    <ul className="space-y-3 text-base md:text-lg">
                        {[
                            "One-Week Trial: Launch a short, one-week campaign to demonstrate our capabilities.",
                            "No Long-Term Commitment: Test our services risk-free without signing a long-term contract.",
                            "Immediate Results: See measurable results in just one week of working with us.",
                            "Risk-Free: If we don’t deliver on our promises, you don’t pay.",
                            "Confidence in Performance: We are confident that you will see the value of our work within the trial period.",
                        ].map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <span className="text-purple-500 mt-1">•</span> {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

            </div>

        </section>
    );
}
