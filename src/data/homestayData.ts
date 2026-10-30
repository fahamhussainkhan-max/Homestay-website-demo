export interface Room {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  badgeColor?: string;
  pricePerNight: number;
  originalPrice?: number;
  maxGuests: number;
  bedType: string;
  area: string;
  view: string;
  description: string;
  longDescription: string;
  coverImage: string;
  gallery: string[];
  amenities: string[];
  features: string[];
}

export interface Experience {
  id: string;
  title: string;
  category: 'Nature' | 'Culture' | 'Wellness' | 'Culinary';
  duration: string;
  timing: string;
  price: string;
  included: boolean;
  image: string;
  description: string;
  highlights: string[];
}

export interface Dish {
  name: string;
  localName: string;
  category: 'Breakfast' | 'Thali' | 'Snacks & Drinks' | 'Dessert';
  description: string;
  isOrganic: boolean;
  image: string;
  ingredients: string[];
}

export interface Attraction {
  name: string;
  distance: string;
  driveTime: string;
  type: string;
  description: string;
  tips: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  stayType: string;
  comment: string;
}

export const ROOMS: Room[] = [
  {
    id: 'orchard-cedar-suite',
    name: 'The Orchard Cedar Suite',
    tagline: 'Orchard & Sunrise Facing',
    badge: '25% Off Midweek',
    badgeColor: 'bg-brand-sage',
    pricePerNight: 3200,
    originalPrice: 4200,
    maxGuests: 2,
    bedType: 'Handcrafted Queen Deodar Pine Bed',
    area: '380 sq. ft.',
    view: 'Apple orchards & rolling pine valley',
    description: 'Wake up to morning birdsong and warm herbal tea on your private wooden deck overlooking century-old cedar woods and terraced farms.',
    longDescription: 'Carved out of fragrant Himalayan cedar with reclaimed stone walls, the Orchard Cedar Suite blends earthy rustic charm with refined mountain comforts. Features an artisanal wood-framed queen bed, pure hand-spun Kumaoni wool blankets, handcrafted cane lounge chairs, an ensuite stone bathroom with 24/7 hot geyser, and a spacious cantilevered wooden sundeck facing the morning sun.',
    coverImage: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop'
    ],
    amenities: [
      'High-Speed Optical Fiber Wi-Fi (100 Mbps)',
      'Home-Cooked Pahari Breakfast Included',
      'Private Panoramic Wooden Deck',
      'Ensuite Bathroom with 24/7 Hot Water',
      'Electric Blanket & Radiant Ceramic Room Heater',
      'Organic Himalayan Herbal Tea Station & French Press',
      'Pure Cotton Linen & Woolen Quilts',
      'Complimentary Farm Water Carafes'
    ],
    features: ['Private Sundeck', 'Workstation Desk', 'Birdwatching Binoculars', 'Mountain Facing']
  },
  {
    id: 'pine-ridge-family-cottage',
    name: 'Pine Ridge Family Cottage',
    tagline: 'Unobstructed Peak View & Hearth',
    badge: 'Popular Choice',
    badgeColor: 'bg-brand-earth',
    pricePerNight: 5400,
    originalPrice: 6500,
    maxGuests: 4,
    bedType: '1 King Pine Bed + 2 Mezzanine Loft Beds',
    area: '680 sq. ft.',
    view: 'Trishul Peak & snow-dusted ridges',
    description: 'Featuring an authentic river stone fireplace, cozy private living salon, and a timber attic loft ideal for families or small groups seeking mountain warmth.',
    longDescription: 'Sprawled over two levels with fragrant deodar timber rafters, this cottage is our homestay pride. Downstairs boasts a large king bedroom and sitting lounge around a functional wood-burning stone fireplace (Bukhari). A handcrafted spiral timber staircase leads to a snug mezzanine loft with twin beds loved by kids and young explorers.',
    coverImage: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop'
    ],
    amenities: [
      'Authentic Wood Hearth / Fireplace (Wood supplied)',
      'High-Speed Wi-Fi for 4 Devices',
      'Family Dining Table & Living Nook',
      'Private Garden Porch with Hammock',
      'Modern Large Bathroom with Rain Shower & Geyser',
      'Board Games, Himalayan Books & Cards Chest',
      'Daily Farm Breakfast for 4 Guests',
      'Tea & Fresh Bean Coffee Corner'
    ],
    features: ['Working Fireplace', 'Mezzanine Loft', 'Private Garden Veranda', 'Family Sized']
  },
  {
    id: 'heritage-attic-loft',
    name: 'Heritage Deodar Attic Loft',
    tagline: '360° Himalayan Panorama & Skylights',
    badge: 'Signature Suite',
    badgeColor: 'bg-brand-sage',
    pricePerNight: 6500,
    originalPrice: 8000,
    maxGuests: 4,
    bedType: '1 Grand King Pine Bed + 2 Daybed Lounges',
    area: '820 sq. ft.',
    view: 'Complete Kumaon range (Nanda Devi to Trishul)',
    description: 'The highest crown suite of Pinecrest. Floor-to-ceiling glass skylights for stargazing under crystal Almora night skies and endless snow peak views.',
    longDescription: 'Occupying the entire top floor of the original 1932 stone homestead, the Heritage Attic Loft offers uninterrupted vistas of the 300 km Himalayan snow wall. Featuring pitched pine ceilings, antique brass accents, skylight stargazing windows directly above the bed, a freestanding beaten-copper soaking tub, and a vintage vinyl record player with acoustic classics.',
    coverImage: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop'
    ],
    amenities: [
      'Stargazing Glass Skylights with Blinds',
      'Freestanding Hammered Copper Soaking Tub',
      '360-degree Valley & Peak Glass Glazing',
      'Artisan Wood Pellets Stove',
      'Vintage Turntable & Mountain Audio Library',
      'Dedicated Ergonomic Study Desk & 150 Mbps Wi-Fi',
      'Private Wrap-around Attic Balcony',
      'Gourmet Breakfast with Fresh Farm Butter & Preserves'
    ],
    features: ['Stargazing Skylights', 'Copper Tub', '360° Peak Panorama', 'Vinyl Turntable']
  },
  {
    id: 'nanda-devi-sunrise-studio',
    name: 'Nanda Devi Sunrise Studio',
    tagline: 'Quiet East Corner & Writers Desk',
    badge: 'Solo & Couples Favorite',
    badgeColor: 'bg-brand-earth',
    pricePerNight: 4200,
    originalPrice: 4900,
    maxGuests: 2,
    bedType: '1 Custom Queen Pine Bed',
    area: '420 sq. ft.',
    view: 'Direct sunrise over Nanda Devi & Trishul',
    description: 'Designed specifically for writers, creators, and reflective couples seeking peace, gentle morning amber light, and endless pine valley vistas.',
    longDescription: 'Tucked away at the quiet eastern edge of the property, this sanctuary gets the first ray of Himalayan dawn. Features a solid oak writing desk facing the peaks, a curated poetry collection, an Italian moka pot coffee station, and a private balcony cantilevered directly above the terrace tea garden.',
    coverImage: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop'
    ],
    amenities: [
      'East-facing Sunrise Terrace with Loungers',
      'Solid Teak Writing Desk & Ergonomic Chair',
      'Moka Pot & Locally Sourced Arabica Beans',
      '100 Mbps Dedicated Workation Fiber',
      'Underfloor Heating in Bathroom',
      'Handcrafted Wool Shawls & Throws',
      'Farm Breakfast Delivered to Deck on Request'
    ],
    features: ['Sunrise Balcony', 'Writing Desk', 'Italian Moka Pot', 'Peaceful Corner']
  }
];

export const HIGHLIGHTS = [
  {
    icon: 'heart',
    title: 'Warm Family Care',
    subtitle: 'Hosted by the Joshis'
  },
  {
    icon: 'mountain-snow',
    title: 'Valley Panoramas',
    subtitle: 'Nanda Devi & Trishul'
  },
  {
    icon: 'badge-percent',
    title: 'Fair Direct Pricing',
    subtitle: 'No hidden agent fees'
  },
  {
    icon: 'utensils',
    title: 'Organic Pahari Food',
    subtitle: 'Fresh farm harvests'
  },
  {
    icon: 'flame',
    title: 'Bonfire Evenings',
    subtitle: 'Starlit folk tales'
  },
  {
    icon: 'wifi',
    title: 'Fast 100M Wi-Fi',
    subtitle: 'Solar backup workation'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'binsar-hike',
    title: 'Binsar Oak & Rhododendron Forest Trek',
    category: 'Nature',
    duration: '4 - 5 Hours',
    timing: 'Morning (07:30 AM)',
    price: '₹1,200 / group',
    included: false,
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000&auto=format&fit=crop',
    description: 'Trek along ancient stone trails lined with mossy deodars, chir pines, and blooming scarlet rhododendrons guided by local naturalist Tara.',
    highlights: ['Zero Point peak views', 'Spot Himalayan Monal & Barking Deer', 'Picnic lunch with home rolls']
  },
  {
    id: 'twilight-bonfire',
    title: 'Twilight Hearth & Kumaoni Folk Stories',
    category: 'Culture',
    duration: '2 Hours',
    timing: 'Evening (07:00 PM)',
    price: 'Complimentary',
    included: true,
    image: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?q=80&w=1000&auto=format&fit=crop',
    description: 'Gather around the open stone pit under crisp starry mountain skies. Uncle Bipin shares folklore of mountain spirits, local legends, and Almora history.',
    highlights: ['Roasted pine nuts & mountain corn', 'Acoustic pahari songs', 'Hot spiced ginger tea']
  },
  {
    id: 'stargazing-telescope',
    title: 'Deep Sky Stargazing with Dobsonian Telescope',
    category: 'Wellness',
    duration: '1.5 Hours',
    timing: 'Night (08:30 PM)',
    price: 'Complimentary',
    included: true,
    image: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=1000&auto=format&fit=crop',
    description: 'With virtually zero light pollution at 6,400 feet, observe the rings of Saturn, craters of the Moon, and the Milky Way dust clouds in staggering clarity.',
    highlights: ['8-inch motorized telescope', 'Constellation navigation guide', 'Warm spiced hot chocolate']
  },
  {
    id: 'cooking-class',
    title: 'Auntie Kamla’s Kumaoni Hearth Cookery',
    category: 'Culinary',
    duration: '2.5 Hours',
    timing: 'Afternoon (03:30 PM)',
    price: '₹750 / person',
    included: false,
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000&auto=format&fit=crop',
    description: 'Step into our traditional mud-plastered kitchen. Grind wild herbs on the sil-batta (stone slab) and learn to make crispy Mandua roti and Gahat soup.',
    highlights: ['Learn authentic Bhatt ki Churkani', 'Harvest fresh herbs from farm', 'Handwritten recipe cards to take home']
  },
  {
    id: 'sunrise-yoga',
    title: 'Sunrise Prana & Silent Valley Meditation',
    category: 'Wellness',
    duration: '1 Hour',
    timing: 'Dawn (06:15 AM)',
    price: 'Complimentary',
    included: true,
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1000&auto=format&fit=crop',
    description: 'Gentle mindful stretching and breathwork on the pine viewing deck as the first golden sunlight touches Trishul and Nanda Ghunti peaks.',
    highlights: ['Mats and woolen shawls provided', 'Guided mountain breathing', 'Post-session warm tulsi brew']
  },
  {
    id: 'kasar-walk',
    title: 'Kasar Devi & Crank’s Ridge Spiritual Heritage Walk',
    category: 'Culture',
    duration: '3 Hours',
    timing: 'Morning (09:00 AM)',
    price: '₹800 / group',
    included: false,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop',
    description: 'Visit the world-famous Van Allen Belt geomagnetic vortex that drew Swami Vivekananda, Bob Dylan, D.H. Lawrence, and Timothy Leary.',
    highlights: ['Ancient 2nd-century stone shrine', 'Crank’s Ridge cafe stop', 'Panoramic 360 ridge trail']
  }
];

export const CUISINE: Dish[] = [
  {
    name: 'Traditional Kumaoni Thali',
    localName: 'Kumaoni Zaika Thali',
    category: 'Thali',
    description: 'A wholesome mountain feast featuring Bhatt ki Churkani (black soybean curry), Gahat dal, Aloo ke Gutke with jumbo mountain cumin, Mandua (finger millet) rotis, and cooling hemp-seed mint raita.',
    isOrganic: true,
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=800&auto=format&fit=crop',
    ingredients: ['Black soybeans', 'Finger millet', 'Jakhiya mustard seeds', 'Farm ghee', 'Mountain potatoes']
  },
  {
    name: 'Rhododendron (Buransh) Nectar',
    localName: 'Buransh Sharbat',
    category: 'Snacks & Drinks',
    description: 'A soothing ruby-red botanical tonic pressed from wild spring rhododendron petals, seasoned with black salt, wild honey, and freshly squeezed mountain lemons.',
    isOrganic: true,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=800&auto=format&fit=crop',
    ingredients: ['Fresh wild buransh blossoms', 'Raw hive honey', 'Mountain mint', 'Himalayan pink rock salt']
  },
  {
    name: 'Almora Singori & Bal Mithai',
    localName: 'Asli Almora Mithai',
    category: 'Dessert',
    description: 'Almora’s 150-year-old heritage sweet: slow-cooked roasted khoya fudge coated in crunchy sugar sugar-globules, served alongside Singori wrapped in fragrant Malu leaves.',
    isOrganic: true,
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?q=80&w=800&auto=format&fit=crop',
    ingredients: ['Slow roasted whole milk khoya', 'Cardamom', 'Cane sugar', 'Wild Malu leaf wrapping']
  },
  {
    name: 'Sunny Terrace Farm Breakfast',
    localName: 'Pahari Nashta',
    category: 'Breakfast',
    description: 'Farm-fresh scrambled eggs or paneer bhurji with garden chives, golden potato-stuffed flatbreads, homemade apricot jam, butter churned that morning, and hot ginger masala chai.',
    isOrganic: true,
    image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=800&auto=format&fit=crop',
    ingredients: ['Free-range eggs', 'Handmade butter', 'Orchard apricot preserve', 'Ginger chai']
  }
];

export const ATTRACTIONS: Attraction[] = [
  {
    name: 'Kasar Devi & Crank’s Ridge',
    distance: '3.8 km',
    driveTime: '12 min',
    type: 'Spiritual & Geomagnetic Vortex',
    description: 'A serene ridge famous for its cosmic magnetic aura (on the Van Allen belt shared with Machu Picchu and Stonehenge). Visited by seekers, artists, and luminaries.',
    tips: 'Ideal for sunset tea at the ridge viewpoint and evening temple aarti.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Binsar Wildlife Sanctuary',
    distance: '18 km',
    driveTime: '40 min',
    type: 'High-altitude Oak Sanctuary',
    description: 'Spanning dense virgin oak, rhododendron and cedar forests. Home to 200+ bird species, flying squirrels, leopards, and the legendary 300-km Zero Point viewpoint.',
    tips: 'Start early morning by 7:00 AM to see the snow peaks crystal clear before clouds rise.',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Jageshwar Dham Temple Complex',
    distance: '34 km',
    driveTime: '1 hr 10 min',
    type: '8th-Century Stone Architecture',
    description: 'A cluster of 124 preserved Nagara-style stone temples tucked in a mysterious, misty deodar valley dedicated to Lord Shiva.',
    tips: 'A deeply meditative, cool valley. Stop for hot Kumaoni pakoras at riverside dhabas on the return.',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800&auto=format&fit=crop'
  },
  {
    name: 'Chitai Golu Devta Temple',
    distance: '7.5 km',
    driveTime: '20 min',
    type: 'Temple of Thousand Bells',
    description: 'Dedicated to Golu Devta, the Kumaoni god of justice. Known worldwide for thousands of brass bells and handwritten petitions left by devotees on stamp paper.',
    tips: 'Buy a small brass bell from local artisans outside to tie in the courtyard.',
    image: 'https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?q=80&w=800&auto=format&fit=crop'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Ananya Deshmukh',
    location: 'Mumbai & Bangalore',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    date: 'October 2026',
    stayType: 'Workation • 12 Nights in Sunrise Studio',
    comment: 'The fastest Wi-Fi I have ever experienced in the hills (zero video dropouts), paired with Uncle Bipin’s fresh apricot jam and the view of Trishul peak right from my desk. Pinecrest Meadow gave me back my focus and peace.'
  },
  {
    id: 'rev-2',
    author: 'Marcus & Elena Vance',
    location: 'Zurich, Switzerland',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    date: 'September 2026',
    stayType: 'Couples Retreat • Heritage Attic Loft',
    comment: 'We have stayed in chalets across the Swiss Alps, but the soulfulness of Pinecrest is something truly rare. Watching the full moon through the loft skylight with the stone stove crackling was pure magic. Auntie Kamla’s cooking is Michelin star warmth.'
  },
  {
    id: 'rev-3',
    author: 'Rohit, Shreya & Kids',
    location: 'New Delhi',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    date: 'August 2026',
    stayType: 'Family Stay • Pine Ridge Cottage',
    comment: 'Our children fell in love with Rocky the golden retriever and spent hours learning how apples grow. The evening bonfire with roasted corn and mountain legends will remain etched in our memories forever.'
  }
];

export const FAQS = [
  {
    question: 'How do we reach Pinecrest Meadow from Delhi or Kathgodam?',
    answer: 'From Kathgodam Railway Station (the nearest railhead), Pinecrest Meadow is a scenic 3.5-hour drive (92 km) through Bhimtal and Bhowali. We can arrange a trusted local driver for you (₹2,400 per cab). If arriving by air, Pantnagar Airport is 4 hours away. From Delhi by road, it is a smooth 8-hour drive via NH9.'
  },
  {
    question: 'How reliable is the Wi-Fi for remote work or video calls?',
    answer: 'We have dedicated 100 Mbps fiber optic internet with dual-band routers covering all suites, lounges, and sun terraces. We also have a solar inverter backup that keeps the network and power running seamlessly during weather-related hill outages.'
  },
  {
    question: 'Are home-cooked meals included, and can you cater to dietary needs?',
    answer: 'Every room booking includes our lavish daily farm-to-table breakfast on the terrace. For lunch and dinner, Auntie Kamla prepares authentic Kumaoni thalis, fresh phulkas, and organic comfort meals on request (₹450 per meal). We happily accommodate pure vegetarian, vegan, gluten-free, and mild kid-friendly palates.'
  },
  {
    question: 'Is the homestay pet-friendly?',
    answer: 'Yes! We love pets and have our own gentle golden retriever, Rocky. We have sprawling fenced terrace gardens where well-behaved dogs can run freely. Kindly inform us in advance so we can prep water bowls and cozy pet blankets.'
  },
  {
    question: 'What is the weather like, and do you have heating in winter?',
    answer: 'All our rooms are winterized with thick stone masonry, heavy wooden deodar paneling, radiant ceramic space heaters, and plush electric blankets under the sheets. The Pine Ridge cottage and Attic Loft also feature authentic wood-burning fireplaces.'
  }
];

export const PEAKS_PANORAMA = [
  { name: 'Trishul I & II', elevation: '7,120 m', angle: '28%', description: 'The majestic trident of Lord Shiva, glowing rose-gold at dusk.' },
  { name: 'Nanda Devi', elevation: '7,816 m', angle: '46%', description: 'India’s second-highest peak and guardian goddess of Uttarakhand.' },
  { name: 'Nanda Ghunti', elevation: '6,309 m', angle: '62%', description: 'The graceful veil of Nanda Devi, visible clearly on crisp mornings.' },
  { name: 'Panchachuli', elevation: '6,904 m', angle: '82%', description: 'The legendary five cooking hearths of the Pandavas in eastern Kumaon.' }
];

export const SEASONS_DATA = [
  {
    season: 'Spring (Mar – Apr)',
    temp: '14°C to 24°C',
    landscape: 'Apple & Plum Blossoms in Full Bloom',
    peakVisibility: '95% Crisp & Clear',
    clothing: 'Light sweaters, sunhats, walking shoes',
    vibe: 'Vibrant flowers, gentle breezes, pleasant afternoon sunshine'
  },
  {
    season: 'Summer (May – Jun)',
    temp: '18°C to 28°C',
    landscape: 'Lush Pine Woods & Cool Mountain Escapes',
    peakVisibility: '85% Great Morning Views',
    clothing: 'Breathable cottons with light evening stole',
    vibe: 'Perfect retreat from plains heat, evening bonfires, birdwatching'
  },
  {
    season: 'Monsoon Mist (Jul – Aug)',
    temp: '16°C to 22°C',
    landscape: 'Deep Emerald Moss, Floating Cloud Oceans',
    peakVisibility: '50% Mystical Peak Glimpses',
    clothing: 'Rain jacket, hiking boots, warm fleece',
    vibe: 'Romantic mist, sound of rain on tin roofs, piping hot pakoras'
  },
  {
    season: 'Autumn Crystal (Sep – Nov)',
    temp: '10°C to 22°C',
    landscape: 'Golden Grasslands & Mirror-like Skies',
    peakVisibility: '100% Supreme Panorama',
    clothing: 'Woolens, warm jackets, morning gloves',
    vibe: 'Best season for photographers, stargazing, and long forest treks'
  },
  {
    season: 'Winter Snow & Sun (Dec – Feb)',
    temp: '1°C to 15°C',
    landscape: 'Frosty Pine Needles, Occasional Snowfall',
    peakVisibility: '98% Blinding White Snowpeaks',
    clothing: 'Heavy down jackets, thermals, woolen beanies',
    vibe: 'Crackling fireplaces, steaming Kumaoni tea, cozy book reading'
  }
];
