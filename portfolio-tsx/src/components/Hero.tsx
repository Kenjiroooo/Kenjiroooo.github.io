import { motion } from 'framer-motion';
import ParticleCanvas from './ParticleCanvas';
import { useTypedText } from '../hooks/useTypedText';
import { socialLinks } from '../data/socials';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const imageItem = {
  hidden: { opacity: 0, x: 60, scale: 0.92 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.5 } },
};

export default function Hero() {
  const typedText = useTypedText();

  return (
    <section className="hero" id="home">
      <ParticleCanvas />

      <div className="hero-container">
        {/* Left: Text content */}
        <motion.div
          className="hero-text"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className="status-badge" variants={item}>
            <span className="status-dot" />
            Open to Opportunities
          </motion.div>

          <motion.h1 className="hero-name" variants={item}>
            Kenji D. Sakamoto
          </motion.h1>

          <motion.h2 className="hero-title" variants={item}>
            <span className="typed-text">{typedText}</span>
            <span className="cursor">|</span>
          </motion.h2>

          <motion.p className="hero-desc" variants={item}>
            Computer Engineering student at Universidad de Dagupan specializing in{' '}
            <strong>AI Integration</strong>,{' '}
            <strong>Integrated Web Development</strong>, and{' '}
            <strong>Embedded Systems</strong>. I build intelligent hardware-software
            integrations and maintainable applications for real-world problems.
          </motion.p>

          <motion.div className="hero-buttons" variants={item}>
            <motion.a
              href="#portfolio"
              className="btn btn-primary"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="/Kenji_Sakamoto_Resume_2026.pdf"
              download="Kenji_Sakamoto_Resume_2026.pdf"
              target="_blank"
              className="btn btn-outline"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              <i className="fa-solid fa-download" /> Download Resume
            </motion.a>
          </motion.div>

          <motion.div className="social-icons" variants={item}>
            {socialLinks.map(link => (
              <motion.a
                key={link.ariaLabel}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                aria-label={link.ariaLabel}
                title={link.title}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className={link.icon} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Avatar */}
        <motion.div className="hero-image" variants={imageItem} initial="hidden" animate="show">
          <div className="avatar-blob">
            <img
              src="/Portfoliopic.PNG"
              alt="Kenji D. Sakamoto"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
          <div className="blob-ring" />
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <a
          href="#about"
          aria-label="Scroll down"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <i className="fa-solid fa-chevron-down" />
        </a>
      </motion.div>
    </section>
  );
}
