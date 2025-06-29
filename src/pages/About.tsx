import Navigation from "../components/Navigation";
import { Mail, Github, Linkedin, Twitter, MapPin, Coffee } from "lucide-react";

const About = () => {
  const skills = {
    frontend: ["Angular", "React", "TypeScript", "Tailwind CSS", "RxJS"],
    backend: ["Node.js", "NestJs", "PostgreSQL", "MySQL", "REST APIs"],
    tools: [
      "Git",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Figma",
      "Adobe Creative Suite",
    ],
    arte: [
      "Ilustração",
      "Digital & Vetores",
      "Estudos de figura humana com modelo vivo",
      "Retratos",
      "Urban Sketching",
    ],
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Email",
      href: "mailto:hello@felipemateus.dev",
      color: "text-stone-600",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/felipemateus",
      color: "text-stone-600",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/felipemateus8",
      color: "text-blue-600",
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://x.com/felipemateus",
      color: "text-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-light text-stone-900 mb-4">
            Sobre
          </h1>
          <div className="w-16 h-0.5 bg-stone-400 mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Bio */}
            <section className="mb-12">
              <div className="bg-white border border-stone-200 p-8">
                <div className="flex items-center mb-6">
                  <MapPin size={18} className="text-stone-500 mr-2" />
                  <span className="text-stone-600 font-light">
                    Brasília, Distrito Federal. Brasil
                  </span>
                </div>

                <div className="space-y-6 text-stone-700 leading-relaxed">
                  <p>
                    Desenvolvedor full-stack interessado em construir projetos
                    úteis, enfrentar desafios e seguir evoluindo a cada entrega.
                  </p>

                  <p>
                    Com mais de 5 anos de experiência em desenvolvimento web, me
                    especializo em frameworks modernos de frontend como Angular
                    e React, combinados com soluções robustas de backend.
                    Acredito em escrever código limpo, fácil de manter e sempre
                    projetar com foco na experiência do usuário.
                  </p>

                  <p>
                    Quando não estou codificando, você me encontra desenhando em
                    cafeterias, experimentando aquarelas ou explorando como
                    tecnologia e arte podem se complementar. Me interesso
                    especialmente por como ferramentas digitais podem aprimorar
                    processos criativos tradicionais.
                  </p>

                  <div className="flex items-center pt-4">
                    <Coffee size={16} className="text-stone-500 mr-2" />
                    <span className="text-sm text-stone-600 font-light italic">
                      Atualmente disponivel para projetos freelancer e
                      contribuições colaborativas.
                    </span>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="text-2xl font-light text-stone-900 mb-8">
                Skills & Tools
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {Object.entries(skills).map(([category, items]) => (
                  <div
                    key={category}
                    className="bg-white border border-stone-200 p-6"
                  >
                    <h3 className="text-lg font-light text-stone-900 mb-4 capitalize">
                      {category.replace(/([A-Z])/g, " $1").trim()}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {items.map((skill, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-stone-100 text-stone-700 text-sm font-light"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Profile Image Placeholder */}
            <div className="bg-white border border-stone-200 p-6 mb-8">
              <img
                src="https://github.com/fmgermano.png"
                alt="Foto de perfil de Felipe Mateus"
                className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-stone-200 shadow-md"
              />
              {/*  <div className="aspect-square bg-stone-100 mb-4 flex items-center justify-center">
                <span className="text-stone-400 text-sm">Profile Photo</span>
              </div> */}
              <p className="text-center text-stone-600 text-sm font-light">
                Felipe Mateus
              </p>
            </div>

            {/* Contact */}
            <section className="bg-white border border-stone-200 p-6 mb-8">
              <h3 className="text-lg font-light text-stone-900 mb-6">
                Entre em contato
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="flex items-center space-x-3 text-stone-600 hover:text-stone-900 transition-colors"
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    rel={
                      link.href.startsWith("http") ? "noopener noreferrer" : ""
                    }
                  >
                    <link.icon size={18} className={link.color} />
                    <span className="font-light">{link.label}</span>
                  </a>
                ))}
              </div>
            </section>

            {/* Current Status */}
            <section className="bg-white border border-stone-200 p-6">
              <h3 className="text-lg font-light text-stone-900 mb-4">
                Atualmente
              </h3>
              <div className="space-y-3 text-sm text-stone-600">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Atuando como desenvolvedor em uma empresa de tecnologia</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>Estudando backend avançado e inteligência artificial</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-rose-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p>
                    Aprofundando retratos em carvão e estudo de figura humana
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
