import type { RegionPage } from './regionTypes';

export interface SubRegionData {
  slug: string;
  region: string;
  /** 지역 내 주요 키워드 (동네, 개발호재 등) */
  keywords: string[];
  /** 해당 지역 특화 한 줄 설명 */
  desc: string;
}

/**
 * 하위 지역(구/시/군) 페이지를 자동 생성하는 함수
 * 기존 수작업 페이지와 동일한 H태그 구조, break, FAQ 패턴을 유지
 */
export function generateSubRegionPage(
  _parentRegion: string,
  data: SubRegionData,
): RegionPage {
  const { slug, region, keywords, desc } = data;
  const keywordStr = keywords.slice(0, 4).join(', ');
  const allKeywordStr = keywords.join(', ');

  return {
    slug,
    region,
    title: `${region} 분양홈페이지 제작`,
    metaTitle: `${region} 분양홈페이지 제작 | 19만원 24시간 완성`,
    metaDescription: `${region} 분양상담사 전용 홈페이지 제작. ${keywordStr} 등 ${region} 전 지역 현장 대응. 19만원부터, 24시간 내 제작 완료. 전화·카톡 상담, 관심고객 관리, 부정클릭 차단까지.`,
    heroHeading: `${region} 분양홈페이지 제작`,
    heroSub: '"홈페이지 있어요?" 이 질문에 바로 주소를 보여줄 수 있으신가요?',
    content: [
      { type: 'h2', text: `${region}에서 분양하면서, 홈페이지 없이 버티고 계신가요?` },
      { type: 'p', text: `${region}은 ${desc} 고객은 "${region} 분양", "${keywords[0]} 아파트"를 검색하고, 전문 홈페이지가 있는 상담사에게 먼저 연락합니다.` },
      { type: 'p', text: `${region}에서 홈페이지 없이 활동하는 것은, 온라인 명함 없이 경쟁에 뛰어드는 것과 같습니다. 고객이 검색해도 아무것도 보이지 않으면, 존재하지 않는 것과 다름없습니다.` },

      { type: 'h2', text: '외주는 비싸고, 직접 만들기는 막막하셨죠' },
      { type: 'p', text: '홈페이지 제작 견적을 받으면 300만 원이 넘습니다. 거기에 월 유지비까지 따로 청구됩니다. 분양 수수료를 벌기도 전에 홈페이지 비용부터 나가는 셈입니다.' },
      { type: 'p', text: `${region}은 분양 현장이 수시로 바뀝니다. 현장이 바뀔 때마다 수백만 원짜리 홈페이지를 다시 만들 수는 없습니다. 타이밍을 놓치면 고객은 이미 경쟁 상담사에게 넘어갑니다.` },

      { type: 'break', text: 'steps' },

      { type: 'h2', text: `${region} 분양상담사를 위한 홈페이지, 19만원이면 충분합니다` },
      { type: 'p', text: `분양퍼스트는 분양상담사 전용 홈페이지를 24시간 안에 제작합니다. 분양 자료만 보내주시면 됩니다. 비용은 19만원부터, 현장이 바뀌어도 부담 없이 새로 만들 수 있습니다.` },

      { type: 'h3', text: `${region} 전 지역 분양현장에 대응합니다` },
      { type: 'p', text: `${allKeywordStr} 등 ${region} 전 지역 분양현장에 맞춤 대응합니다.` },

      { type: 'h3', text: '분양에 꼭 필요한 기능만 담았습니다' },
      { type: 'ul', items: [
        '원터치 전화 상담 버튼 - 고객이 바로 전화할 수 있습니다',
        '카카오톡 상담 연결 - 부담 없이 문의할 수 있는 채널',
        '관심고객 접수 폼 - 놓치는 고객 없이 DB 수집',
        '유튜브 영상 삽입 (최대 2개) - 현장의 생생함을 전달',
        '오시는 길 + 약도 전송 - 고객의 방문을 유도',
        '팝업 기능 (최대 10개) - 이벤트, 마감 임박 등 시선 집중',
        '파비콘 무료 세팅 - 디테일이 신뢰도를 높입니다',
        '네이버 파워링크 조건 충족 - 제작 즉시 광고 등록 가능',
      ]},
      { type: 'p', text: '불필요한 기능은 빼고, 분양상담에 실제 필요한 것만 담은 구조입니다.' },

      { type: 'break', text: 'features' },

      { type: 'h2', text: `${region} 분양시장, 왜 홈페이지가 더 중요한가` },
      { type: 'p', text: `${region}은 ${desc} 이런 호재가 겹칠수록 분양 현장은 늘어나고, 고객의 관심도 집중됩니다. 검색했을 때 전문적인 홈페이지가 나오느냐 아무것도 없느냐가, 첫 상담 연결을 좌우합니다.` },
      { type: 'p', text: `${region} 고객은 온라인 검색에 익숙합니다. "${region} 분양"을 검색했을 때 전문 홈페이지가 보이면, 블로그나 카페 글만 올린 상담사와는 비교할 수 없는 신뢰를 얻게 됩니다.` },

      { type: 'h2', text: '네이버 파워링크 광고, 홈페이지가 있어야 시작할 수 있습니다' },
      { type: 'p', text: `"${region} 분양", "${keywords[0]} 아파트" 등 지역 키워드로 파워링크 광고를 하려면 랜딩 페이지가 필수입니다. 분양퍼스트 홈페이지는 제작 즉시 등록 가능합니다.` },
      { type: 'p', text: `${region} 키워드는 경쟁이 상대적으로 낮아 적은 광고비로 상위 노출이 가능합니다. 전문 홈페이지와 결합하면 클릭 대비 상담 전환율이 크게 높아집니다.` },

      { type: 'break', text: 'pricing' },

      { type: 'h2', text: '광고비 새는 부정클릭, 더 이상 방치하지 마세요' },
      { type: 'p', text: '경쟁업체의 악의적 클릭이나 봇 트래픽으로 광고비가 낭비되는 피해가 실제로 발생하고 있습니다. 한정된 광고 예산이 부정클릭으로 소진되면, 실제 고객에게 노출될 기회 자체가 줄어듭니다.' },
      { type: 'p', text: '프리미엄 플랜에 포함된 부정클릭 차단 서비스는 동일 IP 반복 클릭, 봇 클릭을 실시간으로 감지하고 차단합니다. 시중에서 월 2~3만원에 별도로 구매해야 하는 서비스가 기본으로 포함되어 있습니다.' },
    ],
    faqs: [
      { q: `${region} 분양홈페이지 제작 비용은 얼마인가요?`, a: '베이직 19만원, 디럭스 24만원, 프리미엄 29만원. 1회 결제, 1년 사용, 진행 중 무료 연장.' },
      { q: `${region} 분양홈페이지 제작 기간은?`, a: '24시간 내. 급행 +5만원 6시간.' },
      { q: '홈페이지에 어떤 기능이 포함되나요?', a: '전화·카톡 상담, 관심고객 폼, 유튜브, 지도, 팝업, 파비콘, 도메인·호스팅. 플랜별 추가 기능.' },
      { q: '네이버 파워링크 등록 가능?', a: '네, 즉시 등록 가능.' },
      { q: `${region} 외 다른 지역도?`, a: '전국 대응.' },
      { q: '분양 끝나면?', a: '1년 기본, 진행 중 무료 연장.' },
      { q: '수정 가능?', a: '카톡 요청 시 빠르게 반영.' },
    ],
  };
}

/** 여러 하위 지역을 한 번에 생성 */
export function generateSubRegionPages(
  parentRegion: string,
  districts: SubRegionData[],
): RegionPage[] {
  return districts.map((d) => generateSubRegionPage(parentRegion, d));
}
