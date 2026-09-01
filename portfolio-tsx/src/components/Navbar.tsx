import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '../hooks/useScrollPosition';

const NAV_ITEMS = [
  { label: 'Home',      href: '#home',      id: 'home' },
  { label: 'About',     href: '#about',     id: 'about' },
  { label: 'Tech Stack',href: '#tech',      id: 'tech' },
  { label: 'Projects',  href: '#portfolio', id: 'portfolio' },
  { label: 'Experience',href: '#experience',id: 'experience' },
  { label: 'Contact',   href: '#contact',   id: 'contact' },
];

export default function Navbar() {
  const scrollY = useScrollPosition();
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const [isLightMode, setIsLightMode] = useState(false);

  const isScrolled = scrollY > 60;

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLightMode(true);
      document.body.classList.add('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsLightMode(prev => {
      const newMode = !prev;
      if (newMode) {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
      } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
      }
      return newMode;
    });
  };

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
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
    >
      <div className="nav-container">
        <a
          href="#home"
          className="nav-logo"
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
        >
          <span style={{ color: '#0d6efd', marginRight: 8, fontSize: '1.2em'}}>&lt;/&gt;</span> Kenji S.
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <nav className={`nav-links${isOpen ? ' open' : ''}`} id="nav-links">
            {NAV_ITEMS.map(navItem => (
              <button
                key={navItem.id}
                className={`nav-link${activeId === navItem.id ? ' active' : ''}`}
                onClick={() => handleNavClick(navItem.href)}
              >
                {navItem.label}
              </button>
            ))}
          </nav>

          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle Dark/Light Mode"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-primary)',
              fontSize: '1.1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '6px'
            }}
          >
            {isLightMode ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i>}
          </button>

          <button
            className="hamburger"
            id="hamburger"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(prev => !prev)}
          >
            <span style={{ transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : undefined }} />
            <span style={{ opacity: isOpen ? 0 : undefined }} />
            <span style={{ transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : undefined }} />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
