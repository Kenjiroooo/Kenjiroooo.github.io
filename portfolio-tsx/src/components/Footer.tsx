import { socialLinks } from '../data/socials';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <a href="#home" className="nav-logo">
            Kenji<span>.</span>
          </a>

          <nav className="footer-links">
            {NAV_ITEMS.map(item => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="footer-socials">
            {socialLinks.map(link => (
              <a
                key={link.ariaLabel}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={link.ariaLabel}
                title={link.title}
              >
                <i className={link.icon} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Engr. Kenji D. Sakamoto. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
