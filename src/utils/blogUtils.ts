
import matter from 'gray-matter';
import { BlogPost, BlogPostFrontmatter } from '../types/blog';

// Sample blog posts data - in a real app, these would be loaded from markdown files
const blogPostsData = [
  {
    slug: 'everyday-inspiration',
    frontmatter: `---
title: "Finding Inspiration in Everyday Moments"
date: "2024-01-20"
excerpt: "How I learned to see artistic potential in mundane city scenes and daily routines."
tags: ["art", "inspiration", "process"]
---`,
    content: `# Finding Inspiration in Everyday Moments

As artists, we often search for the extraordinary, the perfect light, the dramatic landscape. But some of my most meaningful work has come from the ordinary moments that surround us daily.

## The Beauty in the Mundane

Walking through the city last week, I noticed how the morning light filtered through a coffee shop window, casting geometric shadows on the worn wooden floor. It wasn't Instagram-worthy, but it held something authentic—a quiet story of countless mornings and conversations.

## Training Your Eye

The key is developing what I call "visual patience." Instead of rushing past these moments, I've learned to pause and ask:
- What draws my eye here?
- How does the light interact with the space?
- What emotions does this scene evoke?

## Practical Exercises

1. **The 5-minute sketch**: Carry a small sketchbook and commit to one quick drawing daily
2. **Color studies**: Notice and document interesting color combinations in your environment
3. **Shadow mapping**: Observe how shadows change throughout the day in familiar spaces

The extraordinary is often hiding in plain sight, waiting for us to slow down enough to notice it.`
  },
  {
    slug: 'modern-css-layouts',
    frontmatter: `---
title: "Modern CSS Layout Techniques"
date: "2024-01-08"
excerpt: "Exploring CSS Grid, Flexbox, and Container Queries for responsive web design."
tags: ["dev", "css", "frontend"]
---`,
    content: `# Modern CSS Layout Techniques

CSS has evolved dramatically in recent years, giving us powerful tools for creating responsive layouts that adapt to any screen size. Let's explore the modern approaches that have revolutionized how we build for the web.

## CSS Grid: The Layout Revolution

CSS Grid changed everything. For the first time, we had a true two-dimensional layout system built into CSS.

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
\`\`\`

This simple declaration creates a responsive grid that automatically adjusts the number of columns based on available space.

## Flexbox: The Perfect Complement

While Grid excels at two-dimensional layouts, Flexbox remains unbeatable for one-dimensional arrangements.

\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
\`\`\`

## Container Queries: The Future is Here

Container queries allow components to respond to their container's size rather than the viewport's size.

\`\`\`css
@container (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
}
\`\`\`

## Best Practices

1. **Start with content**: Design your layout around your content, not the other way around
2. **Think in components**: Create reusable layout patterns
3. **Test across devices**: What works on desktop might not work on mobile
4. **Embrace flexibility**: Let your layouts adapt rather than forcing rigid structures

The modern CSS layout toolkit gives us unprecedented control over how our content flows and adapts. The key is knowing when to use each tool.`
  },
  {
    slug: 'digital-vs-traditional',
    frontmatter: `---
title: "Digital vs Traditional: A Personal Journey"
date: "2024-01-12"
excerpt: "Exploring the unique qualities and challenges of both digital and traditional art mediums."
tags: ["art", "digital", "traditional"]
---`,
    content: `# Digital vs Traditional: A Personal Journey

After years of working in both digital and traditional mediums, I've learned that the choice between them isn't about which is "better"—it's about understanding what each medium offers and when to use them.

## The Tactile Connection

There's something irreplaceable about the physical connection between hand, tool, and surface. The resistance of charcoal on paper, the way watercolor bleeds and pools, the happy accidents that happen when materials have their own agenda.

Traditional mediums force you to slow down, to commit to each mark. There's no undo button, no infinite layers. This constraint can be liberating—it pushes you to be more intentional with every decision.

## Digital Possibilities

Digital art opens doors that traditional mediums simply can't. The ability to experiment without waste, to iterate rapidly, to combine techniques that would be impossible in the physical world.

But perhaps most importantly, digital tools have democratized art creation. You don't need expensive materials or dedicated studio space—just a device and imagination.

## Finding Balance

In my practice, I've found that the mediums complement each other beautifully:

- **Traditional sketching** for initial ideas and observation
- **Digital refinement** for exploration and iteration
- **Hybrid approaches** that combine the best of both worlds

## The Real Question

The question isn't whether to choose digital or traditional—it's how to use each medium's strengths to serve your artistic vision. Sometimes that means the imperfect beauty of watercolor, sometimes the precise control of digital brushes.

The tools are just tools. The art is in knowing how to use them.`
  }
];

export const getBlogPosts = (): BlogPost[] => {
  return blogPostsData.map(post => {
    const { data, content } = matter(post.frontmatter + '\n\n' + post.content);
    const frontmatter = data as BlogPostFrontmatter;
    
    return {
      slug: post.slug,
      title: frontmatter.title,
      date: frontmatter.date,
      excerpt: frontmatter.excerpt,
      tags: frontmatter.tags,
      content: content,
      readingTime: calculateReadingTime(content)
    };
  });
};

export const getBlogPost = (slug: string): BlogPost | null => {
  const posts = getBlogPosts();
  return posts.find(post => post.slug === slug) || null;
};

const calculateReadingTime = (content: string): string => {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

export const getTagColor = (tag: string): string => {
  switch (tag) {
    case "dev": return "bg-blue-100 text-blue-700";
    case "art": return "bg-rose-100 text-rose-700";
    default: return "bg-stone-100 text-stone-700";
  }
};
