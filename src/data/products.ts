import { Product } from '@/context/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Air Max 270',
    brand: 'Nike',
    price: 150,
    image: '/placeholder.svg',
    category: 'Running',
  },
  {
    id: '2',
    name: 'Ultraboost 22',
    brand: 'Adidas',
    price: 180,
    image: '/placeholder.svg',
    category: 'Running',
  },
  {
    id: '3',
    name: 'RS-X Reinvention',
    brand: 'Puma',
    price: 120,
    image: '/placeholder.svg',
    category: 'Lifestyle',
  },
  {
    id: '4',
    name: 'Dri-FIT Training Tee',
    brand: 'Nike',
    price: 45,
    image: '/placeholder.svg',
    category: 'Apparel',
  },
  {
    id: '5',
    name: 'Essentials Hoodie',
    brand: 'Adidas',
    price: 65,
    image: '/placeholder.svg',
    category: 'Apparel',
  },
  {
    id: '6',
    name: 'Training Shorts',
    brand: 'Puma',
    price: 40,
    image: '/placeholder.svg',
    category: 'Apparel',
  },
  {
    id: '7',
    name: 'Jordan 1 Retro High',
    brand: 'Nike',
    price: 170,
    image: '/placeholder.svg',
    category: 'Basketball',
  },
  {
    id: '8',
    name: 'Forum Low',
    brand: 'Adidas',
    price: 100,
    image: '/placeholder.svg',
    category: 'Lifestyle',
  },
];

export const brands = [
  { name: 'Nike', logo: 'NIKE' },
  { name: 'Adidas', logo: 'ADIDAS' },
  { name: 'Puma', logo: 'PUMA' },
  { name: 'Under Armour', logo: 'UA' },
  { name: 'Reebok', logo: 'REEBOK' },
];
