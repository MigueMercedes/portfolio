'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import { optionsParticles } from '../utils/particlesOptions.utils';
import { AnimatePresence, motion } from 'framer-motion';

export function Cover({ children }: { children: React.ReactNode }) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <div id='cover'>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={optionsParticles}
      />
      <AnimatePresence>
        <motion.main
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          exit={{ x: '100%', opacity: 0 }}
          transition={{ duration: 1.5 }}
          className='w-full relative flex flex-col items-center justify-center'
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </div>
  );
}
