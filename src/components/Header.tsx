
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigation = [
    { name: 'Accueil', href: '#hero' },
    { name: 'L\'association', href: '#association' },
    { name: 'Nos actions', href: '#actions' },
    { name: 'Ressources', href: '#ressources' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-white shadow-md py-2' : 'py-4 bg-transparent'
      )}
    >
      <div className="max-container flex items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img 
            src="/lovable-uploads/c40b172f-0a3d-4140-86f6-ec8cb4a129c7.png" 
            alt="Logo HyperEduc" 
            className="h-12"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-poppins font-medium text-hypereduc-black hover:text-hypereduc-red transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={cn(
            'w-6 h-0.5 bg-hypereduc-black transition-all mb-1.5',
            isMobileMenuOpen && 'rotate-45 translate-y-2'
          )}></div>
          <div className={cn(
            'w-6 h-0.5 bg-hypereduc-black transition-all mb-1.5',
            isMobileMenuOpen && 'opacity-0'
          )}></div>
          <div className={cn(
            'w-6 h-0.5 bg-hypereduc-black transition-all',
            isMobileMenuOpen && '-rotate-45 -translate-y-2'
          )}></div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className={cn(
        'md:hidden fixed w-full bg-white top-[60px] left-0 shadow-md transition-all overflow-hidden',
        isMobileMenuOpen ? 'max-h-[500px] py-4' : 'max-h-0'
      )}>
        <div className="flex flex-col px-4">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="py-3 border-b border-gray-100 font-poppins font-medium text-hypereduc-black hover:text-hypereduc-red"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
