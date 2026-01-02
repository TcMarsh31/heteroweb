// components/process-timeline.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Define the steps data based on the image content
const processSteps = [
  {
    id: "01",
    title: "Preparation",
    subtitle: "Discover and define",
    description:
      "Only a holistic strategy guarantees the quality and consistency of the entire project.",
    listItems: [
      "Meetings and requirements",
      "Analysis, data collecting",
      "Functionality architecture",
      "Project planning",
    ],
    position: "right",
  },
  {
    id: "02",
    title: "Graphic design",
    subtitle: "Create engaging mobile experiences.",
    description:
      "We follow your brand identity or help to create it from scratch. Envision your customers’ mobile assets.",
    listItems: [
      "User flow",
      "Creating high-impact design",
      "Digital prototyping",
    ],
    position: "left",
  },
  {
    id: "03",
    title: "Development",
    subtitle: "Beauty is nothing without brains.",
    description:
      "We develop innovative, secure, and high-performance applications for mobile and web.",
    listItems: [
      "Technical Direction",
      "Technical Specifications",
      "Front & Back-end Development",
    ],
    position: "right",
  },
  {
    id: "04",
    title: "Quality Assurance",
    subtitle: "Get-things-done attitude.",
    description:
      "Our specialized in-house QA team does the review and testing of all the software we build.",
    listItems: [
      "Usability testing sessions",
      "Code reviews",
      "Bug fixing",
      "Approval",
    ],
    position: "left",
  },
  {
    id: "05",
    title: "Launch",
    subtitle: "Go live.",
    description:
      "Implementing appropriate app analytics and making sure that your app is ranked high in stores by introducing appropriate App Store Optimization techniques.",
    listItems: [],
    position: "right",
  },
  {
    id: "06",
    title: "Improvement Measure & Update",
    subtitle: "Numbers, not guessing.",
    description:
      "Making sure all changes are data-driven and keep on checking the appearance and functionality. We make sure your audience gets the updates they’ve been looking for.",
    listItems: [],
    position: "left",
  },
];

const TimelineStep = ({ step }) => (
  <div
    className={`flex items-start ${
      step.position === "left" ? "justify-start" : "justify-end"
    }`}
  >
    {/* Card Content (Left/Right) */}
    <Card
      className={`w-full max-w-lg shadow-lg ${
        step.position === "left" ? "order-1 md:order-none" : ""
      }`}
    >
      <CardHeader>
        <CardTitle className="text-lg">{step.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-semibold text-gray-700 mb-3">{step.subtitle}</p>
        <p className="text-sm text-gray-500 mb-3">{step.description}</p>
        {step.listItems.length > 0 && (
          <ul className="text-xs text-gray-500 space-y-1 ml-4 list-disc">
            {step.listItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>

    {/* Timeline Number (Centered for layout balance) */}
    <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 flex items-center justify-center bg-white border border-gray-200 rounded-full shadow-md text-xl font-bold text-gray-700 z-10">
      {step.id}
    </div>
  </div>
);

export default function ProcessTimeline() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-2">
            OUR PROCESS
          </p>
          <h1 className="text-4xl font-bold text-gray-900 max-w-3xl leading-tight">
            Good process maximizes mobile success.
          </h1>
        </div>
        {/* Timeline Container - Relative position is key */}
        <div className="relative">
          {/* The vertical line running down the center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gray-300 h-full"></div>

          <div className="space-y-24">
            {processSteps.map((step) => (
              // Wrapper div is needed to handle spacing between steps
              <div key={step.id}>
                <TimelineStep step={step} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
