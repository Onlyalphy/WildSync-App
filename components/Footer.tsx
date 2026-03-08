
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Compass } from 'lucide-react';
import { COMPANY_NAME, LOCATION, PHONE_NUMBER, EMAIL_ADDRESS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-6">
             {/* Logo Lockup */}
             <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 flex items-center justify-center rounded-full border border-wild-gold text-wild-gold">
                   <Compass size={20} strokeWidth={1.5} />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-wild-gold text-lg font-bold tracking-wider leading-none">WILDSYNC</span>
                  <div className="h-[1px] bg-wild-gold w-full my-[2px]"></div>
                  <span className="font-sans text-wild-gold text-[0.5rem] uppercase tracking-[0.35em] leading-none text-center">ADVENTURES</span>
                </div>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Sync with the wild. We curate premium adventure experiences across Kenya, from the heights of Mt. Kenya to the silence of Lord Egerton’s Castle.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-wild-gold text-lg mb-6">Explore</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/destinations" className="hover:text-white transition-colors">Destinations</Link></li>
              <li><Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">The Wild Journal</Link></li>
              <li><Link to="/plan" className="hover:text-white transition-colors">Plan Your Trip</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-wild-gold text-lg mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-wild-gold mt-1 shrink-0" />
                <span>{LOCATION}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-wild-gold shrink-0" />
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{PHONE_NUMBER}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-wild-gold shrink-0" />
                <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-white transition-colors break-all">{EMAIL_ADDRESS}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-wild-gold text-lg mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-wild-gold hover:border-wild-gold transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-wild-gold hover:border-wild-gold transition-all duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-gray-400 hover:text-wild-gold hover:border-wild-gold transition-all duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-wider">
          <p>&copy; {new Date().getFullYear()} Wildsync Adventures. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
