import { useScrollPosition } from '../hooks/useScrollPosition';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollToTop() {
  const scrollY = useScrollPosition();
  const isVisible = scrollY > 300;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="scroll-top"
          aria-label="Scroll to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, y: -4 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <i className="fa-solid fa-chevron-up" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
