
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Compass } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Journal', path: '/blog' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isMenuOpen || !isHome ? 'bg-wild-dark/95 backdrop-blur-md shadow-lg border-b border-white/5' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-3 group">
              {/* Logo Icon Placeholder: If you have the file, uncomment the img tag below and remove the div */}
              {/* <img src="/logo.png" alt="Wildsync Logo" className="h-14 w-auto object-contain" /> */}
              
              {/* CSS Recreation of the Logo Icon Style */}
              <div className="relative w-12 h-12 flex items-center justify-center rounded-full border-[1.5px] border-wild-gold text-wild-gold group-hover:bg-wild-gold/10 transition-colors">
                 <span className="absolute -top-1.5 font-sans font-bold text-[0.6rem] bg-wild-dark px-1">N</span>
                 <Compass size={24} strokeWidth={1.5} />
              </div>

              {/* Text Logo Lockup */}
              <div className="flex flex-col">
                <span className="font-sans text-wild-gold text-2xl font-bold tracking-wider leading-none">WILDSYNC</span>
                <div className="h-[1px] bg-wild-gold w-full my-[3px]"></div>
                <span className="font-sans text-wild-gold text-[0.6rem] uppercase tracking-[0.35em] leading-none text-center">ADVENTURES</span>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm uppercase tracking-widest hover:text-wild-gold transition-colors ${location.pathname === link.path ? 'text-wild-gold font-bold' : 'text-gray-200'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link to="/plan" className="px-6 py-2 bg-wild-gold text-wild-dark text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors duration-300">
              Book Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-200 hover:text-white p-2"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-wild-dark border-t border-white/10 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-4 rounded-md text-base font-medium text-gray-200 hover:text-wild-gold hover:bg-white/5 uppercase tracking-widest text-center"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/plan" onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-center text-wild-gold font-bold uppercase tracking-widest">
                Book Now
            </Link>
            <a href="tel:+254701513729" className="block px-3 py-4 text-center text-wild-gold border-t border-white/10">
               <span className="flex items-center justify-center gap-2"><Phone size={16}/> +254 701 513 729</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
