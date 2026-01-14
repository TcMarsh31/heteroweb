import { Card, CardContent } from "@/components/ui/card";
import {
  Smartphone,
  Zap,
  ShieldCheck,
  Layers,
  Users,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function MobileAppDevelopment() {
  return (
    <div className="container mx-auto px-6 py-20">
      {/* Hero Section */}
      <section className="max-w-4xl mb-20">
        <p className="text-sm font-semibold text-blue-600 mb-3">Services</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Mobile Apps Built for Real-World Impact
        </h1>
        <p className="text-lg text-gray-600">
          We create intuitive, high-performance mobile applications that bring
          your ideas to life on both Android and iOS platforms.
        </p>
      </section>

      {/* Main Content */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6 text-gray-700">
          <p>
            Our mobile app development services cover the complete product
            lifecycle — from idea validation and UI/UX design to development,
            testing, and launch.
          </p>
          <p>
            We build applications that are fast, secure, and crafted to deliver
            an exceptional user experience across devices and platforms.
          </p>
          <p>
            Whether you’re a startup launching an MVP or an enterprise
            modernizing your mobile presence, we focus on building solutions
            that scale, perform reliably, and are easy to maintain.
          </p>
        </div>

        {/* Right Column – Callout */}
        <Card className="shadow-lg border border-gray-200">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">
              Why Invest in Mobile Apps?
            </h3>
            <p className="text-sm text-gray-600">
              Mobile apps create direct, meaningful engagement with users and
              unlock new opportunities for growth and retention.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-blue-600 font-medium hover:underline"
            >
              Let’s build your app <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Focus Areas */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-12">
          Our Mobile Development Approach
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 space-y-4">
              <Users className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-lg">User-Centered Design</h3>
              <p className="text-gray-600 text-sm">
                Designed with a strong focus on usability, accessibility, and
                visual appeal to deliver intuitive user experiences.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <Zap className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-lg">
                Performance & Efficiency
              </h3>
              <p className="text-gray-600 text-sm">
                Optimized for speed, smooth interactions, and battery efficiency
                across mobile devices.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-lg">Security & Reliability</h3>
              <p className="text-gray-600 text-sm">
                Secure data handling, authentication, and best practices to
                protect users and backend systems.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <Layers className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-lg">Scalable Architecture</h3>
              <p className="text-gray-600 text-sm">
                Built with scalability in mind, making it easy to add features
                and support growing user bases.
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
            <Smartphone className="w-6 h-6 text-blue-600 mt-1" />
            <p className="text-gray-700">
              <strong>Android & iOS mobile apps</strong> designed for
              performance, usability, and long-term success.
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <Layers className="w-6 h-6 text-blue-600 mt-1" />
            <p className="text-gray-700">
              <strong>Cross-platform app development</strong> to reduce costs
              while maintaining high-quality user experiences.
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <Zap className="w-6 h-6 text-blue-600 mt-1" />
            <p className="text-gray-700">
              <strong>MVP development for startups</strong> to validate ideas
              quickly and launch faster.
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <ShieldCheck className="w-6 h-6 text-blue-600 mt-1" />
            <p className="text-gray-700">
              <strong>App maintenance & performance optimization</strong> to
              ensure reliability, updates, and continuous improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">
          Mobile Solutions Designed to Grow With You
        </h2>
        <p className="text-gray-700 mb-6">
          We work closely with you to understand your users and business goals,
          delivering mobile applications that drive engagement, retention, and
          measurable growth.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Start Your Mobile App Project
        </Link>
      </section>
    </div>
  );
}
