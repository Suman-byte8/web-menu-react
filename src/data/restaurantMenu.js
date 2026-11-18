/**
 * Restaurant menu content.
 *
 * Dish shape
 *   variant      'featured' (large photo card) | 'compact' (thumbnail row)
 *                | 'text' (no image; see barMenu.js)
 *   diet         key of DIETS: 'veg' | 'nonveg' | 'other'
 *   price        number, in rupees
 *   image        path under /public (optional for compact dishes)
 *   featured only:
 *     size       'lg' | 'md' | 'sm'               (default 'lg')
 *     badge      { label, tone: 'accent' | 'cream' | 'olive' }
 *     tags       string[]                         (ingredient chips)
 *   compact only:
 *     highlight  { label, tone: 'gold' | 'orange' | 'olive' }
 *     placeholder{ icon, label, tone }            (shown when there is no image)
 */

import { publicImage as img } from '../lib/assets.js'

export const RESTAURANT = {
  pageTitle: 'SILK INN Malda — Restaurant Menu',
  badge: 'Restaurant',
  tagline: 'Continental & Italian',
  empty: {
    icon: 'restaurant_menu',
    title: 'No items found',
    message: 'No dishes match this dietary filter.',
  },
}

export const RESTAURANT_MENU = [
  {
    id: 'salad',
    label: 'Salad',
    eyebrow: 'Fresh & Healthy',
    title: 'Salads',
    note: 'Crisp Greens',
    items: [
      {
        id: 'chicken-hawaiian-salad',
        variant: 'featured',
        diet: 'nonveg',
        name: 'Chicken Hawaiian Salad',
        price: 270,
        description:
          'Fresh tropical salad with tender grilled chicken, juicy pineapple chunks, crisp lettuce, and tangy Hawaiian dressing.',
        image: img('chicken-haiwan-salad.webp'),
        badge: { label: 'Popular', tone: 'accent' },
        tags: ['Grilled Chicken', 'Pineapple', 'Mixed Greens'],
      },
    ],
  },
  {
    id: 'munching',
    label: 'Munching',
    eyebrow: 'Perfect Beginnings',
    title: 'Munching',
    note: 'Crisp Bites',
    items: [
      {
        id: 'veg-tacos',
        variant: 'compact',
        diet: 'veg',
        name: 'Veg Tacos',
        price: 250,
        description: 'Crispy taco shells filled with fresh vegetables, beans, and signature sauce.',
        image: img('veg-tacos-with-chef-special-sauce.webp'),
        highlight: { label: "Chef's Special", tone: 'gold' },
      },
      {
        id: 'chicken-tacos',
        variant: 'compact',
        diet: 'nonveg',
        name: 'Chicken Tacos',
        price: 290,
        description: 'Crispy shells loaded with seasoned chicken, beans, and chef special sauce.',
        image: img('hero_culinary_spread.jpg'),
        highlight: { label: "Chef's Special", tone: 'gold' },
      },
    ],
  },
  {
    id: 'starters',
    label: 'Starters',
    eyebrow: 'Appetizing Delights',
    title: 'Starters',
    note: 'Skewers & Bites',
    items: [
      {
        id: 'paneer-shashlik',
        variant: 'featured',
        size: 'md',
        diet: 'veg',
        name: 'Paneer Shashlik Stick',
        price: 350,
        description:
          'Skewered and grilled cottage cheese cubes with bell peppers, onions, and marinated in aromatic herbs.',
        image: img('paneer-shashlik.webp'),
        badge: { label: 'Popular', tone: 'cream' },
      },
      {
        id: 'cottage-cheese-popcorn',
        variant: 'compact',
        diet: 'veg',
        name: 'Cottage Cheese Popcorn',
        price: 350,
        description: 'Bite-sized crispy cottage cheese tossed in savory Japanese-style teriyaki glaze.',
        image: img('paneer-popcorn.webp'),
        highlight: { label: 'Signature', tone: 'gold' },
      },
      {
        id: 'chicken-shashlik',
        variant: 'compact',
        diet: 'nonveg',
        name: 'Chicken Shashlik Stick',
        price: 370,
        description: 'Tender marinated chicken skewered with colorful bell peppers and char-grilled.',
        image: img('chicken-shashlik.webp'),
        highlight: { label: 'Popular', tone: 'orange' },
      },
      {
        id: 'chicken-roulade',
        variant: 'compact',
        diet: 'nonveg',
        name: 'Chicken Roulade',
        price: 380,
        description: 'Rolled chicken breast stuffed with seasoned spinach and cheese, baked golden.',
        image: img('chicken-raulade.jpeg'),
        highlight: { label: 'Signature', tone: 'gold' },
      },
      {
        id: 'fried-calamari',
        variant: 'compact',
        diet: 'nonveg',
        name: 'Fried Calamari & Aioli',
        price: 430,
        description: 'Crispy golden squid rings served with spicy garlic aioli and lemon wedges.',
        image: img('Fried Calamari with spicy garlic aioli.png'),
        highlight: { label: 'Sea Food • New', tone: 'olive' },
      },
    ],
  },
  {
    id: 'pasta',
    label: 'Pasta',
    eyebrow: 'Italian Classics',
    title: 'Pasta on Choice',
    note: 'Artisan Sauces',
    items: [
      {
        id: 'spaghetti-carbonara',
        variant: 'compact',
        diet: 'veg',
        name: 'Spaghetti Carbonara',
        price: 290,
        description: 'Classic Italian pasta tossed in rich parmesan cream sauce with herbs and pepper.',
        image: img('spaghetti-alla-carbonara.webp'),
        highlight: { label: 'Popular', tone: 'orange' },
      },
      {
        id: 'penne-al-fungi-veg',
        variant: 'compact',
        diet: 'veg',
        name: 'Penne Al Fungi (Veg)',
        price: 350,
        description: 'Penne pasta tossed with wild mushrooms in creamy white sauce with herbs.',
        placeholder: { icon: 'restaurant', label: 'White Sauce', tone: 'gold' },
        highlight: { label: 'Mushroom', tone: 'olive' },
      },
      {
        id: 'penne-arrabbiata-veg',
        variant: 'compact',
        diet: 'veg',
        name: 'Penne Arrabbiata (Veg)',
        price: 350,
        description: 'Spicy tomato sauce infused with garlic, red chili flakes, and extra virgin olive oil.',
        placeholder: { icon: 'local_fire_department', label: 'Arrabbiata', tone: 'orange' },
        highlight: { label: 'Spicy Red', tone: 'orange' },
      },
      {
        id: 'mixed-sauce-pasta-veg',
        variant: 'compact',
        diet: 'veg',
        name: 'Mixed Sauce Pasta (Veg)',
        price: 350,
        description: 'Combination of creamy béchamel and tangy tomato sauce with tender vegetables.',
        image: img('mixed-sauce-pasta(veg).webp'),
        highlight: { label: "Chef's Choice", tone: 'gold' },
      },
      {
        id: 'penne-al-fungi-chicken',
        variant: 'compact',
        diet: 'nonveg',
        name: 'Penne Al Fungi (Chicken)',
        price: 370,
        description: 'Penne with wild mushrooms and tender sautéed chicken pieces in white sauce.',
        placeholder: { icon: 'dinner_dining', label: 'Chicken Penne', tone: 'gold' },
        highlight: { label: 'White Sauce', tone: 'olive' },
      },
      {
        id: 'penne-arrabbiata-chicken',
        variant: 'compact',
        diet: 'nonveg',
        name: 'Penne Arrabbiata (Chicken)',
        price: 370,
        description: 'Fiery tomato pomodoro with garlic, chili flakes, and grilled chicken slivers.',
        placeholder: { icon: 'local_fire_department', label: 'Arrabbiata', tone: 'red' },
        highlight: { label: 'Spicy Pomodoro', tone: 'orange' },
      },
      {
        id: 'mixed-sauce-pasta-chicken',
        variant: 'compact',
        diet: 'nonveg',
        name: 'Mixed Sauce Pasta (Chicken)',
        price: 370,
        description: 'Harmony of cream and tomato sauces tossed with tender chicken pieces.',
        image: img('mixed-sauce-pasta(non-veg).webp'),
        highlight: { label: "Chef's Special", tone: 'gold' },
      },
    ],
  },
  {
    id: 'maincourse',
    label: 'Main Course',
    eyebrow: 'Signature Entrées',
    title: 'Pre-Plated Continental',
    note: 'Artisan Plating',
    items: [
      {
        id: 'grilled-chicken-steak',
        variant: 'featured',
        diet: 'nonveg',
        name: 'Grilled Chicken Steak & Espagnole',
        price: 410,
        description:
          'Succulent grilled chicken breast smothered in classic French Espagnole sauce, accompanied by buttery mashed potatoes and sautéed vegetables.',
        image: img('grilled-chicken-steak.webp'),
        badge: { label: 'Popular', tone: 'accent' },
        tags: ['Chicken Breast', 'Mashed Potatoes', 'Sautéed Greens'],
      },
      {
        id: 'grilled-fish-steak',
        variant: 'featured',
        diet: 'nonveg',
        name: 'Grilled Fish Steak with Lemon Butter',
        price: 470,
        description:
          'Delicate fresh fish fillet grilled with Mediterranean herbs, served with velvety lemon butter sauce and steamed seasonal vegetables.',
        image: img('grilled-fish-with-lemon-butter.webp'),
        badge: { label: 'Signature', tone: 'cream' },
        tags: ['Fish Fillet', 'Lemon Butter', 'Steamed Veggies'],
      },
      {
        id: 'chicken-stroganoff',
        variant: 'compact',
        diet: 'nonveg',
        name: 'Chicken Stroganoff',
        price: 410,
        description:
          'Tender chicken sautéed with mushrooms in rich velvety sour cream sauce, served with aromatic rice.',
        image: img('Chicken stroganoff.png'),
        highlight: { label: 'Popular', tone: 'orange' },
      },
    ],
  },
  {
    id: 'desserts',
    label: 'Desserts',
    eyebrow: 'Sweet Endings',
    title: 'Desserts',
    note: 'Dolce & Mousses',
    items: [
      {
        id: 'tiramisu',
        variant: 'featured',
        size: 'sm',
        diet: 'veg',
        name: 'McVities & Honey Italian Tiramisu',
        price: 200,
        description:
          'Italian classic dessert with biscuit crust, luscious honey mascarpone cream, and rich espresso dusting.',
        image: img('dessert-tiramisu.webp'),
        badge: { label: 'Signature', tone: 'cream' },
      },
      {
        id: 'mango-mousse',
        variant: 'featured',
        size: 'sm',
        diet: 'veg',
        name: 'Fresh Mango Mousse',
        price: 200,
        description:
          "Light and airy mousse celebrating Malda's famous mangoes, whipped with fresh dairy cream.",
        image: img('Mango Mousse.png'),
        badge: { label: 'Malda Special', tone: 'olive' },
      },
    ],
  },
]
