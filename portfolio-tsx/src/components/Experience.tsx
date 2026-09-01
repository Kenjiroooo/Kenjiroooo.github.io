import { useState } from 'react';
import { motion } from 'framer-motion';
import { educationList, certifications } from '../data/experience';
import CertLightbox from './CertLightbox';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function Experience() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <section className="experience" id="experience">
      <div className="section-container">
        {/* Eyebrow */}
        <motion.div
          className="section-eyebrow"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-number">04</span>
          Journey
        </motion.div>

        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title">Experience & Education</h2>
        </motion.div>

        <div className="experience-layout">
          {/* Education Timeline */}
          <div className="timeline-col">
            <motion.div
              className="timeline-col-title"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <i className="fa-solid fa-graduation-cap" /> Education
            </motion.div>

            <motion.div
              className="timeline"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              {educationList.map(edu => (
                <motion.div key={edu.id} className="timeline-item" variants={fadeUp}>
                  <div className="timeline-dot" />
                  <div className="timeline-content">
                    <span className="timeline-date">{edu.period}</span>
                    <h3>{edu.degree}</h3>
                    <p className="timeline-subtitle">
                      {edu.institution}, {edu.location}
                    </p>
                    <p>{edu.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications */}
          <div className="certs-col">
            <motion.div
              className="timeline-col-title"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <i className="fa-solid fa-certificate" /> Certifications
            </motion.div>

            <motion.div
              className="certifications-grid"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              {certifications.map(cert => (
                <motion.div key={cert.id} className="cert-card" variants={fadeUp}>
                  <div
                    className="cert-image"
                    onClick={() => setLightboxSrc(cert.image)}
                  >
                    <img src={cert.image} alt={cert.alt} loading="lazy" />
                    <div className="cert-overlay">
                      <i className="fa-solid fa-expand" />
                      <span>Click to view</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <CertLightbox
        src={lightboxSrc}
        onClose={() => setLightboxSrc(null)}
      />
    </section>
  );
}
