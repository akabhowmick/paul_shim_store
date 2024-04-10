import { KeyValueStringPairs, Product } from "../Types/interfaces";

//! change to dummyImage
import dummyImage1 from "../assets/Main/logo.png";
import dummyImage2 from "../assets/Main/logo.png";
import dummyImage3 from "../assets/Main/logo.png";

const commonCustomizations: KeyValueStringPairs[] = [
  { key: "Color of Holder", value: "" },
  { key: "Color of Letterings", value: "" },
  { key: "Custom Lettering (OR DM us your logo)", value: "" },
];

const dummyProduct1: Product = {
  name: "Product 1",
  price: 25.0,
  bulkOptions: [{ quantity: 2, price: 45.0 }],
  shortDetails: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
  options: [
    { quantity: "House Only", price: 75.0 },
    { quantity: "Personalization Only", price: 80.0 },
    { quantity: "Key Holder", price: 85 },
  ],
  requiredCustomizations: commonCustomizations,
  details: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ],
  images: [dummyImage1, dummyImage2, dummyImage3],
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  quantity: 1,
  id: 1,
  type: "Type-1",
  learnMoreLink: "/products/1",
};

const dummyProduct2: Product = {
  name: "Product 2",
  price: 25.0,
  bulkOptions: [{ quantity: 2, price: 45.0 }],
  shortDetails: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
  requiredCustomizations: commonCustomizations,
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
  requiredCustomizations: commonCustomizations,
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
  requiredCustomizations: commonCustomizations,
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
  requiredCustomizations: commonCustomizations,
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
  requiredCustomizations: commonCustomizations,
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

const dummyProduct7: Product = {
  name: "Product 7",
  price: 25.0,
  bulkOptions: [{ quantity: 2, price: 45.0 }],
  shortDetails: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
  requiredCustomizations: commonCustomizations,
  details: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ],
  images: [dummyImage1, dummyImage2, dummyImage3],
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  quantity: 1,
  id: 7,
  type: "Type-3",
  learnMoreLink: "/products/7",
};

const dummyProduct8: Product = {
  name: "Product 8",
  price: 25.0,
  bulkOptions: [{ quantity: 2, price: 45.0 }],
  shortDetails: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
  requiredCustomizations: commonCustomizations,
  details: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ],
  images: [dummyImage1, dummyImage2, dummyImage3],
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  quantity: 1,
  id: 8,
  type: "Type-3",
  learnMoreLink: "/products/8",
};

const dummyProduct9: Product = {
  name: "Product 9",
  price: 25.0,
  bulkOptions: [{ quantity: 2, price: 45.0 }],
  shortDetails: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit."],
  requiredCustomizations: commonCustomizations,
  details: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  ],
  images: [dummyImage1, dummyImage2, dummyImage3],
  desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  quantity: 1,
  id: 9,
  type: "Type-3",
  learnMoreLink: "/products/9",
};

export const products: Product[] = [
  dummyProduct1,
  dummyProduct2,
  dummyProduct3,
  dummyProduct4,
  dummyProduct5,
  dummyProduct6,
  dummyProduct7,
  dummyProduct8,
  dummyProduct9,
];
