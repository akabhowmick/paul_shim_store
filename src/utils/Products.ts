import { Product } from "../Types/interfaces";

//! change to dummyImage
import dummyImage1 from "../assets/Main/logo.png";
import dummyImage2 from "../assets/Main/logo.png";
import dummyImage3 from "../assets/Main/logo.png";

import peachGumImage from "../assets/ProductImages/Gums/GumPeach.png";

export const heroImages = [dummyImage1, dummyImage2, dummyImage3];

const gumIngredients =
  "Sugar, glucose syrup (contains flavorings: DL-malic acid, fumaric acid), grape sugar, starch syrup, emulsifier (guar gum, DL-malic acid, fumaric acid), dextrin, skim milk powder, whey powder, soy lecithin, pork gelatin";

const dummyProduct1: Product = {
  name: "Lotte Watta (Peach) Gum",
  price: 25.0,
  bulkOptions: [{ quantity: 2, price: 45.0 }],
  shortDetails: ["This is bubble gum that can blow up big bubbles."],
  options: [
    { quantity: "House Only", price: 75.0 },
    { quantity: "Personalization Only", price: 80.0 },
    { quantity: "Key Holder", price: 85 },
  ],
  details: [
    "You can enjoy the exact scent with a sweet taste.",
    "Made from South Korea",
    "Ingredients: ",
    gumIngredients,
  ],
  images: [peachGumImage],
  desc: "This is bubble gum that can blow up big bubbles.",
  quantity: 1,
  id: 1,
  type: "Gums",
  learnMoreLink: "/products/1",
};

const dummyProduct2: Product = {
  name: "Product 2",
  price: 25.0,
  bulkOptions: [{ quantity: 2, price: 45.0 }],
  shortDetails: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
  details: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ],
  images: [dummyImage1, dummyImage2, dummyImage3],
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  quantity: 1,
  id: 2,
  type: "Type-1",
  learnMoreLink: "/products/2",
};

const dummyProduct3: Product = {
  name: "Product 3",
  price: 25.0,
  bulkOptions: [{ quantity: 2, price: 45.0 }],
  shortDetails: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
  details: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ],
  images: [dummyImage1, dummyImage2, dummyImage3],
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  quantity: 1,
  id: 3,
  type: "Type-1",
  learnMoreLink: "/products/3",
};

const dummyProduct4: Product = {
  name: "Product 4",
  price: 25.0,
  bulkOptions: [{ quantity: 2, price: 45.0 }],
  shortDetails: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
  details: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ],
  images: [dummyImage1, dummyImage2, dummyImage3],
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  quantity: 1,
  id: 4,
  type: "Type-2",
  learnMoreLink: "/products/4",
};

const dummyProduct5: Product = {
  name: "Product 5",
  price: 25.0,
  bulkOptions: [{ quantity: 2, price: 45.0 }],
  shortDetails: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
  details: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ],
  images: [dummyImage1, dummyImage2, dummyImage3],
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  quantity: 1,
  id: 5,
  type: "Type-2",
  learnMoreLink: "/products/5",
};

const dummyProduct6: Product = {
  name: "Product 6",
  price: 25.0,
  bulkOptions: [{ quantity: 2, price: 45.0 }],
  shortDetails: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
  details: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ],
  images: [dummyImage1, dummyImage2, dummyImage3],
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  quantity: 1,
  id: 6,
  type: "Type-2",
  learnMoreLink: "/products/6",
};

export const products: Product[] = [
  dummyProduct1,
  dummyProduct2,
  dummyProduct3,
  dummyProduct4,
  dummyProduct5,
  dummyProduct6,
];
