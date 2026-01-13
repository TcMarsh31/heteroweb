"use client";
import SecoundHero from "@/components/SecoundHero";
import OurApproachSection from "./ourApproachSection";
import ValuesSection from "./valuesSection";
import Inquiry from "@/components/inquiry";

function AboutUs() {
  return (
    <>
      <SecoundHero
        heading="We are UNKNOWN, a team of tech enthusiasts"
        subheading="Our mission is to deliver top-notch web and mobile solutions that empower businesses to thrive in the digital age. With a passion for innovation and a commitment to excellence, we transform ideas into reality."
      />

      <OurApproachSection />

      <ValuesSection />

      <Inquiry />
    </>
  );
}

export default AboutUs;
