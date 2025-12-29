"use client";

import BlogLayout from "./blockLayout";
import SecoundHero from "@/components/SecoundHero";

function Blog() {
  return (
    <>
      {/* Hero Section */}
      <SecoundHero
        heading="The ultimate source of technology news"
        subheading="We explore web and mobile technologies, product development and design, and the latest news from the tech industry. Get into the mobitouch mindset."
      />
      <BlogLayout />
    </>
  );
}

export default Blog;
