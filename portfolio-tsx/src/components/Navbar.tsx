import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '../hooks/useScrollPosition';

const NAV_ITEMS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Tech Stack', href: '#tech', id: 'tech' },
  { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
  { label: 'Gallery', href: '#gallery', id: 'gallery' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const scrollY = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');

  const isScrolled = scrollY > 60;

  // Update active link based on scroll
  const updateActive = useCallback(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        setActiveId(section.id);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', updateActive, { passive: true });
    return () => window.removeEventListener('scroll', updateActive);
  }, [updateActive]);

  // Close menu on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      const navbar = document.getElementById('navbar');
      if (navbar && !navbar.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [isOpen]);

  function handleNavClick(href: string) {
    setIsOpen(false);
    const target = document.querySelector(href);
    target?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <motion.header
      id="navbar"
      className={`navbar${isScrolled ? ' scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
    >
      <div className="nav-container">
        <a href="#home" className="nav-logo" onClick={() => handleNavClick('#home')}>
          Kenji<span>.</span>
        </a>

        <nav className={`nav-links${isOpen ? ' open' : ''}`} id="nav-links">
          {NAV_ITEMS.map(item => (
            <button
              key={item.id}
              className={`nav-link${activeId === item.id ? ' active' : ''}`}
              onClick={() => handleNavClick(item.href)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="hamburger"
          id="hamburger"
          aria-label="Toggle menu"
          onClick={() => setIsOpen(prev => !prev)}
        >
          <span
            style={{
              transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : undefined,
            }}
          />
          <span style={{ opacity: isOpen ? 0 : undefined }} />
          <span
            style={{
              transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : undefined,
            }}
          />
        </button>
      </div>
    </motion.header>
  );
}
