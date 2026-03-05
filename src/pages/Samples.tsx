import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import PreviewModal from '../components/PreviewModal';
import SeoHead from '../components/SeoHead';
import { getWebPageSchema } from '../utils/schema';


const samples = [
  // 모던형
  { slug: 'zenith', title: '천안 두산위브더제니스 모델하우스', type: '모던형', desc: '현대적이고 세련된 UI로 분양 정보를 효과적으로 전달하는 홈페이지', thumb: '/images/demo/zenith/slide1.png' },
  { slug: 'ssy', title: '서면 쌍용 더 플래티넘', type: '모던형', desc: '깔끔한 화이트 톤과 블루 포인트로 신뢰감을 주는 모던한 분양 홈페이지', thumb: '/images/demo/ssy/slide1.png' },
  { slug: 'hangang', title: '한강 아이파크 시티', type: '모던형', desc: '그린 포인트 컬러와 깔끔한 레이아웃의 모던 분양 홈페이지', thumb: '/images/demo/zenith/slide5.png' },
  { slug: 'haeundae', title: '해운대 자이 오션프론트', type: '모던형', desc: '시원한 블루 컬러로 오션뷰 단지의 매력을 전달하는 홈페이지', thumb: '/images/demo/ssy/slide3.png' },

  // 프리미엄형
  { slug: 'luxia', title: '청담 루시아 514 더 테라스', type: '프리미엄형', desc: '하이엔드 감성의 다크 테마와 럭셔리한 디자인의 분양 홈페이지', thumb: '/images/demo/luxia/slide1.png' },
  { slug: 'apgujeong', title: '압구정 디오르 하우스', type: '프리미엄형', desc: '프리미엄 다크 테마로 고급 주거 브랜드의 품격을 표현한 홈페이지', thumb: '/images/demo/luxia/slide3.png' },
  { slug: 'yongsan', title: '용산 더 시티 센트럴', type: '프리미엄형', desc: '도심 속 하이엔드 레지던스의 고급스러운 분위기를 담은 홈페이지', thumb: '/images/demo/luxia/slide5.png' },

  // 카테고리형
  { slug: 'dalseo', title: '달서 푸르지오 시그니처', type: '카테고리형', desc: '세련된 그린 컬러와 체계적인 정보 배치가 돋보이는 홈페이지', thumb: '/images/demo/dalseo/slide1.png' },
  { slug: 'suseong', title: '수성 SK뷰 레이크파크', type: '카테고리형', desc: '스카이블루 테마로 호수 조망 단지의 가치를 전달하는 홈페이지', thumb: '/images/demo/dalseo/slide4.png' },
  { slug: 'gimpo', title: '김포 e편한세상 레이크뷰', type: '카테고리형', desc: '따뜻한 브라운 톤으로 자연 친화적 분위기를 연출한 홈페이지', thumb: '/images/demo/dalseo/slide6.png' },

  // 풀페이지형
  { slug: 'songpa', title: '송파 헬리오시티', type: '풀페이지형', desc: '오렌지 포인트 컬러로 활기찬 도시 생활을 표현한 풀페이지 홈페이지', thumb: '/images/demo/zenith/slide3.png' },
  { slug: 'gwangan', title: '광안 롯데캐슬 파크뷰', type: '풀페이지형', desc: '딥네이비 컬러로 품격 있는 바다 조망 단지를 소개하는 홈페이지', thumb: '/images/demo/ssy/slide5.png' },
];

export default function Samples() {
  const [previewSlug, setPreviewSlug] = useState<string | null>(null);

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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {samples.map((s) => (
                <div key={s.slug} className="group rounded-xl overflow-hidden border border-gray-200 hover:border-primary/30 transition-colors">
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
