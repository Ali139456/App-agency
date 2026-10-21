export const BRAND = {
  name: 'App Studio',
  mark: 'A',
  tagline: 'Mobile products for ordering, delivery, and the teams behind them.',
} as const;

export const NAV = [
  { href: '#work', id: 'work', label: 'Work' },
  { href: '#app', id: 'app', label: 'Case study' },
  { href: '#how-it-works', id: 'how-it-works', label: 'Process' },
  { href: '#technology', id: 'technology', label: 'Technology' },
] as const;

export const WORK = [
  {
    index: '01',
    category: 'Consumer app',
    title: 'Customer ordering',
    desc: 'Menus, deals, cart, checkout, and account — the surface people use to place an order.',
    image: '/screens/home.webp',
    href: '#app',
  },
  {
    index: '02',
    category: 'Rider app',
    title: 'Delivery operations',
    desc: 'Assignments, live status, and a route from the kitchen to the door.',
    image: '/screens/rider-full.webp',
    href: '#operations',
  },
  {
    index: '03',
    category: 'Business tools',
    title: 'Store controls',
    desc: 'Menu, incoming orders, rider assignment, and the settings that keep a store running.',
    image: '/screens/drawer.webp',
    href: '#operations',
  },
] as const;

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
    title: 'Discover the Menu',
    desc: 'Browse burgers, Arabian, fried chicken, pasta, fries, and drinks — plus banners and deals on home.',
    icon: 'discover',
  },
  {
    title: 'Smart Search',
    desc: 'Find a meal from search, or filter by category, Popular, Deals, and Favorites.',
    icon: 'search',
  },
  {
    title: 'Deals & Combos',
    desc: 'Open featured offers such as Zinger + Wings and Family Feast and add them to the order.',
    icon: 'deal',
  },
  {
    title: 'Easy Ordering',
    desc: 'Choose Regular, Large, or XLarge on burgers, then add fries or a drink.',
    icon: 'order',
  },
  {
    title: 'Simple Checkout',
    desc: 'Review the cart, set a delivery pin, apply a coupon, and confirm payment.',
    icon: 'checkout',
  },
  {
    title: 'Order Tracking',
    desc: 'Follow placed, confirmed, preparing, on the way, and delivered — with a map once the rider is out.',
    icon: 'track',
  },
  {
    title: 'Notifications',
    desc: 'Push alerts on mobile when an order status changes, plus an in-app notifications list.',
    icon: 'bell',
  },
  {
    title: 'Your Account',
    desc: 'Sign in, save favorites and addresses, reopen past orders, and rate a delivery.',
    icon: 'user',
  },
] as const;

export const FLOW = [
  { id: 'home', src: '/screens/home.webp', label: 'Home' },
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
