/** 카테고리형 2번째 템플릿 (멀티페이지 + SNB) 데이터 인터페이스 */

/** 서브메뉴 아이템 */
export interface Category2SubMenuItem {
  label: string;
  /** 페이지 식별자 (예: 'life1', 'premium1', 'unit1') */
  pageId: string;
}

/** GNB 메인 메뉴 아이템 */
export interface Category2NavItem {
  label: string;
  children: Category2SubMenuItem[];
}

/** 메인 슬라이드 */
export interface Category2Slide {
  image: string;
  title: string[];
  subtitle?: string;
}

/** 사업개요 테이블 항목 */
export interface ProjectInfoRow {
  label: string;
  value: string;
}

/** 서브 페이지 공통 */
export interface SubPageBase {
  pageId: string;
  title: string;
  /** 서브 비주얼 배경 이미지 */
  subVisualImage: string;
}

/** 이미지 중심 서브 페이지 (브랜드소개, 단지설계, 조경, 커뮤니티, 시스템, 동호수배치도 등) */
export interface ImageSubPage extends SubPageBase {
  type: 'image';
  images: { src: string; alt: string; caption?: string }[];
  description?: string;
}

/** 사업개요 페이지 */
export interface OverviewSubPage extends SubPageBase {
  type: 'overview';
  infoTable: ProjectInfoRow[];
  mainImage?: string;
  description?: string;
}

/** 입지환경 페이지 */
export interface LocationSubPage extends SubPageBase {
  type: 'location';
  mainImage: string;
  description?: string;
  poiGroups: {
    category: string;
    icon?: string;
    items: string[];
  }[];
}

/** 세대안내(평면도) 페이지 */
export interface UnitSubPage extends SubPageBase {
  type: 'unit';
  unitName: string;
  area: string;
  floorPlanImage: string;
  features?: string[];
  roomInfo?: { label: string; value: string }[];
}

/** 오시는길 페이지 */
export interface DirectionsSubPage extends SubPageBase {
  type: 'directions';
  mapImage?: string;
  modelHouseAddress: string;
  siteAddress: string;
  kakaoMapUrl?: string;
  naverMapUrl?: string;
}

/** 방문예약 페이지 */
export interface ReservationSubPage extends SubPageBase {
  type: 'reservation';
}

/** 서브 페이지 유니온 타입 */
export type Category2SubPage =
  | OverviewSubPage
  | ImageSubPage
  | LocationSubPage
  | UnitSubPage
  | DirectionsSubPage
  | ReservationSubPage;

/** 카테고리형 2번째 템플릿 전체 데이터 */
export interface Category2TemplateData {
  id: string;
  projectName: string;
  projectNameEn?: string;
  contactPhone: string;
  contactKakao?: string;

  /** GNB 메뉴 구조 */
  navItems: Category2NavItem[];

  /** 메인 페이지 슬라이더 */
  mainSlides: Category2Slide[];

  /** 메인 페이지 섹션 이미지들 (브랜드소개, 입지, 프리미엄, 단지, 조경 등 미리보기) */
  mainSections: {
    id: string;
    title: string;
    subtitle?: string;
    image: string;
    /** 클릭 시 이동할 서브 페이지 pageId */
    linkTo?: string;
  }[];

  /** 모든 서브 페이지 데이터 */
  subPages: Category2SubPage[];

  /** 테마/푸터 */
  theme: {
    primary: string;
    secondary?: string;
    footerText: string;
    footerInfo: {
      developer?: string;
      constructor?: string;
      trustee?: string;
      sales?: string;
      bizNumber?: string;
    };
    disclaimers?: string[];
  };
}
