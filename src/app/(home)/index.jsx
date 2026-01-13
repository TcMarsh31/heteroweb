"use client";
import Hero from "@/components/Hero";
// import SpotlightCard from "@/components/SpotlightCard";
import React from "react";
import Services from "./services";
import FeaturedProjectsSection from "./featuredProjects";
import AboutUsSection from "./aboutUs";
import Inquiry from "./inquiry";
import TestimonialSection from "./testimonial";
// import BlogPage from "./blog";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* Services Page */}
      <Services />
      {/* Featured Projects Section */}
      <FeaturedProjectsSection />
      {/* About Us Section */}
      <AboutUsSection />
      {/* Testimonial Section */}
      <TestimonialSection />
      {/* Inquiry Section */}
      <Inquiry />
      {/* Blog Page Section */}
      {/* <BlogPage /> */}
    </>
  );
}

export default Home;
