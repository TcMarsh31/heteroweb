import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Iridescence from "./Iridescence";
import TextType from "./TextType";
import { Button } from "./ui/button";

const SLIDES = [
  {
    title: "Trusted \n Technology \n Partner",
    messages: ["we transform ideas into software products"],
  },
  {
    title: "Modern \n Solutions \n Scaled",
    messages: ["specializing in Flutter, .NET and React"],
  },
  {
    title: "Global \n Delivery \n Excellence",
    messages: ["delivering high-performance digital experiences"],
  },
];

function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[600px] w-full overflow-hidden">
      {/* BACKGROUND - Remains static for visual continuity */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Iridescence
          color={[0.4, 0.5, 0.7]}
          mouseReact={false}
          amplitude={1}
          speed={0.03}
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center px-20">
        <div className="mx-auto w-full max-w-7xl px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 items-center"
            >
              <div>
                <h1 className="text-4xl text-center md:text-left md:text-6xl font-bold leading-tight text-white whitespace-pre-line">
                  {SLIDES[current].title}
                </h1>
              </div>

              <div>
                <TextType
                  key={`text-${current}`} // Reset typing animation on slide change
                  text={SLIDES[current].messages}
                  typingSpeed={50}
                  pauseDuration={1500}
                  className="text-md md:text-3xl text-white/80"
                  showCursor={true}
                  cursorCharacter="|"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* OPTIONAL: Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, i) => (
          <Button
            key={i}
            size="icon"
            onClick={() => setCurrent(i)}
            className={`h-1 w-3 transition-all ${
              current === i ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
