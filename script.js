const STORAGE_KEYS = {
  cart: "simba-cart",
  theme: "simba-theme",
  language: "simba-language",
  selectedBranch: "simba-selected-branch",
};

const translations = {
  en: {
    announceText: "Modern shopping for Kigali families, offices, and everyday essentials.",
    announcePill: "Same-day delivery available",
    brandTagline: "Fresh groceries, home essentials, and fast shopping in Rwanda",
    navAisles: "Aisles",
    navFeatured: "Featured",
    navShop: "Products",
    navBranches: "Branches",
    navAbout: "About",
    navContact: "Contact",
    navCheckout: "Checkout",
    navAccount: "Account",
    menu: "Menu",
    branchLabel: "Branch",
    theme: "Theme",
    cart: "Cart",
    heroBadge: "Simba Supermarket online",
    heroTitle: "Everything your home needs, from fresh produce to trusted daily essentials",
    heroText:
      "Shop food products, cleaning supplies, drinks, beauty, kitchenware, and household favorites with a cleaner storefront built for everyday customers in Rwanda.",
    shopNow: "Start shopping",
    exploreAisles: "Explore aisles",
    popularSearches: "Popular:",
    metricCategories: "main shopping aisles",
    metricProducts: "real Simba products live",
    metricPayment: "branches available",
    spotlightToday: "Selected branch",
    spotlightTitle: "Union Trade Centre",
    spotlightText: "3336+MHV Union Trade Centre, 1 KN 4 Ave, Kigali",
    shopThisBranch: "Shop this branch",
    viewAllBranches: "View all branches",
    featureFast: "Fast delivery",
    featureFastValue: "Choose a branch first for better stock and delivery details",
    featureFresh: "Clearer browsing",
    featureFreshValue: "Search by aisle, compare offers, and shop faster on any screen",
    featureTrusted: "Better trust signals",
    featureTrustedValue: "Pickup, delivery, payment, and support stay visible while you shop",
    departmentsBadge: "Departments",
    departmentsTitle: "Shop by department",
    departmentsText: "Quick aisle shortcuts inspired by large marketplace navigation.",
    departmentSearchLabel: "Search inside departments",
    departmentSearchPlaceholder: "Search rice, drinks, baby...",
    departmentEmpty: "No matching department found.",
    promoBadge: "Promo highlights",
    promoTitle: "Weekly deals, bundles, and fast-moving offers",
    shoppingRowsBadge: "Shopping rows",
    shoppingRowsTitle: "Curated shelves that feel more like a real marketplace",
    shoppingRowsText: "These rows help shoppers discover products by intent instead of only by category.",
    trustOneTitle: "Shop by category",
    trustOneText: "Main aisles inspired by the real Simba store structure",
    trustTwoTitle: "Branch-aware shopping",
    trustTwoText: "Selected branch stock, pickup, and delivery context carried into cart and checkout",
    trustThreeTitle: "Everyday convenience",
    trustThreeText: "Mobile-friendly browsing, account tools, and quick checkout with Mobile Money",
    pickupPriorityBadge: "Demo-day flow",
    pickupPriorityTitle: "Pick-up first, then delivery",
    pickupPriorityText:
      "Choose a Kigali branch, select a pickup time, confirm with a small MoMo deposit, and let the branch team prepare your basket.",
    pickupPriorityDepositTitle: "MoMo deposit",
    pickupPriorityDepositText: "A 500 RWF confirmation deposit protects branch staff time before prep starts.",
    pickupPriorityStockTitle: "Branch-level stock",
    pickupPriorityStockText: "Each Simba branch tracks its own stock, so Remera orders do not affect Kimironko inventory.",
    pickupPriorityOpsTitle: "Manager to staff flow",
    pickupPriorityOpsText: "Orders land in the branch dashboard, managers assign staff, and teams mark orders ready for pickup.",
    proofBadge: "Why Simba feels trusted",
    proofTitle: "Built around real Kigali shopping, not generic grocery UI",
    proofText:
      "Real branch names, branch-level stock, MoMo-friendly checkout, and multilingual browsing make Simba feel like a local brand customers already know.",
    proofMomoTitle: "MoMo ready",
    proofMomoText: "Customers see the deposit clearly before checkout confirmation.",
    proofLanguageTitle: "Trilingual journey",
    proofLanguageText: "English, Kinyarwanda, and French stay persistent across the storefront flow.",
    proofBranchTitle: "Real branch coverage",
    proofBranchText: "Each Kigali branch has its own pickup context, map view, and inventory story.",
    workflowBadge: "How Simba works",
    workflowTitle: "A smoother pick-up journey from basket to branch counter",
    workflowText: "The homepage now explains the demo-day flow clearly before users ever hit checkout.",
    workflowStepOneTitle: "Shop your branch",
    workflowStepOneText: "Choose Remera, Kimironko, Kacyiru, or another Simba branch before adding items.",
    workflowStepTwoTitle: "Confirm with MoMo deposit",
    workflowStepTwoText: "A small non-refundable deposit protects staff time and confirms serious orders.",
    workflowStepThreeTitle: "Branch team prepares fast",
    workflowStepThreeText: "Managers assign staff, stock updates at that branch, and the order moves to ready for pickup.",
    branchesShowcaseBadge: "Branches",
    branchesShowcaseTitle: "Shop from the branch that works best for you",
    branchesShowcaseText:
      "Branch selection keeps the shopping experience more practical by matching stock and delivery context to your preferred location.",
    aislesBadge: "Main aisles",
    aislesTitle: "Browse the supermarket the modern way",
    aislesText:
      "Instead of long old-style category lists, these quick tiles surface the main departments shoppers care about first.",
    featuredBadge: "Featured shelves",
    featuredTitle: "Popular picks and weekly highlights",
    featuredText:
      "This section gives the homepage energy, helps discovery, and makes the store feel more alive than a plain list.",
    electronicsBadge: "Smart home picks",
    electronicsTitle: "Electronics that deserve more visibility",
    electronicsText:
      "We now give electronics its own spotlight so high-value items do not disappear inside a long supermarket catalog.",
    catalogBadge: "Digital supermarket",
    catalogTitle: "Search, filter, and add to cart quickly",
    catalogNote:
      "The catalog below keeps the power of the old store, but packages it in a cleaner and more responsive layout.",
    assistantBadge: "Smart search",
    assistantTitle: "Ask Simba what you need",
    assistantNote: 'Try phrases like "I need breakfast", "show fresh milk", or "cheap cleaning products".',
    assistantInputLabel: "Your request",
    assistantPlaceholder: "I need something for breakfast",
    assistantAction: "Ask Simba",
    assistantEmpty: "Ask for a meal, product, branch need, or budget and Simba will guide you.",
    assistantNone: "I could not find a close match yet.",
    assistantThinking: "Simba is thinking through the best options for you...",
    assistantSuggestions: "Recommended matches",
    assistantNextStep: "You can add one now or refine the search above.",
    assistantBudgetHint: "I prioritized value picks and broad everyday matches.",
    assistantAdd: "Add to cart",
    assistantReset: "Reset",
    assistantRefine1: "Show cheaper options",
    assistantRefine2: "Fresh options only",
    assistantRefine3: "What goes with this?",
    assistantGroqFallback: "Groq is unavailable right now, so Simba used local catalog matching instead.",
    assistantSourceGroq: "Powered by Groq AI",
    assistantSourceFallback: "Using Simba catalog fallback",
    assistantPrompt1: "Do you have fresh milk?",
    assistantPrompt2: "I need something for breakfast",
    assistantPrompt3: "Show cheap cleaning products",
    searchLabel: "Manual refine",
    searchPlaceholder: "Search rice, juice, shampoo...",
    categoryLabel: "Category",
    priceLabel: "Max price",
    loading: "Loading products...",
    emptyTitle: "No products found",
    emptyText: "Try a different search term, category, or price range.",
    cartBadge: "Your basket",
    cartTitle: "Shopping cart",
    subtotal: "Subtotal",
    checkout: "Proceed to checkout",
    addToCart: "Add to cart",
    details: "View details",
    allCategories: "All categories",
    itemsFound: "{count} items found",
    emptyCart: "Your cart is empty. Add a few products to get started.",
    remove: "Remove",
    categoryItems: "{count} products",
    inStock: "In stock",
    outOfStock: "Out of stock",
    onlyLeft: "Only {count} left",
    quantity: "Quantity",
    branchForItem: "Branch",
    switchBranch: "Switch branch",
    shopCategory: "Shop this aisle",
    featuredShelfTitle: "Featured",
    departmentCount: "{count} items",
    shopDepartment: "Open department",
    promoPrimaryAction: "Shop the deal",
    promoSecondaryAction: "Browse all",
    budgetBadge: "Budget pick",
    familyBadge: "Family essential",
    bestRowTitle: "Best sellers",
    bestRowText: "Top-performing staples and popular picks shoppers reach for first.",
    budgetRowTitle: "Budget picks",
    budgetRowText: "Easy wins for value-focused baskets and everyday savings.",
    familyRowTitle: "Family essentials",
    familyRowText: "Bigger-need items for family kitchens, laundry rooms, and routines.",
    quickView: "Quick view",
    browseCatalog: "Browse catalog",
    assistantFound: "Simba found {count} matching product(s).",
    assistantUnavailable: "Smart search is temporarily using local catalog matching.",
  },
  fr: {
    announceText: "Shopping moderne pour les familles, bureaux et besoins du quotidien a Kigali.",
    announcePill: "Livraison le jour meme disponible",
    brandTagline: "Courses, maison et achats rapides au Rwanda",
    navAisles: "Rayons",
    navFeatured: "Vedettes",
    navShop: "Produits",
    navBranches: "Branches",
    navAbout: "A propos",
    navContact: "Contact",
    navCheckout: "Paiement",
    navAccount: "Compte",
    menu: "Menu",
    branchLabel: "Branche",
    theme: "Theme",
    cart: "Panier",
    heroBadge: "Simba Supermarket en ligne",
    heroTitle: "Tout pour la maison, des produits frais aux essentiels de confiance",
    heroText:
      "Achetez l'alimentation, les produits d'entretien, les boissons, la beaute, la cuisine et les essentiels du quotidien dans une boutique plus claire et plus pratique.",
    shopNow: "Commencer",
    exploreAisles: "Explorer les rayons",
    popularSearches: "Populaire :",
    metricCategories: "rayons principaux",
    metricProducts: "produits Simba reels disponibles",
    metricPayment: "branches disponibles",
    spotlightToday: "Branche choisie",
    spotlightTitle: "Union Trade Centre",
    spotlightText: "3336+MHV Union Trade Centre, 1 KN 4 Ave, Kigali",
    shopThisBranch: "Acheter dans cette branche",
    viewAllBranches: "Voir les branches",
    featureFast: "Livraison rapide",
    featureFastValue: "Choisissez une branche pour mieux voir stock et livraison",
    featureFresh: "Navigation plus claire",
    featureFreshValue: "Recherchez par rayon et comparez plus vite sur tous les ecrans",
    featureTrusted: "Confiance visible",
    featureTrustedValue: "Retrait, livraison, paiement et support restent visibles",
    departmentsBadge: "Departements",
    departmentsTitle: "Acheter par departement",
    departmentsText: "Raccourcis rapides inspires de la navigation des grandes marketplaces.",
    departmentSearchLabel: "Rechercher dans les departements",
    departmentSearchPlaceholder: "Chercher riz, boissons, bebe...",
    departmentEmpty: "Aucun departement correspondant.",
    promoBadge: "Promotions",
    promoTitle: "Offres de la semaine, bundles et selections rapides",
    shoppingRowsBadge: "Rangees d'achat",
    shoppingRowsTitle: "Des rangees plus proches d'une vraie marketplace",
    shoppingRowsText: "Ces rangees aident a decouvrir par besoin et non seulement par categorie.",
    trustOneTitle: "Acheter par categorie",
    trustOneText: "Rayons inspires de la vraie structure du magasin Simba",
    trustTwoTitle: "Shopping par branche",
    trustTwoText: "Le stock, le retrait et la livraison suivent la branche choisie",
    trustThreeTitle: "Confort au quotidien",
    trustThreeText: "Navigation mobile, compte client et paiement rapide par Mobile Money",
    pickupPriorityBadge: "Flux de demo",
    pickupPriorityTitle: "Retrait d'abord, livraison ensuite",
    pickupPriorityText:
      "Choisissez une branche a Kigali, une heure de retrait, confirmez avec un petit depot MoMo et laissez l'equipe preparer votre panier.",
    pickupPriorityDepositTitle: "Depot MoMo",
    pickupPriorityDepositText: "Un depot de confirmation de 500 RWF protege le temps de preparation de l'equipe.",
    pickupPriorityStockTitle: "Stock par branche",
    pickupPriorityStockText: "Chaque branche Simba suit son propre stock, donc une commande a Remera n'affecte pas Kimironko.",
    pickupPriorityOpsTitle: "Flux manager vers staff",
    pickupPriorityOpsText: "Les commandes arrivent au tableau de bord, les managers assignent, puis l'equipe marque pret pour retrait.",
    proofBadge: "Pourquoi Simba inspire confiance",
    proofTitle: "Construit autour du vrai shopping a Kigali, pas d'une interface generique",
    proofText:
      "De vraies branches, le stock par branche, un checkout adapte a MoMo et la navigation multilingue rendent Simba plus credible.",
    proofMomoTitle: "Pret pour MoMo",
    proofMomoText: "Les clients voient clairement le depot avant de confirmer la commande.",
    proofLanguageTitle: "Parcours trilingue",
    proofLanguageText: "Anglais, kinyarwanda et francais restent persistants dans tout le parcours.",
    proofBranchTitle: "Vraies branches",
    proofBranchText: "Chaque branche de Kigali a son contexte de retrait, sa carte et son propre stock.",
    workflowBadge: "Comment Simba fonctionne",
    workflowTitle: "Un parcours retrait plus fluide du panier au comptoir",
    workflowText: "La page d'accueil explique maintenant clairement le flux de demo avant le checkout.",
    workflowStepOneTitle: "Achetez par branche",
    workflowStepOneText: "Choisissez Remera, Kimironko, Kacyiru ou une autre branche Simba avant d'ajouter des articles.",
    workflowStepTwoTitle: "Confirmez avec un depot MoMo",
    workflowStepTwoText: "Un petit depot non remboursable protege le temps du personnel et confirme une commande serieuse.",
    workflowStepThreeTitle: "L'equipe prepare vite",
    workflowStepThreeText: "Les managers assignent le staff, le stock baisse dans cette branche et la commande passe en pret pour retrait.",
    branchesShowcaseBadge: "Branches",
    branchesShowcaseTitle: "Achetez depuis la branche qui vous convient",
    branchesShowcaseText:
      "Le choix d'une branche rend le shopping plus concret avec un stock et une livraison lies a votre magasin prefere.",
    aislesBadge: "Rayons principaux",
    aislesTitle: "Parcourez le supermarche de facon moderne",
    aislesText:
      "Au lieu de longues listes anciennes, ces tuiles mettent en avant les principaux rayons recherches par les clients.",
    featuredBadge: "Rayons vedettes",
    featuredTitle: "Selections populaires et temps forts de la semaine",
    featuredText:
      "Cette section donne de l'energie a la page d'accueil et rend la boutique plus vivante qu'une simple liste.",
    electronicsBadge: "Maison connectee",
    electronicsTitle: "Des produits electroniques mieux mis en valeur",
    electronicsText:
      "Nous donnons maintenant aux produits electroniques leur propre espace pour qu'ils ne disparaissent pas dans un long catalogue.",
    catalogBadge: "Supermarche digital",
    catalogTitle: "Recherchez, filtrez et ajoutez rapidement au panier",
    catalogNote:
      "Le catalogue garde la richesse de l'ancien site mais avec une presentation plus propre et responsive.",
    assistantBadge: "Recherche intelligente",
    assistantTitle: "Demandez a Simba ce qu'il vous faut",
    assistantNote: 'Essayez "je veux un petit dejeuner", "montre du lait frais" ou "produits de nettoyage pas chers".',
    assistantInputLabel: "Votre demande",
    assistantPlaceholder: "Je veux quelque chose pour le petit dejeuner",
    assistantAction: "Demander a Simba",
    assistantEmpty: "Demandez un repas, un produit, un besoin de branche ou un budget et Simba vous guide.",
    assistantNone: "Je n'ai pas encore trouve de correspondance proche.",
    assistantThinking: "Simba cherche les meilleures options pour vous...",
    assistantSuggestions: "Suggestions recommandees",
    assistantNextStep: "Vous pouvez en ajouter une maintenant ou affiner la recherche ci-dessus.",
    assistantBudgetHint: "J'ai privilegie les choix economiques et les besoins du quotidien.",
    assistantAdd: "Ajouter au panier",
    assistantReset: "Reinitialiser",
    assistantRefine1: "Montrer moins cher",
    assistantRefine2: "Options fraiches seulement",
    assistantRefine3: "Que va avec ceci ?",
    assistantGroqFallback: "Groq est indisponible pour le moment, Simba a donc utilise le catalogue local.",
    assistantSourceGroq: "Alimente par Groq AI",
    assistantSourceFallback: "Catalogue Simba local utilise",
    assistantPrompt1: "Avez-vous du lait frais ?",
    assistantPrompt2: "Je veux quelque chose pour le petit dejeuner",
    assistantPrompt3: "Montre des produits de nettoyage pas chers",
    searchLabel: "Affinage manuel",
    searchPlaceholder: "Chercher riz, jus, shampoing...",
    categoryLabel: "Categorie",
    priceLabel: "Prix maximum",
    loading: "Chargement des produits...",
    emptyTitle: "Aucun produit trouve",
    emptyText: "Essayez un autre mot-cle, une autre categorie ou un autre prix.",
    cartBadge: "Votre panier",
    cartTitle: "Panier",
    subtotal: "Sous-total",
    checkout: "Passer au paiement",
    addToCart: "Ajouter au panier",
    details: "Voir details",
    allCategories: "Toutes les categories",
    itemsFound: "{count} articles trouves",
    emptyCart: "Votre panier est vide. Ajoutez quelques produits pour commencer.",
    remove: "Supprimer",
    categoryItems: "{count} produits",
    inStock: "En stock",
    outOfStock: "Rupture de stock",
    onlyLeft: "Plus que {count}",
    quantity: "Quantite",
    branchForItem: "Branche",
    switchBranch: "Changer de branche",
    shopCategory: "Voir ce rayon",
    featuredShelfTitle: "Vedette",
    departmentCount: "{count} articles",
    shopDepartment: "Ouvrir",
    promoPrimaryAction: "Voir l'offre",
    promoSecondaryAction: "Tout voir",
    budgetBadge: "Petit prix",
    familyBadge: "Essentiel famille",
    bestRowTitle: "Meilleures ventes",
    bestRowText: "Les produits les plus choisis pour les paniers du quotidien.",
    budgetRowTitle: "Bons plans",
    budgetRowText: "Des choix simples pour les paniers a bon prix.",
    familyRowTitle: "Essentiels famille",
    familyRowText: "Des indispensables pour la cuisine, la lessive et la maison.",
    quickView: "Voir vite",
    browseCatalog: "Voir le catalogue",
    assistantFound: "Simba a trouve {count} produit(s) correspondants.",
    assistantUnavailable: "La recherche intelligente utilise temporairement le catalogue local.",
  },
  rw: {
    announceText: "Kwamamaza gushya ku miryango, ibiro n'ibikenerwa buri munsi i Kigali.",
    announcePill: "Kohereza umunsi umwe birahari",
    brandTagline: "Ibiribwa, ibikenerwa mu rugo n'uguhaha byihuse mu Rwanda",
    navAisles: "Ibyiciro",
    navFeatured: "Byatoranyijwe",
    navShop: "Ibicuruzwa",
    navBranches: "Amashami",
    navAbout: "Ibyerekeye",
    navContact: "Twandikire",
    navCheckout: "Kwishyura",
    navAccount: "Konti",
    menu: "Menu",
    branchLabel: "Ishami",
    theme: "Insanganyamatsiko",
    cart: "Agaseke",
    heroBadge: "Simba Supermarket kuri internet",
    heroTitle: "Ibyo urugo rwawe rukeneye byose, kuva ku mboga n'imbuto kugeza ku bikoresho byizewe",
    heroText:
      "Gura ibiribwa, ibikoresho by'isuku, ibinyobwa, ubwiza, ibikoresho byo mu gikoni n'ibikenerwa buri munsi mu iduka ryoroshye gukoresha.",
    shopNow: "Tangira kugura",
    exploreAisles: "Reba ibyiciro",
    popularSearches: "Bikunzwe:",
    metricCategories: "ibyiciro by'ingenzi",
    metricProducts: "ibicuruzwa bya Simba biri live",
    metricPayment: "amashami ahari",
    spotlightToday: "Ishami ryatoranyijwe",
    spotlightTitle: "Union Trade Centre",
    spotlightText: "3336+MHV Union Trade Centre, 1 KN 4 Ave, Kigali",
    shopThisBranch: "Gura kuri iri shami",
    viewAllBranches: "Reba amashami yose",
    featureFast: "Kohereza vuba",
    featureFastValue: "Hitamo ishami mbere ubone stock n'ibijyanye no kohereza neza",
    featureFresh: "Kureba byoroshye",
    featureFreshValue: "Shaka ukoresheje icyiciro kandi ugereranye byoroshye ku gikoresho icyo ari cyo cyose",
    featureTrusted: "Kwizerana kugaragara",
    featureTrustedValue: "Gufatira ku ishami, kohereza, kwishyura na serivisi biragaragara",
    departmentsBadge: "Amashami",
    departmentsTitle: "Gura ukoresheje amashami",
    departmentsText: "Inzira z'ibyiciro byihuse nk'iziri kuri marketplace nini.",
    departmentSearchLabel: "Shakishiriza mu mashami",
    departmentSearchPlaceholder: "Shaka umuceri, ibinyobwa, umwana...",
    departmentEmpty: "Nta shami rihuye n'ibyashakishijwe.",
    promoBadge: "Promos",
    promoTitle: "Ibyagabanyijwe, bundles n'ibikunzwe by'iki cyumweru",
    shoppingRowsBadge: "Imirongo yo kugura",
    shoppingRowsTitle: "Imirongo ituma iduka risa na marketplace nyayo",
    shoppingRowsText: "Iyi mirongo ifasha kubona ibicuruzwa ukurikije icyo ushaka kurusha icyiciro gusa.",
    trustOneTitle: "Gura ukoresheje ibyiciro",
    trustOneText: "Ibyiciro byahumetswe n'imiterere nyayo ya Simba",
    trustTwoTitle: "Guhaha gushingiye ku ishami",
    trustTwoText: "Stock, pickup na delivery bikurikira ishami wahisemo",
    trustThreeTitle: "Byoroheye buri munsi",
    trustThreeText: "Gukoresha neza kuri telefoni, konti y'umukiriya na Mobile Money",
    pickupPriorityBadge: "Uko demo ikora",
    pickupPriorityTitle: "Banza pickup, delivery ikurikire",
    pickupPriorityText:
      "Hitamo ishami rya Kigali, ushyireho igihe cya pickup, wemeze na MoMo deposit nto, hanyuma ishami ritangire gutegura agaseke kawe.",
    pickupPriorityDepositTitle: "MoMo deposit",
    pickupPriorityDepositText: "Deposit ya 500 RWF ifasha kurinda igihe cy'abakozi mbere yo gutegura order.",
    pickupPriorityStockTitle: "Stock kuri buri shami",
    pickupPriorityStockText: "Buri shami rya Simba rikurikirana stock yaryo, bityo order ya Remera ntigabanye iya Kimironko.",
    pickupPriorityOpsTitle: "Uko manager ahereza staff",
    pickupPriorityOpsText: "Order ijya kuri dashboard y'ishami, manager akayiha staff, hanyuma bagashyira kuri ready for pickup.",
    proofBadge: "Impamvu Simba yizewe",
    proofTitle: "Yubakiye ku guhaha nyako kwa Kigali, si grocery UI isanzwe",
    proofText:
      "Amazina nyayo y'amashami, stock kuri buri shami, checkout ijyanye na MoMo, n'indimi nyinshi bituma Simba isa n'ikirango abantu basanzwe bizeye.",
    proofMomoTitle: "MoMo irateguwe",
    proofMomoText: "Umukiriya abona neza deposit mbere yo kwemeza order.",
    proofLanguageTitle: "Urugendo rw'indimi eshatu",
    proofLanguageText: "English, Kinyarwanda na Francais bikomeza kubikwa mu rugendo rwose rwo guhaha.",
    proofBranchTitle: "Amashami nyayo",
    proofBranchText: "Buri shami rya Kigali rifite pickup context, map, n'inkuru ya stock yaryo.",
    workflowBadge: "Uko Simba ikora",
    workflowTitle: "Urugendo rwa pickup ryoroshye kuva ku gaseke kugeza ku ishami",
    workflowText: "Home page isobanura neza uko demo ikora mbere y'uko umuntu ajya kuri checkout.",
    workflowStepOneTitle: "Gura ukoresheje ishami",
    workflowStepOneText: "Hitamo Remera, Kimironko, Kacyiru cyangwa irindi shami rya Simba mbere yo kongera mu gaseke.",
    workflowStepTwoTitle: "Emeza na MoMo deposit",
    workflowStepTwoText: "Deposit nto itagaruka irinda igihe cy'abakozi kandi ikemeza ko order ari serious.",
    workflowStepThreeTitle: "Abakozi bitegura vuba",
    workflowStepThreeText: "Manager ahitamo staff, stock ikagabanuka kuri iryo shami, order igashyirwa kuri ready for pickup.",
    branchesShowcaseBadge: "Amashami",
    branchesShowcaseTitle: "Gura ukoresheje ishami rikubereye",
    branchesShowcaseText:
      "Guhitamo ishami bituma ugura byoroshye kuko stock na delivery bihuzwa n'aho ukunda guhaha.",
    aislesBadge: "Ibyiciro by'ingenzi",
    aislesTitle: "Reba supermarket mu buryo bwa none",
    aislesText:
      "Aho kugira urutonde rurerure rw'inyandiko, aya makarita yerekana ibyiciro abantu bashaka cyane mbere.",
    featuredBadge: "Ibyatoranyijwe",
    featuredTitle: "Ibikunzwe n'iby'icyumweru",
    featuredText:
      "Iki gice giha urupapuro ubuzima kandi kigatuma iduka risa neza kurusha urutonde rusanzwe.",
    electronicsBadge: "Ibikoresho byo mu rugo bigezweho",
    electronicsTitle: "Electronics zibona umwanya ugaragara",
    electronicsText:
      "Ubu electronics zifite igice cyazo kugira ngo zidatakara hagati ya catalog ndende ya supermarket.",
    catalogBadge: "Supermarket yo kuri internet",
    catalogTitle: "Shakisha, muyungurure kandi ushyire mu gaseke vuba",
    catalogNote:
      "Catalog igumana imbaraga z'urubuga rushaje ariko mu miterere isukuye kandi ikora neza kuri telefoni.",
    assistantBadge: "Ubushakashatsi bw'ubwenge",
    assistantTitle: "Baza Simba icyo ukeneye",
    assistantNote: 'Gerageza nka "ndashaka breakfast", "nyereka fresh milk", cyangwa "cleaning products zihendutse".',
    assistantInputLabel: "Icyo ushaka",
    assistantPlaceholder: "Ndashaka ikintu cya breakfast",
    assistantAction: "Baza Simba",
    assistantEmpty: "Baza ifunguro, igicuruzwa, ishami cyangwa budget Simba ikuyobore.",
    assistantNone: "Nta kintu gihuye cyane n'ibyo ushaka ndabona ubu.",
    assistantThinking: "Simba iri gutekereza ku bicuruzwa bikubereye neza...",
    assistantSuggestions: "Ibyo Simba igusaba",
    assistantNextStep: "Ushobora guhita wongeramo kimwe cyangwa ugakomeza kunonosora ubushakashatsi hejuru.",
    assistantBudgetHint: "Nahisemo cyane cyane ibiciro byoroheje n'ibikunze gukoreshwa buri munsi.",
    assistantAdd: "Shyira mu gaseke",
    assistantReset: "Siba",
    assistantRefine1: "Nyereka ibihendutse",
    assistantRefine2: "Nyereka ibishya gusa",
    assistantRefine3: "Ni iki najyana na byo?",
    assistantGroqFallback: "Groq ntiboneka ubu, Simba yakoresheje local catalog matching.",
    assistantSourceGroq: "Bikoreshejwe na Groq AI",
    assistantSourceFallback: "Hakoreshejwe Simba catalog yo mu buryo bwa fallback",
    assistantPrompt1: "Mufite fresh milk?",
    assistantPrompt2: "Ndashaka ikintu cya breakfast",
    assistantPrompt3: "Nyereka cleaning products zihendutse",
    searchLabel: "Kanonosora n'intoki",
    searchPlaceholder: "Shaka umuceri, umutobe, shampoo...",
    categoryLabel: "Icyiciro",
    priceLabel: "Igiciro ntarengwa",
    loading: "Turimo gupakurura ibicuruzwa...",
    emptyTitle: "Nta bicuruzwa byabonetse",
    emptyText: "Gerageza irindi jambo, icyiciro cyangwa igiciro.",
    cartBadge: "Agaseke kawe",
    cartTitle: "Agaseke",
    subtotal: "Igiteranyo mbere",
    checkout: "Komeza wishyure",
    addToCart: "Shyira mu gaseke",
    details: "Reba ibisobanuro",
    allCategories: "Ibyiciro byose",
    itemsFound: "{count} byabonetse",
    emptyCart: "Agaseke kawe karimo ubusa. Ongeramo ibicuruzwa.",
    remove: "Kuramo",
    categoryItems: "{count} ibicuruzwa",
    inStock: "Birahari",
    outOfStock: "Ntibihari",
    onlyLeft: "Hasigaye {count} gusa",
    quantity: "Ingano",
    branchForItem: "Ishami",
    switchBranch: "Hindura ishami",
    shopCategory: "Gura muri iki cyiciro",
    featuredShelfTitle: "Byatoranyijwe",
    departmentCount: "{count} ibicuruzwa",
    shopDepartment: "Fungura",
    promoPrimaryAction: "Gura deal",
    promoSecondaryAction: "Reba byose",
    budgetBadge: "Igiciro gito",
    familyBadge: "Iby'ingenzi ku muryango",
    bestRowTitle: "Ibikunzwe cyane",
    bestRowText: "Ibicuruzwa abantu bahitamo cyane mu kugura buri munsi.",
    budgetRowTitle: "Ibyo ku giciro cyiza",
    budgetRowText: "Amahitamo meza ku gaseke k'igiciro gito.",
    familyRowTitle: "Iby'ingenzi by'umuryango",
    familyRowText: "Ibyo mu gikoni, isuku n'ibikenerwa mu rugo.",
    quickView: "Reba vuba",
    browseCatalog: "Reba katalogi",
    assistantFound: "Simba yabonye ibicuruzwa {count} bihuye n'ibyo ushaka.",
    assistantUnavailable: "Smart search iri gukoresha local catalog by'igihe gito.",
  },
};

const categoryMeta = {
  "Food Products": {
    icon: "Food",
    colorClass: "category-food",
    summary: "Rice, bread, pantry staples, breakfast, and everyday meals.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
  },
  "Cleaning and Sanitary": {
    icon: "Care",
    colorClass: "category-cleaning",
    summary: "Laundry, dishwashing, hygiene, and home cleaning essentials.",
    image:
      "https://images.unsplash.com/photo-1583947582886-f40ec95dd752?auto=format&fit=crop&w=1200&q=80",
  },
  "Vegetable and Fruits": {
    icon: "Fresh",
    colorClass: "category-produce",
    summary: "Fresh fruits and vegetables for healthier daily shopping.",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1200&q=80",
  },
  Cosmetics: {
    icon: "Beauty",
    colorClass: "category-cosmetics",
    summary: "Hair care, body care, skin care, and personal essentials.",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
  },
  "Alcoholic Drinkings": {
    icon: "Drinks",
    colorClass: "category-alcohol",
    summary: "Beers, wines, and celebration-ready drink selections.",
    image:
      "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80",
  },
  Kitchenware: {
    icon: "Home",
    colorClass: "category-kitchen",
    summary: "Serving pieces, storage, and smart kitchen helpers.",
    image:
      "https://images.unsplash.com/photo-1517705008128-361805f42e86?auto=format&fit=crop&w=1200&q=80",
  },
  "Electronics and Electrical Equipments": {
    icon: "Tech",
    colorClass: "category-electronics",
    summary: "Appliances and everyday electrical tools for the home.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
  },
  "Non-Alcoholic Drinks": {
    icon: "Juice",
    colorClass: "category-softdrinks",
    summary: "Juices, water, and refreshing drinks for the family.",
    image:
      "https://images.unsplash.com/photo-1497534446932-c925b458314e?auto=format&fit=crop&w=1200&q=80",
  },
  "Pet Care": {
    icon: "Pet",
    colorClass: "category-baby",
    summary: "Pet food, pet accessories, and daily care essentials.",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1200&q=80",
  },
  Toys: {
    icon: "Play",
    colorClass: "category-toys",
    summary: "Playful products for gifts, learning, and fun.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
  },
};

const localizedCategoryNames = {
  en: {
    "Alcoholic Drinkings": "Alcoholic Drinks",
    "Cleaning and Sanitary": "Cleaning and Sanitary",
    Cosmetics: "Cosmetics",
    "Electronics and Electrical Equipments": "Electronics and Electrical Equipment",
    "Food Products": "Food Products",
    Kitchenware: "Kitchenware",
    "Non-Alcoholic Drinks": "Non-Alcoholic Drinks",
    "Pet Care": "Pet Care",
    Toys: "Toys",
    "Vegetable and Fruits": "Vegetables and Fruits",
  },
  fr: {
    "Alcoholic Drinkings": "Boissons alcoolisees",
    "Cleaning and Sanitary": "Entretien et sanitaire",
    Cosmetics: "Cosmetiques",
    "Electronics and Electrical Equipments": "Electronique et equipements electriques",
    "Food Products": "Produits alimentaires",
    Kitchenware: "Articles de cuisine",
    "Non-Alcoholic Drinks": "Boissons non alcoolisees",
    "Pet Care": "Soins pour animaux",
    Toys: "Jouets",
    "Vegetable and Fruits": "Fruits et legumes",
  },
  rw: {
    "Alcoholic Drinkings": "Ibinyobwa bisembuye",
    "Cleaning and Sanitary": "Isuku n'isukura",
    Cosmetics: "Ubwiza n'amavuta",
    "Electronics and Electrical Equipments": "Electronics n'ibikoresho by'amashanyarazi",
    "Food Products": "Ibiribwa",
    Kitchenware: "Ibikoresho byo mu gikoni",
    "Non-Alcoholic Drinks": "Ibinyobwa bidasembuye",
    "Pet Care": "Kwita ku matungo",
    Toys: "Ibikinisho",
    "Vegetable and Fruits": "Imboga n'imbuto",
  },
};

const localizedCategorySummaries = {
  fr: {
    "Food Products": "Riz, pain, produits du placard, petit-dejeuner et repas du quotidien.",
    "Cleaning and Sanitary": "Lessive, vaisselle, hygiene et essentiels d'entretien.",
    "Vegetable and Fruits": "Fruits et legumes frais pour les achats de tous les jours.",
    Cosmetics: "Soin des cheveux, du corps, de la peau et essentiels personnels.",
    "Alcoholic Drinkings": "Bieres, vins et selections pour les celebrations.",
    Kitchenware: "Service, rangement et aides utiles pour la cuisine.",
    "Electronics and Electrical Equipments": "Appareils et outils electriques du quotidien pour la maison.",
    "Non-Alcoholic Drinks": "Jus, eau et boissons rafraichissantes pour la famille.",
    "Pet Care": "Aliments, accessoires et soins de base pour animaux.",
    Toys: "Produits ludiques pour cadeaux, apprentissage et amusement.",
  },
  rw: {
    "Food Products": "Umuceri, umugati, ibiribwa byo mu bubiko, breakfast n'ifunguro rya buri munsi.",
    "Cleaning and Sanitary": "Isabune z'imyenda, ibyo koza ibikoresho, hygiene n'ibikoresho by'isuku byo mu rugo.",
    "Vegetable and Fruits": "Imboga n'imbuto bishya byo guhaha buri munsi.",
    Cosmetics: "Ibyo kwita ku musatsi, umubiri, uruhu n'ibikenerwa bwite.",
    "Alcoholic Drinkings": "Inzoga, divayi n'ibinyobwa byo kwizihiza.",
    Kitchenware: "Ibikoresho byo gutegura no kubika ibintu byo mu gikoni.",
    "Electronics and Electrical Equipments": "Appareils n'ibikoresho by'amashanyarazi byo mu rugo.",
    "Non-Alcoholic Drinks": "Jus, amazi n'ibinyobwa bikonjesha umuryango.",
    "Pet Care": "Ibiryo by'amatungo, accessories n'ibikoresho byo kuyitaho buri munsi.",
    Toys: "Ibikinisho byo kwidagadura, kwiga no gutanga nk'impano.",
  },
};

let appState = {
  products: [],
  cart: loadFromStorage(STORAGE_KEYS.cart, []),
  language: loadFromStorage(STORAGE_KEYS.language, "en"),
  theme: loadFromStorage(STORAGE_KEYS.theme, "light"),
  selectedBranchId: window.SIMBA_BRANCHES?.getSelectedBranch()?.id || "",
  selectedCategory: "all",
  searchQuery: "",
  departmentQuery: "",
  maxPrice: 120000,
  promoIndex: 0,
  promoTimer: null,
  cartAnimationTimer: null,
  lastCartCount: null,
  assistantHistory: [],
  assistantSource: "",
};

const elements = {
  body: document.body,
  topbar: document.querySelector(".topbar"),
  topbarPanel: document.getElementById("topbarPanel"),
  navToggle: document.getElementById("navToggle"),
  branchSelect: document.getElementById("branchSelect"),
  languageSelect: document.getElementById("languageSelect"),
  themeToggle: document.getElementById("themeToggle"),
  cartToggle: document.getElementById("cartToggle"),
  closeCart: document.getElementById("closeCart"),
  cartDrawer: document.getElementById("cartDrawer"),
  overlay: document.getElementById("overlay"),
  searchInput: document.getElementById("searchInput"),
  categoryFilter: document.getElementById("categoryFilter"),
  priceFilter: document.getElementById("priceFilter"),
  priceValue: document.getElementById("priceValue"),
  productsByCategory: document.getElementById("productsByCategory"),
  resultsSummary: document.getElementById("resultsSummary"),
  skeletonState: document.getElementById("skeletonState"),
  loadingState: document.getElementById("loadingState"),
  emptyState: document.getElementById("emptyState"),
  cartItems: document.getElementById("cartItems"),
  cartSubtotal: document.getElementById("cartSubtotal"),
  cartCount: document.getElementById("cartCount"),
  categoryShowcase: document.getElementById("categoryShowcase"),
  featuredShelf: document.getElementById("featuredShelf"),
  electronicsSpotlight: document.getElementById("electronicsSpotlight"),
  quickSearchButtons: document.querySelectorAll(".quick-search"),
  departmentMenu: document.getElementById("departmentMenu"),
  departmentSearchInput: document.getElementById("departmentSearchInput"),
  promoCarousel: document.getElementById("promoCarousel"),
  promoTiles: document.getElementById("promoTiles"),
  promoPrev: document.getElementById("promoPrev"),
  promoNext: document.getElementById("promoNext"),
  shoppingRows: document.getElementById("shoppingRows"),
  selectedBranchName: document.getElementById("selectedBranchName"),
  selectedBranchAddress: document.getElementById("selectedBranchAddress"),
  branchHighlights: document.getElementById("branchHighlights"),
  heroProductCount: document.getElementById("heroProductCount"),
  heroBranchCount: document.getElementById("heroBranchCount"),
  assistantSearchInput: document.getElementById("assistantSearchInput"),
  assistantSearchButton: document.getElementById("assistantSearchButton"),
  assistantResetButton: document.getElementById("assistantResetButton"),
  assistantStatus: document.getElementById("assistantStatus"),
  assistantResponse: document.getElementById("assistantResponse"),
  assistantPromptButtons: document.querySelectorAll("[data-assistant-prompt]"),
};

const PRODUCT_FALLBACK_IMAGE = "assets/product-fallback.svg";
const DEFAULT_MAX_PRICE = Number(document.getElementById("priceFilter")?.max || 120000);

window.translations = translations;
window.appState = appState;

document.addEventListener("DOMContentLoaded", initStorefront);

async function initStorefront() {
  appState.cart = window.SIMBA_BRANCHES
    ? window.SIMBA_BRANCHES.normalizeCart(appState.cart, appState.selectedBranchId)
    : appState.cart;
  applyTheme();
  applyLanguage();
  bindGlobalControls();
  syncHeaderMenu();
  setupTopbarScroll();
  syncActiveNavLink();
  renderBranchControls();
  updatePriceLabel();
  renderCart();
  await loadProducts();
}

async function loadProducts() {
  try {
    appState.products = await loadProductCatalog();
    renderBranchControls();
    renderBranchHighlights();
    syncCartWithInventory();
    persistCart();
    populateCategoryFilter();
    renderDepartmentMenu();
    renderCategoryShowcase();
    renderPromoSections();
    renderFeaturedShelf();
    renderShoppingRows();
    renderElectronicsSpotlight();
    renderProducts();
    renderCart();
    startPromoAutoplay();
  } catch (error) {
    elements.skeletonState?.classList.add("hidden");
    elements.loadingState.classList.add("hidden");
    elements.emptyState.classList.remove("hidden");
    elements.emptyState.querySelector("h3").textContent = "Could not load products";
    elements.emptyState.querySelector("p").textContent = "Run the site through a local server so JSON files can load correctly.";
    console.error(error);
  }
}

function bindGlobalControls() {
  const promoScrollTarget = document.getElementById("catalog");
  const availableBranches = window.SIMBA_BRANCHES?.getBranches() || [];

  elements.navToggle?.addEventListener("click", () => {
    const nextState = !elements.topbar?.classList.contains("menu-open");
    elements.topbar?.classList.toggle("menu-open", nextState);
    elements.navToggle?.setAttribute("aria-expanded", String(nextState));
  });

  window.addEventListener("resize", syncHeaderMenu);
  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => closeHeaderMenuOnMobile());
  });

  elements.languageSelect.value = appState.language;
  elements.priceFilter.value = appState.maxPrice;
  elements.departmentSearchInput.value = appState.departmentQuery;
  if (elements.branchSelect && availableBranches.length) {
    elements.branchSelect.innerHTML = availableBranches
      .map((branch) => `<option value="${branch.id}">${branch.name}</option>`)
      .join("");
    elements.branchSelect.value = appState.selectedBranchId || availableBranches[0].id;
    elements.branchSelect.addEventListener("change", async (event) => {
      appState.selectedBranchId = event.target.value;
      resetAssistantExperience({ preserveInput: false, rerenderProducts: false });
      window.SIMBA_BRANCHES?.saveSelectedBranch(appState.selectedBranchId);
      appState.cart = window.SIMBA_BRANCHES
        ? window.SIMBA_BRANCHES.normalizeCart(appState.cart, appState.selectedBranchId)
        : appState.cart;
      closeHeaderMenuOnMobile();
      renderBranchControls();
      persistCart();
      await loadProducts();
    });
  }

  elements.languageSelect.addEventListener("change", (event) => {
    appState.language = event.target.value;
    saveToStorage(STORAGE_KEYS.language, appState.language);
    applyLanguage();
    populateCategoryFilter();
    renderDepartmentMenu();
    renderCategoryShowcase();
    renderPromoSections();
    renderFeaturedShelf();
    renderShoppingRows();
    renderElectronicsSpotlight();
    renderProducts();
    renderCart();
  });

  elements.themeToggle.addEventListener("click", () => {
    appState.theme = appState.theme === "dark" ? "light" : "dark";
    saveToStorage(STORAGE_KEYS.theme, appState.theme);
    applyTheme();
  });

  elements.searchInput.addEventListener("input", (event) => {
    appState.searchQuery = event.target.value.trim().toLowerCase();
    appState.departmentQuery = appState.searchQuery;
    elements.departmentSearchInput.value = event.target.value;
    renderDepartmentMenu();
    renderProducts();
  });

  elements.departmentSearchInput.addEventListener("input", (event) => {
    const query = event.target.value.trim().toLowerCase();
    appState.departmentQuery = query;
    appState.searchQuery = query;
    elements.searchInput.value = event.target.value;
    renderDepartmentMenu();
    renderProducts();
  });

  elements.categoryFilter.addEventListener("change", (event) => {
    appState.selectedCategory = event.target.value;
    renderProducts();
  });

  elements.priceFilter.addEventListener("input", (event) => {
    appState.maxPrice = Number(event.target.value);
    updatePriceLabel();
    renderProducts();
  });

  elements.cartToggle.addEventListener("click", openCart);
  elements.closeCart.addEventListener("click", closeCart);
  elements.overlay.addEventListener("click", closeCart);

  elements.quickSearchButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const query = button.dataset.search || "";
      if (elements.assistantSearchInput) elements.assistantSearchInput.value = query;
      handleAssistantSearch();
      promoScrollTarget.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  elements.assistantSearchButton?.addEventListener("click", () => {
    handleAssistantSearch();
  });
  elements.assistantResetButton?.addEventListener("click", () => {
    resetAssistantExperience();
  });
  elements.assistantSearchInput?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleAssistantSearch();
    }
  });
  elements.assistantPromptButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (!elements.assistantSearchInput) return;
      elements.assistantSearchInput.value = button.dataset.assistantPrompt || "";
      handleAssistantSearch();
    });
  });

  elements.promoPrev?.addEventListener("click", () => rotatePromo(-1));
  elements.promoNext?.addEventListener("click", () => rotatePromo(1));
}

function syncHeaderMenu() {
  if (!elements.topbar || !elements.navToggle) return;
  const desktop = window.innerWidth >= 1180;
  elements.topbar.classList.toggle("menu-open", desktop);
  elements.navToggle.setAttribute("aria-expanded", String(desktop));
}

function closeHeaderMenuOnMobile() {
  if (!elements.topbar || !elements.navToggle || window.innerWidth >= 1180) return;
  elements.topbar.classList.remove("menu-open");
  elements.navToggle.setAttribute("aria-expanded", "false");
}

function setupTopbarScroll() {
  if (!elements.topbar) return;
  const handleScroll = () => {
    elements.topbar.classList.toggle("scrolled", window.scrollY > 60);
  };
  handleScroll();
  window.addEventListener("scroll", handleScroll, { passive: true });
}

function syncActiveNavLink() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const targetPage = href.split("/").pop().split("#")[0] || "index.html";
    link.classList.toggle("active", targetPage === currentPage);
  });
}

function getLocalizedCategoryName(category, language = appState.language) {
  return localizedCategoryNames[language]?.[category] || localizedCategoryNames.en?.[category] || category;
}

function getLocalizedCategorySummary(category, language = appState.language) {
  return localizedCategorySummaries[language]?.[category] || categoryMeta[category]?.summary || "";
}

function applyLanguage() {
  const copy = translations[appState.language] || translations.en;
  document.documentElement.lang = appState.language;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (copy[key]) node.textContent = copy[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (copy[key]) node.placeholder = copy[key];
  });

  syncAssistantPromptLabels();
  renderAssistantStatus();
  renderAssistantThread();
}

function applyTheme() {
  elements.body.classList.toggle("dark", appState.theme === "dark");
}

function renderBranchControls() {
  if (!window.SIMBA_BRANCHES) return;
  const selectedBranch = window.SIMBA_BRANCHES.getBranchById(appState.selectedBranchId);
  if (elements.branchSelect) elements.branchSelect.value = selectedBranch.id;
  if (elements.selectedBranchName) elements.selectedBranchName.textContent = selectedBranch.name;
  if (elements.selectedBranchAddress) elements.selectedBranchAddress.textContent = selectedBranch.address;
  if (elements.heroProductCount) {
    elements.heroProductCount.textContent = new Intl.NumberFormat("en-RW").format(appState.products.length || window.SIMBA_PRODUCTS?.length || 0);
  }
  if (elements.heroBranchCount) {
    elements.heroBranchCount.textContent = String(window.SIMBA_BRANCHES.getBranches().length);
  }
}

function renderBranchHighlights() {
  if (!elements.branchHighlights || !window.SIMBA_BRANCHES) return;
  const selectedBranch = window.SIMBA_BRANCHES.getBranchById(appState.selectedBranchId);
  elements.branchHighlights.innerHTML = window.SIMBA_BRANCHES
    .getBranches()
    .slice(0, 3)
    .map(
      (branch) => `
        <article class="branch-highlight-card ${branch.id === selectedBranch.id ? "branch-highlight-active" : ""}">
          <div class="toolbar-header compact-header">
            <div>
              <p class="eyebrow">${branch.city}</p>
              <h3>${branch.name}</h3>
            </div>
            <span class="chip">${branch.deliveryFee ? formatCurrency(branch.deliveryFee) : ""}</span>
          </div>
          <p class="toolbar-note">${branch.address}</p>
          <div class="showcase-footer">
            <a class="ghost-button" href="branches.html">Details</a>
            <button class="primary-button" type="button" data-branch-highlight="${branch.id}">
              ${branch.id === selectedBranch.id ? "Selected" : "Select"}
            </button>
          </div>
        </article>
      `
    )
    .join("");

  elements.branchHighlights.querySelectorAll("[data-branch-highlight]").forEach((button) => {
    button.addEventListener("click", async () => {
      appState.selectedBranchId = button.dataset.branchHighlight;
      window.SIMBA_BRANCHES.saveSelectedBranch(appState.selectedBranchId);
      renderBranchControls();
      await loadProducts();
    });
  });
}

function populateCategoryFilter() {
  const copy = translations[appState.language] || translations.en;
  const categories = [...new Set(appState.products.map((product) => product.category))];
  const options = [`<option value="all">${copy.allCategories}</option>`]
    .concat(categories.map((category) => `<option value="${category}">${getLocalizedCategoryName(category)}</option>`))
    .join("");

  elements.categoryFilter.innerHTML = options;
  elements.categoryFilter.value = appState.selectedCategory;
}

function renderDepartmentMenu() {
  const copy = translations[appState.language] || translations.en;
  const categories = [...new Set(appState.products.map((product) => product.category))];
  const filteredCategories = categories.filter((category) => {
    const meta = categoryMeta[category] || { summary: "" };
    const categoryLabel = getLocalizedCategoryName(category);
    const categorySummary = getLocalizedCategorySummary(category);
    const productNames = appState.products
      .filter((product) => product.category === category)
      .map((product) => `${product.name} ${product.description} ${product.badge}`)
      .join(" ")
      .toLowerCase();
    const haystack = `${category} ${categoryLabel} ${meta.summary} ${categorySummary} ${productNames}`.toLowerCase();
    return haystack.includes(appState.departmentQuery);
  });

  if (!filteredCategories.length) {
    elements.departmentMenu.innerHTML = `<div class="department-empty">${copy.departmentEmpty}</div>`;
    return;
  }

  elements.departmentMenu.innerHTML = filteredCategories
    .map((category) => {
      const meta = categoryMeta[category] || { icon: "Shop", image: PRODUCT_FALLBACK_IMAGE, summary: "" };
      const count = appState.products.filter((product) => product.category === category).length;
      const categoryLabel = getLocalizedCategoryName(category);
      const categorySummary = getLocalizedCategorySummary(category);
      return `
        <button class="department-link" type="button" data-category-link="${category}">
          <img class="department-photo" src="${meta.image}" alt="${categoryLabel}" loading="lazy" onerror="this.onerror=null;this.src='${PRODUCT_FALLBACK_IMAGE}'" />
          <span class="department-copy">
            <span class="department-icon">${meta.icon}</span>
            <strong>${categoryLabel}</strong>
            <small>${categorySummary}</small>
            <small>${copy.departmentCount.replace("{count}", count)}</small>
          </span>
        </button>
      `;
    })
    .join("");

  elements.departmentMenu.querySelectorAll("[data-category-link]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.selectedCategory = button.dataset.categoryLink;
      elements.categoryFilter.value = appState.selectedCategory;
      renderProducts();
      document.getElementById("catalog").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderCategoryShowcase() {
  const categories = [...new Set(appState.products.map((product) => product.category))];
  const copy = translations[appState.language] || translations.en;

  elements.categoryShowcase.innerHTML = categories
    .map((category) => {
      const meta = categoryMeta[category] || {
        icon: "Shop",
        colorClass: "",
        summary: "",
        image: PRODUCT_FALLBACK_IMAGE,
      };
      const count = appState.products.filter((product) => product.category === category).length;
      const categoryLabel = getLocalizedCategoryName(category);
      const categorySummary = getLocalizedCategorySummary(category);
      return `
        <article class="showcase-card ${meta.colorClass}" data-category-card="${category}">
          <div class="showcase-media">
            <img src="${meta.image}" alt="${categoryLabel}" loading="lazy" onerror="this.onerror=null;this.src='${PRODUCT_FALLBACK_IMAGE}'" />
          </div>
          <div class="showcase-icon">${meta.icon}</div>
          <div class="showcase-copy">
            <p class="eyebrow">${categoryLabel}</p>
            <h3>${categoryLabel}</h3>
            <p>${categorySummary}</p>
          </div>
          <div class="showcase-footer">
            <span class="chip">${copy.categoryItems.replace("{count}", count)}</span>
            <button class="ghost-button" type="button">${copy.shopCategory}</button>
          </div>
        </article>
      `;
    })
    .join("");

  elements.categoryShowcase.querySelectorAll("[data-category-card]").forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.dataset.categoryCard;
      appState.selectedCategory = category;
      elements.categoryFilter.value = category;
      renderProducts();
      document.getElementById("catalog").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderPromoSections() {
  const copy = translations[appState.language] || translations.en;
  const promoSlides = getPromoSlides();
  const featuredTiles = getPromoTiles();

  if (!promoSlides.length) {
    elements.promoCarousel.innerHTML = "";
    elements.promoTiles.innerHTML = "";
    return;
  }

  appState.promoIndex = appState.promoIndex % promoSlides.length;
  const activeSlide = promoSlides[appState.promoIndex];

  elements.promoCarousel.innerHTML = `
    <article class="promo-slide">
      <div class="promo-slide-copy">
        <span class="chip promo-chip">${activeSlide.badge}</span>
        <h3>${activeSlide.title}</h3>
        <p>${activeSlide.text}</p>
        <div class="promo-actions">
          <button class="primary-button" type="button" data-promo-category="${activeSlide.category}">${copy.promoPrimaryAction}</button>
          <a class="ghost-button" href="#catalog">${copy.promoSecondaryAction}</a>
        </div>
        <div class="promo-dots">
          ${promoSlides
            .map(
              (_, index) => `
                <button class="promo-dot ${index === appState.promoIndex ? "active" : ""}" type="button" aria-label="Show banner ${index + 1}" data-promo-dot="${index}"></button>
              `
            )
            .join("")}
        </div>
      </div>
      <div class="promo-slide-card">
        <img src="${activeSlide.product.image}" alt="${activeSlide.product.name}" loading="lazy" onerror="this.onerror=null;this.src='${PRODUCT_FALLBACK_IMAGE}'" />
        <div class="promo-card-copy">
          <span class="eyebrow">${getLocalizedCategoryName(activeSlide.product.category)}</span>
          <h4>${activeSlide.product.name}</h4>
          <p>${activeSlide.product.description}</p>
          <strong>${formatCurrency(activeSlide.product.price)}</strong>
        </div>
      </div>
    </article>
  `;

  elements.promoTiles.innerHTML = featuredTiles
    .map(
      (product) => `
        <article class="promo-tile">
          <div>
            <span class="chip">${product.badge}</span>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
          </div>
          <div class="promo-tile-footer">
            <strong>${formatCurrency(product.price)}</strong>
            <a class="ghost-button" href="product.html?id=${product.id}">${copy.quickView}</a>
          </div>
        </article>
      `
    )
    .join("");

  elements.promoCarousel.querySelector("[data-promo-category]")?.addEventListener("click", (event) => {
    appState.selectedCategory = event.currentTarget.dataset.promoCategory;
    elements.categoryFilter.value = appState.selectedCategory;
    renderProducts();
    document.getElementById("catalog").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  elements.promoCarousel.querySelectorAll("[data-promo-dot]").forEach((button) => {
    button.addEventListener("click", () => {
      appState.promoIndex = Number(button.dataset.promoDot);
      renderPromoSections();
      restartPromoAutoplay();
    });
  });
}

function getPromoSlides() {
  const products = appState.products;
  if (!products.length) return [];

  const cheapest = [...products].sort((a, b) => a.price - b.price)[0];
  const family =
    products.find(
      (product) =>
        product.category === "Cleaning and Sanitary" ||
        product.category === "Food Products" ||
        product.category === "Non-Alcoholic Drinks"
    ) || products[0];
  const premium = [...products].sort((a, b) => b.price - a.price)[0];

  return [
    {
      badge: "Weekly value drop",
      title: "Save on everyday basket staples",
      text: "Budget-friendly pantry and drink options are easier to find before shoppers start scrolling the full catalog.",
      category: cheapest.category,
      product: cheapest,
    },
    {
      badge: "Family bundle",
      title: "Make larger family orders feel guided",
      text: "Pair family care products with daily food and hydration essentials in a more convincing marketplace flow.",
      category: family.category,
      product: family,
    },
    {
      badge: "Premium pick",
      title: "Give higher-value products a stronger spotlight",
      text: "Larger banners help expensive or gift-worthy items stand out instead of getting lost in the grid.",
      category: premium.category,
      product: premium,
    },
  ];
}

function getPromoTiles() {
  return [...appState.products]
    .filter(
      (product) =>
        product.category === "Electronics and Electrical Equipments" ||
        product.category === "Food Products" ||
        product.category === "Non-Alcoholic Drinks"
    )
    .slice(0, 3);
}

function rotatePromo(direction) {
  const slides = getPromoSlides();
  if (!slides.length) return;

  appState.promoIndex = (appState.promoIndex + direction + slides.length) % slides.length;
  renderPromoSections();
  restartPromoAutoplay();
}

function startPromoAutoplay() {
  if (appState.promoTimer || !getPromoSlides().length) return;
  appState.promoTimer = window.setInterval(() => rotatePromo(1), 5000);
}

function restartPromoAutoplay() {
  if (appState.promoTimer) window.clearInterval(appState.promoTimer);
  appState.promoTimer = null;
  startPromoAutoplay();
}

function renderFeaturedShelf() {
  const copy = translations[appState.language] || translations.en;
  const featured = [...appState.products]
    .sort((a, b) => b.price - a.price)
    .slice(0, 4);

  elements.featuredShelf.innerHTML = featured
    .map(
      (product) => `
        <article class="featured-card">
          <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='${PRODUCT_FALLBACK_IMAGE}'" />
          <div class="featured-overlay">
            <span class="chip">${copy.featuredShelfTitle}</span>
            <h3>${product.name}</h3>
            <p>${getLocalizedCategoryName(product.category)}</p>
            <div class="featured-meta">
              <strong>${formatCurrency(product.price)}</strong>
              <button class="primary-button featured-add" type="button" data-id="${product.id}" ${!canAddProductToCart(product.id) ? "disabled" : ""}>${canAddProductToCart(product.id) ? copy.addToCart : copy.outOfStock}</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  elements.featuredShelf.querySelectorAll(".featured-add").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      addToCart(button.dataset.id);
    });
  });
}

function renderShoppingRows() {
  const copy = translations[appState.language] || translations.en;
  const fillRow = (items) => {
    const seen = new Set(items.map((product) => product.id));
    const fallback = appState.products.filter((product) => !seen.has(product.id));
    return items.concat(fallback).slice(0, 4);
  };

  const rows = [
    {
      title: copy.bestRowTitle,
      description: copy.bestRowText,
      products: fillRow(
        [...appState.products].filter((product) => /best|top|fresh|popular|featured/i.test(product.badge))
      ),
    },
    {
      title: copy.budgetRowTitle,
      description: copy.budgetRowText,
      products: fillRow([...appState.products].sort((a, b) => a.price - b.price)),
      badgeOverride: copy.budgetBadge,
    },
    {
      title: copy.familyRowTitle,
      description: copy.familyRowText,
      products: fillRow(
        [...appState.products]
          .filter(
            (product) =>
              product.category === "Non-Alcoholic Drinks" ||
              product.category === "Food Products" ||
              product.category === "Cleaning and Sanitary"
          )
          .sort((a, b) => a.price - b.price)
      ),
      badgeOverride: copy.familyBadge,
    },
  ];

  elements.shoppingRows.innerHTML = rows
    .map(
      (row, rowIndex) => `
        <section class="market-row">
          <div class="market-row-header">
            <div>
              <h3>${row.title}</h3>
              <p>${row.description}</p>
            </div>
            <a class="ghost-button" href="#catalog">${copy.browseCatalog}</a>
          </div>
          <div class="row-products">
            ${row.products
              .map((product) => createRowProductCard(product, copy, row.badgeOverride || product.badge, rowIndex))
              .join("")}
          </div>
        </section>
      `
    )
    .join("");

  elements.shoppingRows.querySelectorAll(".row-add").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.id));
  });
}

function createRowProductCard(product, copy, badgeLabel, rowIndex) {
  return `
    <article class="row-product-card row-variant-${rowIndex + 1}">
      <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='${PRODUCT_FALLBACK_IMAGE}'" />
      <div class="row-product-copy">
        <span class="chip">${badgeLabel}</span>
        <h4>${product.name}</h4>
        <p>${product.description}</p>
        <div class="row-product-footer">
          <strong>${formatCurrency(product.price)}</strong>
          <div class="row-product-actions">
            <button class="primary-button row-add" type="button" data-id="${product.id}" ${!canAddProductToCart(product.id) ? "disabled" : ""}>${canAddProductToCart(product.id) ? copy.addToCart : copy.outOfStock}</button>
            <a class="ghost-button" href="product.html?id=${product.id}">${copy.details}</a>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderElectronicsSpotlight() {
  const copy = translations[appState.language] || translations.en;
  const electronics = appState.products
    .filter((product) => product.category === "Electronics and Electrical Equipments")
    .slice(0, 3);

  if (!electronics.length) {
    elements.electronicsSpotlight.innerHTML = "";
    return;
  }

  elements.electronicsSpotlight.innerHTML = electronics
    .map(
      (product, index) => `
        <article class="electronics-card ${index === 0 ? "electronics-card-large" : ""}">
          <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='${PRODUCT_FALLBACK_IMAGE}'" />
          <div class="electronics-card-copy">
            <span class="chip">${product.badge}</span>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="featured-meta">
              <strong>${formatCurrency(product.price)}</strong>
              <div class="electronics-actions">
                <button class="primary-button electronics-add" type="button" data-id="${product.id}" ${!canAddProductToCart(product.id) ? "disabled" : ""}>${canAddProductToCart(product.id) ? copy.addToCart : copy.outOfStock}</button>
                <a class="ghost-button" href="product.html?id=${product.id}">${copy.details}</a>
              </div>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  elements.electronicsSpotlight.querySelectorAll(".electronics-add").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.id));
  });
}

function renderProducts() {
  const filteredProducts = appState.products.filter((product) => {
    const searchHaystack = [
      product.name,
      product.category,
      product.subcategory,
      product.description,
      product.badge,
    ]
      .join(" ")
      .toLowerCase();
    const matchesSearch = searchHaystack.includes(appState.searchQuery);
    const matchesCategory =
      appState.selectedCategory === "all" || product.category === appState.selectedCategory;
    const matchesPrice = product.price <= appState.maxPrice;
    return matchesSearch && matchesCategory && matchesPrice;
  });

  elements.skeletonState?.classList.add("hidden");
  elements.loadingState.classList.add("hidden");
  elements.emptyState.classList.toggle("hidden", filteredProducts.length > 0);
  elements.productsByCategory.innerHTML = "";

  const copy = translations[appState.language] || translations.en;
  elements.resultsSummary.textContent = copy.itemsFound.replace("{count}", filteredProducts.length);

  if (!filteredProducts.length) return;

  const groupedProducts = filteredProducts.reduce((groups, product) => {
    if (!groups[product.category]) groups[product.category] = [];
    groups[product.category].push(product);
    return groups;
  }, {});

  Object.entries(groupedProducts).forEach(([category, products]) => {
    const categoryLabel = getLocalizedCategoryName(category);
    const section = document.createElement("section");
    section.className = "category-section";
    section.innerHTML = `
      <div class="category-heading">
        <div>
          <p class="eyebrow">${categoryLabel}</p>
          <h3>${categoryLabel}</h3>
        </div>
        <span class="chip">${copy.categoryItems.replace("{count}", products.length)}</span>
      </div>
      <div class="category-products"></div>
    `;

    const productContainer = section.querySelector(".category-products");
    products.forEach((product) => productContainer.appendChild(createProductCard(product, copy)));
    elements.productsByCategory.appendChild(section);
  });
}

async function handleAssistantSearch() {
  const query = String(elements.assistantSearchInput?.value || "").trim();
  const copy = translations[appState.language] || translations.en;
  if (!query) {
    resetAssistantExperience({ preserveInput: false });
    pushAssistantTurn({
      role: "assistant",
      text: copy.assistantEmpty,
      matches: [],
      followUps: [],
      source: "",
    });
    return;
  }

  const result = await requestAssistantRecommendation(query);
  const hasMatches = Array.isArray(result.matches) && result.matches.length > 0;
  const resolvedSearchQuery = hasMatches ? String(result.searchQuery || "").trim().toLowerCase() : "";
  appState.searchQuery = resolvedSearchQuery;
  appState.departmentQuery = resolvedSearchQuery;
  appState.selectedCategory = hasMatches ? result.category || "all" : "all";
  appState.maxPrice = DEFAULT_MAX_PRICE;
  appState.assistantSource = result.source || "";

  if (elements.searchInput) elements.searchInput.value = resolvedSearchQuery;
  if (elements.departmentSearchInput) elements.departmentSearchInput.value = resolvedSearchQuery;
  if (elements.categoryFilter) elements.categoryFilter.value = appState.selectedCategory;
  if (elements.priceFilter) elements.priceFilter.value = String(appState.maxPrice);
  updatePriceLabel();

  renderDepartmentMenu();
  renderProducts();
  pushAssistantTurn({ role: "user", text: query });
  pushAssistantTurn({
    role: "assistant",
    text: result.message,
    matches: result.matches,
    followUps: result.followUps,
    source: result.source,
  });
  renderAssistantStatus();
  document.getElementById("catalog")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function requestAssistantRecommendation(query) {
  try {
    const response = await fetch(apiUrl("/api/assistant-search"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        branchId: appState.selectedBranchId,
        language: appState.language,
      }),
    });

    if (!response.ok) {
      throw new Error("Assistant API unavailable");
    }

    const payload = await response.json();
    return {
      searchQuery: String(payload.searchQuery || ""),
      category: String(payload.category || "all"),
      matches: Array.isArray(payload.matches) ? payload.matches : [],
      message: String(payload.message || ""),
      followUps: Array.isArray(payload.followUps) ? payload.followUps.map((entry) => String(entry || "").trim()).filter(Boolean).slice(0, 3) : [],
      source: String(payload.source || "groq"),
    };
  } catch {
      const fallback = interpretAssistantQuery(query);
      const copy = translations[appState.language] || translations.en;
      return {
        ...fallback,
        message: `${fallback.message} ${copy.assistantGroqFallback}`.trim(),
      };
  }
}

function interpretAssistantQuery(query) {
  const normalizedQuery = query.toLowerCase();
  const copy = translations[appState.language] || translations.en;
  const intentMap = [
    { pattern: /breakfast|morning|tea|coffee|bread|cereal/, keywords: ["milk", "bread", "tea", "coffee", "juice"], category: "Food Products", tone: "category" },
    { pattern: /fresh|fruit|vegetable|produce/, keywords: ["fresh", "fruit", "vegetable", "tomato", "banana", "apple"], category: "Vegetable and Fruits", tone: "category" },
    { pattern: /clean|detergent|soap|sanitary|laundry/, keywords: ["detergent", "soap", "clean", "laundry"], category: "Cleaning and Sanitary", tone: "category" },
    { pattern: /drink|juice|water|soda|beverage/, keywords: ["juice", "water", "drink", "soda"], category: "Non-Alcoholic Drinks", tone: "category" },
    { pattern: /beauty|cosmetic|shampoo|lotion|skin/, keywords: ["shampoo", "lotion", "beauty", "cosmetic"], category: "Cosmetics", tone: "category" },
    { pattern: /cheap|budget|affordable|low price|under|low-cost/, keywords: [], category: null, tone: "budget" },
  ];

  const matchedIntent = intentMap.find((intent) => intent.pattern.test(normalizedQuery));
  const keywords = new Set(
    normalizedQuery
      .replace(/[^a-z0-9\s]/g, " ")
      .split(/\s+/)
      .filter((token) => token.length > 2)
  );

  (matchedIntent?.keywords || []).forEach((keyword) => keywords.add(keyword));

  const searchQuery = Array.from(keywords).join(" ").trim();
  const category = matchedIntent?.category || "all";

  const matches = appState.products.filter((product) => {
    const haystack = `${product.name} ${product.category} ${product.subcategory} ${product.description} ${product.badge}`.toLowerCase();
    const keywordMatch = !keywords.size || Array.from(keywords).some((keyword) => haystack.includes(keyword));
    const categoryMatch = category === "all" || product.category === category;
    return keywordMatch && categoryMatch;
  }).slice(0, 4);

  const matchPreview = matches.map((product) => product.name).slice(0, 3).join(", ");
  const categoryLabel = matchedIntent?.category ? getLocalizedCategoryName(matchedIntent.category) : "";
  let message = matches.length
    ? copy.assistantFound.replace("{count}", matches.length)
    : copy.assistantNone || copy.emptyText;

  if (matchedIntent?.tone === "budget") {
    message = `${message} ${copy.assistantBudgetHint}`.trim();
  } else if (categoryLabel && matches.length) {
    message = `${message} ${categoryLabel}.`.trim();
  }

  if (matchPreview) {
    message = `${message} ${matchPreview}`.trim();
  }

  return {
    searchQuery,
    category,
    matches,
    message,
    followUps: matches.length ? [copy.assistantRefine1, copy.assistantRefine2, copy.assistantRefine3] : [],
    source: "fallback",
  };
}

function syncAssistantPromptLabels() {
  const copy = translations[appState.language] || translations.en;
  const promptLabels = [copy.assistantPrompt1, copy.assistantPrompt2, copy.assistantPrompt3];
  elements.assistantPromptButtons.forEach((button, index) => {
    const label = promptLabels[index];
    if (!label) return;
    button.textContent = label;
    button.dataset.assistantPrompt = label;
  });
}

function pushAssistantTurn(turn) {
  appState.assistantHistory.push(turn);
  renderAssistantThread();
}

function renderAssistantStatus() {
  if (!elements.assistantStatus) return;
  const copy = translations[appState.language] || translations.en;
  const sourceCopy =
    appState.assistantSource === "groq"
      ? copy.assistantSourceGroq
      : appState.assistantSource === "fallback"
        ? copy.assistantSourceFallback
        : "";

  elements.assistantStatus.classList.toggle("hidden", !sourceCopy);
  elements.assistantStatus.textContent = sourceCopy;
}

function renderAssistantThread() {
  if (!elements.assistantResponse) return;
  const copy = translations[appState.language] || translations.en;

  if (!appState.assistantHistory.length) {
    elements.assistantResponse.classList.add("hidden");
    elements.assistantResponse.innerHTML = "";
    return;
  }

  elements.assistantResponse.classList.remove("hidden");
  elements.assistantResponse.innerHTML = appState.assistantHistory
    .map((turn) => {
      if (turn.role === "user") {
        return `
          <article class="assistant-turn assistant-turn-user">
            <span class="assistant-role">You</span>
            <p>${turn.text}</p>
          </article>
        `;
      }

      const matches = Array.isArray(turn.matches) ? turn.matches : [];
      const cards = matches
        .map(
          (product) => `
            <article class="assistant-match">
              <div>
                <strong>${product.name}</strong>
                <span>${getLocalizedCategoryName(product.category)}</span>
              </div>
              <div class="assistant-match-meta">
                <strong>${formatCurrency(product.price)}</strong>
                <button class="ghost-button" type="button" data-assistant-add="${product.id}">${copy.assistantAdd}</button>
              </div>
            </article>
          `
        )
        .join("");
      const followUps = Array.isArray(turn.followUps) ? turn.followUps.filter(Boolean).slice(0, 3) : [];

      return `
        <article class="assistant-turn assistant-turn-bot">
          <span class="assistant-role">Simba</span>
          <p>${turn.text}</p>
          ${matches.length ? `<p class="toolbar-note">${copy.assistantSuggestions}</p>` : ""}
          ${matches.length ? `<div class="assistant-match-grid">${cards}</div>` : ""}
          ${followUps.length ? `<div class="chip-row">${followUps.map((label) => `<button class="chip" type="button" data-assistant-followup="${label}">${label}</button>`).join("")}</div>` : ""}
          ${matches.length ? `<p class="toolbar-note">${copy.assistantNextStep}</p>` : ""}
        </article>
      `;
    })
    .join("");

  elements.assistantResponse.querySelectorAll("[data-assistant-add]").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.assistantAdd, appState.selectedBranchId));
  });

  elements.assistantResponse.querySelectorAll("[data-assistant-followup]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!elements.assistantSearchInput) return;
      elements.assistantSearchInput.value = button.dataset.assistantFollowup;
      handleAssistantSearch();
    });
  });
}

function resetAssistantExperience(options = {}) {
  const { preserveInput = false, rerenderProducts = true } = options;
  appState.assistantHistory = [];
  appState.assistantSource = "";
  appState.searchQuery = "";
  appState.departmentQuery = "";
  appState.selectedCategory = "all";
  appState.maxPrice = DEFAULT_MAX_PRICE;
  if (!preserveInput && elements.assistantSearchInput) elements.assistantSearchInput.value = "";
  if (elements.searchInput) elements.searchInput.value = "";
  if (elements.departmentSearchInput) elements.departmentSearchInput.value = "";
  if (elements.categoryFilter) elements.categoryFilter.value = "all";
  if (elements.priceFilter) elements.priceFilter.value = String(appState.maxPrice);
  updatePriceLabel();
  renderAssistantStatus();
  renderAssistantThread();
  renderDepartmentMenu();
  if (rerenderProducts) renderProducts();
}

function createProductCard(product, copy) {
  const branchId = appState.selectedBranchId;
  const branchLabel = window.SIMBA_BRANCHES?.getBranchById(branchId).name || "";
  const categoryLabel = getLocalizedCategoryName(product.category);
  const card = document.createElement("article");
  card.className = "product-card";
  card.innerHTML = `
    <div class="product-top">
      <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null;this.src='${PRODUCT_FALLBACK_IMAGE}'" />
      <div class="chip-row">
        <span class="chip">${product.badge}</span>
        <span class="chip">${getAvailabilityLabel(product, copy)}</span>
      </div>
      <div>
        <h4 class="product-name">${product.name}</h4>
        <p class="product-meta">${categoryLabel}</p>
        <p class="product-meta">${copy.branchForItem}: ${branchLabel}</p>
      </div>
    </div>
    <p class="product-snippet">${product.description}</p>
    <div class="product-actions">
      <div>
        <div class="price">${formatCurrency(product.price)}</div>
      </div>
      <button class="primary-button" type="button" ${!canAddProductToCart(product.id, branchId) ? "disabled" : ""}>${canAddProductToCart(product.id, branchId) ? copy.addToCart : copy.outOfStock}</button>
    </div>
    <a class="ghost-button full-width" href="product.html?id=${product.id}">${copy.details}</a>
  `;

  card.querySelector(".primary-button").addEventListener("click", () => addToCart(product.id, branchId));
  return card;
}

function addToCart(productId, branchId = appState.selectedBranchId) {
  if (!canAddProductToCart(productId, branchId)) return;
  const existingItem = appState.cart.find((item) => item.id === productId && item.branchId === branchId);
  if (existingItem) existingItem.quantity += 1;
  else appState.cart.push({ id: productId, quantity: 1, branchId });

  persistCart();
  renderCart();
  openCart();
}

function renderCart() {
  const copy = translations[appState.language] || translations.en;
  const cartCount = appState.cart.reduce((sum, item) => sum + item.quantity, 0);
  elements.cartCount.textContent = cartCount;

  if (appState.lastCartCount !== null && appState.lastCartCount !== cartCount) {
    elements.cartToggle?.classList.add("bump");
    window.clearTimeout(appState.cartAnimationTimer);
    appState.cartAnimationTimer = window.setTimeout(() => {
      elements.cartToggle?.classList.remove("bump");
    }, 400);
  }
  appState.lastCartCount = cartCount;

  if (!appState.cart.length) {
    elements.cartItems.innerHTML = `<div class="state-panel"><p>${copy.emptyCart}</p></div>`;
    elements.cartSubtotal.textContent = formatCurrency(0);
    return;
  }

  elements.cartItems.innerHTML = appState.cart
    .map((item) => {
      const product = appState.products.find((entry) => entry.id === item.id);
      if (!product) return "";
      const branches = window.SIMBA_BRANCHES?.getBranches() || [];
      const branchName = window.SIMBA_BRANCHES?.getBranchById(item.branchId).name || "";
      return `
        <article class="cart-item">
          <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null;this.src='${PRODUCT_FALLBACK_IMAGE}'" />
          <div>
            <strong>${product.name}</strong>
            <p class="cart-item-meta">${formatCurrency(product.price)} | ${copy.branchForItem}: ${branchName}</p>
            <label class="field cart-branch-field">
              <span>${copy.switchBranch}</span>
              <select data-action="change-branch" data-id="${product.id}" data-branch-id="${item.branchId}">
                ${branches
                  .map((branch) => `<option value="${branch.id}" ${branch.id === item.branchId ? "selected" : ""}>${branch.name}</option>`)
                  .join("")}
              </select>
            </label>
            <div class="qty-controls">
              <button class="qty-button" type="button" data-action="decrease" data-id="${product.id}" data-branch-id="${item.branchId}">-</button>
              <span>${copy.quantity}: ${item.quantity}</span>
              <button class="qty-button" type="button" data-action="increase" data-id="${product.id}" data-branch-id="${item.branchId}">+</button>
            </div>
            <button class="remove-button" type="button" data-action="remove" data-id="${product.id}" data-branch-id="${item.branchId}">${copy.remove}</button>
          </div>
        </article>
      `;
    })
    .join("");

  const subtotal = appState.cart.reduce((sum, item) => {
    const product = appState.products.find((entry) => entry.id === item.id);
    return sum + (product ? product.price * item.quantity : 0);
  }, 0);

  elements.cartSubtotal.textContent = formatCurrency(subtotal);

  elements.cartItems.querySelectorAll('button[data-action]').forEach((button) => {
    button.addEventListener("click", () => updateCartItem(button.dataset.id, button.dataset.action, button.dataset.branchId));
  });
  elements.cartItems.querySelectorAll('select[data-action="change-branch"]').forEach((select) => {
    select.addEventListener("change", () =>
      updateCartItem(select.dataset.id, "change-branch", select.dataset.branchId, select.value)
    );
  });
}

function updateCartItem(productId, action, branchId, nextBranchId) {
  const item = appState.cart.find((entry) => entry.id === productId && entry.branchId === branchId);
  if (!item) return;

  if (action === "change-branch") {
    const targetBranchId = nextBranchId || branchId;
    const existingTarget = appState.cart.find((entry) => entry.id === productId && entry.branchId === targetBranchId);
    if (existingTarget && existingTarget !== item) {
      existingTarget.quantity += item.quantity;
      appState.cart = appState.cart.filter((entry) => entry !== item);
    } else {
      item.branchId = targetBranchId;
    }
  }
  if (action === "increase" && canAddProductToCart(productId, branchId)) item.quantity += 1;
  if (action === "decrease") item.quantity -= 1;
  if (action === "remove" || item.quantity <= 0) {
    appState.cart = appState.cart.filter((entry) => !(entry.id === productId && entry.branchId === branchId));
  }

  persistCart();
  renderCart();
}

function persistCart() {
  appState.cart = window.SIMBA_BRANCHES
    ? window.SIMBA_BRANCHES.normalizeCart(appState.cart, appState.selectedBranchId)
    : appState.cart;
  saveToStorage(STORAGE_KEYS.cart, appState.cart);
}

function openCart() {
  elements.cartDrawer.classList.add("open");
  elements.cartDrawer.setAttribute("aria-hidden", "false");
  elements.overlay.hidden = false;
}

function closeCart() {
  elements.cartDrawer.classList.remove("open");
  elements.cartDrawer.setAttribute("aria-hidden", "true");
  elements.overlay.hidden = true;
}

function updatePriceLabel() {
  elements.priceValue.textContent = formatCurrency(appState.maxPrice);
}

function formatCurrency(value) {
  return `RWF ${new Intl.NumberFormat("en-RW", {
    maximumFractionDigits: 0,
  }).format(value)}`;
}

function loadFromStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function syncCartWithInventory() {
  appState.cart = appState.cart
    .map((item) => {
      const product = appState.products.find((entry) => entry.id === item.id);
      const stock = getProductStockForBranch(product, item.branchId);
      if (!product || stock <= 0) return null;
      return {
        ...item,
        quantity: Math.min(item.quantity, stock),
      };
    })
    .filter(Boolean);
}

function canAddProductToCart(productId, branchId = appState.selectedBranchId) {
  const product = appState.products.find((entry) => entry.id === productId);
  const stock = getProductStockForBranch(product, branchId);
  if (!product || stock <= 0) return false;
  const cartItem = appState.cart.find((entry) => entry.id === productId && entry.branchId === branchId);
  return (cartItem?.quantity || 0) < stock;
}

function getAvailabilityLabel(product, copy, branchId = appState.selectedBranchId) {
  const stock = getProductStockForBranch(product, branchId);
  if (stock <= 0) return copy.outOfStock;
  if (stock <= 5) return copy.onlyLeft.replace("{count}", stock);
  return copy.inStock;
}

async function loadProductCatalog() {
  const branchId = encodeURIComponent(appState.selectedBranchId || "");
  try {
    const response = await fetch(apiUrl(`/api/products${branchId ? `?branchId=${branchId}` : ""}`));
    if (response.ok) {
      const payload = await response.json();
      if (Array.isArray(payload.products)) return payload.products;
    }
  } catch {
    // Fall back to bundled product data when the backend is unavailable.
  }

  if (Array.isArray(window.SIMBA_PRODUCTS) && window.SIMBA_PRODUCTS.length) {
    return window.SIMBA_PRODUCTS.map((product) =>
      window.SIMBA_BRANCHES ? window.SIMBA_BRANCHES.mergeProductForBranch(product, appState.selectedBranchId) : product
    );
  }

  const response = await fetch("products.json");
  const products = await response.json();
  return products.map((product) =>
    window.SIMBA_BRANCHES ? window.SIMBA_BRANCHES.mergeProductForBranch(product, appState.selectedBranchId) : product
  );
}

function apiUrl(path) {
  const baseUrl = window.SIMBA_CONFIG?.API_BASE_URL?.trim();
  return baseUrl ? `${baseUrl}${path}` : path;
}

function getProductStockForBranch(product, branchId) {
  if (!product) return 0;
  if (window.SIMBA_BRANCHES) return window.SIMBA_BRANCHES.getProductBranchStock(product, branchId);
  return Number(product.stock || 0);
}
