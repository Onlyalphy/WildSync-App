
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';
import { X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-wild-dark pt-24 pb-20">
      
      <div className="text-center mb-16 px-4">
        <h1 className="font-serif text-4xl md:text-5xl text-white mb-4">Captured Moments</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Glimpses of the raw elegance we chase. From the savanna to the peaks.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImage(img.url)}
              className="relative group cursor-pointer overflow-hidden aspect-square"
            >
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <p className="text-white font-serif text-lg italic">{img.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
             <button 
               className="absolute top-6 right-6 text-gray-400 hover:text-white"
               onClick={() => setSelectedImage(null)}
             >
               <X size={40} />
             </button>
             
             <motion.img 
               initial={{ scale: 0.8 }}
               animate={{ scale: 1 }}
               src={selectedImage}
               className="max-h-[90vh] max-w-full object-contain rounded-sm shadow-2xl"
               onClick={(e) => e.stopPropagation()} 
             />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
