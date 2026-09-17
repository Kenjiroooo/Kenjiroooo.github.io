import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryImages } from '../data/gallery';
import type { GalleryCategory } from '../types';

type FilterKey = 'all' | GalleryCategory;

const FILTERS: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'All Photos' },
  { key: 'work', label: 'Work & Projects' },
  { key: 'career', label: 'Career & Events' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filtered = galleryImages.filter(
    img => activeFilter === 'all' || img.category === activeFilter
  );

  return (
    <section className="gallery" id="gallery">
      <div className="section-container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-tag">Visual Journey</span>
          <h2 className="section-title">Gallery</h2>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          className="gallery-filter"
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

        {/* Gallery Bento Grid */}
        <motion.div 
          className="gallery-bento-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
                className={`gallery-bento-item bento-${index % 5}`}
                whileHover={{ y: -4 }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="bento-image-wrapper">
                  <img src={image.src} alt={image.alt} loading="lazy" />
                  <div className="bento-overlay">
                    <i className="fa-solid fa-expand" />
                  </div>
                </div>
                <div className="bento-caption">
                  <p>{image.caption}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox for full view */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => { if (e.target === e.currentTarget) setSelectedImage(null); }}
          >
            <button
              className="lightbox-close"
              aria-label="Close lightbox"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <motion.img
              src={selectedImage}
              alt="Full view"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
