import { Link, useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import SeoHead from '../components/SeoHead';
import { getBlogPostingSchema } from '../utils/schema';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-dark">게시글을 찾을 수 없습니다</h1>
          <Link to="/blog" className="mt-6 inline-block text-primary font-semibold hover:underline">
            블로그 목록으로
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <SeoHead
        title={post.title}
        description={post.desc}
        path={`/blog/${post.slug}`}
        schema={getBlogPostingSchema({
          title: post.title,
          description: post.desc,
          image: post.image,
          date: post.date,
          slug: post.slug,
        })}
      />
      <section className="pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="text-sm text-primary hover:underline mb-6 inline-block">
            ← 블로그 목록
          </Link>
          <div className="rounded-xl overflow-hidden mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-80 object-cover"
            />
          </div>
          <div className="mb-4 flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-semibold text-primary bg-gray-100 rounded-full">
              {post.category}
            </span>
            <span className="text-sm text-gray-600">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-dark">{post.title}</h1>
          <p className="mt-4 text-gray-500">{post.desc}</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-gray max-w-none">
            {post.content.map((block, i) => {
              if (block.type === 'h2') {
                return (
                  <h2 key={i} className="text-xl font-bold text-dark mt-12 mb-4">
                    {block.text}
                  </h2>
                );
              }
              if (block.type === 'h3') {
                return (
                  <h3 key={i} className="text-lg font-semibold text-dark mt-8 mb-3">
                    {block.text}
                  </h3>
                );
              }
              if (block.type === 'ul' && block.items) {
                return (
                  <ul key={i} className="list-disc pl-6 space-y-2 mt-2 mb-4">
                    {block.items.map((item, j) => (
                      <li key={j} className="text-gray-600">{item}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-gray-600 leading-relaxed mb-4">
                  {block.text}
                </p>
              );
            })}
          </article>

          <div className="mt-16 pt-8 border-t border-gray-200 flex flex-wrap gap-4">
            <Link
              to="/blog"
              className="px-6 py-3 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
            >
              목록으로 돌아가기
            </Link>
            <Link
              to="/inquiry"
              className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
            >
              제작 문의하기
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
