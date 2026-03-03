import { useEffect } from 'react';

interface Props {
  data: object | object[];
}

/**
 * JSON-LD 구조화 데이터를 head에 주입하는 컴포넌트
 * schema.org 스펙에 맞춘 온페이지 SEO용
 */
export default function JsonLd({ data }: Props) {
  useEffect(() => {
    const schemas = Array.isArray(data) ? data : [data];
    const scripts: HTMLScriptElement[] = [];

    schemas.forEach((schema) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      script.setAttribute('data-jsonld', '');
      document.head.appendChild(script);
      scripts.push(script);
    });

    return () => {
      scripts.forEach((s) => s.remove());
    };
  }, [data]);

  return null;
}
