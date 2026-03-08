import { useEffect } from 'react';
import JsonLd from './JsonLd';

const SITE_URL = 'https://분양웹사이트제작.com';
const SITE_NAME = '분양웹사이트제작.com';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

interface Props {
  title: string;
  description: string;
  path?: string;
  /** true면 title을 래핑 없이 그대로 사용 */
  exactTitle?: boolean;
  /** JSON-LD 구조화 데이터 (단일 객체 또는 배열) */
  schema?: object | object[];
}

export default function SeoHead({ title, description, path = '', exactTitle, schema }: Props) {
  const isHome = path === '/' || path === '';
  const fullTitle = exactTitle
    ? title
    : isHome
      ? '분양 홈페이지 웹사이트 랜딩페이지 제작 전문 | 분양퍼스트'
      : `분양웹사이트제작 ${title} | 분양퍼스트`;
  const url = `${SITE_URL}${path || '/'}`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    setMeta('description', description);
    setMeta('robots', 'index, follow');
    setMeta('googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:url', url, true);
    setMeta('og:type', 'website', true);
    setMeta('og:locale', 'ko_KR', true);
    setMeta('og:site_name', SITE_NAME, true);
    setMeta('og:image', OG_IMAGE, true);
    setMeta('og:image:width', '1200', true);
    setMeta('og:image:height', '630', true);
    setMeta('og:image:type', 'image/png', true);
    setMeta('og:image:alt', `${SITE_NAME} - 분양 홈페이지 제작 전문`, true);
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:image', OG_IMAGE);
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
  }, [fullTitle, description, url]);

  return schema ? <JsonLd data={schema} /> : null;
}
