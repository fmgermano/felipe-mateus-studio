
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Calendar, Tag, Clock } from "lucide-react";
import { getBlogPosts, getTagColor, BlogPost } from "../utils/blogUtils";

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getBlogPosts();
      setPosts(allPosts);
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Cabeçalho */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 mb-4">
            Artigos
          </h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-lg text-stone-600 font-light leading-relaxed max-w-2xl mx-auto">
            Reflexões, tutoriais e ideias sobre desenvolvimento, arte e processo
            criativo, espiritualidade e assuntos que me interessam...
          </p>
        </div>

        {/* Lista de Posts */}
        <section>
          <div className="space-y-8">
            {posts.map((post, index) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="block">
                <article className={`gradient-card border border-white/40 p-8 hover-lift rounded-2xl shadow-lg cursor-pointer animate-fade-in-up animate-delay-${(index + 1) * 100}`}>
                  {/* Metadados do Post */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                    <div className="flex items-center text-sm text-stone-500 mb-2 sm:mb-0">
                      <Calendar size={14} className="mr-2" />
                      {new Date(post.date).toLocaleDateString("pt-BR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                      {post.readingTime && (
                        <>
                          <span className="mx-2">•</span>
                          <Clock size={14} className="mr-1" />
                          {post.readingTime}
                        </>
                      )}
                    </div>

                    {/* Tags */}
                    <div className="flex items-center space-x-2">
                      <Tag size={14} className="text-stone-400" />
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-3 py-1 text-xs font-medium rounded-full ${getTagColor(
                              tag
                            )}`}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Conteúdo do Post */}
                  <h2 className="text-2xl font-semibold text-stone-900 mb-4 hover:text-violet-600 transition-colors duration-300">
                    {post.title}
                  </h2>
                  <p className="text-stone-600 leading-relaxed text-lg">
                    {post.excerpt}
                  </p>
                </article>
              </Link>
            ))}
          </div>

          {/* Carregar mais posts (placeholder) */}
          <div className="text-center mt-16">
            <button className="px-8 py-3 glass-card border border-white/40 text-stone-600 hover:text-stone-900 hover:shadow-lg transition-all duration-300 font-medium rounded-full">
              Carregar mais posts
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
