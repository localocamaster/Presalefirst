import { Link } from 'react-router-dom';
import {
  Phone, MessageCircle, DollarSign, Zap,
  MapPin, Video, UserCheck, Globe, Server, Calendar,
  CreditCard, Clock, BarChart3, ArrowRight
} from 'lucide-react';
import SectionTitle from '../components/SectionTitle';
import SeoHead from '../components/SeoHead';
import { getWebPageSchema } from '../utils/schema';

const features = [
  {
    icon: Phone,
    num: '01',
    title: '분양에 특화된 기능',
    desc: '전화·카톡 상담 버튼, 관심고객 접수, 유튜브 영상, 팝업 등 분양상담사에게 꼭 필요한 기능만 담았습니다.',
    items: [
      { icon: MapPin, text: '오시는 길 + 약도 전송' },
      { icon: MessageCircle, text: '팝업 기능 (최대 10개)' },
      { icon: Video, text: '유튜브 영상 삽입 (최대 2개)' },
      { icon: UserCheck, text: '관심고객 접수 폼' },
      { icon: MessageCircle, text: '카카오톡 상담 버튼' },
      { icon: Phone, text: '원터치 전화 상담 연결' },
    ],
    gradient: 'from-blue-500 to-cyan-400',
  },
  {
    icon: DollarSign,
    num: '02',
    title: '합리적인 비용',
    desc: '외주 개발사에 맡기면 수백만 원, 분양퍼스트는 19만원부터. 한 번 결제로 제작이 완료되며 별도의 월 구독료가 없습니다.',
    items: [
      { icon: Globe, text: '기본 도메인 무료 제공' },
      { icon: Server, text: '호스팅 비용 무료' },
      { icon: Calendar, text: '분양 중이면 무료 연장' },
      { icon: Clock, text: '기본 1년 사용 보장' },
      { icon: CreditCard, text: '구독 없이 1회 결제' },
      { icon: DollarSign, text: '외주 대비 1/10 수준의 비용' },
    ],
    gradient: 'from-emerald-500 to-teal-400',
  },
  {
    icon: Zap,
    num: '03',
    title: '빠른 제작 완료',
    desc: '신청 후 최대 24시간 내에 홈페이지가 오픈됩니다. 급하시다면 급행 옵션으로 6시간 이내 제작도 가능합니다.',
    items: [
      { icon: Zap, text: '급행 제작: 6시간 이내 (+5만원)' },
      { icon: Clock, text: '일반 제작: 최대 24시간 이내' },
      { icon: MessageCircle, text: '카카오톡으로 실시간 소통' },
      { icon: Zap, text: '수정 요청 즉시 반영' },
      { icon: Globe, text: '제작 완료 후 바로 오픈' },
    ],
    gradient: 'from-amber-500 to-orange-400',
  },
  {
    icon: BarChart3,
    num: '04',
    title: '접속통계',
    desc: '일별/주별/월별 접속통계와 유입 경로 분석을 프리미엄 플랜에 기본 포함했습니다.',
    items: [
      { icon: BarChart3, text: '일별/주별/월별 접속통계' },
      { icon: BarChart3, text: '유입 경로 분석' },
      { icon: BarChart3, text: '실시간 모니터링' },
    ],
    gradient: 'from-purple-500 to-violet-400',
  },
];

const qna = [
  { q: '"홈페이지 있어요?" 물어볼 때마다 당황스럽다', a: '분양퍼스트로 24시간 내에 전문적인 홈페이지를 갖출 수 있습니다.' },
  { q: '직접 만들려니 어렵고, 외주는 너무 비싸다', a: '19만원부터 시작. 전문 디자이너가 제작해드립니다.' },
  { q: '영업에 집중해야 하는데 홈페이지까지 신경 쓸 여력이 없다', a: '자료만 보내주시면 됩니다. 제작부터 세팅까지 모두 대행합니다.' },
];

export default function Service() {
  return (
    <>
      <SeoHead
        title="서비스 소개"
        description="분양웹사이트제작 | 분양퍼스트 서비스 소개. 분양에 특화된 기능, 합리적인 비용, 24시간 제작. 분양상담사를 위한 홈페이지 제작 전문."
        path="/service"
        schema={getWebPageSchema({
          name: '서비스 소개 | 분양퍼스트',
          description: '분양에 특화된 기능, 합리적인 비용, 24시간 제작. 분양상담사를 위한 홈페이지 제작 전문.',
          path: '/service',
          breadcrumbs: [
            { name: '홈', path: '/' },
            { name: '서비스 소개', path: '/service' },
          ],
        })}
      />
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary tracking-wider uppercase mb-3 sm:mb-4">서비스 소개</span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-dark leading-tight break-words">
            분양상담사를 위한<br />홈페이지 제작 전문 솔루션
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
            분양퍼스트는 분양상담사, 부동산 분양 현장을 위한 홈페이지 제작 전문 서비스입니다.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-24">
            {features.map((f, idx) => (
              <div key={f.num} className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 sm:gap-12`}>
                <div className="flex-1 w-full min-w-0">
                  <span className="text-xs sm:text-sm font-bold text-primary">{f.num}</span>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-bold text-dark break-words">{f.title}</h3>
                  <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-500 leading-relaxed break-words">{f.desc}</p>
                  <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {f.items.map((item, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-100">
                        <item.icon className="w-4 h-4 text-gray-400 shrink-0" />
                        <span className="text-sm text-gray-600">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1 w-full">
                  <div className="w-full h-72 bg-gray-100 rounded-2xl flex items-center justify-center border border-gray-200">
                    <f.icon className="w-16 h-16 text-gray-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Q&A */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
          <SectionTitle subtitle="고민 해결" title="이런 고민을 해결합니다" />
          <div className="space-y-4">
            {qna.map((item, i) => (
              <div key={i} className="p-4 sm:p-6 rounded-xl bg-white border border-gray-200">
                <p className="font-semibold text-dark flex items-start gap-3 min-w-0">
                  <span className="shrink-0 text-sm font-bold text-gray-400">Q.</span>
                  <span className="break-words">{item.q}</span>
                </p>
                <p className="mt-3 flex items-start gap-3 text-gray-600 pl-5 sm:pl-8 min-w-0">
                  <span className="shrink-0 text-sm font-bold text-gray-400">A.</span>
                  <span className="break-words">{item.a}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white break-words">지금 바로 시작하세요</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-400 break-words">분양퍼스트와 함께라면 오늘 신청해서 내일 홈페이지를 오픈할 수 있습니다.</p>
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link to="/pricing" className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors inline-flex items-center gap-2">
              요금제 보기 <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/samples" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
              샘플 보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
