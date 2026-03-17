import star from "../../assets/star.png";
import React from "react";
import { motion } from "framer-motion";

const Scroler = () => {

    const scrollerData = [
        "GMP Certified",
        "No extracts used",
        "BPA Free",
        "Best in Quality",
        "ISO certified",
        "No added sugar",
    ];

    return (
        <section className="relative bg-green-700 py-5 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <motion.div
                    className="flex items-center gap-28 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        duration: 25,
                        ease: "linear",
                    }}
                >
                    {[...scrollerData, ...scrollerData].map((text, index) => (
                        <div className="flex justify-center gap-3">

                            <div key={index} className="flex items-center justify-center">
                                <p className="text-white text-lg font-semibold whitespace-nowrap">
                                    {text}
                                </p>
                            </div>
                            <img src={star} alt="" className="relative left-13 h-8" />
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Scroler;