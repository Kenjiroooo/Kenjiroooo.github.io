import { useState } from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/socials';
import type { FormData } from '../types';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const CONTACT_DETAILS = [
  { icon: 'fa-solid fa-envelope', label: 'Email', value: 'sakamotoken003@gmail.com' },
  { icon: 'fa-solid fa-map-marker-alt', label: 'Location', value: 'Dagupan City, Pangasinan, PH' },
  { icon: 'fa-brands fa-linkedin', label: 'LinkedIn', value: 'Kenji Sakamoto' },
];

const EMPTY_FORM: FormData = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm(EMPTY_FORM);
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  }

  return (
    <section className="contact" id="contact">
      <div className="section-container">
        <motion.div
          className="section-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-tag">Let&apos;s Connect</span>
          <h2 className="section-title">Open to Opportunities</h2>
        </motion.div>

        <motion.div
          className="contact-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Left: Info */}
          <motion.div className="contact-info" variants={fadeUp}>
            <h3>Looking for an Engineering Intern?</h3>
            <p>
              I am actively seeking internship opportunities or entry-level positions in
              AI integration, integrated web development, and embedded systems. If your
              team needs a dedicated, technically grounded student, I&apos;d love to connect.
            </p>

            <div className="contact-details">
              {CONTACT_DETAILS.map(detail => (
                <div key={detail.label} className="contact-item">
                  <div className="contact-icon">
                    <i className={detail.icon} />
                  </div>
                  <div>
                    <span className="contact-label">{detail.label}</span>
                    <span className="contact-value">{detail.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-socials">
              {socialLinks.map(link => (
                <motion.a
                  key={link.ariaLabel}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={link.ariaLabel}
                  title={link.title}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={link.icon} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            className="contact-form"
            id="contact-form"
            variants={fadeUp}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Full Name"
                required
                value={form.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject of your message"
                required
                value={form.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Project or Role Details</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="How can I help your engineering team?"
                required
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <motion.button
              type="submit"
              className="btn btn-primary btn-full"
              disabled={status === 'sending'}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {status === 'sending' ? (
                'Sending...'
              ) : (
                <>
                  <i className="fa-solid fa-paper-plane" /> Initialize Contact
                </>
              )}
            </motion.button>

            {status === 'sent' && (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <i className="fa-solid fa-circle-check" /> Message sent successfully!
                I&apos;ll get back to you soon.
              </motion.div>
            )}
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
