import React from "react";
import Index from ".";

async function page({ params }) {
  const { id } = await params;
  return <Index id={id} />;
}

export default page;
