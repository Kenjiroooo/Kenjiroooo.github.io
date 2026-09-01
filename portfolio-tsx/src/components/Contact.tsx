import { useState } from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../data/socials';
import type { FormData } from '../types';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const CONTACT_DETAILS = [
  { icon: 'fa-solid fa-envelope',      label: 'Email',    value: 'sakamotokenji35@gmail.com' },
  { icon: 'fa-solid fa-map-marker-alt',label: 'Location', value: 'Dagupan City, Pangasinan, PH' },
  { icon: 'fa-brands fa-linkedin',     label: 'LinkedIn', value: 'Kenji Sakamoto' },
];

const EMPTY_FORM: FormData = { name: '', email: '', subject: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState<FormData>(EMPTY_FORM);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_KEY_HERE',
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('sent');
        setForm(EMPTY_FORM);
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error(result);
        setStatus('idle');
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setStatus('idle');
      alert('Network error. Please try again.');
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="section-container">
        {/* Eyebrow */}
        <motion.div
          className="section-eyebrow"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="section-number">05</span>
          Contact
        </motion.div>

        {/* Large editorial CTA */}
        <div className="contact-top">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h2 className="contact-cta-heading" variants={fadeUp}>
              Let's Build<br />
              Something <em>Useful.</em>
            </motion.h2>
            <motion.p className="contact-cta-lead" variants={fadeUp}>
              If you have an interesting project, internship opportunity, or collaboration
              in mind, I'd love to connect. I'm actively seeking roles in AI integration,
              web development, and embedded systems.
            </motion.p>
            <motion.div className="social-icons" variants={fadeUp} style={{ marginBottom: 32 }}>
              {socialLinks.map(link => (
                <motion.a
                  key={link.ariaLabel}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={link.ariaLabel}
                  title={link.title}
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={link.icon} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-details"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {CONTACT_DETAILS.map(detail => (
              <motion.div key={detail.label} className="contact-item" variants={fadeUp}>
                <div className="contact-icon">
                  <i className={detail.icon} />
                </div>
                <div>
                  <span className="contact-label">{detail.label}</span>
                  <span className="contact-value">{detail.value}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="contact-grid">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.3rem', marginBottom: 8, color: 'var(--text-primary)' }}>
              Send a Message
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 0 }}>
              Prefer a direct line? Fill out the form and I'll get back to you promptly.
            </p>
          </motion.div>

          <motion.form
            className="contact-form"
            id="contact-form"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
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
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project or opportunity..."
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
                  <i className="fa-solid fa-paper-plane" /> Send Message
                </>
              )}
            </motion.button>

            {status === 'sent' && (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <i className="fa-solid fa-circle-check" /> Message sent! I'll get back to you soon.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
