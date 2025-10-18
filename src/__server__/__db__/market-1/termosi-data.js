// Thermos-specific database for Market-1

// Build a product object with explicit image paths
const createProduct = ({ id, sizeLabel, categoryLabel, colorName, price, discount, imagePaths }) => {
  const slugSize = sizeLabel.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const colorSlug = colorName.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return {
    id,
    slug: `dose-traveler-${slugSize}-${colorSlug}`,
    title: `Dose Traveler ${sizeLabel} - ${colorName}`,
    brand: "Dose",
    price,
    size: sizeLabel,
    colors: [colorName],
    discount,
    thumbnail: imagePaths[0],
    images: imagePaths,
    categories: [categoryLabel],
    status: null,
    reviews: [],
    for: { demo: "market-1", type: "all-products" }
  };
};

// =====================
// Hero carousel content
// =====================
export const mainCarouselData = [
  {
    title: "carousel.stayHydrated",
    imgUrl: "/assets/images/products/termosi/30oz 1000px/Termos-30oz-black-1.jpg",
    description: "carousel.stayHydratedDesc",
    buttonText: "carousel.shopMax",
    buttonLink: "/products/search?query=Thermos%20Max%20(1.2L)"
  },
  {
    title: "carousel.everydayCarry",
    imgUrl: "/assets/images/products/termosi/30oz 1000px/Termos-30oz-cream-1.jpg",
    description: "carousel.everydayCarryDesc",
    buttonText: "carousel.shopRegular",
    buttonLink: "/products/search?query=Thermos%20Regular%20(0.88L)"
  },
  {
    title: "carousel.compactMini",
    imgUrl: "/assets/images/products/termosi/20oz 1000px/Termos-20oz-sage-1.jpg",
    description: "carousel.compactMiniDesc",
    buttonText: "carousel.shopMini",
    buttonLink: "/products/search?query=Thermos%20Mini%20(0.6L)"
  }
];

// ===============
// Top categories
// ===============
export const categories = [
  {
    id: "termosi-cat-max",
    name: "Thermos Max (1.2L)",
    icon: null,
    slug: "thermos-max-12l",
    image: "/assets/images/products/termosi/30oz 1000px/Termos-30oz-black-1.jpg",
    description: "Premium large capacity hydration",
    parent: []
  },
  {
    id: "termosi-cat-regular",
    name: "Thermos Regular (0.88L)",
    icon: null,
    slug: "thermos-regular-088l",
    image: "/assets/images/products/termosi/30oz 1000px/Termos-30oz-cream-1.jpg",
    description: "Balanced daily hydration",
    parent: []
  },
  {
    id: "termosi-cat-mini",
    name: "Thermos Mini (0.6L)",
    icon: null,
    slug: "thermos-mini-06l",
    image: "/assets/images/products/termosi/20oz 1000px/Termos-20oz-bubble-gum-1.jpg",
    description: "Compact and portable",
    parent: []
  }
];

// =================
// Product generation
// =================
const categoryMax = "Thermos Max (1.2L)";
const categoryRegular = "Thermos Regular (0.88L)";
const categoryMini = "Thermos Mini (0.6L)";

const p30 = (name, base, altBase) => {
  // some colors have mixed hyphen/space naming; allow optional alt base for second image
  const img1 = `/assets/images/products/termosi/30oz 1000px/${base}-1.jpg`;
  const img2 = altBase
    ? `/assets/images/products/termosi/30oz 1000px/${altBase}-2.jpg`
    : `/assets/images/products/termosi/30oz 1000px/${base}-2.jpg`;
  return { name, images: [img1, img2] };
};

const p20 = (name, base) => {
  return {
    name,
    images: [
      `/assets/images/products/termosi/20oz 1000px/${base}-1.jpg`,
      `/assets/images/products/termosi/20oz 1000px/${base}-2.jpg`
    ]
  };
};

// 30oz folder used for Max 1.2L and Regular 0.88L per provided mapping
const colors30 = [
  p30("Black", "Termos-30oz-black"),
  p30("Creme", "Termos-30oz-cream"),
  p30("Frost", "Termos-30oz-frost"),
  // neon magenta has mixed naming: -1 with hyphen, -2 with space
  { name: "Neon Magenta", images: [
    "/assets/images/products/termosi/30oz 1000px/Termos-30oz-neon-magenta-1.jpg",
    "/assets/images/products/termosi/30oz 1000px/Termos-30oz-neon magenta-2.jpg"
  ]},
  // pink sand uses a space in filenames
  p30("Pink Sand", "Termos-30oz-pink sand"),
  p30("Coral", "Termos-30oz-coral"),
  p30("Hyper Blue", "Termos-30oz-hyper-blue"),
  p30("Sage", "Termos-30oz-sage"),
  p30("Mauve", "Termos-30oz-mauve"),
  p30("Tan", "Termos-30oz-tan"),
  p30("Cranberry", "Termos-30oz-cranberry"),
  // pink sugar has mostly space naming
  p30("Pink Sugar", "Termos-30oz-pink sugar")
];

const colors20 = [
  p20("Black", "Termos-20oz-black"),
  p20("Pink Sugar", "Termos-20oz-pink-sugar"),
  p20("Cream", "Termos-20oz-cream"),
  p20("Summer Peach", "Termos-20oz-summer-peach"),
  p20("Sage", "Termos-20oz-sage"),
  p20("Pink Sand", "Termos-20oz-pink-sand"),
  p20("Bubblegum", "Termos-20oz-bubble-gum"),
  p20("Kelly Green", "Termos-20oz-kelly-green"),
  p20("Sapphire", "Termos-20oz-sapphire")
];

let seq = 1;
const nextId = (prefix) => `${prefix}-${String(seq++).padStart(3, "0")}`;

const maxProducts = colors30.map(({ name, images }) =>
  createProduct({
    id: nextId("max"),
    sizeLabel: "Max (1.2L)",
    categoryLabel: categoryMax,
    colorName: name,
    price: 45,
    discount: [0],
    imagePaths: images
  })
);

const regularProducts = colors30.map(({ name, images }) =>
  createProduct({
    id: nextId("regular"),
    sizeLabel: "Regular (0.88L)",
    categoryLabel: categoryRegular,
    colorName: name,
    price: 35,
    discount: [0],
    imagePaths: images
  })
);

const miniProducts = colors20.map(({ name, images }) =>
  createProduct({
    id: nextId("mini"),
    sizeLabel: "Mini (0.6L)",
    categoryLabel: categoryMini,
    colorName: name,
    price: 28,
    discount: [0],
    imagePaths: images
  })
);

// Assign some items to flash-deals and just-for-you to power the sections
const tagTypes = (items) => {
  return items.map((p, i) => {
    let type = "all-products";
    if (i < 6) type = "flash-deals";
    else if (i < 12) type = "just-for-you";
    return { ...p, for: { ...p.for, type } };
  });
};

export const products = [
  ...tagTypes(maxProducts),
  ...tagTypes(regularProducts),
  ...tagTypes(miniProducts)
];

// Keep services the same as original demo
export const services = [
  { id: "5f9bd366-9583-4e6d-9b11-abe74b9c5d96", icon: "Truck", title: "Worldwide Delivery", description: null },
  { id: "121cffea-6972-41f8-8094-98dca22d17bb", icon: "CreditCardVerified", title: "Safe Payment", description: null },
  { id: "5b94f5d8-71ec-40a6-b5b8-401286deba24", icon: "Shield", title: "Shop With Confidence", description: null },
  { id: "8c4bb18f-d914-4269-9c7c-3c6728ba33e9", icon: "CustomerService", title: "24/7 Support", description: null }
];

// Use existing blog content as-is
export const articles = [
  {
    createdAt: "21 SEP",
    id: "20a83049-bc4b-41cc-9a29-0b2b69a7fd08",
    title: "30% Off Coupon for Black Friday",
    slug: "30-percent-off-coupon-for-black-friday",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.…",
    thumbnail: "/assets/images/blogs/blog-1.jpg",
    shop: {
      id: "e7c5030b-0504-4b4c-81dc-1627302bc1a4",
      slug: "scarlett-beauty",
      user: {
        id: "642f50d7-944b-459e-aa20-154afdccb413",
        email: "Annette_Gleason@yahoo.com",
        phone: "(607) 973-2857 x445",
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg",
        password: "C_mhvNPAeAU7Mj4",
        dateOfBirth: "1963-06-10T22:22:55.842Z",
        verified: true,
        name: { firstName: "Rosa", lastName: "Pagac" }
      },
      email: "Isabella.Kris13@yahoo.com",
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/cycle.png",
      profilePicture: "/assets/images/faces/propic.png",
      socialLinks: { facebook: null, youtube: null, twitter: null, instagram: null }
    },
    user: {
      id: "642f50d7-944b-459e-aa20-154afdccb413",
      email: "Annette_Gleason@yahoo.com",
      phone: "(607) 973-2857 x445",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg",
      password: "C_mhvNPAeAU7Mj4",
      dateOfBirth: "1963-06-10T22:22:55.842Z",
      verified: true,
      name: { firstName: "Rosa", lastName: "Pagac" }
    }
  },
  {
    createdAt: "21 SEP",
    id: "108015ad-897b-4c90-a90f-53b288ad162c",
    title: "10% Discount for Cosmatics",
    slug: "10-percent-discount-for-cosmatics",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.…",
    thumbnail: "/assets/images/blogs/blog-2.jpg",
    shop: {
      id: "d32b469e-4ccc-43b4-8427-98eba478355f",
      slug: "scroll-through",
      user: {
        id: "992c82b5-8a64-47a3-b665-2b59b6f950e6",
        email: "Enid99@yahoo.com",
        phone: "(672) 865-8949",
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/759.jpg",
        password: "ZlNtd6J9UV37Enm",
        dateOfBirth: "1951-03-01T08:56:59.687Z",
        verified: true,
        name: { firstName: "Oren", lastName: "Pagac" }
      },
      email: "Cheyanne.Kutch56@gmail.com",
      name: "Scroll Through",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/banner.png",
      profilePicture: "/assets/images/faces/propic(1).png",
      socialLinks: { facebook: null, youtube: null, twitter: null, instagram: null }
    },
    user: {
      id: "bd8b4e8b-6794-42f3-a42f-a2abd903ced9",
      email: "Alexa.Dickens65@yahoo.com",
      phone: "1-904-617-0268 x6023",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/965.jpg",
      password: "PxqJTybdKi_Qrcb",
      dateOfBirth: "1959-12-13T23:47:11.023Z",
      verified: true,
      name: { firstName: "Jamar", lastName: "Kuhn" }
    }
  },
  {
    createdAt: "21 SEP",
    id: "f3f920ba-3f3e-47cd-a109-9183a15479fa",
    slug: "buy-2-get-1-free-offer",
    title: " Buy 2 get 1 free Offer",
    description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.…",
    thumbnail: "/assets/images/blogs/blog-3.jpg",
    shop: {
      id: "e7c5030b-0504-4b4c-81dc-1627302bc1a4",
      slug: "scarlett-beauty",
      user: {
        id: "642f50d7-944b-459e-aa20-154afdccb413",
        email: "Annette_Gleason@yahoo.com",
        phone: "(607) 973-2857 x445",
        avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg",
        password: "C_mhvNPAeAU7Mj4",
        dateOfBirth: "1963-06-10T22:22:55.842Z",
        verified: true,
        name: { firstName: "Rosa", lastName: "Pagac" }
      },
      email: "Isabella.Kris13@yahoo.com",
      name: "Scarlett Beauty",
      phone: "(613) 343-9004",
      address: "845 N. Stonybrook Ave. Tonawanda, NY 14210, Denmark",
      verified: false,
      coverPicture: "/assets/images/banners/cycle.png",
      profilePicture: "/assets/images/faces/propic.png",
      socialLinks: { facebook: null, youtube: null, twitter: null, instagram: null }
    },
    user: {
      id: "642f50d7-944b-459e-aa20-154afdccb413",
      email: "Annette_Gleason@yahoo.com",
      phone: "(607) 973-2857 x445",
      avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/435.jpg",
      password: "C_mhvNPAeAU7Mj4",
      dateOfBirth: "1963-06-10T22:22:55.842Z",
      verified: true,
      name: { firstName: "Rosa", lastName: "Pagac" }
    }
  }
];



