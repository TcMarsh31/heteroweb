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
    <section className="container mx-auto px-4 py-12 md:py-20">
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
            {/* Image Placeholder - use actual image paths */}
            <div className="relative h-96 w-full bg-gray-100 flex items-center justify-center p-4">
              {/* This div simulates the two phone images in the original image */}
              <div className="absolute left-1/4 transform -translate-x-1/2">
                <Image
                  src="/placeholder-phone-1.png"
                  alt="Radio Nowy Świat App"
                  width={200}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="absolute right-1/4 transform translate-x-1/2">
                <Image
                  src="/placeholder-phone-2.png"
                  alt="Radio Nowy Świat App"
                  width={200}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="p-6">
              <CardTitle className="text-2xl font-bold">
                Radio Nowy Świat
              </CardTitle>
              <CardDescription className="mt-2 text-gray-500">
                A mobile application thanks to which you can listen to your
                favorite music and podcasts anytime and anywhere!
              </CardDescription>
            </div>
          </CardContent>
        </Card>

        {/* Project 2: FAKRO CONNECT */}
        <Card className="overflow-hidden shadow-lg">
          <CardContent className="p-0">
            {/* Image Placeholder - use actual image paths */}
            <div className="relative h-96 w-full bg-gray-100 flex items-center justify-center p-4">
              {/* This div simulates the two phone images in the original image */}
              <div className="absolute left-1/4 transform -translate-x-1/2">
                <Image
                  src="/placeholder-fakro-1.png"
                  alt="FAKRO CONNECT App"
                  width={200}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="absolute right-1/4 transform translate-x-1/2">
                <Image
                  src="/placeholder-fakro-2.png"
                  alt="FAKRO CONNECT QR"
                  width={200}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
            <div className="p-6">
              <CardTitle className="text-2xl font-bold">
                FAKRO CONNECT
              </CardTitle>
              <CardDescription className="mt-2 text-gray-500">
                Mobile application featuring a loyalty program for the B2B
                sector.
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
