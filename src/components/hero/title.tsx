interface TitleProps {
  className?: string;
}

import { motion } from 'framer-motion';

const letterContainer = {
  initial: {},
  hover: {
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0,
    },
  },
};

const letterVariant = {
  initial: { y: 0, opacity: 1 },
  hover: { y: -6, opacity: 1 },
};

function splitToLetters(text: string) {
  return text.split('').map((char, i) => (
    <motion.span
      key={char + i}
      variants={letterVariant}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      className='inline-block'
    >
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  ));
}

export default function Title({ className = '' }: TitleProps) {
  return (
    <motion.h1
      className={`font-extrabold text-white tracking-tight leading-none text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl drop-shadow-2xl ${className}`}
      variants={letterContainer}
      initial='initial'
      whileHover='hover'
    >
      <div>
        <span className='italic font-light'>
          <motion.span aria-hidden className='inline-block'>
            {splitToLetters('Endless')}
          </motion.span>
        </span>{' '}
        <motion.span aria-hidden className='inline-block'>
          {splitToLetters('Tracks,')}
        </motion.span>
      </div>
      <div>
        <span className='italic font-light'>
          <motion.span aria-hidden className='inline-block'>
            {splitToLetters('Endless')}
          </motion.span>
        </span>{' '}
        <motion.span aria-hidden className='inline-block'>
          {splitToLetters('Vibes')}
        </motion.span>
      </div>
    </motion.h1>
  );
}
