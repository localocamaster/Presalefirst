import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, X, Menu, UserPlus } from 'lucide-react';
import type { TemplateData } from '../data/templateData';

interface Props {
  data: TemplateData;
  theme: 'zenith' | 'luxia' | 'ssy' | 'dalseo';
}

export default function TemplateLayout({ data, theme }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const isLuxia = theme === 'luxia';
  const isSsy = theme === 'ssy';
  const isDalseo = theme === 'dalseo';
  const themeColor = data.theme.primary;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowFab(window.scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = useCallback((href: string) => {
    if (href === '#reservation') {
      setShowModal(true);
      setMobileOpen(false);
      return;
    }
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 112;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileOpen(false);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setFormName('');
      setFormPhone('');
      setAgreed(false);
    }, 2000);
  };

  /* ── Luxia (dark luxury) vs Default (light) ── */
  const headerBg = isLuxia
    ? (scrolled ? 'rgba(10,10,10,0.95)' : 'rgba(10,10,10,0.8)')
    : (scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,1)');
  const headerShadow = isLuxia
    ? 'none'
    : (scrolled ? '0 1px 8px rgba(0,0,0,0.12)' : '0 1px 4px rgba(0,0,0,0.08)');
  const headerBorder = isLuxia ? 'border-b border-white/5' : '';

  const modalBg = isLuxia ? '#0a0a0a' : themeColor;

  return (
    <div
      className={`min-h-screen ${isLuxia ? 'bg-[#0a0a0a] text-white' : 'bg-white'}`}
      style={{ fontFamily: "'Noto Sans KR', sans-serif" }}
    >
      {/* ── Fixed Header ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBorder}`}
        style={{ background: headerBg, boxShadow: headerShadow }}
      >
        <div className="flex items-center justify-between h-20 md:h-20 px-3 md:px-4 max-w-6xl mx-auto">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#overview')}
            className="flex flex-col items-start min-w-0"
          >
            {isLuxia ? (
              <>
                <span className="text-base md:text-xl font-light tracking-[0.2em] md:tracking-[0.3em] text-white">
                  {data.projectNameEn}
                </span>
                <span className="text-[9px] md:text-[10px] font-bold text-gray-400 -mt-1 uppercase tracking-tighter">
                  {data.brandLine}
                </span>
              </>
            ) : isSsy ? (
              <div className="flex items-center gap-1.5 md:gap-2">
                <span className="text-[13px] md:text-[15px] font-black tracking-widest text-[#2d3a8c] uppercase">SSY</span>
                <span className="text-[13px] md:text-[15px] font-black tracking-wider text-gray-800 uppercase">{data.projectNameEn}</span>
              </div>
            ) : isDalseo ? (
              <div className="flex items-center gap-1.5 md:gap-2">
                <span className="text-[13px] md:text-[15px] font-black tracking-wider text-gray-800 uppercase">DALSEO</span>
                <span className="text-[13px] md:text-[15px] font-black tracking-wider" style={{ color: themeColor }}>PRUGIO</span>
              </div>
            ) : (
              <>
                {data.projectNameEn && (
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-[10px] md:text-[11px] font-bold tracking-widest text-gray-500">We're</span>
                    <span className="text-[12px] md:text-[13px] font-black tracking-widest text-gray-800">{data.projectNameEn}</span>
                  </div>
                )}
                <div className="text-[11px] md:text-[12px] font-bold text-gray-700 tracking-tight leading-tight">
                  {data.projectName}{' '}
                  <span style={{ color: themeColor }} className="font-extrabold">{data.brandLine}</span>
                </div>
              </>
            )}
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center">
            {data.navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className={isLuxia
                  ? 'px-4 py-2.5 text-[15px] font-medium text-gray-300 hover:text-white transition-colors'
                  : isSsy
                    ? 'px-4 py-2.5 text-[15px] font-bold text-gray-700 hover:text-[#2d3a8c] transition-colors'
                    : isDalseo
                      ? 'px-4 py-2.5 text-[15px] font-bold text-gray-700 hover:text-[#166534] transition-colors'
                      : 'px-4 py-2.5 text-base font-bold text-gray-800 hover:text-blue-700 transition-colors border-r border-gray-200 last:border-0'
                }
              >
                {item.label}
              </button>
            ))}
            {isLuxia ? (
              <button
                onClick={() => scrollTo('#reservation')}
                className="ml-5 px-6 py-2.5 rounded-full text-[15px] font-bold text-black bg-white hover:bg-gray-200 transition-all flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4" /> {data.contactPhone}
              </button>
            ) : (
              <button
                onClick={() => scrollTo('#reservation')}
                className="ml-4 px-6 py-2.5 rounded-lg text-[15px] font-extrabold text-white flex items-center gap-1.5 transition-colors"
                style={{ background: themeColor }}
              >
                <Phone className="w-4 h-4" /> {data.contactPhone}
              </button>
            )}
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2.5" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen
              ? <X className={`w-7 h-7 ${isLuxia ? 'text-white' : ''}`} />
              : <Menu className={`w-7 h-7 ${isLuxia ? 'text-white' : ''}`} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          isLuxia ? (
            <div className="md:hidden bg-[#0a0a0a] border-t border-white/10 p-4">
              <div className="flex flex-col gap-2">
                {data.navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => scrollTo(item.href)}
                    className="w-full text-left px-4 py-3.5 text-[15px] font-medium text-gray-300 border-b border-white/5 last:border-0"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="md:hidden bg-white border-t border-gray-100">
              <div
                className="text-center py-2.5 text-xs md:text-sm font-bold text-white flex items-center justify-center gap-1.5"
                style={{ background: isSsy ? '#0cbec7' : themeColor }}
              >
                <Phone className="w-3.5 h-3.5" />
                {data.contactPhone}
              </div>
              {data.navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollTo(item.href)}
                  className="block w-full text-left px-5 py-3.5 text-[15px] font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )
        )}
      </header>

      {/* ── Main: Image Sections ── */}
      <main className={`pt-28 ${isLuxia ? 'bg-[#0a0a0a]' : 'bg-gray-100'}`}>
        <div className={`mx-auto shadow-lg ${isLuxia ? 'max-w-screen-xl bg-black' : 'max-w-screen-lg bg-white'}`}>
          {data.sections.map((section) => (
            <section key={section.id} id={section.id}>
              <img
                src={section.src}
                alt={section.alt}
                className="w-full block"
                style={{ display: 'block' }}
                loading="lazy"
              />
            </section>
          ))}
        </div>
      </main>

      {/* ── Footer ── */}
      <footer
        className={`text-[11px] md:text-xs py-8 md:py-10 px-4 text-center ${
          isLuxia ? 'bg-black border-t border-white/5' : 'bg-black'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          {isLuxia ? (
            <>
              <p className="mb-2 md:mb-3 tracking-[0.15em] md:tracking-[0.3em] text-gray-400 text-xs md:text-sm">{data.theme.footerText}</p>
              <p className="mb-1 text-gray-500">{data.address}</p>
              <p className="mb-4 md:mb-5 text-gray-500">분양홍보관 : 모델하우스 예약제 운영</p>
            </>
          ) : (
            <>
              <p className="mb-2 md:mb-3 text-gray-400 text-xs md:text-sm font-bold">{data.theme.footerText}</p>
              <p className="mb-1 text-gray-500">{data.address}</p>
              <p className="mb-4 md:mb-5 text-gray-500">
                {theme === 'zenith' ? `대표전화 ${data.contactPhone}` : `분양문의: ${data.contactPhone}`}
              </p>
            </>
          )}
          <p className="text-gray-600">
            본 페이지는 분양퍼스트에서 제작한 데모 템플릿입니다.
            <br className="md:hidden" />
            <span className="hidden md:inline"> | </span>
            <Link to="/" className="underline hover:text-gray-400">분양퍼스트</Link>
          </p>
        </div>
      </footer>

      {/* ── Floating Action Buttons ── */}
      {showFab && (
        <div className={`fixed ${isLuxia ? 'bottom-10 right-4 md:right-6' : 'bottom-16 md:bottom-20 right-3 md:right-4'} flex flex-col gap-2 md:gap-3 z-50`}>
          {isLuxia ? (
            <>
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full shadow-2xl bg-white text-black hover:scale-110 transition-all active:scale-95"
                title="관심고객 등록"
              >
                <UserPlus className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <a
                href={`tel:${data.contactPhone}`}
                className="flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full shadow-2xl bg-[#1a1a1a] text-white border border-white/10 hover:scale-110 transition-all"
                title="전화 상담"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </>
          ) : (
            <>
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full shadow-xl text-white animate-pulse"
                style={{ background: themeColor }}
                title="관심고객 등록"
              >
                <UserPlus className="w-5 h-5 md:w-6 md:h-6" />
              </button>
              <a
                href={`tel:${data.contactPhone}`}
                className="flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full shadow-xl text-white"
                style={{ background: themeColor }}
                title="전화 상담"
              >
                <Phone className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            </>
          )}
          <button
            className="flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full shadow-xl bg-[#FEE500] text-[#3c1e1e]"
            title="카카오톡 상담"
          >
            <MessageCircle className="w-5 h-5 md:w-7 md:h-7" />
          </button>
        </div>
      )}

      {/* ── Back to Samples ── */}
      <div className="fixed bottom-3 md:bottom-4 left-3 md:left-4 z-50">
        <Link
          to="/samples"
          className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-black/70 text-white text-[11px] md:text-sm rounded-lg hover:bg-black/90 transition-colors"
        >
          샘플 목록으로
        </Link>
      </div>

      {/* ── Registration Modal ── */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center md:justify-end bg-black/60 p-2 md:p-4">
          <div
            className="relative w-full max-w-sm md:max-w-md rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            style={{ background: modalBg }}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md"
            >
              <X className="w-5 h-5 text-gray-800" />
            </button>

            <div className="p-3 md:p-4">
              <div className="relative group cursor-pointer" onClick={() => setShowModal(false)}>
                <img
                  src={data.sections[0]?.src}
                  alt="이벤트 배너"
                  className="w-full rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-xl border-2 border-dashed border-white/50">
                  <div className="bg-white/90 px-4 py-2 rounded-full shadow-lg">
                    <span className="font-black text-sm text-gray-800">이미지/배너 변경 가능</span>
                  </div>
                  <p className="text-white text-[10px] mt-2 font-bold drop-shadow-md">
                    원하는 이벤트 배너로 변경해 드립니다
                  </p>
                </div>
                <div className="absolute top-2 left-2 bg-black/60 text-white text-[9px] px-2 py-1 rounded font-bold backdrop-blur-sm">
                  관리자 설정 영역
                </div>
              </div>
            </div>

            <div className="flex-1 bg-white mx-3 md:mx-4 mb-3 md:mb-4 rounded-xl p-4 md:p-6 overflow-y-auto">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-4xl mb-4">✓</div>
                  <h3 className="text-xl font-bold text-gray-900">등록 완료</h3>
                  <p className="text-sm text-gray-500 mt-2">관심고객 등록이 완료되었습니다.</p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold" style={{ color: isLuxia ? '#0a0a0a' : themeColor }}>
                      관심고객 등록
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">분양 정보를 가장 먼저 상담받으세요.</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      placeholder="이름 *"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      required
                      className="w-full h-12 px-4 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-gray-400"
                    />
                    <input
                      type="tel"
                      placeholder="휴대폰 번호 * (01012345678)"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      required
                      className="w-full h-12 px-4 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-gray-400"
                    />
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded"
                      />
                      <span className="text-sm text-gray-600">
                        <span className="underline">이용약관</span> 및 <span className="underline">개인정보처리방침</span>에 동의합니다 *
                      </span>
                    </label>
                    <button
                      type="submit"
                      disabled={!agreed}
                      className={`w-full h-14 font-bold text-lg rounded-xl transition-colors shadow-lg disabled:opacity-50 ${
                        isLuxia ? 'bg-[#0a0a0a] hover:bg-black text-white' : 'text-white'
                      }`}
                      style={isLuxia ? undefined : { background: themeColor }}
                    >
                      등록하기
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
