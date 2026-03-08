
import { Destination, BlogPost, GalleryImage } from './types';

export const COMPANY_NAME = "Wildsync Adventures";
export const COMPANY_TAGLINE = "Sync Your Soul with the Untamed";
export const PHONE_NUMBER = "+254 701 513 729";
// Updated email as requested. Can be changed back later.
export const EMAIL_ADDRESS = "alphonceochieng01@gmail.com"; 
export const LOCATION = "Kiambu Road, Nairobi, Kenya";

export const DESTINATIONS: Destination[] = [
  {
    id: 'mt-kenya',
    title: 'Mt. Kenya Expeditions',
    category: 'hiking',
    description: 'Conquer the second highest peak in Africa via the scenic Sirimon to Chogoria route.',
    image: 'https://images.unsplash.com/photo-1589553416260-f586c8f1514f?q=80&w=2070&auto=format&fit=crop',
    location: 'Central Kenya',
    highlights: ['Lake Michaelson', 'Lenana Peak', 'Unique Flora']
  },
  {
    id: 'longonot',
    title: 'Mt. Longonot Crater',
    category: 'hiking',
    description: 'A challenging hike around the rim of a dormant volcano with breathtaking Rift Valley views.',
    image: 'https://images.unsplash.com/photo-1517822949749-d7b420286829?q=80&w=2069&auto=format&fit=crop',
    location: 'Rift Valley',
    highlights: ['Crater Walk', 'Geothermal Steam', 'Wildlife Spotting']
  },
  {
    id: 'chyulu',
    title: 'The Chyulu Hills',
    category: 'hiking',
    description: 'Known as the "Green Hills of Africa", offering endless rolling volcanic landscapes.',
    image: 'https://images.unsplash.com/photo-1547997632-68b2dc168696?q=80&w=2070&auto=format&fit=crop',
    location: 'Makueni/Kajiado',
    highlights: ['Cave Exploration', 'Verdant Landscapes', 'Seclusion']
  },
  {
    id: 'karuru',
    title: 'Karuru Falls',
    category: 'water',
    description: 'Witness the power of Kenya’s tallest waterfall nestled deep within the Aberdares.',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?q=80&w=2070&auto=format&fit=crop',
    location: 'Aberdare National Park',
    highlights: ['273m Drop', 'Dense Forest', 'Bongo Antelopes']
  },
  {
    id: 'zaina',
    title: 'Zaina Falls',
    category: 'water',
    description: 'A hidden gem in Nyeri. A serene and less crowded hiking trail leads to this beauty.',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2070&auto=format&fit=crop',
    location: 'Nyeri',
    highlights: ['Off-the-beaten-path', 'Nature Walk', 'Serenity']
  },
  {
    id: 'thompsons',
    title: "Thompson's Falls",
    category: 'water',
    description: "A stunning 74-meter waterfall on the Ewaso Ng'iro river, a classic scenic stop.",
    image: 'https://images.unsplash.com/photo-1570700002932-a52d37c35e38?q=80&w=2070&auto=format&fit=crop',
    location: 'Nyahururu',
    highlights: ['Scenic Viewpoint', 'Hippo Pool', 'History']
  },
  {
    id: 'lord-egerton',
    title: 'Lord Egerton Castle',
    category: 'heritage',
    description: 'A monument to unrequited love. Explore this 53-room architectural marvel.',
    image: 'https://images.unsplash.com/photo-1599665668987-99d799f2b80b?q=80&w=2069&auto=format&fit=crop',
    location: 'Nakuru',
    highlights: ['Edwardian Architecture', 'Photography', 'Historic Tales']
  },
  {
    id: 'fort-jesus',
    title: 'Fort Jesus',
    category: 'heritage',
    description: 'Built by the Portuguese in 1593, this UNESCO World Heritage site stands as a testament to the turbulent history of the Swahili Coast.',
    image: 'https://images.unsplash.com/photo-1580910543632-46c59b207524?q=80&w=2070&auto=format&fit=crop',
    location: 'Mombasa Old Town',
    highlights: ['UNESCO Site', 'Omani Architecture', 'Museum', 'Torture Chambers']
  },
  {
    id: 'lamu-old-town',
    title: 'Lamu Old Town',
    category: 'heritage',
    description: 'The oldest and best-preserved Swahili settlement in East Africa. No cars, just donkeys and dhows.',
    image: 'https://images.unsplash.com/photo-1584954848341-356a68285521?q=80&w=2070&auto=format&fit=crop',
    location: 'Lamu',
    highlights: ['Swahili Architecture', 'Donkey Rides', 'Carved Doors', 'Dhow Sailing']
  },
  {
    id: 'tafaria',
    title: 'Tafaria Castle',
    category: 'heritage',
    description: 'A medieval escape in the Kenyan highlands. Art, history, and luxury combined.',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop',
    location: 'Nyeri',
    highlights: ['Art Gallery', 'Horse Riding', 'Medieval Vibe']
  },
  {
    id: 'the-ark',
    title: 'The Ark Lodge',
    category: 'heritage',
    description: 'A unique boat-shaped lodge deep in the Aberdares overlooking a floodlit waterhole.',
    image: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071&auto=format&fit=crop',
    location: 'Aberdare National Park',
    highlights: ['Night Game Viewing', 'Bongo Antelopes', 'Unique Architecture']
  },
  {
    id: 'masai-mara',
    title: 'Masai Mara Safari',
    category: 'safari',
    description: 'The world-famous arena for the Great Migration and the Big Five.',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop',
    location: 'Narok',
    highlights: ['Great Migration', 'Big Five', 'Luxury Camps']
  },
  {
    id: 'ol-pejeta',
    title: 'Ol Pejeta Conservancy',
    category: 'safari',
    description: 'Home to the last Northern White Rhinos and the Sweetwaters Chimpanzee Sanctuary.',
    image: 'https://images.unsplash.com/photo-1577114995803-d8d941263d9d?q=80&w=2070&auto=format&fit=crop',
    location: 'Laikipia',
    highlights: ['White Rhinos', 'Chimpanzees', 'Big Five']
  },
  {
    id: 'samburu',
    title: 'Samburu National Reserve',
    category: 'safari',
    description: 'Home to the Special Five unique species in a rugged, semi-arid landscape.',
    image: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?q=80&w=2071&auto=format&fit=crop',
    location: 'Samburu',
    highlights: ['Special Five', 'Ewaso Ng\'iro River', 'Cultural Visits']
  },
  {
    id: 'giraffe-centre',
    title: 'Giraffe Centre',
    category: 'safari',
    description: 'Get up close and personal with the endangered Rothschild giraffes in Nairobi.',
    image: 'https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=1974&auto=format&fit=crop',
    location: 'Nairobi',
    highlights: ['Feeding Giraffes', 'Conservation Education', 'Nature Trail']
  },
  {
    id: 'the-majlis',
    title: 'The Majlis Resort',
    category: 'coastal',
    description: 'A privately owned beach hotel on Manda Island, offering world-class luxury and Swahili style.',
    image: 'https://images.unsplash.com/photo-1540541338287-417002060d05?q=80&w=2074&auto=format&fit=crop',
    location: 'Lamu (Manda Island)',
    highlights: ['5-Star Luxury', 'Private Beach', 'Swahili Architecture']
  },
  {
    id: 'vipingo-ridge',
    title: 'Vipingo Ridge',
    category: 'coastal',
    description: 'An exclusive residential and golf estate set on the breezy hills of the coast.',
    image: 'https://images.unsplash.com/photo-1563806294-d459ec7e24a7?q=80&w=2069&auto=format&fit=crop',
    location: 'Kilifi',
    highlights: ['PGA Golf Course', 'Private Beach Club', 'Luxury Villas']
  },
  {
    id: 'hemingways-watamu',
    title: 'Hemingways Watamu',
    category: 'coastal',
    description: 'An iconic tropical paradise located in the middle of the pristine Watamu Marine National Park.',
    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2025&auto=format&fit=crop',
    location: 'Watamu',
    highlights: ['Marine Park', 'Deep Sea Fishing', 'Ocean Views']
  },
  {
    id: 'english-point',
    title: 'English Point Marina',
    category: 'coastal',
    description: 'Contemporary luxury with a spectacular view of the Mombasa Old Town skyline.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop',
    location: 'Mombasa',
    highlights: ['Modern Marina', 'Infinity Pool', 'City Views']
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'The Silent History of Lord Egerton’s Castle',
    excerpt: 'Beyond the stone walls lies a story of heartbreak and solitude. Discover why this 53-room castle was built for a woman who never arrived.',
    content: 'Full article content would go here...',
    author: 'Alphonce Ochieng',
    date: 'Oct 12, 2023',
    image: 'https://images.unsplash.com/photo-1599665668987-99d799f2b80b?q=80&w=2069',
    category: 'Heritage'
  },
  {
    id: '2',
    title: 'Packing for the Aberdares: A Complete Guide',
    excerpt: 'The Aberdare Range is unforgiving. Here is what you need to survive the cold, the mud, and the altitude while chasing waterfalls.',
    content: 'Full article content would go here...',
    author: 'Wildsync Team',
    date: 'Nov 05, 2023',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070',
    category: 'Tips'
  },
  {
    id: '3',
    title: 'Why the Chyulu Hills are the "Green Hills of Africa"',
    excerpt: 'Hemingway loved them, and you will too. Explore the youngest volcanic range in Africa, where the views stretch to Kilimanjaro.',
    content: 'Full article content would go here...',
    author: 'Alphonce Ochieng',
    date: 'Dec 15, 2023',
    image: 'https://images.unsplash.com/photo-1547997632-68b2dc168696?q=80&w=2070',
    category: 'Destinations'
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072', caption: 'Sunrise over Mara', category: 'wildlife' },
  { id: '2', url: 'https://images.unsplash.com/photo-1518709414768-a8c981a45e5d?q=80&w=2070', caption: 'Aberdare Waterfall', category: 'landscape' },
  { id: '3', url: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?q=80&w=2071', caption: 'Roaming the Plains', category: 'wildlife' },
  { id: '4', url: 'https://images.unsplash.com/photo-1534234828569-16d1d2d8e921?q=80&w=2070', caption: 'Tafaria Architecture', category: 'heritage' },
  { id: '5', url: 'https://images.unsplash.com/photo-1621539659325-a131804d03da?q=80&w=1964', caption: 'Hikers on Elephant Hill', category: 'people' },
  { id: '6', url: 'https://images.unsplash.com/photo-1519095612405-d2d88559669a?q=80&w=2070', caption: 'Zebras in Samburu', category: 'wildlife' },
];

export const SYSTEM_INSTRUCTION = `
You are the "Wildsync AI Concierge", an expert travel consultant for Wildsync Adventures, a high-end touring company based on Kiambu Road, Nairobi.
Your tone is elegant, knowledgeable, slightly adventurous, and welcoming.

Company Details:
- Phone: ${PHONE_NUMBER}
- Email: ${EMAIL_ADDRESS}
- Location: ${LOCATION}
- Vibe: "Raw Elegance", high-end, curated, rugged but comfortable.

You have deep knowledge of the following destinations:
1. Hiking: Mt. Kenya (Sirimon-Chogoria), Mt. Longonot (Crater), Chyulu Hills (Green Hills), Elephant Hill (Aberdares), Sleeping Warrior.
2. Waterfalls/Lakes: Karuru Falls (Tallest), Zaina Falls (Hidden), Thompson's Falls, Lake Turkana (Jade Sea), Lake Nakuru.
3. Heritage/Castles: Lord Egerton Castle (Nakuru, unrequited love story), Tafaria Castle (Medieval art escape), The Ark (Aberdares), Fort Jesus (Mombasa), Lamu Old Town.
4. Safari: Masai Mara (Migration), Samburu (Special Five), Ol Pejeta (Chimps & Rhinos), Giraffe Centre.
5. Coastal/Luxury: The Majlis (Lamu), Vipingo Ridge (Kilifi), Hemingways Watamu, English Point Marina (Mombasa).

Guidelines:
- If a user asks for a trip, recommend specific Wildsync packages based on the list above.
- Emphasize the "experience" (emotions, sights, smells) over just logistics.
- Always encourage them to use the "Plan Your Trip" form or contact via WhatsApp for booking.
- Keep responses concise (under 150 words) but evocative.
`;
