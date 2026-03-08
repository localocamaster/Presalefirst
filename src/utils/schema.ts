/**
 * JSON-LD 스키마 생성 유틸리티
 * schema.org 스펙에 맞춘 온페이지 SEO용 구조화 데이터
 */

const SITE_URL = 'https://분양웹사이트제작.com';
const SITE_NAME = '분양웹사이트제작.com';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/** Organization 스키마 - 회사/서비스 정보 */
export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: '분양퍼스트',
    alternateName: SITE_NAME,
    url: SITE_URL,
    foundingDate: '2007',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: 20,
    },
    logo: {
      '@type': 'ImageObject',
      url: OG_IMAGE,
      width: 1200,
      height: 630,
    },
    description: '분양 홈페이지 제작 전문. 19만원부터 24시간 내 제작. 분양상담사를 위한 홈페이지 솔루션.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+82-507-1339-3982',
      contactType: 'customer service',
      email: 'localoca.master@gmail.com',
      areaServed: 'KR',
      availableLanguage: 'Korean',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '09:00',
        closes: '13:00',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '인하로 100 인하대학교 인하드림센터 1관 206에이호',
      addressLocality: '인천광역시',
      addressRegion: '미추홀구',
      postalCode: '22212',
      addressCountry: 'KR',
    },
  };
}

/** WebSite 스키마 - 사이트 전체 정보 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    description: '분양 홈페이지 제작 전문. 19만원부터 24시간 내 제작. 분양상담사를 위한 홈페이지 솔루션.',
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: '분양퍼스트',
    },
    inLanguage: 'ko-KR',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/** BreadcrumbList 스키마 */
export function getBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** WebPage 스키마 - 일반 페이지 */
export function getWebPageSchema(params: {
  name: string;
  description: string;
  path: string;
  breadcrumbs?: BreadcrumbItem[];
}) {
  const { name, description, path, breadcrumbs } = params;
  const url = `${SITE_URL}${path}`;

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name,
    description,
    url,
    isPartOf: {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
    },
    inLanguage: 'ko-KR',
  };

  if (breadcrumbs && breadcrumbs.length > 0) {
    schema.breadcrumb = getBreadcrumbSchema(breadcrumbs);
  }

  return schema;
}

/** BlogPosting 스키마 - 블로그 글 */
export function getBlogPostingSchema(params: {
  title: string;
  description: string;
  image: string;
  date: string;
  slug: string;
  author?: string;
}) {
  const { title, description, image, date, slug, author = '분양퍼스트' } = params;
  const url = `${SITE_URL}/blog/${slug}`;

  // date 형식: 2026.02.25 -> 2026-02-25
  const isoDate = date.replace(/\./g, '-');

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image,
    url,
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      '@type': 'Organization',
      name: author,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: '분양퍼스트',
      logo: {
        '@type': 'ImageObject',
        url: OG_IMAGE,
        width: 1200,
        height: 630,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    breadcrumb: getBreadcrumbSchema([
      { name: '홈', path: '/' },
      { name: '블로그', path: '/blog' },
      { name: title, path: `/blog/${slug}` },
    ]),
  };
}

/** Blog 스키마 - 블로그 목록 페이지 */
export function getBlogSchema() {
  return getWebPageSchema({
    name: '블로그 | 분양 홈페이지 제작 & 마케팅 정보',
    description: '분양웹사이트제작 | 분양퍼스트 블로그. 분양 홈페이지 제작, 마케팅 팁, 비용 안내, 이용 가이드 등 분양상담사를 위한 정보.',
    path: '/blog',
    breadcrumbs: [
      { name: '홈', path: '/' },
      { name: '블로그', path: '/blog' },
    ],
  });
}

/** 홈 페이지 전용 FAQPage 스키마 - SERP 리치 결과 (People Also Ask) */
export function getHomeFAQSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: '분양 홈페이지 제작 비용은 얼마인가요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '분양퍼스트의 홈페이지 제작 비용은 베이직 19만원, 디럭스 24만원, 프리미엄 29만원으로 구성되어 있습니다. 구독 없이 1회 결제로 제작이 완료되며, 기본 1년 사용이 포함됩니다.',
        },
      },
      {
        '@type': 'Question',
        name: '분양 홈페이지 제작 기간은 얼마나 걸리나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '신청 후 최대 24시간 내에 홈페이지 제작이 완료됩니다. 급행 옵션(+5만원)을 선택하시면 6시간 이내로도 제작 가능합니다.',
        },
      },
      {
        '@type': 'Question',
        name: '네이버 파워링크 광고에 사용할 수 있나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '네, 분양퍼스트에서 제작한 홈페이지는 네이버 파워링크 심사 조건을 충족하도록 설계되어 있습니다. 전화번호, 사업자 정보, 오시는 길 등 심사에 필요한 필수 항목이 기본 포함됩니다.',
        },
      },
      {
        '@type': 'Question',
        name: '분양이 완료된 후 홈페이지는 어떻게 되나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '기본 사용 기간은 1년이며, 분양이 아직 진행 중이라면 만료 전에 연락주시면 무료로 연장해드립니다. 카카오톡으로 만료 전 미리 안내해 드립니다.',
        },
      },
      {
        '@type': 'Question',
        name: '분양 홈페이지에서 고객 정보를 직접 관리할 수 있나요?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '디럭스 플랜 이상부터 관심고객 관리 기능이 포함됩니다. 홈페이지를 통해 접수된 상담 신청자 정보를 관리 시스템에서 확인하실 수 있습니다.',
        },
      },
    ],
  };
}

/** FAQPage 스키마 */
export function getFAQPageSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

/** "19만원" -> 190000 변환 */
function parseKoreanPrice(str: string): number {
  const match = str.match(/(\d+)\s*만/);
  return match ? parseInt(match[1], 10) * 10000 : 0;
}

/** Product/Offer 스키마 - 요금제 (Pricing 페이지) */
export function getProductSchema(plans: { name: string; price: string; desc: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: '분양 홈페이지 제작 서비스',
    description: '분양상담사를 위한 홈페이지 제작 전문. 19만원부터 24시간 내 제작.',
    brand: {
      '@type': 'Brand',
      name: '분양퍼스트',
    },
    offers: plans.map((p) => ({
      '@type': 'Offer',
      name: p.name,
      description: p.desc,
      price: parseKoreanPrice(p.price),
      priceCurrency: 'KRW',
      url: `${SITE_URL}/pricing`,
      availability: 'https://schema.org/InStock',
    })),
  };
}

/** LocalBusiness 스키마 - 지역 SEO 페이지용 (2026 필수) */
export function getLocalBusinessSchema(params: {
  region: string;
  description: string;
  path: string;
}) {
  const { region, description, path } = params;
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}${path}#business`,
    name: `분양퍼스트 - ${region} 분양홈페이지 제작`,
    description,
    url: `${SITE_URL}${path}`,
    image: OG_IMAGE,
    telephone: '+82-507-1339-3982',
    email: 'localoca.master@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '인하로 100 인하대학교 인하드림센터 1관 206에이호',
      addressLocality: '인천광역시',
      addressRegion: '미추홀구',
      postalCode: '22212',
      addressCountry: 'KR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.4507,
      longitude: 126.6572,
    },
    areaServed: {
      '@type': 'City',
      name: region,
    },
    priceRange: '₩190,000 - ₩290,000',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [SITE_URL],
  };
}

/** Service 스키마 - 지역 서비스 페이지용 */
export function getServiceSchema(params: {
  region: string;
  description: string;
  path: string;
}) {
  const { region, description, path } = params;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${region} 분양홈페이지 제작`,
    description,
    url: `${SITE_URL}${path}`,
    provider: {
      '@type': 'ProfessionalService',
      name: '분양퍼스트',
      url: SITE_URL,
    },
    areaServed: {
      '@type': 'City',
      name: region,
    },
    serviceType: '분양 홈페이지 제작',
    offers: [
      {
        '@type': 'Offer',
        name: '베이직',
        price: 190000,
        priceCurrency: 'KRW',
        description: '핵심 기능만 담은 시작 플랜',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: '디럭스',
        price: 240000,
        priceCurrency: 'KRW',
        description: '관심고객 관리까지 한 번에',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: '프리미엄',
        price: 290000,
        priceCurrency: 'KRW',
        description: '광고 효율까지 잡는 올인원',
        availability: 'https://schema.org/InStock',
      },
    ],
  };
}
