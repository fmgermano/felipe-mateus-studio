
import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, FileText, User } from "lucide-react";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
      {/* Hero Section */}
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-16">
          <h1 className="text-4xl md:text-6xl font-light text-stone-900 mb-6 leading-tight">
            Felipe Mateus
          </h1>
          <div className="w-16 h-0.5 bg-stone-400 mb-8"></div>
          <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-3xl">
            Full-stack developer and visual artist crafting digital experiences 
            with thoughtful code and creative expression.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <Link 
            to="/dev" 
            className="group p-8 bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-start justify-between mb-4">
              <Code className="w-8 h-8 text-stone-600" strokeWidth={1.5} />
              <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-stone-600 group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="text-2xl font-light text-stone-900 mb-2">Development</h3>
            <p className="text-stone-600 leading-relaxed">
              Projects, experiments, and thoughts on building for the web.
            </p>
          </Link>

          <Link 
            to="/art" 
            className="group p-8 bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-start justify-between mb-4">
              <Palette className="w-8 h-8 text-stone-600" strokeWidth={1.5} />
              <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-stone-600 group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="text-2xl font-light text-stone-900 mb-2">Visual Art</h3>
            <p className="text-stone-600 leading-relaxed">
              Illustrations, sketches, and creative explorations.
            </p>
          </Link>

          <Link 
            to="/blog" 
            className="group p-8 bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-start justify-between mb-4">
              <FileText className="w-8 h-8 text-stone-600" strokeWidth={1.5} />
              <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-stone-600 group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="text-2xl font-light text-stone-900 mb-2">All Posts</h3>
            <p className="text-stone-600 leading-relaxed">
              Recent thoughts, tutorials, and creative process notes.
            </p>
          </Link>

          <Link 
            to="/about" 
            className="group p-8 bg-white border border-stone-200 hover:border-stone-300 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-start justify-between mb-4">
              <User className="w-8 h-8 text-stone-600" strokeWidth={1.5} />
              <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-stone-600 group-hover:translate-x-1 transition-all" />
            </div>
            <h3 className="text-2xl font-light text-stone-900 mb-2">About</h3>
            <p className="text-stone-600 leading-relaxed">
              Background, experience, and ways to get in touch.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Index;
