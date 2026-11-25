/**
 * In-room dining menu — the in-room menu's own items, prices and order,
 * taken from Room_compressed.pdf (misspellings corrected). Many curries and
 * Tandoori Murgh come in Full / Half portions here.
 * Item and section shapes: see menuBuilders.js.
 */

import { prefixIds } from '../lib/menu.js'
import { photo } from '../lib/photos.js'
import { choice, dish, drink, drinkChoice, fullHalf, pcs, vegNonVeg, versions, wok } from './menuBuilders.js'

export const ROOMS = {
  pageTitle: 'SILK INN Malda — In-Room Dining',
  badge: 'In-Room',
  tagline: 'Served to Your Room',
  intro: {
    eyebrow: 'In-Room Dining',
    title: 'Dine in Your Room',
    description:
      'Whichever meal you choose, our executive chef has created unique culinary offerings for all guests of the Silk Inn to enjoy throughout the hotel, so relax and take in one of the most exciting dining experiences in the city.',
    image: photo('room-service'),
    alt: 'Room service tray',
  },
  /** Shown on its own line, on the in-room menu only. Menu prices are before GST. */
  gst: '5% GST applicable',
  notice: 'Leftover food parcels are charged extra · Ordered items cannot be cancelled.',
  empty: {
    icon: 'room_service',
    title: 'No items found',
    message: 'No in-room dining dishes match this filter.',
  },
}

/** Room dish ids start with "room-" so dish page URLs never clash with other menus. */
export const ROOMS_MENU = prefixIds('room', [
  // Page 2 — Breakfast Favourites
  {
    id: 'breakfast',
    label: 'Breakfast',
    title: 'Breakfast Favourites',
    note: '07:30 – 10:30 hrs',
    items: [
      dish('farm-fresh-eggs', 'Farm Fresh Eggs', 'other', 90, {
        description: 'Poached, fried, scrambled or boiled.',
      }),
      dish('omelette', 'Omelette', 'other', 90, { description: 'Plain or masala.' }),
      dish('bread-butter-jam', 'Bread', 'veg', 100, {
        description: 'Plain or toasted, served with butter & jam.',
      }),
      choice('veg-sandwich', 'Veg Sandwich', 'veg', versions(['Plain', 130], ['Grilled', 165])),
      choice('veg-cheese-sandwich', 'Veg & Cheese Sandwich', 'veg', versions(['Plain', 200], ['Grilled', 220])),
      choice('chicken-sandwich', 'Chicken Sandwich', 'nonveg', versions(['Plain', 210], ['Grilled', 230])),
      choice(
        'chicken-cheese-sandwich',
        'Chicken & Cheese Sandwich',
        'nonveg',
        versions(['Plain', 240], ['Grilled', 265]),
      ),
      choice('paratha', 'Aloo / Paneer Paratha', 'veg', versions(['Aloo', 150], ['Paneer', 180]), {
        description: 'Served with natural yogurt & pickle.',
        highlight: pcs(2),
      }),
      dish('poori-bhaji', 'Poori Bhaji', 'veg', 120, {
        description: 'Deep-fried whole wheat breads, home style, served with bhaji.',
        highlight: pcs(4),
      }),
      dish('idly-vada', 'Idly / Vada', 'veg', 110, { highlight: pcs(3) }),
      dish('upma', 'Upma', 'veg', 110),
      dish('poha', 'Poha', 'veg', 110),
      choice('uttapam', 'Uttapam', 'veg', versions(['Plain', 130], ['Masala', 150]), {
        highlight: pcs(2),
      }),
      drink('breakfast-tea', 'Selection of Tea', 55, { description: 'Regular, masala or green.' }),
      drink('breakfast-coffee', 'Coffee', 70),
    ],
  },

  // Page 3 — Cocoon's Favourites
  {
    id: 'salads',
    label: 'Salads',
    eyebrow: "Cocoon's Favourites",
    title: 'Salads & Condiments',
    note: '12:30 – 22:30 hrs',
    items: [
      dish('green-salad', 'Green Salad', 'veg', 75, {
        description: 'Garden-fresh green vegetable salad.',
      }),
      dish('kachumber-salad', 'Kachumber Salad', 'veg', 80, {
        description: 'Cubes of salad vegetables tossed with Indian herbs & spices.',
      }),
      dish('plain-curd', 'Plain Curd', 'veg', 70),
      choice('raita', 'Raita', 'veg', versions(['Plain', 80], ['Mixed', 90])),
      choice('roasted-papad', 'Roasted Papad', 'veg', versions(['Plain', 60], ['Masala', 90])),
    ],
  },
  {
    id: 'soups',
    label: 'Soups',
    eyebrow: "Cocoon's Favourites",
    title: 'Soups',
    items: [
      choice('hot-sour-soup', 'Hot & Sour Soup', null, vegNonVeg(160, 180)),
      choice('manchow-soup', 'Manchow Soup', null, vegNonVeg(160, 180)),
      choice('sweet-corn-soup', 'Sweet Corn Soup', null, vegNonVeg(160, 180)),
      choice('lemon-coriander-soup', 'Lemon Coriander Soup', null, vegNonVeg(160, 180)),
      choice('clear-soup', 'Clear Soup', null, vegNonVeg(160, 180)),
    ],
  },
  {
    id: 'beverages',
    label: 'Beverages',
    eyebrow: "Cocoon's Favourites",
    title: 'Thirst Quenchers',
    items: [
      drink('tea', 'Selection of Tea', 55, { description: 'Regular, Darjeeling or green.' }),
      drink('coffee', 'Selection of Coffee', 70, { description: 'Regular or black.' }),
      drinkChoice('cold-coffee', 'Cold Coffee', versions(['With Ice Cream', 190], ['Without Ice Cream', 160])),
      drink('coolants', 'Coolants', 75, { description: 'Coca-Cola, Sprite, Limka.' }),
      drink('fresh-lime-soda', 'Fresh Lime Soda / Masala Cold Drinks', 75),
      drink('lassi', 'Lassi', 90, { description: 'Yogurt-based drink — plain, sweet, salted or flavoured.' }),
      drink('blossom', 'Blossom', 170, { description: 'Orange or pineapple.' }),
      drink('virgin-mojito', 'Virgin Mojito', 150, { description: 'Regular mint, watermelon or cucumber.' }),
      drink('blue-lagoon', 'Deep Blue Sea / Blue Lagoon', 150),
      drink('ice-spice', 'Ice-Spice', 150),
      drink('tropical-delight', 'Tropical Delight', 150),
      drink('virgin-pina-colada', 'Virgin Pina Colada', 150, {
        description: 'Ice cream blended with juice and coconut.',
      }),
      drink('drinking-water', 'Packaged Drinking Water', 30, { description: '1 litre.', note: 'MRP + EC' }),
    ],
  },

  // Page 4 — Continental Menu
  {
    id: 'conti-soup',
    label: 'Conti Soup',
    eyebrow: 'Continental Menu',
    title: 'Soup',
    items: [
      choice('cream-of-mushroom', 'Cream of Mushroom / Chicken', null, vegNonVeg(160, 180, ['Mushroom', 'Chicken'])),
      dish('cream-of-tomato', 'Cream of Tomato Soup with Croutons', 'veg', 160),
    ],
  },
  {
    id: 'conti-salad',
    label: 'Conti Salad',
    eyebrow: 'Continental Menu',
    title: 'Salad',
    items: [dish('chicken-hawaiian-salad', 'Chicken Hawaiian Salad', 'nonveg', 250)],
  },
  {
    id: 'munching',
    label: 'Munching',
    eyebrow: 'Continental Menu',
    title: 'Munching',
    items: [
      choice('tacos', 'Tacos with Chef Special Sauce', null, vegNonVeg(270, 290)),
    ],
  },
  {
    id: 'starter',
    label: 'Starter',
    eyebrow: 'Continental Menu',
    title: 'Starter',
    items: [
      dish('baked-veg-au-gratin', 'Baked Veg Au-Gratin', 'veg', 290),
      dish('cheese-ball', 'Cheese Ball with Chef Special Dip', 'veg', 380),
      choice('sauteed-exotic', 'Sautéed Exotic Vegetable / Chicken', null, vegNonVeg(270, 310, ['Vegetable', 'Chicken'])),
      choice(
        'shashlik',
        'Cottage Cheese / Chicken Shashlik with Teriyaki Sauce',
        null,
        vegNonVeg(370, 370, ['Cottage Cheese', 'Chicken']),
        {
        },
      ),
      choice(
        'popcorn',
        'Cottage Cheese / Chicken Popcorn with Chef Special Sauce',
        null,
        vegNonVeg(370, 370, ['Cottage Cheese', 'Chicken']),
        {
        },
      ),
      dish('chicken-roulade', 'Cheese Chicken Roulade with Cheese White Sauce', 'nonveg', 410),
    ],
  },
  {
    id: 'pasta',
    label: 'Pasta',
    eyebrow: 'Continental Menu',
    title: 'Pasta on Choice',
    note: 'Veg / Non-Veg',
    items: [
      choice('spaghetti-carbonara', 'Spaghetti alla Carbonara', null, vegNonVeg(290, 290), {
        size: 'md',
      }),
      choice('penne-al-funghi', 'Penne al Funghi', null, vegNonVeg(350, 370), { size: 'md' }),
      choice('penne-arrabbiata', 'Penne Arrabbiata', null, vegNonVeg(350, 370), {
        size: 'md',
      }),
      choice('mixed-sauce-pasta', 'Choice of Mixed Sauce Pasta', null, vegNonVeg(350, 370), { size: 'md' }),
    ],
  },
  {
    id: 'continental-mains',
    label: 'Conti Mains',
    eyebrow: 'Continental Menu',
    title: 'Pre-Plated Conti Main-Course',
    style: 'Pre-Plated',
    items: [
      {
        id: 'grilled-chicken-steak',
        variant: 'featured',
        diet: 'nonveg',
        name: 'Grilled Chicken Steak with Espagnole Sauce',
        price: 450,
      },
      {
        id: 'chicken-stroganoff',
        variant: 'compact',
        diet: 'nonveg',
        name: 'Chicken Stroganoff with Pilaf Rice',
        price: 450,
      },
      {
        id: 'grilled-fish-steak',
        variant: 'featured',
        diet: 'nonveg',
        name: 'Grilled Fish Steak with Lemon Butter Sauce',
        price: 520,
      },
    ],
  },
  {
    id: 'conti-dessert',
    label: 'Conti Dessert',
    eyebrow: 'Continental Menu',
    title: 'Dessert',
    items: [
      dish('tiramisu', 'McVities & Honey Italian Tiramisu', 'veg', 200),
      dish('orange-mango-mousse', 'Orange / Mango Mousse', 'veg', 200),
    ],
  },

  // Page 5 — Appetizers from the clay oven: vegetable, then non-veg
  {
    id: 'appetizers',
    label: 'Appetizers',
    eyebrow: 'From Clay Oven',
    title: 'Appetizers',
    style: 'Clay Oven',
    items: [
      dish('paneer-achari-tikka', 'Paneer Achari Tikka', 'veg', 310, {
        description: 'Cottage cheese marinated in Indian spices, cooked in tandoor.',
      }),
      dish('lasooni-paneer-tikka', 'Lasooni Paneer Tikka', 'veg', 320),
      dish('cheese-chilli-paneer-tikka', 'Cheese Chilli Paneer Tikka', 'veg', 350, {
        description: 'Paneer marinated with chilli and cottage cheese, cooked in tandoor.',
      }),
      dish('hara-bhara-kebab', 'Hara Bhara Kebab', 'veg', 230, { description: 'Smashed green veggies with Indian spices.' }),
      dish('atishi-kebab', 'Atishi Kebab', 'veg', 210, {
        description: 'Baby potatoes seasoned and spiced tangy, cooked in tandoor, served hot with mint chutney & salad.',
      }),
      dish('irani-fish-kebab', 'Irani Fish Kebab', 'nonveg', 390, {
        description:
          'Fish chunks marinated in a mouthwatering combination of yogurt & cheese, cooked to perfection in tandoor.',
      }),
      dish('fish-tikka', 'Amritsari / Ajwaini / Banjara Fish Tikka', 'nonveg', 390, {
        description:
          "Boneless fish marinated with yogurt and chef's special spices, cooked in tandoor, served with mint chutney & salad.",
      }),
      dish('murgh-tikka', 'Murgh Tikka', 'nonveg', 310, {
        description:
          'Boneless chicken marinated overnight in hung curd with cashewnut paste and spices, cooked in tandoor.',
      }),
      dish('murgh-malai-kebab', 'Murgh Reshmi / Malai Kebab', 'nonveg', 330, {
        description:
          "Boneless chicken marinated overnight with yogurt, cheese (malai) or cream (reshmi), cashewnut paste and chef's special spices.",
      }),
      dish('tangri-kebab', 'Tangri Kebab', 'nonveg', 350, {
        description:
          'Chicken drumsticks marinated overnight in hung curd, ginger & garlic paste and tandoori spices, finished in clay oven.',
      }),
      dish('lasooni-murgh-tikka', 'Lasooni Murgh Tikka', 'nonveg', 330, {
        description: 'Chunks of chicken marinated in cashewnut paste and garlic with aromatic yogurt.',
      }),
      {
        id: 'tandoori-murgh',
        variant: 'featured',
        size: 'md',
        diet: 'nonveg',
        name: 'Tandoori Murgh',
        options: fullHalf(550, 300),
        description: 'The king of kebabs.',
        badge: { label: "Chef's Special", tone: 'accent' },
      },
      dish('mutton-seekh-kebab', 'Mutton Seekh Kebab', 'nonveg', 410, {
        description:
          "A Mughlai delicacy: mildly spiced minced mutton blended with chef's special spices & onion, skewered and cooked till succulent.",
      }),
      dish('mutton-boti-kebab', 'Mutton Boti Kebab', 'nonveg', 410, {
        description: 'Marinated in spiced yogurt and Indian spices, cooked in tandoor.',
      }),
      choice('kebab-platter', 'Silk Inn Special Kebab Platter', null, vegNonVeg(650, 799)),
      dish('tandoori-pomfret', 'Tandoori Pomfret', 'nonveg', 470),
      dish('tandoori-jhinga', 'Tandoori Jhinga', 'nonveg', 490),
    ],
  },

  // Page 6 — From the Wok (Chinese): vegetable, then non-veg
  {
    id: 'chinese',
    label: 'Chinese',
    eyebrow: 'From the Wok',
    title: 'Chinese',
    style: 'Wok Tossed',
    items: [
      dish('paneer-65', 'Paneer 65', 'veg', 310, {
        description: "Batter-fried cottage cheese tossed with curry leaves, red chilli and chef's special spices.",
      }),
      dish('chilli-paneer-dry', 'Chilli Paneer Dry', 'veg', 310, {
        description: 'Stir-fried cottage cheese and capsicum in chilli soya sauce and oriental spices.',
      }),
      dish('crispy-chilli-baby-corn', 'Crispy Chilli Baby Corn', 'veg', 270, {
        description: 'Crispy fried baby corn tossed in Schezwan chilli sauce, served hot.',
      }),
      dish('mushroom-corn-salt-pepper', 'Mushroom & Corn Salt & Pepper', 'veg', 310, {
        description: 'American corn & mushroom fried crispy, tossed with onion & chilli flakes.',
      }),
      dish('veg-dumplings', 'Veg Dumplings', 'veg', 210, {
        description: 'Stuffed with different veggies, wrapped in a thin layer of dough.',
      }),
      dish('french-fry', 'Basket of French Fry', 'veg', 190),
      dish('nonveg-dumplings', 'Non-Veg Dumplings', 'nonveg', 270, {
        description: 'Stuffed with chicken and different veggies, wrapped in a thin layer of dough.',
      }),
      dish('chilli-fish', 'Chilli Fish / Pan Fried Chilli Fish Dry', 'nonveg', 370, {
        description: 'Stir-fried fish with onion and capsicum tossed in chilli soya sauce.',
      }),
      dish('fish-finger', 'Fish Finger', 'nonveg', 350),
      dish('chilli-chicken-dry', 'Chilli Chicken Dry', 'nonveg', 295),
      dish('chicken-salt-pepper', 'Chicken Salt & Pepper', 'nonveg', 295, { description: 'An all-time favourite.' }),
      dish('crispy-honey-chicken', 'Crispy Fried Honey Chicken', 'nonveg', 310, {
        description: 'Juliennes of chicken, fried crispy, tossed in Chinese sauce and drizzled with honey.',
      }),
      dish('chicken-lollipop', 'Chicken Lollipop / Drums of Heaven', 'nonveg', 295),
      dish('korean-chicken-wings', 'Korean Chicken Wings', 'nonveg', 295),
      dish('kung-pao-chicken', 'Kung Pao Chicken', 'nonveg', 295, {
        description: 'A combination of savoury & sweet with a mild spicy kick of nuts.',
      }),
      dish('chicken-65', 'Chicken 65', 'nonveg', 295),
      dish('chilli-prawn-dry', 'Pan Fried Chilli Prawn Dry', 'nonveg', 470),
      dish('golden-fried-prawn', 'Golden Fried Prawn', 'nonveg', 470, {
        description: 'Prawns seasoned and coated in batter, fried crispy.',
      }),
      dish('double-cooked-lamb', 'Double Cooked Lamb', 'nonveg', 410),
    ],
  },

  // Page 7 — Indian Main-Course: Vegetable
  {
    id: 'indian-veg',
    label: 'Indian Veg',
    eyebrow: 'Indian Main-Course',
    title: 'Vegetable',
    items: [
      choice('paneer-butter-masala', 'Paneer Butter Masala', 'veg', fullHalf(320, 190), {
        description: 'Cubes of paneer cooked in rich, creamy cashewnut & tomato gravy.',
      }),
      choice('kadhai-paneer', 'Kadhai Paneer / Do-Payaza', 'veg', fullHalf(320, 190), {
        description:
          'Paneer fingers with julienned capsicum cooked in onion tomato masala, aromatic with crushed coriander & chilli flakes.',
      }),
      choice('shahi-paneer', 'Shahi Paneer', 'veg', fullHalf(330, 200), {
        description: 'Paneer cubes cooked in a buttery almond & cashewnut base.',
      }),
      choice('palak-paneer', 'Palak Paneer', 'veg', fullHalf(320, 190), {
        description: 'Cubes of paneer cooked in creamy spinach gravy.',
      }),
      dish('malai-kofta', 'Malai Kofta / Navaratan Korma', 'veg', 340, {
        description:
          "Paneer dumplings seasoned with chef's special spices, fried and simmered in rich, creamy almond & cashewnut gravy.",
        highlight: pcs(4),
      }),
      choice('mushroom-babycorn-masala', 'Mushroom Babycorn Masala', 'veg', fullHalf(340, 190), {
        description: 'Baby corn and mushroom cooked in tangy onion & tomato masala.',
      }),
      choice('veg-jhal-frezi', 'Veg Jhal Frezi / Jaipuri', 'veg', fullHalf(220, 140), {
        description:
          'Baton-shaped vegetables with capsicum & onion tossed in spicy onion tomato masala, with roasted cumin & vinegar.',
      }),
      dish('aloo-jeera', 'Aloo Jeera', 'veg', 200, {
        description: 'Roasted potatoes cooked with ground and roasted cumin.',
      }),
      choice('dum-aloo', 'Dum Aloo Kashmiri / Punjabi', 'veg', fullHalf(240, 150), {
        description: 'Golden fried potatoes simmered in a gravy of yogurt & brown onion.',
      }),
      choice('dal-tadkewali', 'Dal Tadkewali', 'veg', fullHalf(210, 130), {
        description: 'Yellow dal tempered with cumin, garlic & red chilli, finished with coriander leaf.',
      }),
      choice('yellow-dal-fry', 'Yellow Dal Fry', 'veg', fullHalf(210, 130)),
      choice('dal-makhani', 'Dal Makhani', 'veg', fullHalf(270, 160), {
        description: 'Slow-cooked black lentils with cream, butter and spices.',
      }),
    ],
  },

  // Page 8 — Indian Non-Veg
  {
    id: 'indian-nonveg',
    label: 'Indian Non-Veg',
    eyebrow: 'Indian Main-Course',
    title: 'Non-Veg',
    items: [
      choice('fish-tikka-masala', 'Fish Tikka Masala', 'nonveg', fullHalf(390, 230), {
        description: 'Boneless fish fried & cooked in tomato & onion gravy.',
      }),
      choice('home-style-chicken-curry', 'Home Style Chicken Curry', 'nonveg', fullHalf(300, 180), {
        description: 'Chicken on the bone cooked in a thin onion tomato gravy with potato, Bengali style.',
      }),
      dish('chicken-chettinad', 'Chicken Chettinad', 'nonveg', 330),
      dish('hyderabadi-chicken-masala', 'Hyderabadi Chicken Masala', 'nonveg', 370, {
        description: "Marinated with yogurt and chef's special spices.",
      }),
      choice('kadhai-chicken', 'Kadhai Chicken', 'nonveg', fullHalf(310, 180), {
        description:
          'Chicken on the bone cooked in spicy onion tomato masala with capsicum, crushed coriander & red chilli.',
      }),
      choice('chicken-do-pyaza', 'Chicken Do Pyaza', 'nonveg', fullHalf(310, 180), {
        description:
          'Curry-cut chicken tempered with whole cumin, tossed with onion & peppers and cooked in tangy brown gravy.',
      }),
      dish('chicken-tikka-lababdar', 'Chicken Tikka Lababdar', 'nonveg', 330, {
        description: 'Chicken tikka cooked in creamy butter masala gravy.',
      }),
      choice('chicken-butter-masala', 'Chicken Butter Masala', 'nonveg', fullHalf(340, 190), {
        description: 'Chicken cooked in rich cashewnut, almond & tangy tomato gravy.',
      }),
      dish('chicken-bharta', 'Chicken Bharta', 'nonveg', 330),
      dish('murgh-tikka-masala', 'Murgh Tikka Masala', 'nonveg', 330, {
        description: 'Chicken tikka cooked in spicy onion tomato masala.',
      }),
      choice('home-style-mutton-curry', 'Home Style Mutton Curry', 'nonveg', fullHalf(410, 240), {
        description: 'Mutton pieces cooked in a thin onion tomato gravy with potato, Bengali style.',
      }),
      dish('mutton-roganjosh', 'Mutton Roganjosh', 'nonveg', 410, {
        description: 'A unique Kashmiri delicacy.',
      }),
      choice('mutton-keema-masala', 'Mutton Keema Masala', 'nonveg', fullHalf(440, 270)),
      choice('mutton-kasha', 'Mutton Kasha / Mutton Bhuna', 'nonveg', fullHalf(410, 240)),
      dish('rahra-mutton', 'Rahra Mutton', 'nonveg', 450),
      dish('kadai-prawn', 'Kadai Prawn', 'nonveg', 490),
      dish('egg-curry', 'Egg Curry / Masala', 'other', 180),
    ],
  },

  // Page 9 — Rice, Bread & Bengali Traditional Menu
  {
    id: 'rice',
    label: 'Rice',
    title: 'Rice',
    items: [
      dish('steamed-rice', 'Steamed Rice', 'veg', 140),
      dish('jeera-rice', 'Jeera Rice', 'veg', 170),
      dish('pulao', 'Pulao Aap ki Pasand', 'veg', 180, { description: 'Veg or green peas.' }),
      dish('kashmiri-pulao', 'Kashmiri Pulao', 'veg', 240),
      {
        id: 'biryani',
        variant: 'featured',
        size: 'md',
        diet: 'nonveg',
        name: 'Biryani Aap ki Pasand',
        options: versions(['Chicken', 270], ['Mutton', 350]),
        description: 'Chicken or mutton biryani, accompanied with raita & salad.',
      },
    ],
  },
  {
    id: 'bread',
    label: 'Bread',
    title: 'Bread',
    items: [
      choice('roti', 'Roti', 'veg', versions(['Plain', 35], ['Butter', 40])),
      choice('naan', 'Naan', 'veg', versions(['Plain', 60], ['Butter', 65], ['Garlic', 75])),
      dish('cheese-naan', 'Cheese Naan', 'veg', 190),
      dish('masala-kulcha', 'Masala Kulcha', 'veg', 85),
      choice('lachha-paratha', 'Lachha Paratha', 'veg', versions(['Methi', 65], ['Pudina', 70])),
    ],
  },
  {
    id: 'bengali',
    label: 'Bengali',
    title: 'Bengali Traditional Menu',
    style: 'Bengali Traditional',
    items: [
      dish('basanti-pulao', 'Basanti Pulao', 'veg', 210),
      dish('sona-moong-dal', 'Sona Moong Dal', 'veg', 200),
      dish('aloo-bhaja', 'Jhur Jhure Aloo Bhaja', 'veg', 130),
      dish('chanar-dalna', 'Chanar Dalna', 'veg', 270),
      dish('elish', 'Bhapa / Sorse Elish', 'nonveg', 370),
      dish('pomfret-jhal', 'Pomfret Jhal / Sorse', 'nonveg', 450),
      dish('katla', 'Gondhoraj Fish / Doi Katla / Katla Kalia', 'nonveg', 270),
      choice('chicken-dak-bunglow', 'Chicken Dak Bunglow', 'nonveg', fullHalf(370, 220), {
        description: 'An old-style chicken curry served with egg and potato.',
      }),
      choice('mutton-dak-bunglow', 'Mutton Dak Bunglow', 'nonveg', fullHalf(470, 270), {
        description: 'An old-style mutton curry served with egg and potato.',
      }),
      dish('chingri-malai-curry', 'Chingri Malai Curry', 'nonveg', 490),
    ],
  },

  // Page 10 — From the Wok, Choices from Pan Asian, Dessert
  {
    id: 'noodles-rice',
    label: 'Noodles & Rice',
    eyebrow: 'From the Wok',
    title: 'Noodles & Fried Rice',
    note: 'Veg / Egg / Chicken / Mixed',
    style: 'Wok Tossed',
    items: [
      choice('hakka-noodles', 'Hakka Noodles', null, wok(200, 230, 270, 300)),
      choice('schezwan-noodles', 'Schezwan Style Noodles', null, wok(200, 230, 270, 300)),
      choice('chilli-garlic-noodles', 'Chilli Garlic Noodles', null, wok(200, 230, 270, 300)),
      choice('gravy-noodles', 'Gravy Noodles', null, wok(210, 240, 280, 310)),
      choice('fried-rice', 'Selection of Fried Rice', null, wok(210, 240, 280, 310)),
      choice('chilli-garlic-fried-rice', 'Chilli Garlic Fried Rice', null, wok(220, 240, 280, 330)),
    ],
  },
  {
    id: 'pan-asian',
    label: 'Pan Asian',
    title: 'Choices from Pan Asian',
    style: 'Wok Tossed',
    items: [
      choice('paneer-in-sauce', 'Paneer in Choice of Sauce', 'veg', fullHalf(310, 180), {
        description: 'Hot garlic, chilli, schezwan or manchurian.',
      }),
      choice('fish-in-sauce', 'Fish in Choice of Sauce', 'nonveg', fullHalf(370, 230), {
        description: 'Hot garlic, chilli, schezwan or manchurian.',
      }),
      choice('prawn-in-sauce', 'Prawn in Choice of Sauce', 'nonveg', fullHalf(470, 270), {
        description: 'Hot garlic, chilli, schezwan or manchurian.',
      }),
      choice('chicken-in-sauce', 'Chicken in Choice of Sauce', 'nonveg', fullHalf(330, 200), {
        description: 'Hot garlic, chilli, schezwan or manchurian.',
      }),
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    title: 'Dessert',
    items: [
      dish('gulab-jamun-ice-cream', 'Hot Gulab Jamun with Ice Cream & Chocolate Sauce', 'veg', 170),
      dish('gulab-jamun', 'Hot Gulab Jamun', 'veg', 80),
      dish('brownie-ice-cream', 'Chocolate Brownie with Ice Cream', 'veg', 160),
      dish('ice-cream', 'Choice of Ice Cream', 'veg', 150, {
        description: 'Vanilla, butterscotch, strawberry or chocolate.',
      }),
      dish('kesar-phirni', 'Kesar Phirni', 'veg', 130),
      dish('darshan-ice-cream', 'Darshan with Ice Cream', 'veg', 220),
      dish('fried-ice-cream', 'Fried Ice Cream', 'veg', 170),
    ],
  },
])
