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
  /** 서브메뉴 (드롭다운). pageId가 있으면 생략 가능 */
  children?: Category2SubMenuItem[];
  /** 직접 링크용. 설정 시 클릭 시 해당 페이지로 이동 (드롭다운 없음) */
  pageId?: string;
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
  /** 추가 이미지 (테이블 위에 표시) */
  images?: string[];
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

/** 메인 페이지 섹션 (이미지/슬라이더/배너) */
export interface Category2MainSection {
  id: string;
  title: string;
  subtitle?: string;
  /** 단일 이미지 (type = 'image') */
  image?: string;
  /** 여러 이미지 (type = 'slider' | 'banner') */
  images?: string[];
  /** 섹션 타입: image(기본), slider, banner */
  sectionType?: 'image' | 'slider' | 'banner';
  /** 클릭 시 이동할 서브 페이지 pageId */
  linkTo?: string;
}

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

  /** 메인 페이지 섹션들 */
  mainSections: Category2MainSection[];

  /** 메인 페이지 현장안내 섹션 (선택) */
  mainLocation?: {
    title: string;
    projectName: string;
    address: string;
    phone: string;
    mapImage: string;
    cautions: string[];
  };

  /** 메인 페이지 방문예약 배경 이미지 (선택) */
  customerBgImage?: string;

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
