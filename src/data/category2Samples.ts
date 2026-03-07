import type { Category2TemplateData } from '../templates/category2Types';

export const category2Samples: Record<string, Category2TemplateData> = {
  'gunsan-vivaldi': {
    id: 'gunsan-vivaldi',
    projectName: '군산 한라비발디 더프라임',
    projectNameEn: 'HALLA VIVALDI THE PRIME',
    contactPhone: '0000-0000',

    navItems: [
      {
        label: '사업안내',
        children: [
          { label: '사업개요', pageId: 'life1' },
          { label: '브랜드소개', pageId: 'life2' },
          { label: '프리미엄6', pageId: 'life3' },
          { label: '입지환경', pageId: 'life4' },
          { label: '오시는길', pageId: 'life5' },
        ],
      },
      {
        label: '단지안내',
        children: [
          { label: '단지설계', pageId: 'premium1' },
          { label: '동호수배치도', pageId: 'premium2' },
          { label: '조경', pageId: 'premium3' },
          { label: '커뮤니티', pageId: 'premium4' },
          { label: '시스템', pageId: 'premium5' },
        ],
      },
      {
        label: '세대안내',
        children: [
          { label: '84A㎡', pageId: 'unit1' },
          { label: '84B㎡', pageId: 'unit2' },
          { label: '111㎡', pageId: 'unit3' },
          { label: '115㎡', pageId: 'unit4' },
          { label: '136㎡', pageId: 'unit5' },
          { label: '258㎡', pageId: 'unit6' },
        ],
      },
    ],

    mainSlides: [
      {
        image: '/images/demo/gunsan-vivaldi/main-slide1.webp',
        title: ['군산의 새로운 생활 중심!', '군산 한라비발디 더프라임'],
        subtitle: 'Premium',
      },
      {
        image: '/images/demo/gunsan-vivaldi/main-slide2.webp',
        title: ['군산의 새로운 생활 중심!', '군산 한라비발디 더프라임'],
        subtitle: 'Premium',
      },
    ],

    mainSections: [
      {
        id: 'brand',
        title: '브랜드소개',
        subtitle: '군산 한라비발디 더프라임',
        image: '/images/demo/gunsan-vivaldi/brand.webp',
        linkTo: 'life2',
      },
      {
        id: 'location-env',
        title: '입지환경',
        subtitle: '군산 한라비발디 더프라임',
        image: '/images/demo/gunsan-vivaldi/location.webp',
        linkTo: 'life4',
      },
      {
        id: 'premium-preview',
        title: '프리미엄',
        subtitle: '군산 한라비발디 더프라임',
        image: '/images/demo/gunsan-vivaldi/premium.webp',
        linkTo: 'life3',
      },
      {
        id: 'complex',
        title: '단지안내',
        subtitle: '군산 한라비발디 더프라임',
        sectionType: 'slider',
        images: [
          '/images/demo/gunsan-vivaldi/complex1.webp',
          '/images/demo/gunsan-vivaldi/complex2.webp',
        ],
        linkTo: 'premium1',
      },
      {
        id: 'landscape',
        title: '완벽한 조경',
        subtitle: '군산 한라비발디 더프라임',
        image: '/images/demo/gunsan-vivaldi/landscape.webp',
        linkTo: 'premium3',
      },
      {
        id: 'banner',
        sectionType: 'banner',
        title: '',
        images: [
          '/images/demo/gunsan-vivaldi/banner1.webp',
          '/images/demo/gunsan-vivaldi/banner2.webp',
        ],
      },
    ],

    mainLocation: {
      title: '현장안내',
      projectName: '군산 한라비발디 더프라임',
      address: '전북특별자치도 군산시 지곡동 126번지 외 21필지',
      phone: '0000-0000',
      mapImage: '/images/demo/gunsan-vivaldi/map.webp',
      cautions: [
        '상기 CG는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 날 수 있습니다.',
        '건축물의 외관 및 색채계획, 부대시설, 창호계획, 조경계획 등의 기타 시설은 추후 변경될 수 있습니다.',
        '단지를 제외한 기타 배경(산, 외부식재등)은 소비자의 이해를 돕기 위한 참고 이미지를 활용하였으며 실제와 다를 수 있습니다.',
        '단지 내외부 옹벽, 조경석, 방음벽, 태양광설비 등의 계획(범위, 디자인, 위치, 높이)은 변경될 수 있습니다.',
        '현장여건 등에 따라 일부 변경될 수 있으므로 견본주택에 방문하시어 직접 확인하시기 바랍니다.',
      ],
    },

    customerBgImage: '/images/demo/gunsan-vivaldi/customer-bg.webp',

    subPages: [
      // ── 사업안내 ──
      {
        pageId: 'life1',
        type: 'overview',
        title: '사업개요',
        subVisualImage: '/images/demo/gunsan-vivaldi/sub-visual1.jpg',
        description: '군산 한라비발디 더프라임은 군산시 지곡동에 위치한 대단지 프리미엄 아파트입니다.',
        infoTable: [
          { label: '사업명', value: '군산 지곡동 공동주택 신축공사' },
          { label: '대지위치', value: '군산시 지곡동 126번지 외 21필지' },
          { label: '지역지구', value: '도시지역 / 제2종 일반주거지역' },
          { label: '건축규모', value: '지하 3층 ~ 지상 29층' },
          { label: '대지면적', value: '33,163㎡' },
          { label: '연면적', value: '120,887.063㎡' },
          { label: '세대수', value: '84㎡A, 84㎡B, 111㎡, 115㎡, 136㎡, 258㎡ (총 633세대)' },
        ],
        mainImage: '/images/demo/gunsan-vivaldi/sub-overview.webp',
      },
      {
        pageId: 'life2',
        type: 'image',
        title: '브랜드소개',
        subVisualImage: '/images/demo/gunsan-vivaldi/sub-visual2.jpg',
        images: [
          { src: '/images/demo/gunsan-vivaldi/sub-brand.webp', alt: '브랜드소개', caption: '군산 한라비발디 더프라임' },
        ],
      },
      {
        pageId: 'life3',
        type: 'image',
        title: '프리미엄6',
        subVisualImage: '/images/demo/gunsan-vivaldi/sub-visual3.jpg',
        images: [
          { src: '/images/demo/gunsan-vivaldi/sub-premium.webp', alt: '프리미엄6', caption: '군산 한라비발디 더프라임' },
        ],
      },
      {
        pageId: 'life4',
        type: 'image',
        title: '입지환경',
        subVisualImage: '/images/demo/gunsan-vivaldi/sub-visual4.jpg',
        images: [
          { src: '/images/demo/gunsan-vivaldi/sub-location.webp', alt: '입지환경', caption: '군산 한라비발디 더프라임' },
        ],
      },
      {
        pageId: 'life5',
        type: 'directions',
        title: '오시는길',
        subVisualImage: '/images/demo/gunsan-vivaldi/sub-visual5.webp',
        mapImage: '/images/demo/gunsan-vivaldi/sub-directions.webp',
        modelHouseAddress: '전북특별자치도 군산시 수송로 291 (미장동)',
        siteAddress: '전북특별자치도 군산시 지곡동 126번지 외 21필지',
      },

      // ── 단지안내 ──
      {
        pageId: 'premium1',
        type: 'image',
        title: '단지설계',
        subVisualImage: '/images/demo/gunsan-vivaldi/sub-visual5.webp',
        images: [
          { src: '/images/demo/gunsan-vivaldi/sub-complex-design.webp', alt: '단지설계', caption: '군산 한라비발디 더프라임' },
        ],
      },
      {
        pageId: 'premium2',
        type: 'image',
        title: '동호수배치도',
        subVisualImage: '/images/demo/gunsan-vivaldi/sub-visual5.webp',
        description: '생활에 여유를 더한 설계 명품의 가치를 품은 단지',
        images: [
          { src: '/images/demo/gunsan-vivaldi/sub-floor-plan.webp', alt: '동호수배치도', caption: '군산 한라비발디 더프라임' },
        ],
      },
      {
        pageId: 'premium3',
        type: 'image',
        title: '조경',
        subVisualImage: '/images/demo/gunsan-vivaldi/sub-visual5.webp',
        images: [
          { src: '/images/demo/gunsan-vivaldi/sub-landscape.webp', alt: '조경', caption: '군산 한라비발디 더프라임' },
        ],
      },
      {
        pageId: 'premium4',
        type: 'image',
        title: '커뮤니티',
        subVisualImage: '/images/demo/gunsan-vivaldi/sub-visual5.webp',
        images: [
          { src: '/images/demo/gunsan-vivaldi/sub-community.webp', alt: '커뮤니티', caption: '군산 한라비발디 더프라임' },
        ],
      },
      {
        pageId: 'premium5',
        type: 'image',
        title: '시스템',
        subVisualImage: '/images/demo/gunsan-vivaldi/sub-visual5.webp',
        images: [
          { src: '/images/demo/gunsan-vivaldi/sub-system.webp', alt: '시스템', caption: '군산 한라비발디 더프라임' },
        ],
      },

      // ── 세대안내 ──
      {
        pageId: 'unit1',
        type: 'image',
        title: '84A㎡',
        subVisualImage: '/images/demo/gunsan-vivaldi/sub-visual5.webp',
        images: [
          { src: '/images/demo/gunsan-vivaldi/sub-unit-84a.webp', alt: '84A㎡ 평면도', caption: '군산 한라비발디 더프라임' },
        ],
      },
      {
        pageId: 'unit2',
        type: 'image',
        title: '84B㎡',
        subVisualImage: '/images/demo/gunsan-vivaldi/sub-visual5.webp',
        images: [
          { src: '/images/demo/gunsan-vivaldi/sub-unit-84b.webp', alt: '84B㎡ 평면도', caption: '군산 한라비발디 더프라임' },
        ],
      },
      {
        pageId: 'unit3',
        type: 'image',
        title: '111㎡',
        subVisualImage: '/images/demo/gunsan-vivaldi/sub-visual5.webp',
        images: [
          { src: '/images/demo/gunsan-vivaldi/sub-unit-111.webp', alt: '111㎡ 평면도', caption: '군산 한라비발디 더프라임' },
        ],
      },
      {
        pageId: 'unit4',
        type: 'image',
        title: '115㎡',
        subVisualImage: '/images/demo/gunsan-vivaldi/sub-visual5.webp',
        images: [
          { src: '/images/demo/gunsan-vivaldi/sub-unit-115.webp', alt: '115㎡ 평면도', caption: '군산 한라비발디 더프라임' },
        ],
      },
      {
        pageId: 'unit5',
        type: 'image',
        title: '136㎡',
        subVisualImage: '/images/demo/gunsan-vivaldi/sub-visual5.webp',
        images: [
          { src: '/images/demo/gunsan-vivaldi/sub-unit-136.webp', alt: '136㎡ 평면도', caption: '군산 한라비발디 더프라임' },
        ],
      },
      {
        pageId: 'unit6',
        type: 'image',
        title: '258㎡',
        subVisualImage: '/images/demo/gunsan-vivaldi/sub-visual5.webp',
        images: [
          { src: '/images/demo/gunsan-vivaldi/sub-unit-258.webp', alt: '258㎡ 평면도', caption: '군산 한라비발디 더프라임' },
        ],
      },
    ],

    theme: {
      primary: '#7c5832',
      secondary: '#a67c52',
      footerText: '군산 한라비발디 더프라임 분양 홍보관',
      footerInfo: {
        developer: '(유)나눔디앤씨',
        constructor: 'HL디앤아이한라',
        trustee: '코리아신탁',
      },
      disclaimers: [
        '본 홍보물의 CG, 이미지, 도면 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 차이가 있을 수 있습니다.',
        '건축물의 외관 및 색채계획, 조경, 식재 등은 인허가 과정 및 실시설계 시 변경될 수 있습니다.',
        '단지 내외부 조경, 시설물 등은 실시설계 및 인허가 협의에 따라 변경될 수 있습니다.',
        '각종 개발계획은 관계기관의 사정에 따라 변경 또는 취소될 수 있으며, 이는 당사와 무관합니다.',
        '본 홈페이지 내 이미지 및 콘텐츠의 무단 복제, 배포를 금합니다.',
      ],
    },
  },

  'believe-dable': {
    id: 'believe-dable',
    projectName: '빌리브 디 에이블',
    projectNameEn: 'BELIEVE D ABLE',
    contactPhone: '0000-0000',

    navItems: [
      {
        label: '사업안내',
        children: [
          { label: '브랜드소개', pageId: 'life1' },
          { label: '사업개요', pageId: 'life2' },
          { label: '입지환경', pageId: 'life3' },
          { label: '오시는길', pageId: 'life4' },
        ],
      },
      {
        label: '단지안내',
        children: [
          { label: '배치도', pageId: 'premium1' },
          { label: '특화설계', pageId: 'premium2' },
          { label: '커뮤니티', pageId: 'premium3' },
        ],
      },
      {
        label: '세대평면',
        children: [
          { label: '오피스텔', pageId: 'unit1' },
          { label: '도시형생활주택', pageId: 'unit2' },
          { label: '펜트하우스', pageId: 'unit3' },
        ],
      },
      {
        label: '프리미엄',
        children: [
          { label: '인테리어', pageId: 'premium4' },
          { label: '컨시어지', pageId: 'premium5' },
          { label: '프리미엄', pageId: 'premium6' },
        ],
      },
      { label: '관심고객등록', pageId: 'reservation' },
    ],

    mainSlides: [
      {
        image: '/images/demo/believe-dable/main-slide1.webp',
        title: ['새로움에 살다.', '빌리브 디 에이블'],
        subtitle: 'BELIEVE D ABLE',
      },
    ],

    mainSections: [
      {
        id: 'overview',
        title: '',
        subtitle: '',
        image: '/images/demo/believe-dable/overview.webp',
        linkTo: 'life2',
      },
      {
        id: 'brand',
        title: '',
        subtitle: '',
        image: '/images/demo/believe-dable/brand.webp',
        linkTo: 'life1',
      },
      {
        id: 'banner',
        sectionType: 'banner',
        title: '',
        images: [
          '/images/demo/believe-dable/banner1.webp',
          '/images/demo/believe-dable/banner2.webp',
        ],
      },
      {
        id: 'premium-preview',
        title: '',
        subtitle: '',
        image: '/images/demo/believe-dable/premium.webp',
        linkTo: 'premium6',
      },
      {
        id: 'interior',
        title: '갤러리 로비',
        subtitle: '웅장하고 예술적인 층고 7.2m 갤러리 로비',
        sectionType: 'slider',
        images: [
          '/images/demo/believe-dable/interior1.webp',
          '/images/demo/believe-dable/interior2.webp',
          '/images/demo/believe-dable/interior3.webp',
          '/images/demo/believe-dable/interior4.webp',
          '/images/demo/believe-dable/interior5.webp',
        ],
        linkTo: 'premium4',
      },
      {
        id: 'complex',
        title: '',
        subtitle: '',
        sectionType: 'slider',
        images: [
          '/images/demo/believe-dable/complex1.webp',
          '/images/demo/believe-dable/complex2.webp',
          '/images/demo/believe-dable/complex3.webp',
        ],
        linkTo: 'premium1',
      },
      {
        id: 'banner2',
        sectionType: 'banner',
        title: '',
        images: ['/images/demo/believe-dable/banner3.webp'],
      },
    ],

    mainLocation: {
      title: '현장안내',
      projectName: '새로움에 살다. 빌리브 디 에이블',
      address: '서울 마포구 노고산동 107-46번지 일대',
      phone: '0000-0000',
      mapImage: '/images/demo/believe-dable/map.webp',
      cautions: [
        '상기 CG는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 날 수 있습니다.',
        '건축물의 외관 및 색채계획, 부대시설, 창호계획, 조경계획 등의 기타 시설은 추후 변경될 수 있습니다.',
        '단지를 제외한 기타 배경(산, 외부식재등)은 소비자의 이해를 돕기 위한 참고 이미지를 활용하였으며 실제와 다를 수 있습니다.',
        '단지 내외부 옹벽, 조경석, 방음벽, 태양광설비 등의 계획(범위, 디자인, 위치, 높이)은 변경될 수 있습니다.',
        '현장여건 등에 따라 일부 변경될 수 있으므로 견본주택에 방문하시어 직접 확인하시기 바랍니다.',
      ],
    },

    customerBgImage: '/images/demo/believe-dable/customer-bg.webp',

    subPages: [
      // ── 사업안내 ──
      {
        pageId: 'life1',
        type: 'image',
        title: '브랜드소개',
        subVisualImage: '/images/demo/believe-dable/sub-visual.webp',
        images: [
          { src: '/images/demo/believe-dable/sub-brand.webp', alt: '브랜드소개', caption: '빌리브 디 에이블' },
        ],
      },
      {
        pageId: 'life2',
        type: 'overview',
        title: '사업개요',
        subVisualImage: '/images/demo/believe-dable/sub-visual.webp',
        images: [
          '/images/demo/believe-dable/sub-overview1.webp',
          '/images/demo/believe-dable/sub-overview2.webp',
        ],
        infoTable: [
          { label: '사업명', value: '신촌지역 마포4 도시 정비형 재개발구역 4-15지구 주상복합 신축공사' },
          { label: '대지위치', value: '서울시 마포구 노고산동 107-46번지 일대' },
          { label: '건축면적', value: '1,492.6㎡ (451.5평)' },
          { label: '지역지구', value: '일반상업지역, 도시환경정비구역, 지구단위계획구역' },
          { label: '용도', value: '도시형생활주택 / 업무시설(오피스텔) / 근린생활시설' },
          { label: '건축규모', value: '지하 6층 ~ 지상 23층(총 333세대) : 도시형생활주택 256세대(일반), 43세대(임대) / 오피스텔 34실' },
          { label: '연면적', value: '36,618.3㎡ (11,077.0평)' },
          { label: '건폐율 / 용적률', value: '5,936% / 1,005.7%' },
          { label: '주차대수', value: '총 228대(자주식 주차 186대 / 기계식주차 42대)' },
        ],
      },
      {
        pageId: 'life3',
        type: 'image',
        title: '입지환경',
        subVisualImage: '/images/demo/believe-dable/sub-visual.webp',
        images: [
          { src: '/images/demo/believe-dable/sub-location.webp', alt: '입지환경', caption: '빌리브 디 에이블' },
        ],
      },
      {
        pageId: 'life4',
        type: 'directions',
        title: '오시는길',
        subVisualImage: '/images/demo/believe-dable/sub-visual.webp',
        mapImage: '/images/demo/believe-dable/sub-directions.webp',
        modelHouseAddress: '서울 마포구 노고산동 107-46번지 일대',
        siteAddress: '서울 마포구 노고산동 107-46번지 일대',
      },
      // ── 단지안내 ──
      {
        pageId: 'premium1',
        type: 'image',
        title: '배치도',
        subVisualImage: '/images/demo/believe-dable/sub-visual.webp',
        images: [
          { src: '/images/demo/believe-dable/sub-complex-layout.webp', alt: '배치도', caption: '새로움에 살다. 빌리브' },
        ],
      },
      {
        pageId: 'premium2',
        type: 'image',
        title: '특화설계',
        subVisualImage: '/images/demo/believe-dable/sub-visual.webp',
        images: [
          { src: '/images/demo/believe-dable/sub-design.webp', alt: '특화설계', caption: '새로움에 살다. 빌리브' },
        ],
      },
      {
        pageId: 'premium3',
        type: 'image',
        title: '커뮤니티',
        subVisualImage: '/images/demo/believe-dable/sub-visual.webp',
        images: [
          { src: '/images/demo/believe-dable/sub-community.webp', alt: '커뮤니티', caption: '새로움에 살다. 빌리브' },
        ],
      },
      // ── 세대평면 ──
      {
        pageId: 'unit1',
        type: 'image',
        title: '오피스텔',
        subVisualImage: '/images/demo/believe-dable/sub-visual.webp',
        images: [
          { src: '/images/demo/believe-dable/sub-unit-officetel.webp', alt: '오피스텔', caption: '새로움에 살다. 빌리브' },
        ],
      },
      {
        pageId: 'unit2',
        type: 'image',
        title: '도시형생활주택',
        subVisualImage: '/images/demo/believe-dable/sub-visual.webp',
        images: [
          { src: '/images/demo/believe-dable/sub-unit-residence.webp', alt: '도시형생활주택', caption: '새로움에 살다. 빌리브' },
        ],
      },
      {
        pageId: 'unit3',
        type: 'image',
        title: '펜트하우스',
        subVisualImage: '/images/demo/believe-dable/sub-visual.webp',
        images: [
          { src: '/images/demo/believe-dable/sub-unit-penthouse.webp', alt: '펜트하우스', caption: '새로움에 살다. 빌리브' },
        ],
      },
      // ── 프리미엄 ──
      {
        pageId: 'premium4',
        type: 'image',
        title: '인테리어',
        subVisualImage: '/images/demo/believe-dable/sub-visual.webp',
        images: [
          { src: '/images/demo/believe-dable/sub-interior.webp', alt: '인테리어', caption: '새로움에 살다. 빌리브' },
        ],
      },
      {
        pageId: 'premium5',
        type: 'image',
        title: '컨시어지',
        subVisualImage: '/images/demo/believe-dable/sub-visual.webp',
        images: [
          { src: '/images/demo/believe-dable/sub-concierge.webp', alt: '컨시어지', caption: '새로움에 살다. 빌리브' },
        ],
      },
      {
        pageId: 'premium6',
        type: 'image',
        title: '프리미엄',
        subVisualImage: '/images/demo/believe-dable/sub-visual.webp',
        images: [
          { src: '/images/demo/believe-dable/sub-premium.jpg', alt: '프리미엄', caption: '새로움에 살다. 빌리브' },
        ],
      },
      // ── 관심고객등록 (reservation modal) ──
      {
        pageId: 'reservation',
        type: 'reservation',
        title: '관심고객등록',
        subVisualImage: '/images/demo/believe-dable/main-slide1.webp',
      },
    ],

    theme: {
      primary: '#1a365d',
      secondary: '#2c5282',
      footerText: '빌리브 디 에이블 분양 홍보관',
      footerInfo: {
        developer: '관리자',
        constructor: '빌리브디에이블',
        trustee: '빌리브디에이블',
      },
    },
  },
};

