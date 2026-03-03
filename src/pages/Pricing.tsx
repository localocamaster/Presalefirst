import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Zap, ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import SeoHead from '../components/SeoHead';
import { getWebPageSchema, getFAQPageSchema, getProductSchema } from '../utils/schema';

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

const faqs = [
  { q: '구독료가 있나요?', a: '없습니다. 1회 결제로 제작이 완료되며 별도의 월 구독료가 발생하지 않습니다.' },
  { q: '사용 기간은 얼마인가요?', a: '기본 1년 사용입니다. 분양이 아직 진행 중이라면 만료 전 카톡으로 연락주시면 무료로 연장해드립니다.' },
  { q: '급행 제작이 가능한가요?', a: '네, +5만원 급행료 추가 시 6시간 이내에 제작 가능합니다.' },
  { q: '세금계산서 발행이 되나요?', a: '네, 사업자등록증을 보내주시면 세금계산서를 발행해드립니다.' },
  { q: '플랜 변경이 가능한가요?', a: '제작 전에는 변경 가능합니다. 제작 완료 후에는 차액 결제 후 업그레이드가 가능합니다.' },
  { q: '환불 규정은 어떻게 되나요?', a: '제작 시작 전에는 전액 환불 가능합니다. 제작 시작 후에는 진행 단계에 따라 부분 환불됩니다.' },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SeoHead
        title="요금제"
        description="분양웹사이트제작 | 분양퍼스트 요금제. 19만원부터. 베이직·디럭스·프리미엄 플랜. 구독 없이 1회 결제. 분양 중이면 무료 연장."
        path="/pricing"
        schema={[
          getWebPageSchema({
            name: '요금제 | 분양퍼스트',
            description: '19만원부터. 베이직·디럭스·프리미엄 플랜. 구독 없이 1회 결제.',
            path: '/pricing',
            breadcrumbs: [
              { name: '홈', path: '/' },
              { name: '요금제', path: '/pricing' },
            ],
          }),
          getFAQPageSchema(faqs),
          getProductSchema(plans.map((p) => ({ name: p.name, price: p.price, desc: p.desc }))),
        ]}
      />
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary tracking-wider uppercase mb-3 sm:mb-4">요금제</span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-dark leading-tight break-words">
            상황에 맞는 플랜을 선택하세요
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
            구독 없이 1회 결제로 제작 완료. 기본 1년 사용, 분양 중이면 무료 연장.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
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
                    <li key={f} className="flex items-start gap-2.5 text-sm min-w-0">
                      <CheckCircle2 className="w-4.5 h-4.5 text-primary shrink-0 mt-0.5" />
                      <span className="text-gray-700 break-words flex-1 min-w-0">{f}</span>
                    </li>
                  ))}
                  {p.disabled.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm min-w-0">
                      <CheckCircle2 className="w-4.5 h-4.5 text-gray-300 shrink-0 mt-0.5" />
                      <span className="text-gray-400 line-through break-words flex-1 min-w-0">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/inquiry" className={`mt-8 block text-center py-3.5 rounded-lg font-semibold transition-colors ${p.recommended ? 'bg-primary text-white hover:bg-primary-dark' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                  {p.name} 신청하기
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center px-2">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 px-4 sm:px-6 py-4 bg-gray-50 border border-gray-200 rounded-xl max-w-md mx-auto sm:max-w-none">
              <Zap className="w-5 h-5 text-gray-500 shrink-0" />
              <div className="text-center sm:text-left min-w-0">
                <p className="font-semibold text-dark">급행 옵션 (별도 선택)</p>
                <p className="text-sm text-gray-500 break-words">6시간 이내 제작 — +5만원 급행료</p>
              </div>
              <Link to="/inquiry" className="w-full sm:w-auto sm:ml-4 px-4 py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors text-center shrink-0">
                급행 문의
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle title="자주 묻는 질문" />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-3 p-4 sm:p-6 text-left min-w-0"
                >
                  <span className="font-semibold text-dark pr-2 break-words min-w-0 text-sm sm:text-base">Q. {faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">지금 바로 신청하세요</h2>
          <p className="mt-4 text-gray-400">어떤 플랜이 맞는지 모르시겠다면 무료 상담을 받아보세요.</p>
          <div className="mt-8">
            <Link to="/inquiry" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors">
              무료 상담 신청 <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
