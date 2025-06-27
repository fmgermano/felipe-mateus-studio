
import Navigation from "../components/Navigation";
import { Calendar, Eye } from "lucide-react";

const Art = () => {
  // Mock data - in real app this would come from markdown files
  const artworks = [
    {
      title: "Urban Sketches Series",
      image: "/api/placeholder/400/300",
      description: "Collection of ink and watercolor sketches capturing city life and architecture.",
      medium: "Ink & Watercolor",
      year: "2024"
    },
    {
      title: "Digital Portraits",
      image: "/api/placeholder/400/500",
      description: "Character studies exploring light, shadow, and expression in digital medium.",
      medium: "Digital",
      year: "2024"
    },
    {
      title: "Abstract Compositions",
      image: "/api/placeholder/500/400",
      description: "Experimental pieces focusing on color relationships and geometric forms.",
      medium: "Acrylic",
      year: "2023"
    },
    {
      title: "Nature Studies",
      image: "/api/placeholder/300/400",
      description: "Detailed botanical illustrations and landscape studies from life.",
      medium: "Pencil & Charcoal",
      year: "2023"
    },
    {
      title: "Typography Experiments",
      image: "/api/placeholder/400/400",
      description: "Hand-lettered designs exploring the intersection of type and visual art.",
      medium: "Mixed Media",
      year: "2024"
    },
    {
      title: "Quick Gestures",
      image: "/api/placeholder/350/450",
      description: "Fast figure drawings capturing movement and spontaneous expression.",
      medium: "Charcoal",
      year: "2024"
    }
  ];

  const artPosts = [
    {
      title: "Finding Inspiration in Everyday Moments",
      date: "2024-01-20",
      excerpt: "How I learned to see artistic potential in mundane city scenes and daily routines.",
      slug: "everyday-inspiration"
    },
    {
      title: "Digital vs Traditional: A Personal Journey",
      date: "2024-01-12",
      excerpt: "Exploring the unique qualities and challenges of both digital and traditional art mediums.",
      slug: "digital-vs-traditional"
    },
    {
      title: "Color Theory in Practice",
      date: "2024-01-05",
      excerpt: "Practical applications of color relationships in creating mood and atmosphere.",
      slug: "color-theory-practice"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 mb-4">
            Visual Art
          </h1>
          <div className="w-16 h-0.5 bg-stone-400 mb-6"></div>
          <p className="text-lg text-stone-600 font-light leading-relaxed max-w-2xl">
            A visual exploration of ideas, techniques, and creative experiments across various mediums.
          </p>
        </div>

        {/* Art Gallery Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-stone-900 mb-8">Recent Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artworks.map((artwork, index) => (
              <div key={index} className="group bg-white border border-stone-200 overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="aspect-[4/3] bg-stone-100 relative overflow-hidden">
                  <img 
                    src={artwork.image} 
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <Eye className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={24} />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-stone-500 mb-2">
                    <span>{artwork.medium}</span>
                    <span>{artwork.year}</span>
                  </div>
                  <h3 className="text-lg font-light text-stone-900 mb-2">{artwork.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{artwork.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Art Blog Posts */}
        <section>
          <h2 className="text-2xl font-light text-stone-900 mb-8">Art & Process</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artPosts.map((post, index) => (
              <article key={index} className="bg-white border border-stone-200 p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center text-sm text-stone-500 mb-3">
                  <Calendar size={14} className="mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <h3 className="text-lg font-light text-stone-900 mb-3 hover:text-stone-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Art;
