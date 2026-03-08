import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Phone, Zap, ChevronRight, ChevronLeft, CheckCircle2, ExternalLink,
  Mail, Clock, Send
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import PreviewModal from '../components/PreviewModal';
import SeoHead from '../components/SeoHead';
import { getOrganizationSchema, getWebSiteSchema, getWebPageSchema } from '../utils/schema';
import { submitInquiry } from '../api/inquiry';

const heroSlides = [
  {
    subtitle: '분양 홍보전문 솔루션',
    title: '홈페이지 솔루션\n제작 업체',
    desc: '믿고 맡길 수 있는\n홈페이지 솔루션 제작 업체입니다.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80',
  },
  {
    subtitle: '쉽고 빠른 분양홍보 가능',
    title: '분양홍보 홈페이지\n제작 솔루션',
    desc: '분양홍보 홈페이지 제작 솔루션으로\n간단하게 만들고 바로 홍보에 이용할 수 있습니다.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
  },
  {
    subtitle: '단기간 저렴하게 홍보',
    title: '단기간 계약이 가능',
    desc: '1개월, 6개월, 1년단위\n단기간 계약이 가능합니다.',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1920&q=80',
  },
];

const stats = [
  { value: '18년', label: '업력', sub: '2007년 설립' },
  { value: '20명', label: '직원', sub: '2025년 기준' },
  { value: '3,000', label: '고객 업체', sub: '2025년 기준' },
  { value: '3,500건', label: '프로젝트', sub: '2025년 기준' },
];

const painPoints = [
  { num: '01', title: '"홈페이지 있어요?" 물어볼 때마다 당황스럽다', desc: '고객이 그 질문을 할 때 식은땀이 흘러요.\n명함은 있는데 홈페이지가 없으니 전문성이 없어 보입니다.' },
  { num: '02', title: '직접 만들려니 어렵고, 외주는 너무 비싸다', desc: '견적을 받아보면 수백만 원.\n막 시작한 분양상담사에게는 부담이 너무 큽니다.' },
  { num: '03', title: '영업에 집중해야 하는데 홈페이지까지 신경 쓸 여력이 없다', desc: '고객 관리, 현장 투어, 계약 준비...\n홈페이지 만들 시간이 없습니다.' },
  { num: '04', title: '광고를 돌리는데 부정클릭으로 광고비가 새고 있다', desc: '실제 고객인지 봇인지 구분할 방법이 없어\n광고비가 어디로 새는지 모릅니다.' },
];

const solutions = [
  { title: '분양에 특화된 기능', desc: '전화·카톡 상담, 관심고객 접수, 유튜브 영상, 팝업까지\n분양상담사에게 꼭 필요한 기능만 담았습니다.' },
  { title: '합리적인 비용', desc: '외주 대비 1/10 수준의 비용.\n한 번 결제로 홈페이지를 바로 제작해드립니다.' },
  { title: '빠른 제작 완료', desc: '신청 후 최대 24시간 내 완료.\n급행으로 6시간 이내 제작도\n가능합니다.' },
  { title: '부정클릭 & 접속통계', desc: '시중에서 월 2~3만원짜리 서비스를 프리미엄에 기본 포함.\n광고비를 낭비 없이 운영하세요.' },
];

const samples = [
  { title: '천안 두산위브더제니스 모델하우스', type: '모던형', desc: '현대적이고 세련된 UI로 분양 정보를 효과적으로 전달하는 홈페이지', slug: 'zenith', thumb: '/images/demo/zenith/slide1.png' },
  { title: '화성우방아이유쉘', type: '카테고리형', desc: '탭, 캐러셀, 체크리스트 등 다양한 UI로 구성된 인터랙티브 분양 홈페이지', slug: 'woobangiushell', thumb: '/images/demo/woobangiushell/1765442639_1.슬라이드메인1.webp' },
  { title: '프레쉬하우스', type: '프리미엄형', desc: '풀스크린 섹션 전환과 골드 악센트 다크 테마, 커뮤니티·럭셔리·라이프 섹션 구성의 풀페이지형 분양 홈페이지', slug: 'premium-freshhouse', thumb: '/images/demo/freshhouse/hero2.webp' },
];

const steps = [
  { num: '01', title: '홈페이지 신청', desc: '전화상담을 통해 홈페이지 신청' },
  { num: '02', title: '템플릿 선택', desc: '원하는 디자인 타입 선택' },
  { num: '03', title: '사이트 신청', desc: '호스팅비용 결제' },
  { num: '04', title: '제작자료 제공', desc: '이메일 또는 관리시스템 업로드' },
  { num: '05', title: '홈페이지 세팅', desc: '1차 세팅 완료' },
  { num: '06', title: '홈페이지 제작', desc: '디자인 대행 요청시 24시간 소요' },
  { num: '07', title: '기타서비스', desc: '무료 도메인 연결, 검색엔진 최적화 설정' },
  { num: '08', title: '마케팅서비스', desc: '키워드광고, 배너광고,\n부정클릭 방지, 콜백서비스' },
];

const plans = [
  {
    name: '베이직', price: '19만원', desc: '핵심 기능만 담은 시작 플랜', recommended: false,
    features: ['전화 상담 버튼', '카톡 상담 연결', '유튜브 영상 (최대 2개)', '오시는 길 + 약도 전송', '팝업 (최대 10개)', '파비콘', '호스팅 무료 지원', '기본 도메인 무료', '네이버 파워링크 조건 충족'],
    disabled: ['관심고객 관리', '접속통계', '부정클릭 차단'],
  },
  {
    name: '디럭스', price: '24만원', desc: '관심고객 관리까지 한 번에', recommended: true,
    features: ['전화 상담 버튼', '카톡 상담 연결', '유튜브 영상 (최대 2개)', '오시는 길 + 약도 전송', '팝업 (최대 10개)', '파비콘', '호스팅 무료 지원', '기본 도메인 무료', '네이버 파워링크 조건 충족', '관심고객 관리'],
    disabled: ['접속통계', '부정클릭 차단'],
  },
  {
    name: '프리미엄', price: '29만원', desc: '광고 효율까지 잡는 올인원', recommended: false,
    features: ['전화 상담 버튼', '카톡 상담 연결', '유튜브 영상 (최대 2개)', '오시는 길 + 약도 전송', '팝업 (최대 10개)', '파비콘', '호스팅 무료 지원', '기본 도메인 무료', '네이버 파워링크 조건 충족', '관심고객 관리', '접속통계', '부정클릭 차단'],
    disabled: [],
  },
];

const clientRows = [
  [
    '음성자이 센트럴시티', '울산 두산위브 더센트럴', '위파크 일곡공원', '계양 롯데캐슬 파크시티',
    '평택 화양 동문 디 이스트', '제주 중부공원 제일풍경채', '이천자이 더 레브', '금정역 푸르지오',
    '그랑블힐스테이트', '가장 더퍼스트', '스마트A밸리', '월드메르디앙 디아트',
  ],
  [
    '검단 넥스티엘', '이편한세상 시티 고색', '천안역 경남아너스빌', '송도 자이풍경채 그라노블',
    '달서 푸르지오 시그니처', '서면 쌍용 더 플래티넘', '청담 루시아 514', '천안 두산위브더제니스',
    '김해 한림 풍경채', '부산 해운대 엘시티', '대전 둔산 자이', '수원 광교 힐스테이트',
  ],
  [
    '인천 송도 더샵', '성남 판교 푸르지오', '용인 기흥 스타힐스', '화성 동탄 롯데캐슬',
    '파주 운정 e편한세상', '고양 일산 자이', '의정부 호원 푸르지오', '양주 옥정 자이',
    '안양 평촌 자이', '시흥 정왕 힐스테이트', '안산 단원 푸르지오', '광명 철산 자이',
  ],
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [previewSlug, setPreviewSlug] = useState<string | null>(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [inquiryLoading, setInquiryLoading] = useState(false);
  const [inquiryError, setInquiryError] = useState<string | null>(null);
  const [inquiryForm, setInquiryForm] = useState({ name: '', phone: '', email: '', message: '' });
  const total = heroSlides.length;

  const goTo = useCallback((idx: number) => {
    setCurrent((idx + total) % total);
  }, [total]);

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 6000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <>
      <SeoHead
        title="분양 홈페이지 제작 전문"
        description="분양상담사를 위한 분양 홈페이지 전문. 24시간 내 분양홍보 홈페이지를 구축하며, 분양 현장에 맞춘 솔루션으로 세팅부터 운영까지 한 번에 지원합니다."
        path="/"
        schema={[
          getOrganizationSchema(),
          getWebSiteSchema(),
          getWebPageSchema({
            name: '분양웹사이트제작 분양홍보 홈페이지 제작 전문 솔루션 | 분양퍼스트',
            description: '분양상담사를 위한 분양 홈페이지 전문. 24시간 내 분양홍보 홈페이지를 구축하며, 분양 현장에 맞춘 솔루션으로 세팅부터 운영까지 한 번에 지원합니다.',
            path: '/',
            breadcrumbs: [{ name: '홈', path: '/' }],
          }),
        ]}
      />
      {/* Hero Slider */}
      <section id="hero" className="relative h-screen min-h-[100dvh] sm:min-h-[600px] overflow-hidden">
        <h1 className="sr-only">분양홍보 홈페이지 제작 솔루션</h1>
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transition-transform duration-[8000ms] ease-out"
              style={{
                backgroundImage: `url('${slide.image}')`,
                transform: i === current ? 'scale(1)' : 'scale(1.05)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/25" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
          </div>
        ))}

        <div className="relative z-20 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              {heroSlides.map((slide, i) => (
                <div
                  key={i}
                  className={`transition-opacity duration-300 ${
                    i === current
                      ? 'opacity-100'
                      : 'opacity-0 absolute pointer-events-none'
                  }`}
                  style={{ position: i === current ? 'relative' : 'absolute' }}
                >
                  <p className="text-xs sm:text-sm md:text-base font-medium text-blue-300 tracking-widest uppercase mb-3 sm:mb-5">
                    {slide.subtitle}
                  </p>
                  <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.25] text-white whitespace-normal sm:whitespace-pre-line break-words">
                    {slide.title}
                  </h2>
                  <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg whitespace-normal sm:whitespace-pre-line break-words">
                    {slide.desc}
                  </p>
                  <div className="mt-6 sm:mt-10 flex flex-col min-[400px]:flex-row flex-wrap gap-3 sm:gap-4">
                    <Link
                      to="/inquiry"
                      className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-primary hover:bg-primary-dark text-white text-sm sm:text-base font-semibold rounded-lg shadow-lg transition-all duration-300"
                    >
                      제작 문의하기
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform shrink-0" />
                    </Link>
                    <Link
                      to="/samples"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:px-8 sm:py-4 bg-white/10 backdrop-blur text-white text-sm sm:text-base font-semibold rounded-lg border border-white/25 hover:bg-white/20 transition-all duration-300"
                    >
                      샘플 보기
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={() => goTo(current - 1)}
          className="absolute left-2 sm:left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/25 transition-all"
          aria-label="이전 슬라이드"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => goTo(current + 1)}
          className="absolute right-2 sm:right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/25 transition-all"
          aria-label="다음 슬라이드"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === current ? 'bg-white w-9' : 'bg-white/40 w-2.5 hover:bg-white/60'}`}
              aria-label={`슬라이드 ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <SectionTitle subtitle="함께 성장하는 기업" title="국내 온라인 시장을 선도합니다" description={'사회공헌과 사회기여, 사회적 책임 완수.\n국내 온라인 시장을 선도하고 국가 IT산업 발전에 기여합니다.'} />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {stats.map((s) => (
              <div key={s.label} className="relative group p-4 sm:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary break-words">{s.value}</p>
                <p className="mt-1 sm:mt-2 text-sm sm:text-lg font-semibold text-dark">{s.label}</p>
                <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-gray-400">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-12 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <SectionTitle subtitle="공감되시나요?" title="이런 상황, 혹시 익숙하신가요?" />
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {painPoints.map((p) => (
              <div key={p.num} className="group p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-gray-100 hover:border-red-200 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start gap-4 sm:gap-6">
                  <span className="text-xl sm:text-2xl font-extrabold text-red-400/80 shrink-0">{p.num}</span>
                  <div className="min-w-0">
                    <h3 className="text-base sm:text-lg font-bold text-dark leading-snug break-words">{p.title}</h3>
                    <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-500 leading-relaxed whitespace-normal sm:whitespace-pre-line break-words">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-12 sm:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <SectionTitle subtitle="솔루션 소개" title="분양퍼스트를 만들었습니다" description="분양홍보 홈페이지 제작 솔루션으로 간단하게 만들고 바로 홍보에 이용할 수 있습니다." light />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {solutions.map((s, i) => (
              <div key={i} className="group p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary/40 transition-all duration-300">
                <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 break-words">{s.title}</h3>
                <p className="text-gray-400 leading-relaxed text-xs sm:text-sm whitespace-normal sm:whitespace-pre-line break-words">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/inquiry" className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl hover:shadow-lg transition-all">
              제작 문의하기 <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Samples */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <SectionTitle subtitle="포트폴리오" title="아파트 분양 홍보 홈페이지" description="분양홍보 홈페이지 제작 솔루션으로 간단하게 만들고 바로 홍보에 이용할 수 있습니다." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {samples.map((s, i) => (
              <div key={i} className="group rounded-xl sm:rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div
                  className="relative h-44 sm:h-56 bg-gray-100 overflow-hidden cursor-pointer"
                  onClick={() => setPreviewSlug(s.slug)}
                >
                  <img src={s.thumb} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="px-5 py-2.5 bg-white rounded-lg text-sm font-semibold text-dark flex items-center gap-2 shadow-lg">
                      미리보기 <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <span className="inline-block px-2.5 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold text-primary bg-blue-50 rounded-full mb-2 sm:mb-3">{s.type}</span>
                  <h3 className="text-base sm:text-lg font-bold text-dark mb-1 sm:mb-2 break-words">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 leading-relaxed break-words">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/samples" className="inline-flex items-center gap-1 text-primary font-semibold hover:gap-2 transition-all">
              샘플 더보기 <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <SectionTitle subtitle="제작과정 안내" title="신청당일에 홈페이지 오픈!" description="분양퍼스트의 빠른 서비스를 경험해 보세요." />
          <div className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {steps.map((s) => (
              <div key={s.num} className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all group">
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-100 group-hover:text-blue-200 transition-colors">{s.num}</span>
                <h4 className="mt-1 sm:mt-2 text-sm sm:text-base font-bold text-dark break-words">{s.title}</h4>
                <p className="mt-0.5 sm:mt-1 text-[11px] sm:text-sm text-gray-400 whitespace-normal sm:whitespace-pre-line break-words">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <SectionTitle subtitle="요금제" title="상황에 맞는 플랜을 선택하세요" description="구독 없이 1회 결제로 제작 완료 · 기본 1년 사용, 분양 중이면 무료 연장" />
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {plans.map((p) => (
              <div key={p.name} className={`relative rounded-xl sm:rounded-2xl p-5 sm:p-8 border transition-all duration-300 ${p.recommended ? 'border-primary bg-blue-50/50 shadow-xl shadow-primary/10 md:scale-105' : 'border-gray-200 bg-white hover:shadow-lg'}`}>
                {p.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-white text-xs font-bold rounded-full">추천</span>
                )}
                <h3 className="text-lg sm:text-xl font-bold text-dark">{p.name}</h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">{p.desc}</p>
                <p className="mt-4 sm:mt-6 text-3xl sm:text-4xl font-extrabold text-dark">{p.price}</p>
                <p className="text-xs sm:text-sm text-gray-400 mt-1">최대 24시간 내 완료</p>
                <ul className="mt-5 sm:mt-8 space-y-2 sm:space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs sm:text-sm min-w-0">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-700 break-words flex-1 min-w-0">{f}</span>
                    </li>
                  ))}
                  {p.disabled.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs sm:text-sm min-w-0">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-300 shrink-0 mt-0.5" />
                      <span className="text-gray-400 line-through break-words flex-1 min-w-0">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/inquiry" className={`mt-5 sm:mt-8 block text-center py-2.5 sm:py-3 text-sm sm:text-base rounded-xl font-semibold transition-all ${p.recommended ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-dark' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  {p.name} 신청하기
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-6 sm:mt-8 text-center px-2">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-amber-50 border border-amber-200 rounded-xl max-w-xl mx-auto">
              <Zap className="w-5 h-5 text-amber-500 shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-amber-800 text-center sm:text-left">급행 옵션: 6시간 이내 제작 — +5만원 급행료</span>
            </div>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-12 sm:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <SectionTitle subtitle="신뢰할 수 있는 파트너" title="전국 3,000개 이상의 현장이 함께했습니다" />
          <div className="relative mt-10 space-y-4">
            {clientRows.map((row, rowIdx) => {
              const marqueeClass = ['animate-marquee', 'animate-marquee-reverse', 'animate-marquee-slow'][rowIdx] || 'animate-marquee';
              return (
              <div key={rowIdx} className="overflow-hidden marquee-pause-on-hover">
                <div className={`flex ${marqueeClass}`}>
                  {[...row, ...row].map((c, i) => (
                    <div key={`${rowIdx}-${c}-${i}`} className="flex-shrink-0 mx-2 sm:mx-3 flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-white border border-gray-100 shadow-sm">
                      <span className="text-xs sm:text-sm font-medium text-gray-600 whitespace-nowrap">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Extension Policy */}
      <section className="py-12 sm:py-24 bg-dark text-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight break-words">
            분양이 끝날 때까지<br />홈페이지도 함께합니다
          </h2>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto break-words">
            홈페이지 제작 후 기본 사용 기간은 1년입니다. 분양이 아직 진행 중이라면,
            만료 전에 연락주시면 무료로 연장해드립니다.
          </p>
          <div className="mt-8 sm:mt-12 grid sm:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: '기본 1년 사용', desc: '별도 월 구독료 없이 사용' },
              { title: '만료 전 알림', desc: '카카오톡으로 미리 안내' },
              { title: '무료 연장', desc: '분양 중이면 무료 연장' },
            ].map((item) => (
              <div key={item.title} className="p-4 sm:p-6 bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl hover:bg-white/10 hover:border-primary/40 transition-all duration-300">
                <h4 className="font-bold text-base sm:text-lg">{item.title}</h4>
                <p className="mt-1 sm:mt-2 text-gray-400 text-xs sm:text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - 빠른 제작 문의 */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <SectionTitle subtitle="빠른 제작 문의" title="분양퍼스트의 빠른 서비스를 경험해 보세요" description="홈페이지 신청 문의를 남겨 주시면 담당자가 신속히 연락 드리겠습니다." />
          <div className="mt-8 sm:mt-12 grid lg:grid-cols-5 gap-8 sm:gap-12">
            {/* 연락처 정보 */}
            <div className="lg:col-span-2">
              <h3 className="text-xl sm:text-2xl font-bold text-dark mb-6 sm:mb-8">연락처 정보</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">전화 문의</p>
                    <a href="tel:0507-1339-3982" className="text-base sm:text-lg font-bold text-dark hover:text-primary transition-colors break-all">0507-1339-3982</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-gray-500 mb-1">이메일</p>
                    <p className="text-base sm:text-lg font-bold text-dark break-all">localoca.master@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-500 mb-1">운영 시간</p>
                    <p className="font-medium text-dark">평일 : 09:00 ~ 18:00</p>
                    <p className="font-medium text-dark">토요일 : 09:00 ~ 13:00</p>
                    <p className="text-sm text-gray-500">일요일/공휴일 : 휴무</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 문의 양식 */}
            <div className="lg:col-span-3">
              {inquirySubmitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16 bg-gray-50 rounded-2xl border border-gray-200">
                  <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-dark mb-2">문의가 접수되었습니다!</h3>
                  <p className="text-gray-500">담당자가 빠르게 연락드리겠습니다.</p>
                  <button onClick={() => setInquirySubmitted(false)} className="mt-6 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors">
                    추가 문의하기
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setInquiryError(null);
                    setInquiryLoading(true);
                    const result = await submitInquiry({
                      name: inquiryForm.name,
                      phone: inquiryForm.phone,
                      email: inquiryForm.email || undefined,
                      message: inquiryForm.message || undefined,
                    });
                    setInquiryLoading(false);
                    if (result.success) {
                      setInquirySubmitted(true);
                      setInquiryForm({ name: '', phone: '', email: '', message: '' });
                      setAgreed(false);
                    } else {
                      setInquiryError(result.error || '문의 접수에 실패했습니다.');
                    }
                  }}
                  className="p-5 sm:p-8 md:p-10 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200"
                >
                  <h3 className="text-xl sm:text-2xl font-bold text-dark mb-6 sm:mb-8">문의 양식</h3>
                  {inquiryError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                      {inquiryError}
                    </div>
                  )}
                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">
                        신청자명 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm((f) => ({ ...f, name: e.target.value }))}
                        placeholder="이름을 입력해주세요"
                        className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">
                        연락처 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={inquiryForm.phone}
                        onChange={(e) => setInquiryForm((f) => ({ ...f, phone: e.target.value }))}
                        placeholder="010-0000-0000"
                        className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">이메일</label>
                      <input
                        type="email"
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm((f) => ({ ...f, email: e.target.value }))}
                        placeholder="example@email.com"
                        className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">남길 내용</label>
                      <textarea
                        rows={4}
                        value={inquiryForm.message}
                        onChange={(e) => setInquiryForm((f) => ({ ...f, message: e.target.value }))}
                        placeholder="문의 내용을 입력해주세요"
                        className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                      />
                    </div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-1 w-4.5 h-4.5 text-primary border-gray-300 rounded focus:ring-primary"
                      />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">
                        <span className="underline">이용약관</span> 및 <span className="underline">개인정보처리방침</span>에 동의합니다. <span className="text-red-500">[필수]</span>
                      </span>
                    </label>
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <button
                        type="submit"
                        disabled={!agreed || inquiryLoading}
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-4 bg-primary text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                        {inquiryLoading ? '전송 중...' : '문의하기'}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setInquiryForm({ name: '', phone: '', email: '', message: '' });
                          setAgreed(false);
                          setInquiryError(null);
                        }}
                        className="px-5 py-3.5 sm:px-6 sm:py-4 bg-gray-200 text-gray-600 text-sm sm:text-base font-semibold rounded-xl hover:bg-gray-300 transition-colors"
                      >
                        다시쓰기
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {previewSlug && (
        <PreviewModal
          slug={previewSlug}
          title={samples.find(s => s.slug === previewSlug)?.title ?? ''}
          onClose={() => setPreviewSlug(null)}
        />
      )}
    </>
  );
}
