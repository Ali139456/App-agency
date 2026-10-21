type IconName =
  | 'discover'
  | 'order'
  | 'checkout'
  | 'updates'
  | 'delivery'
  | 'search'
  | 'deal'
  | 'track'
  | 'bell'
  | 'user'
  | 'cash'
  | 'digital'
  | 'coupon'
  | 'wallet'
  | 'pin'
  | 'menu';

const paths: Record<IconName, string> = {
  discover:
    'M4 7.5h16M4 12h10M4 16.5h13',
  search:
    'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm6-1 3.5 3.5',
  deal: 'M5 8h14v10H5V8Zm3-3h8M9 12h6',
  order: 'M6 7h12l-1 11H7L6 7Zm3 0V5.5A3 3 0 0 1 12 3a3 3 0 0 1 3 2.5V7',
  checkout: 'M5 6h14v12H5V6Zm0 4h14M8 14h3',
  track: 'M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Zm0-8.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z',
  updates: 'M4 12a8 8 0 1 0 2.2-5.5M4 4v4h4',
  delivery: 'M3 7h11v8H3V7Zm11 2h3l3 3v3h-6V9ZM7 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm10 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z',
  bell: 'M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15L6 16Zm4 2a2 2 0 0 0 4 0',
  user: 'M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0',
  cash: 'M4 7h16v10H4V7Zm8 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM7 10h.01M17 14h.01',
  digital: 'M8 4h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm4 14h.01',
  coupon: 'M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V8Z',
  wallet: 'M4 7h16v11H4V7Zm10 5h6V9h-6a2 2 0 0 0 0 4Z',
  pin: 'M12 21s6-5.2 6-10a6 6 0 1 0-12 0c0 4.8 6 10 6 10Zm0-7.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z',
  menu: 'M5 7h14M5 12h14M5 17h14',
};

export function Icon({ name, className = 'h-5 w-5' }: { name: IconName; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d={paths[name]} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export type { IconName };
