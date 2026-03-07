import type { CategoryTemplateData } from '../templates/categoryTypes';

export const categorySamples: Record<string, CategoryTemplateData> = {
  woobangiushell: {
    id: 'woobangiushell',
    projectName: '화성우방아이유쉘',
    projectNameEn: 'WOOBANG I U SHELL',
    brandLine: '화성의 새로운 프리미엄 랜드마크',
    contactPhone: '1800-8314',
    contactKakao: '분양퍼스트',

    navItems: [
      {
        label: '사업안내',
        href: '#hero',
        children: [
          { label: '사업개요', href: '#hero' },
          { label: '입지환경', href: '#location' },
          { label: '브랜드소개', href: '#premium' },
          { label: '오시는길', href: '#map' },
        ],
      },
      {
        label: '단지안내',
        href: '#premium',
        children: [
          { label: '프리미엄', href: '#premium' },
          { label: '커뮤니티', href: '#life' },
        ],
      },
      {
        label: '세대안내',
        href: '#interior',
        children: [
          { label: '평면정보', href: '#interior' },
          { label: '인테리어', href: '#interior' },
        ],
      },
      { label: '방문예약신청', href: '#reservation' },
    ],

    hero: {
      backgroundImage: '/images/demo/zenith/slide1.png',
      title: ['비전을 눈 앞에', '자연을 집 앞에'],
      subtitle: '쾌적하고 아름다운 랜드마크가 됩니다',
    },

    premiumCards: [
      { image: '/images/demo/zenith/slide2.png', title: 'NO.1 주거 브랜드', subtitle: '우방이 만드는 프리미엄 주거' },
      { image: '/images/demo/zenith/slide3.png', title: '초품아 교육환경', subtitle: '단지 내 초등학교 배정' },
      { image: '/images/demo/zenith/slide4.png', title: '851세대 랜드마크', subtitle: '대단지 프리미엄 생활' },
      { image: '/images/demo/zenith/slide5.png', title: '전세대 남향 배치', subtitle: '쾌적한 채광과 조망' },
      { image: '/images/demo/zenith/slide6.png', title: '라이프스타일', subtitle: '특화 커뮤니티 시설' },
    ],

    features: {
      title: '다시 없을 마지막 프리미엄',
      subtitle: '화성우방아이유쉘만의 특별한 혜택을 확인하세요.',
      checkpoints: [
        '어린이 전용 물놀이터',
        '국공립 어린이집 2개소',
        '어린이 커뮤니티 특화',
        '미세먼지 제거 환기시스템',
        '중도금 전액 무이자',
        '더블역세권 (GTX 예정)',
        '풀옵션 & 발코니확장 무상',
        '선착순 특별혜택 제공',
      ],
      images: [
        { src: '/images/demo/zenith/slide7.png', alt: '물놀이터' },
        { src: '/images/demo/zenith/slide8.png', alt: '어린이도서관' },
        { src: '/images/demo/luxia/slide3.png', alt: '환기시스템' },
        { src: '/images/demo/luxia/slide5.png', alt: '카페라운지' },
      ],
    },

    banners: [
      {
        backgroundImage: '/images/demo/dalseo/slide1.png',
        title: '발코니 확장 무상 / 중도금 무이자',
        subtitle: '마포4지구 재개발 최대수혜 프리미엄',
      },
      {
        backgroundImage: '/images/demo/dalseo/slide4.png',
        title: '소형주택 299세대 / 오피스텔 34실',
        subtitle: '분양 방문예약 문의',
        cta: '방문예약 문의하기',
      },
      {
        backgroundImage: '/images/demo/dalseo/slide7.png',
        title: '선착순 분양중',
        subtitle: '마지막 프리미엄 잔여세대 한정 특별혜택',
        cta: '특별혜택 확인하기',
      },
    ],

    premiumLife: [
      {
        tag: 'premium',
        title: '영어도서관 & 블럭방',
        description: '아이들의 창의력과 상상력을 키워주는 특화 커뮤니티 공간. 영어 원서 도서관과 블럭 놀이 공간을 통해 놀이와 학습을 동시에 경험할 수 있습니다.',
        image: '/images/demo/luxia/slide6.png',
      },
      {
        tag: 'premium',
        title: '어린이 물놀이터',
        description: '단지 내 조성되는 어린이 전용 물놀이터. 여름철 시원한 물놀이는 물론, 사계절 다양한 놀이 프로그램을 즐길 수 있는 특화 공간입니다.',
        image: '/images/demo/luxia/slide7.png',
      },
      {
        tag: 'premium',
        title: '커뮤니티 시설',
        description: '피트니스센터, 골프연습장, 독서실, GX룸 등 입주민을 위한 프리미엄 커뮤니티 시설이 단지 내에 조성됩니다.',
        image: '/images/demo/zenith/slide5.png',
      },
    ],

    location: {
      title: '화성 중심 입지의 빛나는 미래비전',
      subtitle: '1,157세대 미니신도시급 대단지 프리미엄',
      mainImage: '/images/demo/dalseo/slide2.png',
      tabs: [
        {
          id: 'traffic',
          icon: 'traffic',
          label: '교통',
          title: '쾌속 교통망',
          points: [
            '동탄역 SRT/GTX-A 이용 (예정)',
            '수도권 제2순환고속도로 인접',
            '1호선 병점역 차량 10분대',
            '서해안고속도로, 평택-제천고속도로',
            '동탄트램 연장 노선 계획',
          ],
        },
        {
          id: 'nature',
          icon: 'nature',
          label: '생활',
          title: '풍부한 생활 인프라',
          points: [
            '롯데마트, 홈플러스 차량 5분',
            '화성종합경기타운 인접',
            '동탄 센트럴파크 도보권',
            '봉담 행정복합타운 이용',
            '화성시청, 보건소, 주민센터',
          ],
        },
        {
          id: 'edu',
          icon: 'edu',
          label: '교육',
          title: '우수한 교육환경',
          points: [
            '기안초등학교 도보 통학 (예정)',
            '기안중학교 인접',
            '동탄 학원가 차량 10분',
            '국공립어린이집 2개소 단지 내',
            '반경 1km 내 학교 5개교',
          ],
        },
        {
          id: 'vision',
          icon: 'vision',
          label: '비전',
          title: '미래 발전 비전',
          points: [
            'GTX-A 동탄역 개통 (수혜)',
            '동탄2신도시 개발 완료 단계',
            '삼성 반도체 클러스터 인접',
            '화성 국제테마파크 (예정)',
            '반월특수산업단지 접근성',
          ],
        },
      ],
    },

    interiors: [
      {
        title: '거실',
        image: '/images/demo/luxia/slide4.png',
        description: '넓은 거실 공간에 고급 자재를 적용한 프리미엄 인테리어.\n화이트톤 마감재와 간접조명으로 격조 높은 주거 공간을 완성합니다.',
      },
      {
        title: '주방',
        image: '/images/demo/luxia/slide6.png',
        description: '시스템 키친과 빌트인 가전으로 완성한 프리미엄 주방.\n넓은 아일랜드 식탁과 풍부한 수납공간을 제공합니다.',
      },
      {
        title: '욕실',
        image: '/images/demo/luxia/slide7.png',
        description: '호텔급 욕실 인테리어와 고급 위생도기.\n레인샤워, 세면대 등 프리미엄 욕실 사양을 적용했습니다.',
      },
    ],

    map: {
      title: '새로운 랜드마크의 탄생',
      subtitle: '화성우방아이유쉘 오시는 길',
      image: '/images/demo/dalseo/slide3.png',
      modelHouseAddress: '경기도 화성시 기배로30번길 5-9',
      siteAddress: '경기도 화성시 기배로30번길 5-9',
    },

    checklist: {
      items: ['중도금 전액무이자', '발코니 확장 무상', '무제한 전매가능', '전세대 풀옵션 무상'],
      ctaText: '모델하우스 방문예약하기',
    },

    theme: {
      primary: '#1e40af',
      secondary: '#3b82f6',
      footerText: '화성우방아이유쉘 분양 홍보관',
      footerInfo: {
        developer: '(주)우방',
        constructor: '(주)우방건설',
        bizNumber: '314-86-39956',
      },
      disclaimer: '본 홍보물의 CG, 이미지 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 차이가 있을 수 있습니다. 각종 개발계획은 관계기관의 사정에 따라 변경 또는 취소될 수 있습니다.',
    },
  },
};
