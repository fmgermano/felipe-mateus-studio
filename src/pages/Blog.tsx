import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import { Calendar, Tag } from "lucide-react";
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
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Cabeçalho */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 mb-4">
            Artigos
          </h1>
          <div className="w-16 h-0.5 bg-stone-400 mb-6"></div>
          <p className="text-lg text-stone-600 font-light leading-relaxed max-w-2xl">
            Reflexões, tutoriais e ideias sobre desenvolvimento, arte e processo
            criativo, espiritualidade e assuntos que me interessam...
          </p>
        </div>

        {/* Lista de Posts */}
        <section>
          <div className="space-y-8">
            {posts.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="block">
                <article className="bg-white border border-stone-200 p-8 hover:shadow-lg transition-shadow cursor-pointer">
                  {/* Metadados do Post */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div className="flex items-center text-sm text-stone-500 mb-2 sm:mb-0">
                      <Calendar size={14} className="mr-2" />
                      {new Date(post.date).toLocaleDateString("pt-BR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>

                    {/* Tags */}
                    <div className="flex items-center space-x-2">
                      <Tag size={14} className="text-stone-400" />
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className={`px-2 py-1 text-xs font-light rounded ${getTagColor(
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
                  <h2 className="text-2xl font-light text-stone-900 mb-4 hover:text-stone-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-stone-600 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {post.readingTime && (
                    <div className="mt-4 text-sm text-stone-400">
                      {post.readingTime} de leitura
                    </div>
                  )}
                </article>
              </Link>
            ))}
          </div>

          {/* Carregar mais posts (placeholder) */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border border-stone-300 text-stone-600 hover:border-stone-400 hover:text-stone-900 transition-colors font-light">
              Carregar mais posts
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;
