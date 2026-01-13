// components/values-section.tsx

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Zap, Handshake, Monitor } from "lucide-react"; // Example icons

// Define data for the four value cards
const valuesData = [
  {
    icon: Cpu,
    title: "We are highly technical.",
    description:
      "We code Android, iOS, Huawei, and web apps so that you can carry out advanced projects with one contractor.",
  },
  {
    icon: Zap,
    title: "We are creative.",
    description:
      "Challenging assignments are our true love. Thanks to them, we continuously develop and look for new solutions, which translates into higher work quality.",
  },
  {
    icon: Handshake,
    title: "We are trustworthy.",
    description:
      "We care about our clients. Furthermore, we ensure the code's stability, security, and cheaper future development at every stage.",
  },
  {
    icon: Monitor,
    title: "We are adaptive and flexible.",
    description:
      "Our work is tailored. You will gain insight into every project stage and an ability to apply changes dynamically.",
  },
];

const ValuesSection = () => {
  return (
    // Main dark background container
    <section className="bg-gray-900 text-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top Header Section */}
        <div className="mb-16 px-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-400 mb-4">
            OUR VALUES
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold max-w-3xl leading-tight">
            Making practical and good-looking applications obligate us to keep
            to the code.
          </h1>
        </div>

        {/* Four-column grid for the value cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {valuesData.map((value, index) => (
            <Card
              key={index}
              className="bg-gray-800 border-none rounded-lg shadow-lg p-6 flex flex-col items-start"
            >
              <CardHeader className="p-0 mb-4">
                {/* Icon container - manually styled circle background */}
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-gray-900 mb-4">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg font-semibold text-white">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0 text-gray-400 text-sm leading-relaxed">
                {value.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
