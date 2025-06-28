
import { useParams, Link } from "react-router-dom";
import { Calendar, Tag, ArrowLeft, Clock } from "lucide-react";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Navigation from "./Navigation";
import { getBlogPost, getTagColor } from "../utils/blogUtils";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <div>Post not found</div>;
  }
  
  const post = getBlogPost(slug);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-stone-50">
        <Navigation />
        <main className="max-w-4xl mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-light text-stone-900 mb-4">Post Not Found</h1>
            <p className="text-stone-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Link 
              to="/blog" 
              className="inline-flex items-center text-stone-600 hover:text-stone-900 transition-colors"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Blog
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />
      
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Back to Blog */}
        <Link 
          to="/blog"
          className="inline-flex items-center text-stone-600 hover:text-stone-900 transition-colors mb-8"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Blog
        </Link>

        {/* Post Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          {/* Post Meta */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center text-sm text-stone-500 mb-4 sm:mb-0">
              <Calendar size={14} className="mr-2" />
              {new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
              {post.readingTime && (
                <>
                  <span className="mx-3">•</span>
                  <Clock size={14} className="mr-2" />
                  {post.readingTime}
                </>
              )}
            </div>
            
            {/* Tags */}
            <div className="flex items-center space-x-2">
              <Tag size={14} className="text-stone-400" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className={`px-2 py-1 text-xs font-light rounded ${getTagColor(tag)}`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Post Content */}
        <article className="prose prose-stone prose-lg max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-light text-stone-900 mt-12 mb-6" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-light text-stone-900 mt-10 mb-4" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-light text-stone-900 mt-8 mb-3" {...props} />,
              p: ({node, ...props}) => <p className="text-stone-700 leading-relaxed mb-6" {...props} />,
              code: ({node, ...props}) => (
                <code className="bg-stone-100 px-2 py-1 rounded text-sm font-mono text-stone-800" {...props} />
              ),
              pre: ({node, ...props}) => (
                <pre className="bg-stone-100 p-4 rounded-lg overflow-x-auto mb-6" {...props} />
              ),
              ul: ({node, ...props}) => <ul className="space-y-2 mb-6" {...props} />,
              ol: ({node, ...props}) => <ol className="space-y-2 mb-6" {...props} />,
              li: ({node, ...props}) => <li className="text-stone-700" {...props} />,
              blockquote: ({node, ...props}) => (
                <blockquote className="border-l-4 border-stone-300 pl-6 italic text-stone-600 my-6" {...props} />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </article>
      </main>
    </div>
  );
};

export default BlogPost;
