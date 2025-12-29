// components/LandingSection.tsx
import { Button } from "@/components/ui/button";

export default function Inquiry() {
  return (
    // The main container with the purple background color
    <section className="relative bg-[#8d1be5] text-white p-8 md:p-16 overflow-hidden">
      <div className="max-w-4xl mx-auto z-10 relative">
        <p className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-75">
          READY TO CREATE AN APP?
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-6 max-w-lg">
          Our team is ready to help you to find the optimal solution that will
          meet your specifications and achieve your business goals.
        </h1>
        {/* The orange button using a custom background color utility */}
        <Button className="bg-[#ff4d00] hover:bg-[#e64500] text-white font-semibold py-6 px-10 rounded-lg shadow-lg">
          SEND AN INQUIRY
        </Button>
      </div>

      {/* Placeholder for abstract vector shapes (SVGs would go here) */}
      <div className="absolute top-0 right-0 h-full w-full pointer-events-none">
        {/* You would replace these divs with actual SVG code for the teal shapes */}
        <div className="absolute top-10 right-10 w-16 h-16 bg-[#00e6e6] opacity-30 rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-[-100px] right-[-50px] w-48 h-48 bg-[#00e6e6] opacity-30 rounded-full mix-blend-screen"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#00e6e6] opacity-30 rounded-full mix-blend-screen transform -translate-y-1/2"></div>
      </div>
    </section>
  );
}
