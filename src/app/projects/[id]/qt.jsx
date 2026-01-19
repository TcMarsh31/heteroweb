import { Card, CardContent } from "@/components/ui/card";
import {
  ListChecks,
  Database,
  ShieldCheck,
  Network,
  BarChart3,
} from "lucide-react";

export default function QT() {
  return (
    <div className="container mx-auto p-8">


      {/* Hero Section */}
      <h1 className="text-4xl font-bold mb-10">
        QuickTransfert – Mobile Network & DTH Payment Platform
      </h1>

      {/* Top Section: Project Details */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6 text-sm text-gray-500">
        <div>
          <p className="font-semibold text-gray-700">Project</p>
          <p>Web App</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700">Client</p>
          <p>QuickTransfert</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700">Industry</p>
          <p>Finance</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700">Services</p>
          <p>Frontend Development, Backend Development</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700">Platform Type</p>
          <p>Enterprise Transaction System</p>
        </div>
      </div>

      <Card className="mb-12 shadow-lg">
        <CardContent className="p-0">
          <div className="bg-gray-100 h-96 flex items-center justify-center rounded-t-lg">
            <p>QuickTransfert Platform Illustration</p>
          </div>
        </CardContent>
      </Card>

      {/* Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        </div>
        <div className="md:col-span-2 space-y-4">
          <p>
            QuickTransfert is an enterprise-ready network transaction web
            platform designed exclusively for mobile network payments and DTH
            recharge services across global providers.
          </p>
          <p>
            The platform empowers businesses, agents, and aggregators to perform
            secure mobile top-ups and DTH recharges through a centralized,
            highly reliable system.
          </p>
          <p>
            With a powerful admin dashboard, QuickTransfert provides real-time
            visibility into transactions, balances, agent activities, and
            provider performance. It is built to handle high transaction
            volumes, multi-provider integrations, and global operations while
            maintaining speed, accuracy, and security.
          </p>
        </div>
      </div>

      {/* Technical Scope */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Technical Scope</h2>
        </div>
        <div className="md:col-span-2">
          <ul className="space-y-4">
            <li className="flex items-center">
              <ListChecks className="w-5 h-5 text-blue-500 mr-3" />
              Frontend & API Layer built with Next.js for fast rendering and
              secure communication
            </li>
            <li className="flex items-center">
              <Database className="w-5 h-5 text-blue-500 mr-3" />
              PostgreSQL database ensuring data integrity and high availability
            </li>
            <li className="flex items-center">
              <Network className="w-5 h-5 text-blue-500 mr-3" />
              Multi-provider architecture supporting global integrations
            </li>
            <li className="flex items-center">
              <ShieldCheck className="w-5 h-5 text-blue-500 mr-3" />
              Secure transaction handling with role-based access control
            </li>
            <li className="flex items-center">
              <BarChart3 className="w-5 h-5 text-blue-500 mr-3" />
              Audit-friendly data structures and real-time reporting
            </li>
          </ul>
        </div>
      </div>

      {/* Challenges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
        </div>
        <div className="md:col-span-2 space-y-4">
          <p>
            One of the major challenges was normalizing diverse vendor responses
            into a unified transaction system.
          </p>
          <p>
            Each provider—such as Ding, Rebtel, and multiple recharge
            vendors—returned transaction responses in different JSON formats,
            structures, and data conventions. This introduced complexity in
            transaction processing, reporting, and auditing.
          </p>
        </div>
      </div>

      {/* Solution */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
        </div>
        <div className="md:col-span-2 space-y-3">
          <p>
            • Converted vendor-specific JSON responses into a standardized
            internal format
          </p>
          <p>• Mapped all transactions into a single unified database table</p>
          <p>
            • Implemented logic to compare transaction amounts across vendors
          </p>
          <p>
            • Automatically selected the smallest payable amount to maximize
            profitability while maintaining transaction success
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
        </div>
        <div className="md:col-span-2 space-y-3">
          <p>• Unified multiple global providers under a single workflow</p>
          <p>
            • Improved operational efficiency by removing vendor-specific logic
          </p>
          <p>
            • Increased client profitability through optimized cost selection
          </p>
          <p>
            • Delivered a scalable, high-volume real-time transaction system
          </p>
          <p>• Enabled clear auditing, reporting, and performance tracking</p>
        </div>
      </div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Key Specialized Features
          </h2>
        </div>
        <div className="md:col-span-2 space-y-4">
          <p>
            <strong>Centralized Dashboard:</strong> Real-time visibility into
            transactions, balances, provider performance, and agent activity.
          </p>
          <p>
            <strong>Real-Time Payment Processing:</strong> Instant mobile
            top-ups and DTH recharges with live status updates.
          </p>
          <p>
            <strong>Advanced Agent Management:</strong> Role-based access,
            transaction limits, onboarding, and monitoring.
          </p>
          <p>
            <strong>Unified Multi-Provider Integration:</strong> Seamless
            integration with global providers using normalized response
            handling.
          </p>
          <p>
            <strong>User-Friendly & Scalable Design:</strong> Intuitive UI
            backed by a system designed to grow with business demand.
          </p>
        </div>
      </div>
    </div>
  );
}
