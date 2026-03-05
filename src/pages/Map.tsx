import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { allRegions } from '../data/regionPages';
import SeoHead from '../components/SeoHead';
import { getWebPageSchema, getBreadcrumbSchema } from '../utils/schema';

export default function Map() {
  return (
    <>
      <SeoHead
        title="지역별 분양홈페이지 제작"
        description="전국 지역별 분양 홈페이지 제작 서비스. 서울, 경기, 인천, 부산, 대구 등 전국 어디든 24시간 내 분양현장 홈페이지를 제작합니다."
        path="/map"
        schema={[
          getWebPageSchema({
            name: '지역별 분양홈페이지 제작 | 분양퍼스트',
            description: '전국 지역별 분양 홈페이지 제작 서비스. 서울, 경기, 인천, 부산, 대구 등 전국 어디든 24시간 내 분양현장 홈페이지를 제작합니다.',
            path: '/map',
            breadcrumbs: [
              { name: '홈', path: '/' },
              { name: '지역별 제작', path: '/map' },
            ],
          }),
          getBreadcrumbSchema([
            { name: '홈', path: '/' },
            { name: '지역별 제작', path: '/map' },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4">
            지역별 제작
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
            전국 지역별 분양홈페이지 제작
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
            서울, 경기, 인천, 부산, 대구 등 전국 모든 지역의 분양현장에 최적화된 홈페이지를 제작합니다.
          </p>
        </div>
      </section>

      {/* Region Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allRegions.map((r) => (
              <Link
                key={r.slug}
                to={`/map/${r.slug}`}
                className="group flex items-center gap-4 p-6 rounded-xl border border-gray-200 hover:border-primary/40 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-bold text-dark group-hover:text-primary transition-colors">
                    {r.region}
                  </h2>
                  <p className="text-sm text-gray-500 mt-0.5">{r.title}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-colors shrink-0" />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-gray-500 mb-6">
              위 지역 외에도 전국 모든 분양현장 홈페이지를 제작합니다.
            </p>
            <Link
              to="/inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-colors"
            >
              제작 문의하기
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
