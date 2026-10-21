'use client';

import { useEffect, useState } from 'react';

export function MobileCta() {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const target = document.getElementById('contact');
    const onScroll = () => {
      const pastHero = window.scrollY > 520;
      const ctaTop = target?.getBoundingClientRect().top ?? 9999;
      setHidden(!pastHero || ctaTop < window.innerHeight * 0.85);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (hidden) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-[var(--nav)] p-3 backdrop-blur-xl md:hidden">
      <a href="/#contact" className="btn-gold w-full">
        Start a project
      </a>
    </div>
  );
}
