"use client";
import SecoundHero from "@/components/SecoundHero";
import KeyServicesSection from "./keyServices";
import TechnologySection from "./technology";
import Inquiry from "../(home)/inquiry";
import ProcessTimeline from "./process";

function Services() {
  return (
    <>
      <SecoundHero
        heading="Software Development Services"
        subheading="Create a custom app that enables growth for your business."
      />
      <KeyServicesSection />
      <TechnologySection />
      <Inquiry />
      <ProcessTimeline />
    </>
  );
}

export default Services;
