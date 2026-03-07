/** 프리미엄형 템플릿 데이터 인터페이스 */

export interface PremiumNavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export interface PremiumHero {
  slides: { image: string; title: string[]; subtitle: string }[];
}

export interface OverviewItem {
  label: string;
  value: string;
}

export interface CommunityItem {
  image: string;
  title: string;
  description: string;
}

export interface PremiumFeature {
  image: string;
  number: string;
  title: string;
  description: string;
}

export interface LifeCard {
  image: string;
  title: string;
  subtitle: string;
}

export interface UnitType {
  label: string;
  image: string;
  area: string;
  rooms: string;
  features: string[];
}

export interface NewsItem {
  image: string;
  source: string;
  title: string;
  date: string;
}

export interface PremiumMapSection {
  title: string;
  subtitle: string;
  modelHouseImage: string;
  siteImage: string;
  modelHouseAddress: string;
  siteAddress: string;
  kakaoMapUrl?: string;
  naverMapUrl?: string;
}

export interface PremiumTemplateData {
  id: string;
  projectName: string;
  projectNameEn: string;
  brandLine: string;
  contactPhone: string;
  logoColor?: string;
  logoWhite?: string;

  navItems: PremiumNavItem[];
  hero: PremiumHero;

  overview: {
    title: string;
    subtitle: string;
    image: string;
    items: OverviewItem[];
  };

  community: {
    title: string;
    subtitle: string;
    items: CommunityItem[];
  };

  premium: {
    title: string;
    subtitle: string;
    features: PremiumFeature[];
  };

  life: {
    title: string;
    subtitle: string;
    cards: LifeCard[];
  };

  units: {
    title: string;
    subtitle: string;
    types: UnitType[];
  };

  news: {
    title: string;
    items: NewsItem[];
  };

  map: PremiumMapSection;

  registration: {
    title: string;
    subtitle: string;
  };

  theme: {
    primary: string;
    accent: string;
    baseBg: string;
    altBg: string;
    cardBg: string;
    borderColor: string;
    headerBg: string;
    headerScrollBg: string;
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
