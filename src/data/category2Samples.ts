import type { Category2TemplateData } from '../templates/category2Types';

export const category2Samples: Record<string, Category2TemplateData> = {
  'gunsan-vivaldi': {
    id: 'gunsan-vivaldi',
    projectName: '군산 한라비발디 더프라임',
    projectNameEn: 'HALLA VIVALDI THE PRIME',
    contactPhone: '1800-8314',

    navItems: [
      {
        label: '사업안내',
        children: [
          { label: '사업개요', pageId: 'life1' },
          { label: '브랜드소개', pageId: 'life2' },
          { label: '프리미엄', pageId: 'life3' },
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
        ],
      },
    ],

    mainSlides: [
      {
        image: '/images/demo/zenith/slide1.png',
        title: ['군산의 새로운 생활 중심!', '군산 한라비발디 더프라임'],
        subtitle: '지하 3층 ~ 지상 29층, 총 633세대의 프리미엄 주거단지',
      },
      {
        image: '/images/demo/zenith/slide3.png',
        title: ['특별한 프리미엄으로', '완성되는 새로운 라이프'],
        subtitle: '한라가 선사하는 품격 있는 주거공간',
      },
    ],

    mainSections: [
      {
        id: 'brand',
        title: '한라비발디, 믿을 수 있는 브랜드',
        subtitle: '한라그룹의 주거 브랜드 비발디가 군산에 새로운 랜드마크를 세웁니다. 품격 있는 설계와 시공으로 입주민의 삶의 질을 높입니다.',
        image: '/images/demo/zenith/slide2.png',
        linkTo: 'life2',
      },
      {
        id: 'location',
        title: '군산 중심의 완벽한 입지',
        subtitle: '교통, 교육, 생활 인프라가 모두 가까운 최적의 위치. 군산의 미래 가치를 함께 누리세요.',
        image: '/images/demo/dalseo/slide2.png',
        linkTo: 'life4',
      },
      {
        id: 'premium-preview',
        title: '단지 프리미엄 6가지',
        subtitle: '초품아 교육환경, 커뮤니티 특화, 스마트홈 시스템 등 6가지 프리미엄으로 차별화된 주거가치를 제공합니다.',
        image: '/images/demo/zenith/slide5.png',
        linkTo: 'life3',
      },
      {
        id: 'complex',
        title: '자연과 함께하는 단지설계',
        subtitle: '넓은 동간 거리와 풍부한 조경으로 쾌적한 주거환경을 완성합니다. 단지 내 산책로와 커뮤니티 공간을 만나보세요.',
        image: '/images/demo/luxia/slide3.png',
        linkTo: 'premium1',
      },
    ],

    subPages: [
      // ── 사업안내 ──
      {
        pageId: 'life1',
        type: 'overview',
        title: '사업개요',
        subVisualImage: '/images/demo/zenith/slide1.png',
        description: '군산 한라비발디 더프라임은 군산시 지곡동에 위치한 대단지 프리미엄 아파트입니다.',
        infoTable: [
          { label: '사업명', value: '군산 지곡동 공동주택 신축공사' },
          { label: '대지위치', value: '군산시 지곡동 126번지 외 21필지' },
          { label: '건축규모', value: '지하 3층 ~ 지상 29층' },
          { label: '세대수', value: '총 633세대' },
          { label: '연면적', value: '120,887.063㎡' },
          { label: '주차대수', value: '총 760대 (세대당 1.2대)' },
          { label: '입주예정', value: '2027년 3월 예정' },
          { label: '시행', value: '(유)나눔디앤씨' },
          { label: '시공', value: 'HL디앤아이한라' },
          { label: '신탁', value: '코리아신탁' },
        ],
        mainImage: '/images/demo/zenith/slide2.png',
      },
      {
        pageId: 'life2',
        type: 'image',
        title: '브랜드소개',
        subVisualImage: '/images/demo/zenith/slide3.png',
        description: '한라비발디는 한라그룹의 주거 브랜드로, "사계절 아름다운 생활"이라는 의미를 담고 있습니다. 최고의 품질과 디자인으로 입주민에게 특별한 가치를 제공합니다.',
        images: [
          { src: '/images/demo/zenith/slide4.png', alt: '비발디 브랜드', caption: '한라비발디 브랜드 아이덴티티' },
          { src: '/images/demo/zenith/slide5.png', alt: '시공실적', caption: '전국 10만 세대 이상의 시공 실적' },
        ],
      },
      {
        pageId: 'life3',
        type: 'image',
        title: '프리미엄',
        subVisualImage: '/images/demo/zenith/slide5.png',
        description: '군산 한라비발디 더프라임만의 6가지 프리미엄을 확인하세요.',
        images: [
          { src: '/images/demo/zenith/slide6.png', alt: '프리미엄1', caption: '01. 초품아 교육환경 - 단지 내 초등학교 배정' },
          { src: '/images/demo/zenith/slide7.png', alt: '프리미엄2', caption: '02. 더블역세권 - GTX 예정 교통 프리미엄' },
          { src: '/images/demo/zenith/slide8.png', alt: '프리미엄3', caption: '03. 대단지 프리미엄 - 633세대 랜드마크' },
          { src: '/images/demo/luxia/slide3.png', alt: '프리미엄4', caption: '04. 전세대 남향 배치 - 쾌적한 채광' },
          { src: '/images/demo/luxia/slide5.png', alt: '프리미엄5', caption: '05. 커뮤니티 특화 - 피트니스, 카페라운지' },
          { src: '/images/demo/luxia/slide6.png', alt: '프리미엄6', caption: '06. 스마트홈 시스템 - IoT 기반 생활편의' },
        ],
      },
      {
        pageId: 'life4',
        type: 'location',
        title: '입지환경',
        subVisualImage: '/images/demo/dalseo/slide2.png',
        mainImage: '/images/demo/dalseo/slide3.png',
        description: '교통, 교육, 생활, 자연환경이 모두 가까운 군산 최고의 입지',
        poiGroups: [
          {
            category: '교통',
            icon: 'traffic',
            items: [
              '군산역 차량 10분',
              '군산IC 차량 5분',
              '서해안고속도로 인접',
              '새만금 연결도로 이용 편리',
              '군산시내버스 정류장 도보 3분',
            ],
          },
          {
            category: '교육',
            icon: 'edu',
            items: [
              '지곡초등학교 도보 5분',
              '군산중학교 인접',
              '군산고등학교 차량 5분',
              '군산대학교 인근',
              '학원가 밀집지역',
            ],
          },
          {
            category: '생활편의',
            icon: 'shopping',
            items: [
              'E마트 차량 5분',
              '롯데마트 차량 7분',
              '군산시청 차량 10분',
              '군산의료원 인접',
              '수송공원, 은파유원지',
            ],
          },
          {
            category: '자연환경',
            icon: 'nature',
            items: [
              '은파유원지 차량 10분',
              '월명공원 인접',
              '금강 수변공원',
              '새만금 방조제',
              '군산 근대문화거리',
            ],
          },
        ],
      },
      {
        pageId: 'life5',
        type: 'directions',
        title: '오시는길',
        subVisualImage: '/images/demo/dalseo/slide1.png',
        mapImage: '/images/demo/dalseo/slide3.png',
        modelHouseAddress: '전라북도 군산시 지곡동 일원 (견본주택)',
        siteAddress: '전라북도 군산시 지곡동 126번지 외 21필지',
      },

      // ── 단지안내 ──
      {
        pageId: 'premium1',
        type: 'image',
        title: '단지설계',
        subVisualImage: '/images/demo/luxia/slide1.png',
        description: '넓은 동간 거리와 남향 위주 배치로 채광과 조망을 극대화한 단지설계',
        images: [
          { src: '/images/demo/luxia/slide3.png', alt: '단지배치도', caption: '단지 전체 배치도' },
          { src: '/images/demo/luxia/slide4.png', alt: '조감도', caption: '단지 조감도' },
        ],
      },
      {
        pageId: 'premium2',
        type: 'image',
        title: '동호수배치도',
        subVisualImage: '/images/demo/luxia/slide1.png',
        images: [
          { src: '/images/demo/luxia/slide5.png', alt: '동호수배치도', caption: '동호수 배치도' },
        ],
      },
      {
        pageId: 'premium3',
        type: 'image',
        title: '조경',
        subVisualImage: '/images/demo/luxia/slide6.png',
        description: '사계절 아름다운 단지 조경과 다양한 테마 정원으로 자연 속 힐링 라이프를 즐기세요.',
        images: [
          { src: '/images/demo/luxia/slide6.png', alt: '중앙정원', caption: '중앙 정원' },
          { src: '/images/demo/luxia/slide7.png', alt: '산책로', caption: '산책로 및 휴식공간' },
        ],
      },
      {
        pageId: 'premium4',
        type: 'image',
        title: '커뮤니티',
        subVisualImage: '/images/demo/zenith/slide5.png',
        description: '피트니스센터, 골프연습장, 독서실, GX룸, 키즈룸 등 입주민을 위한 프리미엄 커뮤니티 시설',
        images: [
          { src: '/images/demo/zenith/slide5.png', alt: '피트니스', caption: '피트니스센터' },
          { src: '/images/demo/zenith/slide6.png', alt: '골프연습장', caption: '골프연습장' },
          { src: '/images/demo/zenith/slide7.png', alt: '키즈룸', caption: '키즈룸' },
        ],
      },
      {
        pageId: 'premium5',
        type: 'image',
        title: '시스템',
        subVisualImage: '/images/demo/ssy/slide1.png',
        description: '최첨단 IoT 기반 스마트홈 시스템과 첨단 보안 시스템으로 편리하고 안전한 생활',
        images: [
          { src: '/images/demo/ssy/slide1.png', alt: '스마트홈', caption: '스마트홈 시스템' },
          { src: '/images/demo/ssy/slide3.png', alt: '보안시스템', caption: '첨단 보안 시스템' },
        ],
      },

      // ── 세대안내 ──
      {
        pageId: 'unit1',
        type: 'unit',
        title: '84A㎡',
        subVisualImage: '/images/demo/ssy/slide1.png',
        unitName: '84A타입',
        area: '전용면적 84.99㎡ / 공급면적 114.88㎡',
        floorPlanImage: '/images/demo/ssy/slide3.png',
        roomInfo: [
          { label: '전용면적', value: '84.99㎡' },
          { label: '공급면적', value: '114.88㎡' },
          { label: '방/욕실', value: '3Room / 2Bath' },
          { label: '현관구조', value: '복도식' },
        ],
        features: [
          '4Bay 판상형 구조로 채광 극대화',
          '넓은 거실과 개방형 주방',
          '팬트리 및 드레스룸 기본 제공',
          '알파룸 활용 가능한 다목적 공간',
        ],
      },
      {
        pageId: 'unit2',
        type: 'unit',
        title: '84B㎡',
        subVisualImage: '/images/demo/ssy/slide1.png',
        unitName: '84B타입',
        area: '전용면적 84.97㎡ / 공급면적 114.56㎡',
        floorPlanImage: '/images/demo/ssy/slide5.png',
        roomInfo: [
          { label: '전용면적', value: '84.97㎡' },
          { label: '공급면적', value: '114.56㎡' },
          { label: '방/욕실', value: '3Room / 2Bath' },
          { label: '현관구조', value: '복도식' },
        ],
        features: [
          '3Bay 타워형 구조',
          '독립적인 주방 동선',
          '넓은 안방 드레스룸',
          '효율적인 공간 배치',
        ],
      },
      {
        pageId: 'unit3',
        type: 'unit',
        title: '111㎡',
        subVisualImage: '/images/demo/ssy/slide1.png',
        unitName: '111타입',
        area: '전용면적 111.44㎡ / 공급면적 148.32㎡',
        floorPlanImage: '/images/demo/dalseo/slide5.png',
        roomInfo: [
          { label: '전용면적', value: '111.44㎡' },
          { label: '공급면적', value: '148.32㎡' },
          { label: '방/욕실', value: '4Room / 2Bath' },
          { label: '현관구조', value: '복도식' },
        ],
        features: [
          '4Bay 대형 판상형 구조',
          '넓은 거실 및 대형 발코니',
          '안방 파우더룸 + 드레스룸',
          '독립된 가족실 공간',
        ],
      },
      {
        pageId: 'unit4',
        type: 'unit',
        title: '115㎡',
        subVisualImage: '/images/demo/ssy/slide1.png',
        unitName: '115타입',
        area: '전용면적 115.87㎡ / 공급면적 153.21㎡',
        floorPlanImage: '/images/demo/dalseo/slide6.png',
        roomInfo: [
          { label: '전용면적', value: '115.87㎡' },
          { label: '공급면적', value: '153.21㎡' },
          { label: '방/욕실', value: '4Room / 2Bath' },
          { label: '현관구조', value: '복도식' },
        ],
        features: [
          '최대형 프리미엄 평면',
          '양면 발코니 확장 가능',
          '대형 팬트리 + 가사실',
          '프리미엄 마스터 배스룸',
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
};

