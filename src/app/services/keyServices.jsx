// components/services-section.tsx (or place in app/page.tsx for a full page)
import { Smartphone, Laptop, Zap } from "lucide-react"; // Example icons
import { Button } from "@/components/ui/button"; // Assuming standard shadcn setup

const ServiceCard = ({ icon: Icon, title, description, linkText }) => (
  <div className="flex flex-col p-6 bg-white shadow-sm border border-gray-100 rounded-xl transition-shadow hover:shadow-md">
    <div className="mb-4">
      <Icon className="w-8 h-8 text-gray-700" />
    </div>
    <h3 className="text-lg font-semibold mb-3 text-gray-900">{title}</h3>
    <p className="text-sm text-gray-500 mb-6 flex-grow">{description}</p>
    <Button
      variant="outline"
      className="w-fit text-xs font-semibold uppercase tracking-wider text-red-500 border-red-200 hover:bg-red-50"
    >
      {linkText}
    </Button>
  </div>
);

export default function KeyServicesSection() {
  const services = [
    {
      icon: Laptop,
      title: "Web App Development",
      description:
        "Do you serve your customers online? Go for a user-friendly design and complete responsiveness. Choose mobitouch software house.",
      linkText: "SEE MORE",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Switch your business to mobile mode. Let's create software that fits well in hand.",
      linkText: "SEE MORE",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            Key Services
          </p>
          <h1 className="text-4xl font-bold text-gray-900 max-w-3xl leading-tight">
            Good software has 3 features. It works flawlessly, has an
            eye-catching design, and it's turning your business into a more
            profitable one.
          </h1>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
