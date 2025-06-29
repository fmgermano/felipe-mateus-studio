import helloWorldContent from "../posts/hello-world.md?raw";
import { BlogPost } from "../utils/blogUtils";

export const blogPostsData: BlogPost[] = [
  {
    slug: "hello-world",
    title: "Hello World",
    date: "2024-07-01",
    excerpt:
      "Criei este site como meu laboratório digital, onde vou registrando meus movimentos, reflexões e aprendizados.",
    tags: ["reflexao", "pessoal"],
    content: helloWorldContent,
    readingTime: "2 min de leitura",
  },
];
