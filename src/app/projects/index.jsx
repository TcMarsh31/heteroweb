"use client";
import FeaturedProjectsSection from "@/components/featuredProjects";
import SecoundHero from "@/components/SecoundHero";

function Projects() {
  return (
    <>
      {/* Hero Section */}
      <SecoundHero
        heading="Custom Software Development"
        subheading="Check out our projects to find out why we are considered one of the top custom software development companies in Poland."
      />

      <FeaturedProjectsSection isProjectPage={true} />
    </>
  );
}

export default Projects;
