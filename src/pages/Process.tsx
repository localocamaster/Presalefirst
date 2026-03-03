import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import SeoHead from '../components/SeoHead';
import { getWebPageSchema, getFAQPageSchema } from '../utils/schema';

const steps = [
  { num: '01', title: '홈페이지 신청', time: '1분 소요', desc: '당사 홈페이지의 문의 폼 또는 전화상담(0507-1339-3982)을 통해 홈페이지 제작을 신청합니다.', detail: '신청 시 현장명, 연락처, 원하시는 플랜을 알려주시면 됩니다. 신청 후 담당자가 빠르게 연락드립니다.' },
  { num: '02', title: '템플릿 선택', time: '5분 소요', desc: '샘플 페이지에서 원하시는 디자인 타입(카테고리형, 풀페이지형 등)을 선택합니다.', detail: '카테고리형은 메뉴별로 정보를 분류하여 보여주며, 풀페이지형은 한 페이지에서 스크롤로 모든 정보를 확인할 수 있습니다.' },
  { num: '03', title: '비용 결제', time: '즉시 처리', desc: '선택하신 플랜에 맞는 비용을 결제합니다. 결제 확인 후 즉시 전용 주소가 발급됩니다.', detail: '무통장입금, 카드결제 모두 가능합니다. 세금계산서 발행도 가능합니다.' },
  { num: '04', title: '제작 자료 전달', time: '고객 준비', desc: '홈페이지에 들어갈 자료(분양 정보, 사진, 홍보 문구 등)를 이메일 또는 카카오톡으로 보내주세요.', detail: '자료 양식을 따로 보내드립니다. 어떤 자료가 필요한지 상세히 안내해드리니 걱정 마세요.' },
  { num: '05', title: '1차 세팅 완료', time: '수시간 내', desc: '전달받은 자료를 바탕으로 홈페이지 1차 세팅을 진행합니다.', detail: '기본 레이아웃, 컬러, 텍스트, 이미지 등을 배치하여 초안을 완성합니다.' },
  { num: '06', title: '디자인 제작', time: '최대 24시간', desc: '기본 정보 설정과 디자인 대행을 진행합니다. 디자인 대행 요청 시 약 24시간이 소요됩니다.', detail: '디자인 시안을 카카오톡으로 공유드리며, 수정 요청을 반영한 후 최종 확정합니다.' },
  { num: '07', title: '기타 서비스 설정', time: '당일 처리', desc: '무료 도메인 연결, 검색엔진 최적화(SEO) 설정, SSL 인증서 적용 등을 진행합니다.', detail: '네이버, 구글 검색에 홈페이지가 노출될 수 있도록 기본적인 SEO 설정을 해드립니다.' },
  { num: '08', title: '홈페이지 오픈', time: '완료!', desc: '모든 세팅이 완료되면 홈페이지를 오픈합니다.', detail: '오픈 후에도 수정이 필요하시면 언제든 카카오톡으로 요청해주세요. 빠르게 반영해드립니다.' },
];

const faqs = [
  { q: '제작 자료가 없으면 어떻게 하나요?', a: '기본적인 분양 정보(현장명, 위치, 분양가 등)만 알려주시면 됩니다. 나머지는 저희가 구성해드립니다. 공식 브로슈어나 홍보물이 있으시면 함께 보내주시면 더 좋습니다.' },
  { q: '급하게 제작이 필요한데 가능한가요?', a: '급행 옵션(+5만원)을 선택하시면 6시간 이내에 제작이 가능합니다. 신청 시 급행 요청을 말씀해주세요.' },
  { q: '제작 후 수정이 가능한가요?', a: '물론입니다. 카카오톡으로 수정 요청을 보내주시면 당일 반영해드립니다. 분양 현장 변경, 팝업 교체, 문구 수정 등 모두 가능합니다.' },
  { q: '도메인은 어떻게 되나요?', a: '기본 도메인을 무료로 제공합니다. 별도의 도메인을 구매하셨거나 원하시는 도메인이 있으면 연결도 가능합니다.' },
];

export default function Process() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <SeoHead
        title="제작과정"
        description="분양웹사이트제작 | 분양퍼스트 제작과정. 신청당일 홈페이지 오픈. 8단계 간편 프로세스. 문의·템플릿 선택·결제·자료 전달·제작·오픈."
        path="/process"
        schema={[
          getWebPageSchema({
            name: '제작과정 | 분양퍼스트',
            description: '신청당일 홈페이지 오픈. 8단계 간편 프로세스.',
            path: '/process',
            breadcrumbs: [
              { name: '홈', path: '/' },
              { name: '제작과정', path: '/process' },
            ],
          }),
          getFAQPageSchema(faqs),
        ]}
      />
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary tracking-wider uppercase mb-3 sm:mb-4">제작과정</span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-dark leading-tight break-words">
            신청당일에 홈페이지 오픈!
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
            분양퍼스트의 빠른 서비스를 경험해 보세요.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />
            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.num} className="relative flex gap-4 sm:gap-6 md:gap-8 group">
                  <div className="shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-primary rounded-lg sm:rounded-xl flex items-center justify-center text-white font-bold text-sm sm:text-lg z-10">
                    {step.num}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                      <h3 className="text-base sm:text-xl font-bold text-dark break-words">{step.title}</h3>
                      <span className="px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-500 rounded-full">{step.time}</span>
                    </div>
                    <p className="mt-3 text-gray-600 leading-relaxed">{step.desc}</p>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed">{step.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-3 sm:px-6 lg:px-8">
          <SectionTitle title="자주 묻는 질문" />
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 sm:p-6 text-left"
                >
                  <span className="font-semibold text-dark pr-4 text-sm sm:text-base break-words">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-gray-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-gray-600 leading-relaxed break-words">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white break-words">바로 시작하시겠습니까?</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-400 break-words">지금 신청하시면 오늘 안에 홈페이지를 오픈할 수 있습니다.</p>
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link to="/pricing" className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors inline-flex items-center gap-2">
              요금제 확인하기 <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/samples" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors">
              샘플 먼저 보기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
