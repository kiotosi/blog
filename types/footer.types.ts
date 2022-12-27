import type { Image } from './common.types';

export interface FooterLink {
  image: Image;
  url: string;
}

export interface FooterInfo {
  title: string;
  text: string[];
  image: Image;
  socialLinks: {
    hh: FooterLink;
    instagram: FooterLink;
    twitter: FooterLink;
  };
}
