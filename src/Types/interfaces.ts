import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  addressLine1: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}

export interface Product {
  name: string;
  price: number;
  bulkOptions?: ProductOptions[];
  options?: ProductOptions[];
  requiredCustomizations?: NavbarLinkType[];
  shortDetails: string[];
  details: string[];
  images: string[];
  desc: string;
  quantity: number;
  id: number;
  type: string;
  learnMoreLink: string;
}

export interface faIcon {
  link: string;
  icon: IconProp;
}

interface ProductOptions {
  quantity: number | string;
  price: number;
}

export interface NavbarLinkType {
  key: string;
  value: string;
}
