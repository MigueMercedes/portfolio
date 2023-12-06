'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import { optionsParticles } from '../utils/particlesOptions.utils';

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
      <div className='w-full relative flex flex-col items-center justify-center'>
        {children}
      </div>
    </div>
  );
}
