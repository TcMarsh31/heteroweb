"use client";

import Navbar from "@/components/navbar";
import Hero from "@/components/Hero";

export default function App() {
  return (
    <main className="min-h-screen w-full">
      {/* Top Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Page Content */}
      <section className="bg-red-500 p-10 text-white">
        <h2 className="mb-4 text-2xl font-bold">What is Lorem Ipsum?</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </section>
    </main>
  );
}
