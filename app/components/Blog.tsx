"use client";

import Image from "next/image";

interface BlogPost {
  date: string;
  author: string;
  title: string;
  excerpt: string;
  image: string;
}

const blogPosts: BlogPost[] = [
  {
    date: 'May 27, 2024',
    author: 'by designer',
    title: 'The Modest Living Space Furnishings Ideas',
    excerpt: 'Etiam eu sapien sem. Suspendisse a massa justo. Cras eget lorem nunc. Fusce nec...',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80'
  },
  {
    date: 'May 27, 2024',
    author: '',
    title: 'Tips For Designing Reading Area Space Smartly',
    excerpt: 'Cras eget lorem nunc. Fusce nec urna tempus tempus. Zioin a interdum elit. Etiam...',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80'
  },
  {
    date: 'May 27, 2024',
    author: '',
    title: 'Easy Way To Furnish Your Home Affordably',
    excerpt: 'Wtiam eu sapien sem. Suspendisse a massa justo. Zioin a interdum elit. Cras eget...',
    image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80'
  },
  {
    date: 'May 27, 2024',
    author: '',
    title: 'Minimalist Modern Modular Kitchen Design',
    excerpt: 'Eget lorem nunc rioin a girotia interdum elit. Etiam eu sapien sem. Suspendisse a...',
    image: 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80'
  }
];

export default function Blog() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get the Latest News
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground/90">
            Visit Our Blog
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border group cursor-pointer">
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{post.date} {post.author && post.author}</p>
                <h4 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">{post.title}</h4>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

