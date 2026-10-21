export const BRAND = {
  name: 'App Studio',
  mark: 'A',
  tagline: 'We design and build software that removes operational bottlenecks and gives a business room to grow.',
} as const;

export const NAV = [
  { href: '/#services', id: 'services', label: 'Services' },
  { href: '/#solutions', id: 'solutions', label: 'Solutions' },
  { href: '/#work', id: 'work', label: 'Work' },
  { href: '/#process', id: 'process', label: 'Process' },
  { href: '/#about', id: 'about', label: 'About' },
] as const;

export const CAPABILITY_LINE = ['Web', 'Mobile', 'SaaS', 'AI', 'Automation'] as const;

export const TRUST = [
  'Web Applications',
  'Mobile Apps',
  'SaaS Platforms',
  'AI Systems',
  'Business Software',
  'E-commerce',
] as const;

export const SERVICES = [
  {
    index: '01',
    title: 'Custom Software',
    desc: 'Systems shaped around the way a team already works, not a template they have to fight.',
    icon: 'checkout',
  },
  {
    index: '02',
    title: 'Web Applications',
    desc: 'Fast, clear web products for customers, staff, and the people who run the business.',
    icon: 'discover',
  },
  {
    index: '03',
    title: 'Mobile Applications',
    desc: 'iOS and Android products built in React Native, from first screen to store build.',
    icon: 'digital',
  },
  {
    index: '04',
    title: 'SaaS Products',
    desc: 'Multi-user products with accounts, roles, and a path from first release to the next one.',
    icon: 'updates',
  },
  {
    index: '05',
    title: 'AI & Automation',
    desc: 'Assistants, document handling, and workflow automation placed inside a real operation.',
    icon: 'search',
  },
  {
    index: '06',
    title: 'E-commerce',
    desc: 'Catalogs, carts, checkout, and the operational side of getting an order fulfilled.',
    icon: 'order',
  },
  {
    index: '07',
    title: 'ERP / POS / Business Systems',
    desc: 'Counters, back offices, and internal tools that keep orders, stock, and staff in one place.',
    icon: 'menu',
  },
  {
    index: '08',
    title: 'UI/UX & Product Design',
    desc: 'Interfaces with a clear job: help someone finish a task without asking twice.',
    icon: 'user',
  },
] as const;

export const SOLUTIONS = [
  { title: 'SaaS platforms', desc: 'Accounts, billing-ready structure, and a product people can return to.' },
  { title: 'Admin dashboards', desc: 'The desk where a team sees the queue, changes status, and stays in control.' },
  { title: 'ERP systems', desc: 'The operational record behind sales, stock, and the people doing the work.' },
  { title: 'POS systems', desc: 'A counter that talks to the same orders the rest of the business can see.' },
  { title: 'Customer portals', desc: 'A signed-in place to order, track, and come back without starting over.' },
  { title: 'Mobile apps', desc: 'The product in someone’s pocket, including the builds that ship to stores.' },
  { title: 'AI assistants', desc: 'A model wired into a task the business already repeats.' },
  { title: 'Automation systems', desc: 'The handoffs that should happen when a status changes, without a person chasing them.' },
  { title: 'E-commerce platforms', desc: 'From the catalog to checkout, then into fulfillment.' },
  { title: 'Internal business tools', desc: 'The software staff use all day, built around their actual workflow.' },
] as const;

export const PROJECT = {
  name: 'Food ordering system',
  category: 'Mobile product',
  summary: 'A customer app, a rider hub, and a store desk for one kitchen. Orders, payments, and delivery status stay on the same record.',
  href: '/work/food-ordering',
  tech: ['React Native', 'Expo', 'Next.js', 'Express', 'SQLite'],
  views: [
    {
      title: 'Customer app',
      category: 'Ordering',
      desc: 'Menu, deals, cart, checkout, and account.',
      image: '/screens/home-v2.webp',
      href: '/work/food-ordering#ordering',
    },
    {
      title: 'Rider hub',
      category: 'Delivery',
      desc: 'Assignments, live status, and the route to the door.',
      image: '/screens/rider-full.webp',
      href: '/work/food-ordering#delivery',
    },
    {
      title: 'Store desk',
      category: 'Operations',
      desc: 'Menu, incoming orders, riders, and store settings.',
      image: '/screens/drawer.webp',
      href: '/work/food-ordering#store',
    },
  ],
} as const;

export const PRINCIPLES = [
  {
    index: '01',
    title: 'Business first',
    desc: 'We learn the workflow before we start writing code.',
  },
  {
    index: '02',
    title: 'Built to scale',
    desc: 'The structure is chosen for the next stage of the business, not only the first demo.',
  },
  {
    index: '03',
    title: 'AI-accelerated',
    desc: 'Modern AI-assisted development, paired with engineering you can ship and maintain.',
  },
  {
    index: '04',
    title: 'End to end',
    desc: 'Design, development, integrations, deployment, and support stay with one team.',
  },
] as const;

export const AGENCY_PROCESS = [
  { step: '01', title: 'Discover', desc: 'Understand the business, the users, and the requirements that actually matter.' },
  { step: '02', title: 'Strategy', desc: 'Define scope, architecture, and the product direction before the build spreads.' },
  { step: '03', title: 'Design', desc: 'Create the experience and the interface people will use every day.' },
  { step: '04', title: 'Build', desc: 'Develop, integrate, and test until the product holds up in real use.' },
  { step: '05', title: 'Launch', desc: 'Deploy, watch how it behaves, and improve what the first users reveal.' },
] as const;

export const TECH_GROUPS = [
  { title: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS'] },
  { title: 'Backend', items: ['Node.js', 'Express', 'REST APIs'] },
  { title: 'Database', items: ['SQLite'] },
  { title: 'Mobile', items: ['React Native', 'Expo'] },
  { title: 'Infrastructure', items: ['Vercel', 'Railway', 'GitHub', 'EAS Build'] },
] as const;

export const AI_USES = [
  'AI assistants',
  'LLM integrations',
  'Document processing',
  'Workflow automation',
  'AI search',
  'Data extraction',
  'Customer support',
] as const;

export const CAPABILITIES = [
  { title: 'Web, mobile, and custom software', desc: 'The product surfaces a business actually needs, built as one system.' },
  { title: 'End-to-end product development', desc: 'From the first working scope through design, build, and launch.' },
  { title: 'AI-accelerated workflows', desc: 'AI used where it shortens a real task, not as a layer on top of the page.' },
  { title: 'Production-ready systems', desc: 'Software that can take orders, update status, and stay up after the demo.' },
] as const;

/** Add a quote only when a real client has given one. Empty means the section stays hidden. */
export const TESTIMONIALS: { quote: string; name: string; role: string }[] = [];

export const PROJECT_TYPES = [
  'Web application',
  'Mobile application',
  'SaaS product',
  'Custom software',
  'E-commerce',
  'Something else',
] as const;

export const FOOTER_COLUMNS = [
  {
    title: 'Services',
    links: [
      { href: '/#services', label: 'What we build' },
      { href: '/#solutions', label: 'Solutions' },
      { href: '/#technology', label: 'Technology' },
    ],
  },
  {
    title: 'Work',
    links: [
      { href: '/#work', label: 'Selected work' },
      { href: '/work/food-ordering', label: 'Food ordering system' },
      { href: '/#process', label: 'Process' },
    ],
  },
  {
    title: 'Company',
    links: [
      { href: '/#about', label: 'About' },
      { href: '/#contact', label: 'Start a project' },
    ],
  },
] as const;

export const CONTACT = {
  whatsapp: '923125757800',
} as const;

export const HIGHLIGHTS = [
  {
    title: 'Easy Discovery',
    desc: 'Home, deals, and categories in one place.',
    icon: 'discover',
  },
  {
    title: 'Fast Ordering',
    desc: 'Sizes, add-ons, and a cart that stays clear.',
    icon: 'order',
  },
  {
    title: 'Clear Checkout',
    desc: 'Address, coupon, and payment before you confirm.',
    icon: 'checkout',
  },
  {
    title: 'Live Updates',
    desc: 'Status from placed through delivered.',
    icon: 'updates',
  },
  {
    title: 'Local Delivery',
    desc: 'Pin a Rawalpindi address and track the rider.',
    icon: 'delivery',
  },
] as const;

export const FEATURES = [
  {
    title: 'Designed for fast discovery',
    desc: 'Browse burgers, Arabian, fried chicken, pasta, fries, and drinks — plus banners and deals on home.',
    icon: 'discover',
  },
  {
    title: 'Search built around real ordering behavior',
    desc: 'Find a meal from search, or filter by category, Popular, Deals, and Favorites.',
    icon: 'search',
  },
  {
    title: 'Deals placed where people already look',
    desc: 'Open featured offers such as Zinger + Wings and Family Feast and add them to the order.',
    icon: 'deal',
  },
  {
    title: 'Ordering without unnecessary friction',
    desc: 'Choose Regular, Large, or XLarge on burgers, then add fries or a drink.',
    icon: 'order',
  },
  {
    title: 'Checkout that stays explicit',
    desc: 'Review the cart, set a delivery pin, apply a coupon, and confirm payment.',
    icon: 'checkout',
  },
  {
    title: 'Tracking from the kitchen to the door',
    desc: 'Follow placed, confirmed, preparing, on the way, and delivered — with a map once the rider is out.',
    icon: 'track',
  },
  {
    title: 'Alerts when the order actually moves',
    desc: 'Push alerts on mobile when an order status changes, plus an in-app notifications list.',
    icon: 'bell',
  },
  {
    title: 'An account worth opening again',
    desc: 'Sign in, save favorites and addresses, reopen past orders, and rate a delivery.',
    icon: 'user',
  },
] as const;

export const FLOW = [
  { id: 'home', src: '/screens/home-v2.webp', label: 'Home' },
  { id: 'menu', src: '/screens/menu.webp', label: 'Menu' },
  { id: 'cart', src: '/screens/cart.webp', label: 'Cart' },
  { id: 'account', src: '/screens/drawer.webp', label: 'Account' },
] as const;

export const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Discover',
    desc: 'Open the app and explore banners, deals, and the menu by category.',
  },
  {
    step: '02',
    title: 'Choose',
    desc: 'Pick a meal, set burger size, add fries or a drink, and build the cart.',
  },
  {
    step: '03',
    title: 'Order',
    desc: 'Confirm a Rawalpindi address and pay with cash or Easypaisa / JazzCash.',
  },
  {
    step: '04',
    title: 'Enjoy',
    desc: 'Track the order to your door, then rate it when it arrives.',
  },
] as const;

export const JOURNEY = [
  {
    id: 'menu',
    label: 'Menu selected',
    detail: 'Categories, search, deals, and favorites — the order starts on the menu.',
  },
  {
    id: 'cart',
    label: 'Items added',
    detail: 'Quantities, burger sizes, and add-ons sit in the cart with the running total.',
  },
  {
    id: 'checkout',
    label: 'Checkout',
    detail: 'A saved address or map pin, a coupon if you have one, then cash or digital payment.',
  },
  {
    id: 'placed',
    label: 'Order placed',
    detail: 'The kitchen receives the order and you get a confirmation.',
  },
  {
    id: 'confirmed',
    label: 'Confirmed',
    detail: 'The order is accepted and a rider can be assigned.',
  },
  {
    id: 'preparing',
    label: 'Preparing',
    detail: 'The meal is in the kitchen. You can still see the live status.',
  },
  {
    id: 'out_for_delivery',
    label: 'On the way',
    detail: 'The rider is out for delivery. The order screen shows the live map.',
  },
  {
    id: 'delivered',
    label: 'Delivered',
    detail: 'The order is complete. Rate the delivery and reorder it later.',
  },
] as const;

export const CUSTOMER_BENEFITS = [
  'Save favorite dishes and jump back to them from the menu',
  'Browse categories with photos, deals, and search',
  'Customize burgers and add fries or a drink',
  'Save delivery addresses and drop a pin on the map',
  'Reorder a previous meal from your history',
  'Track the order you just placed',
] as const;

export const OPS = [
  {
    title: 'Menu & deals',
    desc: 'Update items, categories, photos, add-ons, and combo offers.',
  },
  {
    title: 'Incoming orders',
    desc: 'See new orders, including ones taken by phone, and keep the queue moving.',
  },
  {
    title: 'Status updates',
    desc: 'Move an order from placed to confirmed, preparing, on the way, or delivered.',
  },
  {
    title: 'Rider assignment',
    desc: 'Assign a rider. Their hub shows assigned, active, and completed deliveries.',
  },
  {
    title: 'Store controls',
    desc: 'Hours, delivery fees, coupons, banners, and inventory live in the admin desk.',
  },
  {
    title: 'Live rider GPS',
    desc: 'The rider app broadcasts location while a delivery is active.',
  },
] as const;

export const PAYMENTS = [
  {
    title: 'Cash on Delivery',
    desc: 'Pay when the order arrives. Available on mobile and the web.',
    icon: 'cash',
  },
  {
    title: 'Easypaisa / JazzCash',
    desc: 'Transfer to the store account and upload payment proof in the app.',
    icon: 'digital',
  },
  {
    title: 'Coupons',
    desc: 'Apply a promo code at checkout. Delivery can be reduced or waived.',
    icon: 'coupon',
  },
  {
    title: 'Tips & wallet',
    desc: 'Add a tip or use loyalty wallet balance on mobile checkout.',
    icon: 'wallet',
  },
  {
    title: 'Saved addresses',
    desc: 'Keep Rawalpindi addresses and choose one, or search a new pin on the map.',
    icon: 'pin',
  },
  {
    title: 'Delivery updates',
    desc: 'Confirmation, status changes, and a live map once the rider is on the way.',
    icon: 'updates',
  },
] as const;

export const TECH = [
  'React Native',
  'Expo SDK 57',
  'Expo Router',
  'TypeScript',
  'Next.js',
  'Express',
  'SQLite',
  'Railway',
  'Maps',
  'Push Notifications',
  'EAS Build',
] as const;
