// components/featured-projects-section.tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const FeaturedProjectsSection = () => {
  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 w-full">
      <div className="text-center md:text-left">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
          Featured Projects
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Our implementations of tailor-made software
        </h1>
        <p className="mt-4 text-xl text-gray-500">
          Check out our projects that highlight business growth.
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Project 1: Radio Nowy Świat */}
        <Card className="overflow-hidden shadow-lg">
          <CardContent className="p-0">
            <div className="relative h-96 w-full bg-gray-100 flex items-center justify-center p-4">
              <Image
                src="/img/grocxpress.png"
                alt="GrocXpress App"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <CardTitle className="text-2xl font-bold">GrocXpress</CardTitle>
              <CardDescription className="mt-2 text-gray-500">
                GrocXpress is a global digital payment platform enabling
                seamless mobile network payments and DTH recharges across
                multiple providers worldwide. The platform features a powerful
                dashboard, agent management, and real-time reporting for
                efficient operations.
              </CardDescription>
            </div>
          </CardContent>
        </Card>

        {/* Project 2: FAKRO CONNECT */}
        <Card className="overflow-hidden shadow-lg">
          <CardContent className="p-0">
            {/* Image Placeholder - use actual image paths */}
            <div className="relative h-96 w-full bg-gray-100 flex items-center justify-center p-4">
              <Image
                src="/img/grocxpress.png"
                alt="QuickTransfert App"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <CardTitle className="text-2xl font-bold">
                QuickTransfert
              </CardTitle>
              <CardDescription className="mt-2 text-gray-500">
                QuickTransfert is a global digital payment platform enabling
                seamless mobile network payments and DTH recharges across
                multiple providers worldwide. The platform features a powerful
                dashboard, agent management, and real-time reporting for
                efficient operations.
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 text-center">
        <Button
          size="lg"
          className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg"
        >
          BROWSE ALL PROJECTS
        </Button>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
