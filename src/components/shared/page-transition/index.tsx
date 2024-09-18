'use client';

import { PropsWithChildren } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }: PropsWithChildren) {
  const pathName = usePathname();
  return (
    <AnimatePresence>
      <section  key={pathName}>
        <motion.section
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.1, duration: 0.1, ease: 'easeInOut' },
          }}
          className="pointer-events-none fixed top-0 h-screen w-screen bg-background/75"
        />
        {children}
      </section>
    </AnimatePresence>
  );
}
