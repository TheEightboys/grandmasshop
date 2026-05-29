import tincture from "@/assets/product-tincture.jpg";
import tea from "@/assets/product-tea.jpg";
import mushroom from "@/assets/product-mushroom.jpg";
import oil from "@/assets/product-oil.jpg";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  category: (typeof categories)[number];
  description: string;
  price: number;
  image: string;
  images?: string[];
  badge?: string;
  ingredients: string[];
  rating: number;
  reviews: number;
  in_stock?: boolean;
};

export const categories = [
  "All",
  "Nervous-System Support",
  "Relaxation & Calm Support",
  "Sleep-Supportive Wellness",
  "Wellness Support for Prostate-Conscious Lifestyles",
  "Wellness Support for Adult Enhancement",
  "Digestive Wellness Support",
  "Energy & Focus Support",
  "Appetite Awareness Support",
  "Circulation & Recovery Support",
  "Breathing Wellness Support",
  "Restorative Lifestyle Support",
] as const;

export const products: Product[] = [
  {
    id: "1",
    name: "Calm & Relaxation Tincture",
    tagline: "Find your center, naturally.",
    category: "Nervous-System Support",
    description:
      "A potent, fast-acting tincture to soothe stress and quiet an anxious mind. Made with a blend of nervine herbs to restore balance.",
    price: 38,
    image: tincture,
    badge: "Best Seller",
    ingredients: ["Lavender", "Chamomile", "Lemon Balm", "Organic Cane Alcohol"],
    rating: 4.9,
    reviews: 212,
  },
  {
    id: "2",
    name: "Deep Sleep Herbal Tea",
    tagline: "Drift off to dreamland.",
    category: "Sleep-Supportive Wellness",
    description:
      "A comforting, caffeine-free herbal tea blend designed to promote deep, restorative sleep without morning grogginess.",
    price: 24,
    image: tea,
    ingredients: ["Valerian Root", "Hops", "Passionflower", "Chamomile"],
    rating: 4.8,
    reviews: 189,
  },
  {
    id: "3",
    name: "Focus Gold Mushroom Blend",
    tagline: "Sharpen your mind.",
    category: "Energy & Focus Support",
    description:
      "An adaptogenic mushroom blend featuring Lion's Mane and Cordyceps to support cognitive function, memory, and natural energy levels.",
    price: 45,
    image: mushroom,
    ingredients: ["Lion's Mane", "Cordyceps", "Maca Root", "Cacao"],
    rating: 4.7,
    reviews: 155,
  },
  {
    id: "4",
    name: "Sacred Roots Body Oil",
    tagline: "Nourish your temple.",
    category: "Restorative Lifestyle Support",
    description:
      "A luxurious, fast-absorbing body oil infused with calendula and frankincense to hydrate skin, reduce inflammation, and calm the spirit.",
    price: 52,
    image: oil,
    badge: "New",
    ingredients: ["Jojoba Oil", "Calendula", "Frankincense", "Myrrh"],
    rating: 4.9,
    reviews: 98,
  },
  {
    id: "5",
    name: "Herbal IV",
    tagline: "Ultimate wellness support.",
    category: "Circulation & Recovery Support",
    description:
      "Premium herbal infusion blend designed to provide comprehensive wellness support and promote optimal circulation and recovery.",
    price: 65,
    image: "/herbal-iv-1.png",
    images: [
      "/herbal-iv-1.png",
      "/herbal-iv-2.png",
      "/herbal-iv-3.png",
      "/herbal-iv-4.png",
    ],
    ingredients: ["Elderberry", "Ginger", "Turmeric", "Ginseng", "Organic Cane Alcohol"],
    rating: 4.8,
    reviews: 127,
  },
  {
    id: "6",
    name: "Not Today",
    tagline: "Unwavering mental clarity.",
    category: "Energy & Focus Support",
    description:
      "A powerful focus and mood support blend crafted to keep you grounded and mentally sharp when you need it most.",
    price: 42,
    image: "/not-today-1.png",
    images: [
      "/not-today-1.png",
      "/not-today-2.png",
      "/not-today-3.png",
      "/not-today-4.png",
      "/not-today-5.png",
      "/not-today-6.png",
      "/not-today-7.png",
      "/not-today-8.png",
    ],
    ingredients: ["Rhodiola", "Ashwagandha", "Bacopa", "Gotu Kola"],
    rating: 4.9,
    reviews: 156,
  },
  {
    id: "7",
    name: "Boom Max",
    tagline: "Unleash your energy.",
    category: "Wellness Support for Adult Enhancement",
    description:
      "A premium blend crafted to support energy, performance, and vitality for adults seeking enhanced wellness experiences.",
    price: 58,
    image: tincture,
    badge: "New",
    ingredients: ["Tribulus Terrestris", "Maca", "Korean Ginseng", "L-Arginine"],
    rating: 4.7,
    reviews: 203,
  },
  {
    id: "8",
    name: "Peach Flow",
    tagline: "Natural vitality and circulation.",
    category: "Wellness Support for Adult Enhancement",
    description:
      "A delicious peach-infused blend designed to support circulation, vitality, and overall adult wellness for a naturally enhanced lifestyle.",
    price: 54,
    image: tea,
    ingredients: ["Peach Extract", "Hawthorn", "Ginkgo Biloba", "Ginger"],
    rating: 4.8,
    reviews: 178,
  },
];

export const getProduct = (id: string) =>
  products.find((p) => p.id === id) ?? products[0];

// Supabase Product Functions
import { supabase } from "./supabase";

export const fetchProductsFromSupabase = async (): Promise<Product[]> => {
  try {
    const { data, error } = await supabase.from("products").select("*");
    if (error) {
      console.error("Error fetching products from Supabase:", error);
      return products; // Fallback to local data
    }
    return data || products;
  } catch (err) {
    console.error("Error fetching products:", err);
    return products; // Fallback to local data
  }
};

export const fetchProductFromSupabase = async (id: string): Promise<Product> => {
  try {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();
    if (error) {
      console.error("Error fetching product from Supabase:", error);
      return getProduct(id); // Fallback to local data
    }
    return data || getProduct(id);
  } catch (err) {
    console.error("Error fetching product:", err);
    return getProduct(id); // Fallback to local data
  }
};