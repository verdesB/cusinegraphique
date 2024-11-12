'use client'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Recepies = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
    useEffect(() => {
      if (inView) {
        controls.start('visible');
      }
    }, [controls, inView]);
  
    const listVariants = {
      hidden: { opacity: 0, y: 20, scale: 0.8, filter: 'blur(10px)' },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
        transition: {
          duration: 0.8,
          type: 'spring',
          stiffness: 100,
          damping: 10,
        },
      },
      shake: {
        x: [0, -5, 5, -5, 5, 0],
        transition: { duration: 0.5 },
      },
    };
  
    return (
        <section  className="flex flex-col  items-center justify-center my-12 px-4 max-w-3xl mx-auto">
            
        <h3 className="text-2xl font-semibold mb-4 text-start lg:text-3xl">Notre recette du succès :</h3>
        <ul ref={ref} className="space-y-8 min-h-[400px] pt-12">
          {['Une pincée d\'audace', 'Une dose de créativité', 'Un zeste d\'innovation', 'Une grande portion d\'écoute', 'Le tout mijoté avec passion'].map((ingredient, index) => (
            <motion.li
              key={index}
              className="text-lg text-gray-700 lg:text-3xl text-center"
              initial="hidden"
              animate={controls}
              variants={listVariants}
              whileHover="shake"
            >
              {ingredient}
            </motion.li>
          ))}
        </ul>
      
        </section>
    )
}

export default Recepies