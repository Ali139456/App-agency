'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  src: string;
  alt: string;
  label?: string;
  className?: string;
  priority?: boolean;
  delay?: number;
  objectPosition?: string;
  fit?: 'cover' | 'contain';
  full?: boolean;
};

export function PhoneFrame({
  src,
  alt,
  label,
  className = '',
  priority = false,
  delay = 0,
  objectPosition = 'center top',
  fit = 'cover',
  full = false,
}: Props) {
  return (
    <motion.figure
      className={`flex flex-col items-center ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, delay, ease }}
    >
      <div className="phone w-full">
        <div className="phone-speaker" />
        <div className={`phone-screen ${full ? 'phone-screen-full' : ''}`}>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 240px, 300px"
            className={full ? 'fit-full' : fit === 'contain' ? 'fit-contain' : 'object-cover'}
            style={{ objectPosition }}
          />
        </div>
      </div>
      {label ? (
        <figcaption className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
          {label}
        </figcaption>
      ) : null}
    </motion.figure>
  );
}
