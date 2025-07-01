
import { Link } from "react-router-dom";
import { ArrowRight, Code, Palette, FileText, User, Sparkles } from "lucide-react";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 py-16 md:py-28">
        <div className="mb-20 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 text-sm text-stone-600 mb-8">
            <Sparkles className="w-4 h-4" />
            Desenvolvedor & Criativo
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light text-stone-900 mb-8 leading-tight">
            Felipe <span className="bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent">Mateus</span>
          </h1>
          
          <div className="w-24 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto mb-10"></div>
          
          <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-4xl mx-auto">
            Sou desenvolvedor full-stack com paixão por construir projetos do
            início ao fim. Gosto de encarar desafios, aprender no processo e
            entregar soluções que realmente funcionam.
          </p>
        </div>

        {/* Navigation Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Link
            to="/dev"
            className="group p-8 gradient-card border border-white/40 hover-lift rounded-2xl shadow-lg animate-fade-in-up animate-delay-100"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl">
                <Code className="w-7 h-7 text-indigo-600" strokeWidth={1.5} />
              </div>
              <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-indigo-600 group-hover:translate-x-2 transition-all duration-300" />
            </div>
            <h3 className="text-2xl font-semibold text-stone-900 mb-3">
              Desenvolvimento
            </h3>
            <p className="text-stone-600 leading-relaxed">
              Projetos, estudos e experiências no universo web.
            </p>
          </Link>

          <Link
            to="/art"
            className="group p-8 gradient-card border border-white/40 hover-lift rounded-2xl shadow-lg animate-fade-in-up animate-delay-200"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-gradient-to-br from-rose-50 to-pink-100 rounded-xl">
                <Palette className="w-7 h-7 text-rose-600" strokeWidth={1.5} />
              </div>
              <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-rose-600 group-hover:translate-x-2 transition-all duration-300" />
            </div>
            <h3 className="text-2xl font-semibold text-stone-900 mb-3">
              Artes Visuais
            </h3>
            <p className="text-stone-600 leading-relaxed">
              Ilustrações, esboços e experimentos visuais.
            </p>
          </Link>

          <Link
            to="/blog"
            className="group p-8 gradient-card border border-white/40 hover-lift rounded-2xl shadow-lg animate-fade-in-up animate-delay-300"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-gradient-to-br from-amber-50 to-yellow-100 rounded-xl">
                <FileText className="w-7 h-7 text-amber-600" strokeWidth={1.5} />
              </div>
              <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-amber-600 group-hover:translate-x-2 transition-all duration-300" />
            </div>
            <h3 className="text-2xl font-semibold text-stone-900 mb-3">Artigos</h3>
            <p className="text-stone-600 leading-relaxed">
              Reflexões, aprendizados e anotações de projetos.
            </p>
          </Link>

          <Link
            to="/about"
            className="group p-8 gradient-card border border-white/40 hover-lift rounded-2xl shadow-lg animate-fade-in-up animate-delay-400"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-gradient-to-br from-emerald-50 to-green-100 rounded-xl">
                <User className="w-7 h-7 text-emerald-600" strokeWidth={1.5} />
              </div>
              <ArrowRight className="w-5 h-5 text-stone-400 group-hover:text-emerald-600 group-hover:translate-x-2 transition-all duration-300" />
            </div>
            <h3 className="text-2xl font-semibold text-stone-900 mb-3">Sobre</h3>
            <p className="text-stone-600 leading-relaxed">
              Um pouco sobre minha trajetória e como entrar em contato.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Index;
