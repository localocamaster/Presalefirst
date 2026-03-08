import { Link, useParams } from 'react-router-dom';
import {
  MapPin, ArrowRight, CheckCircle, CheckCircle2,
  Phone, MessageCircle, Video, UserCheck, Zap,
  Shield, BarChart3, Clock, Globe, Bot,
} from 'lucide-react';
import { regionPages } from '../data/regionPages';
import SeoHead from '../components/SeoHead';
import { getWebPageSchema, getFAQPageSchema, getBreadcrumbSchema, getProductSchema, getLocalBusinessSchema, getServiceSchema } from '../utils/schema';

const plans = [
  {
    name: '베이직', price: '19만원', desc: '핵심 기능만 담은 시작 플랜', recommended: false,
    features: ['전화 상담 버튼', '카톡 상담 연결', '유튜브 영상 (최대 2개)', '오시는 길 + 약도 전송', '팝업 (최대 10개)', '파비콘', '호스팅 무료', '기본 도메인 무료', '파워링크 조건 충족'],
    disabled: ['관심고객 관리', '접속통계'],
  },
  {
    name: '디럭스', price: '24만원', desc: '관심고객 관리까지 한 번에', recommended: true,
    features: ['전화 상담 버튼', '카톡 상담 연결', '유튜브 영상 (최대 2개)', '오시는 길 + 약도 전송', '팝업 (최대 10개)', '파비콘', '호스팅 무료', '기본 도메인 무료', '파워링크 조건 충족', '관심고객 관리'],
    disabled: ['접속통계'],
  },
  {
    name: '프리미엄', price: '29만원', desc: '광고 효율까지 잡는 올인원', recommended: false,
    features: ['전화 상담 버튼', '카톡 상담 연결', '유튜브 영상 (최대 2개)', '오시는 길 + 약도 전송', '팝업 (최대 10개)', '파비콘', '호스팅 무료', '기본 도메인 무료', '파워링크 조건 충족', '관심고객 관리', '접속통계'],
    disabled: [],
  },
];

const highlights = [
  { icon: Phone, title: '원터치 전화 상담', desc: '고객이 바로 전화할 수 있습니다' },
  { icon: MessageCircle, title: '카카오톡 상담', desc: '부담 없이 문의할 수 있는 채널' },
  { icon: UserCheck, title: '관심고객 접수', desc: '놓치는 고객 없이 DB 수집' },
  { icon: Video, title: '유튜브 영상 삽입', desc: '현장의 생생함을 전달' },
  { icon: BarChart3, title: '접속통계 분석', desc: '유입 경로와 광고 효율 파악' },
  { icon: Globe, title: '도메인·호스팅 무료', desc: '추가 비용 없이 바로 오픈' },
  { icon: Bot, title: '파비콘 무료 세팅', desc: '디테일이 신뢰도를 높입니다' },
];

const steps = [
  { num: '01', title: '문의 접수', desc: '이름, 연락처, 플랜만 선택하면 1분이면 완료됩니다.' },
  { num: '02', title: '자료 전달', desc: '분양 현장 정보, 이미지, 연락처 등을 카카오톡으로 보내주세요.' },
  { num: '03', title: '제작 완료', desc: '24시간 내 전문적인 홈페이지가 오픈됩니다.' },
];

/* ── content 배열을 break 지점으로 분할 ── */
function splitContent(content: typeof import('../data/regionPages').regionPages[0]['content']) {
  const chunks: ({ type: 'article'; items: typeof content } | { type: string })[] = [];
  let current: typeof content = [];

  for (const block of content) {
    if (block.type === 'break') {
      if (current.length > 0) chunks.push({ type: 'article', items: [...current] });
      current = [];
      chunks.push({ type: block.text || 'break' });
    } else {
      current.push(block);
    }
  }
  if (current.length > 0) chunks.push({ type: 'article', items: [...current] });
  return chunks as ({ type: 'article'; items: typeof content } | { type: string })[];
}

/* ── 글 블록 렌더러 ── */
function ArticleBlock({ items }: { items: { type: string; text?: string; items?: string[] }[] }) {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="max-w-none" itemScope itemType="https://schema.org/Article">
          {items.map((block, i) => {
            if (block.type === 'h2') {
              return (
                <h2 key={i} className="text-2xl sm:text-3xl font-bold text-dark mt-14 mb-5 first:mt-0">
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'h3') {
              return (
                <h3 key={i} className="text-xl font-semibold text-dark mt-10 mb-3">
                  {block.text}
                </h3>
              );
            }
            if (block.type === 'ul' && block.items) {
              return (
                <ul key={i} className="space-y-3 mt-4 mb-6">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-600 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              );
            }
            return (
              <p key={i} className="text-gray-600 leading-relaxed mb-5 text-[16.5px]">
                {block.text}
              </p>
            );
          })}
        </article>
      </div>
    </section>
  );
}

/* ── 비주얼 섹션들 ── */
function StepsSection() {
  return (
    <section className="py-14 sm:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">제작 과정</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-dark">
            간단한 3단계로 완성됩니다
          </h2>
          <p className="mt-3 text-gray-500">복잡한 절차 없이, 빠르게 온라인 영업을 시작하세요.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="bg-white rounded-xl p-6 sm:p-8 border border-gray-200 text-center">
              <span className="inline-block text-3xl font-extrabold text-primary/20 mb-3">{s.num}</span>
              <h3 className="text-lg font-bold text-dark mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/inquiry" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors text-sm">
            1분 만에 신청하기 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection({ region }: { region: string }) {
  return (
    <section className="py-14 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">포함 기능</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-dark">
            {region} 분양홈페이지에 포함된 기능
          </h2>
          <p className="mt-3 text-gray-500">분양상담에 실제 필요한 것만 담았습니다.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((h) => (
            <div key={h.title} className="bg-white rounded-xl p-6 border border-gray-200 hover:border-primary/30 hover:shadow-md transition-all">
              <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <h.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-dark mb-1.5">{h.title}</h3>
              <p className="text-sm text-gray-500">{h.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/samples" className="inline-flex items-center gap-2 text-primary font-semibold hover:underline">
            실제 샘플 보기 <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function PricingSection({ region }: { region: string }) {
  return (
    <section className="py-14 sm:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-14">
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">요금제</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-dark">
            {region} 분양홈페이지 제작 비용
          </h2>
          <p className="mt-3 text-gray-500">구독 없이 1회 결제. 기본 1년 사용, 분양 중이면 무료 연장.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`relative rounded-xl p-5 sm:p-8 border ${p.recommended ? 'border-primary bg-primary/5' : 'border-gray-200 bg-white'}`}>
              {p.recommended && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full">추천</span>
              )}
              <h3 className="text-xl font-bold text-dark">{p.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{p.desc}</p>
              <p className="mt-6 text-4xl font-extrabold text-dark">{p.price}</p>
              <p className="text-sm text-gray-400 mt-1">최대 24시간 내 완료</p>
              <ul className="mt-8 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                    <span className="text-gray-700">{f}</span>
                  </li>
                ))}
                {p.disabled.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4.5 h-4.5 text-gray-300 shrink-0 mt-0.5" />
                    <span className="text-gray-400 line-through">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/inquiry"
                className={`mt-8 block text-center py-3.5 rounded-lg font-semibold transition-colors ${p.recommended ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {p.name} 신청하기
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 bg-white border border-gray-200 rounded-xl">
            <Zap className="w-5 h-5 text-gray-500 shrink-0" />
            <div className="text-center sm:text-left">
              <p className="font-semibold text-dark">급행 옵션 (별도 선택)</p>
              <p className="text-sm text-gray-500">6시간 이내 제작 — +5만원 급행료</p>
            </div>
            <Link to="/inquiry" className="w-full sm:w-auto sm:ml-4 px-4 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors text-center shrink-0">
              급행 문의
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 중간 CTA 배너 ── */
function MidCta({ region }: { region: string }) {
  return (
    <section className="py-12 sm:py-16 bg-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
          {region} 분양현장 홈페이지, 고민만 하고 계신가요?
        </h2>
        <p className="text-gray-400 mb-6">오늘 신청하면 내일 홈페이지가 오픈됩니다.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/inquiry" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors text-sm">
            무료 상담 신청 <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/pricing" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-colors text-sm">
            요금제 상세 보기
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── 메인 컴포넌트 ── */
export default function MapRegion() {
  const { slug } = useParams();
  const page = regionPages.find((r) => r.slug === slug);

  if (!page) {
    return (
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-dark">페이지를 찾을 수 없습니다</h1>
          <Link to="/map" className="mt-6 inline-block text-primary font-semibold hover:underline">
            지역 목록으로
          </Link>
        </div>
      </section>
    );
  }

  const breadcrumbs = [
    { name: '홈', path: '/' },
    { name: '지역별 제작', path: '/map' },
    { name: page.title, path: `/map/${page.slug}` },
  ];

  const chunks = splitContent(page.content);

  return (
    <>
      <SeoHead
        title={page.metaTitle}
        description={page.metaDescription}
        path={`/map/${page.slug}`}
        exactTitle
        schema={[
          getWebPageSchema({
            name: page.metaTitle,
            description: page.metaDescription,
            path: `/map/${page.slug}`,
            breadcrumbs,
          }),
          getBreadcrumbSchema(breadcrumbs),
          ...(page.faqs.length > 0 ? [getFAQPageSchema(page.faqs)] : []),
          getProductSchema(plans.map((p) => ({ name: p.name, price: p.price, desc: p.desc }))),
          getLocalBusinessSchema({ region: page.region, description: page.metaDescription, path: `/map/${page.slug}` }),
          getServiceSchema({ region: page.region, description: page.metaDescription, path: `/map/${page.slug}` }),
        ]}
      />

      {/* ───── Hero ───── */}
      <section className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-primary" />
            <span className="text-sm font-semibold text-primary tracking-wider uppercase">
              {page.region} 지역
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dark leading-tight">
            {page.heroHeading}
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
            {page.heroSub}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
            >
              무료 상담 신청
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/samples"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-dark font-semibold rounded-xl border border-gray-200 hover:border-primary/30 transition-colors"
            >
              샘플 보기
            </Link>
          </div>
          {/* 신뢰 뱃지 */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-gray-400">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> 24시간 내 제작</span>
            <span className="flex items-center gap-1.5"><Zap className="w-4 h-4" /> 19만원부터</span>
            <span className="flex items-center gap-1.5"><Shield className="w-4 h-4" /> 구독료 없음</span>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-gray-400">
            {breadcrumbs.map((bc, i) => (
              <li key={bc.path} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                {i < breadcrumbs.length - 1 ? (
                  <Link to={bc.path} className="hover:text-primary transition-colors">{bc.name}</Link>
                ) : (
                  <span className="text-gray-600 font-medium">{bc.name}</span>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* ───── 콘텐츠 + 비주얼 섹션 교차 배치 ───── */}
      {chunks.map((chunk, i) => {
        if (chunk.type === 'article' && 'items' in chunk) {
          return <ArticleBlock key={i} items={chunk.items} />;
        }
        if (chunk.type === 'steps') return <StepsSection key={i} />;
        if (chunk.type === 'features') return <FeaturesSection key={i} region={page.region} />;
        if (chunk.type === 'pricing') {
          return (
            <div key={i}>
              <MidCta region={page.region} />
              <PricingSection region={page.region} />
            </div>
          );
        }
        return null;
      })}

      {/* ───── FAQ ───── */}
      {page.faqs.length > 0 && (
        <section className="py-14 sm:py-20 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-3">FAQ</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-dark">
                {page.region} 분양홈페이지 자주 묻는 질문
              </h2>
            </div>
            <div className="space-y-4">
              {page.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-dark font-semibold hover:text-primary transition-colors">
                    <span className="pr-4">{faq.q}</span>
                    <span className="ml-4 text-gray-400 group-open:rotate-45 transition-transform text-xl leading-none shrink-0">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ───── 최종 CTA ───── */}
      <section className="py-16 sm:py-24 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            {page.region}에서 분양하신다면, 지금 시작하세요
          </h2>
          <p className="text-white/70 text-lg mb-3">
            늦게 시작할수록 경쟁자는 먼저 고객을 만납니다.
          </p>
          <p className="text-white/70 mb-8">
            지금 준비하는 사람이 먼저 기회를 잡습니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-gray-50 transition-colors"
            >
              제작 문의하기
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/samples"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-dark text-white font-semibold rounded-xl hover:bg-primary-dark/80 transition-colors border border-white/20"
            >
              샘플 먼저 보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
