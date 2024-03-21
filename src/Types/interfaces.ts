interface options {
  quantity: number;
  price: number;
}

export interface Product {
  name: string;
  price: number;
  bulkOptions?: options[];
  requiredCustomizations?: string[];
  shortDetails: string[];
  details: string[];
  images: string[];
  desc: string;
  quantity: number;
  id: number;
  type: string;
  learnMoreLink: string;
}

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


export interface SocialLinksWithIcon {
  icon: string;
  link: string;
}

export interface FooterLink {
  footerName: string;
  link: string;
}