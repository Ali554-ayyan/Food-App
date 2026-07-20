// ==================== 1. DATASET: 25 FOOD ITEMS ====================
const FOOD_ITEMS = [
  // burgers (3)
  {
    id: 1,
    name: "Gourmet Cheeseburger",
    category: "burgers",
    price: 12.99,
    rating: 4.8,
    prepTime: 15,
    calories: 720,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=80",
    description: "Flame-grilled Black Angus beef patty topped with melting sharp cheddar, crisp lettuce, ripe organic tomatoes, red onions, and house-made secret sauce on a toasted brioche bun.",
    addons: [{ name: "Extra Cheddar", price: 1.50 }, { name: "Crispy Bacon", price: 2.00 }],
    ingredients: ["Angus Beef", "Brioche Bun", "Cheddar", "Lettuce", "Tomatoes", "Secret Sauce"],
    nutrition: { carbs: "48g", protein: "38g", fat: "32g" }
  },
  {
    id: 2,
    name: "Jalapeno Inferno Burger",
    category: "burgers",
    price: 13.49,
    rating: 4.7,
    prepTime: 12,
    calories: 790,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&auto=format&fit=crop&q=80",
    description: "For spice enthusiasts. Beef patty, pepper jack, charred fresh jalapeno slices, spicy chipotle aioli, and crispy onion straws on a sesame bun.",
    addons: [{ name: "Sliced Avocado", price: 2.00 }, { name: "Double Patty", price: 4.00 }],
    ingredients: ["Beef Patty", "Sesame Bun", "Pepper Jack", "Jalapenos", "Chipotle Aioli"],
    nutrition: { carbs: "52g", protein: "39g", fat: "36g" }
  },
  {
    id: 3,
    name: "Truffle Mushroom Burger",
    category: "burgers",
    price: 14.99,
    rating: 4.9,
    prepTime: 18,
    calories: 810,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=500&auto=format&fit=crop&q=80",
    description: "Luxurious combination of hand-pressed beef, roasted wild Swiss mushrooms, melted provolone cheese, and rich white truffle oil spread.",
    addons: [{ name: "Caramelized Onions", price: 1.00 }, { name: "Truffle Glaze Drizzle", price: 1.50 }],
    ingredients: ["Angus Beef", "Provolone", "Swiss Mushrooms", "Truffle Oil", "Swiss Sauce"],
    nutrition: { carbs: "44g", protein: "41g", fat: "38g" }
  },
  // pizzas (3)
  {
    id: 4,
    name: "Woodfired Margherita Pizza",
    category: "pizzas",
    price: 14.99,
    rating: 4.9,
    prepTime: 20,
    calories: 880,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop&q=80",
    description: "Authentic Neapolitan standard. Fresh buffalo mozzarella, San Marzano tomato spread, fresh basil leaves, and a drizzle of extra virgin olive oil.",
    addons: [{ name: "Extra Fresh Mozzarella", price: 2.50 }, { name: "Cherry Tomatoes", price: 1.25 }],
    ingredients: ["Neapolitan Dough", "San Marzano Tomatoes", "Buffalo Mozzarella", "Fresh Basil"],
    nutrition: { carbs: "98g", protein: "34g", fat: "24g" }
  },
  {
    id: 5,
    name: "Spicy Pepperoni Inferno",
    category: "pizzas",
    price: 16.99,
    rating: 4.8,
    prepTime: 18,
    calories: 950,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=500&auto=format&fit=crop&q=80",
    description: "Crispy beef pepperoni cups, mozzarella, hot honey drizzle, crushed red pepper flakes on a stone-baked crust.",
    addons: [{ name: "Pepperoni Cups Double", price: 2.50 }, { name: "Spicy Jalapenos", price: 1.00 }],
    ingredients: ["Pizza Crust", "Pepperoni", "Mozzarella", "Hot Honey", "Red Pepper"],
    nutrition: { carbs: "95g", protein: "42g", fat: "34g" }
  },
  {
    id: 6,
    name: "Truffle Cream Pizza",
    category: "pizzas",
    price: 18.99,
    rating: 4.9,
    prepTime: 22,
    calories: 990,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=80",
    description: "Creamy white garlic sauce base, Swiss brown mushrooms, goat cheese, baby arugula, and premium truffle cream dressing.",
    addons: [{ name: "Roasted Garlic Bulbs", price: 1.00 }, { name: "Goat Cheese Extra", price: 2.00 }],
    ingredients: ["Pizza Crust", "Garlic Cream", "Swiss Mushrooms", "Goat Cheese", "Arugula"],
    nutrition: { carbs: "92g", protein: "35g", fat: "28g" }
  },
  // pasta (2)
  {
    id: 7,
    name: "Creamy Alfredo Chicken",
    category: "pasta",
    price: 15.99,
    rating: 4.7,
    prepTime: 25,
    calories: 850,
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=500&auto=format&fit=crop&q=80",
    description: "Fettuccine pasta tossed in rich parmesan cream alfredo sauce, topped with tender grilled chicken breast slices and parsley.",
    addons: [{ name: "Roasted Mushrooms", price: 1.50 }, { name: "Garlic Bread Slices", price: 2.00 }],
    ingredients: ["Fettuccine", "Alfredo Sauce", "Grilled Chicken", "Parmesan Cheese", "Parsley"],
    nutrition: { carbs: "78g", protein: "45g", fat: "28g" }
  },
  {
    id: 8,
    name: "Wild Mushroom Fettuccine",
    category: "pasta",
    price: 14.99,
    rating: 4.6,
    prepTime: 20,
    calories: 780,
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&auto=format&fit=crop&q=80",
    description: "Earthy chanterelle and portobello mushrooms, garlic butter white wine reductions, baby spinach, tossed in fettuccine.",
    addons: [{ name: "Grated Parmesan", price: 1.00 }, { name: "Extra Butter Sauce", price: 0.75 }],
    ingredients: ["Fettuccine", "Wild Mushrooms", "Garlic Butter", "White Wine", "Spinach"],
    nutrition: { carbs: "75g", protein: "18g", fat: "16g" }
  },
  // bbq (2)
  {
    id: 9,
    name: "Smokehouse Baby Back Ribs",
    category: "bbq",
    price: 24.99,
    rating: 4.9,
    prepTime: 30,
    calories: 1150,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80",
    description: "Slow-smoked pork baby back ribs glazed in hickory honey BBQ sauce, served with coleslaw and buttered corn on the cob.",
    addons: [{ name: "Extra Hickory Glaze", price: 0.75 }, { name: "Coleslaw Cup", price: 1.50 }],
    ingredients: ["Baby Back Ribs", "Hickory BBQ Sauce", "Honey", "Coleslaw", "Corn"],
    nutrition: { carbs: "62g", protein: "58g", fat: "48g" }
  },
  {
    id: 10,
    name: "Honey Glazed BBQ Wings",
    category: "bbq",
    price: 11.99,
    rating: 4.8,
    prepTime: 15,
    calories: 650,
    image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=500&auto=format&fit=crop&q=80",
    description: "Crispy chicken wings deep fried and tossed in sweet honey glaze BBQ mix, served with celery sticks and ranch dressing.",
    addons: [{ name: "Ranch Dip Cup", price: 0.50 }, { name: "Celery Sticks Extra", price: 0.50 }],
    ingredients: ["Chicken Wings", "Honey BBQ", "Celery", "Ranch Dressing"],
    nutrition: { carbs: "38g", protein: "29g", fat: "22g" }
  },
  // fried chicken (2)
  {
    id: 11,
    name: "Crispy Golden Tenders",
    category: "fried chicken",
    price: 10.99,
    rating: 4.7,
    prepTime: 15,
    calories: 580,
    image: "https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?w=500&auto=format&fit=crop&q=80",
    description: "Buttermilk marinated chicken tenders breaded in southern spiced flour mixes, served golden crisp with honey mustard.",
    addons: [{ name: "Honey Mustard Dip", price: 0.50 }, { name: "French Fries Side", price: 2.50 }],
    ingredients: ["Chicken Breast Tenders", "Buttermilk", "Spiced Flour", "Honey Mustard"],
    nutrition: { carbs: "32g", protein: "34g", fat: "18g" }
  },
  {
    id: 12,
    name: "Spicy Buffalo Drumsticks",
    category: "fried chicken",
    price: 12.49,
    rating: 4.6,
    prepTime: 15,
    calories: 680,
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=500&auto=format&fit=crop&q=80",
    description: "Crispy fried chicken drumsticks tossed in hot buffalo sauce mixtures, served with blue cheese dip.",
    addons: [{ name: "Blue Cheese Dip", price: 0.50 }, { name: "Pickled Onion Rings", price: 1.00 }],
    ingredients: ["Chicken Drumsticks", "Buffalo Sauce", "Blue Cheese Dressing"],
    nutrition: { carbs: "28g", protein: "36g", fat: "24g" }
  },
  // sandwiches (2)
  {
    id: 13,
    name: "Clubhouse Triple-Decker",
    category: "sandwiches",
    price: 11.99,
    rating: 4.6,
    prepTime: 10,
    calories: 620,
    image: "https://images.unsplash.com/photo-1538220856186-0be0c085984d?w=500&auto=format&fit=crop&q=80",
    description: "Smoked turkey breast, crispy bacon, fried egg, provolone, lettuce, and tomatoes layered in triple toasted sourdough.",
    addons: [{ name: "Avocado Slices", price: 2.00 }, { name: "Extra Bacon", price: 2.00 }],
    ingredients: ["Turkey", "Bacon", "Fried Egg", "Provolone", "Sourdough Bread"],
    nutrition: { carbs: "48g", protein: "32g", fat: "21g" }
  },
  {
    id: 14,
    name: "Grilled Pesto Panini",
    category: "sandwiches",
    price: 10.49,
    rating: 4.7,
    prepTime: 10,
    calories: 540,
    image: "https://images.unsplash.com/photo-1520608421441-177e34a9774d?w=500&auto=format&fit=crop&q=80",
    description: "Fresh buffalo mozzarella, ripe tomatoes, nut-free basil pesto sauce pressed in Italian ciabatta bread.",
    addons: [{ name: "Chicken Slices", price: 2.00 }, { name: "Pesto Drizzle", price: 0.75 }],
    ingredients: ["Ciabatta", "Mozzarella", "Tomatoes", "Basil Pesto"],
    nutrition: { carbs: "46g", protein: "18g", fat: "15g" }
  },
  // seafood (2)
  {
    id: 15,
    name: "Garlic Butter Lobster Tail",
    category: "seafood",
    price: 29.99,
    rating: 4.9,
    prepTime: 25,
    calories: 710,
    image: "https://images.unsplash.com/photo-1553618551-fba689030290?w=500&auto=format&fit=crop&q=80",
    description: "Gourmet cold-water lobster tail roasted in rich garlic herb butter mixtures, served with steamed asparagus.",
    addons: [{ name: "Lemon Garlic Butter", price: 1.00 }, { name: "Parmesan Asparagus", price: 2.00 }],
    ingredients: ["Lobster Tail", "Garlic Butter", "Lemon", "Asparagus"],
    nutrition: { carbs: "12g", protein: "48g", fat: "22g" }
  },
  {
    id: 16,
    name: "Crispy Calamari Rings",
    category: "seafood",
    price: 13.99,
    rating: 4.8,
    prepTime: 12,
    calories: 480,
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=500&auto=format&fit=crop&q=80",
    description: "Tender calamari rings dusted in light pepper flour, flash fried, served with house remoulade sauce.",
    addons: [{ name: "Spicy Remoulade Dip", price: 0.50 }, { name: "Lemon Wedges Extra", price: 0.25 }],
    ingredients: ["Squid Rings", "Seasoned Flour", "Remoulade Sauce"],
    nutrition: { carbs: "26g", protein: "24g", fat: "12g" }
  },
  // salads (2)
  {
    id: 17,
    name: "Classic Caesar Salad",
    category: "salads",
    price: 9.99,
    rating: 4.5,
    prepTime: 8,
    calories: 350,
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&auto=format&fit=crop&q=80",
    description: "Crisp romaine hearts, toasted garlic herb croutons, shaved parmesan cheese, tossed in creamy Caesar dressing.",
    addons: [{ name: "Grilled Chicken Breast", price: 3.00 }, { name: "Garlic Butter Shrimp", price: 4.00 }],
    ingredients: ["Romaine Lettuce", "Croutons", "Parmesan", "Caesar Dressing"],
    nutrition: { carbs: "18g", protein: "10g", fat: "15g" }
  },
  {
    id: 18,
    name: "Avocado Quinoa Salad",
    category: "salads",
    price: 11.49,
    rating: 4.7,
    prepTime: 10,
    calories: 420,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=80",
    description: "Tri-color quinoa, sliced avocado, cherry tomatoes, cucumbers, feta cheese, lemon vinaigrette dressings.",
    addons: [{ name: "Roasted Almond Chips", price: 1.00 }, { name: "Feta Cheese Extra", price: 1.50 }],
    ingredients: ["Quinoa", "Avocado", "Cherry Tomatoes", "Cucumber", "Feta", "Lemon Vinaigrette"],
    nutrition: { carbs: "36g", protein: "12g", fat: "14g" }
  },
  // desserts (3)
  {
    id: 19,
    name: "Molten Chocolate Lava",
    category: "desserts",
    price: 7.99,
    rating: 4.8,
    prepTime: 12,
    calories: 520,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&auto=format&fit=crop&q=80",
    description: "Decadent dark chocolate cake featuring a warm liquid molten chocolate center, served with fresh raspberries.",
    addons: [{ name: "Vanilla Gelato Scoop", price: 2.00 }, { name: "Sea Salt Caramel Drizzle", price: 0.75 }],
    ingredients: ["Belgian Dark Chocolate", "Butter", "Flour", "Eggs", "Raspberries"],
    nutrition: { carbs: "54g", protein: "6g", fat: "22g" }
  },
  {
    id: 20,
    name: "New York Style Cheesecake",
    category: "desserts",
    price: 8.49,
    rating: 4.9,
    prepTime: 5,
    calories: 480,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=500&auto=format&fit=crop&q=80",
    description: "Rich, dense, and creamy cheesecake filling over a buttery graham cracker crust, topped with fresh strawberry glaze.",
    addons: [{ name: "Whipped Cream Squeeze", price: 0.50 }, { name: "Extra Strawberry Glaze", price: 0.75 }],
    ingredients: ["Cream Cheese", "Graham Crackers", "Butter", "Strawberry Glaze"],
    nutrition: { carbs: "42g", protein: "8g", fat: "18g" }
  },
  {
    id: 21,
    name: "Red Velvet Dessert Waffle",
    category: "desserts",
    price: 8.99,
    rating: 4.7,
    prepTime: 12,
    calories: 610,
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&auto=format&fit=crop&q=80",
    description: "Freshly ironed red velvet waffle waffle, topped with vanilla cream cheese frostings and chocolate chips.",
    addons: [{ name: "Crushed Walnuts", price: 1.00 }, { name: "Chocolate Gelato Scoop", price: 2.00 }],
    ingredients: ["Red Velvet Waffle Mix", "Cream Cheese Frosting", "Chocolate Chips"],
    nutrition: { carbs: "68g", protein: "7g", fat: "20g" }
  },
  // beverages (2)
  {
    id: 22,
    name: "Strawberry Mint Mojito",
    category: "drinks",
    price: 5.99,
    rating: 4.9,
    prepTime: 5,
    calories: 120,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=500&auto=format&fit=crop&q=80",
    description: "Delightfully fizzy mocktail made with muddled fresh strawberries, mint leaves, lime juice, cane sugar, and club soda.",
    addons: [{ name: "Extra Mint & Lime", price: 0.50 }, { name: "Chia Seed Scoop", price: 0.75 }],
    ingredients: ["Strawberries", "Mint Leaves", "Lime Juice", "Cane Sugar", "Soda Water"],
    nutrition: { carbs: "28g", protein: "0g", fat: "0g" }
  },
  {
    id: 23,
    name: "Mango Passionfruit Smoothie",
    category: "drinks",
    price: 6.49,
    rating: 4.8,
    prepTime: 5,
    calories: 180,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&auto=format&fit=crop&q=80",
    description: "Thick, creamy smoothie blended with sweet honey mango pulp, fresh passionfruit juice, greek yogurt, and honey.",
    addons: [{ name: "Protein Powder Scoop", price: 2.00 }, { name: "Flax Seeds Spoon", price: 0.75 }],
    ingredients: ["Mango Pulp", "Passionfruit Juice", "Greek Yogurt", "Honey"],
    nutrition: { carbs: "34g", protein: "6g", fat: "2g" }
  },
  // traditional (2)
  {
    id: 24,
    name: "Traditional Beef Biryani",
    category: "traditional",
    price: 16.99,
    rating: 4.9,
    prepTime: 25,
    calories: 890,
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop&q=80",
    description: "Aromatic basmati rice cooked with tender spiced beef cuts, saffron extracts, caramelized onions, served with mint raita.",
    addons: [{ name: "Extra Beef Gravy", price: 1.50 }, { name: "Boiled Egg", price: 1.00 }],
    ingredients: ["Basmati Rice", "Beef Spiced Stew", "Saffron", "Onions", "Mint Yogurt Raita"],
    nutrition: { carbs: "88g", protein: "38g", fat: "22g" }
  },
  {
    id: 25,
    name: "Butter Chicken & Naan",
    category: "traditional",
    price: 15.99,
    rating: 4.8,
    prepTime: 20,
    calories: 920,
    image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=500&auto=format&fit=crop&q=80",
    description: "Clay oven roasted chicken chunks simmered in a velvety spiced tomato butter gravy, served with freshly baked butter garlic naan.",
    addons: [{ name: "Extra Butter Naan", price: 2.00 }, { name: "Basmati Rice Portion", price: 2.50 }],
    ingredients: ["Tandoori Chicken Chunks", "Tomato Butter Sauce", "Spices", "Garlic Naan"],
    nutrition: { carbs: "64g", protein: "42g", fat: "28g" }
  }
];

// ==================== 2. MOCK BLOG ARTICLES ====================
const BLOG_POSTS = [
  {
    id: 1,
    title: "Secrets Behind the Perfect Woodfired Pizza Dough",
    tag: "Culinary Secret",
    date: "July 08, 2026",
    author: "Head Chef Antonio",
    excerpt: "Discover the chemistry behind Neapolitan fermentation, crust leopard-spotting, and hydration indexes to bake stone-oven masterpieces.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "10 Nutritionist-Approved Superfood Salad Addons",
    tag: "Healthy Living",
    date: "July 01, 2026",
    author: "Elena Rostova",
    excerpt: "Power up your Caesar and Quinoa salads with pumpkin seeds, hemp oil infusions, roasted almonds, and unique probiotic vinaigrettes.",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Smoky hickory: The Science of Slow & Low Rib Smoking",
    tag: "Pitmaster Tech",
    date: "June 25, 2026",
    author: "Chef Marcus",
    excerpt: "Understanding the wood smoke ring, humidity bounds, and caramelization temperatures that make baby back ribs slide off the bone.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&auto=format&fit=crop&q=80"
  }
];

// ==================== 3. STATE MANAGEMENT ====================
let cart = [];
let wishlist = [];
let activeProfileTab = 'dashboard';
let activePolicyTab = 'privacy';
let activeAuthTab = 'login';
let currentMenuCategoryFilter = 'all';

// ==================== 4. SPA ROUTER CONTROLLER ====================
function handleRouter() {
  const hash = window.location.hash || '#home';
  
  // Hide all view panels
  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.add('hidden');
  });

  // Close navigation menu on mobile after navigation
  document.querySelector('.nav-links').classList.remove('open');
  document.querySelector('.mobile-menu-btn i').className = 'fa-solid fa-bars';

  // Manage Nav Link active colors
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });

  // Match routes
  if (hash.startsWith('#detail/')) {
    // Product details routing
    const itemId = parseInt(hash.replace('#detail/', ''));
    renderDetailPage(itemId);
    document.getElementById('view-detail').classList.remove('hidden');
    window.scrollTo(0, 0);
    return;
  }
  
  if (hash.startsWith('#blog-detail/')) {
    // Blog reader routing
    const postId = parseInt(hash.replace('#blog-detail/', ''));
    renderBlogDetailPage(postId);
    document.getElementById('view-blog-detail').classList.remove('hidden');
    window.scrollTo(0, 0);
    return;
  }

  // Exact matches
  let matchedViewId = 'view-404';
  const matchingRouteMap = {
    '#home': 'view-home',
    '#about': 'view-about',
    '#menu': 'view-menu',
    '#reserve': 'view-reserve',
    '#blog': 'view-blog',
    '#auth': 'view-auth',
    '#profile': 'view-profile',
    '#cart': 'view-cart',
    '#checkout': 'view-checkout',
    '#tracking': 'view-tracking',
    '#faq': 'view-faq',
    '#policy': 'view-policy',
    '#contact': 'view-contact'
  };

  const targetViewId = matchingRouteMap[hash];
  if (targetViewId) {
    matchedViewId = targetViewId;
    
    // Set Active class to Header Links
    const activeNavAnchor = document.querySelector(`.nav-link[data-view="${targetViewId.replace('view-', '')}"]`);
    if (activeNavAnchor) {
      activeNavAnchor.classList.add('active');
    }
  }

  const targetViewEl = document.getElementById(matchedViewId);
  if (targetViewEl) {
    targetViewEl.classList.remove('hidden');
  }

  // View Specific Triggers
  if (hash === '#menu') {
    filterAndRenderMenu();
  } else if (hash === '#cart') {
    renderCartPage();
  } else if (hash === '#checkout') {
    renderCheckoutPage();
  } else if (hash === '#tracking') {
    startDispatchTrackingSimulation();
  }

  window.scrollTo(0, 0);
}

// ==================== 5. INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
  // Preloader timeout
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => preloader.style.display = 'none', 500);
  }, 1000);

  // Sync state from LocalStorage
  const savedCart = localStorage.getItem('pro_cart');
  if (savedCart) {
    try { cart = JSON.parse(savedCart); } catch(e) { cart = []; }
  }
  const savedWish = localStorage.getItem('pro_wishlist');
  if (savedWish) {
    try { wishlist = JSON.parse(savedWish); } catch(e) { wishlist = []; }
  }

  // Initialize Router
  window.addEventListener('hashchange', handleRouter);
  handleRouter();

  // Render Home Specials
  renderHomeSpecials();

  // Render Home Popular
  renderHomePopular();

  // Render Blogs Index
  renderBlogsList();

  // Sync badges
  updateGlobalCounters();

  // Register General Handlers
  initThemeToggle();
  initSideCartToggle();
  initModalHandlers();
  initFormSubmissions();
  initAccordionFAQ();
});

// ==================== 6. THEME TOGGLE ====================
function initThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  const sunIcon = toggle.querySelector('.sun-icon');
  const moonIcon = toggle.querySelector('.moon-icon');

  const setDarkTheme = (isDark) => {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
      localStorage.setItem('pro_theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
      localStorage.setItem('pro_theme', 'light');
    }
  };

  // Check saved theme
  const saved = localStorage.getItem('pro_theme');
  setDarkTheme(saved === 'dark');

  toggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    setDarkTheme(current !== 'dark');
  });
}

// ==================== 7. MENU EXPLORER FILTER & SEARCH ====================
function setMenuCategoryFilter(cat) {
  currentMenuCategoryFilter = cat;
  filterAndRenderMenu();
}

function filterAndRenderMenu() {
  // Category tabs rendering
  const tabsContainer = document.getElementById('menu-category-tabs-container');
  if (tabsContainer) {
    const categories = ['all', 'burgers', 'pizzas', 'pasta', 'bbq', 'fried chicken', 'sandwiches', 'seafood', 'salads', 'desserts', 'drinks', 'traditional'];
    tabsContainer.innerHTML = categories.map(cat => `
      <button class="tab-btn ${currentMenuCategoryFilter === cat ? 'active' : ''}" onclick="setMenuCategoryFilter('${cat}')">
        ${cat.charAt(0).toUpperCase() + cat.slice(1)}
      </button>
    `).join('');
  }

  const searchVal = document.getElementById('menu-view-search').value.toLowerCase().trim();
  const sortVal = document.getElementById('menu-view-sort').value;
  const maxPrice = parseFloat(document.getElementById('menu-view-price').value);
  const prepVal = document.getElementById('menu-view-preptime').value;

  // Update Price text indicator
  document.getElementById('price-max-val').textContent = `$${maxPrice}`;

  // Filter items
  let filtered = FOOD_ITEMS.filter(item => {
    const catMatches = currentMenuCategoryFilter === 'all' || item.category === currentMenuCategoryFilter;
    const searchMatches = item.name.toLowerCase().includes(searchVal) || item.description.toLowerCase().includes(searchVal) || item.ingredients.some(i => i.toLowerCase().includes(searchVal));
    const priceMatches = item.price <= maxPrice;
    
    let prepMatches = true;
    if (prepVal !== 'any') {
      prepMatches = item.prepTime <= parseInt(prepVal);
    }

    return catMatches && searchMatches && priceMatches && prepMatches;
  });

  // Sort items
  if (sortVal === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortVal === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortVal === 'prep-time') {
    filtered.sort((a, b) => a.prepTime - b.prepTime);
  } else if (sortVal === 'calories') {
    filtered.sort((a, b) => a.calories - b.calories);
  }

  // Render Grid
  const grid = document.getElementById('menu-view-grid');
  const countSpan = document.getElementById('menu-results-count');
  
  if (countSpan) {
    countSpan.textContent = `Found ${filtered.length} culinary dishes`;
  }

  if (grid) {
    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 50px 0; color: var(--text-secondary);">
          <i class="fa-solid fa-cookie-bite" style="font-size: 3rem; color: var(--accent); margin-bottom: 15px;"></i>
          <p>No plates fit your sorting variables. Clear filters to try again!</p>
        </div>
      `;
      return;
    }
    grid.innerHTML = filtered.map(item => createDishCardHTML(item)).join('');
  }
}

// Helper to create a single dish card
function createDishCardHTML(item) {
  const isWish = wishlist.some(w => w.id === item.id);
  return `
    <div class="dish-card">
      <div class="dish-img-wrap">
        <span class="dish-badge-overlay">
          <i class="fa-solid fa-star"></i>
          <span>${item.rating}</span>
        </span>
        <span class="dish-badge-time">${item.prepTime}m</span>
        <button class="wishlist-trigger-btn ${isWish ? 'added' : ''}" onclick="toggleWishlist(${item.id}, this)">
          <i class="fa-solid fa-heart"></i>
        </button>
        <img src="${item.image}" alt="${item.name}" class="dish-img" onclick="window.location.hash='#detail/${item.id}'">
      </div>
      <div class="dish-body">
        <div class="dish-title-row">
          <h3 class="dish-title" onclick="window.location.hash='#detail/${item.id}'">${item.name}</h3>
          <span class="dish-price">$${item.price.toFixed(2)}</span>
        </div>
        <p class="dish-desc">${item.description.substring(0, 75)}...</p>
        <div class="dish-specs-row">
          <span><i class="fa-solid fa-fire-burner"></i> ${item.calories} kcal</span>
          <span><i class="fa-solid fa-kitchen-set"></i> ${item.category}</span>
        </div>
        <button class="btn btn-secondary btn-block btn-sm" onclick="openQuickViewModal(${item.id})">Customize & Order</button>
      </div>
    </div>
  `;
}

// ==================== 8. HOME VIEWS RENDERERS ====================
function renderHomeSpecials() {
  const container = document.getElementById('today-specials-container');
  if (!container) return;

  // Filter 3 items with promo deals
  const specials = FOOD_ITEMS.slice(4, 7);
  container.innerHTML = specials.map(item => `
    <div class="deal-card">
      <div class="deal-img-wrap">
        <span class="deal-badge-promo">SPECIAL DEAL</span>
        <img src="${item.image}" alt="${item.name}" class="deal-img">
      </div>
      <div class="deal-body">
        <h3>${item.name}</h3>
        <div class="deal-meta-specs">
          <span><i class="fa-solid fa-star text-star-gold"></i> ${item.rating}</span>
          <span><i class="fa-solid fa-clock"></i> ${item.prepTime}m</span>
        </div>
        <div class="deal-pricing-row">
          <span class="price-old">$${(item.price + 4).toFixed(2)}</span>
          <span class="price-new">$${item.price.toFixed(2)}</span>
        </div>
        <button class="btn btn-primary btn-sm" onclick="openQuickViewModal(${item.id})">Add to Bag</button>
      </div>
    </div>
  `).join('');
}

function renderHomePopular() {
  const container = document.getElementById('popular-dishes-container');
  if (!container) return;

  const popular = FOOD_ITEMS.slice(0, 4);
  container.innerHTML = popular.map(item => createDishCardHTML(item)).join('');
}

function renderBlogsList() {
  const container = document.getElementById('blogs-list-container');
  if (!container) return;

  container.innerHTML = BLOG_POSTS.map(post => `
    <article class="blog-card" onclick="window.location.hash='#blog-detail/${post.id}'">
      <div class="blog-img-wrap">
        <span class="blog-card-tag">${post.tag}</span>
        <img src="${post.image}" alt="${post.title}" class="dish-img">
      </div>
      <div class="blog-body">
        <div class="blog-meta">
          <span><i class="fa-solid fa-calendar-days"></i> ${post.date}</span>
          <span><i class="fa-solid fa-user-pen"></i> By ${post.author}</span>
        </div>
        <h3>${post.title}</h3>
        <p class="blog-desc">${post.excerpt}</p>
        <span class="btn-text">Read Article <i class="fa-solid fa-arrow-right"></i></span>
      </div>
    </article>
  `).join('');
}

// ==================== 9. PRODUCT DETAIL VIEW ====================
function renderDetailPage(itemId) {
  const item = FOOD_ITEMS.find(i => i.id === itemId);
  const container = document.getElementById('product-detail-page-container');
  if (!item || !container) return;

  // Custom stars
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    stars += `<i class="fa-solid fa-star ${i <= Math.floor(item.rating) ? 'accent' : 'text-secondary'}"></i>`;
  }

  container.innerHTML = `
    <div class="grid-2" style="align-items: start;">
      <div class="product-banner-visual">
        <img src="${item.image}" alt="${item.name}" class="rounded-lg shadow-large" style="width: 100%; height: auto; object-fit: cover;">
      </div>
      <div class="product-profile-info">
        <h2>${item.name}</h2>
        <div class="modal-info-rating mt-10">
          <div class="modal-stars">${stars}</div>
          <span class="modal-reviews-meta">${item.rating} Stars (${item.id * 42} global reviews)</span>
        </div>
        <div class="modal-price mt-15">$${item.price.toFixed(2)}</div>
        <p class="modal-desc">${item.description}</p>
        
        <div class="product-nutrients-box bg-secondary rounded-lg p-20 mb-20" style="padding: 20px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; text-align: center;">
          <div>
            <h4 class="accent-text">${item.calories}</h4>
            <p style="font-size: 0.72rem; color: var(--text-secondary); font-weight: 600;">Calories</p>
          </div>
          <div>
            <h4 class="accent-text">${item.nutrition.protein}</h4>
            <p style="font-size: 0.72rem; color: var(--text-secondary); font-weight: 600;">Protein</p>
          </div>
          <div>
            <h4 class="accent-text">${item.nutrition.carbs}</h4>
            <p style="font-size: 0.72rem; color: var(--text-secondary); font-weight: 600;">Carbs</p>
          </div>
          <div>
            <h4 class="accent-text">${item.nutrition.fat}</h4>
            <p style="font-size: 0.72rem; color: var(--text-secondary); font-weight: 600;">Fat</p>
          </div>
        </div>

        <div class="form-group mb-20">
          <span class="modal-custom-title">CUSTOMIZE ADDONS</span>
          <div class="modal-custom-list">
            ${item.addons.map(addon => `
              <label class="addon-checkbox-label">
                <div class="addon-meta">
                  <input type="checkbox" name="detail-addon" value="${addon.name}" data-price="${addon.price}">
                  <span>${addon.name}</span>
                </div>
                <span class="addon-price">+$${addon.price.toFixed(2)}</span>
              </label>
            `).join('')}
          </div>
        </div>

        <div class="modal-purchase-bar">
          <div class="modal-qty-selector">
            <button class="qty-btn" onclick="adjustDetailPageQty(-1)"><i class="fa-solid fa-minus"></i></button>
            <span class="qty-num" id="detail-qty-indicator">1</span>
            <button class="qty-btn" onclick="adjustDetailPageQty(1)"><i class="fa-solid fa-plus"></i></button>
          </div>
          <button class="btn btn-primary" onclick="handleAddFromDetailPage(${item.id})" style="flex:1">Add to Bag</button>
        </div>
      </div>
    </div>
  `;
}

let detailPageQty = 1;
function adjustDetailPageQty(change) {
  detailPageQty += change;
  if (detailPageQty < 1) detailPageQty = 1;
  const ind = document.getElementById('detail-qty-indicator');
  if (ind) ind.textContent = detailPageQty;
}

function handleAddFromDetailPage(itemId) {
  const item = FOOD_ITEMS.find(i => i.id === itemId);
  if (!item) return;

  const checkAddons = [];
  document.querySelectorAll("input[name='detail-addon']:checked").forEach(chk => {
    const price = parseFloat(chk.getAttribute('data-price'));
    checkAddons.push({ name: chk.value, price });
  });

  addToCart(item, detailPageQty, checkAddons);
  detailPageQty = 1; // reset
  alert(`Added ${item.name} to your shopping bag!`);
}

// ==================== 10. BLOG DETAILS VIEW ====================
function renderBlogDetailPage(postId) {
  const post = BLOG_POSTS.find(p => p.id === postId);
  const container = document.getElementById('blog-detail-content-container');
  if (!post || !container) return;

  container.innerHTML = `
    <div class="blog-detail-wrapper">
      <div class="blog-detail-meta">
        <span><i class="fa-solid fa-calendar-days"></i> ${post.date}</span>
        <span><i class="fa-solid fa-user-pen"></i> Written by ${post.author}</span>
        <span><i class="fa-solid fa-bookmark"></i> ${post.tag}</span>
      </div>
      <h2>${post.title}</h2>
      <div class="blog-detail-visual mt-20 mb-20">
        <img src="${post.image}" alt="${post.title}" class="rounded-lg shadow-md" style="width:100%; max-height:450px; object-fit:cover;">
      </div>
      <div class="blog-detail-content mt-30">
        <p>Gourmet cooking begins in the details. At Quick Bite Pro, we believe that culinary excellence is a fine blend of selection, technique, and temperature parameters. Every item on our menu is tested under rigorous quality controls before being cooked.</p>
        <p>In this chef's guide, we detail the science of taste profiling, hydration indexes, and region-sourced raw ingredients that make restaurant dining memorable. We examine how wild Swiss mushrooms release savory rich profiles when deglazed in butter wine mixtures.</p>
        <blockquote>"gastronomy is the intelligent knowledge of whatever concerns man's nourishment."</blockquote>
        <p>Try matching our classic Caesar Salad dressing recipe, composed of micro-blended parmesan, garlic oil emulsions, and anchovy salts, to elevate simple home entrees instantly.</p>
      </div>

      <!-- Comments -->
      <div class="blog-comments-section">
        <h3>Comments (2)</h3>
        <div class="comment-card mt-20">
          <div class="comment-avatar">👨</div>
          <div class="comment-meta">
            <h4>David Beckham</h4>
            <div class="comment-date">June 29, 2026 at 11:20 AM</div>
            <p>Absolutely love the insights on dough hydrations. I tried baking sourdough margherita pizzas at home, and the leopard-crust advice works wonders!</p>
          </div>
        </div>
        <div class="comment-card">
          <div class="comment-avatar">👩</div>
          <div class="comment-meta">
            <h4>Jessica Miller</h4>
            <div class="comment-date">June 26, 2026 at 09:42 PM</div>
            <p>The garlic butter herb reduction on the lobster tail is simply Michelin-level. Thanks for outlining the sauce ratios!</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==================== 11. CART OPERATIONS ====================
function addToCart(menuItem, qty, addons = []) {
  const addonIds = addons.map(a => a.name).sort().join('|');
  const customId = `${menuItem.id}-${addonIds}`;

  const idx = cart.findIndex(c => c.customId === customId);
  if (idx > -1) {
    cart[idx].quantity += qty;
  } else {
    cart.push({
      customId,
      menuItem,
      quantity: qty,
      addons
    });
  }

  localStorage.setItem('pro_cart', JSON.stringify(cart));
  updateGlobalCounters();
  renderSideCartDrawer();
}

function updateGlobalCounters() {
  const qtyTotal = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelectorAll('.cart-badge').forEach(badge => {
    badge.textContent = qtyTotal;
  });

  const wishTotal = wishlist.length;
  document.querySelectorAll('.wishlist-badge').forEach(badge => {
    badge.textContent = wishTotal;
  });
}

function toggleWishlist(itemId, btn) {
  const idx = wishlist.findIndex(w => w.id === itemId);
  if (idx > -1) {
    wishlist.splice(idx, 1);
    btn.classList.remove('added');
  } else {
    const item = FOOD_ITEMS.find(i => i.id === itemId);
    if (item) {
      wishlist.push(item);
      btn.classList.add('added');
    }
  }

  localStorage.setItem('pro_wishlist', JSON.stringify(wishlist));
  updateGlobalCounters();
  renderProfileWishlist();
}

// Side cart drawer renderer
function renderSideCartDrawer() {
  const container = document.getElementById('side-cart-items-container');
  const billingBox = document.getElementById('side-cart-footer-billing');
  
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state">
        <i class="fa-solid fa-shopping-bag"></i>
        <p>Your bag is empty. Start adding delicious items from the menu!</p>
        <a href="#menu" class="btn btn-primary btn-sm cart-close-btn">Browse Menu</a>
      </div>
    `;
    billingBox.classList.add('hidden');
    return;
  }

  billingBox.classList.remove('hidden');
  container.innerHTML = '';

  let subtotal = 0;

  cart.forEach(item => {
    const base = item.menuItem.price;
    const addPrice = item.addons.reduce((s, a) => s + a.price, 0);
    const unit = base + addPrice;
    const totalItem = unit * item.quantity;
    subtotal += totalItem;

    const addonsText = item.addons.length > 0
      ? item.addons.map(a => `+ ${a.name}`).join(', ')
      : 'Standard';

    const cartItemEl = document.createElement('div');
    cartItemEl.className = 'side-cart-item';
    cartItemEl.innerHTML = `
      <img src="${item.menuItem.image}" alt="${item.menuItem.name}" class="side-cart-img">
      <div class="side-cart-details">
        <h4>${item.menuItem.name}</h4>
        <p>${addonsText}</p>
        <span class="side-cart-price">$${totalItem.toFixed(2)}</span>
      </div>
      <div class="side-cart-controls">
        <button class="side-qty-btn" onclick="adjustSideCartQty('${item.customId}', -1)"><i class="fa-solid fa-minus"></i></button>
        <span class="side-qty-val">${item.quantity}</span>
        <button class="side-qty-btn" onclick="adjustSideCartQty('${item.customId}', 1)"><i class="fa-solid fa-plus"></i></button>
        <button onclick="removeSideCartItem('${item.customId}')" class="cart-action-btn-del" style="margin-left:4px;"><i class="fa-solid fa-trash-can"></i></button>
      </div>
    `;
    container.appendChild(cartItemEl);
  });

  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  document.getElementById('side-cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('side-cart-total').textContent = `$${total.toFixed(2)}`;
}

function adjustSideCartQty(customId, change) {
  const idx = cart.findIndex(c => c.customId === customId);
  if (idx === -1) return;

  cart[idx].quantity += change;
  if (cart[idx].quantity <= 0) {
    cart.splice(idx, 1);
  }

  localStorage.setItem('pro_cart', JSON.stringify(cart));
  updateGlobalCounters();
  renderSideCartDrawer();

  // If currently viewing cart page, update that too
  if (window.location.hash === '#cart') {
    renderCartPage();
  }
}

function removeSideCartItem(customId) {
  cart = cart.filter(c => c.customId !== customId);
  localStorage.setItem('pro_cart', JSON.stringify(cart));
  updateGlobalCounters();
  renderSideCartDrawer();

  if (window.location.hash === '#cart') {
    renderCartPage();
  }
}

// ==================== 12. SHOPPING CART PAGE VIEW ====================
function renderCartPage() {
  const container = document.getElementById('cart-page-container');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="cart-empty-state" style="grid-column: 1/-1; padding: 100px 0;">
        <i class="fa-solid fa-shopping-cart" style="font-size: 4rem; color: var(--accent); margin-bottom: 20px;"></i>
        <h2>Your Shopping Bag is Empty</h2>
        <p>Looks like you haven't added any dishes to your order yet.</p>
        <a href="#menu" class="btn btn-primary mt-20">View Our Menu</a>
      </div>
    `;
    return;
  }

  let subtotal = 0;
  let rowsHtml = '';

  cart.forEach(item => {
    const base = item.menuItem.price;
    const addPrice = item.addons.reduce((s, a) => s + a.price, 0);
    const unit = base + addPrice;
    const totalItem = unit * item.quantity;
    subtotal += totalItem;

    const addonsText = item.addons.length > 0
      ? item.addons.map(a => `+ ${a.name} (+$${a.price.toFixed(2)})`).join(', ')
      : 'Standard';

    rowsHtml += `
      <tr>
        <td>
          <div class="cart-item-meta">
            <img src="${item.menuItem.image}" alt="${item.menuItem.name}">
            <div class="cart-item-name">
              <h4>${item.menuItem.name}</h4>
              <p>${addonsText}</p>
            </div>
          </div>
        </td>
        <td>$${unit.toFixed(2)}</td>
        <td>
          <div class="cart-qty-wrap">
            <button class="side-qty-btn" onclick="adjustSideCartQty('${item.customId}', -1)"><i class="fa-solid fa-minus"></i></button>
            <span class="qty-input-box">${item.quantity}</span>
            <button class="side-qty-btn" onclick="adjustSideCartQty('${item.customId}', 1)"><i class="fa-solid fa-plus"></i></button>
          </div>
        </td>
        <td>$${totalItem.toFixed(2)}</td>
        <td>
          <button onclick="removeSideCartItem('${item.customId}')" class="cart-action-btn-del"><i class="fa-solid fa-trash-can"></i></button>
        </td>
      </tr>
    `;
  });

  const tax = subtotal * 0.08;
  const delivery = 2.99;
  const total = subtotal + tax + delivery;

  container.innerHTML = `
    <div class="table-responsive shadow-sm rounded-lg" style="background-color: var(--bg-card); border: 1px solid var(--border-color);">
      <table class="table-cart">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    </div>

    <!-- Summary Box -->
    <div class="cart-summary-card">
      <h3>Summary Detail</h3>
      <div class="summary-row">
        <span>Cart Subtotal</span>
        <span>$${subtotal.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span>Govt. Tax (8%)</span>
        <span>$${tax.toFixed(2)}</span>
      </div>
      <div class="summary-row">
        <span>Standard Delivery</span>
        <span>$${delivery.toFixed(2)}</span>
      </div>
      <div class="summary-row total">
        <span>Final Total</span>
        <span>$${total.toFixed(2)}</span>
      </div>
      
      <div class="promo-coupon-box">
        <input type="text" placeholder="Promo Code (QK20)" id="cart-coupon-input">
        <button class="btn btn-secondary btn-sm" onclick="applyPromoCoupon()">Apply</button>
      </div>

      <a href="#checkout" class="btn btn-primary btn-block mt-30">Proceed To Checkout</a>
    </div>
  `;
}

let isCouponApplied = false;
function applyPromoCoupon() {
  const val = document.getElementById('cart-coupon-input').value.trim().toUpperCase();
  if (val === 'QK20') {
    if (isCouponApplied) {
      alert('Promo code is already applied.');
      return;
    }
    isCouponApplied = true;
    alert('Promo code QK20 applied! 20% discount will be calculated at checkout.');
    renderCartPage();
  } else {
    alert('Invalid coupon code. Try "QK20".');
  }
}

// ==================== 13. CHECKOUT & SECURE BILLING ====================
function renderCheckoutPage() {
  const container = document.getElementById('checkout-recap-box');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `<p>Cart is empty. Please add items to buy.</p>`;
    return;
  }

  let subtotal = 0;
  let itemsHtml = '';

  cart.forEach(item => {
    const base = item.menuItem.price;
    const addPrice = item.addons.reduce((s, a) => s + a.price, 0);
    const unit = base + addPrice;
    const totalItem = unit * item.quantity;
    subtotal += totalItem;

    itemsHtml += `
      <div class="summary-row" style="font-size:0.85rem;">
        <span>${item.menuItem.name} (x${item.quantity})</span>
        <span>$${totalItem.toFixed(2)}</span>
      </div>
    `;
  });

  let discount = 0;
  if (isCouponApplied) {
    discount = subtotal * 0.20;
  }

  const tax = (subtotal - discount) * 0.08;
  const delivery = 2.99;
  const total = subtotal - discount + tax + delivery;

  container.innerHTML = `
    <h3>Order Summary</h3>
    
    <div class="checkout-items-list mb-20" style="display:flex; flex-direction:column; gap:10px; border-bottom:1.5px solid var(--border-color); padding-bottom:15px;">
      ${itemsHtml}
    </div>

    <div class="summary-row">
      <span>Subtotal</span>
      <span>$${subtotal.toFixed(2)}</span>
    </div>
    ${isCouponApplied ? `
      <div class="summary-row" style="color:var(--success);">
        <span>Promo Discount (20%)</span>
        <span>-$${discount.toFixed(2)}</span>
      </div>
    ` : ''}
    <div class="summary-row">
      <span>Tax (8%)</span>
      <span>$${tax.toFixed(2)}</span>
    </div>
    <div class="summary-row">
      <span>Delivery Fee</span>
      <span>$${delivery.toFixed(2)}</span>
    </div>
    <div class="summary-row total">
      <span>Order Total</span>
      <span>$${total.toFixed(2)}</span>
    </div>

    <button class="btn btn-primary btn-block mt-30" onclick="handlePlaceOrderSubmit()">Place Secured Order</button>
  `;
}

function handlePlaceOrderSubmit() {
  // Mock order verification
  const shipAddr = document.getElementById('ship-address').value.trim();
  const payMethod = document.querySelector("input[name='pay-method']:checked").value;
  
  if (!shipAddr) {
    alert('Please enter a delivery street address.');
    return;
  }

  // Clear Cart
  cart = [];
  localStorage.removeItem('pro_cart');
  updateGlobalCounters();

  // Populate Order Confirm Modal details
  const randomOrderId = `ORD-${Math.floor(10000 + Math.random() * 90000)}`;
  document.getElementById('confirm-order-id').textContent = randomOrderId;
  document.getElementById('confirm-order-address').textContent = shipAddr;

  // Open Order Confirm Modal
  document.getElementById('order-confirm-modal').classList.add('open');
}

// ==================== 14. DISPATCH TIMELINE GPS TRACKER ====================
let trackingTimerInterval;
function startDispatchTrackingSimulation() {
  // Clear any existing tracking interval
  clearInterval(trackingTimerInterval);

  const fill = document.getElementById('track-progress-fill');
  const nodes = [
    { el: document.getElementById('node-received'), percent: '0%' },
    { el: document.getElementById('node-preparing'), percent: '25%' },
    { el: document.getElementById('node-cooking'), percent: '50%' },
    { el: document.getElementById('node-transit'), percent: '75%' },
    { el: document.getElementById('node-arrived'), percent: '100%' }
  ];

  const marker = document.getElementById('map-courier-marker');
  const etaText = document.getElementById('track-order-eta');

  // Reset timeline classes
  nodes.forEach(node => node.el.classList.remove('active'));
  nodes[0].el.classList.add('active');
  fill.style.width = '0%';
  marker.style.left = '12%'; // origin
  etaText.textContent = 'In 28 minutes';

  let step = 0;

  // Simulate progress node intervals
  trackingTimerInterval = setInterval(() => {
    step++;
    if (step < nodes.length) {
      nodes[step].el.classList.add('active');
      fill.style.width = nodes[step].percent;
      
      // Update courier marker on map
      const mapPercentages = ['12%', '28%', '45%', '65%', '85%'];
      marker.style.left = mapPercentages[step];

      // Update ETA
      const etas = ['In 28 minutes', 'In 24 minutes', 'In 18 minutes', 'In 8 minutes', 'Arrived!'];
      etaText.textContent = etas[step];

      if (step === 3) {
        // Motorcycle transit state
        marker.querySelector('i').className = 'fa-solid fa-motorcycle';
      } else if (step === 4) {
        // Arrived
        marker.querySelector('i').className = 'fa-solid fa-house-chimney-check';
        clearInterval(trackingTimerInterval);
      }
    }
  }, 5000);
}

// ==================== 15. BOOKING FORM SUBMISSION ====================
function initFormSubmissions() {
  const reserveForm = document.getElementById('pro-reservation-form');
  const reserveSuccess = document.getElementById('pro-reservation-success');
  const receiptBox = document.getElementById('pro-reservation-receipt-box');

  reserveForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('pro-name').value;
    const email = document.getElementById('pro-email').value;
    const phone = document.getElementById('pro-phone').value;
    const date = document.getElementById('pro-date').value;
    const time = document.getElementById('pro-time').value;
    const guests = document.getElementById('pro-guests').value;
    const seating = document.getElementById('pro-seating').value;
    const requests = document.getElementById('pro-requests').value || 'None';

    const voucherId = `VOU-${Math.floor(1000 + Math.random() * 9000)}`;

    receiptBox.innerHTML = `
<div class="receipt-title">QUICK BITE DINE-IN VOUCHER</div>
<div class="receipt-row"><span>Receipt ID:</span><span>${voucherId}</span></div>
<div class="receipt-row"><span>Guest Name:</span><span>${name}</span></div>
<div class="receipt-row"><span>Contact:</span><span>${phone}</span></div>
<div class="receipt-row"><span>Date:</span><span>${date}</span></div>
<div class="receipt-row"><span>Seating:</span><span>${seating} Cabin</span></div>
<div class="receipt-row"><span>Party Size:</span><span>${guests} People</span></div>
<div class="receipt-row"><span>Time slot:</span><span>${time}</span></div>
<div class="receipt-row"><span>Requests:</span><span>${requests}</span></div>
<div class="receipt-row" style="border-top:1px dashed var(--border-color); padding-top:10px; margin-top:10px; font-weight:700;"><span>Status:</span><span>CONFIRMED</span></div>
    `;

    // Swap screens
    reserveSuccess.classList.remove('hidden');
  });

  document.getElementById('btn-reset-reserve').addEventListener('click', () => {
    reserveForm.reset();
    reserveSuccess.classList.add('hidden');
  });

  // Contact form submit
  const contactForm = document.getElementById('contact-form-submit');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you! Your inquiry has been dispatched to our support mailboxes.');
      contactForm.reset();
    });
  }

  // Newsletter signup footer
  const newsForm = document.getElementById('footer-newsletter-form');
  if (newsForm) {
    newsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const mail = newsForm.querySelector('input').value;
      alert(`Success! ${mail} subscribed to our recipe & offers newsletter.`);
      newsForm.reset();
    });
  }
}

// ==================== 16. WISHLIST RENDER (PROFILE VIEW) ====================
function renderProfileWishlist() {
  const container = document.getElementById('profile-wishlist-container');
  if (!container) return;

  if (wishlist.length === 0) {
    container.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:var(--text-secondary); padding: 30px 0;">Your wishlist is empty. Browse dishes and press the heart icon!</p>`;
    return;
  }

  container.innerHTML = wishlist.map(item => `
    <div class="dish-card">
      <div class="dish-img-wrap">
        <span class="dish-badge-overlay">
          <i class="fa-solid fa-star"></i>
          <span>${item.rating}</span>
        </span>
        <button class="wishlist-trigger-btn added" onclick="toggleWishlist(${item.id}, this)">
          <i class="fa-solid fa-heart"></i>
        </button>
        <img src="${item.image}" alt="${item.name}" class="dish-img" onclick="window.location.hash='#detail/${item.id}'">
      </div>
      <div class="dish-body">
        <div class="dish-title-row">
          <h3 class="dish-title" onclick="window.location.hash='#detail/${item.id}'">${item.name}</h3>
          <span class="dish-price">$${item.price.toFixed(2)}</span>
        </div>
        <p class="dish-desc">${item.description.substring(0, 50)}...</p>
        <button class="btn btn-secondary btn-block btn-sm" onclick="openQuickViewModal(${item.id})">Add to Bag</button>
      </div>
    </div>
  `).join('');
}

// ==================== 17. DIALOG MODAL CONTROLLER ====================
function openQuickViewModal(itemId) {
  const item = FOOD_ITEMS.find(i => i.id === itemId);
  const modal = document.getElementById('quick-view-modal');
  const container = document.getElementById('quick-modal-content-container');
  
  if (!item || !modal || !container) return;

  let stars = '';
  for (let i = 1; i <= 5; i++) {
    stars += `<i class="fa-solid fa-star ${i <= Math.floor(item.rating) ? 'accent' : 'text-secondary'}"></i>`;
  }

  container.innerHTML = `
    <div class="modal-visual">
      <img src="${item.image}" alt="${item.name}">
    </div>
    <div class="modal-info">
      <h2>${item.name}</h2>
      <div class="modal-info-rating">
        <div class="modal-stars">${stars}</div>
        <span class="modal-reviews-meta">${item.rating} Stars (${item.reviews || item.id * 15} reviews)</span>
      </div>
      <div class="modal-price" id="quick-modal-price-display">$${item.price.toFixed(2)}</div>
      <p class="modal-desc">${item.description}</p>
      
      <div class="form-group mb-25">
        <span class="modal-custom-title">Customize Addons</span>
        <div class="modal-custom-list">
          ${item.addons.map(addon => `
            <label class="addon-checkbox-label">
              <div class="addon-meta">
                <input type="checkbox" name="quick-addon" value="${addon.name}" data-price="${addon.price}">
                <span>${addon.name}</span>
              </div>
              <span class="addon-price">+$${addon.price.toFixed(2)}</span>
            </label>
          `).join('')}
        </div>
      </div>

      <div class="modal-purchase-bar">
        <div class="modal-qty-selector">
          <button class="qty-btn" id="quick-modal-qty-minus"><i class="fa-solid fa-minus"></i></button>
          <span class="qty-num" id="quick-modal-qty-val">1</span>
          <button class="qty-btn" id="quick-modal-qty-plus"><i class="fa-solid fa-plus"></i></button>
        </div>
        <button class="btn btn-primary" id="quick-modal-add-btn" style="flex:1">Add to Bag</button>
      </div>
    </div>
  `;

  // Attach handlers
  let modalQty = 1;
  const qtyVal = container.querySelector('#quick-modal-qty-val');
  const btnMinus = container.querySelector('#quick-modal-qty-minus');
  const btnPlus = container.querySelector('#quick-modal-qty-plus');
  const btnAdd = container.querySelector('#quick-modal-add-btn');
  const priceDisp = container.querySelector('#quick-modal-price-display');
  const checkboxes = container.querySelectorAll("input[name='quick-addon']");

  const recalcPrice = () => {
    let base = item.price;
    checkboxes.forEach(chk => {
      if (chk.checked) {
        base += parseFloat(chk.getAttribute('data-price'));
      }
    });
    priceDisp.textContent = `$${(base * modalQty).toFixed(2)}`;
  };

  btnMinus.addEventListener('click', () => {
    if (modalQty > 1) {
      modalQty--;
      qtyVal.textContent = modalQty;
      recalcPrice();
    }
  });

  btnPlus.addEventListener('click', () => {
    modalQty++;
    qtyVal.textContent = modalQty;
    recalcPrice();
  });

  checkboxes.forEach(chk => {
    chk.addEventListener('change', recalcPrice);
  });

  btnAdd.addEventListener('click', () => {
    const chosenAddons = [];
    checkboxes.forEach(chk => {
      if (chk.checked) {
        chosenAddons.push({
          name: chk.value,
          price: parseFloat(chk.getAttribute('data-price'))
        });
      }
    });

    addToCart(item, modalQty, chosenAddons);
    modal.classList.remove('open');
  });

  modal.classList.add('open');
}

function initModalHandlers() {
  document.querySelectorAll('.modal-overlay, .modal-close-btn, .close-modal-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.target.closest('.modal').classList.remove('open');
    });
  });
}

// ==================== 18. INTERFACE TOGGLES (AUTH, PROFILE, POLICY) ====================
function switchAuthTab(tab) {
  activeAuthTab = tab;
  document.querySelectorAll('.auth-tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelectorAll('.auth-panel').forEach(p => p.classList.add('hidden'));

  if (tab === 'login') {
    document.querySelectorAll('.auth-tab-btn')[0].classList.add('active');
    document.getElementById('auth-panel-login').classList.remove('hidden');
  } else if (tab === 'register') {
    document.querySelectorAll('.auth-tab-btn')[1].classList.add('active');
    document.getElementById('auth-panel-register').classList.remove('hidden');
  } else if (tab === 'forgot') {
    document.getElementById('auth-panel-forgot').classList.remove('hidden');
  }
}

function switchProfileTab(tab) {
  activeProfileTab = tab;
  document.querySelectorAll('.profile-menu-link').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelectorAll('.profile-tab-content').forEach(pane => {
    pane.classList.add('hidden');
  });

  // Highlight selected button
  const mapping = {
    'dashboard': 0,
    'orders': 1,
    'wishlist': 2,
    'settings': 3
  };
  const idx = mapping[tab];
  if (idx !== undefined) {
    document.querySelectorAll('.profile-menu-link')[idx].classList.add('active');
  }

  const targetPane = document.getElementById(`profile-tab-${tab}`);
  if (targetPane) {
    targetPane.classList.remove('hidden');
  }

  if (tab === 'wishlist') {
    renderProfileWishlist();
  }
}

function activateProfileTab(tab) {
  switchProfileTab(tab);
  window.location.hash = '#profile';
}

function switchPolicyTab(tab) {
  activePolicyTab = tab;
  document.querySelectorAll('.policy-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.policy-tab-pane').forEach(pane => pane.classList.add('hidden'));

  const btnMapping = {
    'privacy': 0,
    'terms': 1,
    'delivery': 2
  };
  document.querySelectorAll('.policy-tab-btn')[btnMapping[tab]].classList.add('active');
  document.getElementById(`policy-pane-${tab}`).classList.remove('hidden');
}

// Side cart drawer trigger
function initSideCartToggle() {
  const trigger = document.querySelector('.cart-trigger');
  const sidebar = document.getElementById('side-cart-sidebar');
  const close = sidebar.querySelector('.cart-close-btn');
  const overlay = sidebar.querySelector('.cart-overlay');

  trigger.addEventListener('click', () => {
    renderSideCartDrawer();
    sidebar.classList.add('open');
  });

  close.addEventListener('click', () => sidebar.classList.remove('open'));
  overlay.addEventListener('click', () => sidebar.classList.remove('open'));
  
  // Close when clicking anchors inside drawer
  sidebar.querySelectorAll('.cart-close-btn').forEach(btn => {
    btn.addEventListener('click', () => sidebar.classList.remove('open'));
  });
}

// Accordion FAQ Toggles
function initAccordionFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-accordion-item');
      const pane = item.querySelector('.faq-answer');
      const isAlreadyActive = item.classList.contains('active');

      // Reset all other faq items
      document.querySelectorAll('.faq-accordion-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-answer').style.maxHeight = null;
      });

      if (!isAlreadyActive) {
        item.classList.add('active');
        pane.style.maxHeight = pane.scrollHeight + "px";
      }
    });
  });
}

// Auth mock actions
const authLoginForm = document.getElementById('auth-login-form');
if (authLoginForm) {
  authLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const mail = document.getElementById('login-email').value;
    const nameStr = mail.split('@')[0];
    
    // Set mock user profile
    document.getElementById('user-display-name').textContent = nameStr.charAt(0).toUpperCase() + nameStr.slice(1);
    alert(`Signed in successfully as ${mail}!`);
    authLoginForm.reset();
    
    // Redirect to profile dashboard
    switchProfileTab('dashboard');
    window.location.hash = '#profile';
  });
}

const authRegForm = document.getElementById('auth-register-form');
if (authRegForm) {
  authRegForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    alert(`Account successfully created for ${name}! Please login.`);
    authRegForm.reset();
    switchAuthTab('login');
  });
}

function handleMockLogout() {
  document.getElementById('user-display-name').textContent = "Guest User";
  alert('You have logged out of Quick Bite Pro.');
  window.location.hash = '#home';
}

// Mobile sidebar navbar
const mobMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinksWrap = document.querySelector('.nav-links');
if (mobMenuBtn) {
  mobMenuBtn.addEventListener('click', () => {
    navLinksWrap.classList.toggle('open');
    const icon = mobMenuBtn.querySelector('i');
    if (navLinksWrap.classList.contains('open')) {
      icon.className = 'fa-solid fa-xmark';
    } else {
      icon.className = 'fa-solid fa-bars';
    }
  });
}

// Reset filters in menu explorer
const resetFiltersBtn = document.getElementById('menu-reset-filters');
if (resetFiltersBtn) {
  resetFiltersBtn.addEventListener('click', () => {
    document.getElementById('menu-view-search').value = '';
    document.getElementById('menu-view-sort').value = 'popularity';
    document.getElementById('menu-view-price').value = 35;
    document.getElementById('menu-view-preptime').value = 'any';
    currentMenuCategoryFilter = 'all';
    filterAndRenderMenu();
  });
}

// Trigger menu filters on sidebar input changes
const filterSearchInp = document.getElementById('menu-view-search');
if (filterSearchInp) {
  filterSearchInp.addEventListener('input', filterAndRenderMenu);
}
const filterSortSel = document.getElementById('menu-view-sort');
if (filterSortSel) {
  filterSortSel.addEventListener('change', filterAndRenderMenu);
}
const filterPriceRng = document.getElementById('menu-view-price');
if (filterPriceRng) {
  filterPriceRng.addEventListener('input', filterAndRenderMenu);
}
const filterPrepSel = document.getElementById('menu-view-preptime');
if (filterPrepSel) {
  filterPrepSel.addEventListener('change', filterAndRenderMenu);
}

// Auto update special deals countdown timers
setInterval(() => {
  const hrsEl = document.getElementById('countdown-hours');
  const minsEl = document.getElementById('countdown-mins');
  const secsEl = document.getElementById('countdown-secs');
  
  if (!hrsEl) return;

  let hrs = parseInt(hrsEl.textContent);
  let mins = parseInt(minsEl.textContent);
  let secs = parseInt(secsEl.textContent);

  secs--;
  if (secs < 0) {
    secs = 59;
    mins--;
    if (mins < 0) {
      mins = 59;
      hrs--;
      if (hrs < 0) {
        hrs = 4; // reset loop
      }
    }
  }

  hrsEl.textContent = hrs < 10 ? '0' + hrs : hrs;
  minsEl.textContent = mins < 10 ? '0' + mins : mins;
  secsEl.textContent = secs < 10 ? '0' + secs : secs;
}, 1000);

// Detect dropdown click on mobile
const dropTrigger = document.querySelector('.dropdown-trigger');
if (dropTrigger) {
  dropTrigger.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const content = dropTrigger.nextElementSibling;
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    }
  });
}
// ==================== ANIMATED COUNTERS (Why Us Stats) ====================
function animateCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-target'));
      const duration = 1800;
      const step = Math.ceil(target / (duration / 16));
      let current = 0;

      const tick = () => {
        current = Math.min(current + step, target);
        el.textContent = current.toLocaleString();
        if (current < target) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.4 });

  counters.forEach(c => observer.observe(c));
}

// Run counter animation after preloader hides
setTimeout(animateCounters, 1200);

// ==================== PROFILE SETTINGS FORM ====================
const profileSettingsForm = document.getElementById('profile-settings-form');
if (profileSettingsForm) {
  profileSettingsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('settings-name').value;
    document.getElementById('user-display-name').textContent = name;
    alert(`Profile settings saved successfully for ${name}!`);
  });
}

// ==================== PAYMENT METHOD SELECTOR ====================
document.querySelectorAll("input[name='pay-method']").forEach(radio => {
  radio.addEventListener('change', () => {
    document.querySelectorAll('.payment-method-option').forEach(opt => {
      opt.classList.remove('active');
    });
    radio.closest('.payment-method-option').classList.add('active');

    const ccBox = document.getElementById('credit-card-fields-box');
    if (ccBox) {
      if (radio.value === 'card') {
        ccBox.classList.remove('hidden');
      } else {
        ccBox.classList.add('hidden');
      }
    }
  });
});

// ==================== AUTH FORM HANDLERS ====================
const authForgotForm = document.getElementById('auth-forgot-form');
if (authForgotForm) {
  authForgotForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const mail = document.getElementById('forgot-email').value;
    alert(`Recovery instructions sent to ${mail}. Please check your inbox.`);
    authForgotForm.reset();
    switchAuthTab('login');
  });
}

// ==================== SCROLL TO TOP BUTTON ====================
const scrollBtn = document.createElement('button');
scrollBtn.id = 'scroll-top-btn';
scrollBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
scrollBtn.setAttribute('aria-label', 'Scroll to top');
scrollBtn.style.cssText = `
  position: fixed;
  bottom: 28px;
  right: 28px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--accent);
  color: white;
  border: none;
  cursor: pointer;
  z-index: 99;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  box-shadow: 0 6px 20px rgba(255,107,53,0.4);
  transition: all 0.3s ease;
`;
document.body.appendChild(scrollBtn);

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollBtn.style.display = 'flex';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
