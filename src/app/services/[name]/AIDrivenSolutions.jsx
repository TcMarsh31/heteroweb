import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  Zap,
  BarChart3,
  GitBranch,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function AIDrivenSolutions() {
  return (
    <div className="container mx-auto px-6  pt-10 pb-20">
      {/* Hero Section */}
      <section className="max-w-4xl mb-20">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          AI-Driven Solutions Tailored for Your Business
        </h1>
        <p className="text-lg text-gray-600">
          Leverage artificial intelligence to automate, optimize, and innovate —
          with solutions designed specifically for your business.
        </p>
      </section>

      {/* Main Content */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6 text-gray-700">
          <p>
            AI is not just about technology — it’s about solving real business
            problems. We design and implement AI-powered solutions that help
            businesses improve efficiency, reduce costs, and make smarter
            decisions.
          </p>
          <p>
            Our AI solutions are customized to your data, processes, and
            objectives. From intelligent automation to predictive analytics, we
            help you unlock the true value of AI.
          </p>
          <p>
            We focus on practical, business-ready AI — not experiments —
            delivering measurable results and long-term value.
          </p>
        </div>

        {/* Right Column – Callout */}
        <Card className="shadow-lg border border-gray-200">
          <CardContent className="p-6 space-y-4">
            <h3 className="text-xl font-semibold">Why AI for Your Business?</h3>
            <p className="text-sm text-gray-600">
              AI enables smarter automation, deeper insights, and data-driven
              decisions that scale with your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center text-blue-600 font-medium hover:underline"
            >
              Explore AI solutions <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* AI Services */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-12">Our AI Services Include</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 space-y-4">
              <Zap className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-lg">
                Business Process Automation
              </h3>
              <p className="text-gray-600 text-sm">
                Automate repetitive and manual workflows to improve efficiency
                and reduce operational costs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <BarChart3 className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-lg">
                Data Analysis & Insights
              </h3>
              <p className="text-gray-600 text-sm">
                Transform raw data into actionable insights using intelligent
                analytics and AI-powered reporting.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <GitBranch className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-lg">Recommendation Systems</h3>
              <p className="text-gray-600 text-sm">
                Personalized recommendations to improve engagement, conversions,
                and user experience.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <Brain className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-lg">
                Intelligent Decision Support
              </h3>
              <p className="text-gray-600 text-sm">
                AI-driven tools that help teams make smarter, faster, and more
                informed decisions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
              <h3 className="font-semibold text-lg">
                Custom AI Models & Integrations
              </h3>
              <p className="text-gray-600 text-sm">
                Tailored AI models integrated seamlessly into your existing web
                and mobile applications.
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
            <Brain className="w-6 h-6 text-blue-600 mt-1" />
            <p className="text-gray-700">
              <strong>Custom AI solutions</strong> designed around your business
              goals, workflows, and data.
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <GitBranch className="w-6 h-6 text-blue-600 mt-1" />
            <p className="text-gray-700">
              <strong>AI integration with web & mobile apps</strong> to enhance
              existing products with intelligent features.
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <Zap className="w-6 h-6 text-blue-600 mt-1" />
            <p className="text-gray-700">
              <strong>Data-driven automation</strong> that reduces manual effort
              and improves operational efficiency.
            </p>
          </div>

          <div className="flex items-start space-x-4">
            <ShieldCheck className="w-6 h-6 text-blue-600 mt-1" />
            <p className="text-gray-700">
              <strong>Scalable and secure AI architectures</strong> built for
              long-term performance, compliance, and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="max-w-4xl">
        <h2 className="text-3xl font-bold mb-6">
          Practical AI That Delivers Real Business Value
        </h2>
        <p className="text-gray-700 mb-6">
          We partner with you to build AI solutions that solve real problems,
          deliver measurable outcomes, and evolve as your business grows.
        </p>

        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
        >
          Start Your AI Project
        </Link>
      </section>
    </div>
  );
}
