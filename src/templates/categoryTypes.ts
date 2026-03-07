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

/** 히어로 슬라이드 (2장 이상일 때) */
export interface HeroSlide {
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
  image?: string;
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

/** 사업안내 서브페이지 - 있으면 해당 메뉴는 /demo/:slug/business/:id 로 페이지 이동 */
export interface BusinessSubPageBase {
  id: string;
  title: string;
  subVisualImage?: string;
  mainImage?: string;
  thumbImages?: string[];
  infoTable?: { label: string; value: string }[];
  caution?: string[];
}

/** 단지안내 서브페이지 - /demo/:slug/complex/:id */
export interface ComplexSubPageBase {
  id: string;
  title: string;
  subVisualImage?: string;
}

export interface ComplexGuide extends ComplexSubPageBase {
  type: 'guide';
  images: string[];
}

export interface ComplexPremiumItem {
  tag: string;
  title: string;
  description: string;
  image: string;
}
export interface ComplexPremium extends ComplexSubPageBase {
  type: 'premium';
  caption?: string;
  captionEn?: string;
  count?: number;
  headline?: string;
  items: ComplexPremiumItem[];
  caution?: string[];
}

export interface ComplexFloorPlan extends ComplexSubPageBase {
  type: 'floorplan';
  images: string[];
}

export interface ComplexPrimePoint {
  text: string;
  bold?: string;
}
export interface ComplexPrime extends ComplexSubPageBase {
  type: 'prime';
  headline?: string;
  captionEn?: string;
  count?: number;
  points: ComplexPrimePoint[];
  images: string[];
}

export type ComplexSubPage = ComplexGuide | ComplexPremium | ComplexFloorPlan | ComplexPrime;

/** 세대안내 서브페이지 - /demo/:slug/unit/:id */
export interface UnitSubPageBase {
  id: string;
  title: string;
  subVisualImage?: string;
}

export interface UnitTypeItem {
  id: string;
  label: string;
  type: string;
  households: string;
  description?: string;
  backgroundImage?: string;
  floorPlanImage: string;
  areas?: { label: string; value: string }[];
}
export interface UnitFloorPlan extends UnitSubPageBase {
  type: 'floorplan';
  sizeLabel: string;
  items: UnitTypeItem[];
  caution?: string[];
}

export interface UnitInteriorItem {
  title: string;
  image: string;
}
export interface UnitInterior extends UnitSubPageBase {
  type: 'interior';
  mainImage: string;
  items: UnitInteriorItem[];
  caution?: string[];
}

export type UnitSubPage = UnitFloorPlan | UnitInterior;

export interface CategoryTemplateData {
  id: string;
  projectName: string;
  projectNameEn?: string;
  brandLine?: string;
  contactPhone: string;
  contactKakao?: string;

  navItems: CategoryNavItem[];
  /** 사업안내 서브페이지 (overview, location, brand, map) */
  businessSubPages?: Record<string, BusinessSubPageBase>;
  /** 단지안내 서브페이지 (guide, premium, floorplan, prime) */
  complexSubPages?: Record<string, ComplexSubPage>;
  /** 세대안내 서브페이지 (floorplan, interior) */
  unitSubPages?: Record<string, UnitSubPage>;
  hero: HeroSection;
  heroSlides?: HeroSlide[];
  premiumCards: PremiumCard[];
  features: FeatureSection;
  banners: BannerItem[];
  premiumLife: PremiumLifeItem[];
  megaLife?: PremiumLifeItem[];
  community?: { image: string; alt?: string };
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
