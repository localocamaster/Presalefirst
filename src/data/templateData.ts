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

// ── zenith 기반 변형 ──
templateSamples['hangang'] = {
  ...templateSamples.zenith,
  id: 'hangang',
  projectName: '한강 아이파크 시티',
  projectNameEn: "I'PARK CITY",
  brandLine: '용산',
  tagline: '한강변 프리미엄 주거의 새로운 기준',
  location: '서울 용산구',
  address: '서울특별시 용산구 이촌동 302-1',
  types: [
    { name: '84㎡', area: '전용 84㎡', price: '18억원~' },
    { name: '101㎡', area: '전용 101㎡', price: '22억원~' },
    { name: '124㎡', area: '전용 124㎡', price: '28억원~' },
  ],
  presaleDate: '2026년 4월 분양 예정',
  features: ['한강뷰', '역세권', '대형 단지'],
  theme: {
    primary: '#0d6e3f',
    headerBg: 'rgba(255,255,255,0.97)',
    footerText: '한강 아이파크 시티 분양 홍보관',
  },
};

templateSamples['songpa'] = {
  ...templateSamples.zenith,
  id: 'songpa',
  projectName: '송파 헬리오시티',
  projectNameEn: 'HELIO CITY',
  brandLine: '송파',
  tagline: '송파의 새로운 주거 랜드마크',
  location: '서울 송파구',
  address: '서울특별시 송파구 가락동 일원',
  types: [
    { name: '59㎡', area: '전용 59㎡', price: '12억원~' },
    { name: '84㎡', area: '전용 84㎡', price: '15억원~' },
    { name: '101㎡', area: '전용 101㎡', price: '19억원~' },
  ],
  presaleDate: '2026년 6월 분양 예정',
  features: ['대단지', '교통 허브', '학군'],
  theme: {
    primary: '#c75000',
    headerBg: 'rgba(255,255,255,0.97)',
    footerText: '송파 헬리오시티 분양 홍보관',
  },
};

// ── luxia 기반 변형 ──
templateSamples['apgujeong'] = {
  ...templateSamples.luxia,
  id: 'apgujeong',
  projectName: '압구정 디오르 하우스',
  projectNameEn: 'D I O R',
  brandLine: 'Apgujeong Luxury Residence',
  tagline: '압구정에서 만나는 최상의 라이프',
  location: '서울 강남구 압구정동',
  address: '서울특별시 강남구 압구정로 123',
  types: [
    { name: '84㎡', area: '전용 84㎡', price: '25억원~' },
    { name: '114㎡', area: '전용 114㎡', price: '35억원~' },
    { name: '149㎡', area: '전용 149㎡', price: '48억원~' },
  ],
  presaleDate: '2026년 하반기 분양 예정',
  features: ['압구정 핵심', '하이엔드', '프라이빗'],
  theme: {
    primary: '#ffffff',
    headerBg: 'rgba(10,10,10,0.95)',
    footerText: 'D I O R  A P G U J E O N G',
  },
};

templateSamples['yongsan'] = {
  ...templateSamples.luxia,
  id: 'yongsan',
  projectName: '용산 더 시티 센트럴',
  projectNameEn: 'T H E  C I T Y',
  brandLine: 'Yongsan Central Park',
  tagline: '용산공원 옆 하이엔드 레지던스',
  location: '서울 용산구',
  address: '서울특별시 용산구 한강대로 405',
  types: [
    { name: '84㎡', area: '전용 84㎡', price: '20억원~' },
    { name: '114㎡', area: '전용 114㎡', price: '28억원~' },
    { name: '149㎡', area: '전용 149㎡', price: '38억원~' },
  ],
  presaleDate: '2026년 5월 분양 예정',
  features: ['용산공원', '한강뷰', '프리미엄'],
  theme: {
    primary: '#ffffff',
    headerBg: 'rgba(10,10,10,0.95)',
    footerText: 'T H E  C I T Y  Y O N G S A N',
  },
};

// ── ssy 기반 변형 ──
templateSamples['haeundae'] = {
  ...templateSamples.ssy,
  id: 'haeundae',
  projectName: '해운대 자이 오션프론트',
  projectNameEn: 'XI OCEAN',
  brandLine: '해운대',
  tagline: '해운대 오션뷰의 정점',
  location: '부산 해운대구',
  address: '부산광역시 해운대구 우동 1234',
  types: [
    { name: '84㎡', area: '전용 84㎡', price: '7억 5,000만원~' },
    { name: '101㎡', area: '전용 101㎡', price: '9억 2,000만원~' },
    { name: '124㎡', area: '전용 124㎡', price: '11억원~' },
  ],
  presaleDate: '2026년 3월 분양 예정',
  features: ['오션뷰', '해운대 핵심', '프리미엄'],
  theme: {
    primary: '#0891b2',
    headerBg: 'rgba(255,255,255,0.97)',
    footerText: '해운대 자이 오션프론트 분양 홍보관',
  },
};

templateSamples['gwangan'] = {
  ...templateSamples.ssy,
  id: 'gwangan',
  projectName: '광안 롯데캐슬 파크뷰',
  projectNameEn: 'LOTTE CASTLE',
  brandLine: '광안',
  tagline: '광안리 바다를 품은 프리미엄 단지',
  location: '부산 수영구',
  address: '부산광역시 수영구 광안동 일원',
  types: [
    { name: '74㎡', area: '전용 74㎡', price: '5억원~' },
    { name: '84㎡', area: '전용 84㎡', price: '6억 2,000만원~' },
    { name: '101㎡', area: '전용 101㎡', price: '7억 5,000만원~' },
  ],
  presaleDate: '2026년 7월 분양 예정',
  features: ['광안리뷰', '역세권', '대형 단지'],
  theme: {
    primary: '#1e3a5f',
    headerBg: 'rgba(255,255,255,0.97)',
    footerText: '광안 롯데캐슬 파크뷰 분양 홍보관',
  },
};

// ── dalseo 기반 변형 ──
templateSamples['suseong'] = {
  ...templateSamples.dalseo,
  id: 'suseong',
  projectName: '수성 SK뷰 레이크파크',
  projectNameEn: 'SK VIEW',
  brandLine: '수성',
  tagline: '수성못을 품은 프리미엄 리빙',
  location: '대구 수성구',
  address: '대구광역시 수성구 두산동 일원',
  types: [
    { name: '59㎡', area: '전용 59㎡', price: '3억 5,000만원~' },
    { name: '84㎡', area: '전용 84㎡', price: '4억 8,000만원~' },
    { name: '101㎡', area: '전용 101㎡', price: '5억 9,000만원~' },
  ],
  presaleDate: '2026년 4월 분양 예정',
  features: ['수성못뷰', '학군', '녹지'],
  theme: {
    primary: '#0369a1',
    headerBg: 'rgba(255,255,255,0.97)',
    footerText: '수성 SK뷰 레이크파크 분양 홍보관',
  },
};

templateSamples['gimpo'] = {
  ...templateSamples.dalseo,
  id: 'gimpo',
  projectName: '김포 e편한세상 레이크뷰',
  projectNameEn: 'e LAKE VIEW',
  brandLine: '김포',
  tagline: '김포한강신도시의 새로운 프리미엄',
  location: '경기 김포시',
  address: '경기도 김포시 구래동 일원',
  types: [
    { name: '59㎡', area: '전용 59㎡', price: '3억원~' },
    { name: '84㎡', area: '전용 84㎡', price: '4억 2,000만원~' },
    { name: '101㎡', area: '전용 101㎡', price: '5억원~' },
  ],
  presaleDate: '2026년 8월 분양 예정',
  features: ['한강신도시', '교통', '자연환경'],
  theme: {
    primary: '#92400e',
    headerBg: 'rgba(255,255,255,0.97)',
    footerText: '김포 e편한세상 레이크뷰 분양 홍보관',
  },
};
