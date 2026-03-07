import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, MessageCircle, X, Menu, UserPlus,
  ChevronLeft, ChevronRight, ChevronDown,
  Train, Trees, GraduationCap, Sparkles,
  MapPin, Check,
} from 'lucide-react';
import type { CategoryTemplateData } from './categoryTypes';

const locationIcons: Record<string, React.ReactNode> = {
  traffic: <Train className="w-5 h-5" />,
  nature: <Trees className="w-5 h-5" />,
  edu: <GraduationCap className="w-5 h-5" />,
  vision: <Sparkles className="w-5 h-5" />,
};

interface Props {
  data: CategoryTemplateData;
}

export default function CategoryLayout({ data }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Carousel states
  const [premiumIdx, setPremiumIdx] = useState(0);
  const [lifeIdx, setLifeIdx] = useState(0);
  const [interiorIdx, setInteriorIdx] = useState(0);
  const [locationTab, setLocationTab] = useState(data.location.tabs[0]?.id ?? '');

  // Form
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formDate, setFormDate] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const tc = data.theme.primary;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowFab(window.scrollY > 400);
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
      setFormDate('');
      setAgreed(false);
    }, 2000);
  };

  const activeLocTab = data.location.tabs.find(t => t.id === locationTab);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
      {/* ── Header ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,1)',
          boxShadow: scrolled ? '0 2px 12px rgba(0,0,0,0.1)' : '0 1px 4px rgba(0,0,0,0.06)',
        }}
      >
        <div className="flex items-center justify-between h-14 md:h-16 px-3 md:px-6 max-w-7xl mx-auto">
          <button onClick={() => scrollTo('#hero')} className="flex flex-col items-start min-w-0">
            {data.projectNameEn && (
              <span className="text-[11px] md:text-xs font-bold tracking-widest text-gray-400 uppercase">
                {data.projectNameEn}
              </span>
            )}
            <span className="text-sm md:text-base font-black text-gray-900 tracking-tight leading-tight">
              {data.projectName}
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-0.5">
            {data.navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => scrollTo(item.href)}
                  className="px-3 xl:px-4 py-2 text-[13px] xl:text-[14px] font-bold text-gray-700 hover:transition-colors flex items-center gap-1"
                  onMouseEnter={(e) => (e.currentTarget.style.color = tc)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </button>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-white border border-gray-100 rounded-lg shadow-xl min-w-[160px] py-1 z-50">
                    {item.children.map((child) => (
                      <button
                        key={child.label}
                        onClick={() => scrollTo(child.href)}
                        className="block w-full text-left px-4 py-2.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:font-semibold"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => scrollTo('#reservation')}
              className="ml-3 px-5 py-2 rounded-lg text-[13px] font-extrabold text-white flex items-center gap-1.5 transition-colors"
              style={{ background: tc }}
            >
              <Phone className="w-3.5 h-3.5" /> {data.contactPhone}
            </button>
          </nav>

          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 max-h-[70vh] overflow-y-auto">
            <div
              className="text-center py-2.5 text-xs font-bold text-white flex items-center justify-center gap-1.5"
              style={{ background: tc }}
            >
              <Phone className="w-3.5 h-3.5" /> {data.contactPhone}
            </div>
            {data.navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => scrollTo(item.href)}
                  className="block w-full text-left px-5 py-3 text-[13px] font-semibold text-gray-700 border-b border-gray-50"
                >
                  {item.label}
                </button>
                {item.children?.map((child) => (
                  <button
                    key={child.label}
                    onClick={() => scrollTo(child.href)}
                    className="block w-full text-left px-8 py-2.5 text-[12px] text-gray-500 border-b border-gray-50"
                  >
                    {child.label}
                  </button>
                ))}
              </div>
            ))}
          </div>
        )}
      </header>

      {/* ── Hero ── */}
      <section
        id="hero"
        className="relative pt-14 md:pt-16 min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${data.hero.backgroundImage})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          {data.hero.title.map((line, i) => (
            <h1
              key={i}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight md:leading-snug drop-shadow-lg"
            >
              {line}
            </h1>
          ))}
          <p className="mt-4 md:mt-6 text-base md:text-xl text-white/90 font-medium drop-shadow">
            {data.hero.subtitle}
          </p>
          <button
            onClick={() => scrollTo('#reservation')}
            className="mt-6 md:mt-8 px-8 py-3.5 rounded-full text-sm md:text-base font-bold text-white border-2 border-white/60 hover:bg-white/20 transition-colors"
          >
            방문예약 신청
          </button>
        </div>
      </section>

      {/* ── Premium Cards ── */}
      {data.premiumCards.length > 0 && (
        <section id="premium" className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10 md:mb-14">
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: tc }}>
                PREMIUM
              </span>
              <h2 className="mt-2 text-2xl md:text-3xl font-black text-gray-900">단지 프리미엄</h2>
            </div>
            <div className="relative">
              <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                {data.premiumCards.map((card, i) => (
                  <div
                    key={i}
                    className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow"
                  >
                    <div className="h-48 overflow-hidden">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-bold text-gray-900 text-sm">{card.title}</h3>
                      <p className="mt-1 text-xs text-gray-500">{card.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="md:hidden">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <img
                    src={data.premiumCards[premiumIdx]?.image}
                    alt={data.premiumCards[premiumIdx]?.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4 text-center bg-white">
                    <h3 className="font-bold text-gray-900">{data.premiumCards[premiumIdx]?.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{data.premiumCards[premiumIdx]?.subtitle}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4 mt-4">
                  <button
                    onClick={() => setPremiumIdx(i => (i - 1 + data.premiumCards.length) % data.premiumCards.length)}
                    className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <span className="text-sm text-gray-500 font-medium">
                    {premiumIdx + 1} / {data.premiumCards.length}
                  </span>
                  <button
                    onClick={() => setPremiumIdx(i => (i + 1) % data.premiumCards.length)}
                    className="w-10 h-10 rounded-full bg-white shadow flex items-center justify-center"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Features (Checkpoints) ── */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: tc }}>
                {data.projectName}
              </span>
              <h2 className="mt-3 text-2xl md:text-3xl font-black text-gray-900 leading-snug">
                {data.features.title}
              </h2>
              <p className="mt-3 text-sm text-gray-500">{data.features.subtitle}</p>
              <ul className="mt-6 md:mt-8 space-y-3">
                {data.features.checkpoints.map((cp, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: tc }}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </span>
                    <span className="text-sm md:text-base text-gray-700 font-medium">{cp}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {data.features.images.map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden shadow-md">
                  <img src={img.src} alt={img.alt} className="w-full h-36 md:h-44 object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Banners ── */}
      {data.banners.length > 0 && (
        <section className="space-y-0">
          {data.banners.map((banner, i) => (
            <div
              key={i}
              className="relative h-48 md:h-64 flex items-center justify-center overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${banner.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 text-center px-4">
                <h3 className="text-xl md:text-3xl font-black text-white drop-shadow-lg">
                  {banner.title}
                </h3>
                <p className="mt-2 text-sm md:text-base text-white/80">{banner.subtitle}</p>
                {banner.cta && (
                  <button
                    onClick={() => scrollTo('#reservation')}
                    className="mt-4 px-6 py-2.5 rounded-full text-sm font-bold text-white border-2 border-white/60 hover:bg-white/20 transition-colors"
                  >
                    {banner.cta}
                  </button>
                )}
              </div>
            </div>
          ))}
        </section>
      )}

      {/* ── Premium Life Carousel ── */}
      {data.premiumLife.length > 0 && (
        <section id="life" className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: tc }}>
                PREMIUM LIFE
              </span>
              <h2 className="mt-2 text-2xl md:text-3xl font-black text-gray-900">프리미엄 라이프</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={data.premiumLife[lifeIdx]?.image}
                  alt={data.premiumLife[lifeIdx]?.title}
                  className="w-full h-64 md:h-80 object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="px-3 py-1 rounded-full text-[11px] font-bold text-white"
                    style={{ background: tc }}
                  >
                    {data.premiumLife[lifeIdx]?.tag}
                  </span>
                  <span className="text-sm text-gray-400 font-medium">
                    {String(lifeIdx + 1).padStart(2, '0')} / {String(data.premiumLife.length).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3">
                  {data.premiumLife[lifeIdx]?.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                  {data.premiumLife[lifeIdx]?.description}
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <button
                    onClick={() => setLifeIdx(i => (i - 1 + data.premiumLife.length) % data.premiumLife.length)}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setLifeIdx(i => (i + 1) % data.premiumLife.length)}
                    className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Location Tabs ── */}
      <section id="location" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: tc }}>
              LOCATION
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl font-black text-gray-900">{data.location.title}</h2>
            <p className="mt-2 text-sm text-gray-500">{data.location.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6 md:gap-10">
            <div className="md:col-span-3 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={data.location.mainImage}
                alt="입지환경"
                className="w-full h-64 md:h-96 object-cover"
                loading="lazy"
              />
            </div>
            <div className="md:col-span-2">
              <div className="flex flex-wrap gap-2 mb-6">
                {data.location.tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setLocationTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                      locationTab === tab.id
                        ? 'text-white shadow-lg'
                        : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
                    }`}
                    style={locationTab === tab.id ? { background: tc } : undefined}
                  >
                    {locationIcons[tab.icon] ?? <MapPin className="w-4 h-4" />}
                    {tab.label}
                  </button>
                ))}
              </div>
              {activeLocTab && (
                <div className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100">
                  <h3 className="text-lg font-black text-gray-900 mb-4">{activeLocTab.title}</h3>
                  <ul className="space-y-2.5">
                    {activeLocTab.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <span
                          className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5"
                          style={{ background: tc }}
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Interior ── */}
      {data.interiors.length > 0 && (
        <section id="interior" className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: tc }}>
                INTERIOR
              </span>
              <h2 className="mt-2 text-2xl md:text-3xl font-black text-gray-900">인테리어</h2>
            </div>
            <div className="flex justify-center gap-2 mb-8">
              {data.interiors.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setInteriorIdx(i)}
                  className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
                    interiorIdx === i
                      ? 'text-white shadow-lg'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  style={interiorIdx === i ? { background: tc } : undefined}
                >
                  {item.title}
                </button>
              ))}
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={data.interiors[interiorIdx]?.image}
                  alt={data.interiors[interiorIdx]?.title}
                  className="w-full h-64 md:h-80 object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3">
                  {data.interiors[interiorIdx]?.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed whitespace-pre-line">
                  {data.interiors[interiorIdx]?.description}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Map / Directions ── */}
      <section id="map" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: tc }}>
              LOCATION MAP
            </span>
            <h2 className="mt-2 text-2xl md:text-3xl font-black text-gray-900">{data.map.title}</h2>
            <p className="mt-2 text-sm text-gray-500">{data.map.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={data.map.image} alt="위치 안내" className="w-full h-64 md:h-80 object-cover" loading="lazy" />
            </div>
            <div className="space-y-4">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" style={{ color: tc }} />
                  견본주택
                </h3>
                <p className="text-sm text-gray-600">{data.map.modelHouseAddress}</p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4" style={{ color: tc }} />
                  현장 주소
                </h3>
                <p className="text-sm text-gray-600">{data.map.siteAddress}</p>
              </div>
              <div className="flex gap-3">
                {data.map.kakaoMapUrl && (
                  <a
                    href={data.map.kakaoMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl text-center text-sm font-bold transition-colors"
                    style={{ background: '#FEE500', color: '#3c1e1e' }}
                  >
                    카카오맵
                  </a>
                )}
                {data.map.naverMapUrl && (
                  <a
                    href={data.map.naverMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-xl text-center text-sm font-bold text-white transition-colors"
                    style={{ background: '#03C75A' }}
                  >
                    네이버지도
                  </a>
                )}
              </div>
              <div className="text-center pt-2">
                <p className="text-lg font-black" style={{ color: tc }}>
                  분양문의 {data.contactPhone}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Checklist + CTA ── */}
      <section className="py-16 md:py-20" style={{ background: tc }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-black text-white mb-8">방문예약 전 체크리스트</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {data.checklist.items.map((item, i) => (
              <div key={i} className="bg-white/15 backdrop-blur-sm rounded-xl p-4 md:p-5">
                <div className="w-8 h-8 rounded-full bg-white/25 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm md:text-base font-bold text-white">{item}</p>
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="px-10 py-4 bg-white rounded-full text-base font-black hover:bg-gray-100 transition-colors shadow-xl"
            style={{ color: tc }}
          >
            {data.checklist.ctaText}
          </button>
        </div>
      </section>

      {/* ── Inline Reservation Form ── */}
      <section id="contact" className="py-16 md:py-24 bg-white">
        <div className="max-w-xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">방문예약 신청</h2>
            <p className="mt-2 text-sm text-gray-500">
              아래 정보를 입력하시면 빠르게 상담을 도와드립니다.
            </p>
          </div>
          {submitted ? (
            <div className="text-center py-12 bg-gray-50 rounded-2xl">
              <div className="text-4xl mb-4">&#10003;</div>
              <h3 className="text-xl font-bold text-gray-900">예약 완료</h3>
              <p className="text-sm text-gray-500 mt-2">방문예약 신청이 완료되었습니다.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="이름 *"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                required
                className="w-full h-13 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 text-sm"
              />
              <input
                type="tel"
                placeholder="연락처 * (01012345678)"
                value={formPhone}
                onChange={(e) => setFormPhone(e.target.value)}
                required
                className="w-full h-13 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 text-sm"
              />
              <input
                type="date"
                placeholder="방문 희망일"
                value={formDate}
                onChange={(e) => setFormDate(e.target.value)}
                className="w-full h-13 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 text-sm"
              />
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded"
                />
                <span className="text-sm text-gray-600">
                  <Link to="/terms" target="_blank" className="underline">이용약관</Link> 및{' '}
                  <Link to="/privacy" target="_blank" className="underline">개인정보처리방침</Link>에 동의합니다 *
                </span>
              </label>
              <button
                type="submit"
                disabled={!agreed}
                className="w-full h-14 font-bold text-base rounded-xl text-white transition-colors shadow-lg disabled:opacity-50"
                style={{ background: tc }}
              >
                방문예약 신청하기
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-bold text-white text-sm mb-3">{data.theme.footerText}</p>
              {data.theme.footerInfo.developer && (
                <p className="text-xs mb-1">시행 | {data.theme.footerInfo.developer}</p>
              )}
              {data.theme.footerInfo.constructor && (
                <p className="text-xs mb-1">시공 | {data.theme.footerInfo.constructor}</p>
              )}
              {data.theme.footerInfo.trustee && (
                <p className="text-xs mb-1">위탁 | {data.theme.footerInfo.trustee}</p>
              )}
            </div>
            <div>
              <p className="font-bold text-white text-sm mb-3">연락처</p>
              <p className="text-xs mb-1">대표번호: {data.contactPhone}</p>
              {data.theme.footerInfo.bizNumber && (
                <p className="text-xs">사업자등록번호: {data.theme.footerInfo.bizNumber}</p>
              )}
            </div>
            <div>
              <p className="font-bold text-white text-sm mb-3">링크</p>
              <div className="flex gap-4 text-xs">
                <Link to="/privacy" className="hover:text-white underline">개인정보처리방침</Link>
                <Link to="/terms" className="hover:text-white underline">이용약관</Link>
              </div>
            </div>
          </div>
          {data.theme.disclaimer && (
            <p className="text-[10px] text-gray-500 leading-relaxed border-t border-gray-800 pt-6 mb-4">
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
        <div className="fixed bottom-16 md:bottom-20 right-3 md:right-4 flex flex-col gap-2 md:gap-3 z-50">
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full shadow-xl text-white animate-pulse"
            style={{ background: tc }}
            title="방문예약"
          >
            <UserPlus className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          <a
            href={`tel:${data.contactPhone}`}
            className="flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full shadow-xl text-white"
            style={{ background: tc }}
            title="전화 상담"
          >
            <Phone className="w-5 h-5 md:w-6 md:h-6" />
          </a>
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

      {/* ── Quick Modal ── */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-2 md:p-4">
          <div className="relative w-full max-w-sm md:max-w-md rounded-2xl overflow-hidden shadow-2xl bg-white flex flex-col max-h-[90vh]">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5 text-gray-800" />
            </button>
            <div className="p-5 md:p-6 text-center" style={{ background: tc }}>
              <h3 className="text-lg font-black text-white">관심고객 등록</h3>
              <p className="text-sm text-white/80 mt-1">분양 정보를 가장 먼저 상담받으세요.</p>
            </div>
            <div className="p-5 md:p-6 overflow-y-auto">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-4xl mb-4">&#10003;</div>
                  <h3 className="text-xl font-bold text-gray-900">등록 완료</h3>
                  <p className="text-sm text-gray-500 mt-2">관심고객 등록이 완료되었습니다.</p>
                </div>
              ) : (
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
                      <Link to="/terms" target="_blank" className="underline">이용약관</Link> 및{' '}
                      <Link to="/privacy" target="_blank" className="underline">개인정보처리방침</Link>에 동의합니다 *
                    </span>
                  </label>
                  <button
                    type="submit"
                    disabled={!agreed}
                    className="w-full h-14 font-bold text-lg rounded-xl text-white transition-colors shadow-lg disabled:opacity-50"
                    style={{ background: tc }}
                  >
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
