import { motion } from 'framer-motion';

interface FloatingTagProps {
  label: string;
  icon?: string;
  className?: string;
  delay?: number;
}

export default function FloatingTag({ label, icon, className = '', delay = 0 }: FloatingTagProps) {
  return (
    <motion.div
      className={`float-tag ${className}`}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: delay + 1.2, ease: [0.16, 1, 0.3, 1] }}
    >
      {icon && <i className={icon} />}
      {label}
    </motion.div>
  );
}
