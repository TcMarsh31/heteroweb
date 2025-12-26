"use client";
import Hero from "@/components/Hero";
import SpotlightCard from "@/components/SpotlightCard";
import React from "react";
import Services from "./services";
import FeaturedProjectsSection from "./featuredProjects";
import AboutUsSection from "./aboutUs";

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
    </>
  );
}

export default Home;
