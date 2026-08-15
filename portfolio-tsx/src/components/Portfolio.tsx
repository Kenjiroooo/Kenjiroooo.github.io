import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import type { ProjectCategory } from '../types';

type FilterKey = 'all' | ProjectCategory;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'AI & Integrated Web' },
  { key: 'hardware', label: 'Embedded Systems' },
  { key: 'software', label: 'Software Architecture' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');

  const filtered = projects.filter(
    p => activeFilter === 'all' || p.category === activeFilter
  );

  return (
    <section className="portfolio" id="portfolio">
      <div className="section-container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-tag">Case Studies</span>
          <h2 className="section-title">Selected Engineering Work</h2>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="portfolio-filter"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {FILTERS.map(f => (
            <motion.button
              key={f.key}
              className={`filter-btn${activeFilter === f.key ? ' active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              {f.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Portfolio grid */}
        <motion.div className="portfolio-grid" layout>
          <AnimatePresence mode="popLayout">
            {filtered.map(project => (
              <motion.div
                key={project.id}
                className={`portfolio-card${project.featured ? ' portfolio-card--featured' : ''}`}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                whileHover={{ y: -6 }}
              >
                <div className="card-image card-image--photo">
                  <img src={project.image} alt={project.alt} loading="lazy" />
                  <div className="card-overlay">
                    <div className="card-links">
                      {project.links.map(link => (
                        <a
                          key={link.href}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="card-link"
                          title={link.label}
                        >
                          <i className={link.icon} /> {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="card-body">
                  <span className={`card-tag${project.tagVariant === 'hardware' ? ' card-tag--hardware' : ''}`}>
                    {project.tag}
                  </span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="card-tech-stack">
                    {project.techStack.map(tech => (
                      <span key={tech} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
