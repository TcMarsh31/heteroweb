import React, { useRef } from "react";
import SpotlightCard from "@/components/SpotlightCard";

function Services() {
  const servicesRef = useRef(null);

  const handleWheel = (e) => {
    const el = servicesRef.current;
    if (!el) return;

    const isAtTop = el.scrollTop === 0;
    const isAtBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 1;

    // Scroll down at bottom → page scroll
    if (e.deltaY > 0 && isAtBottom) {
      window.scrollBy({ top: e.deltaY, behavior: "auto" });
      e.preventDefault();
    }

    // Scroll up at top → page scroll
    if (e.deltaY < 0 && isAtTop) {
      window.scrollBy({ top: e.deltaY, behavior: "auto" });
      e.preventDefault();
    }
  };

  return (
    <section className="bg-gray-100 py-14 px-4 sm:px-6 lg:px-8 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Sticky Content */}
        <div className="md:sticky md:top-24 self-start">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-500">
            Our Services
          </p>

          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900">
            Let's customize your project
          </h1>
          <p className="mt-4 text-xl text-gray-500">
            We design and build technology solutions tailored exactly to your
            business goals — scalable, secure, and future-ready.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <span className="h-0.5 w-14 bg-blue-500" />
            <a
              href="#"
              className="text-blue-500 font-medium hover:text-blue-600"
            >
              View more
            </a>
          </div>
        </div>

        {/* Right Scrollable Cards */}
        <div
          ref={servicesRef}
          onWheel={handleWheel}
          className="space-y-8 max-h-[70vh] overflow-y-auto hide-scrollbar"
        >
          <ServiceCard
            title="Custom Web Development"
            description="Scalable web solutions built for performance and growth. We create fast, secure, and user-focused web applications tailored to your business needs."
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            }
          />

          <ServiceCard
            title="Mobile App Development"
            description="Powerful mobile experiences for Android & iOS. From idea to launch, we build high-performance mobile apps that users love."
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            }
          />

          <ServiceCard
            title="AI-Driven Solutions Tailored for Your Business"
            description="Smart technology that works for you. We integrate AI to automate processes, gain insights, and drive smarter decisions."
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            }
          />

          <ServiceCard
            title="Expert WordPress Development Services for Businesses"
            description="We deliver high-quality WordPress websites tailored to your brand and business goals. From custom themes to advanced plugins, our solutions drive traffic, engagement, and conversions. "
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            }
          />

          {/* Add more ServiceCard components here */}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, icon }) {
  return (
    <SpotlightCard
      className="custom-spotlight-card bg-white rounded-xl shadow-md p-6 sm:p-8 border-0"
      spotlightColor="rgba(0, 229, 255, 0.2)"
    >
      <div className="flex items-center">
        <div className="flex-shrink-0 bg-gray-100 p-3 rounded-full">
          <svg
            className="h-6 w-6 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {icon}
          </svg>
        </div>

        <h3 className="ml-4 text-xl sm:text-2xl font-bold text-gray-900">
          {title}
        </h3>
      </div>

      <p className="mt-4 text-gray-500 text-sm sm:text-base">{description}</p>

      <a
        href="#"
        className="inline-block mt-6 border border-pink-400 text-pink-500 px-5 py-2 rounded-lg font-semibold hover:bg-pink-50 transition"
      >
        See More
      </a>
    </SpotlightCard>
  );
}

export default Services;
