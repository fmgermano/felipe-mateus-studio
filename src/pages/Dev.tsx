import Navigation from "../components/Navigation";
import { ExternalLink, Github, Calendar } from "lucide-react";

const Dev = () => {
  // Mock data - in real app this would come from markdown files
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Full-stack solution with Angular, Node.js, and PostgreSQL. Features include real-time inventory, payment processing, and admin dashboard.",
      tags: ["Angular", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team communication features.",
      tags: ["React", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Weather Visualization",
      description: "Interactive weather data visualization using D3.js and external APIs.",
      tags: ["D3.js", "API Integration", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const blogPosts = [
    {
      title: "Building Scalable Angular Applications",
      date: "2024-01-15",
      excerpt: "Lessons learned from architecting large-scale Angular applications with proper state management and performance optimization.",
      slug: "scalable-angular-apps"
    },
    {
      title: "Modern CSS Layout Techniques",
      date: "2024-01-08",
      excerpt: "Exploring CSS Grid, Flexbox, and Container Queries for responsive web design.",
      slug: "modern-css-layouts"
    },
    {
      title: "TypeScript Best Practices",
      date: "2023-12-22",
      excerpt: "Essential patterns and practices for writing maintainable TypeScript code.",
      slug: "typescript-best-practices"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 mb-4">
            Development
          </h1>
          <div className="w-16 h-0.5 bg-stone-400 mb-6"></div>
          <p className="text-lg text-stone-600 font-light leading-relaxed max-w-2xl">
            A collection of projects, experiments, and thoughts on building thoughtful digital experiences.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-stone-900 mb-8">Featured Projects</h2>
          <div className="grid gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <div key={index} className="bg-white border border-stone-200 p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <h3 className="text-xl font-light text-stone-900 mb-2 md:mb-0">{project.title}</h3>
                  <div className="flex items-center space-x-4">
                    <a href={project.liveUrl} className="text-stone-600 hover:text-stone-900 transition-colors">
                      <ExternalLink size={18} />
                    </a>
                    <a href={project.githubUrl} className="text-stone-600 hover:text-stone-900 transition-colors">
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <p className="text-stone-600 leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-3 py-1 bg-stone-100 text-stone-700 text-sm font-light">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section className="mb-16">
          <h2 className="text-2xl font-light text-stone-900 mb-8">Other Projects</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <div key={index} className="bg-white border border-stone-200 p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-light text-stone-900">{project.title}</h3>
                  <div className="flex items-center space-x-3">
                    <a href={project.liveUrl} className="text-stone-600 hover:text-stone-900 transition-colors">
                      <ExternalLink size={16} />
                    </a>
                    <a href={project.githubUrl} className="text-stone-600 hover:text-stone-900 transition-colors">
                      <Github size={16} />
                    </a>
                  </div>
                </div>
                <p className="text-stone-600 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-2 py-1 bg-stone-100 text-stone-700 text-xs font-light">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dev Blog Posts */}
        <section>
          <h2 className="text-2xl font-light text-stone-900 mb-8">Recent Posts</h2>
          <div className="space-y-6">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white border border-stone-200 p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center text-sm text-stone-500 mb-3">
                  <Calendar size={14} className="mr-2" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <h3 className="text-xl font-light text-stone-900 mb-3 hover:text-stone-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-stone-600 leading-relaxed">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dev;
