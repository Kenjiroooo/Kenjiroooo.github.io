import { motion } from 'framer-motion';
import { techStack } from '../data/techStack';
import type { TechCategory } from '../types';
import React from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

type CategoryConfig = {
  key: TechCategory;
  label: string;
};

const CATEGORIES: CategoryConfig[] = [
  { key: 'languages', label: 'Languages' },
  { key: 'web',       label: 'Web & Frameworks' },
  { key: 'ai',        label: 'AI & Tooling' },
  { key: 'embedded',  label: 'Embedded & Hardware' },
  { key: 'tools',     label: 'Tools & DevOps' },
];

export default function TechStack() {
  return (
    <section className="tech-stack" id="tech">
      <div className="section-container">
        <motion.div
          className="section-eyebrow"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-number">02</span>
          Tech Stack
        </motion.div>

        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">Core Competencies</h2>
        </motion.div>

        <div className="tech-categories">
          {CATEGORIES.map((cat, catIdx) => {
            const items = techStack.filter(t => t.category === cat.key);
            return (
              <motion.div
                key={cat.key}
                className="tech-category"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
              >
                {/* Category header */}
                <motion.div className="tech-category-header" variants={fadeUp}>
                  <div className="tech-category-name">{cat.label}</div>
                  <div className="tech-category-count">
                    {String(catIdx + 1).padStart(2, '0')}
                  </div>
                </motion.div>

                {/* Tech pills */}
                <motion.div className="tech-items" variants={stagger}>
                  {items.map(tech => (
                    <motion.div
                      key={tech.id}
                      className="tech-pill"
                      style={{ '--brand-color': tech.brandColor } as React.CSSProperties}
                      variants={fadeUp}
                      whileHover={{ y: -2 }}
                    >
                      <span className="tech-pill-icon">{tech.icon}</span>
                      {tech.name}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
