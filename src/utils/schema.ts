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
    name: '분양퍼스트',
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: OG_IMAGE,
    description: '분양 홈페이지 제작 전문. 19만원부터 24시간 내 제작. 분양상담사를 위한 홈페이지 솔루션.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+82-507-1339-3982',
      contactType: 'customer service',
      email: 'localoca.master@gmail.com',
      areaServed: 'KR',
      availableLanguage: 'Korean',
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    },
  };
}

/** WebSite 스키마 - 사이트 전체 정보 */
export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: '분양 홈페이지 제작 전문. 19만원부터 24시간 내 제작. 분양상담사를 위한 홈페이지 솔루션.',
    publisher: {
      '@type': 'Organization',
      name: '분양퍼스트',
      logo: OG_IMAGE,
    },
    inLanguage: 'ko-KR',
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
      logo: OG_IMAGE,
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
    })),
  };
}
