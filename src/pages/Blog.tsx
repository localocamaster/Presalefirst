import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import SeoHead from '../components/SeoHead';
import { getBlogSchema } from '../utils/schema';

const categories = ['전체', '분양 가이드', '마케팅 팁', '비용 안내', '이용 가이드'];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('전체');

  const filtered = activeCategory === '전체' ? blogPosts : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <>
      <SeoHead
        title="블로그"
        description="분양웹사이트제작 | 분양퍼스트 블로그. 분양 홈페이지 제작, 마케팅 팁, 비용 안내, 이용 가이드 등 분양상담사를 위한 정보."
        path="/blog"
        schema={getBlogSchema()}
      />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold text-primary tracking-wider uppercase mb-4">블로그</span>
          <h1 className="text-4xl md:text-5xl font-bold text-dark leading-tight">
            분양 홈페이지 제작 & 마케팅 정보
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
            분양 홈페이지 제작과 마케팅에 도움이 되는 정보를 공유합니다.
          </p>
        </div>
      </section>

      {/* Filter & Posts */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  activeCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <Link key={post.slug} to={`/blog/${post.slug}`}>
                <article className="rounded-xl overflow-hidden border border-gray-200 hover:border-primary/30 transition-colors h-full flex flex-col">
                  <div className="h-44 bg-gray-100 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 text-xs font-semibold text-primary bg-gray-100 rounded-full">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Clock className="w-3.5 h-3.5" /> {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-dark mb-2">{post.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{post.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-xs text-gray-400">
                        <Calendar className="w-3.5 h-3.5" /> {post.date}
                      </span>
                      <span className="text-sm font-semibold text-primary flex items-center gap-1">
                        읽기 <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
