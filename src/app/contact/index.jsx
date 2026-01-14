// app/page.tsx
"use client";
import SecoundHero from "@/components/SecoundHero";
import ContactBookingSection from "./contactForm";

export default function Contact() {
  return (
    <>
      <SecoundHero
        heading="Let’s Talk — It’s Hassle-Free"
        subheading="Share your idea, ask a question, or start a conversation. We’re just a message away."
      />
      <ContactBookingSection />
    </>
  );
}
