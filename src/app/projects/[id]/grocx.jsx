import { Card, CardContent } from "@/components/ui/card";
import {
  Smartphone,
  ListChecks,
  Database,
  LayoutDashboard,
  Server,
  Layers,
} from "lucide-react";

export default function GrocXpress() {
  return (
    <div className="container mx-auto p-8">


      {/* Hero Section */}
      <h1 className="text-4xl font-bold mb-10">
        GrocXpress – Mobile Grocery Shopping Application
      </h1>

      {/* Top Section: Project Details */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6 text-sm text-gray-500">
        <div>
          <p className="font-semibold text-gray-700">Project</p>
          <p>Mobile + Web App</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700">Client</p>
          <p>GrocXpress</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700">Industry</p>
          <p>E-commerce</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700">Services</p>
          <p>
            Mobile App Development, Backend Development (API), Web App (Admin
            Dashboard)
          </p>
        </div>
        <div>
          <p className="font-semibold text-gray-700">Platforms</p>
          <p>Android, iOS, Web</p>
        </div>
      </div>

      <Card className="mb-12 shadow-lg">
        <CardContent className="p-0">
          <div className="bg-gray-100 h-96 flex items-center justify-center rounded-t-lg">
            <p>GrocXpress Mobile App & Admin Dashboard Preview</p>
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
            GrocXpress is a modern grocery shopping mobile application designed
            to deliver fast, convenient, and reliable online grocery ordering
            for both customers and businesses. Available on Android and iOS, the
            app offers a smooth, intuitive shopping experience supported by a
            powerful backend system.
          </p>
          <p>
            In addition to the mobile application, GrocXpress includes a
            custom-built API layer and a web-based admin dashboard, enabling
            businesses to manage products, orders, users, and overall operations
            from a centralized platform.
          </p>
        </div>
      </div>

      {/* Technical Scope */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Technical Scope</h2>
        </div>
        <div className="md:col-span-2 space-y-6">
          <div>
            <h3 className="font-semibold mb-2 flex items-center">
              <Smartphone className="w-5 h-5 text-blue-500 mr-2" />
              Mobile Application
            </h3>
            <p>
              Developed using .NET MAUI, enabling a single high-quality codebase
              for both Android and iOS platforms, ensuring consistent
              performance and reduced maintenance effort.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 flex items-center">
              <Layers className="w-5 h-5 text-blue-500 mr-2" />
              UI & UX Design
            </h3>
            <p>
              Designed based on a modern Figma UI, focusing on clean visuals,
              user-friendly navigation, and an optimized grocery shopping flow.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 flex items-center">
              <Server className="w-5 h-5 text-blue-500 mr-2" />
              Backend & API Layer
            </h3>
            <p>
              A custom REST API built using Next.js, serving as the core
              communication layer between the mobile application, admin
              dashboard, and backend systems.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 flex items-center">
              <LayoutDashboard className="w-5 h-5 text-blue-500 mr-2" />
              Admin Web Dashboard
            </h3>
            <p>
              A web-based admin panel developed with Next.js, allowing
              administrators to manage products, categories, orders, users,
              pricing, and inventory through an intuitive interface.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-2 flex items-center">
              <Database className="w-5 h-5 text-blue-500 mr-2" />
              Database
            </h3>
            <p>
              PostgreSQL is used as the primary database, ensuring reliable data
              storage, scalability, and high-performance query handling for
              e-commerce operations.
            </p>
          </div>
        </div>
      </div>

      {/* Challenges */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Challenges</h2>
        </div>
        <div className="md:col-span-2 space-y-3">
          <p>
            The primary challenge was delivering a fully integrated mobile
            e-commerce solution that combines a smooth customer experience with
            powerful administrative control.
          </p>
          <p>Key challenges included:</p>
          <p>• Synchronizing mobile app functionality with backend systems</p>
          <p>
            • Designing APIs that support real-time data updates and order
            processing
          </p>
          <p>
            • Building an admin dashboard that is flexible, easy to use, and
            scalable
          </p>
          <p>• Ensuring consistent behavior across Android and iOS platforms</p>
        </div>
      </div>

      {/* Solution */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Solution</h2>
        </div>
        <div className="md:col-span-2 space-y-3">
          <p>
            • Designed and implemented a robust API architecture to seamlessly
            connect the mobile app and admin dashboard
          </p>
          <p>
            • Built a centralized web-based admin panel for end-to-end
            operational control
          </p>
          <p>
            • Leveraged .NET MAUI for cross-platform consistency and long-term
            maintainability
          </p>
          <p>
            • Structured the backend to support future enhancements and scaling
          </p>
        </div>
      </div>

      {/* Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
        </div>
        <div className="md:col-span-2 space-y-3">
          <p>
            • Delivered a complete mobile e-commerce ecosystem including mobile
            apps, APIs, and admin dashboard
          </p>
          <p>• Simplified backend operations with centralized management</p>
          <p>• Enabled efficient management of products, orders, and users</p>
          <p>
            • Reduced development time and cost through a unified technology
            approach
          </p>
          <p>
            • Provided a scalable foundation ready for future business growth
          </p>
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
            <strong>Mobile-First Shopping Experience:</strong> Clean and
            intuitive UI optimized for effortless browsing and ordering.
          </p>
          <p>
            <strong>Real-Time Order & Data Sync:</strong> Secure APIs enabling
            instant synchronization between mobile apps and backend systems.
          </p>
          <p>
            <strong>Powerful Admin Web Dashboard:</strong> Centralized control
            over products, orders, categories, users, and pricing.
          </p>
          <p>
            <strong>Cross-Platform Mobile Development:</strong> Built with .NET
            MAUI for consistent Android and iOS performance.
          </p>
          <p>
            <strong>Scalable API & Database Architecture:</strong> Designed to
            handle growing catalogs and increasing order volumes.
          </p>
        </div>
      </div>

      {/* Availability */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Availability</h2>
        </div>
        <div className="md:col-span-2 space-y-2">
          <p>
            A demo version of GrocXpress is available to showcase the mobile
            app, backend management, and overall user experience.
          </p>
          <p className="font-semibold mt-4">📱 App Store Links</p>
          <p>🔗 Google Play Store – Link Coming Soon</p>
          <p>🔗 Apple App Store – Link Coming Soon</p>
        </div>
      </div>
    </div>
  );
}
