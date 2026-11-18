/**
 * Extra content for the dish detail page, keyed by restaurant dish id.
 * Everything here is optional; the page falls back to the menu entry.
 *
 *   fullName     longer display name (menus keep the short one)
 *   description  longer description (menus keep the short one)
 *   badge        highlight shown on the photo
 *   ingredients  string[]
 *   style        cooking / serving style
 *   related      dish ids for "You May Also Like"
 *
 * Rooms and Bar entries that are the same dish point here via `ref`.
 * Availability is not stored: it is worked out from which menus list the dish.
 */
export const DISH_DETAILS = {
  'chicken-hawaiian-salad': {
    badge: 'Popular',
    ingredients: ['Grilled Chicken', 'Pineapple', 'Mixed Greens', 'Hawaiian Dressing'],
    style: 'Tossed Fresh',
    related: ['veg-tacos', 'paneer-shashlik', 'chicken-shashlik'],
  },
  'veg-tacos': {
    fullName: 'Veg Tacos with Chef Special Sauce',
    description: 'Crispy taco shells filled with fresh vegetables, beans, and our signature chef special sauce.',
    badge: "Chef's Special",
    ingredients: ['Taco Shell', 'Fresh Veggies', 'Beans', 'Chef Special Sauce'],
    style: 'Crisp & Savory',
    related: ['cottage-cheese-popcorn', 'spaghetti-carbonara', 'chicken-hawaiian-salad'],
  },
  'paneer-shashlik': {
    badge: 'Popular',
    ingredients: ['Cottage Cheese', 'Bell Peppers', 'Onions', 'Aromatic Spices'],
    style: 'Char-Grilled',
    related: ['cottage-cheese-popcorn', 'chicken-shashlik', 'grilled-chicken-steak'],
  },
  'cottage-cheese-popcorn': {
    description: 'Bite-sized crispy cottage cheese tossed in savory and sweet Japanese-style teriyaki glaze.',
    badge: 'Signature',
    ingredients: ['Cottage Cheese', 'Teriyaki Sauce', 'Sesame Seeds', 'Herbs'],
    style: 'Crispy Glazed',
    related: ['paneer-shashlik', 'fried-calamari', 'veg-tacos'],
  },
  'chicken-shashlik': {
    description:
      'Tender marinated chicken skewered with colorful bell peppers and red onions, char-grilled to perfection.',
    badge: 'Popular',
    ingredients: ['Chicken Breast', 'Bell Peppers', 'Red Onions', 'Shashlik Marinade'],
    style: 'Char-Grilled',
    related: ['chicken-roulade', 'fried-calamari', 'grilled-chicken-steak'],
  },
  'chicken-roulade': {
    description: 'Rolled chicken breast stuffed with seasoned spinach and cheese, baked golden and sliced gracefully.',
    badge: 'Signature',
    ingredients: ['Chicken Breast', 'Spinach', 'Cheese', 'Chef Herbs'],
    style: 'Oven Baked',
    related: ['chicken-shashlik', 'grilled-chicken-steak', 'fried-calamari'],
  },
  'fried-calamari': {
    fullName: 'Fried Calamari with Spicy Garlic Aioli',
    description: 'Crispy golden squid rings served with our house-made spicy garlic aioli and fresh lemon wedges.',
    badge: 'Sea Food',
    ingredients: ['Fresh Calamari', 'Spicy Garlic Aioli', 'Lemon', 'Sea Salt'],
    style: 'Crispy Fried',
    related: ['chicken-shashlik', 'grilled-fish-steak', 'cottage-cheese-popcorn'],
  },
  'spaghetti-carbonara': {
    fullName: 'Spaghetti Alla Carbonara (Veg)',
    description: 'Classic Italian pasta tossed in rich parmesan cream sauce with herbs and cracked black pepper.',
    badge: 'Popular',
    ingredients: ['Spaghetti', 'Parmesan', 'Cream', 'Black Pepper'],
    style: 'Al Dente Cream',
    related: ['mixed-sauce-pasta-veg', 'grilled-chicken-steak', 'tiramisu'],
  },
  'mixed-sauce-pasta-veg': {
    description: 'Combination of creamy béchamel and tangy tomato pomodoro sauce with tender garden veggies.',
    badge: "Chef's Special",
    ingredients: ['Penne Pasta', 'Béchamel', 'Pomodoro Sauce', 'Garden Vegetables'],
    style: 'Pink Sauce Fusion',
    related: ['spaghetti-carbonara', 'grilled-chicken-steak', 'tiramisu'],
  },
  'grilled-chicken-steak': {
    fullName: 'Grilled Chicken Steak & Espagnole Sauce',
    badge: 'Popular',
    ingredients: ['Chicken Breast', 'Espagnole Sauce', 'Mashed Potatoes', 'Sautéed Vegetables'],
    style: 'Pre-Plated',
    related: ['grilled-fish-steak', 'chicken-stroganoff', 'tiramisu'],
  },
  'grilled-fish-steak': {
    fullName: 'Grilled Herbed Fish Steak with Lemon Butter',
    badge: 'Signature',
    ingredients: ['Fresh Fish Fillet', 'Lemon Butter Sauce', 'Mixed Herbs', 'Seasonal Vegetables'],
    style: 'Pan-Seared',
    related: ['grilled-chicken-steak', 'fried-calamari', 'chicken-stroganoff'],
  },
  'chicken-stroganoff': {
    fullName: 'Chicken Stroganoff with Aromatic Rice',
    description:
      'Tender pieces of chicken sautéed with mushrooms in rich velvety sour cream sauce, served with steaming buttered rice.',
    badge: 'Popular',
    ingredients: ['Chicken', 'Mushrooms', 'Sour Cream', 'Aromatic Rice'],
    style: 'Slow Simmered',
    related: ['grilled-chicken-steak', 'spaghetti-carbonara', 'tiramisu'],
  },
  tiramisu: {
    badge: 'Signature',
    ingredients: ['McVities Biscuit', 'Mascarpone Cream', 'Espresso', 'Honey'],
    style: 'Chilled Dolce',
    related: ['mango-mousse', 'spaghetti-carbonara', 'grilled-chicken-steak'],
  },
  'mango-mousse': {
    description:
      "Light and airy mousse celebrating Malda's world-famous mangoes, whipped with fresh dairy cream and garnished with mint.",
    badge: 'Malda Special',
    ingredients: ['Malda Mango Purée', 'Heavy Cream', 'Sugar', 'Fresh Mint'],
    style: 'Chilled Whipped',
    related: ['tiramisu', 'grilled-chicken-steak', 'cottage-cheese-popcorn'],
  },
}
