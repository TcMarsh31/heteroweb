// components/testimonial-card.tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// app/page.tsx (Updated)
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext, // Next button
  CarouselPrevious, // Previous button
} from "@/components/ui/carousel";
import Image from "next/image";

// app/page.tsx
const testimonials = [
  {
    quote: "Mobitouch did an amazing job. I'm satisfied with the quality...",
    name: "Michał Kuriata",
    title: "IT Project Manager at Nowa Itaka sp. z o.o.",
    // companyLogo: "/path/to/itaka_logo.png", // Add logo path
  },
  {
    quote:
      "Another great project completed with the team! Highly recommend their services.",
    name: "Jane Doe",
    title: "CEO, Tech Solutions Inc.",
  },
  // Add more testimonials here
];

function TestimonialCard({ quote, name, title, avatarUrl }) {
  return (
    <Card className="max-w-xl mx-auto shadow-none border-none bg-inherit">
      <CardHeader>{/* Placeholder for optional icons/quotes */}</CardHeader>
      <CardContent>
        <p className="text-gray-700 italic font-semibold text-3xl leading-relaxed">
          "{quote}"
        </p>
      </CardContent>
      <CardFooter className="flex flex-col items-start pt-6">
        <Separator className="mb-4 w-16" />
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={avatarUrl} alt={`@${name}`} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

// (Assume testimonials array is defined above)

export default function TestimonialSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* The Carousel wrapper handles the navigation logic and layout */}
        <Carousel>
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                {/* Optional: Render company logo above the card if available */}
                {testimonial.companyLogo && (
                  <div className="flex justify-center mb-6">
                    <Image
                      src={testimonial.companyLogo}
                      alt="HeteroGenz Logo"
                      width={100}
                      height={40}
                    />
                  </div>
                )}

                <TestimonialCard
                  quote={testimonial.quote}
                  name={testimonial.name}
                  title={testimonial.title}
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation Buttons */}
          <CarouselPrevious className="absolute left-[-50px] top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute right-[-50px] top-1/2 transform -translate-y-1/2" />
        </Carousel>

        {/* Placeholder for "SEE MORE ON CLUTCH" button */}
        {/* (Add Button component here if needed) */}
      </div>
    </section>
  );
}
