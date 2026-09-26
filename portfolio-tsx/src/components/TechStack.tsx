import { motion, AnimatePresence } from 'framer-motion';
import { techStack } from '../data/techStack';
import type { TechCategory, TechItem } from '../types';
import React, { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

type CategoryConfig = {
  key: TechCategory | 'all';
  label: string;
};

const CATEGORIES: CategoryConfig[] = [
  { key: 'all',       label: 'All Technologies' },
  { key: 'languages', label: 'Languages' },
  { key: 'web',       label: 'Web & Frameworks' },
  { key: 'ai',        label: 'AI & Tooling' },
  { key: 'embedded',  label: 'Embedded & Hardware' },
  { key: 'tools',     label: 'Tools & DevOps' },
];

const MarqueeRow = ({ items, speed = 30, reverse = false }: { items: TechItem[], speed?: number, reverse?: boolean }) => {
  // Duplicate items to ensure enough width for seamless scrolling
  const duplicatedItems = [...items, ...items, ...items, ...items, ...items, ...items];
  
  return (
    <div className="marquee-container" style={{ '--speed': `${speed}s`, '--dir': reverse ? 'reverse' : 'normal' } as any}>
      <div className="marquee-content">
        {duplicatedItems.map((tech, i) => (
          <div
            key={`${tech.id}-${i}`}
            className="tech-pill-interactive"
            style={{ '--brand-color': tech.brandColor } as React.CSSProperties}
          >
            <div className="tech-pill-glow" />
            <span className="tech-pill-icon">{tech.icon}</span>
            <span className="tech-pill-name">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function TechStack() {
  const [activeTab, setActiveTab] = useState<TechCategory | 'all'>('all');
  
  let content = null;

  if (activeTab === 'all') {
    // Split into 3 rows
    const row1 = techStack.filter((_, i) => i % 3 === 0);
    const row2 = techStack.filter((_, i) => i % 3 === 1);
    const row3 = techStack.filter((_, i) => i % 3 === 2);
    
    content = (
      <motion.div
        key="all"
        className="tech-marquee-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <MarqueeRow items={row1} speed={40} />
        <MarqueeRow items={row2} speed={45} reverse />
        <MarqueeRow items={row3} speed={50} />
      </motion.div>
    );
  } else {
    const activeItems = techStack.filter(t => t.category === activeTab);
    content = (
      <motion.div
        key={activeTab}
        className="tech-marquee-wrapper single-row-marquee"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <MarqueeRow items={activeItems} speed={30} />
      </motion.div>
    );
  }

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

        <motion.div
          className="tech-layout-interactive"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Sidebar / Tabs */}
          <div className="tech-sidebar">
            {CATEGORIES.map((cat, idx) => (
              <button
                key={cat.key}
                className={`tech-tab ${activeTab === cat.key ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.key)}
              >
                <div className="tech-tab-info">
                  <span className="tech-tab-num">{String(idx + 1).padStart(2, '0')}</span>
                  <span className="tech-tab-label">{cat.label}</span>
                </div>
                {activeTab === cat.key && (
                  <motion.div layoutId="activeTabIndicator" className="tech-tab-indicator" />
                )}
              </button>
            ))}
          </div>

          {/* Display Area */}
          <div className="tech-display-area">
            <AnimatePresence mode="wait">
              {content}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
