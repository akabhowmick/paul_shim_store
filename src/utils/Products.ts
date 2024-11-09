import { Product } from "../Types/interfaces";

//! change to dummyImage
import heroImage1 from "../assets/ProductImages/Gums/AllGums.png";
import heroImage2 from "../assets/ProductImages/Lollipops/lolli1.png";

import lollipopImage1 from "../assets/ProductImages/Lollipops/lolli2.png";
import lollipopImage2 from "../assets/ProductImages/Lollipops/lolli3.png";
import lollipopImage3 from "../assets/ProductImages/Lollipops/lolli4.png";
import lollipopImage4 from "../assets/ProductImages/Lollipops/lolli5.png";

import peachGumImage from "../assets/ProductImages/Gums/GumPeach.png";
import colaGumImage from "../assets/ProductImages/Gums/GumCola.png";
import mangoGumImage from "../assets/ProductImages/Gums/GumMango.png";
import grapeGumImage from "../assets/ProductImages/Gums/GumGrape.png";

export const heroImages = [heroImage1, heroImage2];

const gumIngredients =
  "Sugar, glucose syrup (contains flavorings: DL-malic acid, fumaric acid), grape sugar, starch syrup, emulsifier (guar gum, DL-malic acid, fumaric acid), dextrin, skim milk powder, whey powder, soy lecithin, pork gelatin";

const lolliPopIngredient =
  "Watermelon Powder (Natural Extract, 0.01%), Sugar, Glucose Syrup, DL-Malic Acid, Citric Acid, Sucralose, Flavoring Agent (Melon Flavoring), Flavoring Agent (Strawberry Flavoring), Color Additive (Vegetable Color - Beta-Carotene), Caramel Color, Vegetable Color (Concentrated Vegetable Color). Allergen Information: Contains milk, wheat, soybean.";

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
  quantity: 1,
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
  quantity: 1,
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
  quantity: 1,
  id: 4,
  type: "Gums",
  learnMoreLink: "/products/4",
};

const dummyProduct5: Product = {
  name: "Ice Cream Lollipop",
  price: 1,
  bulkOptions: [{ quantity: 5, price: 4.5 }],
  shortDetails: ["This is bubble gum that can blow up big bubbles."],
  details: [
    "Korean Ice Cream: Enjoy the delicious taste of Korean ice cream in 4 different flavors like watermelon, coke, screw bar, and jaws.",
    "Ice Candy Style: The ice candy comes i, a modern style bottle with a fun twist on the classic candy design.",
    "Large Quantity,: This pack contains 60 ice candies, perfect for sharing with friends and family.",
    "Occasion Gift: The ice cream makes a great gift for birthdays, holidays, and special occasions.",
    "Made by Lotte Food: This ice candy is made by the famous Korean brand Lotte Food.",
    "Ingredients: ",
    lolliPopIngredient,
  ],
  images: [lollipopImage1, lollipopImage2, lollipopImage3, lollipopImage4, heroImage2],
  desc: "This is bubble gum that can blow up big bubbles.",
  quantity: 1,
  id: 5,
  type: "Lollipops",
  learnMoreLink: "/products/5",
};

export const products: Product[] = [
  dummyProduct1,
  dummyProduct2,
  dummyProduct3,
  dummyProduct4,
  dummyProduct5,
];
