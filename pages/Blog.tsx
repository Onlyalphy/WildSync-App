
import React from 'react';
import { motion } from 'framer-motion';
import { BLOG_POSTS } from '../constants';
import { Clock, User, ArrowRight } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-wild-dark">
      {/* Blog Hero */}
      <div className="relative h-[50vh] flex items-center justify-center">
         <div 
           className="absolute inset-0 bg-cover bg-center opacity-40" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb7d5b43?q=80&w=2070')" }}
         />
         <div className="absolute inset-0 bg-gradient-to-b from-wild-dark via-transparent to-wild-dark" />
         
         <div className="relative z-10 text-center px-4">
           <motion.h1 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="font-serif text-5xl md:text-6xl text-white mb-4"
           >
             The Wild Journal
           </motion.h1>
           <p className="text-gray-300 text-lg uppercase tracking-widest">Stories from the trail</p>
         </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
           {BLOG_POSTS.map((post, i) => (
             <motion.article 
               key={post.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               viewport={{ once: true }}
               className="group flex flex-col"
             >
                <div className="relative overflow-hidden aspect-[3/2] mb-6">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 bg-wild-gold text-wild-dark text-xs font-bold uppercase px-3 py-1">
                    {post.category}
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-gray-500 uppercase tracking-wider mb-3">
                  <span className="flex items-center gap-1"><Clock size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                </div>

                <h2 className="font-serif text-2xl text-white mb-4 group-hover:text-wild-gold transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {post.excerpt}
                </p>

                <button className="flex items-center gap-2 text-wild-gold text-sm font-bold uppercase tracking-widest group-hover:text-white transition-colors self-start">
                  Read Article <ArrowRight size={16} />
                </button>
             </motion.article>
           ))}
        </div>
      </div>
    </div>
  );
};
