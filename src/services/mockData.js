export const products = [
  {
    id: 'sx-001',
    name: 'SneakX Quantum Flow',
    category: 'Running',
    gender: 'Men',
    price: 180,
    rating: 4.8,
    reviews: 124,
    description: 'Engineered for the future of running. The Quantum Flow features adaptive cushioning that responds to your stride, wrapped in a dynamic breathable mesh.',
    images: [
      '/images/sneakx-quantum-1.png',
      '/images/sneakx-quantum-2.png',
      '/images/sneakx-quantum-3.png'
    ],
    sizes: [7, 8, 9, 9.5, 10, 11, 12],
    isTrending: true,
    isDrop: false
  },
  {
    id: 'sx-002',
    name: 'Neo Retro High',
    category: 'Streetwear',
    gender: 'Unisex',
    price: 220,
    rating: 4.9,
    reviews: 356,
    description: 'A nod to 90s court culture with cyberpunk aesthetics. Premium leather meets neon accents.',
    images: [
      '/images/sx002-1.png',
      '/images/sx002-2.png',
      '/images/sx002-3.png'
    ],
    sizes: [6, 7, 8, 9, 10, 10.5, 11, 13],
    isTrending: true,
    isDrop: false
  },
  {
    id: 'sx-003',
    name: 'Void Walker LE',
    category: 'Limited Edition',
    gender: 'Men',
    price: 295,
    rating: 5.0,
    reviews: 42,
    description: 'Extremely limited edition stealth sneakers. Designed with Vantablack-inspired fabrics and reflective accents. Next drop coming soon.',
    images: [
      '/images/sx003-1.png',
      '/images/sx003-2.png',
      '/images/sx003-3.png'
    ],
    sizes: [9, 10, 11],
    isTrending: false,
    isDrop: true,
    dropDate: new Date(Date.now() + 86400000 * 2).toISOString()
  },
  {
    id: 'sx-004',
    name: 'Velocity Core X',
    category: 'Training',
    gender: 'Women',
    price: 150,
    rating: 4.6,
    reviews: 89,
    description: 'High-intensity interval training requires a solid foundation. The Velocity Core X delivers unparalleled stability and grip.',
    images: [
      '/images/sx004-1.png',
      '/images/sx004-2.png',
      '/images/sx004-3.png'
    ],
    sizes: [5, 6, 6.5, 7, 8, 9, 10],
    isTrending: false,
    isDrop: false
  },
  {
    id: 'sx-005',
    name: 'Aero Glide Women',
    category: 'Running',
    gender: 'Women',
    price: 165,
    rating: 4.7,
    reviews: 210,
    description: 'Experience true weightlessness with our proprietary ultralight foam technology, specifically designed for women.',
    images: [
      '/images/sx005-1.png',
      '/images/sx005-2.png',
      '/images/sx005-3.png'
    ],
    sizes: [6, 7, 7.5, 8, 8.5, 9],
    isTrending: true,
    isDrop: false
  },
  {
    id: 'sx-006',
    name: 'Street Stealth Pro Men',
    category: 'Streetwear',
    gender: 'Men',
    price: 195,
    rating: 4.5,
    reviews: 67,
    description: 'Tactical design meets everyday comfort. Water-resistant upper and quick-lace system perfectly tailored for the urban landscape.',
    images: [
      '/images/sx006-1.png',
      '/images/sx006-1.png',
      '/images/sx006-1.png'
    ],
    sizes: [8, 9, 10, 11, 12],
    isTrending: false,
    isDrop: false
  },
  {
    id: 'sx-007',
    name: 'Neon Horizon Women',
    category: 'Streetwear',
    gender: 'Women',
    price: 210,
    rating: 4.8,
    reviews: 145,
    description: 'Bright, bold, and unapologetic. The Neon Horizon blends vivid colorways with cloud-like suspension for all-day street style.',
    images: [
      '/images/sx007-1.png',
      '/images/sx007-1.png',
      '/images/sx007-1.png'
    ],
    sizes: [5, 6, 7, 8, 9, 10],
    isTrending: true,
    isDrop: false
  },
  {
    id: 'sx-008',
    name: 'Titan Form Men',
    category: 'Training',
    gender: 'Men',
    price: 140,
    rating: 4.4,
    reviews: 82,
    description: 'Built for heavy lifting and explosive movements. Uncompromising core stability.',
    images: [
      '/images/sx008-1.png',
      '/images/sx008-1.png',
      '/images/sx008-1.png'
    ],
    sizes: [8, 9, 10, 10.5, 11, 12, 13],
    isTrending: false,
    isDrop: false
  },
  {
    id: 'sx-009',
    name: 'Goddess Pace',
    category: 'Running',
    gender: 'Women',
    price: 175,
    rating: 4.9,
    reviews: 312,
    description: 'The premier marathon shoe for women. Featuring energy-return technology that literally propels you forward.',
    images: [
      '/images/sx004-1.png',
      '/images/sx004-2.png',
      '/images/sx004-3.png'
    ],
    sizes: [6, 6.5, 7, 7.5, 8, 9],
    isTrending: true,
    isDrop: false
  },
  {
    id: 'sx-010',
    name: 'Urban Explorer Men',
    category: 'Streetwear',
    gender: 'Men',
    price: 185,
    rating: 4.6,
    reviews: 94,
    description: 'For conquering concrete jungles. Rugged outsoles paired with premium sustainable leather.',
    images: [
      '/pink_shoe.avif',
      '/pink_shoe.avif',
      '/pink_shoe.avif'
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    isTrending: false,
    isDrop: false
  },
  {
    id: 'sx-011',
    name: 'Luna Core Studio',
    category: 'Training',
    gender: 'Women',
    price: 130,
    rating: 4.5,
    reviews: 45,
    description: 'Perfect for yoga, pilates, and light impact. Maximum flexibility and grounded feel.',
    images: [
      '/images/sx004-1.png',
      '/images/sx004-2.png',
      '/images/sx004-3.png'
    ],
    sizes: [5, 6, 7, 8, 9],
    isTrending: false,
    isDrop: false
  },
  {
    id: 'sx-012',
    name: 'Abyssal Deep',
    category: 'Streetwear',
    gender: 'Unisex',
    price: 240,
    rating: 4.8,
    reviews: 110,
    description: 'Deep ocean inspired colorways with luminescent details that glow in the dark.',
    images: [
      '/images/sx003-1.png',
      '/images/sx003-2.png',
      '/images/sx003-3.png'
    ],
    sizes: [6, 7, 8, 9, 10, 11],
    isTrending: true,
    isDrop: false
  },
  {
    id: 'sx-013',
    name: 'Crimson Trekker',
    category: 'Training',
    gender: 'Men',
    price: 160,
    rating: 4.7,
    reviews: 58,
    description: 'Robust and fiery trail runners designed for harsh terrains and steep climbs.',
    images: [
      '/images/google_shoe_2.jpg',
      '/images/google_shoe_2.jpg',
      '/images/google_shoe_2.jpg'
    ],
    sizes: [8, 9, 10, 11, 12],
    isTrending: false,
    isDrop: false
  },
  {
    id: 'sx-014',
    name: 'Aero Lift X',
    category: 'Running',
    gender: 'Unisex',
    price: 200,
    rating: 4.9,
    reviews: 120,
    description: 'Hyper-responsive sprinting spike with carbon fiber plate technology.',
    images: [
      '/images/sneakx-quantum-1.png',
      '/images/sneakx-quantum-2.png',
      '/images/sneakx-quantum-3.png'
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    isTrending: true,
    isDrop: false
  },
  {
    id: 'sx-015',
    name: 'Nova Blazer Low',
    category: 'Streetwear',
    gender: 'Women',
    price: 145,
    rating: 4.4,
    reviews: 74,
    description: 'Classic low-top silhouette with modern iridescent overlays.',
    images: [
      '/images/sx005-1.png',
      '/images/sx005-2.png',
      '/images/sx005-3.png'
    ],
    sizes: [5, 6, 7, 8, 9],
    isTrending: false,
    isDrop: false
  },
  {
    id: 'sx-016',
    name: 'Volt Runner',
    category: 'Running',
    gender: 'Men',
    price: 155,
    rating: 4.5,
    reviews: 63,
    description: 'Dynamic support and shocking electric colors to power your daily runs.',
    images: [
      '/images/shoe 2.avif',
      '/images/shoe 2.avif',
      '/images/shoe 2.avif'
    ],
    sizes: [8, 9, 10, 11, 12, 13],
    isTrending: false,
    isDrop: false
  },
  {
    id: 'sx-017',
    name: 'Elevated Platform',
    category: 'Streetwear',
    gender: 'Women',
    price: 135,
    rating: 4.8,
    reviews: 280,
    description: 'Streetwear meets high fashion. A chunky sole for maximum height and impact.',
    images: [
      '/images/sx004-1.png',
      '/images/sx004-2.png',
      '/images/sx004-3.png'
    ],
    sizes: [5, 6, 7, 8, 9],
    isTrending: true,
    isDrop: false
  },
  {
    id: 'sx-018',
    name: 'Atlas Powerlift',
    category: 'Training',
    gender: 'Men',
    price: 170,
    rating: 4.9,
    reviews: 88,
    description: 'Extreme durability with a wide toe box, purpose-built for heavy lifting and squats.',
    images: [
      '/images/sx003-1.png',
      '/images/sx003-2.png',
      '/images/sx003-3.png'
    ],
    sizes: [7, 8, 9, 10, 10.5, 11, 12],
    isTrending: false,
    isDrop: false
  },
  {
    id: 'sx-019',
    name: 'Aurora Strider',
    category: 'Running',
    gender: 'Women',
    price: 195,
    rating: 4.7,
    reviews: 142,
    description: 'Glow-in-the-dark overlays on a light-as-air running chassis.',
    images: [
      '/images/sx005-1.png',
      '/images/sx005-2.png',
      '/images/sx005-3.png'
    ],
    sizes: [6, 7, 7.5, 8, 8.5, 9, 10],
    isTrending: true,
    isDrop: false
  },
  {
    id: 'sx-020',
    name: 'Nomad High-Top',
    category: 'Streetwear',
    gender: 'Men',
    price: 210,
    rating: 4.3,
    reviews: 45,
    description: 'Premium suede and weatherproof canvas for extreme urban conditions.',
    images: [
      '/images/shoe 5.avif',
      '/images/shoe 5.avif',
      '/images/shoe 5.avif'
    ],
    sizes: [8, 9, 9.5, 10, 11, 12],
    isTrending: false,
    isDrop: false
  }
];

export const getProducts = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find(p => p.id === id));
    }, 300);
  });
};
