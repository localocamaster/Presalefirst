import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import PreviewModal from '../components/PreviewModal';
import SeoHead from '../components/SeoHead';
import { getWebPageSchema } from '../utils/schema';

const categories = ['전체', '모던형', '카테고리형', '풀페이지형', '프리미엄형'];

const samples = [
  { slug: 'zenith', title: '천안 두산위브더제니스 모델하우스', type: '모던형', desc: '현대적이고 세련된 UI로 분양 정보를 효과적으로 전달하는 홈페이지 (실제 작동 데모)', thumb: '/images/demo/zenith/slide1.png' },
  { slug: 'luxia', title: '청담 루시아 514 더 테라스', type: '모던형', desc: '하이엔드 감성의 다크 테마와 럭셔리한 디자인의 분양 홈페이지 (실제 작동 데모)', thumb: '/images/demo/luxia/slide1.png' },
  { slug: 'ssy', title: '서면 쌍용 더 플래티넘', type: '모던형', desc: '깔끔한 화이트 톤과 블루 포인트로 신뢰감을 주는 모던한 분양 홈페이지 (실제 작동 데모)', thumb: '/images/demo/ssy/slide1.png' },
  { slug: 'dalseo', title: '달서 푸르지오 시그니처', type: '모던형', desc: '푸르지오만의 세련된 그린 컬러와 체계적인 정보 배치가 돋보이는 홈페이지 (실제 작동 데모)', thumb: '/images/demo/dalseo/slide1.png' },
];

export default function Samples() {
  const [activeCategory, setActiveCategory] = useState('전체');
  const [previewSlug, setPreviewSlug] = useState<string | null>(null);

  const filtered = activeCategory === '전체' ? samples : samples.filter(s => s.type === activeCategory);

  return (
    <>
      <SeoHead
        title="샘플 보기"
        description="분양웹사이트제작 | 분양퍼스트 홈페이지 샘플. 아파트 분양 홍보 홈페이지 포트폴리오. 모던형 템플릿 데모 확인."
        path="/samples"
        schema={getWebPageSchema({
          name: '샘플 보기 | 분양퍼스트',
          description: '아파트 분양 홍보 홈페이지 포트폴리오. 모던형 템플릿 데모 확인.',
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
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {filtered.map((s) => (
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
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-primary bg-gray-100 rounded-full mb-3">{s.type}</span>
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
