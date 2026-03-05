export interface RegionPage {
  slug: string;
  region: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeading: string;
  heroSub: string;
  content: { type: 'h2' | 'h3' | 'p' | 'ul' | 'break'; text?: string; items?: string[] }[];
  faqs: { q: string; a: string }[];
}
