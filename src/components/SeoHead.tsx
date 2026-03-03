import { useEffect } from 'react';
import JsonLd from './JsonLd';

const SITE_URL = 'https://분양웹사이트제작.com';
const SITE_NAME = '분양웹사이트제작.com';
const OG_IMAGE = `${SITE_URL}/og-image.png`;

interface Props {
  title: string;
  description: string;
  path?: string;
  /** JSON-LD 구조화 데이터 (단일 객체 또는 배열) */
  schema?: object | object[];
}

export default function SeoHead({ title, description, path = '', schema }: Props) {
  const isHome = path === '/' || path === '';
  const fullTitle = isHome
    ? '분양웹사이트제작 분양홍보 홈페이지 제작 전문 솔루션 | 분양퍼스트'
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
    setMeta('og:title', fullTitle, true);
    setMeta('og:description', description, true);
    setMeta('og:url', url, true);
    setMeta('og:type', 'website', true);
    setMeta('og:site_name', SITE_NAME, true);
    setMeta('og:image', OG_IMAGE, true);
    setMeta('og:image:width', '1200', true);
    setMeta('og:image:height', '630', true);
    setMeta('og:image:type', 'image/png', true);
    setMeta('twitter:card', 'summary_large_image', true);
    setMeta('twitter:image', OG_IMAGE, true);
    setMeta('twitter:title', fullTitle, true);
    setMeta('twitter:description', description, true);
  }, [fullTitle, description, url]);

  return schema ? <JsonLd data={schema} /> : null;
}
