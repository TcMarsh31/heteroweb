// components/about-us-section.tsx (or similar file)
import { Button } from "@/components/ui/button"; // Adjust import path if needed
import React from "react";

const AboutUsSection = () => {
  return (
    // The main container with a dark background and responsive padding
    <section className="bg-gray-900 py-20 md:py-32">
      {/* Container for content, centered and with max width */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* The content itself is aligned to the left */}
        <div className="max-w-xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-400">
            About Us
          </p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Software House that delivers
          </h1>
          <p className="mt-4 text-lg text-gray-400">
            We are a team of highly skilled developers and reliable designers.
            Our craft can be described in 3 words: challenge, progress, and
            passion. These are the values that drive us to create high-end
            applications, digital products, and other projects. We efficiently
            navigate through start-ups and big brands&apos; environments. As a
            software house, we also support local technology initiatives.
          </p>

          {/* Button Group */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {/* Primary Button (pink) */}
            <Button
              variant="default" // default is a shadcn/ui variant
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg"
              size="lg"
            >
              DISCOVER MORE
            </Button>

            {/* Secondary Button (dark border) */}
            <Button
              variant="outline" // outline is a shadcn/ui variant
              className="border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white font-bold py-3 px-8 rounded-lg"
              size="lg"
            >
              GET ON BOARD.
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
