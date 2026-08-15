import { motion, AnimatePresence } from 'framer-motion';

interface CertLightboxProps {
  src: string | null;
  onClose: () => void;
}

export default function CertLightbox({ src, onClose }: CertLightboxProps) {
  return (
    <AnimatePresence>
      {src && (
        <motion.div
          className="cert-lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        >
          <button
            className="lightbox-close"
            aria-label="Close lightbox"
            onClick={onClose}
          >
            &times;
          </button>
          <motion.img
            src={src}
            alt="Certificate Full View"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
