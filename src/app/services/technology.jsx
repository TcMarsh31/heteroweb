// components/technology-section.tsx (or place in app/page.tsx)

export default function TechnologySection() {
  return (
    <section className="bg-[#101317] py-20 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-4">
            TECHNOLOGY
          </p>
          <h1 className="text-3xl font-bold leading-relaxed max-w-2xl">
            We use multiple programming tools to create optimized and
            attention-hooking applications. Our specialties include{" "}
            <strong className="text-blue-400">Flutter</strong>,{" "}
            <strong className="text-blue-400">React</strong> and{" "}
            <strong className="text-blue-400">.NET framework</strong>, but our
            horizons remain wide.
          </h1>
        </div>

        {/* Timeline/Separator Line */}
        <div className="relative mb-16">
          {/* The main horizontal line */}
          <hr className="border-t border-gray-600 w-full" />

          {/* Markers (positioned absolutely over the line) */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-1/2">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
          </div>
          <div className="absolute top-1/2 left-1/3 transform -translate-y-1/2 -translate-x-1/2">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
          </div>
          <div className="absolute top-1/2 left-2/3 transform -translate-y-1/2 -translate-x-1/2">
            <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-3 gap-8">
          {/* Mobile Column */}
          <div>
            <h2 className="text-sm font-semibold mb-6">Mobile</h2>
            <ul className="space-y-4 text-sm">
              <li>
                <strong className="text-blue-400">Cross-platform</strong>
                <ul className="pl-4 pt-2 space-y-2 text-xs text-gray-400">
                  <li>• Flutter</li>
                </ul>
              </li>
              <li className="flex gap-10">
                <div>
                  <strong className="text-blue-400">iOS</strong>
                  <ul className="pl-4 pt-2 space-y-2 text-xs text-gray-400">
                    <li>• iOS Swift</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-blue-400">Android</strong>
                  <ul className="pl-4 pt-2 space-y-2 text-xs text-gray-400">
                    <li>• Kotlin</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* Back-end Column */}
          <div>
            <h2 className="text-sm font-semibold mb-6">Back-end</h2>
            <ul className="space-y-4 text-xs text-gray-400">
              <li>• C# & .NET</li>
              <li>• NEXTJS</li>
            </ul>
          </div>

          {/* Front-end Column */}
          <div>
            <h2 className="text-sm font-semibold mb-6">Front-end</h2>
            <ul className="space-y-4 text-xs text-gray-400">
              <li>• React.js</li>
              <li>• Angular</li>
              <li>• HTML5</li>
              <li>• CSS3</li>
              <li>• JavaScript</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
