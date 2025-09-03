import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function CtaButton() {
  const reduce = useReducedMotion();

  const hoverAnim = reduce
    ? {}
    : { y: -4, boxShadow: '0 8px 24px rgba(0,0,0,0.18)', scale: 1.02 };

  const tapAnim = reduce ? {} : { scale: 0.98 };

  return (
    <motion.button
      className='btn-cta inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white text-lg'
      whileHover={hoverAnim}
      whileTap={tapAnim}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      aria-label='Scroll down'
    >
      <span className='sr-only'>Scroll down</span>
      <span className='relative z-10 flex items-center'>
        <ArrowDown className='w-6 h-6' aria-hidden />
      </span>
    </motion.button>
  );
}
