import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function About() {
  return (
    <section className="about" id="about">
      <div className="section-container">
        
        <div className="about-grid">
          {/* Left Column */}
          <motion.div 
            className="about-left-col"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="about-tag" variants={fadeUp}>
               <span className="slash">//</span> ABOUT ME
            </motion.div>
            
            <motion.h2 className="about-heading" variants={fadeUp}>
              I've been building hardware and software systems since 2024
            </motion.h2>
            
            <motion.p className="about-desc" variants={fadeUp}>
              I am a Computer Engineering student dedicated to building intelligent hardware-software integrations and performant web applications. My academic and project experience spans AI integration, integrated web development, and embedded systems.
            </motion.p>
            
            <motion.a 
              href="#contact" 
              className="about-link" 
              variants={fadeUp}
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              More about me <i className="fa-solid fa-arrow-right" style={{ fontSize: '0.8em', marginLeft: 4 }}/>
            </motion.a>
          </motion.div>
          
          {/* Right Column */}
          <motion.div 
            className="about-right-col"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="about-stats-row" variants={fadeUp}>
               <div className="about-stat">
                 <span className="stat-num">5+</span>
                 <span className="stat-text">Projects<br/>Built</span>
               </div>
               <div className="about-stat">
                 <span className="stat-num">23+</span>
                 <span className="stat-text">Technologies<br/>Mastered</span>
               </div>
            </motion.div>
            
            <motion.p className="about-desc-small" variants={fadeUp}>
               Whether I'm integrating advanced LLM APIs into web applications, writing low-level C++ for microcontrollers, or designing responsive interfaces, I focus on delivering scalable, clean, and intelligent solutions. I am currently seeking internship opportunities to apply my engineering foundation to real-world products.
            </motion.p>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
