import { Product } from '@/context/CartContext';

export const products: Product[] = [
  {
    id: '1',
    name: 'Air Max 270',
    brand: 'Nike',
    price: 150,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&auto=format&fit=crop',
    category: 'Running',
  },
  {
    id: '2',
    name: 'Ultraboost 22',
    brand: 'Adidas',
    price: 180,
    image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&auto=format&fit=crop',
    category: 'Running',
  },
  {
    id: '3',
    name: 'RS-X Reinvention',
    brand: 'Puma',
    price: 120,
    image: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&auto=format&fit=crop',
    category: 'Lifestyle',
  },
  {
    id: '4',
    name: 'Dri-FIT Training Tee',
    brand: 'Nike',
    price: 45,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&auto=format&fit=crop',
    category: 'Apparel',
  },
  {
    id: '5',
    name: 'Essentials Hoodie',
    brand: 'Adidas',
    price: 65,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&auto=format&fit=crop',
    category: 'Apparel',
  },
  {
    id: '6',
    name: 'Training Shorts',
    brand: 'Puma',
    price: 40,
    image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&auto=format&fit=crop',
    category: 'Apparel',
  },
  {
    id: '7',
    name: 'Jordan 1 Retro High',
    brand: 'Nike',
    price: 170,
    image: 'https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=800&auto=format&fit=crop',
    category: 'Basketball',
  },
  {
    id: '8',
    name: 'Forum Low',
    brand: 'Adidas',
    price: 100,
    image: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&auto=format&fit=crop',
    category: 'Lifestyle',
  },
];

export const brands = [
  {
    name: 'Nike',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg'
  },
  {
    name: 'Adidas',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg'
  },
  {
    name: 'Puma',
    logo: 'https://logos-world.net/wp-content/uploads/2020/04/Puma-Logo.png'
  },
  {
    name: 'Under Armour',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Under_armour_logo.svg'
  },
];
