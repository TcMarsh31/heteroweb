import React from "react";

async function Service({ params }) {
  const { name } = await params;
  return <div>{name} Service</div>;
}

export default Service;
