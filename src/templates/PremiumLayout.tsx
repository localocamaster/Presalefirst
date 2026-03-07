import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, MessageCircle, X, Menu, UserPlus,
  ChevronLeft, ChevronRight, ChevronDown, ChevronUp,
  MapPin,
} from 'lucide-react';
import type { PremiumTemplateData } from './premiumTypes';

interface Props {
  data: PremiumTemplateData;
}

export default function PremiumLayout({ data }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const [heroIdx, setHeroIdx] = useState(0);
  const [communityIdx, setCommunityIdx] = useState(0);
  const [featureIdx, setFeatureIdx] = useState(0);
  const [unitIdx, setUnitIdx] = useState(0);

  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const ac = data.theme.accent;
  const baseBg = data.theme.baseBg;
  const altBg = data.theme.altBg;
  const cardBg = data.theme.cardBg;
  const borderC = data.theme.borderColor;
  const hdrBg = data.theme.headerBg;
  const hdrScrollBg = data.theme.headerScrollBg;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowFab(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (data.hero.slides.length <= 1) return;
    const timer = setInterval(() => {
      setHeroIdx(i => (i + 1) % data.hero.slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [data.hero.slides.length]);

  const scrollTo = useCallback((href: string) => {
    if (href === '#registration') {
      setShowModal(true);
      setMobileOpen(false);
      return;
    }
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 64;
      window.scrollTo({ top, behavior: 'smooth' });
    }
    setMobileOpen(false);
    setOpenDropdown(null);
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

  const currentSlide = data.hero.slides[heroIdx];
  const currentFeature = data.premium.features[featureIdx];
  const currentUnit = data.units.types[unitIdx];

  // Active button style
  const activeBtn: React.CSSProperties = { background: ac, color: '#fff' };
  const inactiveBtn: React.CSSProperties = { background: cardBg, color: '#9ca3af', borderColor: borderC };

  return (
    <div className="min-h-screen text-white" style={{ background: baseBg, fontFamily: "'Noto Sans KR', sans-serif" }}>

      {/* ── Header ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? hdrScrollBg : hdrBg,
          backdropFilter: 'blur(12px)',
          borderBottom: `1px solid ${borderC}`,
        }}
      >
        <div className="flex items-center justify-between h-14 md:h-16 px-4 md:px-8 max-w-7xl mx-auto">
          <button onClick={() => scrollTo('#hero')} className="flex flex-col items-start">
            <span className="text-sm md:text-lg font-light tracking-[0.2em] text-white">
              {data.projectNameEn}
            </span>
            <span className="text-[9px] md:text-[10px] font-bold text-gray-400 -mt-0.5 tracking-tight">
              {data.brandLine}
            </span>
          </button>

          <nav className="hidden lg:flex items-center gap-0.5">
            {data.navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => scrollTo(item.href)}
                  className="px-3 xl:px-4 py-2 text-[13px] font-medium text-gray-300 hover:text-white transition-colors flex items-center gap-1"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </button>
                {item.children && openDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 rounded-lg shadow-2xl min-w-[160px] py-1 z-50"
                    style={{ background: cardBg, border: `1px solid ${borderC}` }}
                  >
                    {item.children.map((child) => (
                      <button
                        key={child.label}
                        onClick={() => scrollTo(child.href)}
                        className="block w-full text-left px-4 py-2.5 text-[13px] text-gray-400 hover:text-white hover:bg-white/5"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => scrollTo('#registration')}
              className="ml-4 px-5 py-2 rounded-full text-[13px] font-bold transition-all flex items-center gap-1.5"
              style={{ background: ac, color: '#fff' }}
            >
              <Phone className="w-3.5 h-3.5" /> {data.contactPhone}
            </button>
          </nav>

          <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden max-h-[70vh] overflow-y-auto" style={{ background: baseBg, borderTop: `1px solid ${borderC}` }}>
            <a
              href={`tel:${data.contactPhone}`}
              className="block text-center py-2.5 text-xs font-bold text-white flex items-center justify-center gap-1.5"
              style={{ background: ac }}
            >
              <Phone className="w-3.5 h-3.5" /> {data.contactPhone}
            </a>
            {data.navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => scrollTo(item.href)}
                  className="block w-full text-left px-5 py-3 text-[13px] font-medium text-gray-300"
                  style={{ borderBottom: `1px solid ${borderC}` }}
                >
                  {item.label}
                </button>
                {item.children?.map((child) => (
                  <button
                    key={child.label}
                    onClick={() => scrollTo(child.href)}
                    className="block w-full text-left px-8 py-2.5 text-[12px] text-gray-500"
                    style={{ borderBottom: `1px solid ${borderC}` }}
                  >
                    {child.label}
                  </button>
                ))}
              </div>
            ))}
          </div>
        )}
      </header>

      {/* ── Hero Slider ── */}
      <section id="hero" className="relative h-screen overflow-hidden">
        {data.hero.slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: heroIdx === i ? 1 : 0 }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center scale-105"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          </div>
        ))}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          {currentSlide?.title.map((line, i) => (
            <h1
              key={`${heroIdx}-${i}`}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-2xl"
            >
              {line}
            </h1>
          ))}
          <p className="mt-4 md:mt-6 text-base md:text-xl text-white/80 font-light tracking-wide">
            {currentSlide?.subtitle}
          </p>
          <button
            onClick={() => scrollTo('#registration')}
            className="mt-8 px-8 py-3.5 rounded-full text-sm md:text-base font-bold text-white border-2 border-white/40 hover:bg-white/15 transition-all tracking-wider"
          >
            관심고객 등록
          </button>
        </div>
        {data.hero.slides.length > 1 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
            {data.hero.slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setHeroIdx(i)}
                className="h-1 rounded-full transition-all duration-500"
                style={{
                  width: heroIdx === i ? 32 : 16,
                  background: heroIdx === i ? ac : 'rgba(255,255,255,0.4)',
                }}
              />
            ))}
          </div>
        )}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white/50" />
        </div>
      </section>

      {/* ── Overview ── */}
      <section id="overview" className="py-20 md:py-28" style={{ background: baseBg }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: ac }}>
              PROJECT OVERVIEW
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-black text-white leading-snug">
              {data.overview.title}
            </h2>
            <p className="mt-3 text-sm md:text-base text-gray-500">{data.overview.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="rounded-2xl overflow-hidden">
              <img src={data.overview.image} alt="사업개요" className="w-full h-64 md:h-96 object-cover" loading="lazy" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.overview.items.map((item, i) => (
                <div key={i} className="rounded-xl p-4 md:p-5" style={{ background: cardBg, border: `1px solid ${borderC}` }}>
                  <p className="text-[11px] text-gray-500 font-medium mb-1">{item.label}</p>
                  <p className="text-sm md:text-base font-bold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Community ── */}
      {data.community.items.length > 0 && (
        <section id="community" className="py-20 md:py-28" style={{ background: altBg }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: ac }}>
                COMMUNITY
              </span>
              <h2 className="mt-3 text-2xl md:text-4xl font-black text-white">{data.community.title}</h2>
              <p className="mt-3 text-sm text-gray-500">{data.community.subtitle}</p>
            </div>
            <div className="hidden md:grid md:grid-cols-3 gap-5">
              {data.community.items.map((item, i) => (
                <div
                  key={i}
                  className="group rounded-2xl overflow-hidden transition-all hover:shadow-lg"
                  style={{ background: cardBg, border: `1px solid ${borderC}` }}
                >
                  <div className="h-52 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-white text-base">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:hidden">
              <div className="rounded-2xl overflow-hidden" style={{ background: cardBg, border: `1px solid ${borderC}` }}>
                <div className="h-52 overflow-hidden">
                  <img src={data.community.items[communityIdx]?.image} alt={data.community.items[communityIdx]?.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-white">{data.community.items[communityIdx]?.title}</h3>
                  <p className="mt-2 text-sm text-gray-400">{data.community.items[communityIdx]?.description}</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 mt-4">
                <button
                  onClick={() => setCommunityIdx(i => (i - 1 + data.community.items.length) % data.community.items.length)}
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: cardBg }}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-sm text-gray-500 font-medium">
                  {communityIdx + 1} / {data.community.items.length}
                </span>
                <button
                  onClick={() => setCommunityIdx(i => (i + 1) % data.community.items.length)}
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: cardBg }}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Premium Features ── */}
      <section id="premium" className="py-20 md:py-28" style={{ background: baseBg }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: ac }}>
              PREMIUM
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-black text-white">{data.premium.title}</h2>
            <p className="mt-3 text-sm text-gray-500">{data.premium.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="rounded-2xl overflow-hidden" style={{ border: `1px solid ${borderC}` }}>
              <img
                src={currentFeature?.image}
                alt={currentFeature?.title}
                className="w-full h-64 md:h-[420px] object-cover transition-all duration-500"
                loading="lazy"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl md:text-6xl font-black" style={{ color: ac, opacity: 0.4 }}>
                  {currentFeature?.number}
                </span>
                <h3 className="text-xl md:text-2xl font-black text-white">{currentFeature?.title}</h3>
              </div>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed mb-8">
                {currentFeature?.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {data.premium.features.map((f, i) => (
                  <button
                    key={i}
                    onClick={() => setFeatureIdx(i)}
                    className="px-4 py-2 rounded-full text-sm font-bold transition-all"
                    style={featureIdx === i ? activeBtn : inactiveBtn}
                  >
                    {f.number}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Life ── */}
      {data.life.cards.length > 0 && (
        <section id="life" className="py-20 md:py-28" style={{ background: altBg }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: ac }}>
                LIFESTYLE
              </span>
              <h2 className="mt-3 text-2xl md:text-4xl font-black text-white">{data.life.title}</h2>
              <p className="mt-3 text-sm text-gray-500">{data.life.subtitle}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.life.cards.map((card, i) => (
                <div key={i} className="group relative h-72 md:h-80 rounded-2xl overflow-hidden" style={{ border: `1px solid ${borderC}` }}>
                  <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <h3 className="text-lg md:text-xl font-black text-white">{card.title}</h3>
                    <p className="mt-1 text-sm text-white/70">{card.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Unit Types ── */}
      {data.units.types.length > 0 && (
        <section id="units" className="py-20 md:py-28" style={{ background: baseBg }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: ac }}>
                UNIT PLAN
              </span>
              <h2 className="mt-3 text-2xl md:text-4xl font-black text-white">{data.units.title}</h2>
              <p className="mt-3 text-sm text-gray-500">{data.units.subtitle}</p>
            </div>
            <div className="flex justify-center gap-3 mb-10">
              {data.units.types.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setUnitIdx(i)}
                  className="px-6 py-2.5 rounded-full text-sm font-bold transition-all"
                  style={unitIdx === i ? activeBtn : inactiveBtn}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="rounded-2xl overflow-hidden" style={{ background: cardBg, border: `1px solid ${borderC}` }}>
                <img src={currentUnit?.image} alt={currentUnit?.label} className="w-full h-64 md:h-96 object-contain bg-white p-4" loading="lazy" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-white mb-2">{currentUnit?.label}</h3>
                <div className="flex gap-4 mb-6">
                  <span className="text-sm text-gray-400">전용면적 <strong className="text-white">{currentUnit?.area}</strong></span>
                  <span className="text-sm text-gray-400">{currentUnit?.rooms}</span>
                </div>
                <ul className="space-y-3">
                  {currentUnit?.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5" style={{ background: ac }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── News ── */}
      {data.news.items.length > 0 && (
        <section id="news" className="py-20 md:py-28" style={{ background: altBg }}>
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: ac }}>
                MEDIA
              </span>
              <h2 className="mt-3 text-2xl md:text-4xl font-black text-white">{data.news.title}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {data.news.items.map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden transition-all group hover:shadow-lg"
                  style={{ background: cardBg, border: `1px solid ${borderC}` }}
                >
                  <div className="h-44 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <span className="text-[11px] font-bold" style={{ color: ac }}>{item.source}</span>
                    <h3 className="mt-1 text-sm font-bold text-white line-clamp-2 leading-snug">{item.title}</h3>
                    <p className="mt-2 text-[11px] text-gray-500">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Map ── */}
      <section id="map" className="py-20 md:py-28" style={{ background: baseBg }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: ac }}>
              LOCATION
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-black text-white">{data.map.title}</h2>
            <p className="mt-3 text-sm text-gray-500">{data.map.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden">
              <img src={data.map.modelHouseImage} alt="모델하우스 위치" className="w-full h-64 md:h-80 object-cover" loading="lazy" />
            </div>
            <div className="space-y-4">
              <div className="rounded-xl p-5" style={{ background: cardBg, border: `1px solid ${borderC}` }}>
                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" style={{ color: ac }} />
                  견본주택 (모델하우스)
                </h3>
                <p className="text-sm text-gray-400">{data.map.modelHouseAddress}</p>
              </div>
              <div className="rounded-xl p-5" style={{ background: cardBg, border: `1px solid ${borderC}` }}>
                <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" style={{ color: ac }} />
                  현장 주소
                </h3>
                <p className="text-sm text-gray-400">{data.map.siteAddress}</p>
              </div>
              <div className="flex gap-3">
                {data.map.kakaoMapUrl && (
                  <a href={data.map.kakaoMapUrl} target="_blank" rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl text-center text-sm font-bold"
                    style={{ background: '#FEE500', color: '#3c1e1e' }}>카카오맵</a>
                )}
                {data.map.naverMapUrl && (
                  <a href={data.map.naverMapUrl} target="_blank" rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl text-center text-sm font-bold text-white"
                    style={{ background: '#03C75A' }}>네이버지도</a>
                )}
              </div>
              <div className="text-center pt-2">
                <p className="text-lg font-black" style={{ color: ac }}>분양문의 {data.contactPhone}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Registration Inline ── */}
      <section id="registration" className="py-20 md:py-28" style={{ background: altBg }}>
        <div className="max-w-lg mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: ac }}>REGISTRATION</span>
            <h2 className="mt-3 text-2xl md:text-3xl font-black text-white">{data.registration.title}</h2>
            <p className="mt-3 text-sm text-gray-500">{data.registration.subtitle}</p>
          </div>
          {submitted ? (
            <div className="text-center py-12 rounded-2xl" style={{ background: cardBg, border: `1px solid ${borderC}` }}>
              <div className="text-4xl mb-4">&#10003;</div>
              <h3 className="text-xl font-bold text-white">등록 완료</h3>
              <p className="text-sm text-gray-400 mt-2">관심고객 등록이 완료되었습니다.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="이름 *" value={formName} onChange={(e) => setFormName(e.target.value)} required
                className="w-full h-13 px-4 rounded-xl text-white placeholder-gray-500 focus:outline-none text-sm"
                style={{ background: cardBg, border: `1px solid ${borderC}` }} />
              <input type="tel" placeholder="연락처 * (01012345678)" value={formPhone} onChange={(e) => setFormPhone(e.target.value)} required
                className="w-full h-13 px-4 rounded-xl text-white placeholder-gray-500 focus:outline-none text-sm"
                style={{ background: cardBg, border: `1px solid ${borderC}` }} />
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-0.5 w-4 h-4 rounded" />
                <span className="text-sm text-gray-400">
                  <Link to="/terms" target="_blank" className="underline hover:text-white">이용약관</Link> 및{' '}
                  <Link to="/privacy" target="_blank" className="underline hover:text-white">개인정보처리방침</Link>에 동의합니다 *
                </span>
              </label>
              <button type="submit" disabled={!agreed}
                className="w-full h-14 font-bold text-base rounded-xl text-white transition-colors shadow-lg disabled:opacity-50"
                style={{ background: ac }}>
                관심고객 등록하기
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 px-4" style={{ background: baseBg, borderTop: `1px solid ${borderC}` }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-bold text-white text-sm mb-3 tracking-wider">{data.theme.footerText}</p>
              {data.theme.footerInfo.developer && <p className="text-xs text-gray-500 mb-1">시행 | {data.theme.footerInfo.developer}</p>}
              {data.theme.footerInfo.constructor && <p className="text-xs text-gray-500 mb-1">시공 | {data.theme.footerInfo.constructor}</p>}
              {data.theme.footerInfo.trustee && <p className="text-xs text-gray-500 mb-1">위탁 | {data.theme.footerInfo.trustee}</p>}
            </div>
            <div>
              <p className="font-bold text-white text-sm mb-3">연락처</p>
              <p className="text-xs text-gray-500 mb-1">대표번호: {data.contactPhone}</p>
              {data.theme.footerInfo.bizNumber && <p className="text-xs text-gray-500">사업자등록번호: {data.theme.footerInfo.bizNumber}</p>}
            </div>
            <div>
              <p className="font-bold text-white text-sm mb-3">링크</p>
              <div className="flex gap-4 text-xs text-gray-500">
                <Link to="/privacy" className="hover:text-white underline">개인정보처리방침</Link>
                <Link to="/terms" className="hover:text-white underline">이용약관</Link>
              </div>
            </div>
          </div>
          {data.theme.disclaimer && (
            <p className="text-[10px] text-gray-600 leading-relaxed pt-6 mb-4" style={{ borderTop: `1px solid ${borderC}` }}>
              {data.theme.disclaimer}
            </p>
          )}
          <p className="text-[11px] text-gray-600 text-center">
            본 페이지는 분양퍼스트에서 제작한 데모 템플릿입니다.{' '}
            <Link to="/" className="underline hover:text-gray-400">분양퍼스트</Link>
          </p>
        </div>
      </footer>

      {/* ── FAB ── */}
      {showFab && (
        <div className="fixed bottom-10 right-3 md:right-5 flex flex-col gap-2.5 z-50">
          <button onClick={() => setShowModal(true)}
            className="flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full shadow-2xl text-white hover:scale-110 transition-all"
            style={{ background: ac }} title="관심고객 등록">
            <UserPlus className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <a href={`tel:${data.contactPhone}`}
            className="flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full shadow-2xl text-white hover:scale-110 transition-all"
            style={{ background: cardBg, border: `1px solid ${borderC}` }} title="전화 상담">
            <Phone className="w-5 h-5 md:w-6 md:h-6" />
          </a>
          <button className="flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full shadow-2xl bg-[#FEE500] text-[#3c1e1e]" title="카카오톡 상담">
            <MessageCircle className="w-5 h-5 md:w-7 md:h-7" />
          </button>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full shadow-2xl text-white hover:opacity-80 transition-all"
            style={{ background: cardBg, border: `1px solid ${borderC}` }} title="맨 위로">
            <ChevronUp className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      )}

      {/* ── Back to Samples ── */}
      <div className="fixed bottom-3 md:bottom-4 left-3 md:left-4 z-50">
        <Link to="/samples"
          className="inline-block px-3 md:px-4 py-1.5 md:py-2 text-white text-[11px] md:text-sm rounded-lg hover:opacity-80 transition-colors backdrop-blur-sm"
          style={{ background: cardBg, border: `1px solid ${borderC}` }}>
          샘플 목록으로
        </Link>
      </div>

      {/* ── Quick Modal ── */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-2 md:p-4">
          <div className="relative w-full max-w-sm md:max-w-md rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]" style={{ background: altBg }}>
            <button onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full">
              <X className="w-5 h-5 text-black" />
            </button>
            <div className="p-5 md:p-6 text-center text-white" style={{ background: ac }}>
              <h3 className="text-lg font-black">관심고객 등록</h3>
              <p className="text-sm text-white/80 mt-1">분양 정보를 가장 먼저 상담받으세요.</p>
            </div>
            <div className="p-5 md:p-6 overflow-y-auto">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-4xl mb-4">&#10003;</div>
                  <h3 className="text-xl font-bold text-white">등록 완료</h3>
                  <p className="text-sm text-gray-400 mt-2">관심고객 등록이 완료되었습니다.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" placeholder="이름 *" value={formName} onChange={(e) => setFormName(e.target.value)} required
                    className="w-full h-12 px-4 rounded-lg text-white placeholder-gray-500 focus:outline-none"
                    style={{ background: cardBg, border: `1px solid ${borderC}` }} />
                  <input type="tel" placeholder="휴대폰 번호 * (01012345678)" value={formPhone} onChange={(e) => setFormPhone(e.target.value)} required
                    className="w-full h-12 px-4 rounded-lg text-white placeholder-gray-500 focus:outline-none"
                    style={{ background: cardBg, border: `1px solid ${borderC}` }} />
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-0.5 w-4 h-4 rounded" />
                    <span className="text-sm text-gray-400">
                      <Link to="/terms" target="_blank" className="underline hover:text-white">이용약관</Link> 및{' '}
                      <Link to="/privacy" target="_blank" className="underline hover:text-white">개인정보처리방침</Link>에 동의합니다 *
                    </span>
                  </label>
                  <button type="submit" disabled={!agreed}
                    className="w-full h-14 font-bold text-lg rounded-xl text-white transition-colors shadow-lg disabled:opacity-50"
                    style={{ background: ac }}>
                    등록하기
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
