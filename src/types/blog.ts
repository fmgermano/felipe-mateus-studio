
export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  content: string;
  readingTime?: string;
}

export interface BlogPostFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
}
