// components/BlogLayout.tsx
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Helper components for consistency
const AuthorInfo = ({ name, title }) => (
  <div className="flex items-center space-x-3 mt-4">
    <Avatar className="h-8 w-8">
      <AvatarFallback>{name.charAt(0)}</AvatarFallback>
    </Avatar>
    <div>
      <p className="text-sm font-semibold text-gray-800">{name}</p>
      <p className="text-xs text-gray-500">{title}</p>
    </div>
  </div>
);

const PostItem = ({ date, title, authorName, authorTitle }) => (
  <div className="py-4 border-b last:border-b-0">
    <p className="text-xs text-gray-500 mb-1">{date}</p>
    <p className="font-semibold hover:text-blue-600 cursor-pointer">{title}</p>
    <AuthorInfo name={authorName} title={authorTitle} />
  </div>
);

export default function BlogLayout() {
  const categories = [
    "All Category",
    "Problems & Costs",
    "Startup",
    "Business",
    "Design",
    "Innovation",
    "Technology",
    "Interview",
    "Marketing",
    "Web Development",
    "Mobile Development",
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          The ultimate source of technology news
        </h1>
        <p className="text-gray-600 max-w-2xl">
          We explore web and mobile technologies, product development and
          design, and the latest news from the tech industry. Get into the
          mobitouch mindset.
        </p>
      </header>

      {/* Featured Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Card 1: Application Testing */}
        <Card className="overflow-hidden shadow-lg">
          <img
            src="mobitouch.net"
            alt="Application testing"
            className="w-full h-48 object-cover"
          />
          <CardHeader>
            <CardTitle className="text-lg">
              Why Application Testing Is Essential for Its Success
            </CardTitle>
            <CardDescription className="line-clamp-3">
              As a tester, I often hear the question: "Why do we need additional
              testing if everything already works? The truth is that even the
              best-written code can contain defects that...
            </CardDescription>
            <AuthorInfo name="Aleksandra Trzeciak" title="QA Tester" />
          </CardHeader>
        </Card>

        {/* Card 2: Startup Idea Validation */}
        <Card className="overflow-hidden shadow-lg">
          <img
            src="mobitouch.net"
            alt="Startup Idea"
            className="w-full h-48 object-cover"
          />
          <CardHeader>
            <CardTitle className="text-lg">
              Will Your App Pay Off? How to Validate a Startup Idea in 3 Steps
            </CardTitle>
            <CardDescription className="line-clamp-3">
              Imagine that you pour months of hard work and all your savings
              into building an app that's supposed to attract thousands of happy
              users and fill your account with millio...
            </CardDescription>
            <AuthorInfo name="Michał Łobaza" title="Project Manager" />
          </CardHeader>
        </Card>

        {/* Card 3: Mobile App Marketing */}
        <Card className="overflow-hidden shadow-lg">
          <img
            src="mobitouch.net"
            alt="App Marketing"
            className="w-full h-48 object-cover"
          />
          <CardHeader>
            <CardTitle className="text-lg">
              Mobile App Marketing Guide: 9 Strategies and Mistakes to Avoid
            </CardTitle>
            <CardDescription className="line-clamp-3">
              Launching an app requires more than design and development. It
              demands creative, relentless promotion. Even brilliant ideas get
              lost in the noise of the app stores...
            </CardDescription>
            <AuthorInfo name="Kasia Sitarz" title="Business Developer" />
          </CardHeader>
        </Card>
      </div>

      {/* Categories Bar */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((category) => (
          <Badge
            key={category}
            variant="outline"
            className="px-4 py-2 cursor-pointer hover:bg-gray-100"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Main Content Area (Older Posts & Sidebar) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Older Posts List */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Older Posts</h2>
          <PostItem
            date="14/01/2024"
            title="Flutter vs. React Native – a fair comparison"
            authorName="Aleks Witko"
            authorTitle="Flutter Developer"
          />
          <PostItem
            date="07/11/2023"
            title="Building an App? We reveal 15 questions a Software Development Company will ask you"
            authorName="Michał Łobaza"
            authorTitle="Project Manager"
          />
          <PostItem
            date="21/10/2023"
            title="4 Models of Outsourcing IT You Should Know"
            authorName="Kasia Sitarz"
            authorTitle="Business Developer"
          />
        </div>

        {/* Sidebar (Popular Posts & Authors) */}
        <aside>
          {/* Popular Posts */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">Popular Posts</CardTitle>
            </CardHeader>
            <CardContent>
              {/* This could be a list of PostItems, but keeping it simple for example */}
              <p className="text-sm border-b pb-3 mb-3">
                Flutter vs. React Native-a fair comparison
              </p>
              <p className="text-sm border-b pb-3 mb-3">
                Why Application Testing Is Essential for Its Success
              </p>
            </CardContent>
          </Card>

          {/* Authors List */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Authors</CardTitle>
            </CardHeader>
            <CardContent>
              <AuthorInfo name="Aleks Witko" title="Flutter Developer" />
              <AuthorInfo name="Aleksandra Trzeciak" title="QA Tester" />
              {/* Add more authors here */}
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
