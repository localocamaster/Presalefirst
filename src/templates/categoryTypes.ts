/** 카테고리형 템플릿 데이터 인터페이스 */

export interface CategoryNavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface HeroSection {
  backgroundImage: string;
  title: string[];
  subtitle: string;
}

export interface PremiumCard {
  image: string;
  title: string;
  subtitle: string;
}

export interface FeatureSection {
  title: string;
  subtitle: string;
  checkpoints: string[];
  images: { src: string; alt: string }[];
}

export interface BannerItem {
  backgroundImage: string;
  title: string;
  subtitle: string;
  cta?: string;
}

export interface PremiumLifeItem {
  tag: string;
  title: string;
  description: string;
  image: string;
}

export interface LocationTab {
  id: string;
  icon: string;
  label: string;
  title: string;
  points: string[];
}

export interface LocationSection {
  title: string;
  subtitle: string;
  mainImage: string;
  tabs: LocationTab[];
}

export interface InteriorItem {
  title: string;
  image: string;
  description: string;
}

export interface MapSection {
  title: string;
  subtitle: string;
  image: string;
  modelHouseAddress: string;
  siteAddress: string;
  kakaoMapUrl?: string;
  naverMapUrl?: string;
}

export interface ChecklistSection {
  items: string[];
  ctaText: string;
}

export interface CategoryTemplateData {
  id: string;
  projectName: string;
  projectNameEn?: string;
  brandLine?: string;
  contactPhone: string;
  contactKakao?: string;

  navItems: CategoryNavItem[];
  hero: HeroSection;
  premiumCards: PremiumCard[];
  features: FeatureSection;
  banners: BannerItem[];
  premiumLife: PremiumLifeItem[];
  location: LocationSection;
  interiors: InteriorItem[];
  map: MapSection;
  checklist: ChecklistSection;

  theme: {
    primary: string;
    secondary?: string;
    headerBg?: string;
    footerText: string;
    footerInfo: {
      developer?: string;
      constructor?: string;
      trustee?: string;
      bizNumber?: string;
    };
    disclaimer?: string;
  };
}
