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
  'premium-aurum': {
    id: 'premium-aurum',
    projectName: '아우름 레지던스 잠실',
    projectNameEn: 'AURUM',
    brandLine: '잠실유일의 시니어 레지던스',
    contactPhone: '0000-0000',

    navItems: [
      { label: 'HOME', href: '#home' },
      { 
        label: '사업개요', 
        href: '#overview',
        children: [
          { label: '사업개요', pageId: 'overview' },
        ],
      },
      { 
        label: '입지환경', 
        href: '#location',
        children: [
          { label: '입지환경', pageId: 'location' },
        ],
      },
      { 
        label: '프리미엄', 
        href: '#premium',
        children: [
          { label: '프리미엄', pageId: 'premium' },
        ],
      },
      { 
        label: '단지안내', 
        href: '#community',
        children: [
          { label: '단지안내', pageId: 'community' },
        ],
      },
      { 
        label: '평형안내', 
        href: '#units',
        children: [
          { label: '평형안내', pageId: 'units' },
        ],
      },
      { 
        label: '갤러리', 
        href: '#gallery',
        children: [
          { label: '갤러리', pageId: 'gallery' },
        ],
      },
      { 
        label: '언론보도', 
        href: '#news',
        children: [
          { label: '언론보도', pageId: 'news' },
        ],
      },
    ],

    hero: {
      slides: [
        {
          image: `https://cdn.imweb.me/thumbnail/20251126/765d0ada9cb98.png`,
          title: ['잠실유일의 시니어 레지던스', '아우름 레지던스 잠실'],
          subtitle: '서울 1위 입지 송파구 잠실 유일의\n스마트 시니어 레지던스',
          videoId: '1139929131',
          videoType: 'vimeo',
        },
      ],
    },

    brand: {
      image: `${IMG_AU}/0421b530aaa61.png`,
      content: `Aurum : 라틴어로 '금(GOLD)'을 뜻하며, 동시에 '새벽'과 '빛나다'의 의미를 품고 있습니다.

아우름은 인생의 두 번째 서른 살을 동트는 새벽처럼 새롭게 열고,
찬란히 빛나는 여정으로 채워가길 바라는 마음으로 준비했습니다.

똑똑하고 멋진 선배님들을 위한 집.
아우름 레지던스 잠실에서 새로운 인생을 시작하세요.`,
    },

    overview: {
      title: '사업개요',
      subtitle: '서울특별시 송파구 지하 1층 ~ 지상 11층 노인복지주택',
      image: `${IMG_AU}/92cc064255920.png`,
      items: [
        { label: '위치', value: '서울특별시 송파구' },
        { label: '규모', value: '지하 1층 ~ 지상 11층' },
        { label: '용도', value: '노인복지주택' },
      ],
    },

    community: {
      title: '스카이라운지ㆍ쉐도우케어ㆍ트로핏',
      subtitle: '친근한 우리 동네에서 여유로운 시간을 선물합니다.',
      items: [
        {
          image: `${IMG_AU}/2413e205db1e5.png`,
          title: '스카이라운지',
          description: '',
        },
        {
          image: `${IMG_AU}/d41532b7b3973.png`,
          title: '쉐도우케어',
          description: '',
        },
        {
          image: `${IMG_AU}/19eb1fd0cfa59.png`,
          title: '트로핏(트로트 기반 시니어 피트니스)',
          description: '',
        },
      ],
    },

    premium: {
      title: '아우름 레지던스 잠실',
      subtitle: 'Prestige Service 4',
      features: [
        {
          image: `${IMG_AU}/723feac96a7cc.png`,
          number: '1',
          title: '프레스티지 건강관리 서비스',
          description: '편리하고 빠른 지역 의료진 매칭 솔루션\n• 메디컬 멘토 건강상담 서비스, 상급병원 진료 예약 라이딩 서비스\n• 누구나 쉽게 흥이나는 트롯핏 서비스, AI 쉐도우 헬스케어 서비스',
        },
        {
          image: `${IMG_AU}/314d68a2aafd7.png`,
          number: '2',
          title: '버틀러 서비스',
          description: '여유로운 시간을 위한 프라이빗 라이프 스타일\n• 컨시어지 서비스, 시니어 의전 서비스 등 도움 서비스\n• 하우스 키핑 등 생활 도움 서비스',
        },
        {
          image: `${IMG_AU}/6a318a114f93c.png`,
          number: '3',
          title: '친환경 식단 서비스',
          description: '지속적인 건강 유지를 위한 F&B\n• 건강을 위한 제철 음식 제공\n• 맞춤형 저염식, 라이프닝 식단 서비스',
        },
        {
          image: `${IMG_AU}/14c0130bf7dd7.png`,
          number: '4',
          title: '평생 학습 서비스',
          description: '자기계발과 성장에 도움이 되는 풍성한 문화생활\n• 개인 맞춤형 프로그램 및 정기 멘토링 프로그램\n• 지역 연계형 사회 공헌 프로그램 제공',
        },
      ],
    },

    life: {
      title: '건강과 생활을 함께 챙겨주는 집',
      subtitle: '',
      cards: [
        { image: 'https://cdn.imweb.me/thumbnail/20251202/1471f09f05cd2.png', title: '현관_스마트미러', subtitle: '' },
        { image: 'https://cdn.imweb.me/thumbnail/20251202/0772496061eeb.png', title: '대청마루', subtitle: '' },
        { image: 'https://cdn.imweb.me/thumbnail/20251202/685c3887e1d72.png', title: '거실', subtitle: '' },
        { image: 'https://cdn.imweb.me/thumbnail/20251202/ef5c08199a347.png', title: '주방_아일랜드식탁', subtitle: '' },
        { image: 'https://cdn.imweb.me/thumbnail/20251202/422ec84a6bf3e.png', title: '주방_김치냉장고', subtitle: '' },
        { image: 'https://cdn.imweb.me/thumbnail/20251202/c7529f96ef7fe.png', title: '주방_리프트수납장', subtitle: '' },
        { image: 'https://cdn.imweb.me/thumbnail/20251202/84b088e0b6a59.png', title: '복도_월패드', subtitle: '' },
        { image: 'https://cdn.imweb.me/thumbnail/20251202/8073473accd91.png', title: '침실_스카이라이트', subtitle: '' },
        { image: 'https://cdn.imweb.me/thumbnail/20251202/de8136bfa4b30.png', title: '침실_스마트쉐도우케어', subtitle: '' },
        { image: 'https://cdn.imweb.me/thumbnail/20251202/45fdb34c62902.png', title: '화장실_스마트미러', subtitle: '' },
        { image: 'https://cdn.imweb.me/thumbnail/20251202/b3798e0197200.png', title: '세탁실_샤워실', subtitle: '' },
        { image: 'https://cdn.imweb.me/thumbnail/20251202/cdb8ba85f6e07.png', title: '파우더', subtitle: '' },
        { image: 'https://cdn.imweb.me/thumbnail/20251202/8c5f868c45296.png', title: '작은방_의류관리기', subtitle: '' },
        { image: 'https://cdn.imweb.me/thumbnail/20251202/da4dc001d4e81.png', title: '작은방_힐링공간', subtitle: '' },
        { image: 'https://cdn.imweb.me/thumbnail/20251202/c359eb521dbb8.png', title: '작은방_화장실', subtitle: '' },
      ],
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
      modelHouseImage: `${IMG_AU}/92cc064255920.png`,
      siteImage: `${IMG_AU}/cc80dac950821.png`,
      modelHouseAddress: '서울시 송파구 백제고분로 502',
      siteAddress: '서울시 송파구 방이동 163-4외',
    },

    registration: {
      title: '상담안내',
      subtitle: '아우름 레지던스 잠실 주택홍보관은 고객님들의 소중한 시간을 절약하고, 정확한 정보 전달 및 대기 없는 원활한 관람을 위해 온라인 예약제로 운영됩니다.',
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
      footerText: '아우름 레지던스 잠실',
      footerInfo: {
        developer: '주식회사 아우름 레지던스',
        constructor: '',
        bizNumber: '000-00-00000',
      },
      disclaimer: '※ 본 홈페이지의 CG, 사진, 그래픽, 일러스트 등은 이해를 돕고자 제작된 것으로 실제와 차이가 있을 수 있습니다. 형태 구성, 사용자의 동선, 실내구획 등 마감재는 인허가 과정이나 실제 시공사 현장 여건 등에 따라 일부 변경될 수 있습니다. ※ 본 커뮤니티 시설의 규모, 계획, 제공되는 장비 및 프로그램은 사업/시공 계획에 따라 변경 또는 삭제될 수 있으며, 향후 운영 관리 중에도 추가로 변동될 수 있습니다. ※ 본 홈페이지 제작과정상 오탈자가 있을 수 있으므로 정확한 내용은 견본전시관에서 확인하시기 바랍니다.',
    },

    subPages: [
      {
        pageId: 'overview',
        type: 'overview',
        title: '사업개요',
        subtitle: 'PROJECT OVERVIEW',
        subVisualImage: `${IMG_AU}/bac1b16dc579d.png`,
        contentTitle: '사업개요',
        mainImage: `${IMG_AU}/bac1b16dc579d.png`,
        infoLabel: 'OVERVIEW',
        items: [
          { label: '대지위치', value: '서울시 송파구 방이동 163-3, 4' },
          { label: '지역/지구', value: '2종일반주거지역(도시지역)' },
          { label: '대지면적', value: '872.1 m²' },
          { label: '건축면적', value: '440.81 m²' },
          { label: '연면적', value: '2,746.83 m²' },
          { label: '용도', value: '노유자시설, 노인복지시설' },
          { label: '규모', value: '-' },
          { label: '주차대수', value: '-' },
          { label: '건폐율', value: '-' },
          { label: '용적율', value: '-' },
        ],
        caution: [
          '※ 본 홈페이지의 CG, 사진, 그래픽, 일러스트 등은 이해를 돕고자 제작된 것으로 실제와 차이가 있을 수 있습니다.',
          '형태 구성, 사용자의 동선, 실내구획 등 마감재는 인허가 과정이나 실제 시공사 현장 여건 등에 따라 일부 변경될 수 있습니다.',
          '※ 본 커뮤니티 시설의 규모, 계획, 제공되는 장비 및 프로그램은 사업/시공 계획에 따라 변경 또는 삭제될 수 있으며, 향후 운영 관리 중에도 추가로 변동될 수 있습니다.',
          '※ 본 홈페이지 제작과정상 오탈자가 있을 수 있으므로 정확한 내용은 견본전시관에서 확인하시기 바랍니다.',
        ],
      },
      {
        pageId: 'location',
        type: 'location',
        title: '입지환경',
        subtitle: 'LOCATION',
        subVisualImage: `${IMG_AU}/57b6e11017a1a.png`,
        contentTitle: '아우름 레지던스 잠실 입지환경',
        contentDesc: '지하철 2, 5, 8, 9호선 인접으로 서울 전역으로 빠르고 편리하게 이동 가능합니다.<br>잠실의 풍부하고 편리한 지역 인프라를 모두 누리실 수 있습니다.<br>다양한 공원이 인접하여 도심 속에서도 여유롭고 쾌적한 생활을 즐길 수 있습니다.',
        mainImage: `${IMG_AU}/43e936c1f64f4.png`,
        poiGroups: [
          {
            category: '교통',
            title: '교통 접근성',
            items: [
              '지하철 5, 9, 8, 2호선 및 다양한 버스 노선이 인접한 우수한 교통 접근성',
            ],
            image: `${IMG_AU}/e683849925f33.png`,
          },
          {
            category: '공원',
            title: '다양한 공원 접근성',
            items: [
              '서울의 역사, 문화, 체육시설, 자연을 품은 올림픽공원, 석촌호수, 한강시민공원 접근 편리',
            ],
            image: `${IMG_AU}/bb687a52acd8f.png`,
          },
          {
            category: '생활',
            title: '잠실 생활권',
            items: [
              '롯데백화점, 롯데타워 몰, 시그니엘 호텔, 송리단길 등 전세계 사랑받는 지역 인프라',
            ],
            image: `${IMG_AU}/d6537f3781bda.png`,
          },
          {
            category: '의료',
            title: '의료',
            items: [
              '세계최고 병원 22위, 국내 1위 서울아산병원 MOU 구축 계획 접근 편리',
            ],
            image: `${IMG_AU}/5cda42220f0d8.png`,
          },
        ],
        caution: [
          '※ 상기 지역도 및 이미지는 소비자의 이해를 돕기 위해 제작된 것으로 실제와 차이가 있을 수 있습니다.',
          '※ 본 홈페이지에 표시된 교통계획 및 내용, 사업계획은 사업주체, 국가기관, 지자체 및 기타 관련 기관의 사업추진 과정 중 변경, 지연, 취소 될 수 있습니다.',
          '※ 본 홈페이지에 사용된 사진, 이미지, CG 등은 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
        ],
      },
      {
        pageId: 'premium',
        type: 'complexPremium',
        title: '프리미엄',
        subtitle: 'PREMIUM',
        subVisualImage: `${IMG_AU}/723feac96a7cc.png`,
        premiumSubtitle: 'Prestige Service 4',
        premiumDesc: '아우름 레지던스 잠실',
        items: [
          {
            number: '1',
            title: '프레스티지 건강관리 서비스',
            description: '편리하고 빠른 지역 의료진 매칭 솔루션\n• 메디컬 멘토 건강상담 서비스, 상급병원 진료 예약 라이딩 서비스\n• 누구나 쉽게 흥이나는 트롯핏 서비스, AI 쉐도우 헬스케어 서비스',
            image: `${IMG_AU}/723feac96a7cc.png`,
          },
          {
            number: '2',
            title: '버틀러 서비스',
            description: '여유로운 시간을 위한 프라이빗 라이프 스타일\n• 컨시어지 서비스, 시니어 의전 서비스 등 도움 서비스\n• 하우스 키핑 등 생활 도움 서비스',
            image: `${IMG_AU}/314d68a2aafd7.png`,
          },
          {
            number: '3',
            title: '친환경 식단 서비스',
            description: '지속적인 건강 유지를 위한 F&B\n• 건강을 위한 제철 음식 제공\n• 맞춤형 저염식, 라이프닝 식단 서비스',
            image: `${IMG_AU}/6a318a114f93c.png`,
          },
          {
            number: '4',
            title: '평생 학습 서비스',
            description: '자기계발과 성장에 도움이 되는 풍성한 문화생활\n• 개인 맞춤형 프로그램 및 정기 멘토링 프로그램\n• 지역 연계형 사회 공헌 프로그램 제공',
            image: `${IMG_AU}/14c0130bf7dd7.png`,
          },
        ],
        caution: [
          '※ 본 홈페이지의 CG, 사진, 그래픽, 일러스트 등은 이해를 돕고자 제작된 것으로 실제와 차이가 있을 수 있습니다.',
          '형태 구성, 사용자의 동선, 실내구획 등 마감재는 인허가 과정이나 실제 시공사 현장 여건 등에 따라 일부 변경될 수 있습니다.',
          '※ 본 커뮤니티 시설의 규모, 계획, 제공되는 장비 및 프로그램은 사업/시공 계획에 따라 변경 또는 삭제될 수 있으며, 향후 운영 관리 중에도 추가로 변동될 수 있습니다.',
        ],
      },
      {
        pageId: 'community',
        type: 'complexInfo',
        title: '단지안내',
        subtitle: 'COMMUNITY',
        subVisualImage: `${IMG_AU}/2413e205db1e5.png`,
        caption: '아우름 레지던스 잠실에서 누리는 완벽한 \'올인원(All-in-One)\' 라이프 케어',
        contentTitle: '피트니스와 사우나, 그리고 건강관리 서비스까지',
        contentDesc: '단순한 주거 공간을 넘어, 아우름 레지던스 잠실은 고객 맞춤형 라이프스타일을 완성합니다.<br>피트니스 센터에서의 활력, 스카이라운지에서의 휴식, 그리고 건강관리 서비스까지!<br>잠실 아우름 레지던스에서 격이 다른 토탈 라이프 케어 서비스를 경험하실 수 있습니다.',
        images: [
          {
            image: 'https://cdn.imweb.me/thumbnail/20251126/87afb6b49fc57.png',
          },
          {
            image: 'https://cdn.imweb.me/thumbnail/20251126/71ef2e40f82f6.png',
          },
          {
            image: 'https://cdn.imweb.me/thumbnail/20251126/281b2f6badcb0.png',
            title: '카페테리아, 야외테라스',
          },
          {
            image: 'https://cdn.imweb.me/thumbnail/20251126/cfe1ad2f6d39e.png',
            title: '레스토랑, 야외테라스',
          },
          {
            image: 'https://cdn.imweb.me/thumbnail/20251126/e8f4d92ca3087.png',
            title: '피트니스, 라운지',
          },
          {
            image: 'https://cdn.imweb.me/thumbnail/20251126/d00a584f1c8ea.png',
            title: '간호사실, 물리치료사실, 사우나',
          },
        ],
        caution: [
          '※ 본 홈페이지에 표시된 교통계획 및 내용, 사업계획은 사업주체, 국가기관, 지자체 및 기타 관련 기관의 사업추진 과정 중 변경, 지연, 취소 될 수 있습니다.',
          '※ 본 홈페이지에 사용된 사진, 이미지, CG 등은 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 형태 구성, 사용자 동선, 실내구획 및 마감재는 인허가 과정이나 실제 시공사 현정 여건 등에 따라 일부 변경될 수 있습니다.',
        ],
      },
      {
        pageId: 'units',
        type: 'unit',
        title: '평형안내',
        subtitle: 'UNIT',
        subVisualImage: `${IMG_AU}/92cc064255920.png`,
        variants: [
          {
            typeLabel: 'A1 Type',
            count: '16세대',
            description: '실면적 약 21PY\n#2개의 발코니\n#맞통풍\n#방2, 욕실2',
            areas: [
              { label: '실사용면적', value: '69.11 m²' },
              { label: '계약면적', value: '71.29 m²' },
              { label: '전용면적', value: '50.21 m²' },
              { label: '서비스면적', value: '18.90 m²' },
            ],
            image: 'https://cdn.imweb.me/upload/S202507302b81348873851/a1-type.png',
          },
          {
            typeLabel: 'A2 Type',
            count: '8세대',
            description: '실면적 약 25PY\n#3개의 발코니\n#맞통풍\n#방2, 욕실2',
            areas: [
              { label: '실사용면적', value: '81.63 m²' },
              { label: '계약면적', value: '71.29 m²' },
              { label: '전용면적', value: '50.21 m²' },
              { label: '서비스면적', value: '31.42 m²' },
            ],
            image: 'https://cdn.imweb.me/upload/S202507302b81348873851/a2-type.png',
          },
          {
            typeLabel: 'B Type',
            count: '8세대',
            description: '실면적 약 17PY\n#2개의 발코니\n#아일랜드 주방\n#방2, 욕실1\n#독신가구 추천',
            areas: [
              { label: '실사용면적', value: '56.85 m²' },
              { label: '계약면적', value: '52.82 m²' },
              { label: '전용면적', value: '37.20 m²' },
              { label: '서비스면적', value: '19.65 m²' },
            ],
            image: 'https://cdn.imweb.me/upload/S202507302b81348873851/b-type.png',
          },
          {
            typeLabel: 'C Type',
            count: '8세대',
            description: '실면적 약 19PY\n#3개의 발코니\n#아일랜드 주방\n#방2, 욕실1\n#독신가구 추천',
            areas: [
              { label: '실사용면적', value: '63.01 m²' },
              { label: '계약면적', value: '55.76 m²' },
              { label: '전용면적', value: '39.27 m²' },
              { label: '서비스면적', value: '23.74 m²' },
            ],
            image: 'https://cdn.imweb.me/upload/S202507302b81348873851/c-type.png',
          },
          {
            typeLabel: 'A1+A1 Type',
            count: '커넥팅 룸',
            description: '실면적 약 42PY\n#4개의 발코니\n#아일랜드 주방\n#방4, 욕실4',
            areas: [
              { label: '실사용면적', value: '138.22 m²' },
              { label: '계약면적', value: '142.58 m²' },
              { label: '전용면적', value: '100.42 m²' },
              { label: '서비스면적', value: '37.80 m²' },
            ],
            image: 'https://cdn.imweb.me/upload/S202507302b81348873851/a1a1-type.png',
          },
          {
            typeLabel: 'B+C Type',
            count: '커넥팅 룸',
            description: '실면적 약 36PY\n#5개의 발코니\n#아일랜드 주방\n#방4, 욕실2',
            areas: [
              { label: '실사용면적', value: '119.86 m²' },
              { label: '계약면적', value: '108.58 m²' },
              { label: '전용면적', value: '76.47 m²' },
              { label: '서비스면적', value: '43.39 m²' },
            ],
            image: 'https://cdn.imweb.me/upload/S202507302b81348873851/bc-type.png',
          },
        ],
        caution: [
          '※ 본 홈페이지에 사용된 사진, 이미지, CG 등은 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있으며, 형태 구성, 사용자 동선, 실내구획 및 마감재는 인허가 과정이나 실제 시공사 현정 여건 등에 따라 일부 변경될 수 있습니다.',
          '※ 본 커뮤니티 시설의 규모, 계획, 제공되는 장비 및 프로그램은 사업·시공 계획에 따라 변경 또는 삭제될 수 있으며, 향후 운영 관리 중에도 추가로 변동될 수 있습니다.',
        ],
      },
      {
        pageId: 'gallery',
        type: 'gallery',
        title: '갤러리',
        subtitle: 'GALLERY',
        subVisualImage: 'https://cdn.imweb.me/thumbnail/20251202/1471f09f05cd2.png',
        images: [
          { image: 'https://cdn.imweb.me/thumbnail/20251202/1471f09f05cd2.png', title: '현관_스마트미러' },
          { image: 'https://cdn.imweb.me/thumbnail/20251202/0772496061eeb.png', title: '대청마루' },
          { image: 'https://cdn.imweb.me/thumbnail/20251202/685c3887e1d72.png', title: '거실' },
          { image: 'https://cdn.imweb.me/thumbnail/20251202/ef5c08199a347.png', title: '주방_아일랜드식탁' },
          { image: 'https://cdn.imweb.me/thumbnail/20251202/422ec84a6bf3e.png', title: '주방_김치냉장고' },
          { image: 'https://cdn.imweb.me/thumbnail/20251202/c7529f96ef7fe.png', title: '주방_리프트수납장' },
          { image: 'https://cdn.imweb.me/thumbnail/20251202/84b088e0b6a59.png', title: '복도_월패드' },
          { image: 'https://cdn.imweb.me/thumbnail/20251202/8073473accd91.png', title: '침실_스카이라이트' },
          { image: 'https://cdn.imweb.me/thumbnail/20251202/de8136bfa4b30.png', title: '침실_스마트쉐도우케어' },
          { image: 'https://cdn.imweb.me/thumbnail/20251202/45fdb34c62902.png', title: '화장실_스마트미러' },
          { image: 'https://cdn.imweb.me/thumbnail/20251202/b3798e0197200.png', title: '세탁실_샤워실' },
          { image: 'https://cdn.imweb.me/thumbnail/20251202/cdb8ba85f6e07.png', title: '파우더' },
          { image: 'https://cdn.imweb.me/thumbnail/20251202/8c5f868c45296.png', title: '작은방_의류관리기' },
          { image: 'https://cdn.imweb.me/thumbnail/20251202/da4dc001d4e81.png', title: '작은방_힐링공간' },
          { image: 'https://cdn.imweb.me/thumbnail/20251202/c359eb521dbb8.png', title: '작은방_화장실' },
        ],
        caution: [
          '※ 본 홈페이지의 CG, 사진, 그래픽, 일러스트 등은 이해를 돕고자 제작된 것으로 실제와 차이가 있을 수 있습니다.',
        ],
      },
      {
        pageId: 'news',
        type: 'news',
        title: '언론보도',
        subtitle: 'NEWS',
        subVisualImage: `${IMG_AU}/92cc064255920.png`,
        items: [
          { number: 1, title: '[실버타운 2.0] (67) 노년의 집, \'존엄\'의 무대···K-시니어 주거 표준 \'아우름 레지던스\'', source: '여성경제신문', date: '2025.12.17', url: '#' },
          { number: 2, title: '현관 \'스마트 미러\' 앞에 서니 건강 정보에 조언까지', source: '동아일보', date: '2025.12.16', url: '#' },
          { number: 3, title: '알아서 다 해준다더니... 요즘 \'실버주택\' 이 정도일 줄은 [집코노미-집100세 시대]', source: '한국경제', date: '2025.12.11', url: '#' },
          { number: 4, title: '초고령사회 돌봄 공백 메운다... AIoT 스마트홈, 시니어케어 新표준 자리매김', source: '디지털타임즈', date: '2025.12.04', url: '#' },
          { number: 5, title: '스마트홈,MZ세대 新 연말 효도선물로 부상··· \'기술이 집 지키는 시대\'', source: '서울경제', date: '2025.12.04', url: '#' },
          { number: 6, title: '"K-시니어를 위한 감성 건축과 기술의 융합의 무대"', source: '메세나 뉴스 부동산 전문', date: '2025.12.04', url: '#' },
          { number: 7, title: '"수면 패턴, 생체 리듬 조절...AI 시니어주택 선보일것"', source: '한국경제', date: '2025.12.01', url: '#' },
          { number: 8, title: '역이민자가 선택한 잠실, 모던 한옥 감성 시니어 레지던스', source: '이코노미스트', date: '2025.11.21', url: '#' },
          { number: 9, title: '"넘어져도 안심"... 아우름 레지던스, 세심한 안전 배려', source: '비욘드포스트', date: '2025.11.19', url: '#' },
          { number: 10, title: '아우름 레지던스, 똑똑한 기술 담은 스마트침대 등 최신 기술 선봬', source: '세계비즈', date: '2025.11.19', url: '#' },
          { number: 11, title: '"한옥 같은 따뜻함이 살아있는 집"... 아우름 레지던스, 편안한 공간 담아', source: '공감신문', date: '2025.11.19', url: '#' },
          { number: 12, title: '감성·편의·안전 통합 솔루션으로 프리미엄을 더하다 - \'아우름 잠실\'과 세비앙의 만남', source: '리빙케어 전문기업 \'세비앙\'', date: '2025.10.30', url: '#' },
          { number: 13, title: '서동원 홈플릭스 의장 "시니어 주거, 감성 건축과 기술의 융합 무대"', source: 'BIGDATAnews', date: '2025.10.29', url: '#' },
          { number: 14, title: '\'삶의 질 회복\' 설계 : K-시니어 하우징, 60대 여성의 로망을 담다', source: '더파워뉴스', date: '2025.10.29', url: '#' },
          { number: 15, title: '아우름 시니어 레지던스 공간 플랜테리어', source: '플라워샵비즈니스', date: '2025.10.29', url: '#' },
          { number: 16, title: '\'느린 질서\'의 재림 : K-시니어 하우징, 한옥에서 AI 플랫폼으로 진화', source: '공감신문', date: '2025.10.29', url: '#' },
          { number: 17, title: '두번째 서른살 \'시니어 라이프\' 시대 개막', source: '경북신문', date: '2025.10.29', url: '#' },
          { number: 18, title: '살기만 해도 젊어지는 집, \'아우름 레지던스 잠실\'의 비밀', source: '경향신문', date: '2025.10.24', url: '#' },
          { number: 19, title: '시니어 하우징 시장, 스타트업 각축전 벌여', source: '동아일보', date: '2025.10.23', url: '#' },
          { number: 20, title: '홈플릭스, 시니어 레지던스로 \'라이프테크\' 시대 열어', source: '서울경제TV', date: '2025.10.23', url: '#' },
          { number: 21, title: '돌봄에서 투자로...스타트업이 이끄는 시니어 주거 혁신, 새 길을 연 홈플릭스', source: '이코노미스트', date: '2025.10.23', url: '#' },
          { number: 22, title: '도심형 vs 수도권형, 시니어 레지던스의 두 얼굴', source: '경북신문', date: '2025.10.23', url: '#' },
          { number: 23, title: '시니어 하우징 시장, 스타트업이 바꾼다', source: '한국경제', date: '2025.10.23', url: '#' },
          { number: 24, title: '아우름 레지던스 잠실, 29일 송파구에 주택홍보관 개관', source: '땅집GO', date: '2025.10.22', url: '#' },
        ],
      },
      {
        pageId: 'videos',
        type: 'video',
        title: '동영상',
        subtitle: 'VIDEO',
        subVisualImage: `${IMG_AU}/2898761362a2d.jpg`,
        videos: [
          {
            videoId: '_gLWz7BDLbg',
            thumbnail: `${IMG_AU}/2898761362a2d.jpg`,
            title: '아우름 레지던스 잠실 소개 영상',
          },
          {
            videoId: 'o9AwMsGV72M',
            thumbnail: `${IMG_AU}/78c53d731b1c0.jpg`,
            title: '아우름 레지던스 잠실 시설 영상',
          },
        ],
      },
    ],
  },
};
