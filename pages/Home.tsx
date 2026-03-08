import React from 'react';
import { Hero } from '../components/Hero';
import { Link } from 'react-router-dom';
import { ArrowRight, Mountain, Droplets, Castle, Binoculars } from 'lucide-react';
import { DESTINATIONS } from '../constants';

const CategoryCard = ({ icon: Icon, title, description, link }: any) => (
  <Link to={link} className="group relative overflow-hidden rounded-sm bg-neutral-800 border border-white/5 hover:border-wild-gold/50 transition-all duration-500 h-80 flex flex-col justify-end p-8">
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
    <div className="absolute inset-0 z-0">
        {/* Placeholder background logic based on title for visual variety */}
        <div className={`w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-50 ${
            title.includes('Vertical') ? "bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070')]" :
            title.includes('Waters') ? "bg-[url('https://images.unsplash.com/photo-1518182170546-0766aaef3190?q=80&w=2070')]" :
            title.includes('Heritage') ? "bg-[url('https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?q=80&w=2070')]" :
            "bg-[url('https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071')]"
        }`} />
    </div>
    
    <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
      <div className="w-12 h-12 bg-wild-gold/90 flex items-center justify-center mb-4 text-wild-dark">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <h3 className="font-serif text-2xl text-white font-bold mb-2">{title}</h3>
      <p className="text-gray-300 text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{description}</p>
      <div className="flex items-center text-wild-gold text-xs font-bold uppercase tracking-widest gap-2">
        Explore <ArrowRight size={14} />
      </div>
    </div>
  </Link>
);

export const Home: React.FC = () => {
  const featuredDestinations = DESTINATIONS.slice(0, 3); // Just grab first 3 as featured

  return (
    <div className="bg-wild-dark">
      <Hero />
      
      {/* Intro Section */}
      <section className="py-24 px-4 bg-neutral-900 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-wild-gold uppercase tracking-widest text-sm font-bold mb-4">About Wildsync</h2>
          <h3 className="font-serif text-3xl md:text-5xl text-white mb-8 leading-tight">
            We don't just show you the animals; <br />
            <span className="text-gray-500">we take you to the hidden heart of Kenya.</span>
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed font-light mb-10">
            Located on Kiambu Road, Wildsync Adventures was born from a desire to showcase Kenya beyond the brochure. 
            From the wind-swept peaks of the Chyulus to the silent corridors of Kenya’s historic castles, we curate experiences for the discerning traveler.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1489396160836-2c99c977e970?q=80&w=2070&auto=format&fit=crop" 
            alt="Camping in the wild" 
            className="w-full h-96 object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm"
          />
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard 
            icon={Mountain} 
            title="The Vertical Challenge" 
            description="Mt. Kenya, Longonot, and the rugged Elephant Hill."
            link="/destinations"
          />
          <CategoryCard 
            icon={Droplets} 
            title="The Waters" 
            description="Chase the tallest falls and silent jade lakes."
            link="/destinations"
          />
          <CategoryCard 
            icon={Castle} 
            title="Heritage & Serenity" 
            description="Lord Egerton’s tragedy and Tafaria’s medieval art."
            link="/destinations"
          />
          <CategoryCard 
            icon={Binoculars} 
            title="The Wild" 
            description="The Great Migration and the Special Five."
            link="/destinations"
          />
        </div>
      </section>

      {/* Featured Collections / Signature Trips */}
      <section className="py-24 bg-neutral-950 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
               <h2 className="text-wild-gold uppercase tracking-widest text-sm font-bold mb-2">Curated Collections</h2>
               <h3 className="font-serif text-4xl text-white">Signature Trips</h3>
            </div>
            <Link to="/destinations" className="text-white border-b border-wild-gold pb-1 hover:text-wild-gold transition-colors mt-4 md:mt-0">
              View All Destinations
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredDestinations.map(dest => (
              <Link to="/destinations" key={dest.id} className="group block">
                <div className="relative overflow-hidden aspect-[4/5] mb-6">
                  <img 
                    src={dest.image} 
                    alt={dest.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 text-xs text-white uppercase tracking-wider">
                    {dest.location}
                  </div>
                </div>
                <h4 className="font-serif text-2xl text-white mb-2 group-hover:text-wild-gold transition-colors">{dest.title}</h4>
                <p className="text-gray-400 text-sm line-clamp-2">{dest.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / IG Feed Simulation */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl text-white mb-8">@WildSyncAdventures</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[1,2,3,4].map((i) => (
              <div key={i} className="relative group overflow-hidden aspect-square cursor-pointer">
                <img 
                  src={`https://picsum.photos/seed/${i + 20}/400/400`} 
                  alt="Instagram post" 
                  className="w-full h-full object-cover group-hover:opacity-75 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-serif italic">#SyncWithTheWild</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};