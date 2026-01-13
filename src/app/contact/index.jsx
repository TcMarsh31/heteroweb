// app/page.tsx
"use client";
import SecoundHero from "@/components/SecoundHero";
import ContactBookingSection from "./contactForm";

export default function Contact() {
  return (
    <>
      <SecoundHero heading="Contact US" subheading="" />
      <ContactBookingSection />
    </>
  );
}
