'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#features', label: 'Services' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#testimonials', label: 'Clients' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#contact', label: 'Contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'neuro-nav py-4' : 'py-6'
      }`}
      style={{ background: isScrolled ? 'var(--background)' : 'var(--background)' }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between w-full">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')} 
            className="text-2xl font-bold hover:opacity-80 transition-opacity"
            style={{ color: 'var(--primary)' }}
          >
            ProConsult
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-semibold transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary-500'
                    : 'hover:text-primary-500'
                }`}
                style={{ 
                  color: activeSection === link.href.substring(1) ? 'var(--primary)' : 'var(--foreground)' 
                }}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, '#contact')} 
              className="btn-primary px-6 py-2 text-sm"
            >
              Get Started
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden neuro-button p-3"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 neuro-card p-6 animate-fade-in-up">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-semibold py-2 transition-colors`}
                  style={{ 
                    color: activeSection === link.href.substring(1) ? 'var(--primary)' : 'var(--foreground)' 
                  }}
                >
                  {link.label}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={(e) => handleNavClick(e, '#contact')} 
                className="btn-primary px-6 py-3 text-sm text-center mt-2"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
