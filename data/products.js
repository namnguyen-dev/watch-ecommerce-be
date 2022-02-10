const products = [
  {
    name: 'Cellini Moonphase',
    price: 1000000,
    description:
      'The Cellini Moonphase has a white lacquer dial with a blue enamelled disc at 6 showing the full moon and the new moon, the former depicted by a meteorite applique and the latter by a silver ring. The Cellini Moonphase also displays the date around the circumference of the dial, via a centre hand with a crescent moon at its tip.',
    image:
      'https://res.cloudinary.com/namnguyenthanh/image/upload/v1644026303/Watch-e-commerce/drjghu41ew9d8rlnufoq.png',
    brand: 'rolex',
    category: 'men',
    featured: true,
    colors: ['#000'],
  },
  {
    name: 'Oyster Perpetual',
    price: 2000000,
    description:
      'The sunray finish creates delicate light reflections on many dials in the Oyster Perpetual collection. It is obtained using masterful brushing techniques that create grooves running outwards from the centre of the dial. Light is diffused consistently along each engraving, creating a characteristic subtle glow that moves depending on the position of the wrist.',
    image:
      'https://res.cloudinary.com/namnguyenthanh/image/upload/v1644026733/Watch-e-commerce/bgkehert4aouezmf8ne1.png',
    brand: 'rolex',
    category: 'men',
    featured: true,
    colors: ['#9e9e9e'],
  },
  {
    name: 'Sky Dweller',
    price: 3000000,
    description: `A fixed inverted red triangle on the dial points to the chosen reference time,the time at home or at the travellers usual workplace,on the off-centre 24-hour disc. At a glance, this 24-hour display clearly distinguishes daytime hours from night-time hours in the other time zone.`,
    image:
      'https://res.cloudinary.com/namnguyenthanh/image/upload/v1644026733/Watch-e-commerce/wootfsv9jlepu7ve51hs.png',
    brand: 'rolex',
    category: 'men',
    featured: true,

    colors: ['#000'],
  },
  {
    name: 'Day Date 40',
    price: 1000000,
    description:
      'The Rolex fluted bezel is a mark of distinction. Originally, the fluting of the Oyster bezel had a functional purpose: it served to screw the bezel onto the case helping to ensure the waterproofness of the watch. It was therefore identical to the fluting on the case back, which was also screwed onto the case for waterproofness, using specific Rolex tools. Over time, the fluting became an aesthetic element, a genuine Rolex signature feature. Today the fluted bezel is a mark of distinction, always in gold.',
    image:
      'https://res.cloudinary.com/namnguyenthanh/image/upload/v1644026569/Watch-e-commerce/s4tjohzsjubacccdjd6n.png',
    brand: 'rolex',
    category: 'men',
    featured: true,

    colors: ['#d4af37'],
  },
  {
    name: 'Cosmograph Daytona',
    price: 3000000,
    description: `A fixed inverted red triangle on the dial points to the chosen reference time,the time at home or at the travellers usual workplace,on the off-centre 24-hour disc. At a glance, this 24-hour display clearly distinguishes daytime hours from night-time hours in the other time zone.`,
    brand: 'rolex',
    category: 'men',
    image:
      'https://res.cloudinary.com/namnguyenthanh/image/upload/v1644026303/Watch-e-commerce/kcekomdupeeyjsgqxdta.png',

    colors: ['#a87964'],
  },

  {
    name: 'Pearl Master',
    price: 1000000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting.',
    brand: 'rolex',
    category: 'women',
    image:
      'https://res.cloudinary.com/namnguyenthanh/image/upload/v1644026733/Watch-e-commerce/nvfm4v6hmiqkhgbeoln6.png',

    colors: ['#e0bfb8'],
  },
  {
    name: 'Date Just 31',
    price: 1000000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting.',
    brand: 'rolex',
    category: 'women',
    image:
      'https://res.cloudinary.com/namnguyenthanh/image/upload/v1644026529/Watch-e-commerce/o1jgzhimsxon3fwedcdb.png',

    colors: ['#e0bfb8'],
  },
  {
    name: 'Date Just 36',
    price: 2000000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting.',
    brand: 'rolex',
    category: 'women',

    image:
      'https://res.cloudinary.com/namnguyenthanh/image/upload/v1644026529/Watch-e-commerce/apbmvmy0jktjx3enbjv1.png',

    colors: ['#e0bfb8'],
  },
  {
    name: 'Lady Date Just',
    price: 2000000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting.',
    brand: 'rolex',
    category: 'women',

    image:
      'https://res.cloudinary.com/namnguyenthanh/image/upload/v1644026569/Watch-e-commerce/dujww9cs3q79ysruefn2.png',

    colors: ['#e0bfb8'],
  },
  {
    name: 'Moonlight',
    price: 2000000,
    description:
      'The sunray finish creates delicate light reflections on many dials in the Oyster Perpetual collection. It is obtained using masterful brushing techniques that create grooves running outwards from the centre of the dial. Light is diffused consistently along each engraving, creating a characteristic subtle glow.',
    brand: 'rolex',
    category: 'women',

    image:
      'https://res.cloudinary.com/namnguyenthanh/image/upload/v1644026733/Watch-e-commerce/lxzx0fr0yomh0s4dcuov.png',

    colors: ['#e0bfb8'],
  },

  {
    name: 'Dazzling Moon',
    price: 1000000,
    description:
      'The Dazzling Moon has a white lacquer dial with a blue enamelled disc at 6 showing the full moon and the new moon, the former depicted by a meteorite applique and the latter by a silver ring. The Dazzling Moon also displays the date around the circumference of the dial, via a centre hand with a crescent moon at its tip.',
    brand: 'jaeger',
    category: 'women',
    featured: true,
    image:
      'https://res.cloudinary.com/namnguyenthanh/image/upload/v1644027164/Watch-e-commerce/krokwwaicjyeehwsmtso.png',

    colors: ['#3f5091'],
  },
  {
    name: 'Jewellery Moon',
    price: 2000000,
    description:
      'The sunray finish creates delicate light reflections on many dials in the Jewellery Moon collection. It is obtained using masterful brushing techniques that create grooves running outwards from the centre of the dial. Light is diffused consistently along each engraving, creating a characteristic subtle glow that moves depending on the position of the wrist.',
    brand: 'Jaeger',
    category: 'women',
    featured: true,
    image:
      'https://res.cloudinary.com/namnguyenthanh/image/upload/v1644027164/Watch-e-commerce/drtlfsqnei2njkrif8xu.png',

    colors: ['#a5b5bf'],
  },

  {
    name: 'Night & Day',
    price: 3000000,
    description: `A fixed inverted red triangle on the dial points to the chosen reference time,the time at home or at the travellers usual workplace,on the off-centre 24-hour disc. At a glance, this 24-hour display clearly distinguishes daytime hours from night-time hours in the other time zone.`,
    brand: 'jaeger',
    category: 'women',
    featured: true,
    image:
      'https://res.cloudinary.com/namnguyenthanh/image/upload/v1644027164/Watch-e-commerce/ibnmqj1ydqdhgbiltw6i.png',

    colors: ['#ece6db'],
  },
  {
    name: 'Rendezvous',
    price: 1000000,
    description:
      'The Redezvous fluted bezel is a mark of distinction. Originally, the fluting of the Oyster bezel had a functional purpose: it served to screw the bezel onto the case helping to ensure the waterproofness of the watch. It was therefore identical to the fluting on the case back, which was also screwed onto the case for waterproofness, using specific Jaeger tools.',
    brand: 'jaeger',
    category: 'women',
    featured: true,
    image:
      'https://res.cloudinary.com/namnguyenthanh/image/upload/v1644027164/Watch-e-commerce/ixf0oh5z4cgxjxmi93l0.png',

    colors: ['#506783'],
  },

  {
    name: 'Baloon Blue',
    price: 1000000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of gem-setting.',
    brand: 'cartier',
    category: 'men',

    image:
      'https://res.cloudinary.com/namnguyenthanh/image/upload/v1644026987/Watch-e-commerce/i6qys2rnfpkdof0wrlen.png',

    colors: ['#05122e'],
  },
  {
    name: 'Baloon Blue 100',
    price: 2000000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of gem-setting.',
    brand: 'cartier',
    category: 'women',

    image:
      'https://res.cloudinary.com/namnguyenthanh/image/upload/v1644026988/Watch-e-commerce/u8d7zqdslvxsj7jzwqg2.png',

    colors: ['#d4af37'],
  },
  {
    name: 'Ronde Solo',
    price: 2000000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of gem-setting.',
    brand: 'cartier',
    category: 'men',

    image:
      'https://res.cloudinary.com/namnguyenthanh/image/upload/v1644026987/Watch-e-commerce/hzfuxjhqag4heoalzttn.png',

    colors: ['#000'],
  },
  {
    name: 'Santos',
    price: 2000000,
    description:
      'The sunray finish creates delicate light reflections on many dials in the collection. It is obtained using masterful brushing techniques that create grooves running outwards from the centre of the dial. Light is diffused consistently along each engraving, creating a characteristic subtle glow that moves depending on the position of the wrist.',
    brand: 'cartier',
    category: 'men',

    image:
      'https://res.cloudinary.com/namnguyenthanh/image/upload/v1644026987/Watch-e-commerce/ov35iswkbao6g9j2pjq4.png',

    colors: ['#878787'],
  },
  {
    name: 'Santos Dumo',
    price: 2000000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of gem-setting.',
    brand: 'cartier',
    category: 'men',

    image:
      'https://res.cloudinary.com/namnguyenthanh/image/upload/v1644026987/Watch-e-commerce/yc8ui6dfsn4aylzaq2im.png',

    colors: ['#05122e'],
  },
  {
    name: 'Santos Dumo 100',
    price: 2000000,
    description:
      'The diamond-paved dials are a sparkling symphony to enhance the watch and enchant the wearer. Gem-setters finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of gem-setting.',
    brand: 'cartier',
    category: 'women',

    image:
      'https://res.cloudinary.com/namnguyenthanh/image/upload/v1644026987/Watch-e-commerce/atfbx207j1cb2xncggzl.png',

    colors: ['#000'],
  },
  {
    name: 'TankMC Light',
    price: 2000000,
    description:
      'The sunray finish creates delicate light reflections on many dials in the collection. It is obtained using masterful brushing techniques that create grooves running outwards from the centre of the dial. Light is diffused consistently along each engraving, creating a characteristic subtle glow that moves depending on the position of the wrist.',
    brand: 'cartier',
    category: 'men',

    image:
      'https://res.cloudinary.com/namnguyenthanh/image/upload/v1644026987/Watch-e-commerce/fkt3uqtzlxa5f0i2aato.png',

    colors: ['#000'],
  },
];

module.exports = products;
