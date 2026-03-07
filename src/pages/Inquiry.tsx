import { useState, type FormEvent } from 'react';
import { Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { submitInquiry } from '../api/inquiry';
import SeoHead from '../components/SeoHead';
import { getWebPageSchema } from '../utils/schema';

export default function Inquiry() {
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const result = await submitInquiry({
      name: form.name,
      phone: form.phone,
      email: form.email || undefined,
      message: form.message || undefined,
    });
    setLoading(false);
    if (result.success) {
      setSubmitted(true);
      setForm({ name: '', phone: '', email: '', message: '' });
      setAgreed(false);
    } else {
      setError(result.error || '문의 접수에 실패했습니다.');
    }
  };

  return (
    <>
      <SeoHead
        title="제작 문의"
        description="분양웹사이트제작 | 분양퍼스트 제작 문의. 분양 홈페이지 신청. 24시간 내 연락. 전화 0507-1339-3982."
        path="/inquiry"
        schema={getWebPageSchema({
          name: '제작 문의 | 분양퍼스트',
          description: '분양 홈페이지 신청. 24시간 내 연락. 전화 0507-1339-3982.',
          path: '/inquiry',
          breadcrumbs: [
            { name: '홈', path: '/' },
            { name: '제작 문의', path: '/inquiry' },
          ],
        })}
      />
      {/* Hero */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs sm:text-sm font-semibold text-primary tracking-wider uppercase mb-3 sm:mb-4">제작 문의</span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-dark leading-tight break-words">
            빠른 제작 문의
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-500 max-w-2xl mx-auto break-words leading-relaxed">
            분양퍼스트의 빠른 서비스를 경험해 보세요.
            홈페이지 신청 문의를 남겨 주시면 담당자가 신속히 연락 드리겠습니다.
          </p>
        </div>
      </section>

      {/* Form + Contact */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h3 className="text-xl sm:text-2xl font-bold text-dark mb-6 sm:mb-8">연락처 정보</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-500 mb-1">전화 문의</p>
                    <a href="tel:0507-1339-3982" className="text-lg font-bold text-dark hover:text-primary transition-colors break-all">0507-1339-3982</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-500 mb-1">이메일</p>
                    <p className="text-lg font-bold text-dark break-all">localoca.master@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">운영 시간</p>
                    <p className="font-medium text-dark">평일 : 09:00 ~ 18:00</p>
                    <p className="font-medium text-dark">토요일 : 09:00 ~ 13:00</p>
                    <p className="text-sm text-gray-500">일요일/공휴일 : 휴무</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-16 bg-gray-50 rounded-2xl border border-gray-200">
                  <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-dark mb-2">문의가 접수되었습니다!</h3>
                  <p className="text-gray-500">담당자가 빠르게 연락드리겠습니다.</p>
                  <button onClick={() => setSubmitted(false)} className="mt-6 px-6 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-primary-dark transition-colors">
                    추가 문의하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-5 sm:p-8 md:p-10 bg-gray-50 rounded-xl sm:rounded-2xl border border-gray-200">
                  <h3 className="text-xl sm:text-2xl font-bold text-dark mb-6 sm:mb-8">문의 양식</h3>
                  {error && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                      {error}
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
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
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
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                        placeholder="010-0000-0000"
                        className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">이메일</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        placeholder="example@email.com"
                        className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-dark mb-2">남길 내용</label>
                      <textarea
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
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
                        disabled={!agreed || loading}
                        className="flex-1 flex items-center justify-center gap-2 px-5 py-3.5 sm:px-6 sm:py-4 bg-primary text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" />
                        {loading ? '전송 중...' : '문의하기'}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setForm({ name: '', phone: '', email: '', message: '' });
                          setAgreed(false);
                          setError(null);
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
    </>
  );
}
