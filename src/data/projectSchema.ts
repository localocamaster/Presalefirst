/**
 * 고객 프로젝트 편집용 스키마
 * 고객이 템플릿(zenith/luxia/ssy/dalseo)을 선택하면
 * 이 필드들을 편집하여 해당 고객의 아파트/분양 정보로 교체합니다.
 */

export interface ProjectNavItem {
  label: string;
  href: string;
}

export interface ProjectImageSection {
  id: string;
  src: string;
  alt: string;
}

/** 고객 프로젝트 설정 - 편집 가능한 필드만 포함 */
export interface ProjectConfig {
  /** 사용할 템플릿 (zenith | luxia | ssy | dalseo) */
  templateId: 'zenith' | 'luxia' | 'ssy' | 'dalseo';

  /** 프로젝트 고유 ID (URL 등에 사용, 예: customer-001) */
  projectId: string;

  /** === 기본 정보 === */
  projectName: string;
  projectNameEn?: string;
  brandLine?: string;
  tagline: string;
  location: string;
  address: string;

  /** === 분양 정보 === */
  types: { name: string; area: string; price: string }[];
  presaleDate: string;

  /** === 모델하우스 === */
  modelHouse: {
    address: string;
    hours: string;
    phone: string;
  };

  /** === 연락처 === */
  contactPhone: string;
  contactKakao?: string;

  /** === 특징 태그 === */
  features: string[];

  /** === 네비게이션 (템플릿별 구조 유지) === */
  navItems: ProjectNavItem[];

  /** === 이미지 섹션 (경로: /images/projects/{projectId}/slide1.png 등) === */
  sections: ProjectImageSection[];

  /** === 푸터/테마 === */
  theme: {
    primary: string;
    headerBg?: string;
    footerText: string;
  };
}
