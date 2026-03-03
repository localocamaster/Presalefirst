import type { ProjectConfig } from '../projectSchema';

/**
 * zenith 템플릿 기반 고객 프로젝트 예시
 * 실제 고객 추가 시 이 파일을 복사하여 projectId와 정보를 수정한 뒤
 * projectRegistry.ts에 등록합니다.
 */
export const zenithExample: ProjectConfig = {
  templateId: 'zenith',
  projectId: 'zenith-example',
  projectName: '강남 푸르지오 시그니처',
  projectNameEn: 'THE SIGNATURE',
  brandLine: '강남',
  tagline: '강남의 새로운 랜드마크',
  location: '서울 강남구',
  address: '서울특별시 강남구 테헤란로 123',
  types: [
    { name: '84㎡', area: '전용 84㎡', price: '15억원~' },
    { name: '101㎡', area: '전용 101㎡', price: '18억원~' },
    { name: '124㎡', area: '전용 124㎡', price: '22억원~' },
  ],
  presaleDate: '2026년 6월 분양 예정',
  modelHouse: {
    address: '서울 강남구 테헤란로 123 분양홍보관',
    hours: '10:00 ~ 18:00 (연중무휴)',
    phone: '02-1234-5678',
  },
  contactPhone: '02-1234-5678',
  contactKakao: '강남푸르지오',
  features: ['강남 역세권', '프리미엄', '대형 평수'],
  navItems: [
    { label: '사업개요', href: '#overview' },
    { label: '프리미엄', href: '#premium' },
    { label: '입지환경', href: '#location' },
    { label: '단지안내', href: '#complex' },
    { label: '평형정보', href: '#unit' },
    { label: '인테리어', href: '#interior' },
    { label: '관심고객', href: '#reservation' },
  ],
  sections: [
    { id: 'overview', src: '/images/projects/zenith-example/slide1.png', alt: '메인' },
    { id: 'location', src: '/images/projects/zenith-example/slide2.png', alt: '입지환경 1' },
    { id: 'location2', src: '/images/projects/zenith-example/slide3.png', alt: '입지환경 2' },
    { id: 'location3', src: '/images/projects/zenith-example/slide4.png', alt: '입지환경 3' },
    { id: 'complex', src: '/images/projects/zenith-example/slide5.png', alt: '단지안내' },
    { id: 'unit', src: '/images/projects/zenith-example/slide6.png', alt: '평형정보' },
    { id: 'interior', src: '/images/projects/zenith-example/slide7.png', alt: '인테리어' },
    { id: 'premium', src: '/images/projects/zenith-example/slide8.png', alt: '프리미엄' },
  ],
  theme: {
    primary: '#1a3a7c',
    headerBg: 'rgba(255,255,255,0.97)',
    footerText: '강남 푸르지오 시그니처 분양 홍보관',
  },
};
