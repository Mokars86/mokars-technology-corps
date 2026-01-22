
import React from 'react';
import { BLOG_POSTS } from '../constants.tsx';

const Blog: React.FC = () => {
  return (
    <div className="pb-24">
      <section className="bg-royal py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-heading font-bold mb-6">Mokars Newsroom</h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Stay updated with our latest technological breakthroughs and community stories.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map(post => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:shadow-2xl transition-all group">
              <div className="relative h-52 overflow-hidden">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-royal uppercase">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <span className="text-gray-400 text-xs font-semibold mb-3">{post.date}</span>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4 group-hover:text-royal transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <button className="text-royal font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </button>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="bg-gray-100 hover:bg-gray-200 text-royal font-bold px-10 py-4 rounded-full transition-colors">
            Load More Stories
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blog;
