import { Card, CardContent } from "@/components/ui/card";
import {
  Globe,
  Palette,
  Plug,
  Smartphone,
  ShoppingCart,
  ShieldCheck,
  Search,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function WordPressDevelopment() {
  return (
    <div className="container mx-auto px-6 py-20">
      {/* Hero Section */}
      <section className="max-w-4xl mb-20">
        <p className="text-sm font-semibold text-blue-600 mb-3">Services</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Expert WordPress Development Services for Businesses
        </h1>
        <p className="text-lg text-gray-600">
          We create fast, secure, and SEO-friendly WordPress websites that help
          businesses grow, convert users, and succeed online.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6 text-gray-700">
          <p>
            We specialize in building high-quality WordPress solutions that
            combine technical excellence with creative design. Our approach
            ensures your website is visually appealing, easy to manage, and
            optimized for performance.
          </p>
          <p>
            From custom business websites to complex e-commerce platforms, we
            tailor every WordPress project to your brand, goals, and users —
            delivering results that matter.
          </p>
        </div>

        {/* Right Column – Callout */}
        <Card className="shadow-lg border border-gray-200">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">Why WordPress?</h3>
            <p className="text-sm text-gray-600">
              WordPress offers flexibility, scalability, and ease of management
              — making it the world’s most trusted content platform.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-blue-600 font-medium hover:underline"
            >
              Start your WordPress project{" "}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Services */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-12">
          Our WordPress Services Include
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 space-y-4">
              <Palette className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-lg">
                Custom WordPress Theme Development
              </h3>
              <p className="text-gray-600 text-sm">
                Unique, brand-focused WordPress themes designed for performance,
                usability, and visual impact.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <Plug className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-lg">
                Plugin Development & Customization
              </h3>
              <p className="text-gray-600 text-sm">
                Custom plugins or tailored modifications to extend WordPress
                functionality based on your needs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <Smartphone className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-lg">
                Responsive & Mobile-Friendly Design
              </h3>
              <p className="text-gray-600 text-sm">
                Fully responsive websites that deliver a seamless experience
                across desktops, tablets, and smartphones.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <ShoppingCart className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-lg">
                WooCommerce & E-commerce Solutions
              </h3>
              <p className="text-gray-600 text-sm">
                High-performance online stores optimized for speed, conversions,
                and scalability.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-lg">
                Website Maintenance & Support
              </h3>
              <p className="text-gray-600 text-sm">
                Ongoing updates, security monitoring, backups, and technical
                support to keep your site running smoothly.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <Search className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-lg">
                SEO & Performance Optimization
              </h3>
              <p className="text-gray-600 text-sm">
                Search-engine optimized, fast-loading WordPress sites designed
                to improve rankings and user engagement.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Closing Section */}
      <section className="max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">
          WordPress Solutions That Drive Results
        </h2>
        <p className="text-gray-700 mb-6">
          Partner with <strong>Your Company Name</strong> for WordPress
          development services that turn ideas into impactful digital
          experiences. Whether you need a simple business website or a complex
          e-commerce platform, we deliver solutions that grow your online
          presence and drive measurable results.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Get Started with WordPress
        </Link>
      </section>
    </div>
  );
}
