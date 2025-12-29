// app/page.tsx (or similar page file)
import BlogCard from "@/components/BlogCard";

export default function BlogPage() {
  // Example data based on the image content
  const blogPosts = [
    {
      date: "07/11/2025",
      title: "Will Your App Pay Off? How to Validate a Startup Idea in 3 Steps",
      excerpt:
        "Imagine that you pour months of hard work and all your savings into building an app that's supposed to attract thousands of happy users and fill your account with millio...",
      authorName: "Michał Łobaza",
      authorTitle: "Project Manager",
      imageUrl: "mobitouch.net",
      category: "Mobile Development",
    },
    {
      date: "17/10/2025",
      title: "Mobile App Marketing Guide: 9 Strategies and Mistakes to Avoid",
      excerpt:
        "Launching an app requires more than design and development. It demands creative, relentless promotion. Even brilliant ideas get lost in the noise of the app stores...",
      authorName: "Kasia Sitarz",
      authorTitle: "Business Development Specialist",
      imageUrl: "mobitouch.net",
      category: "Problems & costs",
    },
    {
      date: "12/09/2025",
      title:
        "A Fast and Affordable Mobile App for E-commerce? Meet Flutter Wrapper",
      excerpt:
        "More than half of all online purchases today happen on smartphones. For small and mid-sized online stores, that's a big challenge: customers often forget about a shop after...",
      authorName: "Kasia Sitarz",
      authorTitle: "Business Development Specialist",
      imageUrl: "mobitouch.net",
      category: "Web Development",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
        Blogs
      </p>
      <h1 className="mt-2 text-4xl font-extrabold mb-4">
        Gain some useful knowledge
      </h1>
      <p className="text-right text-sm text-blue-600 mb-8 cursor-pointer">
        View all
      </p>

      {/* The Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.title} {...post} />
        ))}
      </div>
    </div>
  );
}
