import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image / Placeholder for Video */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-[kenburns_20s_infinite_alternate]"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071&auto=format&fit=crop')"
        }}
      >
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-wild-dark via-black/20 to-black/40" />
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-wild-gold uppercase tracking-[0.3em] text-sm md:text-base mb-6 font-medium"
        >
          Raw Elegance. Unforgettable Journeys.
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-8 leading-tight"
        >
          Sync Your Soul <br/>
          <span className="italic font-light text-gray-200">with the Untamed</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-200 text-lg md:text-xl max-w-2xl mb-12 font-light leading-relaxed"
        >
          From the heights of Mt. Kenya to the silence of Lord Egerton’s Castle. 
          Discover a curated Kenya tailored to the daring spirit.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link 
            to="/destinations" 
            className="inline-block px-10 py-4 bg-transparent border border-white text-white font-bold uppercase tracking-widest hover:bg-wild-gold hover:border-wild-gold hover:text-wild-dark transition-all duration-300"
          >
            Start Your Journey
          </Link>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} className="opacity-70" />
      </motion.div>
    </div>
  );
};