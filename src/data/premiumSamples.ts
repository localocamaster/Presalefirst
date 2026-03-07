import type { PremiumTemplateData } from '../templates/premiumTypes';

const IMG = '/images/demo/premium';

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
};
