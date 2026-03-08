
import React, { useState } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Destinations } from './pages/Destinations';
import { PlanTrip } from './pages/PlanTrip';
import { Blog } from './pages/Blog';
import { Gallery } from './pages/Gallery';
import { AIChat } from './components/AIChat';
import { AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans bg-wild-dark text-gray-100 selection:bg-wild-gold selection:text-wild-dark">
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/plan" element={<PlanTrip />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <AIChat />
      </div>
    </HashRouter>
  );
};

export default App;
