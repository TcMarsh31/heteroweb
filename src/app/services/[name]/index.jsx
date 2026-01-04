"use client";
import SecoundHero from "@/components/SecoundHero";

function Service({ name }) {
  return (
    <SecoundHero
      heading={name + " Service"}
      subheading="Create a custom app that enables growth for your business."
    />
  );
}

export default Service;
