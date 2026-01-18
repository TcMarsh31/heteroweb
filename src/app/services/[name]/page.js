import ServiceLayout from ".";

export async function generateMetadata({ params }) {
  const { name } = await params;
  return {
    title: `${name.charAt(0).toUpperCase() + name.slice(1)} | Services`,
    description: `Service details for ${name}`,
  };
}

async function Service({ params }) {
  const { name } = await params;
  return <ServiceLayout name={name} />;
}

export default Service;
