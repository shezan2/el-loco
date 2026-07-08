export type Accent = 'sunset' | 'chili' | 'pandan' | 'mango'

export interface Product {
  name: string
  note: string
  image: string
  categoryId: string
}

export interface Category {
  id: string
  title: string
  blurb: string
  accent: Accent
}

const img = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=75`

export const PHONE_DISPLAY = '+65 8398 9544'
export const PHONE_TEL = 'tel:+6583989544'
export const EMAIL = 'ellocoenterprise@gmail.com'
export const ADDRESS = '3 Gambas Cres, #02-09 Nordcom 1, Singapore 757088'
export const UEN = '202137905G'

export const CATEGORIES: Category[] = [
  {
    id: 'snacks',
    title: 'Snacks',
    blurb: 'Crunchy, cheeky, impossible to put down. The shelf everyone raids first.',
    accent: 'sunset',
  },
  {
    id: 'noodles',
    title: 'Instant Noodles',
    blurb: 'Two-minute comfort food, by the cup or by the carton.',
    accent: 'chili',
  },
  {
    id: 'beverages',
    title: 'Beverages',
    blurb: 'From kopi kicks to sweet strawberry milk — bottled, boxed and ready.',
    accent: 'mango',
  },
  {
    id: 'condiments',
    title: 'Condiments & Pantry',
    blurb: 'The flavour boosters — sprinkle, spoon, repeat.',
    accent: 'pandan',
  },
]

export const PRODUCTS: Product[] = [
  {
    name: 'Pop Mie Rasa Baso',
    note: 'Beefy bakso broth in a cup — hawker flavour, zero queue.',
    image: img('1585032226651-759b368d7246'),
    categoryId: 'noodles',
  },
  {
    name: 'Pop Mie Rasa Ayam',
    note: 'Golden chicken classic, the reliable crowd-pleaser.',
    image: img('1569718212165-3a8278d5f624'),
    categoryId: 'noodles',
  },
  {
    name: 'Nabati Sipp Roasted Corn',
    note: 'Roasted corn wafer rolls with a toasty, buttery crunch.',
    image: img('1551754655-cd27e38d2076'),
    categoryId: 'snacks',
  },
  {
    name: 'Nabati Wafer Pink Lava',
    note: 'Strawberry-choc lava wafer — the pink one that sells out.',
    image: img('1488900128323-21503983a07e'),
    categoryId: 'snacks',
  },
  {
    name: 'Luwak White Koffie',
    note: 'Smooth Indonesian white coffee, low acid, big aroma.',
    image: img('1509042239860-f550ce710b93'),
    categoryId: 'beverages',
  },
  {
    name: 'Nescafe Cappuccino',
    note: 'Foamy café cappuccino from a sachet. Dangerously easy.',
    image: img('1572442388796-11668a67e53d'),
    categoryId: 'beverages',
  },
  {
    name: 'Teh Botol Sosro',
    note: 'The legendary jasmine sweet tea of Indonesia.',
    image: img('1544787219-7f47ccb76574'),
    categoryId: 'beverages',
  },
  {
    name: 'Ultra Strawberry Milk',
    note: 'Silky UHT strawberry milk, loved by kids and adults alike.',
    image: img('1579954115545-a95591f28bfc'),
    categoryId: 'beverages',
  },
  {
    name: 'Momogi Jagung Bakar',
    note: 'Grilled-corn puff sticks, an Indonesian childhood classic.',
    image: img('1613919113640-25732ec5e61f'),
    categoryId: 'snacks',
  },
  {
    name: 'Kakarak Spicy Hot',
    note: 'Fiery crackers for people who think snacks should bite back.',
    image: img('1566478989037-eec170784d0b'),
    categoryId: 'snacks',
  },
  {
    name: 'Bon Cabe Macaroni Level 10',
    note: 'Crispy macaroni dusted in level-10 chilli. Enter at your own risk.',
    image: img('1596040033229-a9821ebd058d'),
    categoryId: 'condiments',
  },
  {
    name: 'Serunding Beef Floss',
    note: 'Traditional-recipe spiced beef floss, perfect over rice.',
    image: img('1544025162-d76694265947'),
    categoryId: 'condiments',
  },
  {
    name: 'Serunding Chicken Floss',
    note: 'The lighter, fragrant chicken take on the classic serunding.',
    image: img('1504674900247-0877df9cc836'),
    categoryId: 'condiments',
  },
]

export const FLAVOR_WORDS = ['Flavors', 'Snacks', 'Kopi', 'Sambal', 'Wafers', 'Teh Manis']

export const TICKER_ROW_A = 'Pop Mie Baso ✺ Teh Botol Sosro ✺ Bon Cabe Level 10 ✺ Nabati Pink Lava ✺ Luwak White Koffie ✺ '
export const TICKER_ROW_B = 'Momogi Jagung Bakar ✺ Serunding ✺ Ultra Strawberry Milk ✺ Kakarak Spicy Hot ✺ Nescafe Cappuccino ✺ '
