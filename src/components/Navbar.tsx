import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = ['Home', 'Skills', 'Projects', 'Contact'];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (section: string) => {
    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 z-40 w-full bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            className="text-xl font-bold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            KM
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 hover:text-blue-600 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full py-2 text-left text-gray-700 hover:text-blue-600"
              >
                {item}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};