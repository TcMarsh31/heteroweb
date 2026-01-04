import ServiceLayout from ".";

async function Service({ params }) {
  const { name } = await params;
  return <ServiceLayout name={name} />;
}

export default Service;
