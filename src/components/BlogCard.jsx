// components/BlogCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function BlogCard({
  date,
  title,
  excerpt,
  authorName,
  authorTitle,
  imageUrl,
  category,
}) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative h-48 w-full">
        {/* In a real Next.js app, you would use the <Image> component */}
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
        />
        {/* Category Badge */}
        <span className="absolute top-4 right-4 bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow-md">
          {category}
        </span>
      </div>

      <CardHeader>
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <CardTitle className="text-lg font-bold hover:text-blue-600 cursor-pointer">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        {/* Author Info */}
        <div className="flex items-center space-x-3">
          <Avatar className="h-8 w-8">
            <AvatarFallback>{authorName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-semibold text-gray-800">{authorName}</p>
            <p className="text-xs text-gray-500">{authorTitle}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
