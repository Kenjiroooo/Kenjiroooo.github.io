import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="section-container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-tag">Technical Arsenal</span>
          <h2 className="section-title">Core Competencies</h2>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skillCategories.map(category => (
            <motion.div
              key={category.id}
              className="skill-category"
              variants={fadeUp}
              whileHover={{
                rotateX: -4,
                rotateY: 4,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              style={{ transformStyle: 'preserve-3d', perspective: 1000 }}
            >
              <h3>
                <i className={category.icon} />
                {category.title}
              </h3>
              <div className="skill-items">
                {category.items.map(skill => (
                  <motion.div
                    key={skill.label}
                    className="skill-item"
                    whileHover={{ y: -4, scale: 1.04 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  >
                    <div className="skill-icon">
                      <i className={skill.icon} />
                    </div>
                    <span>{skill.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
