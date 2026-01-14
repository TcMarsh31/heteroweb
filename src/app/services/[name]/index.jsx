"use client";
import SecoundHero from "@/components/SecoundHero";
import CustomWebDevelopment from "./customWeb";
import MobileAppDevelopment from "./mobileApp";
import AIDrivenSolutions from "./AIDrivenSolutions";
import WordPressDevelopment from "./wordpress";

const SelectedServices = ({ name }) => {
  const services = {
    "Custom-Web-Development": <CustomWebDevelopment />,
    "Mobile-App-Development": <MobileAppDevelopment />,
    "AI-Driven-Solutions-Tailored-for-Your-Business": <AIDrivenSolutions />,
    "WordPress-Development": <WordPressDevelopment />,
  };

  return services[name] || null;
};

function Service({ name }) {
  const title =
    name === "Custom-Web-Development"
      ? "Custom Web Development"
      : name === "Mobile-App-Development"
      ? "Mobile App Development"
      : name === "AI-Driven-Solutions-Tailored-for-Your-Business"
      ? "AI-Driven Solutions"
      : name === "WordPress-Development"
      ? "WordPress Development"
      : "Our Services";
  return (
    <>
      <SecoundHero heading={title} width={400} />
      <SelectedServices name={name} />
    </>
  );
}

export default Service;
