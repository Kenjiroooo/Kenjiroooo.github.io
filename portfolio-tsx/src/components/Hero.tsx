import { motion } from 'framer-motion';
import { socialLinks } from '../data/socials';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        
        {/* Left Column */}
        <motion.div
          className="hero-left"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div className="hero-line" variants={fadeUp}></motion.div>
          
          <motion.h1 className="hero-name" variants={fadeUp}>
            I'm Kenji, a<br />Web Developer
          </motion.h1>
          
          <motion.p className="hero-desc" variants={fadeUp}>
            Computer Engineering student at Universidad de Dagupan specializing in AI Integration, Integrated Web Development, and Embedded Systems.
          </motion.p>
          
          <motion.button 
            className="hero-scroll-btn" 
            variants={fadeUp}
            onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
            aria-label="Scroll down"
          >
            <i className="fa-solid fa-chevron-down" />
          </motion.button>
        </motion.div>

        {/* Center Column: Image */}
        <motion.div 
          className="hero-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <img src="/mypic.png" alt="Kenji D. Sakamoto" />
        </motion.div>

        {/* Right Column */}
        <motion.div 
          className="hero-right"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* About block */}
          <motion.div className="hero-block" variants={fadeUp}>
            <h3 className="hero-block-title">ABOUT ME</h3>
            <p className="hero-block-desc">
              I build intelligent hardware-software integrations and maintainable applications for real-world problems.
            </p>
            <a href="#about" className="hero-block-link" onClick={(e) => {
                e.preventDefault();
                document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              LEARN MORE <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.8em', marginLeft: 4 }}/>
            </a>
          </motion.div>

          {/* Work block */}
          <motion.div className="hero-block" variants={fadeUp}>
            <h3 className="hero-block-title">MY WORK</h3>
            <p className="hero-block-desc">
              From advanced LLM APIs in web apps to low-level C++ for microcontrollers, I focus on scalable solutions.
            </p>
            <a href="#portfolio" className="hero-block-link" onClick={(e) => {
                e.preventDefault();
                document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              BROWSE PORTFOLIO <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.8em', marginLeft: 4 }}/>
            </a>
          </motion.div>

          {/* Follow block */}
          <motion.div className="hero-block" variants={fadeUp}>
            <h3 className="hero-block-title">FOLLOW ME</h3>
            <div className="hero-socials">
              {socialLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  title={link.title}
                >
                  <i className={link.icon} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </section>
  );
}
