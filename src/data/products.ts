export interface Product {
  name: string
  note: string
  categoryId: string
}

export interface Category {
  id: string
  title: string
  blurb: string
}

export const PHONE_DISPLAY = '+65 8398 9544'
export const PHONE_TEL = 'tel:+6583989544'
export const WHATSAPP = 'https://wa.me/6583989544'
export const EMAIL = 'ellocoenterprise@gmail.com'
export const ADDRESS = '3 Gambas Cres, #02-09 Nordcom 1, Singapore 757088'
export const MAPS_URL = 'https://maps.google.com/?q=3+Gambas+Cres,+Nordcom+1,+Singapore+757088'
export const UEN = '202137905G'

export const CATEGORIES: Category[] = [
  {
    id: 'snacks',
    title: 'Snacks',
    blurb: 'Wafers, crackers and corn puffs from popular Indonesian and regional brands.',
  },
  {
    id: 'noodles',
    title: 'Instant Noodles',
    blurb: 'Cup noodles by the piece or by the carton.',
  },
  {
    id: 'beverages',
    title: 'Beverages',
    blurb: 'Instant coffee, bottled tea and UHT milk drinks.',
  },
  {
    id: 'condiments',
    title: 'Condiments & Pantry',
    blurb: 'Chilli seasoning, serunding and other everyday pantry items.',
  },
]

export const PRODUCTS: Product[] = [
  {
    name: 'Pop Mie Rasa Baso',
    note: 'Indonesian cup noodles, beef bakso flavour.',
    categoryId: 'noodles',
  },
  {
    name: 'Pop Mie Rasa Ayam',
    note: 'Indonesian cup noodles, chicken flavour.',
    categoryId: 'noodles',
  },
  {
    name: 'Nabati Sipp Roasted Corn',
    note: 'Wafer rolls with roasted corn cream filling.',
    categoryId: 'snacks',
  },
  {
    name: 'Nabati Wafer Pink Lava',
    note: 'Wafer with strawberry chocolate filling.',
    categoryId: 'snacks',
  },
  {
    name: 'Luwak White Koffie',
    note: 'Indonesian instant white coffee sachets.',
    categoryId: 'beverages',
  },
  {
    name: 'Nescafe Cappuccino',
    note: 'Instant cappuccino sachets with foam.',
    categoryId: 'beverages',
  },
  {
    name: 'Teh Botol Sosro',
    note: 'Bottled jasmine sweet tea from Indonesia.',
    categoryId: 'beverages',
  },
  {
    name: 'Ultra Strawberry Milk',
    note: 'UHT strawberry-flavoured milk.',
    categoryId: 'beverages',
  },
  {
    name: 'Momogi Jagung Bakar',
    note: 'Roasted corn flavour puff snack sticks.',
    categoryId: 'snacks',
  },
  {
    name: 'Kakarak Spicy Hot',
    note: 'Spicy fried crackers.',
    categoryId: 'snacks',
  },
  {
    name: 'Bon Cabe Macaroni Level 10',
    note: 'Crispy macaroni snack with level 10 chilli seasoning.',
    categoryId: 'condiments',
  },
  {
    name: 'Serunding Beef Floss',
    note: 'Spiced beef floss, good over rice.',
    categoryId: 'condiments',
  },
  {
    name: 'Serunding Chicken Floss',
    note: 'Spiced chicken floss.',
    categoryId: 'condiments',
  },
]
