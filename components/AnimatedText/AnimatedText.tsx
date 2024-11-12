'use client'

import { motion } from 'framer-motion';
import { useEffect, useState, memo } from 'react';

const fonts = [
  'font-futura',
  'font-serif',
  'font-mono',
  'font-sans',
  'font-cursive',
  'font-fantasy',
  'font-efutura',
  'font-georgia',
  'font-helvetica',
];

const AnimatedText: React.FC = () => {
  const text = 'GRAPHIQUE';
  const [fontIndices, setFontIndices] = useState<number[]>(Array(text.length).fill(0));

  useEffect(() => {
    const intervals = text.split('').map((_, i) =>
      setInterval(() => {
        setFontIndices((prevIndices) => {
          const newIndices = [...prevIndices];
          newIndices[i] = (newIndices[i] + 1) % fonts.length;
          return newIndices;
        });
      }, 2000 + i * 400) // Increased intervals for better performance
    );

    return () => intervals.forEach(clearInterval);
  }, [text]);

  return (
    <div className="flex space-x-2">
      {text.split('').map((char, index) => (
        <motion.div
          key={index}
          className="inline-block w-8 md:w-16 "
          style={{  willChange: 'opacity, filter' }} // Added will-change
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            key={`${char}-${fontIndices[index]}`} // Unique key for each state
            className={`${fonts[fontIndices[index]]} text-4xl md:text-6xl`}
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(10px)' }}
            transition={{ duration: 0.5 }}
          >
            {char}
          </motion.span>
        </motion.div>
      ))}
    </div>
  );
};

export default memo(AnimatedText); 