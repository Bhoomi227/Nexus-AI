import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'The Future of Web Design in 2024',
      excerpt: 'Explore the latest trends and technologies shaping the future of digital experiences.',
      image: 'https://picsum.photos/seed/design/800/500',
      author: 'Sarah Johnson',
      date: 'Mar 15, 2024',
      category: 'Design'
    },
    {
      id: 2,
      title: 'Scaling Your Startup: A Practical Guide',
      excerpt: 'Learn the key strategies for growing your business from zero to one hundred.',
      image: 'https://picsum.photos/seed/startup/800/500',
      author: 'Michael Chen',
      date: 'Mar 12, 2024',
      category: 'Business'
    },
    {
      id: 3,
      title: 'Mastering React Performance Optimization',
      excerpt: 'Deep dive into advanced techniques for building blazing fast web applications.',
      image: 'https://picsum.photos/seed/code/800/500',
      author: 'Alex Rivera',
      date: 'Mar 10, 2024',
      category: 'Tech'
    },
    {
      id: 4,
      title: 'The Importance of User Empathy',
      excerpt: 'Why understanding your users is the most important skill for any designer.',
      image: 'https://picsum.photos/seed/users/800/500',
      author: 'Emma Wilson',
      date: 'Mar 08, 2024',
      category: 'UX'
    },
    {
      id: 5,
      title: 'Building a Remote-First Culture',
      excerpt: 'How to foster collaboration and community in a distributed team environment.',
      image: 'https://picsum.photos/seed/remote/800/500',
      author: 'David Park',
      date: 'Mar 05, 2024',
      category: 'Culture'
    },
    {
      id: 6,
      title: 'The Rise of AI in Creative Industries',
      excerpt: 'How artificial intelligence is transforming the way we create and design.',
      image: 'https://picsum.photos/seed/ai/800/500',
      author: 'Lisa Taylor',
      date: 'Mar 01, 2024',
      category: 'AI'
    }
  ];

  return (
    <div className="pt-32">
      <section className="pb-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog & Resources</h1>
            <p className="text-lg text-slate-600">
              Insights, tutorials, and stories from the Lumina team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                key={post.id} 
                to={`/blog/${post.id}`}
                className="group bg-white rounded-3xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full uppercase">
                      {post.category}
                    </span>
                    <span className="text-slate-400 text-xs flex items-center gap-1">
                      <Calendar size={12} /> {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                        <img src={`https://i.pravatar.cc/150?u=${post.author}`} alt={post.author} referrerPolicy="no-referrer" />
                      </div>
                      <span className="text-xs font-medium text-slate-700">{post.author}</span>
                    </div>
                    <span className="text-indigo-600 font-bold text-xs flex items-center gap-1">
                      Read More <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
