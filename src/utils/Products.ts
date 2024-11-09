import { Product } from "../Types/interfaces";

//! change to dummyImage
import dummyImage1 from "../assets/Main/logo.png";
import dummyImage2 from "../assets/Main/logo.png";
import dummyImage3 from "../assets/Main/logo.png";

import peachGumImage from "../assets/ProductImages/Gums/GumPeach.png";
import colaGumImage from "../assets/ProductImages/Gums/GumCola.png";
import mangoGumImage from "../assets/ProductImages/Gums/GumMango.png";
import grapeGumImage from "../assets/ProductImages/Gums/GumGrape.png";

export const heroImages = [dummyImage1, dummyImage2, dummyImage3];

const gumIngredients =
  "Sugar, glucose syrup (contains flavorings: DL-malic acid, fumaric acid), grape sugar, starch syrup, emulsifier (guar gum, DL-malic acid, fumaric acid), dextrin, skim milk powder, whey powder, soy lecithin, pork gelatin";

const dummyProduct1: Product = {
  name: "Lotte Watta (Peach) Gum",
  price: 1,
  bulkOptions: [{ quantity: 5, price: 4.5 }],
  shortDetails: ["This is bubble gum that can blow up big bubbles."],
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
  name: "Lotte Watta (Mango) Gum",
  price: 1,
  bulkOptions: [{ quantity: 5, price: 4.5 }],
  shortDetails: ["This is bubble gum that can blow up big bubbles."],
  details: [
    "You can enjoy the exact scent with a sweet taste.",
    "Made from South Korea",
    "Ingredients: ",
    gumIngredients,
  ],
  images: [mangoGumImage],
  desc: "This is bubble gum that can blow up big bubbles.",
  quantity: 2,
  id: 2,
  type: "Gums",
  learnMoreLink: "/products/2",
};

const dummyProduct3: Product = {
  name: "Lotte Watta (Grape) Gum",
  price: 1,
  bulkOptions: [{ quantity: 5, price: 4.5 }],
  shortDetails: ["This is bubble gum that can blow up big bubbles."],
  details: [
    "You can enjoy the exact scent with a sweet taste.",
    "Made from South Korea",
    "Ingredients: ",
    gumIngredients,
  ],
  images: [grapeGumImage],
  desc: "This is bubble gum that can blow up big bubbles.",
  quantity: 3,
  id: 3,
  type: "Gums",
  learnMoreLink: "/products/3",
};

const dummyProduct4: Product = {
  name: "Lotte Watta (Cola) Gum",
  price: 1,
  bulkOptions: [{ quantity: 5, price: 4.5 }],
  shortDetails: ["This is bubble gum that can blow up big bubbles."],
  details: [
    "You can enjoy the exact scent with a sweet taste.",
    "Made from South Korea",
    "Ingredients: ",
    gumIngredients,
  ],
  images: [colaGumImage],
  desc: "This is bubble gum that can blow up big bubbles.",
  quantity: 4,
  id: 4,
  type: "Gums",
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
