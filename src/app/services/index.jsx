"use client";
import SecoundHero from "@/components/SecoundHero";
import KeyServicesSection from "./keyServices";
import TechnologySection from "./technology";
import Inquiry from "../../components/inquiry";
import ProcessTimeline from "./process";

function Services() {
  return (
    <>
      <SecoundHero
        heading="Software Development Services"
        subheading="We design and build technology solutions tailored exactly to your business goals — scalable, secure, and future-ready."
      />
      <KeyServicesSection />
      <TechnologySection />
      <Inquiry />
      <ProcessTimeline />
    </>
  );
}

export default Services;
