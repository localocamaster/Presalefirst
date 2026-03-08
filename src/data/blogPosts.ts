export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  desc: string;
  image: string;
  content: { type: 'h2' | 'h3' | 'p' | 'ul'; text?: string; items?: string[] }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'why-bunyang-homepage',
    title: '분양 홈페이지, 왜 필요한가요?',
    category: '분양 가이드',
    date: '2026.02.25',
    readTime: '5분',
    desc: '분양상담사에게 홈페이지가 왜 필수인지, 어떤 효과를 기대할 수 있는지 알려드립니다.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    content: [
      { type: 'h2', text: '홈페이지가 없으면 놓치는 것들' },
      { type: 'p', text: '요즘 고객들은 분양 상담을 받기 전에 먼저 인터넷으로 검색합니다. 네이버, 구글에서 분양 현장 이름을 검색했을 때 전문적인 홈페이지가 나온다면 고객의 신뢰도가 크게 올라갑니다.' },
      { type: 'h3', text: '1. 전문성의 첫인상' },
      { type: 'p', text: '명함만 주는 것과 홈페이지 주소를 함께 주는 것은 완전히 다른 인상을 줍니다. 홈페이지는 고객에게 \'이 사람은 제대로 하고 있구나\'라는 신뢰를 줍니다.' },
      { type: 'h3', text: '2. 24시간 일하는 영업사원' },
      { type: 'p', text: '상담사가 잠을 자거나 다른 업무를 하는 동안에도 홈페이지는 24시간 고객에게 분양 정보를 제공합니다. 관심고객 접수 기능을 활용하면 놓치는 고객 없이 문의를 받을 수 있습니다.' },
      { type: 'h3', text: '3. 광고 효율의 핵심' },
      { type: 'p', text: '네이버 파워링크, 카카오 광고 등을 운영하려면 랜딩 페이지가 필수입니다. 홈페이지가 없으면 광고를 돌릴 수조차 없고, 있어도 품질이 낮으면 광고비만 낭비됩니다.' },
    ],
  },
  {
    slug: 'bunyang-homepage-cost',
    title: '분양 홈페이지 제작 비용, 얼마가 적정한가요?',
    category: '비용 안내',
    date: '2026.02.23',
    readTime: '4분',
    desc: '분양 홈페이지를 만드는 방법은 크게 세 가지입니다. 각각의 장단점과 비용을 비교해보겠습니다.',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80',
    content: [
      { type: 'h2', text: '제작 방법별 비용 비교' },
      { type: 'p', text: '분양 홈페이지를 만드는 방법은 크게 세 가지입니다. 각각의 장단점과 비용을 비교해보겠습니다.' },
      { type: 'h3', text: '1. 외주 개발 (300~1,000만원)' },
      { type: 'p', text: '디자인 에이전시나 프리랜서에게 맞춤 제작을 의뢰하는 방식입니다. 퀄리티는 높지만 비용이 높고 제작 기간이 2~4주로 깁니다. 수정이 필요할 때마다 추가 비용이 발생하는 것도 단점입니다.' },
      { type: 'h3', text: '2. DIY 빌더 (무료~월 5만원)' },
      { type: 'p', text: 'Wix, 아임웹 등 웹사이트 빌더를 직접 사용하는 방식입니다. 비용은 저렴하지만 분양에 특화된 기능이 없고, 직접 디자인하고 세팅해야 하므로 시간이 많이 소요됩니다.' },
      { type: 'h3', text: '3. 분양 전문 솔루션 (19~29만원)' },
      { type: 'p', text: '분양퍼스트처럼 분양에 특화된 서비스를 이용하는 방식입니다. 분양에 필요한 기능이 모두 포함되어 있고, 24시간 내 제작 완료되며, 비용도 합리적입니다.' },
    ],
  },
  {
    slug: 'naver-powerlink-homepage',
    title: '네이버 파워링크 광고, 홈페이지 없이 가능한가요?',
    category: '마케팅 팁',
    date: '2026.02.21',
    readTime: '5분',
    desc: '네이버 파워링크 광고를 등록하려면 사업자등록증과 함께 광고 랜딩 URL이 필요합니다.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    content: [
      { type: 'h2', text: '파워링크 등록 조건' },
      { type: 'p', text: '네이버 파워링크 광고를 등록하려면 사업자등록증과 함께 광고 랜딩 URL이 필요합니다. 이 URL이 바로 분양 홈페이지입니다.' },
      { type: 'h3', text: '홈페이지 품질이 광고 성과를 결정합니다' },
      { type: 'p', text: '같은 광고비를 쓰더라도 랜딩 페이지의 품질에 따라 전환율이 크게 달라집니다. 전문적인 디자인, 빠른 로딩 속도, 모바일 최적화가 된 홈페이지는 클릭당 비용(CPC)을 줄이고 전환율을 높여줍니다.' },
      { type: 'h3', text: '분양퍼스트로 파워링크 조건 충족' },
      { type: 'p', text: '분양퍼스트의 모든 플랜은 네이버 파워링크 등록 조건을 충족합니다. 별도의 세팅 없이 제작 완료 즉시 광고 등록이 가능합니다.' },
    ],
  },
  {
    slug: 'homepage-management-guide',
    title: '분양 홈페이지 제작 후 관리는 어떻게 하나요?',
    category: '이용 가이드',
    date: '2026.02.17',
    readTime: '5분',
    desc: '분양퍼스트로 제작된 홈페이지는 별도의 기술 지식 없이도 손쉽게 관리할 수 있습니다.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    content: [
      { type: 'h2', text: '제작 후 관리 방법' },
      { type: 'p', text: '분양퍼스트로 제작된 홈페이지는 별도의 기술 지식 없이도 손쉽게 관리할 수 있습니다.' },
      { type: 'h3', text: '1. 팝업 및 배너 변경' },
      { type: 'p', text: '분양 현장이 변경되거나 새로운 프로모션을 진행할 때 팝업과 배너를 간편하게 교체할 수 있습니다. 카카오톡으로 요청하시면 당일 반영됩니다.' },
      { type: 'h3', text: '2. 콘텐츠 수정' },
      { type: 'p', text: '분양가, 평형 정보, 홍보 문구 등의 수정이 필요할 때 요청 주시면 빠르게 반영해드립니다.' },
      { type: 'h3', text: '3. 도메인 관리' },
      { type: 'p', text: '기본 도메인은 무료로 제공되며, 원하시면 별도 도메인을 연결해드립니다. SSL 인증서도 자동으로 적용됩니다.' },
    ],
  },
  {
    slug: 'mobile-optimization',
    title: '모바일 최적화, 분양 홈페이지에서 꼭 필요한 이유',
    category: '분양 가이드',
    date: '2026.02.15',
    readTime: '5분',
    desc: '분양 홈페이지 방문자의 약 70~80%는 스마트폰으로 접속합니다.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    content: [
      { type: 'h2', text: '모바일 시대의 분양 홈페이지' },
      { type: 'p', text: '분양 홈페이지 방문자의 약 70~80%는 스마트폰으로 접속합니다. 모바일에서 보기 불편한 홈페이지는 고객 이탈률이 매우 높습니다.' },
      { type: 'h3', text: '반응형 디자인의 중요성' },
      { type: 'p', text: 'PC와 모바일에서 모두 최적화된 화면을 보여주는 반응형 디자인은 필수입니다. 분양퍼스트의 모든 템플릿은 반응형으로 제작되어 어떤 기기에서도 완벽하게 표시됩니다.' },
      { type: 'h3', text: '터치 친화적 UI' },
      { type: 'p', text: '모바일에서는 버튼 크기, 전화 연결 기능, 스크롤 편의성 등이 중요합니다. 분양퍼스트는 모바일 사용자를 위해 원터치 전화 연결, 카카오톡 상담 버튼 등을 기본으로 제공합니다.' },
    ],
  },
];
