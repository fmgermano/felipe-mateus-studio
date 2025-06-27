
import Navigation from "../components/Navigation";
import { Calendar, Tag } from "lucide-react";

const Blog = () => {
  // Mock data - in real app this would come from markdown files
  const allPosts = [
    {
      title: "Finding Inspiration in Everyday Moments",
      date: "2024-01-20",
      excerpt: "How I learned to see artistic potential in mundane city scenes and daily routines.",
      tags: ["art", "inspiration", "process"],
      slug: "everyday-inspiration"
    },
    {
      title: "Building Scalable Angular Applications",
      date: "2024-01-15",
      excerpt: "Lessons learned from architecting large-scale Angular applications with proper state management and performance optimization.",
      tags: ["dev", "angular", "architecture"],
      slug: "scalable-angular-apps"
    },
    {
      title: "Digital vs Traditional: A Personal Journey",
      date: "2024-01-12",
      excerpt: "Exploring the unique qualities and challenges of both digital and traditional art mediums.",
      tags: ["art", "digital", "traditional"],
      slug: "digital-vs-traditional"
    },
    {
      title: "Modern CSS Layout Techniques",
      date: "2024-01-08",
      excerpt: "Exploring CSS Grid, Flexbox, and Container Queries for responsive web design.",
      tags: ["dev", "css", "frontend"],
      slug: "modern-css-layouts"
    },
    {
      title: "Color Theory in Practice",
      date: "2024-01-05",
      excerpt: "Practical applications of color relationships in creating mood and atmosphere.",
      tags: ["art", "color", "theory"],
      slug: "color-theory-practice"
    },
    {
      title: "TypeScript Best Practices",
      date: "2023-12-22",
      excerpt: "Essential patterns and practices for writing maintainable TypeScript code.",
      tags: ["dev", "typescript", "best-practices"],
      slug: "typescript-best-practices"
    },
    {
      title: "Sketching from Life: Urban Environments",
      date: "2023-12-15",
      excerpt: "Techniques and observations from drawing architectural details and street scenes.",
      tags: ["art", "sketching", "urban"],
      slug: "urban-sketching"
    },
    {
      title: "API Design Principles",
      date: "2023-12-08",
      excerpt: "Creating intuitive and maintainable REST APIs with proper documentation.",
      tags: ["dev", "api", "backend"],
      slug: "api-design-principles"
    }
  ];

  const getTagColor = (tag: string) => {
    switch (tag) {
      case "dev": return "bg-blue-100 text-blue-700";
      case "art": return "bg-rose-100 text-rose-700";
      default: return "bg-stone-100 text-stone-700";
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 mb-4">
            All Posts
          </h1>
          <div className="w-16 h-0.5 bg-stone-400 mb-6"></div>
          <p className="text-lg text-stone-600 font-light leading-relaxed max-w-2xl">
            Thoughts, tutorials, and insights on development, art, and creative process—all in one place.
          </p>
        </div>

        {/* Posts Grid */}
        <section>
          <div className="space-y-8">
            {allPosts.map((post, index) => (
              <article key={index} className="bg-white border border-stone-200 p-8 hover:shadow-lg transition-shadow cursor-pointer">
                {/* Post Meta */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div className="flex items-center text-sm text-stone-500 mb-2 sm:mb-0">
                    <Calendar size={14} className="mr-2" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  
                  {/* Tags */}
                  <div className="flex items-center space-x-2">
                    <Tag size={14} className="text-stone-400" />
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className={`px-2 py-1 text-xs font-light rounded ${getTagColor(tag)}`}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Post Content */}
                <h2 className="text-2xl font-light text-stone-900 mb-4 hover:text-stone-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-stone-600 leading-relaxed">{post.excerpt}</p>
              </article>
            ))}
          </div>

          {/* Load More (placeholder) */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border border-stone-300 text-stone-600 hover:border-stone-400 hover:text-stone-900 transition-colors font-light">
              Load More Posts
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
