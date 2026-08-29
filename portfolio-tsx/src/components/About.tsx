import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const INFO_CARDS = [
  { icon: 'fa-solid fa-location-dot', label: 'Location', value: 'Dagupan City, PH' },
  { icon: 'fa-solid fa-building-columns', label: 'Education', value: 'Universidad de Dagupan' },
  { icon: 'fa-solid fa-laptop-code', label: 'Focus', value: 'AI Integration & Web' },
  { icon: 'fa-solid fa-envelope', label: 'Contact', value: 'sakamotokenji35@gmail.com' },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-tag">About Me</span>
          <h2 className="section-title">Engineering Background</h2>
        </motion.div>

        <motion.div
          className="about-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Image Column */}
          <motion.div className="about-image-wrapper" variants={fadeUp}>
            <div className="about-avatar">
              <img
                src="/Portfoliopic.webp"
                alt="Kenji D. Sakamoto"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
              />
            </div>
            <div className="about-badge">
              <i className="fa-solid fa-brain" />
              <span>AI &amp; Web Integration</span>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div className="about-content" variants={stagger}>
            <motion.h3 variants={fadeUp}>Driven by complex problem-solving.</motion.h3>
            <motion.p className="about-subtitle" variants={fadeUp}>
              <i className="fa-solid fa-graduation-cap" /> B.S. Computer Engineering |
              Universidad de Dagupan
            </motion.p>
            <motion.p variants={fadeUp}>
              I am a Computer Engineering student dedicated to building intelligent
              hardware-software integrations and performant web applications. My academic
              and project experience spans AI integration, integrated web development, and
              embedded systems.
            </motion.p>
            <motion.p variants={fadeUp}>
              Whether I'm integrating advanced LLM APIs into web applications, writing
              low-level C++ for micro-controllers, or designing responsive interfaces, I
              focus on delivering scalable, clean, and intelligent solutions. I am
              currently seeking internship opportunities to apply my engineering foundation
              to real-world products.
            </motion.p>

            <motion.div className="about-info-grid" variants={stagger}>
              {INFO_CARDS.map(card => (
                <motion.div key={card.label} className="info-card" variants={fadeUp}>
                  <i className={card.icon} />
                  <div>
                    <span className="info-label">{card.label}</span>
                    <span className="info-value">{card.value}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.a
              href="#contact"
              className="btn btn-primary"
              variants={fadeUp}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Let&apos;s Connect
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
