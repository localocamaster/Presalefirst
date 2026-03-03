export interface NavItem {
  label: string;
  href: string;
}

export interface ImageSection {
  id: string;
  src: string;
  alt: string;
}

export interface TemplateData {
  id: string;
  projectName: string;
  projectNameEn?: string;
  brandLine?: string;
  tagline: string;
  location: string;
  address: string;
  types: { name: string; area: string; price: string }[];
  presaleDate: string;
  modelHouse: {
    address: string;
    hours: string;
    phone: string;
  };
  images: string[];
  contactPhone: string;
  contactKakao: string;
  features: string[];
  navItems: NavItem[];
  sections: ImageSection[];
  theme: {
    primary: string;
    headerBg: string;
    footerText: string;
  };
}

export const templateSamples: Record<string, TemplateData> = {
  zenith: {
    id: 'zenith',
    projectName: '두산위브더제니스',
    projectNameEn: 'THE ZENITH',
    brandLine: '센트럴 천안',
    tagline: '천안이 경험하지 못한 새로운 하이엔드를 발견하다',
    location: '충남 천안시',
    address: '충청남도 천안시 서북구 불당26로',
    types: [
      { name: '84㎡', area: '전용 84㎡', price: '2억 9,000만원~' },
      { name: '101㎡', area: '전용 101㎡', price: '3억 5,000만원~' },
      { name: '124㎡', area: '전용 124㎡', price: '4억 2,000만원~' },
    ],
    presaleDate: '2026년 3월 분양 예정',
    modelHouse: {
      address: '천안시 서북구 두정동 123',
      hours: '10:00 ~ 18:00 (연중무휴)',
      phone: '0000-0000',
    },
    images: [],
    contactPhone: '0000-0000',
    contactKakao: '분양퍼스트',
    features: ['역세권', '대형 단지', '풀옵션'],
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
      { id: 'overview', src: '/images/demo/zenith/slide1.png', alt: '사업개요' },
      { id: 'location', src: '/images/demo/zenith/slide2.png', alt: '입지환경 1' },
      { id: 'location2', src: '/images/demo/zenith/slide3.png', alt: '입지환경 2' },
      { id: 'location3', src: '/images/demo/zenith/slide4.png', alt: '입지환경 3' },
      { id: 'complex', src: '/images/demo/zenith/slide5.png', alt: '단지안내' },
      { id: 'unit', src: '/images/demo/zenith/slide6.png', alt: '평형정보' },
      { id: 'interior', src: '/images/demo/zenith/slide7.png', alt: '인테리어' },
      { id: 'premium', src: '/images/demo/zenith/slide8.png', alt: '프리미엄' },
    ],
    theme: {
      primary: '#1a3a7c',
      headerBg: 'rgba(255,255,255,0.97)',
      footerText: '두산위브더제니스 센트럴 천안 분양 홍보관',
    },
  },
  luxia: {
    id: 'luxia',
    projectName: '청담 루시아 514',
    projectNameEn: 'L U X I A',
    brandLine: 'Cheongdam 514 The Terrace',
    tagline: '강남 한가운데 프라이빗 테라스',
    location: '서울 강남구 청담동',
    address: '서울특별시 강남구 청담동 49-8번지',
    types: [
      { name: '59㎡', area: '전용 59㎡', price: '12억 5,000만원~' },
      { name: '84㎡', area: '전용 84㎡', price: '17억 8,000만원~' },
      { name: '114㎡', area: '전용 114㎡', price: '24억원~' },
    ],
    presaleDate: '2026년 2분기 분양 예정',
    modelHouse: {
      address: '서울 강남구 청담동 514',
      hours: '모델하우스 예약제 운영',
      phone: '0000-0000',
    },
    images: [],
    contactPhone: '0000-0000',
    contactKakao: '분양퍼스트',
    features: ['강남 핵심', '프리미엄', '테라스'],
    navItems: [
      { label: '사업개요', href: '#overview' },
      { label: '입지환경', href: '#location' },
      { label: '평형정보', href: '#unit' },
      { label: '인테리어', href: '#interior' },
      { label: '프리미엄', href: '#premium' },
      { label: '관심고객', href: '#reservation' },
    ],
    sections: [
      { id: 'overview', src: '/images/demo/luxia/slide1.png', alt: '사업개요' },
      { id: 'complex', src: '/images/demo/luxia/slide2.png', alt: '시공사' },
      { id: 'location', src: '/images/demo/luxia/slide3.png', alt: '입지환경 1' },
      { id: 'location2', src: '/images/demo/luxia/slide4.png', alt: '입지환경 2' },
      { id: 'overview2', src: '/images/demo/luxia/slide5.png', alt: '건축개요' },
      { id: 'interior', src: '/images/demo/luxia/slide6.png', alt: '조경' },
      { id: 'unit', src: '/images/demo/luxia/slide7.png', alt: '어메니티' },
    ],
    theme: {
      primary: '#ffffff',
      headerBg: 'rgba(10,10,10,0.95)',
      footerText: 'L U X I A  C H E O N G D A M',
    },
  },
  ssy: {
    id: 'ssy',
    projectName: '쌍용 더 플래티넘',
    projectNameEn: 'THE PLATINUM',
    brandLine: '서면',
    tagline: '부산의 중심에 서면, 그 무엇보다 더 플래티넘',
    location: '부산 부산진구 범천동',
    address: '부산광역시 부산진구 신천대로 145 일원',
    types: [
      { name: '74㎡', area: '전용 74㎡', price: '4억 2,000만원~' },
      { name: '84㎡', area: '전용 84㎡', price: '4억 8,000만원~' },
      { name: '101㎡', area: '전용 101㎡', price: '5억 7,000만원~' },
    ],
    presaleDate: '2026년 4월 분양 예정',
    modelHouse: {
      address: '부산 부산진구 서면동 456',
      hours: '09:30 ~ 18:30 (연중무휴)',
      phone: '0000-0000',
    },
    images: [],
    contactPhone: '0000-0000',
    contactKakao: '분양퍼스트',
    features: ['서면 역세권', '도심형', '대형 평수'],
    navItems: [
      { label: '사업개요', href: '#overview' },
      { label: '입지환경', href: '#location' },
      { label: '프리미엄', href: '#premium' },
      { label: '단지안내', href: '#complex' },
      { label: '관심고객', href: '#reservation' },
    ],
    sections: [
      { id: 'overview', src: '/images/demo/ssy/slide1.png', alt: '메인' },
      { id: 'complex', src: '/images/demo/ssy/slide2.png', alt: '단지조감도' },
      { id: 'location', src: '/images/demo/ssy/slide3.png', alt: '입지환경' },
      { id: 'premium', src: '/images/demo/ssy/slide4.png', alt: '혁신파크' },
      { id: 'premium2', src: '/images/demo/ssy/slide5.png', alt: '동서고가로' },
      { id: 'premium3', src: '/images/demo/ssy/slide6.png', alt: '시민공원 촉진지구' },
      { id: 'premium4', src: '/images/demo/ssy/slide7.png', alt: '부전역 복합환승센터' },
      { id: 'premium5', src: '/images/demo/ssy/slide8.png', alt: 'BuTX 급행철도' },
      { id: 'premium6', src: '/images/demo/ssy/slide9.png', alt: '국제금융혁신도시' },
    ],
    theme: {
      primary: '#2d3a8c',
      headerBg: 'rgba(255,255,255,0.97)',
      footerText: '서면 쌍용 더 플래티넘 분양 홍보관',
    },
  },
  dalseo: {
    id: 'dalseo',
    projectName: '달서 푸르지오 시그니처',
    projectNameEn: 'PRUGIO SIGNATURE',
    brandLine: '달서',
    tagline: '달서구 그린 라이프의 정석',
    location: '대구 달서구 본리동',
    address: '대구광역시 달서구 본리동 358-5번지 일원',
    types: [
      { name: '59㎡', area: '전용 59㎡', price: '2억 1,000만원~' },
      { name: '84㎡', area: '전용 84㎡', price: '2억 9,000만원~' },
      { name: '101㎡', area: '전용 101㎡', price: '3억 5,000만원~' },
    ],
    presaleDate: '2026년 5월 분양 예정',
    modelHouse: {
      address: '대구 달서구 성당동 789',
      hours: '10:00 ~ 18:00 (화~일)',
      phone: '0000-0000',
    },
    images: [],
    contactPhone: '0000-0000',
    contactKakao: '분양퍼스트',
    features: ['대형 단지', '녹지', '교육환경'],
    navItems: [
      { label: '사업개요', href: '#overview' },
      { label: '단지안내', href: '#complex' },
      { label: '입지환경', href: '#location' },
      { label: '프리미엄', href: '#premium' },
      { label: '관심고객', href: '#reservation' },
    ],
    sections: [
      { id: 'overview', src: '/images/demo/dalseo/slide1.png', alt: '메인 조감도' },
      { id: 'overview2', src: '/images/demo/dalseo/slide2.png', alt: '단지 위치' },
      { id: 'overview3', src: '/images/demo/dalseo/slide3.png', alt: '사업개요' },
      { id: 'complex', src: '/images/demo/dalseo/slide4.png', alt: '단지배치도' },
      { id: 'complex2', src: '/images/demo/dalseo/slide5.png', alt: '조망권' },
      { id: 'location', src: '/images/demo/dalseo/slide6.png', alt: '실거래가 추이' },
      { id: 'premium', src: '/images/demo/dalseo/slide7.png', alt: '분양가 상승' },
      { id: 'premium2', src: '/images/demo/dalseo/slide8.png', alt: '시장 리듬' },
      { id: 'premium3', src: '/images/demo/dalseo/slide9.png', alt: '미분양 감소' },
    ],
    theme: {
      primary: '#166534',
      headerBg: 'rgba(255,255,255,0.97)',
      footerText: '달서 푸르지오 시그니처 분양 홍보관',
    },
  },
};

export function createTemplateData(overrides: Partial<TemplateData> & { id: string }): TemplateData {
  const base = templateSamples[overrides.id] ?? templateSamples.zenith;
  return { ...base, ...overrides };
}
