import { ResortData } from './types';

export const ayadaData: ResortData = {
  id: 'ayada-maldives',
  name: 'Ayada Maldives',
  slug: 'ayada-maldives',
  atoll: 'Gaafu Dhaalu Atoll',
  price_range: '$$$$',
  rating: '5',
  short_description: 'A Multi-Award Winning Luxury Resort',
  description: 'Ayada Maldives is a luxury private island resort offering a truly luxurious retreat with a genuine Maldivian style. Located in the relatively unexplored Gaafu Dhaalu Atoll in the south of the country, which is famous for its pristine beaches and crystal clear shallow lagoons.',
  images: [
    'https://picsum.photos/seed/ayada1/1920/1080',
    'https://picsum.photos/seed/ayada2/1280/720',
    'https://picsum.photos/seed/ayada3/1280/720',
    'https://picsum.photos/seed/ayada4/1280/720',
    'https://picsum.photos/seed/ayada5/1280/720',
  ],
  features: ['Private Pools', 'Butler Service', 'Award-winning Spa', 'Surf Spot Nearby'],
  transfers: ['Domestic Flight + Speedboat'],
  meal_plans: ['Bed_and_Breakfast', 'Half_Board', 'Full_Board', 'Crystal_All_Inclusive'],
  uvp: 'Voted the "World\'s Leading Luxury Ocean View Resort" and "Indian Ocean\'s Leading Luxury Resort"',
  room_types: [
    {
      id: 'garden-villa',
      name: 'Garden Villa',
      size: '101 sqm',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1680344545031-LG6OKGX6EQNO33T96S7V/Garden+Villa+1.jpg?format=2500w',
      images: [
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1680344545031-LG6OKGX6EQNO33T96S7V/Garden+Villa+1.jpg?format=2500w',
        'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1533283180231-1100ER779RL5L3HOOB3L/garden_villa2.jpg?format=2500w'
      ],
      capacity: '2 Adults + 1 Child',
      description: 'Nestled in the lush tropical gardens, these villas offer a private sanctuary with a spacious veranda and a private pool.',
      map_url: 'https://www.google.com/maps/embed?pb=!4v1533289297040!6m8!1m7!1sCAoSLEFGMVFpcE4xeGIyUDBHZVBwZ3dQdXVEVVhpdjEtYTBwRUxQOGdHNGhtanF6!2m2!1d0.2764119336230769!2d73.3558128563991!3f77.65!4f1.2999999999999972!5f0.5970117501821992'
    },
    {
      id: 'beach-villa',
      name: 'Beach Villa with Pool',
      size: '103 sqm',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1533284612030-82FMW3ZFNZ6TYYNDU7QN/bv2.jpg?format=2500w',
      capacity: '2 Adults + 1 Child',
      description: 'Located directly on the beach, these villas feature a private pool and a large outdoor bathroom with a bathtub and rain shower.'
    },
    {
      id: 'ocean-villa',
      name: 'Ocean Villa with Pool',
      size: '108 sqm',
      image: 'https://picsum.photos/seed/ocean/800/600',
      capacity: '2 Adults',
      description: 'Perched over the turquoise lagoon, these villas offer direct access to the ocean and a private infinity pool on the deck.'
    }
  ],
  dining_venues: [
    {
      id: 'magu',
      name: 'Magu',
      image: 'https://picsum.photos/seed/magu/800/600',
      cuisine: 'International Buffet',
      highlights: ['Live Cooking Stations', 'Themed Nights', 'Beachfront Dining'],
      description: 'The main restaurant offering a lavish buffet for breakfast and dinner with a different theme every night.'
    },
    {
      id: 'ocean-breeze',
      name: 'Ocean Breeze',
      image: 'https://picsum.photos/seed/breeze/800/600',
      cuisine: 'Modern European',
      highlights: ['Overwater Setting', 'Sunset Views', 'Fine Dining'],
      description: 'An elegant overwater restaurant and bar offering a sophisticated dining experience with stunning views.'
    },
    {
      id: 'kai',
      name: 'Kai',
      image: 'https://picsum.photos/seed/kai/800/600',
      cuisine: 'Far East Asian',
      highlights: ['Sushi Bar', 'Teppanyaki', 'Tropical Setting'],
      description: 'Experience the flavors of the Far East in a beautiful tropical setting.'
    }
  ],
  activities: [
    {
      id: 'house-reef-snorkeling',
      name: 'Private House Reef Snorkeling',
      category: 'Nature',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1601714583995-SYJVM31NQE8929Y5KTLH/_AGU1570.jpg?format=2500w',
      description: 'The house reef is one of the best in the country. Let the resort guides take you to explore its beauty.',
      details: ['1 Hour duration', '1 guide for 2 guests', 'Equipment provided'],
      duration: '1 Hour',
      priceRange: '$75/pp'
    },
    {
      id: 'sunset-fishing',
      name: 'Fishing at Sunset',
      category: 'Excursion',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1601808385538-AEBKLIAW1W2ZH1N37A5H/sunset+cruise.jpg?format=2500w',
      description: 'Take a traditional Maldivian wooden boat and try your hand at traditional Maldivian fishing as we set sail before sunset. If you’re lucky, our chef will prepare your catch for you tomorrow.',
      details: ['2 Hours duration', 'Traditional Dhoni boat', 'Catch preparation available'],
      duration: '2 Hours',
      priceRange: '$75/pp'
    },
    {
      id: 'glass-bottom-boat',
      name: 'Glass-Bottomed Boat Tour',
      category: 'Excursion',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1601713523097-QXXY418CTTSPK9KTM7J0/image-asset.jpeg?format=2500w',
      description: 'See the sights of the undersea world from the breezy comfort of the resort\'s glass bottomed boat as they take you for a drive above the beautiful coral reefs.',
      details: ['1 Hour duration', 'Max 6 persons', 'Perfect for non-swimmers'],
      duration: '1 Hour',
      priceRange: '$120'
    },
    {
      id: 'deserted-island-picnic',
      name: 'Deserted Island Picnic',
      category: 'Excursion',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1601713728638-FF1S7ZURZJCGA6MGI603/_GPX0011.jpg?format=2500w',
      description: 'Let the resort team take you to a nearby deserted island for a romantic Robinson Crusoe experience you’ll treasure forever.',
      details: ['3 Hours duration', 'Gourmet picnic included', 'Private experience'],
      duration: '3 Hours',
      priceRange: '$550'
    },
    {
      id: 'local-island-visit',
      name: 'Local Island Visit',
      category: 'Excursion',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1601713941054-69BK6P8PZIRV762Q5LM6/DJI_0984.jpg?format=2500w',
      description: 'See what life is like on a real Maldivian island. This adventure starts at a traditional local village where you can immerse yourself in the local community.',
      details: ['Cultural experience', 'Fresh coconut included', 'Guided tour'],
      duration: 'Half Day'
    },
    {
      id: 'sandbank-experience',
      name: 'Sandbank Experience',
      category: 'Excursion',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1601714727123-OXVD7H3NXL21AQGODF7U/DSC03065.jpg?format=2500w',
      description: 'Enjoy either a picnic or dinner experience on a nearby Sandbank. Relax and enjoy unspoilt natural beauty being alone on a tiny island.',
      details: ['2.5 Hours duration', 'Picnic or Dinner', 'Unspoilt beauty'],
      duration: '2.5 Hours',
      priceRange: '$550'
    },
    {
      id: 'island-safari',
      name: 'Island Safari',
      category: 'Nature',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1601714315629-6LKZE9RIH7NK4SAV9164/Dhoni_Island.jpg?format=2500w',
      description: 'Find out for yourself why the resort has a worldwide reputation for amazing coral reefs as they take you snorkeling to two of their favorite sites.',
      details: ['2 locations', 'Guided snorkeling', 'Equipment included'],
      duration: '3 Hours',
      priceRange: '$150/pp'
    },
    {
      id: 'dolphin-spotting',
      name: 'Dolphin Spotting Trip',
      category: 'Excursion',
      image: 'https://images.squarespace-cdn.com/content/v1/5b4f0c8d89c17294e53d4ffc/1601808417964-SQYUCZG8T4MF5I2I1R5F/dolphins.jpg?format=2500w',
      description: 'The resort team heads out to join their neighbors in the ocean, the spinner dolphins to see them play and leap.',
      details: ['2 Hours duration', 'High sighting rate', 'Refreshments included'],
      duration: '2 Hours',
      priceRange: '$99/pp'
    }
  ],
  spa_treatments: [
    {
      id: 'turkish-hammam',
      name: 'Authentic Turkish Hammam',
      category: 'Wellness',
      duration: '60 / 90 mins',
      description: 'A traditional cleansing ritual that leaves your skin soft and your mind at peace.',
      benefits: ['Deep cleansing', 'Improved circulation', 'Total relaxation'],
      image: 'https://picsum.photos/seed/spa1/800/600'
    },
    {
      id: 'maldivian-massage',
      name: 'Signature Maldivian Massage',
      category: 'Massage',
      duration: '60 / 90 mins',
      description: 'Using local coconut oil and traditional techniques to soothe tired muscles.',
      benefits: ['Muscle relief', 'Hydrating', 'Stress reduction'],
      image: 'https://picsum.photos/seed/spa2/800/600'
    }
  ],
  wedding_packages: [
    {
      id: 'beach-wedding',
      name: 'Barefoot Beach Wedding',
      description: 'A romantic ceremony on the white sandy shores under a floral canopy.',
      inclusions: ['Ceremony coordinator', 'Floral decorations', 'Champagne toast', 'Traditional Bodu Beru drummers'],
      image: 'https://picsum.photos/seed/wedding1/800/600'
    }
  ]
};
