import { Card, CardContent } from "@/components/ui/card";
import {
  Code2,
  ShieldCheck,
  Zap,
  Layers,
  Puzzle,
  ArrowRight,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";

export default function CustomWebDevelopment() {
  return (
    <div className="container mx-auto px-6 pt-10 pb-20">
      {/* Hero Section */}
      <section className="max-w-4xl mb-20">
        {/* <p className="text-sm font-semibold text-blue-600 mb-3">Services</p> */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Custom Web Development That Fits Your Business
        </h1>
        <p className="text-lg text-gray-600">
          Every business is unique — your website or web application should be
          too. We deliver custom-built web solutions designed to match your
          exact requirements, workflows, and long-term growth plans.
        </p>
      </section>

      {/* Main Content */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6 text-gray-700">
          <p>
            We specialize in end-to-end custom web development, covering
            everything from initial concept and UI/UX design to deployment and
            ongoing support.
          </p>
          <p>
            Whether you need a corporate website, customer portal, admin
            dashboard, or an enterprise-level web application, we build
            solutions that are reliable, scalable, and secure.
          </p>
          <p>
            Our approach ensures that your product is not only visually
            polished, but also technically robust and ready to evolve with your
            business.
          </p>
        </div>

        {/* Right Column – Callout */}
        <Card className="shadow-lg border border-gray-200">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">Why Custom Development?</h3>
            <p className="text-sm text-gray-600">
              We don’t rely on generic templates. Every solution is crafted
              specifically around your business logic, users, and objectives.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-blue-600 font-medium hover:underline"
            >
              Discuss your project <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Focus Areas */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-12">
          Our Development Approach Focuses On
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 space-y-4">
              <Code2 className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-lg">
                Clean Architecture & Modern Frameworks
              </h3>
              <p className="text-gray-600 text-sm">
                Well-structured codebases using modern technologies to ensure
                clarity, maintainability, and long-term stability.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <Zap className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-lg">
                High Performance & Responsiveness
              </h3>
              <p className="text-gray-600 text-sm">
                Optimized for speed, responsiveness, and seamless user
                experiences across all devices.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-lg">
                Security & Data Protection
              </h3>
              <p className="text-gray-600 text-sm">
                Secure authentication, data validation, and best practices to
                protect your users and systems.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <Puzzle className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-lg">Seamless Integrations</h3>
              <p className="text-gray-600 text-sm">
                Smooth integration with third-party services, APIs, payment
                systems, CRMs, and analytics tools.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <Layers className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-lg">
                Scalability & Maintainability
              </h3>
              <p className="text-gray-600 text-sm">
                Architected to grow with your business, supporting future
                features and increased usage.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What We Deliver */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-12">What We Deliver</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
          <div className="flex items-start space-x-4">
            <Code2 className="w-6 h-6 text-blue-600 mt-1" />
            <p className="text-gray-700">
              <strong>Custom websites & web applications</strong> built around
              your business logic, user flows, and performance goals.
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <LayoutDashboard className="w-6 h-6 text-blue-600 mt-1" />
            <p className="text-gray-700">
              <strong>Enterprise dashboards & portals</strong> for internal
              teams, customers, and partners with role-based access.
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <Puzzle className="w-6 h-6 text-blue-600 mt-1" />
            <p className="text-gray-700">
              <strong>API development & integrations</strong> connecting your
              systems with third-party platforms and services.
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <Layers className="w-6 h-6 text-blue-600 mt-1" />
            <p className="text-gray-700">
              <strong>Cloud-ready and scalable solutions</strong> designed to
              support growth, performance, and long-term maintainability.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">
          Built Around Your Business — Not Templates
        </h2>
        <p className="text-gray-700 mb-6">
          We don’t believe in one-size-fits-all solutions. Every project is
          tailored to your workflows, users, and long-term goals — ensuring a
          product that truly supports your business.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Start Your Project
        </Link>
      </section>
    </div>
  );
}
