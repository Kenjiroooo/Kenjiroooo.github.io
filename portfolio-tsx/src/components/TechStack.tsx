import { useState } from 'react';
import { motion } from 'framer-motion';
import { techStack } from '../data/techStack';
import type { TechCategory } from '../types';

type FilterKey = 'all' | TechCategory;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'ALL' },
  { key: 'languages', label: 'LANGUAGES' },
  { key: 'web', label: 'WEB' },
  { key: 'ai', label: 'AI' },
  { key: 'embedded', label: 'EMBEDDED' },
  { key: 'tools', label: 'TOOLS' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function TechStack() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');

  const filtered = techStack.filter(
    tech => activeFilter === 'all' || tech.category === activeFilter
  );

  const rows = activeFilter === 'all' ? 3 : 2;

  // Pad the array so it divides evenly by the number of rows, to ensure grid columns are perfectly square
  let paddedFiltered = [...filtered];
  if (paddedFiltered.length > 0) {
    let i = 0;
    while (paddedFiltered.length % rows !== 0) {
      paddedFiltered.push(filtered[i % filtered.length]);
      i++;
    }
  }

  const infiniteItems = [...paddedFiltered, ...paddedFiltered];

  return (
    <section className="tech-stack" id="tech">
      {/* Subtle technical background elements */}
      <div className="tech-bg-grid"></div>

      <div className="section-container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-tag">Core Competencies</span>
          <h2 className="section-title">Tech Stack</h2>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="gallery-filter tech-filter"
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

        {/* Tech Stack Slider */}
        <div className="tech-slider">
          <div className="tech-track" style={{ '--rows': rows } as React.CSSProperties}>
            {infiniteItems.map((tech, index) => (
              <motion.div
                key={`${tech.id}-${index}`}
                className="tech-card"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                whileHover={{ y: -5, scale: 1.05 }}
                // We use CSS variables to pass the brand color for hover glows
                style={{ '--brand-color': tech.brandColor } as React.CSSProperties}
              >
                <div className="tech-icon-wrapper">
                  {tech.icon}
                </div>
                <div className="tech-info">
                  <h3 className="tech-name">{tech.name}</h3>
                  <span className="tech-category-label">{tech.category.toUpperCase()}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
