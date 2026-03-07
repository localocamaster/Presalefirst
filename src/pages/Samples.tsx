import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import PreviewModal from '../components/PreviewModal';
import SeoHead from '../components/SeoHead';
import { getWebPageSchema } from '../utils/schema';


const types = ['전체', '모던형', '카테고리형', '프리미엄형'] as const;

const samples = [
  // 모던형
  { slug: 'zenith', title: '천안 두산위브더제니스 모델하우스', type: '모던형', desc: '현대적이고 세련된 UI로 분양 정보를 효과적으로 전달하는 홈페이지', thumb: '/images/demo/zenith/slide1.png' },
  { slug: 'ssy', title: '서면 쌍용 더 플래티넘', type: '모던형', desc: '깔끔한 화이트 톤과 블루 포인트로 신뢰감을 주는 모던한 분양 홈페이지', thumb: '/images/demo/ssy/slide1.png' },
  { slug: 'dalseo', title: '달서 푸르지오 시그니처', type: '모던형', desc: '그린 포인트 컬러와 깔끔한 레이아웃의 모던 분양 홈페이지', thumb: '/images/demo/dalseo/slide1.png' },

  // 카테고리형
  { slug: 'woobangiushell', title: '화성우방아이유쉘', type: '카테고리형', desc: '탭, 캐러셀, 체크리스트 등 다양한 UI로 구성된 인터랙티브 분양 홈페이지', thumb: '/images/demo/woobangiushell/1765442639_1.슬라이드메인1.webp' },
  { slug: 'gunsan-vivaldi', title: '군산 한라비발디 더프라임', type: '카테고리형', desc: '서브페이지 + 좌측 SNB 구조의 카테고리형 분양 홈페이지. 사업안내, 단지안내, 세대안내(평면도) 별도 페이지 제공', thumb: '/images/demo/gunsan-vivaldi/main-slide1.webp' },
  { slug: 'believe-dable', title: '빌리브 디 에이블', type: '카테고리형', desc: '갤러리 로비, 층별 라운지 등 프리미엄 시설 슬라이더와 세대평면(오피스텔/도시형생활주택/펜트하우스) 구성', thumb: '/images/demo/believe-dable/main-slide1.webp' },

  // 프리미엄형
  // { slug: 'premium-priel', title: '프리미엘', type: '프리미엄형', desc: '골드 악센트의 다크 테마, 풀스크린 히어로 슬라이더와 프리미엄 섹션 구성의 고급 분양 홈페이지', thumb: '/images/demo/premium/main-cg.webp' },
  // { slug: 'premium-oceancity', title: '오션시티', type: '프리미엄형', desc: '블루 악센트의 다크 테마, 해운대 오션뷰 초고층 레지던스 프리미엄 분양 홈페이지', thumb: '/images/demo/premium/premium-nature.webp' },
  { slug: 'premium-freshhouse', title: '프레쉬하우스', type: '프리미엄형', desc: '풀스크린 섹션 전환과 골드 악센트 다크 테마, 커뮤니티·럭셔리·라이프 섹션 구성의 풀페이지형 분양 홈페이지', thumb: '/images/demo/freshhouse/hero2.webp' },
  { slug: 'premium-parkview', title: '상상 파크 뷰 ParkVIEW', type: '프리미엄형', desc: '한강뷰 프리미엄, 오렌지 악센트 다크 테마, 풀스크린 히어로와 프리미엄 섹션 구성의 고급 분양 홈페이지', thumb: '/images/demo/parkview/main-bg.png' },
  { slug: 'premium-aurum', title: '아우름 레지던스 잠실', type: '프리미엄형', desc: '잠실유일의 시니어 레지던스, 골드 악센트 다크 테마, 프레스티지 서비스와 스마트 인테리어 구성의 프리미엄 분양 홈페이지', thumb: '/images/demo/aurum/0421b530aaa61.png' },
];

export default function Samples() {
  const [previewSlug, setPreviewSlug] = useState<string | null>(null);
  const [activeType, setActiveType] = useState<typeof types[number]>('전체');

  return (
    <>
      <SeoHead
        title="샘플 보기"
        description="분양웹사이트제작 | 분양퍼스트 홈페이지 샘플. 아파트 분양 홍보 홈페이지 포트폴리오. 모던형, 프리미엄형, 카테고리형, 풀페이지형 템플릿 데모 확인."
        path="/samples"
        schema={getWebPageSchema({
          name: '샘플 보기 | 분양퍼스트',
          description: '아파트 분양 홍보 홈페이지 포트폴리오. 모던형, 프리미엄형, 카테고리형, 풀페이지형 템플릿 데모 확인.',
          path: '/samples',
          breadcrumbs: [
            { name: '홈', path: '/' },
            { name: '샘플 보기', path: '/samples' },
          ],
        })}
      />
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary tracking-wider uppercase mb-3 sm:mb-4">포트폴리오</span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-dark leading-tight">
            샘플 보기
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-500 max-w-2xl mx-auto break-words">
            분양퍼스트로 제작한 홈페이지 샘플을 확인해보세요.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-gray-400 max-w-xl mx-auto">
            아래 샘플은 제작 스타일을 안내하기 위한 예시 페이지입니다.<br className="hidden sm:inline" />
            실제 제작 시 고객님의 분양 정보와 이미지로 맞춤 제작해 드립니다.
          </p>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
            {types.map((t) => (
              <button
                key={t}
                onClick={() => setActiveType(t)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  activeType === t
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          {(activeType === '전체' ? (['모던형', '카테고리형', '프리미엄형'] as const) : [activeType]).map((type) => {
            const group = samples.filter(s => s.type === type);
            if (group.length === 0) return null;
            return (
              <div key={type} className="mb-16 last:mb-0">
                <h2 className="text-xl sm:text-2xl font-bold text-dark text-center mb-8">{type}</h2>
                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                  {group.map((s) => (
                    <div key={s.slug} className="group rounded-xl overflow-hidden border border-gray-200 hover:border-primary/30 transition-colors w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]">
                      <div
                        className="relative h-48 bg-gray-100 overflow-hidden cursor-pointer"
                        onClick={() => setPreviewSlug(s.slug)}
                      >
                        <img src={s.thumb} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <span className="px-4 py-2 bg-white rounded-lg text-sm font-semibold text-dark flex items-center gap-2 shadow-lg">
                            미리보기 <ExternalLink className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-dark mb-2 break-words">{s.title}</h3>
                        <p className="text-sm text-gray-500 leading-relaxed mb-4 break-words">{s.desc}</p>
                        <Link to="/inquiry" className="text-sm font-semibold text-gray-500 hover:text-primary hover:underline">
                          이 스타일로 신청하기 →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-20 bg-dark">
        <div className="max-w-4xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white break-words">마음에 드는 스타일을 찾으셨나요?</h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-400 break-words">원하시는 템플릿 스타일로 지금 바로 제작 문의를 남겨주세요. 24시간 내에 홈페이지를 오픈해드립니다.</p>
          <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link to="/pricing" className="px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors">
              요금제 보기
            </Link>
            <Link to="/inquiry" className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-colors inline-flex items-center gap-2">
              제작 문의하기 <ArrowRight className="w-5 h-5" />
            </Link>
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
