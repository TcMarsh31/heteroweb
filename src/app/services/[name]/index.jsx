"use client";
import SecoundHero from "@/components/SecoundHero";
import CustomWebDevelopment from "./customWeb";
import MobileAppDevelopment from "./mobileApp";
import AIDrivenSolutions from "./AIDrivenSolutions";
import WordPressDevelopment from "./wordpress";

function Service({ name }) {
  return (
    <>
      <SecoundHero heading={name + " Service"} width={400} />

      {/* <CustomWebDevelopment /> */}
      {/* <MobileAppDevelopment /> */}
      {/* <AIDrivenSolutions /> */}
      <WordPressDevelopment />
    </>
  );
}

export default Service;
