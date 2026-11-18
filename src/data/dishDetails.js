/**
 * Extra content for the dish detail page, keyed by restaurant dish id.
 * Everything here is optional; the page falls back to the menu entry.
 *
 *   fullName     longer display name (menus keep the short one)
 *   description  longer description (menus keep the short one)
 *   badge        highlight shown on the photo
 *   ingredients  string[]
 *   style        cooking / serving style (else the category's style)
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
    related: ['tacos', 'shashlik', 'popcorn'],
  },
  tacos: {
    badge: "Chef's Special",
    ingredients: ['Taco Shells', 'Vegetables or Chicken', 'Beans', 'Chef Special Sauce'],
    style: 'Crisp & Savory',
    related: ['popcorn', 'spaghetti-carbonara', 'chicken-hawaiian-salad'],
  },
  shashlik: {
    badge: 'Popular',
    ingredients: ['Cottage Cheese or Chicken', 'Bell Peppers', 'Onions', 'Teriyaki Sauce'],
    style: 'Char-Grilled',
    related: ['popcorn', 'chicken-roulade', 'grilled-chicken-steak'],
  },
  popcorn: {
    badge: 'Signature',
    ingredients: ['Cottage Cheese or Chicken', 'Chef Special Sauce', 'Herbs'],
    style: 'Crispy Fried',
    related: ['shashlik', 'cheese-ball', 'tacos'],
  },
  'chicken-roulade': {
    badge: 'Signature',
    ingredients: ['Chicken Breast', 'Cheese', 'Cheese White Sauce', 'Herbs'],
    style: 'Oven Baked',
    related: ['shashlik', 'grilled-chicken-steak', 'popcorn'],
  },
  'spaghetti-carbonara': {
    badge: 'Popular',
    ingredients: ['Spaghetti', 'Parmesan', 'Cream', 'Black Pepper'],
    style: 'Al Dente Cream',
    related: ['mixed-sauce-pasta', 'grilled-chicken-steak', 'tiramisu'],
  },
  'mixed-sauce-pasta': {
    badge: "Chef's Special",
    ingredients: ['Penne Pasta', 'Béchamel', 'Pomodoro Sauce', 'Vegetables or Chicken'],
    style: 'Pink Sauce Fusion',
    related: ['spaghetti-carbonara', 'penne-arrabbiata', 'tiramisu'],
  },
  'grilled-chicken-steak': {
    badge: 'Popular',
    ingredients: ['Chicken Breast', 'Espagnole Sauce', 'Mashed Potatoes', 'Sautéed Vegetables'],
    related: ['grilled-fish-steak', 'chicken-stroganoff', 'tiramisu'],
  },
  'grilled-fish-steak': {
    badge: 'Signature',
    ingredients: ['Fresh Fish Fillet', 'Lemon Butter Sauce', 'Mixed Herbs', 'Seasonal Vegetables'],
    style: 'Pan-Seared',
    related: ['grilled-chicken-steak', 'chicken-stroganoff', 'penne-arrabbiata'],
  },
  'chicken-stroganoff': {
    badge: 'Popular',
    ingredients: ['Chicken', 'Mushrooms', 'Sour Cream', 'Pilaf Rice'],
    style: 'Slow Simmered',
    related: ['grilled-chicken-steak', 'spaghetti-carbonara', 'tiramisu'],
  },
  'tandoori-murgh': {
    badge: "Chef's Special",
    related: ['murgh-malai-kebab', 'mutton-seekh-kebab', 'biryani'],
  },
  tiramisu: {
    badge: 'Signature',
    ingredients: ['McVities Biscuit', 'Mascarpone Cream', 'Espresso', 'Honey'],
    style: 'Chilled Dolce',
    related: ['orange-mango-mousse', 'brownie-ice-cream', 'kesar-phirni'],
  },
  'orange-mango-mousse': {
    badge: 'Malda Special',
    ingredients: ['Orange or Malda Mango', 'Fresh Cream', 'Sugar'],
    style: 'Chilled Whipped',
    related: ['tiramisu', 'gulab-jamun-ice-cream', 'kesar-phirni'],
  },
}
