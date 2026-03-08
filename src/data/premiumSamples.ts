import type { PremiumTemplateData } from '../templates/premiumTypes';

const IMG = '/images/demo/premium';
const IMG2 = '/images/demo/freshhouse';
const IMG_WH = '/images/demo/woobangiushell';
const IMG_PM = '/images/demo/premium';
const IMG_PV = '/images/demo/parkview';
const IMG_PV_BUSINESS = '/images/demo/parkview/business';
const IMG_PV_COMPLEX = '/images/demo/parkview/complex';
const IMG_PV_UNIT = '/images/demo/parkview/unit';
const IMG_PV_SCHEDULE = '/images/demo/parkview/schedule';
const IMG_PV_SUBSCRIPTION = '/images/demo/parkview/subscription';
const IMG_PV_PROMOTION = '/images/demo/parkview/promotion';
const IMG_AU = '/images/demo/aurum';
const IMG_FOREST = '/images/demo/forest';
const IMG_FOREST_BUILD = '/images/demo/forest/build';
const IMG_FOREST_UNIT = '/images/demo/forest/unit';
const IMG_FOREST_INFO = '/images/demo/forest/info';
const IMG_FOREST_VISIT = '/images/demo/forest/visit';

export const premiumSamples: Record<string, PremiumTemplateData> = {
  'premium-priel': {
    id: 'premium-priel',
    projectName: '프리미엘',
    projectNameEn: 'PRIMIEL',
    brandLine: '완전히 새로워질 프리미엄 라이프',
    contactPhone: '000-0000-0000',

    navItems: [
      {
        label: '사업안내',
        href: '#overview',
        children: [
          { label: '사업개요', href: '#overview' },
          { label: '입지환경', href: '#premium' },
          { label: '오시는길', href: '#map' },
        ],
      },
      {
        label: '단지안내',
        href: '#community',
        children: [
          { label: '커뮤니티', href: '#community' },
          { label: '프리미엄', href: '#premium' },
          { label: '라이프스타일', href: '#life' },
        ],
      },
      {
        label: '세대안내',
        href: '#units',
        children: [
          { label: '59타입', href: '#units' },
          { label: '84타입', href: '#units' },
        ],
      },
      { label: '언론보도', href: '#news' },
      { label: '관심고객등록', href: '#registration' },
    ],

    hero: {
      slides: [
        {
          image: `${IMG}/main-cg.webp`,
          title: ['완전히 새로워질', '프리미엄 라이프'],
          subtitle: '프리미엘이 선사하는 새로운 주거의 기준',
        },
        {
          image: `${IMG}/life-city.webp`,
          title: ['도심 속', '특별한 일상'],
          subtitle: '편리한 교통과 풍부한 생활 인프라',
        },
        {
          image: `${IMG}/premium-nature.webp`,
          title: ['자연과 함께하는', '프리미엄 주거'],
          subtitle: '쾌적한 자연환경과 함께하는 매일',
        },
      ],
    },

    overview: {
      title: '새로운 프리미엄의 탄생',
      subtitle: '프리미엘의 사업개요를 확인하세요.',
      image: `${IMG}/main-cg.webp`,
      items: [
        { label: '위치', value: '경기도 화성시 기배로30번길' },
        { label: '규모', value: '지하 2층 ~ 지상 29층' },
        { label: '세대수', value: '총 1,157세대' },
        { label: '입주예정', value: '2027년 12월 예정' },
        { label: '타입', value: '59㎡ / 84㎡' },
        { label: '시행사', value: '(주)프리미엘개발' },
      ],
    },

    community: {
      title: '프리미엄 커뮤니티',
      subtitle: '입주민을 위한 특별한 커뮤니티 시설',
      items: [
        {
          image: `${IMG}/fitness.jpg`,
          title: '피트니스센터',
          description: '최신 운동기구를 갖춘 프리미엄 피트니스센터. 전문 트레이너 상주로 체계적인 건강 관리가 가능합니다.',
        },
        {
          image: `${IMG}/premium-running.webp`,
          title: '조깅트랙 & 산책로',
          description: '단지 내 조성되는 순환형 조깅트랙과 산책로. 사계절 쾌적한 야외 운동을 즐길 수 있습니다.',
        },
        {
          image: `${IMG}/premium-cafe.webp`,
          title: '카페라운지',
          description: '입주민 전용 카페라운지. 편안한 분위기에서 커피 한잔의 여유를 즐기세요.',
        },
        {
          image: `${IMG}/life-school.webp`,
          title: '키즈카페 & 놀이터',
          description: '아이들의 창의력을 키워주는 실내 키즈카페와 테마 놀이터가 단지 내에 조성됩니다.',
        },
        {
          image: `${IMG}/premium-nature.webp`,
          title: '중앙광장 & 조경',
          description: '대규모 중앙광장과 특화 조경으로 자연 속 힐링 공간을 제공합니다.',
        },
        {
          image: `${IMG}/life-lifestyle.webp`,
          title: 'GX룸 & 독서실',
          description: '다양한 그룹 운동 프로그램과 조용한 독서 공간으로 건강한 라이프스타일을 지원합니다.',
        },
      ],
    },

    premium: {
      title: '프리미엘만의 프리미엄',
      subtitle: '차별화된 가치를 확인하세요.',
      features: [
        {
          image: `${IMG}/premium-traffic.webp`,
          number: '01',
          title: '더블 역세권',
          description: 'GTX-A 동탄역과 1호선 병점역을 동시에 이용할 수 있는 더블 역세권 입지. 서울 강남까지 30분대, 수원역까지 10분대로 빠르고 편리한 출퇴근이 가능합니다.',
        },
        {
          image: `${IMG}/life-school.webp`,
          number: '02',
          title: '초품아 교육환경',
          description: '단지 바로 앞 초등학교 배정으로 안전한 도보 통학이 가능합니다. 반경 1km 내 5개 학교와 학원가가 밀집되어 있어 최적의 교육환경을 제공합니다.',
        },
        {
          image: `${IMG}/premium-nature.webp`,
          number: '03',
          title: '자연과 함께하는 생활',
          description: '동탄 센트럴파크 도보권, 광교산 등산로 인접. 도심 속에서도 풍요로운 자연환경을 누릴 수 있는 쾌적한 주거 공간입니다.',
        },
        {
          image: `${IMG}/premium-cafe.webp`,
          number: '04',
          title: '풍부한 생활 인프라',
          description: '롯데마트, 홈플러스 차량 5분 거리. 화성종합경기타운, 동탄 상업시설 등 풍부한 생활 인프라를 편리하게 이용할 수 있습니다.',
        },
      ],
    },

    life: {
      title: '라이프스타일',
      subtitle: '프리미엘이 제안하는 새로운 일상',
      cards: [
        { image: `${IMG}/life-school.webp`, title: '안심 교육', subtitle: '도보 통학이 가능한 초품아 단지' },
        { image: `${IMG}/life-city.webp`, title: '도심 생활', subtitle: '풍부한 상업·문화 인프라' },
        { image: `${IMG}/life-lifestyle.webp`, title: '프리미엄 라이프', subtitle: '특화 커뮤니티 시설 완비' },
      ],
    },

    units: {
      title: '세대안내',
      subtitle: '합리적인 평면 설계를 확인하세요.',
      types: [
        {
          label: '59A타입',
          image: `${IMG}/popup1.webp`,
          area: '59.98㎡',
          rooms: '방 3 / 욕실 2',
          features: [
            '전 세대 남향 배치로 탁월한 채광',
            '알파룸 설계로 다목적 공간 활용',
            '넓은 거실과 주방 공간',
            '드레스룸 및 팬트리 설계',
            '발코니 확장 시 개방감 극대화',
          ],
        },
        {
          label: '84A타입',
          image: `${IMG}/popup2.webp`,
          area: '84.97㎡',
          rooms: '방 4 / 욕실 2',
          features: [
            '4베이 판상형 구조의 넓은 공간감',
            '독립형 주방으로 생활 편의 극대화',
            '마스터 침실 드레스룸',
            '다용도실 및 팬트리 제공',
            '세대 창고 기본 제공',
          ],
        },
      ],
    },

    news: {
      title: '언론보도',
      items: [
        {
          image: `${IMG}/news1.webp`,
          source: '매일경제',
          title: '프리미엘, 분양 시장 새로운 프리미엄 기준 제시',
          date: '2025.06.15',
        },
        {
          image: `${IMG}/news2.webp`,
          source: '한국경제',
          title: 'GTX-A 수혜 단지, 교통 프리미엄 주목',
          date: '2025.06.10',
        },
        {
          image: `${IMG}/news3.webp`,
          source: '조선일보',
          title: '1,157세대 대단지 프리미엄 커뮤니티 화제',
          date: '2025.06.05',
        },
        {
          image: `${IMG}/news4.webp`,
          source: '중앙일보',
          title: '초품아 단지, 학부모 관심고객 등록 열기',
          date: '2025.05.28',
        },
      ],
    },

    map: {
      title: '오시는 길',
      subtitle: '프리미엘 모델하우스 & 현장 위치 안내',
      modelHouseImage: `${IMG}/map1.webp`,
      siteImage: `${IMG}/map2.webp`,
      modelHouseAddress: '경기도 화성시 기배로30번길 5-9',
      siteAddress: '경기도 화성시 기배로30번길 5-9 일원',
    },

    registration: {
      title: '관심고객 등록',
      subtitle: '아래 정보를 입력하시면 분양 정보를 가장 먼저 안내해 드립니다.',
    },

    theme: {
      primary: '#0a0a0a',
      accent: '#c8a97e',
      baseBg: '#0a0a0a',
      altBg: '#111111',
      cardBg: 'rgba(255,255,255,0.05)',
      borderColor: 'rgba(255,255,255,0.1)',
      headerBg: 'rgba(0,0,0,0.6)',
      headerScrollBg: 'rgba(10,10,10,0.97)',
      footerText: '프리미엘 분양 홍보관',
      footerInfo: {
        developer: '(주)프리미엘개발',
        constructor: '(주)프리미엘건설',
        bizNumber: '000-00-00000',
      },
      disclaimer: '본 홍보물의 CG, 이미지 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 차이가 있을 수 있습니다. 각종 개발계획은 관계기관의 사정에 따라 변경 또는 취소될 수 있습니다.',
    },
  },

  'premium-oceancity': {
    id: 'premium-oceancity',
    projectName: '오션시티',
    projectNameEn: 'OCEAN CITY',
    brandLine: '바다가 선사하는 프리미엄 라이프',
    contactPhone: '000-0000-0000',

    navItems: [
      {
        label: '사업안내',
        href: '#overview',
        children: [
          { label: '사업개요', href: '#overview' },
          { label: '입지환경', href: '#premium' },
          { label: '오시는길', href: '#map' },
        ],
      },
      {
        label: '단지안내',
        href: '#community',
        children: [
          { label: '커뮤니티', href: '#community' },
          { label: '프리미엄', href: '#premium' },
          { label: '라이프스타일', href: '#life' },
        ],
      },
      {
        label: '세대안내',
        href: '#units',
        children: [
          { label: '74타입', href: '#units' },
          { label: '84타입', href: '#units' },
        ],
      },
      { label: '언론보도', href: '#news' },
      { label: '관심고객등록', href: '#registration' },
    ],

    hero: {
      slides: [
        {
          image: `${IMG}/premium-nature.webp`,
          title: ['바다를 품은', '프리미엄 레지던스'],
          subtitle: '오션시티가 완성하는 하이엔드 오션라이프',
        },
        {
          image: `${IMG}/life-city.webp`,
          title: ['도심과 바다', '두 가지 프리미엄'],
          subtitle: '해운대 생활권의 완벽한 인프라',
        },
        {
          image: `${IMG}/main-cg.webp`,
          title: ['전 세대', '오션뷰 설계'],
          subtitle: '매일 아침 바다가 펼쳐지는 특별한 일상',
        },
      ],
    },

    overview: {
      title: '해운대의 새로운 랜드마크',
      subtitle: '오션시티 사업개요를 확인하세요.',
      image: `${IMG}/main-cg.webp`,
      items: [
        { label: '위치', value: '부산시 해운대구 우동 일원' },
        { label: '규모', value: '지하 3층 ~ 지상 49층, 2개동' },
        { label: '세대수', value: '총 892세대' },
        { label: '입주예정', value: '2028년 6월 예정' },
        { label: '타입', value: '74㎡ / 84㎡' },
        { label: '시행사', value: '(주)오션시티개발' },
      ],
    },

    community: {
      title: '하이엔드 커뮤니티',
      subtitle: '바다와 함께하는 특별한 커뮤니티 시설',
      items: [
        {
          image: `${IMG}/premium-nature.webp`,
          title: '인피니티풀',
          description: '바다를 바라보며 즐기는 루프탑 인피니티풀. 사계절 이용 가능한 온수풀과 자쿠지가 함께 조성됩니다.',
        },
        {
          image: `${IMG}/fitness.jpg`,
          title: '오션뷰 피트니스',
          description: '탁 트인 오션뷰를 감상하며 운동할 수 있는 프리미엄 피트니스센터. 최신 기구와 개인 PT룸을 제공합니다.',
        },
        {
          image: `${IMG}/premium-cafe.webp`,
          title: '스카이라운지',
          description: '최상층에 위치한 프라이빗 스카이라운지. 바다 전망과 함께 특별한 모임과 파티를 즐길 수 있습니다.',
        },
        {
          image: `${IMG}/premium-running.webp`,
          title: '해안 산책로',
          description: '단지에서 바로 연결되는 해안 산책로와 조깅코스. 파도 소리를 들으며 여유로운 산책을 즐기세요.',
        },
        {
          image: `${IMG}/life-lifestyle.webp`,
          title: '골프연습장',
          description: '스크린골프와 실내 퍼팅연습장이 단지 내에 조성되어 편리하게 골프를 즐길 수 있습니다.',
        },
        {
          image: `${IMG}/life-school.webp`,
          title: '키즈아카데미',
          description: '해양 체험 교실, 영어 도서관 등 아이들의 감성과 창의력을 키워주는 특화 교육 시설입니다.',
        },
      ],
    },

    premium: {
      title: '오션시티만의 프리미엄',
      subtitle: '바다가 선물하는 차별화된 가치',
      features: [
        {
          image: `${IMG}/premium-nature.webp`,
          number: '01',
          title: '전 세대 오션뷰',
          description: '전 세대 남동향 배치로 거실과 침실에서 바다를 감상할 수 있습니다. 49층 초고층 설계로 탁 트인 해운대 파노라마 조망을 선사합니다.',
        },
        {
          image: `${IMG}/premium-traffic.webp`,
          number: '02',
          title: '해운대 생활권',
          description: '해운대 해수욕장 도보 5분, 센텀시티 차량 3분. 신세계백화점, 롯데백화점, BEXCO 등 해운대 핵심 인프라를 도보와 차량으로 편리하게 이용할 수 있습니다.',
        },
        {
          image: `${IMG}/premium-cafe.webp`,
          number: '03',
          title: '호텔급 커뮤니티',
          description: '인피니티풀, 스카이라운지, 오션뷰 피트니스 등 5성급 호텔 수준의 커뮤니티 시설. 일상이 리조트가 되는 프리미엄 라이프를 제공합니다.',
        },
        {
          image: `${IMG}/life-city.webp`,
          number: '04',
          title: '미래가치 상승',
          description: '해운대 관광리조트 특구, 부산 오시리아 테마파크 인접. 2030 부산엑스포 유치 등 부산의 미래 성장 동력을 통한 자산가치 상승이 기대됩니다.',
        },
      ],
    },

    life: {
      title: '오션 라이프',
      subtitle: '바다가 일상이 되는 특별한 생활',
      cards: [
        { image: `${IMG}/premium-nature.webp`, title: '오션뷰 리빙', subtitle: '매일 바다와 함께하는 아침' },
        { image: `${IMG}/life-city.webp`, title: '센텀 라이프', subtitle: '해운대 핵심 인프라 도보권' },
        { image: `${IMG}/life-lifestyle.webp`, title: '리조트 라이프', subtitle: '호텔급 커뮤니티 시설' },
      ],
    },

    units: {
      title: '세대안내',
      subtitle: '바다를 품은 특별한 평면 설계',
      types: [
        {
          label: '74타입',
          image: `${IMG}/popup3.webp`,
          area: '74.52㎡',
          rooms: '방 3 / 욕실 2',
          features: [
            '거실·안방에서 오션뷰 조망',
            '와이드 거실 설계로 개방감 극대화',
            '드레스룸 + 팬트리 수납 특화',
            '발코니 확장 시 바다 조망 테라스',
            '호텔식 간접조명 설계',
          ],
        },
        {
          label: '84타입',
          image: `${IMG}/popup4.webp`,
          area: '84.91㎡',
          rooms: '방 4 / 욕실 2',
          features: [
            '4베이 남동향 판상형 오션뷰',
            '거실 풀 개방형 슬라이딩 도어',
            '알파룸 + 서재 공간 설계',
            '마스터배스 호텔식 욕실',
            '세대 창고 및 대형 팬트리',
          ],
        },
      ],
    },

    news: {
      title: '언론보도',
      items: [
        {
          image: `${IMG}/news1.webp`,
          source: '부산일보',
          title: '오션시티, 해운대 초고층 랜드마크 분양 돌풍',
          date: '2025.07.20',
        },
        {
          image: `${IMG}/news2.webp`,
          source: '매일경제',
          title: '전 세대 오션뷰, 해운대 프리미엄 레지던스 주목',
          date: '2025.07.15',
        },
        {
          image: `${IMG}/news3.webp`,
          source: '한국경제',
          title: '해운대 인피니티풀 단지, 관심고객 1만명 돌파',
          date: '2025.07.10',
        },
        {
          image: `${IMG}/news4.webp`,
          source: '조선일보',
          title: '부산 해운대 초고층 분양 시장, 오션뷰가 대세',
          date: '2025.07.05',
        },
      ],
    },

    map: {
      title: '오시는 길',
      subtitle: '오션시티 모델하우스 & 현장 위치 안내',
      modelHouseImage: `${IMG}/map1.webp`,
      siteImage: `${IMG}/map2.webp`,
      modelHouseAddress: '부산시 해운대구 우동 1234-5',
      siteAddress: '부산시 해운대구 우동 1234-5 일원',
    },

    registration: {
      title: '관심고객 등록',
      subtitle: '아래 정보를 입력하시면 분양 정보를 가장 먼저 안내해 드립니다.',
    },

    theme: {
      primary: '#0a1628',
      accent: '#4a90d9',
      baseBg: '#0a1628',
      altBg: '#0f1f3a',
      cardBg: 'rgba(74,144,217,0.08)',
      borderColor: 'rgba(74,144,217,0.2)',
      headerBg: 'rgba(10,22,40,0.6)',
      headerScrollBg: 'rgba(10,22,40,0.97)',
      footerText: '오션시티 분양 홍보관',
      footerInfo: {
        developer: '(주)오션시티개발',
        constructor: '(주)오션시티건설',
        bizNumber: '000-00-00000',
      },
      disclaimer: '본 홍보물의 CG, 이미지 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 차이가 있을 수 있습니다. 각종 개발계획은 관계기관의 사정에 따라 변경 또는 취소될 수 있습니다.',
    },
  },

  'premium-freshhouse': {
    id: 'premium-freshhouse',
    projectName: '프레쉬하우스',
    projectNameEn: 'FRESH HOUSE',
    brandLine: '완전히 새로워질 프리미엄, 차별화된 품격과 가치',
    contactPhone: '0000-0000',
    logoWhite: `${IMG2}/logo-white.png`,
    logoColor: `${IMG2}/logo-color.png`,

    navItems: [
      {
        label: '사업안내',
        href: '#overview',
        children: [
          { label: '사업개요', pageId: 'life1' },
          { label: '입지환경', pageId: 'life2' },
          { label: '브랜드소개', pageId: 'life3' },
          { label: '오시는길', pageId: 'life4' },
        ],
      },
      {
        label: '단지안내',
        href: '#community',
        children: [
          { label: '커뮤니티', pageId: 'complex1' },
          { label: '프리미엄', pageId: 'complex2' },
          { label: '동호수배치도', pageId: 'complex4' },
          { label: '특화서비스', pageId: 'complex5' },
        ],
      },
      {
        label: '세대안내',
        href: '#units',
        children: [
          { label: '59타입', pageId: 'unit1' },
          { label: '84타입', pageId: 'unit2' },
        ],
      },
      {
        label: '홍보센터',
        href: '#news',
        children: [
          { label: '언론보도', pageId: 'news1' },
          { label: '공지사항', pageId: 'news2' },
        ],
      },
      { label: '관심고객등록', href: '#registration' },
    ],

    hero: {
      slides: [
        {
          image: `${IMG2}/hero1.webp`,
          title: ['완전히 새로워질', '프리미엄 라이프'],
          subtitle: '완벽한 자부심',
        },
        {
          image: `${IMG2}/hero2.webp`,
          title: ['갈수록 놀라워지는', '품격의 라이프'],
          subtitle: '두 번째 프리미엄 라이프',
        },
        {
          image: `${IMG2}/hero3.webp`,
          title: ['아주 특별한 선택', '살수록 특별해지는'],
          subtitle: '살수록 특별해지는 선택',
        },
      ],
    },

    overview: {
      title: '사업개요',
      subtitle: '화성의 랜드마크가 될 1,157세대 메가시티 탄생!',
      image: `${IMG2}/overview.webp`,
      items: [
        { label: '대지위치', value: '서울시 마포구 아현동 617-1 일원' },
        { label: '건축규모', value: '지하 5층, 지상 23~24층, 2개동' },
        { label: '세대수', value: '아파트(34㎡~46㎡) 198세대, 오피스텔(42㎡, 59㎡) 209실 / 총 407세대' },
        { label: '연면적/대지면적', value: '4,619.480㎡' },
        { label: '연면적', value: '50,429.0726㎡' },
      ],
    },

    community: {
      title: '커뮤니티',
      subtitle: '경험하지 못했던 차별화된 커뮤니티',
      items: [
        {
          image: `${IMG2}/community.jpg`,
          title: '휘트니스센터',
          description: '최신 운동기구와 쾌적한 환경에서 건강을 관리할 수 있는 전용 피트니스 공간',
        },
        {
          image: `${IMG2}/life1.webp`,
          title: '도보통학 안심단지',
          description: '단지 인근 초·중학교 도보 통학이 가능한 안심 교육 환경',
        },
        {
          image: `${IMG2}/life2.webp`,
          title: '도심 생활 인프라',
          description: '다양하고 편리한 교육·쇼핑·문화·의료 생활인프라와 쾌적한 녹지공간',
        },
        {
          image: `${IMG2}/life3.webp`,
          title: '프리미엄 라이프',
          description: '날씨와 상관없이 연습을 즐길 수 있는 럭셔리 공간',
        },
        {
          image: `${IMG2}/premium1.webp`,
          title: '원스톱 생활권',
          description: '완벽하게 갖춰진 중심 인프라를 원스톱으로 누리는 프리미엄 생활',
        },
        {
          image: `${IMG2}/premium2.webp`,
          title: '어린이도서관',
          description: '단지 내 조성되는 어린이 전용 도서관으로 독서 습관을 키워줍니다',
        },
      ],
    },

    premium: {
      title: '프리미엄',
      subtitle: '차별화된 품격의 가치를 확인하세요',
      features: [
        {
          image: `${IMG2}/luxury1.webp`,
          number: '01',
          title: 'NO.1 주거 브랜드',
          description: '대한민국을 대표하는 프리미엄 주거 브랜드. 법원 등 관공서 및 중심상권 인접 메인 인프라를 갖춘 최중심 생활',
        },
        {
          image: `${IMG2}/luxury2.webp`,
          number: '02',
          title: '초품아 안심 교육환경',
          description: '선호도가 높고 실용성이 뛰어난 62㎡, 84㎡ 평면으로 채광성을 극대화한 4Bay 혁신공간',
        },
        {
          image: `${IMG2}/luxury3.webp`,
          number: '03',
          title: '851세대 프리미엄 랜드마크',
          description: '채광과 통풍이 탁월한 남향 위주의 배치로 주거 가치 상승 및 웰빙 주거환경 조성',
        },
      ],
    },

    life: {
      title: '라이프',
      subtitle: '프레쉬하우스가 제안하는 새로운 일상',
      cards: [
        { image: `${IMG2}/life1.webp`, title: 'NO.1 주거 브랜드', subtitle: '대한민국을 대표하는 프리미엄 주거 브랜드' },
        { image: `${IMG2}/life2.webp`, title: '안심 교육환경', subtitle: '다양하고 편리한 교육·생활 인프라' },
        { image: `${IMG2}/life3.webp`, title: '프리미엄 랜드마크', subtitle: '날씨와 상관없이 즐길 수 있는 럭셔리 공간' },
      ],
    },

    units: {
      title: '세대안내',
      subtitle: '합리적인 평면 설계를 확인하세요',
      types: [
        {
          label: '59타입',
          image: `${IMG2}/unit1.webp`,
          area: '59.98㎡',
          rooms: '방 3 / 욕실 2',
          features: [
            '트리플 역세권 인근 지하철 1·4호선 및 동해선',
            '부산 전역을 누비는 트리플 역세권',
            '전 세대 남향 배치로 탁월한 채광',
            '알파룸 설계로 다목적 공간 활용',
          ],
        },
        {
          label: '84타입',
          image: `${IMG2}/unit2.webp`,
          area: '84.97㎡',
          rooms: '방 4 / 욕실 2',
          features: [
            '법원 등 관공서 및 중심상권 인접',
            '메인 인프라를 갖춘 최중심 생활권',
            '4베이 판상형 구조의 넓은 공간감',
            '독립형 주방으로 생활 편의 극대화',
          ],
        },
      ],
    },

    news: {
      title: '언론보도',
      items: [
        {
          image: `${IMG2}/news1.webp`,
          source: '김치',
          title: '전세대 4Bay, 가변형 벽체, 알파룸 라이프스타일을 고려한 효율적 공간설계',
          date: '2025.06.26',
        },
        {
          image: `${IMG2}/news2.webp`,
          source: 'premium 5',
          title: '그린 가든 - 내집 안에서 즐기는 도심 속 힐링 녹지공간',
          date: '2025.06.26',
        },
        {
          image: `${IMG2}/news3.webp`,
          source: '아파트 일보',
          title: '프라이빗 플레이포레 - 놀이공간과 녹지가 어우러진 입주민 프라이빗 공간',
          date: '2025.06.26',
        },
        {
          image: `${IMG2}/news4.webp`,
          source: '아파트 일보',
          title: '웰컴 프라자 - 넓은 진입공간이 주는 시원한 개방감과 품격',
          date: '2025.06.26',
        },
      ],
    },

    map: {
      title: '현장안내',
      subtitle: '새로운 랜드마크의 탄생, 화성우방아이유쉘',
      modelHouseImage: `${IMG2}/map1.webp`,
      siteImage: `${IMG2}/map2.webp`,
      modelHouseAddress: '경기 화성시 기배로30번길 5-9 (기안동)',
      siteAddress: '경기 화성시 기배로30번길 5-9 (기안동)',
    },

    registration: {
      title: '관심고객등록',
      subtitle: '관심고객으로 등록하시면 분양정보를 발빠르게 받아보실 수 있습니다.',
    },

    subPages: [
      {
        pageId: 'life1',
        type: 'overview',
        title: '사업개요',
        subtitle: '프레쉬하우스',
        subVisualImage: `${IMG2}/sub-bg.webp`,
        contentTitle: '화성의 랜드마크가 될 1,157세대 메가시티 탄생!',
        contentSubtitle: '주거ㆍ취미ㆍ휴식 등 단지에서 누릴수 있는 원스톱 라이프 단지',
        contentDesc: '여의도 면적에 버금가는 규모로 조성되는 계획인구 5만여명의 미니신도시급 새도시<br>화양지구의 미래가치를 선점하는 단지가 완성됩니다.',
        mainImage: `${IMG2}/overview.webp`,
        infoLabel: 'overview',
        items: [
          { label: '대지위치', value: '서울시 마포구 아현동 617-1 일원' },
          { label: '건축규모', value: '지하 5층, 지상 23~24층, 2개동' },
          { label: '세대수', value: '아파트(34㎡~46㎡) 198세대, 오피스텔(42㎡, 59㎡) 209실 / 총 407세대' },
          { label: '연면적/대지면적', value: '4,619.480㎡' },
          { label: '연면적', value: '50,429.0726㎡' },
        ],
        caution: [
          '상기 CG는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 날 수 있습니다.',
          '건축물의 외관 및 색채계획, 부대시설, 창호계획, 조경계획 등의 기타 시설은 추후 변경될 수 있습니다.',
          '단지를 제외한 기타 배경(산, 외부식재등)은 소비자의 이해를 돕기 위한 참고 이미지를 활용하였으며 실제와 다를 수 있습니다.',
          '단지 내외부 옹벽, 조경석, 방음벽, 태양광설비 등의 계획(범위, 디자인, 위치, 높이)은 변경될 수 있습니다.',
          '현장여건 등에 따라 일부 변경될 수 있으므로 견본주택에 방문하시어 직접 확인하시기 바랍니다.',
        ],
      },
      {
        pageId: 'life2',
        type: 'location',
        title: '입지환경',
        subtitle: '프레쉬하우스',
        subVisualImage: `${IMG2}/sub-bg.webp`,
        contentTitle: '화성 중심 입지의 빛나는 미래비전',
        contentSubtitle: '1,157세대 대단지 프리미엄',
        contentDesc: '여의도 면적에 버금가는 규모로 조성되는 계획인구 5만여명의 미니신도시급 새도시 화양지구의 미래가치를 선점하는 단지가 완성됩니다.',
        mainImage: `${IMG2}/sub-location-main.webp`,
        poiGroups: [
          {
            category: 'location 01',
            title: '쾌속교통 인프라',
            items: ['도보 2분 광안역세권', '수영로, 황령터널, 대남교차로'],
            image: `${IMG2}/sub-location-traffic.webp`,
          },
          {
            category: 'location 02',
            title: '생활인프라',
            items: ['대남교차로 가까운 광안리 바다', '단지 뒤로 펼쳐진 황령산/금련산 산책길'],
            image: `${IMG2}/sub-location-cafe.webp`,
          },
          {
            category: 'location 03',
            title: '교육인프라',
            items: ['기안초, 기안중, 홍익디자인고, 수원대 등 우수한 교육환경', '도보거리 호암초, 동아중, 수영중 및 인접한 남천동 학원가'],
            image: `${IMG2}/sub-location-edu.webp`,
          },
        ],
        caution: [
          '본 홍보물에 사용된 CG 및 일러스트는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '상기 개발계획도, 지역도 상에 기재된 교통, 학교, 공원, 상업시설 등 각종 개발 계획은 사업 진행과정 및 관계기관의 사정에 따라 변동 또는 취소될 수 있으며 이는 당사와 무관합니다.',
          '단지 인근의 각종 개발계획 및 도로 등의 기반시설은 인·허가나 정부 시책에 따라 변경 및 취소 가능한 바, 해당 인·허가청 및 현장에서 확인하시기 바라며 시행사 및 시공사와 무관합니다.',
        ],
      },
      {
        pageId: 'life3',
        type: 'brand',
        title: '브랜드소개',
        subtitle: '프레쉬하우스',
        subVisualImage: `${IMG2}/sub-bg.webp`,
        image: `${IMG2}/sub-brand.webp`,
      },
      {
        pageId: 'life4',
        type: 'directions',
        title: '오시는길',
        subtitle: '새로운 랜드마크의 탄생, 화성우방아이유쉘',
        subVisualImage: `${IMG2}/sub-bg.webp`,
        descTitle: '새롭게 변화하는 우리의 내일을 프리미엄으로 더욱더 눈부시게!',
        addresses: [
          { label: '견본주택', address: '경기 화성시 기배로30번길 5-9 (기안동)' },
          { label: '현장', address: '경기 화성시 기배로30번길 5-9 (기안동)' },
        ],
        modelHouseImage: `${IMG2}/map1.webp`,
        siteImage: `${IMG2}/map2.webp`,
        modelHouseAddress: '경기 화성시 기배로30번길 5-9 (기안동)',
        siteAddress: '경기 화성시 기배로30번길 5-9 (기안동)',
        caution: [
          '상기 CG는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 날 수 있습니다.',
          '건축물의 외관 및 색채계획, 부대시설, 창호계획, 조경계획 등의 기타 시설은 추후 변경될 수 있습니다.',
          '단지를 제외한 기타 배경(산, 외부식재등)은 소비자의 이해를 돕기 위한 참고 이미지를 활용하였으며 실제와 다를 수 있습니다.',
          '현장여건 등에 따라 일부 변경될 수 있으므로 견본주택에 방문하시어 직접 확인하시기 바랍니다.',
        ],
      },
      // 단지안내 서브페이지
      {
        pageId: 'complex1',
        type: 'complexCommunity',
        title: '커뮤니티',
        subtitle: '풀페이지',
        subVisualImage: `${IMG2}/sub-bg.webp`,
        caption: '더 특별한 가치를 만드는',
        mainImage: `${IMG_WH}/community.webp`,
        caution: [
          '본 홍보물에 사용된 CG 및 일러스트는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '상기 개발계획도, 지역도 상에 기재된 교통, 학교, 공원, 상업시설 등 각종 개발 계획은 사업 진행과정 및 관계기관의 사정에 따라 변동 또는 취소될 수 있으며 이는 당사와 무관합니다.',
          '단지 인근의 각종 개발계획 및 도로 등의 기반시설은 인·허가나 정부 시책에 따라 변경 및 취소 가능한 바, 해당 인·허가청 및 현장에서 확인하시기 바라며 시행사 및 시공사와 무관합니다.',
        ],
      },
      {
        pageId: 'complex2',
        type: 'complexPremium',
        title: '프리미엄',
        subtitle: '풀페이지',
        subVisualImage: `${IMG2}/sub-bg.webp`,
        caption: '프리미엄 라이프',
        premiumSubtitle: '풀페이지',
        premiumDesc: '쾌적한 자연과 우수한 교육환경, 수준 높은 문화와 더 큰 미래가치까지!',
        items: [
          { number: '01', title: '어린이특화 커뮤니티', description: '원어민 선생님과 함께하는 어린이 전용 도서관과 단지내 전용 블럭방으로 아이들만의 특별한 커뮤니티 시설이 들어섭니다.', image: `${IMG_WH}/premium-01.webp` },
          { number: '02', title: '어린이전용 물놀이터', description: '화성에서 처음 누리는 단지내 물놀이터로 아이들의 창의력이 높아집니다', image: `${IMG_WH}/premium-02.webp` },
          { number: '03', title: '전세대 미세먼지 제거기', description: '외출후 옷에 묻은 황사, 미세먼지를 제거할 수 있도록 전세대 현관에 에어샤워기와 전용브러시를 설치해 미세먼지 걱정을 덜어드립니다.', image: `${IMG_WH}/premium-03.webp` },
          { number: '04', title: '지상에 차가없는 친환경 아파트', description: '아이들의 안전과 쾌적한 단지내 주거환경을 위해 모든 주차공간을 지하에 설계하는 지상에 차가없는 친환경 아파트입니다.', image: `${IMG_WH}/premium-04.webp` },
          { number: '05', title: '삶의 여유와 가치를 더하는 커뮤니티 시설', description: '피트니스, 실내골프연습장, 스크린골프룸, 라운지카페(작은도서관), 다함께돌봄센터, 실내놀이터 등 입주민들을 위한 다채로운 편의시설이 준비되어 있습니다.', image: `${IMG_PM}/premium-running.webp` },
          { number: '06', title: '프리미엄 랜드마크', description: '대단지 규모의 프리미엄 랜드마크로 높아지는 미래가치', image: `${IMG_WH}/premium-06.webp` },
        ],
        caution: [
          '본 홍보물에 사용된 CG 및 일러스트는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '상기 개발계획도, 지역도 상에 기재된 교통, 학교, 공원, 상업시설 등 각종 개발 계획은 사업 진행과정 및 관계기관의 사정에 따라 변동 또는 취소될 수 있으며 이는 당사와 무관합니다.',
          '단지 인근의 각종 개발계획 및 도로 등의 기반시설은 인·허가나 정부 시책에 따라 변경 및 취소 가능한 바, 해당 인·허가청 및 현장에서 확인하시기 바라며 시행사 및 시공사와 무관합니다.',
        ],
      },
      {
        pageId: 'complex4',
        type: 'complexFloorplan',
        title: '동호수배치도',
        subtitle: '풀페이지',
        subVisualImage: `${IMG2}/sub-bg.webp`,
        mainImage: `${IMG_WH}/complex-floorplan.webp`,
      },
      {
        pageId: 'complex5',
        type: 'complexPrime',
        title: '특화서비스',
        subtitle: '풀페이지',
        subVisualImage: `${IMG2}/sub-bg.webp`,
        premiumLabel: 'premium',
        premiumNumber: '8',
        items: [
          '화성 최초 어린이 전용 물놀이터',
          '단지 내 국공립 어린이집 2개소',
          '어린이 전용 커뮤니티 영어도서관 및 블럭방',
          '전세대 미세먼지 제거기 설치',
          '중도금 무이자, 부담적은 투자처',
          '신촌역, 서강대역 더블역세권 프리미엄',
          '풀옵션 & 발코니확장 무상',
          '선착순 한정 특별혜택!',
        ],
        images: [`${IMG_WH}/prime1.webp`, `${IMG_WH}/prime2.webp`, `${IMG_WH}/prime3.webp`, `${IMG_WH}/prime4.webp`],
      },
      // 세대안내 서브페이지
      {
        pageId: 'unit1',
        type: 'unit',
        title: '59타입',
        subtitle: '풀페이지',
        subVisualImage: `${IMG2}/sub-bg.webp`,
        variants: [
          {
            typeLabel: '59㎡A',
            count: '428세대',
            description: '우수한 개방감과 여유로운 공간구성, 주방 원스톱 세탁실 등을 갖춰 생활의 편리함을 극대화한 판상형 구조',
            areas: [
              { label: '주거전용면적', value: '59.9825㎡' },
              { label: '주거공용면적', value: '19.3520㎡' },
              { label: '공급면적', value: '79.2323㎡' },
              { label: '기타공용면적', value: '52.9825㎡' },
              { label: '계약면적', value: '131.8760㎡' },
            ],
            image: `${IMG2}/unit-59a.webp`,
          },
          {
            typeLabel: '59㎡B',
            count: '205세대',
            description: '우수한 개방감과 여유로운 공간구성, 주방 원스톱 세탁실 등을 갖춰 생활의 편리함을 극대화한 판상형 구조',
            areas: [
              { label: '주거전용면적', value: '59.9825㎡' },
              { label: '주거공용면적', value: '19.3520㎡' },
              { label: '공급면적', value: '79.2323㎡' },
              { label: '기타공용면적', value: '52.9825㎡' },
              { label: '계약면적', value: '131.8760㎡' },
            ],
            image: `${IMG2}/unit-59b.webp`,
          },
        ],
        caution: [
          '유니트 및 면적은 소비자의 이해를 돕기 위한 것으로 건축설계변경 및 그 이외의 사유로 변경될 수 있습니다.',
          '본 제작물에 사용된 아이소메트릭 및 평면도는 소비자의 이해를 돕기 위한 것으로 건축설계변경 또는 그 외의 사유로 인해 변경될 수 있습니다.',
          '일부 품목은 분양가 제외품목이오니 주택 전시관에서 반드시 확인하시기 바랍니다.',
          '입면 디자인을 위해 발코니 턱, 발코니 샤시 및 난간 설치는 동일 평형이라도 호수별로 다르게 설계될 수 있습니다.',
          '본 홍보물은 분양 승인 시 제출된 것으로 실제 시공시 변경될 수 있음을 유념하시기 바랍니다.',
        ],
      },
      {
        pageId: 'unit2',
        type: 'unit',
        title: '84타입',
        subtitle: '풀페이지',
        subVisualImage: `${IMG2}/sub-bg.webp`,
        variants: [
          {
            typeLabel: '84㎡',
            image: `${IMG2}/unit-84.webp`,
          },
        ],
      },
      {
        pageId: 'news1',
        type: 'news',
        title: '언론보도',
        subtitle: '풀페이지',
        subVisualImage: `${IMG2}/sub-bg.webp`,
        items: [
          { source: '김치', title: '전세대 4Bay 24', date: '2025-06-26', url: '#' },
          { source: 'premium 5', title: '그린 가든 23(일부세대 한정)', date: '2025-06-26', url: '#' },
          { source: '아파트 일보', title: '프라이빗 플레이포레 22', date: '2025-06-26', url: '#' },
          { source: '아파트 일보', title: '웰컴 프라자 21', date: '2025-06-26', url: '#' },
        ],
      },
      {
        pageId: 'news2',
        type: 'notice',
        title: '공지사항',
        subtitle: '공지사항을 빠르게 확인하세요',
        subVisualImage: `${IMG2}/sub-bg.webp`,
        items: [
          { number: 1, title: '공지사항입니다.', date: '2025-08-18' },
        ],
      },
    ],

    theme: {
      primary: '#1a1a2e',
      accent: '#c8a97e',
      baseBg: '#0f0f1a',
      altBg: '#1a1a2e',
      cardBg: 'rgba(200,169,126,0.08)',
      borderColor: 'rgba(200,169,126,0.2)',
      headerBg: 'rgba(15,15,26,0.6)',
      headerScrollBg: 'rgba(15,15,26,0.97)',
      footerText: '프레쉬하우스 분양 홍보관',
      footerInfo: {
        developer: 'SM우방, SM상선',
        constructor: 'SM우방, SM상선',
      } as { developer?: string; constructor?: string; trustee?: string; bizNumber?: string },
      disclaimer: '※ 본 아파트의 하자 등에 따른 피해보상은 관계법령에 의거 적용됩니다.\n※ 본 홈페이지의 CG 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있습니다.\n※ 각종 개발계획 및 예정사항 등은 추후 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관함을 알려드립니다.\n※ 세부 설계내용은 향후 인허가 과정에서 변동될 수 있습니다.',
    },
  },

  'premium-parkview': {
    id: 'premium-parkview',
    projectName: '상상 파크 뷰',
    projectNameEn: 'PARKVIEW',
    brandLine: '한강의 품격을 담다, 당신만의 프라이빗 뷰',
    contactPhone: '0000-0000',

    navItems: [
      {
        label: '사업안내',
        href: '#overview',
        children: [
          { label: '사업개요', pageId: 'life1' },
          { label: '입지환경', pageId: 'life2' },
          { label: '프리미엄', pageId: 'life3' },
          { label: '브랜드소개', pageId: 'life4' },
          { label: '오시는길', pageId: 'life5' },
        ],
      },
      {
        label: '단지안내',
        href: '#community',
        children: [
          { label: '설계', pageId: 'complex1' },
          { label: '단지 / 동호수배치도', pageId: 'complex2' },
          { label: '조경', pageId: 'complex3' },
          { label: '커뮤니티', pageId: 'complex4' },
          { label: '시스템', pageId: 'complex5' },
          { label: '이동통신설비협의결과서', pageId: 'complex6' },
        ],
      },
      {
        label: '세대안내',
        href: '#units',
        children: [
          { label: '평면정보', pageId: 'unit1' },
          { label: '인테리어', pageId: 'unit2' },
        ],
      },
      {
        label: '분양안내',
        href: '#schedule',
        children: [
          { label: '분양일정', pageId: 'schedule1' },
          { label: '입주자모집공고', pageId: 'schedule2' },
          { label: '계약안내문', pageId: 'schedule3' },
          { label: '자금조달계획서', pageId: 'schedule4' },
          { label: '인지세안내', pageId: 'schedule5' },
        ],
      },
      {
        label: '청약안내',
        href: '#subscription',
        children: [
          { label: '인터넷청약안내', pageId: 'subscription1' },
          { label: '청약자격안내', pageId: 'subscription2' },
        ],
      },
      {
        label: '홍보안내',
        href: '#promotion',
        children: [
          { label: '홍보영상', pageId: 'news1' },
          { label: '언론보도', pageId: 'news2' },
        ],
      },
      {
        label: '관심고객등록',
        href: '#registration',
        children: [
          { label: '관심고객등록', pageId: 'registration1' },
        ],
      },
    ],

    hero: {
      slides: [
        {
          image: `${IMG_PV}/main-bg.png`,
          title: ['한강의 품격을 담다,', '당신만의 프라이빗 뷰'],
          subtitle: '당신만의 프라이빗 뷰',
        },
        {
          image: `${IMG_PV}/main-bg2.png`,
          title: ['당신만을 위한 휴식', '당신만의 프라이빗 뷰'],
          subtitle: '당신만의 프라이빗 뷰',
        },
      ],
    },

    overview: {
      title: '한강뷰로 완성된 삶의 품격',
      subtitle: '상상 파크 뷰 ParkVIEW',
      image: `${IMG_PV}/special-bg.jpg`,
      items: [
        { label: '위치', value: '경기도 성남시 분당구 성남대로 925번길 36' },
        { label: '규모', value: '지하 2층 ~ 지상 29층' },
        { label: '세대수', value: '총 12,000세대' },
        { label: '입주예정', value: '2027년 12월 예정' },
        { label: '타입', value: '전용 59㎡ / 84㎡ / 114㎡' },
        { label: '시행', value: '상상투자신탁' },
        { label: '시공', value: '상상플랜트주식회사' },
      ],
    },

    community: {
      title: '프리미엄 커뮤니티',
      subtitle: '입주민을 위한 특별한 커뮤니티 시설',
      items: [
        {
          image: `${IMG}/fitness.jpg`,
          title: '피트니스센터',
          description: '최신 운동기구를 갖춘 프리미엄 피트니스센터. 전문 트레이너 상주로 체계적인 건강 관리가 가능합니다.',
        },
        {
          image: `${IMG}/premium-running.webp`,
          title: '조깅트랙 & 산책로',
          description: '단지 내 조성되는 순환형 조깅트랙과 산책로. 사계절 쾌적한 야외 운동을 즐길 수 있습니다.',
        },
        {
          image: `${IMG}/premium-cafe.webp`,
          title: '카페라운지',
          description: '입주민 전용 카페라운지. 편안한 분위기에서 커피 한잔의 여유를 즐기세요.',
        },
        {
          image: `${IMG}/life-school.webp`,
          title: '키즈카페 & 놀이터',
          description: '아이들의 창의력을 키워주는 실내 키즈카페와 테마 놀이터가 단지 내에 조성됩니다.',
        },
        {
          image: `${IMG}/premium-nature.webp`,
          title: '중앙광장 & 조경',
          description: '대규모 중앙광장과 특화 조경으로 자연 속 힐링 공간을 제공합니다.',
        },
        {
          image: `${IMG}/life-lifestyle.webp`,
          title: 'GX룸 & 독서실',
          description: '다양한 그룹 운동 프로그램과 조용한 독서 공간으로 건강한 라이프스타일을 지원합니다.',
        },
      ],
    },

    premium: {
      title: '한강조망권 ParkVIEW의 파노라마 고품격 전망',
      subtitle: '차별화된 가치를 확인하세요.',
      features: [
        {
          image: `${IMG_PV}/premium01-img01.jpg`,
          number: '01',
          title: '한강조망권',
          description: '한강의 흐름처럼, 당신의 삶에도 여유와 품격을 더합니다. 일상의 스트레스에서 벗어나, 매일 아침 펼쳐지는 한강의 장관을 맞이하세요.',
        },
        {
          image: `${IMG_PV}/premium01-img02.jpg`,
          number: '02',
          title: '탁월한 교통 접근성',
          description: '분당선 정자역 도보 5분, 분당선 수내역 차량 3분. 서울 강남까지 30분대, 수원역까지 10분대로 빠르고 편리한 출퇴근이 가능합니다.',
        },
        {
          image: `${IMG_PV}/premium01-img03.jpg`,
          number: '03',
          title: '프리미엄 커뮤니티',
          description: '피트니스센터, 카페라운지, 키즈카페 등 입주민을 위한 특별한 커뮤니티 시설. 일상이 리조트가 되는 프리미엄 라이프를 제공합니다.',
        },
        {
          image: `${IMG_PV}/premium01-img04.jpg`,
          number: '04',
          title: '풍부한 생활 인프라',
          description: '분당구청, 정자역 상권, 분당중앙공원 등 풍부한 생활 인프라를 편리하게 이용할 수 있습니다.',
        },
      ],
    },

    life: {
      title: '라이프스타일',
      subtitle: '상상 파크 뷰가 제안하는 새로운 일상',
      cards: [
        { image: `${IMG}/premium-nature.webp`, title: '한강뷰 리빙', subtitle: '매일 한강과 함께하는 아침' },
        { image: `${IMG}/life-city.webp`, title: '분당 라이프', subtitle: '분당구 핵심 인프라 도보권' },
        { image: `${IMG}/life-lifestyle.webp`, title: '프리미엄 라이프', subtitle: '호텔급 커뮤니티 시설' },
      ],
    },

    units: {
      title: '세대안내',
      subtitle: '탁월한 전망을 고려한 한층 더 넓어진 공간',
      types: [
        {
          label: '59㎡',
          image: `${IMG}/popup1.webp`,
          area: '59.98㎡',
          rooms: '방 3 / 욕실 2',
          features: [
            '차별화된 생활중심형 공간배치',
            '100% 남향 위주 전망형 설계',
            '전세대 4Bay형 특화설계',
            '넓은 거실과 주방 공간',
            '드레스룸 및 팬트리 설계',
          ],
        },
        {
          label: '84㎡',
          image: `${IMG}/popup2.webp`,
          area: '84.97㎡',
          rooms: '방 4 / 욕실 2',
          features: [
            '4Bay형 판상형 구조의 넓은 공간감',
            '독립형 주방으로 생활 편의 극대화',
            '마스터 침실 드레스룸',
            '다용도실 및 팬트리 제공',
            '세대 창고 기본 제공',
          ],
        },
        {
          label: '114㎡',
          image: `${IMG}/popup3.webp`,
          area: '114.52㎡',
          rooms: '방 4 / 욕실 2',
          features: [
            '5Bay형 초대형 평면 설계',
            '전 세대 한강 조망권',
            '와이드 거실 설계로 개방감 극대화',
            '마스터배스 호텔식 욕실',
            '세대 창고 및 대형 팬트리',
          ],
        },
      ],
    },

    news: {
      title: '언론보도',
      items: [
        {
          image: `${IMG}/news1.webp`,
          source: '매일경제',
          title: '상상 파크 뷰, 분양 시장 새로운 프리미엄 기준 제시',
          date: '2025.06.15',
        },
        {
          image: `${IMG}/news2.webp`,
          source: '한국경제',
          title: '한강조망권 단지, 교통 프리미엄 주목',
          date: '2025.06.10',
        },
        {
          image: `${IMG}/news3.webp`,
          source: '조선일보',
          title: '12,000세대 대단지 프리미엄 커뮤니티 화제',
          date: '2025.06.05',
        },
        {
          image: `${IMG}/news4.webp`,
          source: '중앙일보',
          title: '분당구 한강뷰 단지, 관심고객 등록 열기',
          date: '2025.05.28',
        },
      ],
    },

    map: {
      title: '오시는 길',
      subtitle: '상상파크뷰 오시는 길을 안내해드립니다.',
      modelHouseImage: `${IMG_PV}/location-map.png`,
      siteImage: `${IMG_PV}/location-map.png`,
      modelHouseAddress: '경기도 성남시 분당구 양현로 322',
      siteAddress: '경기도 성남시 분당구 성남대로 925번길 36',
      kakaoMapUrl: 'https://kko.kakao.com/6SHYQNilN3',
      naverMapUrl: 'https://naver.me/xmxc7F9R',
    },

    registration: {
      title: '관심고객 등록',
      subtitle: '아래 정보를 입력하시면 분양 정보를 가장 먼저 안내해 드립니다.',
    },

    subPages: [
      {
        pageId: 'life1',
        type: 'overview',
        title: '사업개요',
        subtitle: 'OVERVIEW',
        subVisualImage: `${IMG_PV}/special-bg.jpg`,
        contentTitle: '시티뷰와 리버뷰를 경험하는',
        contentSubtitle: '상상파크뷰, 미래를 여는 새로운 시각!',
        contentDesc: '',
        mainImage: `${IMG_PV_BUSINESS}/overview-img.jpg`,
        infoLabel: 'OVERVIEW',
        items: [
          { label: '위치', value: '경기도 성남시 분당구 성남대로 925번길 36' },
          { label: '대지면적', value: '215,880.00㎡' },
          { label: '규모', value: '지하 5층 ~ 지상 50층' },
          { label: '세대수', value: '총 400세대 중 전용 59㎡·100세대 / 84㎡A·200세대 / 114㎡B·100세대' },
          { label: '주차대수', value: '550대 (아파트 400대, 근린생활시설 100대)' },
          { label: '시행·시공', value: '시행 : 상상투자신탁 / 시공 : 상상플랜트주식회사' },
        ],
        caution: [
          '상기 CG 및 이미지 등은 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '상기 CG에 표현된 건물 외관, 색채 등은 실제와 다를 수 있습니다.',
          '세부 설계 내용은 향후 인·허가 과정에서 변동될 수 있습니다.',
        ],
      },
      {
        pageId: 'life2',
        type: 'location',
        title: '입지환경',
        subtitle: 'ENVIRONMENT',
        subVisualImage: `${IMG_PV}/special-bg.jpg`,
        contentTitle: '',
        contentSubtitle: '',
        contentDesc: '',
        mainImage: `${IMG_PV_BUSINESS}/environment.jpg`,
        poiGroups: [],
        caution: [
          '본 홈페이지의 일러스트 및 지역도, 이미지는 소비자의 이해를 돕기 위해 제작된 것으로, 실제와 차이가 날 수 있습니다.',
          '본 홍보물에 기재된 현황, 개발계획, 예정사항 등은 관계기관의 홈페이지 및 해당기관의 고시 등을 참고하여 제작된 것으로 사업계획 및 일정은 당사와 무관합니다. 자세한 사항은 사업주체 및 관청으로 문의하시기 바랍니다.',
        ],
      },
      {
        pageId: 'life3',
        type: 'complexCommunity',
        title: '프리미엄',
        subtitle: 'PREMIUM',
        subVisualImage: `${IMG_PV}/special-bg.jpg`,
        caption: '',
        mainImage: `${IMG_PV_BUSINESS}/premium.jpg`,
        mobileImage: `${IMG_PV_BUSINESS}/m_premium.jpg`,
        caution: [
          '상기 CG 및 이미지 등은 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
        ],
      },
      {
        pageId: 'life4',
        type: 'brand',
        title: '브랜드소개',
        subtitle: 'BRAND',
        subVisualImage: `${IMG_PV}/special-bg.jpg`,
        image: `${IMG_PV_BUSINESS}/brand.jpg`,
        mobileImage: `${IMG_PV_BUSINESS}/m_brand.jpg`,
      },
      {
        pageId: 'life5',
        type: 'directions',
        title: '오시는 길',
        subtitle: 'LOCAITON',
        subVisualImage: `${IMG_PV}/special-bg.jpg`,
        descTitle: '',
        addresses: [],
        modelHouseImage: `${IMG_PV_BUSINESS}/location.jpg`,
        siteImage: `${IMG_PV_BUSINESS}/location.jpg`,
        modelHouseAddress: '',
        siteAddress: '',
        kakaoMapUrl: 'https://kko.kakao.com/6SHYQNilN3',
        naverMapUrl: 'https://naver.me/xmxc7F9R',
        caution: [],
      },
      {
        pageId: 'complex1',
        type: 'complexCommunity',
        title: '설계',
        subtitle: 'DESIGN',
        subVisualImage: `${IMG_PV}/special-bg.jpg`,
        caption: '',
        mainImage: `${IMG_PV_COMPLEX}/design.jpg`,
        mobileImage: `${IMG_PV_COMPLEX}/m_design.jpg`,
        caution: [
          '상기 CG 및 이미지 등은 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '상기 CG에 표현된 건물 외관, 색채 등은 실제와 다를 수 있습니다.',
          '세부 설계 내용은 향후 인·허가 과정에서 변동될 수 있습니다.',
        ],
      },
      {
        pageId: 'complex2',
        type: 'complexFloorplan',
        title: '단지 / 동호수배치도',
        subtitle: 'SITE PLAN',
        subVisualImage: `${IMG_PV}/special-bg.jpg`,
        images: [
          `${IMG_PV_COMPLEX}/complex-guide01.jpg`,
          `${IMG_PV_COMPLEX}/complex-guide02.jpg`,
        ],
        caution: [
          '본 홈페이지의 CG 및 이미지 등은 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '본 아파트의 하자 등에 따른 피해보상은 관계법령에 의거 적용됩니다.',
          '세부 설계내용은 향후 인·허가 과정에서 변동될 수 있습니다.',
        ],
      },
      {
        pageId: 'complex3',
        type: 'complexCommunity',
        title: '조경',
        subtitle: 'LANDSCAPING',
        subVisualImage: `${IMG_PV}/special-bg.jpg`,
        caption: '',
        mainImage: `${IMG_PV_COMPLEX}/landscaping.jpg`,
        caution: [
          '상기 CG 및 이미지 등은 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '상기 CG에 표현된 건물 외관, 색채 등은 실제와 다를 수 있습니다.',
          '세부 설계 내용은 향후 인·허가 과정에서 변동될 수 있습니다.',
        ],
      },
      {
        pageId: 'complex4',
        type: 'complexCommunity',
        title: '커뮤니티',
        subtitle: 'COMMUNITY',
        subVisualImage: `${IMG_PV}/special-bg.jpg`,
        caption: '',
        mainImage: `${IMG_PV_COMPLEX}/community.jpg`,
        caution: [
          '상기 CG 및 이미지 등은 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '커뮤니티 시설의 마감재, 가구 등 표현은 소비자의 이해를 돕기 위해 제작된 것으로 분양대상물을 축소 표현하여 실제 크기 및 거리 등과 실제 차이가 있으며 인·허가 과정에서 변경될 수 있습니다',
        ],
      },
      {
        pageId: 'complex5',
        type: 'complexCommunity',
        title: '시스템',
        subtitle: 'SYSTEM',
        subVisualImage: `${IMG_PV}/special-bg.jpg`,
        caption: '',
        mainImage: `${IMG_PV_COMPLEX}/system.jpg`,
        caution: [
          '상기 CG 및 이미지 등은 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '상기 시스템은 실제 구현 시 기술상의 이유로 변경될 수 있습니다.',
          '본 홈페이지에 표현(또는 게재)된 사진, 이미지, 일러스트 등은 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '세부 설계 내용은 향후 인·허가 과정에서 변동될 수 있습니다.',
        ],
      },
      {
        pageId: 'complex6',
        type: 'complexFloorplan',
        title: '이동통신설비협의결과서',
        subtitle: 'MOBILE FACILITY CONSULTATION RESULTS',
        subVisualImage: `${IMG_PV}/special-bg.jpg`,
        images: [
          `${IMG_PV_COMPLEX}/telecomm1.png`,
          `${IMG_PV_COMPLEX}/telecomm2.png`,
        ],
      },
      {
        pageId: 'unit1',
        type: 'unitFloorplan',
        title: '평면정보',
        subtitle: 'UNIT',
        subVisualImage: `${IMG_PV}/special-bg.jpg`,
        tabs: [
          { label: '59㎡', image: `${IMG_PV_UNIT}/unit-59.jpg` },
          { label: '84㎡', image: `${IMG_PV_UNIT}/unit-84.jpg` },
          { label: '114㎡', image: `${IMG_PV_UNIT}/unit-114.jpg` },
        ],
        caution: [
          '상기 이미지는 소비자의 개략적인 이해를 돕기 위한 이미지컷으로 실제와는 다를 수 있습니다.',
          '상기 평면면적은 인·허가상의 문제로 인해 실제 시공 시 다소 변경될 수 있습니다.',
          '타입별 제공아이템이 상이할 수 있으니 사전 확인바랍니다.',
          '홈페이지에 명기된 면적은 소수점 4자리까지 표현되어 있습니다.',
          '일부 가전, 가구 항목은 확장 시 제공품목으로 견본주택에 방문하셔서 확인하시기 바랍니다.',
        ],
      },
      {
        pageId: 'unit2',
        type: 'unitInterior',
        title: '인테리어',
        subtitle: 'INTERIOR',
        subVisualImage: `${IMG_PV}/special-bg.jpg`,
        tabs: [
          { label: '59㎡', image: `${IMG_PV_UNIT}/interior-59.png` },
          { label: '84㎡', image: `${IMG_PV_UNIT}/interior-84.png` },
          { label: '114㎡', image: `${IMG_PV_UNIT}/interior-114.png` },
        ],
        caution: [
          '본 제작물상의 사진은 소비자의 이해를 돕기 위해 견본주택에서 촬영한 것으로 마감재 외의 옵션 및 견본주택 디스플레이를 위한 상품이 포함되어 있으니 계약 전 확인하시기 바랍니다.',
          '창호류, 가구류, 마감재의 색상, 디자인, 재질 등은 실제 시공 시 타사 제품으로 변경될 수 있습니다.',
        ],
      },
      {
        pageId: 'schedule1',
        type: 'document',
        title: '분양일정',
        subtitle: 'SCHEDULE',
        subVisualImage: `${IMG_PV}/special-bg.jpg`,
        image: `${IMG_PV_SCHEDULE}/schedule1.jpg`,
      },
      {
        pageId: 'schedule2',
        type: 'document',
        title: '입주자모집공고',
        subtitle: 'NOTICE',
        subVisualImage: `${IMG_PV}/special-bg.jpg`,
        image: `${IMG_PV_SCHEDULE}/notice.jpg`,
      },
      {
        pageId: 'schedule3',
        type: 'document',
        title: '계약안내문',
        subtitle: 'CONTRACT',
        subVisualImage: `${IMG_PV}/special-bg.jpg`,
        image: `${IMG_PV_SCHEDULE}/cmsPage01.jpg`,
      },
      {
        pageId: 'schedule4',
        type: 'document',
        title: '자금조달계획서',
        subtitle: 'FUNDING PLAN',
        subVisualImage: `${IMG_PV}/special-bg.jpg`,
        image: `${IMG_PV_SCHEDULE}/cmsPage02.jpg`,
      },
      {
        pageId: 'schedule5',
        type: 'document',
        title: '인지세안내',
        subtitle: 'STAMP DUTY INFORMATION',
        subVisualImage: `${IMG_PV}/special-bg.jpg`,
        image: `${IMG_PV_SCHEDULE}/cmsPage03.jpg`,
      },
      // 청약안내 서브페이지
      {
        pageId: 'subscription1',
        type: 'document',
        title: '인터넷청약안내',
        subtitle: 'ONLINE SUBSCRIPTION GUIDE',
        subVisualImage: `${IMG_PV}/special-bg.jpg`,
        image: `${IMG_PV_SUBSCRIPTION}/internet.jpg`,
      },
      {
        pageId: 'subscription2',
        type: 'subscriptionEligibility',
        title: '청약자격안내',
        subtitle: 'ELIGIBILITY INFORMATION',
        subVisualImage: `${IMG_PV}/special-bg.jpg`,
        tabs: [
          { label: '공통사항', image: `${IMG_PV_SUBSCRIPTION}/subscription_0.jpg` },
          { label: '기관추천 특별공급', image: `${IMG_PV_SUBSCRIPTION}/subscription_01.jpg` },
          { label: '다자녀가구 특별공급', image: `${IMG_PV_SUBSCRIPTION}/subscription_02.jpg` },
          { label: '신혼부부 특별공급', image: `${IMG_PV_SUBSCRIPTION}/subscription_03.jpg` },
          { label: '생애최초 특별공급', image: `${IMG_PV_SUBSCRIPTION}/subscription_04.jpg` },
          { label: '노부모부양 특별공급', image: `${IMG_PV_SUBSCRIPTION}/subscription_05.jpg` },
          { label: '일반공급', image: `${IMG_PV_SUBSCRIPTION}/subscription_06.jpg` },
        ],
      },
      // 홍보안내 서브페이지
      {
        pageId: 'news1',
        type: 'video',
        title: '홍보영상',
        subtitle: 'PROMOTION VIDEO',
        subVisualImage: `${IMG_PV}/special-bg.jpg`,
        videos: [
          { videoId: '1v5hcZpOMUI', thumbnail: `${IMG_PV_PROMOTION}/maxresdefault.jpg`, title: '상상 파크 뷰 1단지' },
          { videoId: '8nP_ZCThIWU', thumbnail: `${IMG_PV_PROMOTION}/maxresdefault(1).jpg`, title: '상상 파크 뷰 2단지' },
          { videoId: '7bzH7zgYb4I', thumbnail: `${IMG_PV_PROMOTION}/maxresdefault(2).jpg`, title: '상상 파크 뷰 3단지' },
          { videoId: 'mRCaRm1In9k', thumbnail: `${IMG_PV_PROMOTION}/maxresdefault(3).jpg`, title: '상상 파크 뷰 4단지' },
          { videoId: 'TSs09CuJjaY', thumbnail: `${IMG_PV_PROMOTION}/hqdefault.jpg`, title: '상상 파크 뷰 5단지' },
          { videoId: 'POw2l-70YNI', thumbnail: `${IMG_PV_PROMOTION}/hqdefault(1).jpg`, title: '상상 파크 뷰 6단지' },
        ],
      },
      {
        pageId: 'news2',
        type: 'news',
        title: '언론보도',
        subtitle: 'MEDIA COVERAGE',
        subVisualImage: `${IMG_PV}/special-bg.jpg`,
        items: [
          { number: 1, title: '가격 경쟁력 갖춘 `부천아테라자이` 웃돈 기대감 솔솔', source: '디지털타임스', date: '2024.10.22', url: 'https://www.dt.co.kr/contents.html?article_no=2024102202109923063001&ref=naver' },
          { number: 2, title: '집값 상승에 소형·분상제 아파트 수요 쏠림', source: '스마트투데이', date: '2024.10.18', url: 'https://www.smarttoday.co.kr/news/articleView.html?idxno=62059' },
          { number: 3, title: '분양가 상승세 속 소형 · 분상제 뜬다…\'부천아테라자이\' 관심', source: '파이낸셜뉴스', date: '2024.10.17', url: 'https://www.fnnews.com/news/202410171309565674' },
          { number: 4, title: '수도권 아파트 매매 거래량...바닥 찍고 상승 전환', source: '팍스경제TV', date: '2024.10.16', url: 'http://www.paxetv.com/news/articleView.html?idxno=214477' },
          { number: 5, title: '삶의 질 높이는 택지지구… 택지지구 신규 아파트에 청약통장 몰린다', source: '국토일보', date: '2024.10.15', url: 'http://www.ikld.kr/news/articleView.html?idxno=301729' },
          { number: 6, title: '지속되는 분양가 인상… 가격 경쟁력 갖춘 \'부천아테라자이\'에 수요자 이목 쏠린다', source: '국토일보', date: '2024.10.14', url: 'http://www.ikld.kr/news/articleView.html?idxno=301540' },
          { number: 7, title: '\'부천아테라자이\' 1순위 최고 13.14대 1 기록하며 높은 관심 증명', source: '글로벌경제신문', date: '2024.10.11', url: 'https://www.getnews.co.kr/news/articleView.html?idxno=695889' },
          { number: 8, title: 'GS건설 \'부천아테라자이\' 1순위 최고 13.14대 1 기록', source: '한국경제TV', date: '2024.10.10', url: 'https://www.wowtv.co.kr/NewsCenter/News/Read?articleId=A202410100045&t=NN' },
          { number: 9, title: '\'분상제\' 부천아테라자이, 59㎡형 6.6억 분양 \'두 자릿수 경쟁률 예고\'', source: '스트레이트뉴스', date: '2024.10.08', url: 'https://www.straightnews.co.kr/news/articleView.html?idxno=254589' },
          { number: 10, title: 'GS건설 \'부천아테라자이\', 8일 1순위 청약', source: '한국경제', date: '2024.10.07', url: 'https://www.hankyung.com/article/202410078489O' },
        ],
      },
      // 관심고객등록 서브페이지
      {
        pageId: 'registration1',
        type: 'registration',
        title: '관심고객등록',
        subtitle: 'INTEREST REGISTRATION',
        subVisualImage: `${IMG_PV}/special-bg.jpg`,
        unitTypes: ['59㎡', '84㎡', '114㎡'],
        caution: [
          '만14세 이상인 고객님에 한하여 관심고객 등록이 가능합니다.',
          '관심고객 등록을 하시는 경우 회사는 고객님이 만14세 이상인 것으로 간주하며, 만약 이와 사실이 다른 경우 회사는 고객님의 관심고객 등록을 삭제할 수 있습니다.',
        ],
      },
    ],

    theme: {
      primary: '#0a0a0a',
      accent: '#ffa729',
      baseBg: '#0a0a0a',
      altBg: '#111111',
      cardBg: 'rgba(255,255,255,0.05)',
      borderColor: 'rgba(255,255,255,0.1)',
      headerBg: 'rgba(0,0,0,0.6)',
      headerScrollBg: 'rgba(10,10,10,0.97)',
      footerText: '상상 파크 뷰 ParkVIEW 분양 홍보관',
      footerInfo: {
        developer: '상상투자신탁',
        constructor: '상상플랜트주식회사',
        bizNumber: '000-00-00000',
      },
      disclaimer: '본 홈페이지의 CG, 이미지, 내용 등은 소비자의 이해를 돕기 위해 제작된 것으로, 실제와 상이할 수 있습니다. 세부 설계내용은 향후 인허가 과정에서 변동될 수 있으니 이점 양해 부탁드립니다.',
    },
  },
  'premium-forest': {
    id: 'premium-forest',
    projectName: '더포레스트',
    projectNameEn: 'THE FOREST',
    brandLine: '자연친화 힐링라이프 더포레스트',
    contactPhone: '0000-0000',

    navItems: [
      { label: 'HOME', href: '#home' },
      {
        label: '사업안내',
        href: '#overview',
        children: [
          { label: '사업개요', pageId: 'overview' },
          { label: '브랜드소개', pageId: 'brand' },
          { label: '프리미엄7', pageId: 'premium' },
          { label: '입지환경', pageId: 'location' },
          { label: '오시는길', pageId: 'directions' },
        ],
      },
      {
        label: '단지안내',
        href: '#community',
        children: [
          { label: '단지설계', pageId: 'complex-design' },
          { label: '동호수배치도', pageId: 'complex-layout' },
          { label: '조경', pageId: 'landscape' },
          { label: '커뮤니티', pageId: 'community' },
          { label: '시스템', pageId: 'system' },
        ],
      },
      {
        label: '세대안내',
        href: '#units',
        children: [
          { label: '59㎡', pageId: 'unit-59' },
          { label: '84A㎡', pageId: 'unit-84' },
          { label: '114㎡', pageId: 'unit-114' },
        ],
      },
      {
        label: '분양안내',
        href: '#info',
        children: [
          { label: '분양캘린더', pageId: 'info-calendar' },
          { label: '인터넷청약가이드', pageId: 'info-guide' },
          { label: '모집공고', pageId: 'info-notice' },
          { label: '공급안내', pageId: 'info-supply' },
          { label: '청약안내', pageId: 'info-subscription' },
          { label: '당첨자 서류안내', pageId: 'info-documents' },
          { label: '선착순 계약안내', pageId: 'info-contract' },
        ],
      },
      {
        label: '방문예약신청',
        href: '#visit',
        children: [
          { label: '언론보도', pageId: 'news' },
          { label: '홍보영상', pageId: 'videos' },
          { label: '오픈이벤트', pageId: 'event' },
          { label: '방문예약신청', pageId: 'visit' },
        ],
      },
    ],

    hero: {
      slides: [
        {
          image: `${IMG_FOREST}/main01.jpg`,
          title: ['자연친화 힐링라이프', '더포레스트'],
          subtitle: '경기도 광주 곤지암에 위치한 3,000세대 대단지 랜드마크',
        },
        {
          image: `${IMG_FOREST}/main02.jpg`,
          title: ['THE', 'FOREST'],
          subtitle: '힐링으로 가득한 일상\n푸르른 자연으로 재충전의 시간을 선사하는\n4계절 힐링 에코라이프',
        },
        {
          image: `${IMG_FOREST}/main03.jpg`,
          title: ['THE', 'FOREST'],
          subtitle: '다채롭고 편리한 생활\n프리미엄 생활권과 완벽한 인프라',
        },
      ],
    },

    brand: {
      image: `${IMG_FOREST}/section05_1.jpg`,
      content: `더포레스트는 자연과 함께하는 힐링 라이프를 제공합니다.

경기도 광주 곤지암에 위치한 더포레스트는
3,000세대 대단지 랜드마크로 주거문화를 대표합니다.

자연친화 힐링라이프 더포레스트에서
새로운 일상을 시작하세요.`,
    },

    overview: {
      title: '사업개요',
      subtitle: '경기도 광주 더포레스트',
      image: `${IMG_FOREST}/section05_1.jpg`,
      items: [
        { label: '위치', value: '경기도 광주시 곤지암읍 곤지암리 산 4-3' },
        { label: '규모', value: '총 3,000세대' },
        { label: '타입', value: '59㎡ / 84A㎡ / 114㎡' },
        { label: '시행', value: '더 포레스트' },
        { label: '위탁/분양', value: '더포레스트' },
        { label: '시공', value: '더 포레스트' },
      ],
    },

    community: {
      title: '커뮤니티 시설',
      subtitle: '피트니스클럽, 실내골프연습장, 쾌적한 힐링을 누리는 에코라이프',
      items: [],
    },

    premium: {
      title: '더포레스트',
      subtitle: 'PREMIUM 7',
      features: [
        {
          image: `${IMG_FOREST}/luxury1.jpg`,
          number: '01',
          title: '괘적한 자연환경',
          description: '공원을 앞마당처럼 누리는 힐링라이프',
        },
        {
          image: `${IMG_FOREST}/luxury2.jpg`,
          number: '02',
          title: '3,000세대 대단지 랜드마크',
          description: '주거문화를 대표하며 총 3,000세대 랜드마크 대단지',
        },
        {
          image: `${IMG_FOREST}/luxury3.jpg`,
          number: '03',
          title: '초중고 안심학군',
          description: '도보 통학이 가능한 공립유치원, 초/중/고 안심학군',
        },
        {
          image: `${IMG_FOREST}/luxury4.jpg`,
          number: '04',
          title: '교통 역세권',
          description: '지하철,버스정류장 3분거리 위치의 역세권',
        },
        {
          image: `${IMG_FOREST}/luxury5.jpg`,
          number: '05',
          title: '프리미엄 생활권',
          description: '법원 등 관공서 및 중심상권 인접 메인 인프라를 갖춘 중심 생활권',
        },
        {
          image: `${IMG_FOREST}/luxury6.jpg`,
          number: '06',
          title: '커뮤니티 시설',
          description: '피트니스클럽, 실내골프연습장, 쾌적한 힐링을 누리는 에코라이프',
        },
        {
          image: `${IMG_FOREST}/premium07.png`,
          number: '07',
          title: '브랜드 프리미엄',
          description: '대한민국 대표 빛나는 아파트 자부심',
        },
      ],
    },

    life: {
      title: '건강과 생활을 함께 챙겨주는 집',
      subtitle: '',
      cards: [],
    },

    units: {
      title: '평형안내',
      subtitle: '',
      types: [],
    },

    news: {
      title: '언론보도',
      items: [],
    },

    map: {
      title: '오시는길',
      subtitle: '',
      modelHouseImage: `${IMG_FOREST}/section05_1.jpg`,
      siteImage: `${IMG_FOREST}/section05_1.jpg`,
      modelHouseAddress: '경기도 광주시 수송로 291 (마장동)',
      siteAddress: '경기도 광주시 지삼로 275 (지곡동)',
    },

    registration: {
      title: '방문예약신청',
      subtitle: '방문예약신청을 하시면 분양정보를 발빠르게 받아보실 수 있습니다.',
      backgroundImage: `${IMG_FOREST}/visual_01.jpg`,
    },

    videos: {
      items: [
        {
          videoId: '_gLWz7BDLbg',
          thumbnail: `${IMG_AU}/2898761362a2d.jpg`,
          type: 'youtube',
        },
        {
          videoId: 'o9AwMsGV72M',
          thumbnail: `${IMG_AU}/78c53d731b1c0.jpg`,
          type: 'youtube',
        },
      ],
    },

    theme: {
      primary: '#c89c52',
      accent: '#c89c52',
      baseBg: '#ffffff',
      altBg: '#f8f8f8',
      cardBg: '#ffffff',
      borderColor: 'rgba(200, 156, 82, 0.15)',
      headerBg: 'rgba(255,255,255,0.95)',
      headerScrollBg: 'rgba(255,255,255,0.98)',
      textPrimary: '#212121',
      textSecondary: '#666666',
      footerText: '더포레스트',
      footerInfo: {
        developer: '더 포레스트',
        constructor: '더 포레스트',
        bizNumber: '000-00-00000',
      },
      disclaimer: '본 아파트의 하자 등에 따른 피해보상은 관계법령에 의거 적용됩니다. 본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다. 각종 개발계획 및 예정사항 등은 추후 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관함을 알려드립니다. 세부 설계내용은 향후 인허가 과정에서 변동될 수 있습니다.',
    },

    subPages: [
      {
        pageId: 'overview',
        type: 'overview',
        title: '사업개요',
        subtitle: 'PROJECT OVERVIEW',
        subVisualImage: `${IMG_FOREST}/main03.jpg`,
        contentTitle: '사업개요',
        mainImage: `${IMG_FOREST}/section05_1.jpg`,
        infoLabel: 'OVERVIEW',
        items: [
          { label: '위치', value: '경기도 광주시 곤지암읍 곤지암리 산 4-3' },
          { label: '규모', value: '총 3,000세대' },
          { label: '타입', value: '59㎡ / 84A㎡ / 114㎡' },
          { label: '시행', value: '더 포레스트' },
          { label: '위탁/분양', value: '더포레스트' },
          { label: '시공', value: '더 포레스트' },
        ],
        caution: [
          '본 아파트의 하자 등에 따른 피해보상은 관계법령에 의거 적용됩니다.',
          '본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '각종 개발계획 및 예정사항 등은 추후 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관함을 알려드립니다.',
          '세부 설계내용은 향후 인허가 과정에서 변동될 수 있습니다.',
        ],
      },
      {
        pageId: 'brand',
        type: 'brand',
        title: '브랜드소개',
        subtitle: 'BRAND',
        subVisualImage: `${IMG_FOREST}/main01.jpg`,
        image: `${IMG_FOREST}/section05_1.jpg`,
      },
      {
        pageId: 'location',
        type: 'location',
        title: '입지환경',
        subtitle: 'LOCATION PREMIUM',
        subVisualImage: `${IMG_FOREST}/section04_1.jpg`,
        contentTitle: '더포레스트 입지환경',
        contentDesc: '경기도 광주 곤지암에 위치한 더포레스트는<br>자연친화 힐링라이프를 제공하는 최적의 입지 조건을 갖추고 있습니다.',
        mainImage: `${IMG_FOREST}/section04_1.jpg`,
        poiGroups: [
          {
            category: '교육',
            title: '등하교 걱정없는 안심 학세권',
            items: [
              '곤지암 초중고 인접, 안심 통학 교육환경',
              '도보 통학이 가능한 공립유치원, 초/중/고 안심학군',
            ],
            image: `${IMG_FOREST}/section04_1.jpg`,
            icon: `${IMG_FOREST}/section04_sub1.png`,
          },
          {
            category: '교통',
            title: '출퇴근이 편리한 광역 교통망',
            items: [
              '곤지암IC 인접, 서울/세종 등 주요 고속도로 이용 편리',
              '지하철·버스정류장 3분 거리 역세권',
            ],
            image: `${IMG_FOREST}/section04_2.jpg`,
            icon: `${IMG_FOREST}/section04_sub2.png`,
          },
          {
            category: '생활',
            title: '다양하고 완벽한 생활 인프라',
            items: [
              '인근 상업시설과 하나로마트, 도서관 등 인접',
              '법원 등 관공서 및 중심상권 인접 메인 인프라',
            ],
            image: `${IMG_FOREST}/section04_3.jpg`,
            icon: `${IMG_FOREST}/section04_sub3.png`,
          },
          {
            category: '자연',
            title: '여유롭고 쾌적한 넓은 숲세권',
            items: [
              '단지 인접 곤지암천 수변공원 조성, 산책로 위치',
              '공원을 앞마당처럼 누리는 힐링라이프',
            ],
            image: `${IMG_FOREST}/section04_4.jpg`,
            icon: `${IMG_FOREST}/section04_sub4.png`,
          },
        ],
        caution: [
          '본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '각종 개발계획 및 예정사항 등은 추후 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관함을 알려드립니다.',
        ],
      },
      {
        pageId: 'directions',
        type: 'directions',
        title: '오시는길',
        subtitle: 'DIRECTIONS',
        subVisualImage: `${IMG_FOREST}/main02.jpg`,
        descTitle: '현장안내',
        addresses: [
          { label: '견본주택', address: '경기도 광주시 수송로 291 (마장동)' },
          { label: '현장', address: '경기도 광주시 지삼로 275 (지곡동)' },
        ],
        modelHouseImage: `${IMG_FOREST}/section05_1.jpg`,
        siteImage: `${IMG_FOREST}/section05_1.jpg`,
        modelHouseAddress: '경기도 광주시 수송로 291 (마장동)',
        siteAddress: '경기도 광주시 지삼로 275 (지곡동)',
        caution: [
          '본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
        ],
      },
      {
        pageId: 'premium',
        type: 'complexPremium',
        title: '프리미엄7',
        subtitle: 'PREMIUM 7',
        subVisualImage: `${IMG_FOREST}/luxury1.jpg`,
        premiumSubtitle: '더포레스트',
        premiumDesc: 'PREMIUM',
        items: [
          {
            number: '01',
            title: '괘적한 자연환경',
            description: '공원을 앞마당처럼 누리는 힐링라이프',
            image: `${IMG_FOREST}/luxury1.jpg`,
          },
          {
            number: '02',
            title: '3,000세대 대단지 랜드마크',
            description: '주거문화를 대표하며 총 3,000세대 랜드마크 대단지',
            image: `${IMG_FOREST}/luxury2.jpg`,
          },
          {
            number: '03',
            title: '초중고 안심학군',
            description: '도보 통학이 가능한 공립유치원, 초/중/고 안심학군',
            image: `${IMG_FOREST}/luxury3.jpg`,
          },
          {
            number: '04',
            title: '교통 역세권',
            description: '지하철,버스정류장 3분거리 위치의 역세권',
            image: `${IMG_FOREST}/luxury4.jpg`,
          },
          {
            number: '05',
            title: '프리미엄 생활권',
            description: '법원 등 관공서 및 중심상권 인접 메인 인프라를 갖춘 중심 생활권',
            image: `${IMG_FOREST}/luxury5.jpg`,
          },
          {
            number: '06',
            title: '커뮤니티 시설',
            description: '피트니스클럽, 실내골프연습장, 쾌적한 힐링을 누리는 에코라이프',
            image: `${IMG_FOREST}/luxury6.jpg`,
          },
          {
            number: '07',
            title: '브랜드 프리미엄',
            description: '대한민국 대표 빛나는 아파트 자부심',
            image: `${IMG_FOREST}/premium07.png`,
          },
        ],
        caution: [
          '본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '각종 개발계획 및 예정사항 등은 추후 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관함을 알려드립니다.',
        ],
      },
      // 단지안내 - 단지설계 (build01)
      {
        pageId: 'complex-design',
        type: 'complexCommunity',
        title: '단지설계',
        subtitle: 'COMPLEX DESIGN',
        subVisualImage: `${IMG_FOREST_BUILD}/build01_1.jpg`,
        caption: '가치를 품은 단지',
        contentTitle: '경기도 광주 더포레스트',
        contentDesc: '자연친화 힐링라이프를 제공하는 3,000세대 대단지 랜드마크.<br>최적의 주거 환경을 설계했습니다.',
        mainImage: `${IMG_FOREST_BUILD}/build01_1.jpg`,
        caution: [
          '본 아파트의 하자 등에 따른 피해보상은 관계법령에 의거 적용됩니다.',
          '본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '각종 개발계획 및 예정사항 등은 추후 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관함을 알려드립니다.',
          '세부 설계내용은 향후 인허가 과정에서 변동될 수 있습니다.',
        ],
      },
      // 단지안내 - 동호수배치도 (build02)
      {
        pageId: 'complex-layout',
        type: 'complexFloorplan',
        title: '동호수배치도',
        subtitle: 'FLOOR PLAN',
        subVisualImage: `${IMG_FOREST_BUILD}/build02_1.jpg`,
        mainImage: `${IMG_FOREST_BUILD}/build02_1.jpg`,
        caution: [
          '본 아파트의 하자 등에 따른 피해보상은 관계법령에 의거 적용됩니다.',
          '본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '각종 개발계획 및 예정사항 등은 추후 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관함을 알려드립니다.',
          '세부 설계내용은 향후 인허가 과정에서 변동될 수 있습니다.',
        ],
      },
      // 단지안내 - 조경 (build03)
      {
        pageId: 'landscape',
        type: 'complexCommunity',
        title: '조경',
        subtitle: 'LANDSCAPE',
        subVisualImage: `${IMG_FOREST_BUILD}/build03_1.jpg`,
        caption: '자연과 함께하는 힐링 조경',
        contentTitle: '4계절 힐링 에코라이프',
        contentDesc: '단지 인접 곤지암천 수변공원, 산책로와 함께하는 자연친화 조경.<br>공원을 앞마당처럼 누리는 쾌적한 주거 환경을 제공합니다.',
        mainImage: `${IMG_FOREST_BUILD}/build03_1.jpg`,
        caution: [
          '본 아파트의 하자 등에 따른 피해보상은 관계법령에 의거 적용됩니다.',
          '본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '각종 개발계획 및 예정사항 등은 추후 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관함을 알려드립니다.',
          '세부 설계내용은 향후 인허가 과정에서 변동될 수 있습니다.',
        ],
      },
      // 단지안내 - 커뮤니티 (build04) - 샘플과 동일하게 단일 이미지
      {
        pageId: 'community',
        type: 'complexCommunity',
        title: '커뮤니티',
        subtitle: 'COMMUNITY',
        subVisualImage: `${IMG_FOREST_BUILD}/build04_1.jpg`,
        caption: '피트니스클럽, 실내골프연습장, 쾌적한 힐링을 누리는 에코라이프',
        contentTitle: '입주민을 위한 특별한 커뮤니티 시설',
        contentDesc: '더포레스트의 다양한 커뮤니티 시설을 통해 풍부한 라이프스타일을 경험하실 수 있습니다.',
        mainImage: `${IMG_FOREST_BUILD}/build04_1.jpg`,
        caution: [
          '본 아파트의 하자 등에 따른 피해보상은 관계법령에 의거 적용됩니다.',
          '본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '각종 개발계획 및 예정사항 등은 추후 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관함을 알려드립니다.',
          '세부 설계내용은 향후 인허가 과정에서 변동될 수 있습니다.',
          '커뮤니티 시설의 규모, 계획, 제공되는 장비 및 프로그램은 사업/시공 계획에 따라 변경 또는 삭제될 수 있습니다.',
        ],
      },
      // 단지안내 - 시스템 (build05)
      {
        pageId: 'system',
        type: 'complexCommunity',
        title: '시스템',
        subtitle: 'SYSTEM',
        subVisualImage: `${IMG_FOREST_BUILD}/build05_1.jpg`,
        caption: '편리하고 안전한 주거 시스템',
        contentTitle: '더포레스트 주거 시스템',
        contentDesc: '안전·편의·친환경을 고려한 주거 시스템으로 쾌적한 일상을 지원합니다.',
        mainImage: `${IMG_FOREST_BUILD}/build05_1.jpg`,
        caution: [
          '본 아파트의 하자 등에 따른 피해보상은 관계법령에 의거 적용됩니다.',
          '본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '각종 개발계획 및 예정사항 등은 추후 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관함을 알려드립니다.',
          '세부 설계내용은 향후 인허가 과정에서 변동될 수 있습니다.',
          '상기 시스템은 실제 구현 시 기술상의 이유로 변경될 수 있습니다.',
        ],
      },
      // 세대안내 - 59㎡ (unit01)
      {
        pageId: 'unit-59',
        type: 'unit',
        title: '59㎡',
        subtitle: '59㎡ TYPE',
        subVisualImage: `${IMG_FOREST}/section05_1.jpg`,
        variants: [
          {
            typeLabel: '59㎡',
            image: `${IMG_FOREST_UNIT}/unit01_1.jpg`,
          },
        ],
        caution: [
          '본 아파트의 하자 등에 따른 피해보상은 관계법령에 의거 적용됩니다.',
          '본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '각종 개발계획 및 예정사항 등은 추후 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관함을 알려드립니다.',
          '세부 설계내용은 향후 인허가 과정에서 변동될 수 있습니다.',
        ],
      },
      // 세대안내 - 84A㎡ (unit02)
      {
        pageId: 'unit-84',
        type: 'unit',
        title: '84A㎡',
        subtitle: '84A㎡ TYPE',
        subVisualImage: `${IMG_FOREST}/section05_1.jpg`,
        variants: [
          {
            typeLabel: '84A㎡',
            image: `${IMG_FOREST_UNIT}/unit02_1.jpg`,
          },
        ],
        caution: [
          '본 아파트의 하자 등에 따른 피해보상은 관계법령에 의거 적용됩니다.',
          '본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '각종 개발계획 및 예정사항 등은 추후 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관함을 알려드립니다.',
          '세부 설계내용은 향후 인허가 과정에서 변동될 수 있습니다.',
        ],
      },
      // 세대안내 - 114㎡ (unit03)
      {
        pageId: 'unit-114',
        type: 'unit',
        title: '114㎡',
        subtitle: '114㎡ TYPE',
        subVisualImage: `${IMG_FOREST}/section05_1.jpg`,
        variants: [
          {
            typeLabel: '114㎡',
            image: `${IMG_FOREST_UNIT}/unit03_1.jpg`,
          },
        ],
        caution: [
          '본 아파트의 하자 등에 따른 피해보상은 관계법령에 의거 적용됩니다.',
          '본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '각종 개발계획 및 예정사항 등은 추후 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관함을 알려드립니다.',
          '세부 설계내용은 향후 인허가 과정에서 변동될 수 있습니다.',
        ],
      },
      {
        pageId: 'gallery',
        type: 'gallery',
        title: '갤러리',
        subtitle: 'GALLERY',
        subVisualImage: `${IMG_FOREST}/visual_01.jpg`,
        images: [
          { image: `${IMG_FOREST}/visual_01.jpg`, title: '더포레스트 갤러리' },
          { image: `${IMG_FOREST}/visual_02.jpg`, title: '더포레스트 갤러리' },
          { image: `${IMG_FOREST}/visual_03.jpg`, title: '더포레스트 갤러리' },
        ],
        caution: [
          '본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
        ],
      },
      {
        pageId: 'news',
        type: 'news',
        title: '언론보도',
        subtitle: '방문예약신청을 하시면 분양정보를 발빠르게 받아보실 수 있습니다.',
        subVisualImage: `${IMG_FOREST}/section05_1.jpg`,
        backgroundImage: `${IMG_FOREST}/visual_01.jpg`,
        featuredImage: `${IMG_FOREST_VISIT}/0972308001732861968.png`,
        items: [
          { number: 1, title: "건폐율 12%대, 동간거리는 최장 113m '경기도 광주 더포레스트'주목", source: '서울경제', date: '2025.01.15', url: '#', summary: '건폐율에 대한 수요자들의 관심이 상승하고 있다. 건폐율은 대지면적 대비 건축면적 비율을 뜻하는 용어로 해당 비율이 낮을 수록 건물이 차지하는 공간이 적어진다. 건물이 차지하는 공간이 적어지는 만큼 조경이나 여유공간이 확보되어 보다 우수한 채광과 환기, 조망 등을 기대할 수 있다.' },
          { number: 2, title: '분양가 80%까지 청년에 대출…6억 이하 아파트 알아볼까', source: '한국경제', date: '2025.01.14', url: '#', summary: '청년주택드림대출 올 상반기 중 출시. 청년주택드림청약통장 연계 당첨된 20~39세 무주택자 6억원·전용 85㎡ 이하 대상.' },
          { number: 3, title: '"빌라 전세? 차라리 아파트 월세 갈래요"…세입자들 완전히 달라진 이유', source: '매일경제', date: '2025.01.13', url: '#', summary: '지난 10월 서울 마포구 대장 단지로 꼽히는 마포래미안푸르지오에서는 국민평형으로 불리는 전용면적 84㎡가 보증금 1억원, 월세 360만원에 거래됐다.' },
          { number: 4, title: '모든 조건을 충족시킨 집을 마련했습니다.', source: '매일경제', date: '2025.01.12', url: '#', summary: '테스트' },
          { number: 5, title: '전국 아파트값 하락폭 확대…서울도 상승폭 축소', source: '연합뉴스', date: '2025.01.11', url: '#', summary: '전국 아파트값의 하락폭이 커지는 가운데 서울도 상승폭이 줄어들고 있다. 전셋값은 전국과 서울 모두 상승폭이 감소했다.' },
        ],
      },
      {
        pageId: 'videos',
        type: 'document',
        title: '홍보영상',
        subtitle: '경기도 광주 더포레스트',
        subVisualImage: `${IMG_FOREST}/visual_01.jpg`,
        backgroundImage: `${IMG_FOREST}/visual_02.jpg`,
        image: `${IMG_FOREST_VISIT}/visit02_1.jpg`,
        caution: [
          '본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
        ],
      },
      {
        pageId: 'event',
        type: 'document',
        title: '오픈이벤트',
        subtitle: '경기도 광주 더포레스트',
        subVisualImage: `${IMG_FOREST}/section05_1.jpg`,
        backgroundImage: `${IMG_FOREST}/visual_03.jpg`,
        image: `${IMG_FOREST_VISIT}/visit03_1.jpg`,
        caution: [
          '본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
        ],
      },
      {
        pageId: 'visit',
        type: 'registration',
        title: '방문예약신청',
        subtitle: '방문예약신청을 하시면 분양정보를 발빠르게 받아보실 수 있습니다.',
        subVisualImage: `${IMG_FOREST}/section05_1.jpg`,
        unitTypes: ['59㎡', '84A㎡', '114㎡'],
        formVariant: 'simple',
        backgroundImage: `${IMG_FOREST}/main01.jpg`,
      },
      {
        pageId: 'info-calendar',
        type: 'document',
        title: '분양캘린더',
        subtitle: '경기도 광주 더포레스트',
        subVisualImage: `${IMG_FOREST}/section05_1.jpg`,
        image: `${IMG_FOREST_INFO}/info_01_1.jpg`,
        caution: [
          '본 아파트의 하자 등에 따른 피해보상은 관계법령에 의거 적용됩니다.',
          '본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '각종 개발계획 및 예정사항 등은 추후 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관함을 알려드립니다.',
          '세부 설계내용은 향후 인허가 과정에서 변동될 수 있습니다.',
        ],
      },
      {
        pageId: 'info-guide',
        type: 'document',
        title: '인터넷 청약가이드',
        subtitle: '경기도 광주 더포레스트',
        subVisualImage: `${IMG_FOREST}/section05_1.jpg`,
        image: `${IMG_FOREST_INFO}/info_02_1.jpg`,
        caution: [
          '본 아파트의 하자 등에 따른 피해보상은 관계법령에 의거 적용됩니다.',
          '본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '각종 개발계획 및 예정사항 등은 추후 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관함을 알려드립니다.',
          '세부 설계내용은 향후 인허가 과정에서 변동될 수 있습니다.',
        ],
      },
      {
        pageId: 'info-notice',
        type: 'document',
        title: '모집공고',
        subtitle: '경기도 광주 더포레스트',
        subVisualImage: `${IMG_FOREST}/section05_1.jpg`,
        image: `${IMG_FOREST_INFO}/info_03_1.jpg`,
        caution: [
          '본 아파트의 하자 등에 따른 피해보상은 관계법령에 의거 적용됩니다.',
          '본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '각종 개발계획 및 예정사항 등은 추후 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관함을 알려드립니다.',
          '세부 설계내용은 향후 인허가 과정에서 변동될 수 있습니다.',
        ],
      },
      {
        pageId: 'info-supply',
        type: 'document',
        title: '공급안내',
        subtitle: '경기도 광주 더포레스트',
        subVisualImage: `${IMG_FOREST}/section05_1.jpg`,
        image: `${IMG_FOREST_INFO}/info_04_1.jpg`,
        caution: [
          '본 아파트의 하자 등에 따른 피해보상은 관계법령에 의거 적용됩니다.',
          '본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '각종 개발계획 및 예정사항 등은 추후 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관함을 알려드립니다.',
          '세부 설계내용은 향후 인허가 과정에서 변동될 수 있습니다.',
        ],
      },
      {
        pageId: 'info-subscription',
        type: 'document',
        title: '청약안내',
        subtitle: '경기도 광주 더포레스트',
        subVisualImage: `${IMG_FOREST}/section05_1.jpg`,
        image: `${IMG_FOREST_INFO}/info_05_1.jpg`,
        caution: [
          '본 아파트의 하자 등에 따른 피해보상은 관계법령에 의거 적용됩니다.',
          '본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '각종 개발계획 및 예정사항 등은 추후 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관함을 알려드립니다.',
          '세부 설계내용은 향후 인허가 과정에서 변동될 수 있습니다.',
        ],
      },
      {
        pageId: 'info-documents',
        type: 'document',
        title: '당첨자 서류안내',
        subtitle: '경기도 광주 더포레스트',
        subVisualImage: `${IMG_FOREST}/section05_1.jpg`,
        image: `${IMG_FOREST_INFO}/info_06_1.jpg`,
        caution: [
          '본 아파트의 하자 등에 따른 피해보상은 관계법령에 의거 적용됩니다.',
          '본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '각종 개발계획 및 예정사항 등은 추후 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관함을 알려드립니다.',
          '세부 설계내용은 향후 인허가 과정에서 변동될 수 있습니다.',
        ],
      },
      {
        pageId: 'info-contract',
        type: 'document',
        title: '선착순 계약안내',
        subtitle: '경기도 광주 더포레스트',
        subVisualImage: `${IMG_FOREST}/section05_1.jpg`,
        image: `${IMG_FOREST_INFO}/info_07_1.jpg`,
        caution: [
          '본 아파트의 하자 등에 따른 피해보상은 관계법령에 의거 적용됩니다.',
          '본 사이트의 내용 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '각종 개발계획 및 예정사항 등은 추후 관계기관의 사정에 따라 변경 및 취소될 수 있으며, 이는 당사와 무관함을 알려드립니다.',
          '세부 설계내용은 향후 인허가 과정에서 변동될 수 있습니다.',
        ],
      },
    ],
  },
};
