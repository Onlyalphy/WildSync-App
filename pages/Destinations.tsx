
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DESTINATIONS } from '../constants';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Destinations: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'hiking' | 'water' | 'heritage' | 'safari' | 'coastal'>('all');

  const filteredDestinations = activeFilter === 'all' 
    ? DESTINATIONS 
    : DESTINATIONS.filter(d => d.category === activeFilter);

  return (
    <div className="pt-20 min-h-screen bg-wild-dark">
      {/* Header */}
      <div className="bg-neutral-900 py-20 px-4 border-b border-white/5">
        <div className="max-w-7xl mx-auto text-center">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="font-serif text-5xl md:text-6xl text-white mb-6"
           >
             Our Destinations
           </motion.h1>
           <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
             Explore the hidden gems of Kenya. Select a mood to filter your journey.
           </p>

           <div className="flex flex-wrap justify-center gap-4 mt-12">
             {['all', 'hiking', 'water', 'heritage', 'safari', 'coastal'].map((filter) => (
               <button
                 key={filter}
                 onClick={() => setActiveFilter(filter as any)}
                 className={`px-6 py-2 uppercase text-xs tracking-widest transition-all duration-300 border ${
                   activeFilter === filter 
                     ? 'bg-wild-gold border-wild-gold text-wild-dark font-bold' 
                     : 'border-white/20 text-gray-400 hover:border-wild-gold hover:text-white'
                 }`}
               >
                 {filter === 'all' ? 'All Collections' : filter}
               </button>
             ))}
           </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredDestinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden aspect-video mb-6">
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                 <img 
                   src={dest.image} 
                   alt={dest.title} 
                   className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" 
                 />
                 <div className="absolute top-4 right-4 z-20 bg-wild-dark/80 backdrop-blur text-wild-gold p-2">
                    <ArrowUpRight size={20} />
                 </div>
              </div>
              
              <div className="flex items-center gap-2 text-wild-gold text-xs uppercase tracking-widest mb-2 font-bold">
                <MapPin size={14} />
                {dest.location}
              </div>
              <h3 className="font-serif text-3xl text-white mb-4 group-hover:text-wild-gold transition-colors">{dest.title}</h3>
              <p className="text-gray-400 font-light leading-relaxed mb-6">
                {dest.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {dest.highlights.map(h => (
                   <span key={h} className="text-xs text-gray-500 border border-white/10 px-3 py-1 rounded-full">{h}</span>
                ))}
              </div>

              <Link 
                to="/plan" 
                className="inline-block text-white border-b border-wild-gold pb-1 hover:text-wild-gold transition-colors text-sm uppercase tracking-wider"
              >
                Inquire About This Trip
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
