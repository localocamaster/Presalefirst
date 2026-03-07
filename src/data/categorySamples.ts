import type { CategoryTemplateData } from '../templates/categoryTypes';

export const categorySamples: Record<string, CategoryTemplateData> = {
  woobangiushell: {
    id: 'woobangiushell',
    projectName: '화성우방아이유쉘',
    projectNameEn: 'WOOBANG I U SHELL',
    brandLine: '화성의 새로운 프리미엄 랜드마크',
    contactPhone: '0000-0000',
    contactKakao: '분양퍼스트',

    navItems: [
      {
        label: '사업안내',
        href: '/demo/woobangiushell/business/overview',
        children: [
          { label: '사업개요', href: '/demo/woobangiushell/business/overview' },
          { label: '입지환경', href: '/demo/woobangiushell/business/location' },
          { label: '브랜드소개', href: '/demo/woobangiushell/business/brand' },
          { label: '오시는길', href: '/demo/woobangiushell/business/map' },
        ],
      },
      {
        label: '단지안내',
        href: '/demo/woobangiushell/complex/guide',
        children: [
          { label: '단지안내', href: '/demo/woobangiushell/complex/guide' },
          { label: '프리미엄', href: '/demo/woobangiushell/complex/premium' },
          { label: '동호수배치도', href: '/demo/woobangiushell/complex/floorplan' },
          { label: '프라임', href: '/demo/woobangiushell/complex/prime' },
        ],
      },
      {
        label: '세대안내',
        href: '/demo/woobangiushell/unit/floorplan',
        children: [
          { label: '평면정보', href: '/demo/woobangiushell/unit/floorplan' },
          { label: '인테리어', href: '/demo/woobangiushell/unit/interior' },
        ],
      },
      { label: '방문예약신청', href: '#reservation' },
    ],

    hero: {
      backgroundImage: '/images/demo/woobangiushell/1765442639_1.슬라이드메인1.webp',
      title: ['비전을 눈 앞에', '자연을 집 앞에'],
      subtitle: '쾌적하고 아름다운 랜드마크가 됩니다',
    },
    heroSlides: [
      {
        backgroundImage: '/images/demo/woobangiushell/1765442639_1.슬라이드메인1.webp',
        title: ['비전을 눈 앞에', '자연을 집 앞에'],
        subtitle: '쾌적하고 아름다운 랜드마크가 됩니다',
      },
      {
        backgroundImage: '/images/demo/woobangiushell/hero2.webp',
        title: ['자연과 조화로운 단지설계로'],
        subtitle: '탁 트인 조망 속 편안한 생활',
      },
    ],

    premiumCards: [
      { image: '/images/demo/woobangiushell/1753336110_1.자연.webp', title: 'NO.1 주거 브랜드', subtitle: '대한민국을 대표하는 프리미엄 주거 브랜드' },
      { image: '/images/demo/woobangiushell/1752454914_2.교육.webp', title: '초품아로 누리는 안심 교육환경', subtitle: '선호도가 높고 실용성이 뛰어난 62㎡, 84㎡ 평면으로 채광성을 극대화한 4Bay 혁신공간' },
      { image: '/images/demo/woobangiushell/1752454914_3.접근성.webp', title: '총 851세대 프리미엄 랜드마크', subtitle: '채광과 통풍이 탁월한 남향 위주의 배치로 주거 가치 상승 및 웰빙 주거환경 조성' },
      { image: '/images/demo/woobangiushell/1752454951_4.도보통학.webp', title: 'NO.1 주거 브랜드', subtitle: '대한민국을 대표하는 프리미엄 주거 브랜드' },
      { image: '/images/demo/woobangiushell/1752455606_5.라이프.webp', title: '초품아로 누리는 안심 교육환경', subtitle: '선호도가 높고 실용성이 뛰어난 62㎡, 84㎡ 평면으로 채광성을 극대화한 4Bay 혁신공간' },
    ],

    features: {
      title: '화성우방아이유쉘',
      subtitle: '화성의 랜드마크 화성우방아이유쉘, 다시없을 마지막 프리미엄',
      checkpoints: [
        '화성 최초 어린이 전용 물놀이터',
        '단지 내 국공립 어린이집 2개소',
        '어린이 전용 커뮤니티 영어도서관 및 블럭방',
        '전세대 미세먼지 제거기 설치',
        '중도금 무이자, 부담적은 투자처',
        '신촌역, 서강대역 더블역세권 프리미엄',
        '풀옵션 & 발코니확장 무상',
        '선착순 한정 특별혜택!',
      ],
      images: [
        { src: '/images/demo/woobangiushell/prime1.webp', alt: '물놀이터' },
        { src: '/images/demo/woobangiushell/prime2.webp', alt: '어린이도서관' },
        { src: '/images/demo/woobangiushell/prime3.webp', alt: '환기시스템' },
        { src: '/images/demo/woobangiushell/prime4.webp', alt: '카페라운지' },
      ],
    },

    banners: [
      {
        backgroundImage: '/images/demo/woobangiushell/banner1.gif',
        title: '발코니 확장 무상ㆍ중도금 무이자',
        subtitle: '명품인테리어 풀옵션 무상! 마포4지구 재개발 최대수혜',
      },
      {
        backgroundImage: '/images/demo/woobangiushell/banner2.jpg',
        title: '소형주택 299세대 / 오피스텔 34실 / 총 333세대',
        subtitle: '분양방문 예약문의',
        cta: '방문예약 문의하기',
      },
      {
        backgroundImage: '/images/demo/woobangiushell/banner3.jpg',
        title: '선착순 분양중',
        subtitle: '마지막 프리미엄 잔여세대',
        cta: '특별혜택 확인하기',
      },
    ],

    premiumLife: [
      {
        tag: 'premium 01',
        title: '어린이전용커뮤니티 영어도서관 및 블럭방',
        description: '원어민 선생님과 함께하는 어린이 전용 도서관과 단지내 전용 블럭방으로 아이들만의 특별한 커뮤니티 시설이 들어섭니다.',
        image: '/images/demo/woobangiushell/life1.webp',
      },
      {
        tag: 'premium 02',
        title: '화성최초 어린이전용 물놀이터',
        description: '화성에서 처음 누리는 단지내 물놀이터로 아이들의 창의력이 높아집니다. 입주민만이 누릴 수 있는 전용시설로 자부심과 특별함을 드립니다.',
        image: '/images/demo/woobangiushell/life2.webp',
      },
      {
        tag: 'premium 03',
        title: '삶의 여유와 가치를 더하는 커뮤니티 시설',
        description: '피트니스, 실내골프연습장, 스크린골프룸, 라운지카페(작은도서관), 다함께돌봄센터, 실내놀이터 등 입주민들을 위한 다채로운 편의시설이 준비되어 있습니다.',
        image: '/images/demo/woobangiushell/life3.webp',
      },
    ],

    megaLife: [
      {
        tag: 'premium 01',
        title: '어린이전용커뮤니티 영어도서관 및 블럭방',
        description: '원어민 선생님과 함께하는 어린이 전용 도서관과 단지내 전용 블럭방으로 아이들만의 특별한 커뮤니티 시설이 들어섭니다.',
        image: '/images/demo/woobangiushell/mega1.webp',
      },
      {
        tag: 'premium 02',
        title: '화성최초 어린이전용 물놀이터',
        description: '화성에서 처음 누리는 단지내 물놀이터로 아이들의 창의력이 높아집니다. 입주민만이 누릴 수 있는 전용시설로 자부심과 특별함을 드립니다.',
        image: '/images/demo/woobangiushell/mega2.webp',
      },
      {
        tag: 'premium 03',
        title: '전세대 미세먼지 제거기 설치',
        description: '외출후 옷에 묻은 황사, 미세먼지를 제거할 수 있도록 전세대 현관에 에어샤워기와 전용브러시를 설치해 미세먼지 걱정을 덜어드립니다.',
        image: '/images/demo/woobangiushell/mega3.webp',
      },
      {
        tag: 'premium 04',
        title: '입주민의 주거환경을 위한 지하주차 설계적용',
        description: '아이들의 안전과 쾌적한 단지내 주거환경을 위해 모든 주차공간을 지하에 설계하는 지상에 차가없는 친환경 아파트입니다.',
        image: '/images/demo/woobangiushell/mega4.webp',
      },
      {
        tag: 'premium 05',
        title: '화성최초 어린이전용 물놀이터',
        description: '원어민 선생님과 함께하는 어린이 전용 도서관과 단지내 전용 블럭방으로 아이들만의 특별한 커뮤니티 시설이 들어섭니다.',
        image: '/images/demo/woobangiushell/mega5.webp',
      },
      {
        tag: 'premium 06',
        title: '삶의 여유와 가치를 더하는 커뮤니티 시설',
        description: '피트니스, 실내골프연습장, 스크린골프룸, 라운지카페(작은도서관), 다함께돌봄센터, 실내놀이터 등 입주민들을 위한 다채로운 편의시설이 준비되어 있습니다.',
        image: '/images/demo/woobangiushell/mega6.webp',
      },
    ],

    community: {
      image: '/images/demo/woobangiushell/community.webp',
      alt: '커뮤니티',
    },

    location: {
      title: '화성 중심 입지의 빛나는 미래비전',
      subtitle: '1,157세대 대단지 프리미엄',
      mainImage: '/images/demo/woobangiushell/location-main.webp',
      tabs: [
        {
          id: 'traffic',
          icon: 'traffic',
          label: '교통',
          title: '쾌속교통',
          image: '/images/demo/woobangiushell/location-traffic.webp',
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
          label: '생활인프라',
          title: '생활인프라',
          image: '/images/demo/woobangiushell/location-nature.webp',
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
          label: '교육환경',
          title: '교육환경',
          image: '/images/demo/woobangiushell/location-edu.webp',
          points: [
            '기안초, 기안중, 홍익디자인고, 수원대 등 우수한 교육환경',
            '동탄 학원가 차량 10분',
            '국공립어린이집 2개소 단지 내',
            '반경 1km 내 학교 5개교',
          ],
        },
        {
          id: 'vision',
          icon: 'vision',
          label: '미래비전',
          title: '미래비전',
          image: '/images/demo/woobangiushell/location-vision.webp',
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
        title: '안락한 침실',
        image: '/images/demo/woobangiushell/interior-bedroom.jpg',
        description: '편안하고 아늑한 침실 공간. 프리미엄 침구와 고급 마감재로 완성한 안락한 수면 환경을 제공합니다.',
      },
      {
        title: '대리석으로 꾸민 주방',
        image: '/images/demo/woobangiushell/interior-kitchen.jpg',
        description: '대리석 마감의 고급 주방. 시스템 키친과 풍부한 수납공간으로 실용성과 아름다움을 모두 갖춘 공간입니다.',
      },
      {
        title: '럭셔리한 욕실자재',
        image: '/images/demo/woobangiushell/interior-bath.jpg',
        description: '호텔급 욕실 인테리어와 고급 위생도기. 레인샤워, 세면대 등 프리미엄 욕실 사양을 적용했습니다.',
      },
    ],

    map: {
      title: '현장안내',
      subtitle: '새로운 랜드마크의 탄생, 화성우방아이유쉘',
      image: '/images/demo/woobangiushell/map.webp',
      modelHouseAddress: '경기 화성시 기배로30번길 5-9 (기안동)',
      siteAddress: '경기 화성시 기배로30번길 5-9 (기안동)',
      kakaoMapUrl: 'https://map.kakao.com/?q=화성우방아이유쉘',
      naverMapUrl: 'https://map.naver.com/v5/search/화성우방아이유쉘',
    },

    checklist: {
      items: ['중도금 전액무이자', '발코니 확장 무상', '무제한 전매가능', '전세대 풀옵션 무상'],
      ctaText: '모델하우스 방문예약하기',
    },

    businessSubPages: {
      overview: {
        id: 'overview',
        title: '사업개요',
        subVisualImage: '/images/demo/woobangiushell/1765442639_1.슬라이드메인1.webp',
        mainImage: '/images/demo/woobangiushell/prime1.webp',
        thumbImages: ['/images/demo/woobangiushell/prime2.webp', '/images/demo/woobangiushell/prime3.webp'],
        infoTable: [
          { label: '대지위치', value: '경기 화성시 기배로30번길 5-9 (기안동) 일원' },
          { label: '건축규모', value: '지하 5층, 지상 23~24층, 2개동' },
          { label: '세대수', value: '아파트(34㎡ ~ 46㎡) 198세대, 오피스텔 (42㎡, 59㎡) 209실 / 총 407세대' },
          { label: '연면적 / 대지면적', value: '4,619.480㎡' },
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
      location: {
        id: 'location',
        title: '입지환경',
        subVisualImage: '/images/demo/woobangiushell/1765442639_1.슬라이드메인1.webp',
      },
      brand: {
        id: 'brand',
        title: '브랜드소개',
        subVisualImage: '/images/demo/woobangiushell/1765442639_1.슬라이드메인1.webp',
      },
      map: {
        id: 'map',
        title: '오시는길',
        subVisualImage: '/images/demo/woobangiushell/1765442639_1.슬라이드메인1.webp',
      },
    },

    complexSubPages: {
      guide: {
        id: 'guide',
        type: 'guide' as const,
        title: '단지안내',
        subVisualImage: '/images/demo/woobangiushell/1765442639_1.슬라이드메인1.webp',
        images: ['/images/demo/woobangiushell/complex-guide.webp'],
      },
      premium: {
        id: 'premium',
        type: 'premium' as const,
        title: '프리미엄',
        subVisualImage: '/images/demo/woobangiushell/1765442639_1.슬라이드메인1.webp',
        caption: '메가라이프',
        captionEn: 'megalife',
        count: 6,
        headline: '쾌적한 자연과 우수한 교육환경, 수준 높은 문화와 더 큰 미래가치까지!',
        items: [
          { tag: 'premium 01', title: '어린이전용커뮤니티 영어도서관 및 블럭방', description: '원어민 선생님과 함께하는 어린이 전용 도서관과 단지내 전용 블럭방으로 아이들만의 특별한 커뮤니티 시설이 들어섭니다.', image: '/images/demo/woobangiushell/premium-01.webp' },
          { tag: 'premium 02', title: '화성최초 어린이전용 물놀이터', description: '화성에서 처음 누리는 단지내 물놀이터로 아이들의 창의력이 높아집니다. 입주민만이 누릴 수 있는 전용시설로 자부심과 특별함을 드립니다.', image: '/images/demo/woobangiushell/premium-02.webp' },
          { tag: 'premium 03', title: '전세대 미세먼지 제거기 설치', description: '외출후 옷에 묻은 황사, 미세먼지를 제거할 수 있도록 전세대 현관에 에어샤워기와 전용브러시를 설치해 미세먼지 걱정을 덜어드립니다.', image: '/images/demo/woobangiushell/premium-03.webp' },
          { tag: 'premium 04', title: '입주민의 주거환경을 위한 지하주차 설계적용', description: '아이들의 안전과 쾌적한 단지내 주거환경을 위해 모든 주차공간을 지하에 설계하는 지상에 차가없는 친환경 아파트입니다.', image: '/images/demo/woobangiushell/premium-04.webp' },
          { tag: 'premium 05', title: '화성최초 어린이전용 물놀이터', description: '원어민 선생님과 함께하는 어린이 전용 도서관과 단지내 전용 블럭방으로 아이들만의 특별한 커뮤니티 시설이 들어섭니다.', image: '/images/demo/woobangiushell/premium-05.webp' },
          { tag: 'premium 06', title: '삶의 여유와 가치를 더하는 커뮤니티 시설', description: '피트니스, 실내골프연습장, 스크린골프룸, 라운지카페(작은도서관), 다함께돌봄센터, 실내놀이터 등 입주민들을 위한 다채로운 편의시설이 준비되어 있습니다.', image: '/images/demo/woobangiushell/premium-06.webp' },
        ],
        caution: [
          '본 홍보물에 사용된 CG 및 일러스트는 소비자의 이해를 돕기 위한 것으로 실제와 다를 수 있습니다.',
          '상기 개발계획도, 지역도 상에 기재된 교통, 학교, 공원, 상업시설 등 각종 개발 계획은 사업 진행과정 및 관계기관의 사정에 따라 변동 또는 취소될 수 있으며 이는 당사와 무관합니다.',
          '단지 인근의 각종 개발계획 및 도로 등의 기반시설은 인·허가나 정부 시책에 따라 변경 및 취소 가능한 바, 해당 인·허가청 및 현장에서 확인하시기 바라며 시행사 및 시공사와 무관합니다.',
        ],
      },
      floorplan: {
        id: 'floorplan',
        type: 'floorplan' as const,
        title: '동호수배치도',
        subVisualImage: '/images/demo/woobangiushell/1765442639_1.슬라이드메인1.webp',
        images: ['/images/demo/woobangiushell/complex-floorplan.webp'],
      },
      prime: {
        id: 'prime',
        type: 'prime' as const,
        title: '프라임',
        subVisualImage: '/images/demo/woobangiushell/1765442639_1.슬라이드메인1.webp',
        headline: '화성의 랜드마크 화성우방아이유쉘, 다시없을 마지막 프리미엄',
        captionEn: 'premium',
        count: 8,
        points: [
          { text: '화성 최초 어린이 전용 물놀이터', bold: '어린이 전용 물놀이터' },
          { text: '단지 내 국공립 어린이집 2개소', bold: '단지 내' },
          { text: '어린이 전용 커뮤니티 영어도서관 및 블럭방', bold: '어린이 전용 커뮤니티' },
          { text: '전세대 미세먼지 제거기 설치', bold: '미세먼지 제거기 설치' },
          { text: '중도금 무이자, 부담적은 투자처', bold: '중도금 무이자' },
          { text: '신촌역, 서강대역 더블역세권 프리미엄', bold: '더블역세권 프리미엄' },
          { text: '풀옵션 & 발코니확장 무상', bold: '무상' },
          { text: '선착순 한정 특별혜택!', bold: '선착순' },
        ],
        images: [
          '/images/demo/woobangiushell/prime-01.webp',
          '/images/demo/woobangiushell/prime-02.webp',
          '/images/demo/woobangiushell/prime-03.webp',
          '/images/demo/woobangiushell/prime-04.webp',
        ],
      },
    },

    unitSubPages: {
      floorplan: {
        id: 'floorplan',
        type: 'floorplan' as const,
        title: '평면정보',
        subVisualImage: '/images/demo/woobangiushell/1765442639_1.슬라이드메인1.webp',
        sizeLabel: '84㎡',
        items: [
          {
            id: '84a',
            label: '84A',
            type: '84㎡A',
            households: '428세대',
            description: '우수한 개방감과 여유로운 공간구성, 주방 원스톱 세탁실 등을 갖춰 생활의 편리함을 극대화한 판상형 구조',
            floorPlanImage: '/images/demo/woobangiushell/unit-84a.webp',
            areas: [
              { label: '주거전용면적', value: '84.9800㎡' },
              { label: '주거공용면적', value: '26.0826㎡' },
              { label: '공급면적', value: '111.0626㎡' },
              { label: '기타공용면적', value: '147.6438㎡' },
              { label: '계약면적', value: '147.6438㎡' },
            ],
          },
          {
            id: '84b',
            label: '84B',
            type: '84㎡B',
            households: '320세대',
            description: '합리적인 공간배치와 넓은 거실, 3Bay 판상형 구조로 채광과 통풍이 우수한 설계',
            floorPlanImage: '/images/demo/woobangiushell/unit-84b.webp',
            areas: [
              { label: '주거전용면적', value: '84.9900㎡' },
              { label: '주거공용면적', value: '25.8700㎡' },
              { label: '공급면적', value: '110.8600㎡' },
              { label: '기타공용면적', value: '146.5200㎡' },
              { label: '계약면적', value: '146.5200㎡' },
            ],
          },
          {
            id: '84c',
            label: '84C',
            type: '84㎡C',
            households: '409세대',
            description: '4Bay 맞통풍 구조의 쾌적한 주거환경, 팬트리 수납공간으로 생활 편의 극대화',
            floorPlanImage: '/images/demo/woobangiushell/unit-84c.webp',
            areas: [
              { label: '주거전용면적', value: '84.9500㎡' },
              { label: '주거공용면적', value: '26.1200㎡' },
              { label: '공급면적', value: '111.0700㎡' },
              { label: '기타공용면적', value: '147.8900㎡' },
              { label: '계약면적', value: '147.8900㎡' },
            ],
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
      interior: {
        id: 'interior',
        type: 'interior' as const,
        title: '인테리어',
        subVisualImage: '/images/demo/woobangiushell/1765442639_1.슬라이드메인1.webp',
        mainImage: '/images/demo/woobangiushell/interior-main.jpg',
        items: [
          { title: '안락한 침실', image: '/images/demo/woobangiushell/interior-01.jpg' },
          { title: '대리석으로 꾸민 주방', image: '/images/demo/woobangiushell/interior-02.jpg' },
          { title: '럭셔리한 욕실자재', image: '/images/demo/woobangiushell/interior-03.jpg' },
        ],
        caution: [
          '상기 CG 이미지, 사진 및 내용은 소비자의 이해를 돕기 위한 것으로 실제 크기 및 거리 등과 차이가 있습니다.',
          '상기 지역도 및 이미지는 소비자의 이해를 돕기 위한 것으로 실제와 차이가 있을 수 있습니다.',
          '본 홈페이지의 상의 개발계획, 교통계획과 외관 이미지는 소비자의 이해를 돕기 위한 것으로 관계기관의 계획변경 등에 따라 달라질 수 있습니다.',
        ],
      },
    },

    theme: {
      primary: '#1e40af',
      secondary: '#3b82f6',
      footerText: '화성우방아이유쉘 분양 홍보관',
      footerInfo: {
        developer: 'SM우방, SM상선',
        constructor: 'SM우방',
        trustee: 'SM우방, SM상선',
        bizNumber: '000-00-00000',
      },
      disclaimer: '본 홍보물의 CG, 이미지 등은 소비자의 이해를 돕기 위해 제작된 것으로 실제와 차이가 있을 수 있습니다. 각종 개발계획은 관계기관의 사정에 따라 변경 또는 취소될 수 있습니다.',
    },
  },
};
