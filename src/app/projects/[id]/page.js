import React from "react";
import Index from ".";

export async function generateMetadata({ params }) {
  const { id } = await params;
  return {
    title: `${id.charAt(0).toUpperCase() + id.slice(1)} | Projects`,
    description: `Project details for ${id}`,
  };
}

async function page({ params }) {
  const { id } = await params;
  return <Index id={id} />;
}

export default page;
