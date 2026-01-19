// components/our-approach-section.tsx
import React from "react";

const OurApproachSection = () => {
  return (
    // Outer container for padding/margins
    <div className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
      {/* Top section: Title and subtitle */}
      <div className="mb-12">
        <p className="text-sm  uppercase tracking-wider text-blue-600 mb-2">
          OUR APPROACH
        </p>
        <p className="text-xl text-gray-800">
          <span >Passion drives us.</span> Reliability
          directs.
        </p>
      </div>

      {/* Main values list */}
      <div className="space-y-10">
        <p className="text-2xl font-bold text-gray-900">
          Hire great people and trust them.
        </p>
        <p className="text-2xl font-bold text-gray-900">
          Build excellent products.
        </p>
        <p className="text-2xl font-bold text-gray-900">
          Embrace creativity & innovation.
        </p>
        <p className="text-2xl font-bold text-gray-900">Act with integrity.</p>
        <p className="text-2xl font-bold text-gray-900">
          Focus on the long-term.
        </p>
        <p className="text-2xl font-bold text-gray-900 mt-12">
          We've got your back.
        </p>
      </div>
    </div>
  );
};

export default OurApproachSection;
