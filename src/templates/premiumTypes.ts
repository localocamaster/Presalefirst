/** 프리미엄형 템플릿 데이터 인터페이스 */

export interface PremiumNavChild {
  label: string;
  href?: string;
  /** 서브페이지용 (life1, life2 등). 있으면 /demo/:slug/:pageId 로 이동 */
  pageId?: string;
}

export interface PremiumNavItem {
  label: string;
  href: string;
  children?: PremiumNavChild[];
}

export interface PremiumHero {
  slides: { 
    image: string; 
    title: string[]; 
    subtitle: string;
    videoId?: string;
    videoType?: 'vimeo' | 'youtube';
  }[];
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

/** 사업안내 서브페이지 - 사업개요 */
export interface PremiumOverviewSubPage {
  pageId: string;
  type: 'overview';
  title: string;
  subtitle: string;
  subVisualImage: string;
  contentTitle: string;
  contentSubtitle?: string;
  contentDesc?: string;
  mainImage: string;
  infoLabel?: string;
  items: OverviewItem[];
  caution?: string[];
}

/** 사업안내 서브페이지 - 입지환경 */
export interface PremiumLocationSubPage {
  pageId: string;
  type: 'location';
  title: string;
  subtitle: string;
  subVisualImage: string;
  contentTitle: string;
  contentSubtitle?: string;
  contentDesc?: string;
  mainImage: string;
  poiGroups?: { category: string; title: string; items: string[]; image: string }[];
  caution?: string[];
}

/** 사업안내 서브페이지 - 브랜드소개 (이미지 단일) */
export interface PremiumBrandSubPage {
  pageId: string;
  type: 'brand';
  title: string;
  subtitle: string;
  subVisualImage: string;
  image: string;
  mobileImage?: string;
}

/** 사업안내 서브페이지 - 오시는길 */
export interface PremiumDirectionsSubPage {
  pageId: string;
  type: 'directions';
  title: string;
  subtitle: string;
  subVisualImage: string;
  descTitle?: string;
  addresses: { label: string; address: string }[];
  modelHouseImage: string;
  siteImage: string;
  modelHouseAddress: string;
  siteAddress: string;
  kakaoMapUrl?: string;
  naverMapUrl?: string;
  caution?: string[];
}

/** 단지안내 서브페이지 - 커뮤니티 (단일 이미지) */
export interface PremiumComplexCommunitySubPage {
  pageId: string;
  type: 'complexCommunity';
  title: string;
  subtitle: string;
  subVisualImage: string;
  caption?: string;
  mainImage: string;
  mobileImage?: string;
  caution?: string[];
}

/** 단지안내 서브페이지 - 프리미엄 (여러 아이템) */
export interface PremiumComplexPremiumSubPage {
  pageId: string;
  type: 'complexPremium';
  title: string;
  subtitle: string;
  subVisualImage: string;
  caption?: string;
  premiumSubtitle?: string;
  premiumDesc?: string;
  items: { number: string; title: string; description: string; image: string }[];
  caution?: string[];
}

/** 단지안내 서브페이지 - 동호수배치도 (단일 또는 다중 이미지) */
export interface PremiumComplexFloorplanSubPage {
  pageId: string;
  type: 'complexFloorplan';
  title: string;
  subtitle: string;
  subVisualImage: string;
  mainImage?: string;
  images?: string[];
  caution?: string[];
}

/** 단지안내 서브페이지 - 특화서비스 (리스트 + 이미지) */
export interface PremiumComplexPrimeSubPage {
  pageId: string;
  type: 'complexPrime';
  title: string;
  subtitle: string;
  subVisualImage: string;
  premiumLabel?: string;
  premiumNumber?: string;
  items: string[];
  images: string[];
  caution?: string[];
}

/** 단지안내 서브페이지 - 단지안내 (여러 이미지와 설명) */
export interface PremiumComplexInfoSubPage {
  pageId: string;
  type: 'complexInfo';
  title: string;
  subtitle: string;
  subVisualImage: string;
  caption?: string;
  contentTitle?: string;
  contentDesc?: string;
  images: { image: string; title?: string; description?: string }[];
  caution?: string[];
}

/** 세대안내 서브페이지 - 평면도 (59A/59B 탭 또는 84 단일) */
export interface PremiumUnitSubPage {
  pageId: string;
  type: 'unit';
  title: string;
  subtitle: string;
  subVisualImage: string;
  /** 59타입: 2개(59A,59B) / 84타입: 1개 */
  variants: {
    typeLabel: string;
    count?: string;
    description?: string;
    areas?: { label: string; value: string }[];
    image: string;
  }[];
  caution?: string[];
}

/** 세대안내 서브페이지 - 평면정보 (탭 구조: 59㎡, 84㎡, 114㎡) */
export interface PremiumUnitFloorplanSubPage {
  pageId: string;
  type: 'unitFloorplan';
  title: string;
  subtitle: string;
  subVisualImage: string;
  tabs: { label: string; image: string }[];
  caution?: string[];
}

/** 세대안내 서브페이지 - 인테리어 (탭 구조: 59㎡, 84㎡, 114㎡) */
export interface PremiumUnitInteriorSubPage {
  pageId: string;
  type: 'unitInterior';
  title: string;
  subtitle: string;
  subVisualImage: string;
  tabs: { label: string; image: string }[];
  caution?: string[];
}

/** 홍보안내 서브페이지 - 홍보영상 (비디오 갤러리) */
export interface PremiumVideoSubPage {
  pageId: string;
  type: 'video';
  title: string;
  subtitle: string;
  subVisualImage: string;
  videos: { videoId: string; thumbnail: string; title: string }[];
}

/** 홍보안내 서브페이지 - 언론보도 (테이블형) */
export interface PremiumNewsSubPage {
  pageId: string;
  type: 'news';
  title: string;
  subtitle: string;
  subVisualImage: string;
  items: { number?: number; title: string; source: string; date: string; url: string }[];
}

/** 홍보센터 서브페이지 - 공지사항 (목록형) */
export interface PremiumNoticeSubPage {
  pageId: string;
  type: 'notice';
  title: string;
  subtitle: string;
  subVisualImage: string;
  items: { number: number; title: string; date: string }[];
}

/** 분양안내 서브페이지 - 문서형 (단일 이미지) */
export interface PremiumDocumentSubPage {
  pageId: string;
  type: 'document';
  title: string;
  subtitle: string;
  subVisualImage: string;
  image: string;
  caution?: string[];
}

/** 청약안내 서브페이지 - 청약자격안내 (탭 구조) */
export interface PremiumSubscriptionEligibilitySubPage {
  pageId: string;
  type: 'subscriptionEligibility';
  title: string;
  subtitle: string;
  subVisualImage: string;
  tabs: { label: string; image: string }[];
  caution?: string[];
}

/** 관심고객등록 서브페이지 */
export interface PremiumRegistrationSubPage {
  pageId: string;
  type: 'registration';
  title: string;
  subtitle: string;
  subVisualImage: string;
  unitTypes: string[]; // 관심평형 옵션 (예: ['59㎡', '84㎡', '114㎡'])
  caution?: string[];
}

/** 홍보안내 서브페이지 - 갤러리 (이미지 그리드) */
export interface PremiumGallerySubPage {
  pageId: string;
  type: 'gallery';
  title: string;
  subtitle: string;
  subVisualImage: string;
  images: { image: string; title?: string; description?: string }[];
  caution?: string[];
}

export type PremiumSubPage =
  | PremiumOverviewSubPage
  | PremiumLocationSubPage
  | PremiumBrandSubPage
  | PremiumDirectionsSubPage
  | PremiumComplexCommunitySubPage
  | PremiumComplexPremiumSubPage
  | PremiumComplexFloorplanSubPage
  | PremiumComplexPrimeSubPage
  | PremiumComplexInfoSubPage
  | PremiumUnitSubPage
  | PremiumUnitFloorplanSubPage
  | PremiumUnitInteriorSubPage
  | PremiumVideoSubPage
  | PremiumNewsSubPage
  | PremiumNoticeSubPage
  | PremiumDocumentSubPage
  | PremiumSubscriptionEligibilitySubPage
  | PremiumRegistrationSubPage
  | PremiumGallerySubPage;

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

  brand?: {
    title?: string;
    subtitle?: string;
    image?: string;
    content?: string;
  };

  videos?: {
    title?: string;
    subtitle?: string;
    items: { videoId: string; thumbnail: string; title?: string; type: 'youtube' | 'vimeo' }[];
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
    textPrimary?: string;
    textSecondary?: string;
    footerText: string;
    footerInfo: {
      developer?: string;
      constructor?: string;
      trustee?: string;
      bizNumber?: string;
    };
    disclaimer?: string;
  };

  /** 사업안내 등 서브페이지 (선택) */
  subPages?: PremiumSubPage[];
}
