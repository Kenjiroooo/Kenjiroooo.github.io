import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import type { ProjectCategory } from '../types';

type FilterKey = 'all' | ProjectCategory;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all',      label: 'All Work' },
  { key: 'web',      label: 'AI & Web' },
  { key: 'hardware', label: 'Embedded & Robotics' },
  { key: 'software', label: 'Software' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');

  const filtered = projects.filter(
    p => activeFilter === 'all' || p.category === activeFilter
  );

  const featured = filtered.find(p => p.featured);
  const rest = filtered.filter(p => !p.featured);

  // Assign project numbers based on original order
  const projectNumbers = projects.reduce<Record<string, number>>((acc, p, i) => {
    acc[p.id] = i + 1;
    return acc;
  }, {});

  return (
    <section className="portfolio" id="portfolio">
      <div className="section-container">
        {/* Eyebrow */}
        <motion.div
          className="section-eyebrow"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-number">03</span>
          Selected Work
        </motion.div>

        <motion.div
          className="section-header"
          style={{ marginBottom: 40 }}
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">Engineering Projects</h2>
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
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              {f.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Featured project */}
        <AnimatePresence mode="wait">
          {featured && (
            <motion.div
              key={`featured-${featured.id}-${activeFilter}`}
              className="featured-project"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            >
              {/* Image side */}
              <div className="card-image">
                <img src={featured.image} alt={featured.alt} loading="lazy" />
                <div className="card-overlay">
                  <div className="card-links">
                    {featured.links.map(link => (
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

              {/* Content side */}
              <div className="featured-body">
                <div className="featured-number">
                  Project / {String(projectNumbers[featured.id]).padStart(2, '0')}
                </div>
                <span className={`featured-category${featured.tagVariant === 'hardware' ? ' card-tag--hardware' : ''}`}>
                  {featured.tag}
                </span>
                <h3 className="featured-title">{featured.title}</h3>
                <p className="featured-desc">{featured.description}</p>
                <div className="featured-tech">
                  {featured.techStack.map(tech => (
                    <span key={tech} className="tech-badge">{tech}</span>
                  ))}
                </div>
                {featured.links[0] && (
                  <a
                    href={featured.links[0].href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                    style={{ marginTop: 8 }}
                  >
                    View Project
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Rest of projects */}
        <motion.div className="portfolio-grid" layout style={{ marginTop: 16 }}>
          <AnimatePresence mode="popLayout">
            {rest.map((project) => (
              <motion.div
                key={project.id}
                className="portfolio-card"
                layout
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
              >
                <div className="card-image">
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
