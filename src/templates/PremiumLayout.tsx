import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, MessageCircle, X, Menu, UserPlus,
  ChevronLeft, ChevronRight, ChevronDown, ChevronUp,
  MapPin, Play,
} from 'lucide-react';
import type { PremiumTemplateData } from './premiumTypes';

interface Props {
  data: PremiumTemplateData;
  slug?: string;
}

export default function PremiumLayout({ data, slug }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openGnb, setOpenGnb] = useState(false);
  const isFreshHouse = slug === 'premium-freshhouse'; // FreshHouse만 메가메뉴, 나머지는 개별 드롭다운

  const [heroIdx, setHeroIdx] = useState(0);
  const [communityIdx, setCommunityIdx] = useState(0);
  const [featureIdx, setFeatureIdx] = useState(0);
  const [unitIdx, setUnitIdx] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState<{ [key: string]: boolean }>({});
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const heroVideoRef = useRef<HTMLIFrameElement>(null);

  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const ac = data.theme.accent;
  const baseBg = data.theme.baseBg;
  const altBg = data.theme.altBg;
  const cardBg = data.theme.cardBg;
  const borderC = data.theme.borderColor;
  const hdrScrollBg = data.theme.headerScrollBg;
  const textPrimary = data.theme.textPrimary || '#212121';
  const textSecondary = data.theme.textSecondary || '#666666';
  const isLightTheme = baseBg === '#ffffff' || baseBg.startsWith('#fff') || baseBg.includes('255');
  const isHeaderHovered = scrolled || (isFreshHouse ? openGnb : openDropdown);
  const isLightHeader = isHeaderHovered && (hdrScrollBg === '#ffffff' || hdrScrollBg.startsWith('#fff') || hdrScrollBg.includes('255') || hdrScrollBg.includes('rgba(255'));

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowFab(window.scrollY > 400);
      
      // Intersection Observer for scroll animations
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const id = section.id;
        if (rect.top < window.innerHeight * 0.8 && rect.bottom > 0) {
          setIsVisible(prev => ({ ...prev, [id]: true }));
        }
      });
    };
    window.addEventListener('scroll', onScroll);
    onScroll(); // Initial check
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (data.hero.slides.length <= 1) return;
    const timer = setInterval(() => {
      setHeroIdx(i => (i + 1) % data.hero.slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [data.hero.slides.length]);

  useEffect(() => {
    // Reset animation when feature changes
    setIsVisible(prev => ({
      ...prev,
      [`premium-img-${featureIdx}`]: false,
      [`premium-content-${featureIdx}`]: false,
    }));
    setTimeout(() => {
      setIsVisible(prev => ({
        ...prev,
        [`premium-img-${featureIdx}`]: true,
        [`premium-content-${featureIdx}`]: true,
      }));
    }, 50);
  }, [featureIdx]);

  const scrollTo = useCallback((href: string) => {
    if (href === '#registration') {
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
    setOpenDropdown(null);
    setOpenGnb(false);
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
    <div className="min-h-screen" style={{ background: baseBg, color: isLightTheme ? textPrimary : '#ffffff', fontFamily: "'Noto Sans KR', sans-serif" }}>

      {/* ── Header (히어로 위에 오버레이, 배경 없음) ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled || (isFreshHouse ? openGnb : openDropdown) ? hdrScrollBg : 'transparent',
          backdropFilter: scrolled || (isFreshHouse ? openGnb : openDropdown) ? 'blur(12px)' : 'none',
          borderBottom: scrolled || (isFreshHouse ? openGnb : openDropdown) ? `1px solid ${borderC}` : 'none',
        }}
        onMouseEnter={() => isFreshHouse && setOpenGnb(true)}
        onMouseLeave={() => isFreshHouse && setOpenGnb(false)}
      >
        <div className={`h-24 md:h-28 w-full ${isFreshHouse ? '' : 'pl-2 md:pl-4 lg:pl-6 pr-4 md:pr-8'}`}>
          {isFreshHouse ? (
            <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
              <button onClick={() => scrollTo('#hero')} className="flex flex-col items-start shrink-0">
                <span className={`text-lg md:text-2xl font-light tracking-[0.2em] ${isLightHeader ? 'text-gray-900' : 'text-white'}`}>
                  {data.projectNameEn}
                </span>
                <span className={`text-xs md:text-sm font-bold -mt-0.5 tracking-tight ${isLightHeader ? 'text-gray-600' : 'text-gray-400'}`}>
                  {data.brandLine}
                </span>
              </button>

              <nav className="hidden lg:grid items-center" style={{ gridTemplateColumns: `repeat(${data.navItems.length}, minmax(70px, 1fr))`, gap: '0 1rem', alignItems: 'center' }}>
                {data.navItems.map((item) => (
                  <div key={item.label} className="flex items-center">
                    {item.children?.some(c => (c as { pageId?: string }).pageId) && slug ? (
                      <Link to={item.href.startsWith('#') ? `/demo/${slug}` : item.href} className={`text-lg xl:text-xl font-medium transition-colors flex items-center gap-1 ${isLightHeader ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'}`}>
                        {item.label}
                        <ChevronDown className="w-5 h-5" />
                      </Link>
                    ) : (
                      <button
                        onClick={() => scrollTo(item.href)}
                        className={`text-lg xl:text-xl font-medium transition-colors flex items-center gap-1 ${isLightHeader ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'}`}
                      >
                        {item.label}
                        {item.children && <ChevronDown className="w-5 h-5" />}
                      </button>
                    )}
                  </div>
                ))}
              </nav>

              <div className="flex items-center justify-end gap-2">
                <button
                  onClick={() => scrollTo('#registration')}
                  className="hidden lg:flex px-8 py-3 rounded-full text-xl xl:text-2xl font-bold items-center gap-2"
                  style={{ background: ac, color: '#fff' }}
                >
                  <Phone className="w-5 h-5" /> {data.contactPhone}
                </button>
                <button className="lg:hidden p-2.5" onClick={() => setMobileOpen(!mobileOpen)}>
                  {mobileOpen ? <X className={`w-7 h-7 ${isLightHeader ? 'text-gray-900' : 'text-white'}`} /> : <Menu className={`w-7 h-7 ${isLightHeader ? 'text-gray-900' : 'text-white'}`} />}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between h-full">
              <button onClick={() => scrollTo('#hero')} className="flex flex-col items-start shrink-0">
                <span className={`text-lg md:text-2xl font-light tracking-[0.2em] ${isLightHeader ? 'text-gray-900' : 'text-white'}`}>
                  {data.projectNameEn}
                </span>
                <span className={`text-xs md:text-sm font-bold -mt-0.5 tracking-tight ${isLightHeader ? 'text-gray-600' : 'text-gray-400'}`}>
                  {data.brandLine}
                </span>
              </button>

              <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                {data.navItems.map((item) => {
                  // aurum 프로젝트는 드롭다운 없이 바로 서브페이지로 이동
                  if (slug === 'premium-aurum' && item.children && item.children.length > 0) {
                    const firstChild = item.children[0];
                    const pageId = (firstChild as { pageId?: string }).pageId;
                    if (pageId && data.subPages?.some(sp => sp.pageId === pageId)) {
                      return (
                        <Link
                          key={item.label}
                          to={`/demo/${slug}/${pageId}`}
                          className={`px-5 xl:px-6 py-3 text-lg xl:text-xl font-medium transition-colors block ${isLightHeader ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'}`}
                        >
                          {item.label}
                        </Link>
                      );
                    }
                  }
                  
                  // 기존 드롭다운 로직 (다른 프로젝트용)
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => item.children && slug !== 'premium-aurum' && setOpenDropdown(item.label)}
                      onMouseLeave={() => slug !== 'premium-aurum' && setOpenDropdown(null)}
                    >
                      {item.children?.some(c => (c as { pageId?: string }).pageId) && slug && slug !== 'premium-aurum' ? (
                        <Link to={item.href.startsWith('#') ? `/demo/${slug}` : item.href} className={`px-5 xl:px-6 py-3 text-lg xl:text-xl font-medium transition-colors flex items-center gap-1 ${isLightHeader ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'}`}>
                          {item.label}
                          <ChevronDown className="w-5 h-5" />
                        </Link>
                      ) : (
                        <button
                          onClick={() => scrollTo(item.href)}
                          className={`px-5 xl:px-6 py-3 text-lg xl:text-xl font-medium transition-colors flex items-center gap-1 ${isLightHeader ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'}`}
                        >
                          {item.label}
                          {item.children && slug !== 'premium-aurum' && <ChevronDown className="w-5 h-5" />}
                        </button>
                      )}
                      {item.children && item.children.length > 0 && openDropdown === item.label && slug !== 'premium-aurum' && (
                        <div
                          className="absolute top-full left-0 pt-1 min-w-[160px] py-2 rounded-b-lg z-50"
                          style={{ background: hdrScrollBg, border: `1px solid ${borderC}`, borderTop: 'none' }}
                        >
                          <div className="flex flex-col">
                            {item.children.map((child) => {
                              const pageId = (child as { pageId?: string }).pageId;
                              if (pageId && slug && data.subPages?.some(sp => sp.pageId === pageId)) {
                                return (
                                  <Link key={child.label} to={`/demo/${slug}/${pageId}`} className={`block w-full text-left px-8 py-2.5 text-[15px] transition-colors ${isLightHeader ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}>
                                    {child.label}
                                  </Link>
                                );
                              }
                              return (
                                <button key={child.label} onClick={() => scrollTo((child as { href?: string }).href ?? '#')} className={`block w-full text-left px-8 py-2.5 text-[15px] transition-colors ${isLightHeader ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}>
                                  {child.label}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
                <button
                  onClick={() => scrollTo('#registration')}
                  className="ml-4 px-8 py-3 rounded-full text-xl xl:text-2xl font-bold transition-all flex items-center gap-2"
                  style={{ background: ac, color: '#fff' }}
                >
                  <Phone className="w-5 h-5" /> {data.contactPhone}
                </button>
              </nav>

              <button className="lg:hidden p-2.5" onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen ? <X className={`w-7 h-7 ${isLightHeader ? 'text-gray-900' : 'text-white'}`} /> : <Menu className={`w-7 h-7 ${isLightHeader ? 'text-gray-900' : 'text-white'}`} />}
              </button>
            </div>
          )}
        </div>

        {isFreshHouse && openGnb && (
          <div
            className="hidden lg:block absolute left-0 right-0 top-full pt-6 pb-12"
            style={{ background: hdrScrollBg, borderTop: `1px solid ${borderC}` }}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div
                className="grid gap-x-4 gap-y-4 items-start justify-items-start"
                style={{ gridTemplateColumns: `repeat(${data.navItems.length}, minmax(70px, 1fr))` }}
              >
                {data.navItems.map((item) => (
                  <div key={item.label} className="flex flex-col gap-2 min-w-0 w-full">
                    <span className={`text-xs font-bold uppercase tracking-wider ${isLightHeader ? 'text-gray-700' : 'text-white/70'}`}>{item.label}</span>
                    {item.children && item.children.length > 0 ? (
                      <div className="flex flex-col gap-0.5">
                        {item.children.map((child) => {
                          const pageId = (child as { pageId?: string }).pageId;
                          if (pageId && slug && data.subPages?.some(sp => sp.pageId === pageId)) {
                            return (
                              <Link key={child.label} to={`/demo/${slug}/${pageId}`} className={`text-[15px] transition-colors py-1 ${isLightHeader ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}>
                                {child.label}
                              </Link>
                            );
                          }
                          return (
                            <button key={child.label} onClick={() => scrollTo((child as { href?: string }).href ?? '#')} className={`text-left text-[15px] transition-colors py-1 ${isLightHeader ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}>
                              {child.label}
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <button onClick={() => scrollTo(item.href)} className={`text-left text-[15px] transition-colors py-1 ${isLightHeader ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}>
                        바로가기
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {mobileOpen && (
          <div className="lg:hidden max-h-[70vh] overflow-y-auto" style={{ background: baseBg, borderTop: `1px solid ${borderC}` }}>
            <a
              href={`tel:${data.contactPhone}`}
              className="block text-center py-3 text-sm font-bold text-white flex items-center justify-center gap-1.5"
              style={{ background: ac }}
            >
              <Phone className="w-4 h-4" /> {data.contactPhone}
            </a>
            {data.navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => scrollTo(item.href)}
                  className="block w-full text-left px-5 py-3.5 text-[15px] font-medium text-gray-300"
                  style={{ borderBottom: `1px solid ${borderC}` }}
                >
                  {item.label}
                </button>
                {item.children?.map((child) => {
                  const pageId = (child as { pageId?: string }).pageId;
                  if (pageId && slug && data.subPages?.some(sp => sp.pageId === pageId)) {
                    return (
                      <Link key={child.label} to={`/demo/${slug}/${pageId}`} className="block w-full text-left px-8 py-3 text-[14px] text-gray-500" style={{ borderBottom: `1px solid ${borderC}` }}>
                        {child.label}
                      </Link>
                    );
                  }
                  return (
                    <button key={child.label} onClick={() => scrollTo((child as { href?: string }).href ?? '#')} className="block w-full text-left px-8 py-3 text-[14px] text-gray-500" style={{ borderBottom: `1px solid ${borderC}` }}>
                      {child.label}
                    </button>
                  );
                })}
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
            {slide.videoId && slide.videoType === 'vimeo' ? (
              <iframe
                ref={i === heroIdx ? heroVideoRef : null}
                src={heroIdx === i || i === 0 ? `https://player.vimeo.com/video/${slide.videoId}?background=1&autoplay=1&loop=1&muted=1&controls=0&playsinline=1` : undefined}
                className="absolute inset-0 w-full h-full scale-105"
                style={{ 
                  minWidth: '100%', 
                  minHeight: '100%',
                  objectFit: 'cover',
                  pointerEvents: 'none',
                }}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading={i === 0 ? 'eager' : 'lazy'}
              />
            ) : (
              <div
                className="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[8000ms] ease-out"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          </div>
        ))}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          {currentSlide?.title.map((line, i) => (
            <h1
              key={`hero-${heroIdx}-${i}`}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight drop-shadow-2xl animate-fade-in-up"
              style={{ 
                animationDelay: `${i * 200}ms`,
                animationFillMode: 'both',
              }}
            >
              {line}
            </h1>
          ))}
          <p 
            key={`hero-subtitle-${heroIdx}`}
            className="mt-4 md:mt-6 text-base md:text-xl text-white/80 font-light tracking-wide animate-fade-in-up"
            style={{ 
              animationDelay: `${(currentSlide?.title.length || 0) * 200}ms`,
              animationFillMode: 'both',
            }}
          >
            {currentSlide?.subtitle.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < currentSlide.subtitle.split('\n').length - 1 && <br />}
              </span>
            ))}
          </p>
          <button
            key={`hero-btn-${heroIdx}`}
            onClick={() => scrollTo('#registration')}
            className="mt-8 px-8 py-3.5 rounded-full text-sm md:text-base font-bold text-white border-2 border-white/40 hover:bg-white/20 hover:border-white/60 hover:scale-110 transition-all duration-300 tracking-wider animate-fade-in-up shadow-lg hover:shadow-xl"
            style={{ 
              animationDelay: `${((currentSlide?.title.length || 0) + 1) * 200}ms`,
              animationFillMode: 'both',
            }}
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

      {/* ── Brand Introduction ── */}
      {data.brand && (
        <section 
          id="brand" 
          className={`py-20 md:py-28 transition-all duration-1000 ${
            isVisible.brand ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ background: altBg }}
        >
          <div className="max-w-6xl mx-auto px-4">
            {data.brand.image && (
              <div className="mb-12 text-center">
                <img 
                  src={data.brand.image} 
                  alt="브랜드 소개" 
                  className="mx-auto max-w-4xl w-full object-contain transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
              </div>
            )}
            {data.brand.content && (
              <div className="max-w-4xl mx-auto text-center space-y-6">
                {data.brand.content.split('\n\n').map((paragraph, i) => (
                  <p 
                    key={i}
                    className={`text-base md:text-lg lg:text-xl leading-relaxed transition-all duration-700 ${
                      isVisible[`brand-p-${i}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ 
                      transitionDelay: `${i * 200}ms`,
                      color: isLightTheme ? textPrimary : 'rgba(255,255,255,0.9)'
                    }}
                    id={`brand-p-${i}`}
                  >
                    {paragraph.split('\n').map((line, j) => (
                      <span key={j}>
                        {line}
                        {j < paragraph.split('\n').length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── Videos ── */}
      {data.videos && data.videos.items.length > 0 && (
        <section 
          id="videos" 
          className={`py-20 md:py-28 transition-all duration-1000 ${
            isVisible.videos ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ background: baseBg }}
        >
          <div className="max-w-6xl mx-auto px-4">
            {data.videos.title && (
              <div className="text-center mb-12">
                <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: ac }}>
                  VIDEO
                </span>
                <h2 className="mt-3 text-2xl md:text-4xl font-black" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{data.videos.title}</h2>
                {data.videos.subtitle && (
                  <p className="mt-3 text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{data.videos.subtitle}</p>
                )}
              </div>
            )}
            <div className="grid md:grid-cols-2 gap-8">
              {data.videos.items.map((video, i) => (
                <div
                  key={i}
                  className={`group relative rounded-2xl overflow-hidden transition-all duration-700 hover:shadow-2xl ${
                    isVisible[`video-${i}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    border: `1px solid ${borderC}`,
                    transitionDelay: `${i * 150}ms`,
                  }}
                  id={`video-${i}`}
                >
                  {videoPlaying[video.videoId] ? (
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <iframe
                        src={
                          video.type === 'youtube'
                            ? `https://www.youtube.com/embed/${video.videoId}?autoplay=1&rel=0&controls=1&modestbranding=1`
                            : `https://player.vimeo.com/video/${video.videoId}?autoplay=1`
                        }
                        className="absolute inset-0 w-full h-full"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <div
                      className="relative cursor-pointer overflow-hidden"
                      style={{ paddingBottom: '56.25%' }}
                      onClick={() => setVideoPlaying(prev => ({ ...prev, [video.videoId]: true }))}
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title || '동영상'}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:shadow-2xl" style={{ background: ac }}>
                          <Play className="w-10 h-10 md:w-12 md:h-12 text-white ml-1" fill="white" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Overview ── */}
      <section 
        id="overview" 
        className={`py-20 md:py-28 transition-all duration-1000 ${
          isVisible.overview ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ background: baseBg }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: ac }}>
              PROJECT OVERVIEW
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-black leading-snug" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>
              {data.overview.title}
            </h2>
            <p className="mt-3 text-sm md:text-base" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{data.overview.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="rounded-2xl overflow-hidden">
              <img src={data.overview.image} alt="사업개요" className="w-full object-contain" loading="lazy" />
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
        <section 
          id="community" 
          className={`py-20 md:py-28 transition-all duration-1000 ${
            isVisible.community ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ background: altBg }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: ac }}>
                COMMUNITY
              </span>
              <h2 className="mt-3 text-2xl md:text-4xl font-black" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{data.community.title}</h2>
              <p className="mt-3 text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{data.community.subtitle}</p>
            </div>
            <div className="hidden md:grid md:grid-cols-3 gap-5">
              {data.community.items.map((item, i) => (
                <div
                  key={i}
                  className={`group rounded-2xl overflow-hidden transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                    isVisible[`community-${i}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    background: cardBg, 
                    border: `1px solid ${borderC}`,
                    transitionDelay: `${i * 100}ms`,
                  }}
                  id={`community-${i}`}
                >
                  <div className="h-52 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125" 
                      loading="lazy" 
                    />
                  </div>
                  <div className="p-5 transition-transform duration-300 group-hover:translate-y-[-4px]">
                    <h3 className="font-bold text-base" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{item.description}</p>
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
                  <h3 className="font-bold" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{data.community.items[communityIdx]?.title}</h3>
                  <p className="mt-2 text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{data.community.items[communityIdx]?.description}</p>
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
      <section 
        id="premium" 
        className={`py-20 md:py-28 transition-all duration-1000 ${
          isVisible.premium ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ background: baseBg }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: ac }}>
              PREMIUM
            </span>
            <h2 className="mt-3 text-2xl md:text-4xl font-black" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{data.premium.title}</h2>
            <p className="mt-3 text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{data.premium.subtitle}</p>
          </div>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className={`rounded-2xl overflow-hidden group transition-all duration-700 ${
              isVisible[`premium-img-${featureIdx}`] ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`} style={{ border: `1px solid ${borderC}` }} id={`premium-img-${featureIdx}`}>
              <img
                src={currentFeature?.image}
                alt={currentFeature?.title}
                className="w-full object-contain transition-all duration-700 group-hover:scale-110"
                loading="lazy"
              />
            </div>
            <div className={`transition-all duration-700 ${
              isVisible[`premium-content-${featureIdx}`] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`} id={`premium-content-${featureIdx}`}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl md:text-6xl font-black transition-all duration-500 hover:scale-110" style={{ color: ac, opacity: 0.4 }}>
                  {currentFeature?.number}
                </span>
                <h3 className="text-xl md:text-2xl font-black transition-all duration-300 hover:translate-x-2" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>
                  {currentFeature?.title}
                </h3>
              </div>
              <p className="text-sm md:text-base leading-relaxed mb-8 whitespace-pre-line" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>
                {currentFeature?.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {data.premium.features.map((f, i) => (
                  <button
                    key={i}
                    onClick={() => setFeatureIdx(i)}
                    className="px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 hover:scale-110 hover:shadow-lg"
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
        <section 
          id="life" 
          className={`py-20 md:py-28 transition-all duration-1000 ${
            isVisible.life ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ background: altBg }}
        >
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: ac }}>
                LIFESTYLE
              </span>
              <h2 className="mt-3 text-2xl md:text-4xl font-black" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{data.life.title}</h2>
              <p className="mt-3 text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{data.life.subtitle}</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.life.cards.map((card, i) => (
                <div 
                  key={i} 
                  className={`group relative h-72 md:h-80 rounded-2xl overflow-hidden transition-all duration-700 hover:shadow-2xl ${
                    isVisible[`life-card-${i}`] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ 
                    border: `1px solid ${borderC}`,
                    transitionDelay: `${i * 100}ms`,
                  }}
                  id={`life-card-${i}`}
                >
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-colors" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                    <h3 className="text-lg md:text-xl font-black" style={{ color: isLightTheme ? '#ffffff' : '#ffffff' }}>{card.title}</h3>
                    <p className="mt-1 text-sm" style={{ color: isLightTheme ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.7)' }}>{card.subtitle}</p>
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
              <h2 className="mt-3 text-2xl md:text-4xl font-black" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{data.units.title}</h2>
              <p className="mt-3 text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{data.units.subtitle}</p>
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
                <h3 className="text-xl md:text-2xl font-black mb-2" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{currentUnit?.label}</h3>
                <div className="flex gap-4 mb-6">
                  <span className="text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>전용면적 <strong style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{currentUnit?.area}</strong></span>
                  <span className="text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{currentUnit?.rooms}</span>
                </div>
                <ul className="space-y-3">
                  {currentUnit?.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>
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
              <h2 className="mt-3 text-2xl md:text-4xl font-black" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{data.news.title}</h2>
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
                    <h3 className="mt-1 text-sm font-bold line-clamp-2 leading-snug" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{item.title}</h3>
                    <p className="mt-2 text-[11px]" style={{ color: isLightTheme ? textSecondary : '#6b7280' }}>{item.date}</p>
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
            <h2 className="mt-3 text-2xl md:text-4xl font-black" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{data.map.title}</h2>
            <p className="mt-3 text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{data.map.subtitle}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden">
              <img src={data.map.modelHouseImage} alt="모델하우스 위치" className="w-full object-contain" loading="lazy" />
            </div>
            <div className="space-y-4">
              <div className="rounded-xl p-5" style={{ background: cardBg, border: `1px solid ${borderC}` }}>
                <h3 className="font-bold mb-2 flex items-center gap-2" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>
                  <MapPin className="w-4 h-4" style={{ color: ac }} />
                  견본주택 (모델하우스)
                </h3>
                <p className="text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{data.map.modelHouseAddress}</p>
              </div>
              <div className="rounded-xl p-5" style={{ background: cardBg, border: `1px solid ${borderC}` }}>
                <h3 className="font-bold mb-2 flex items-center gap-2" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>
                  <MapPin className="w-4 h-4" style={{ color: ac }} />
                  현장 주소
                </h3>
                <p className="text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{data.map.siteAddress}</p>
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
            <h2 className="mt-3 text-2xl md:text-3xl font-black" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{data.registration.title}</h2>
            <p className="mt-3 text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{data.registration.subtitle}</p>
          </div>
          {submitted ? (
            <div className="text-center py-12 rounded-2xl" style={{ background: cardBg, border: `1px solid ${borderC}` }}>
              <div className="text-4xl mb-4">&#10003;</div>
              <h3 className="text-xl font-bold" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>등록 완료</h3>
              <p className="text-sm mt-2" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>관심고객 등록이 완료되었습니다.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="이름 *" value={formName} onChange={(e) => setFormName(e.target.value)} required
                className="w-full h-13 px-4 rounded-xl placeholder-gray-500 focus:outline-none text-sm"
                style={{ background: cardBg, border: `1px solid ${borderC}`, color: isLightTheme ? textPrimary : '#ffffff' }} />
              <input type="tel" placeholder="연락처 * (01012345678)" value={formPhone} onChange={(e) => setFormPhone(e.target.value)} required
                className="w-full h-13 px-4 rounded-xl placeholder-gray-500 focus:outline-none text-sm"
                style={{ background: cardBg, border: `1px solid ${borderC}`, color: isLightTheme ? textPrimary : '#ffffff' }} />
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-0.5 w-4 h-4 rounded" />
                <span className="text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>
                  <span className="underline">이용약관</span> 및 <span className="underline">개인정보처리방침</span>에 동의합니다 *
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
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-8">
            <div className="text-left">
              <p className="font-bold text-sm mb-3 tracking-wider" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{data.theme.footerText}</p>
              {data.theme.footerInfo.developer && <p className="text-xs mb-1" style={{ color: isLightTheme ? textSecondary : '#6b7280' }}>시행 시공 {data.theme.footerInfo.developer}</p>}
              {data.theme.footerInfo.trustee && <p className="text-xs text-gray-500 mb-1">위탁 | {data.theme.footerInfo.trustee}</p>}
            </div>
            <div className="text-right">
              <p className="font-bold text-white text-sm mb-3">연락처</p>
              <p className="text-xs text-gray-500 mb-1">대표번호: {data.contactPhone}</p>
              {data.theme.footerInfo.bizNumber && <p className="text-xs text-gray-500">사업자등록번호: {data.theme.footerInfo.bizNumber}</p>}
            </div>
          </div>
          {data.theme.disclaimer && (
            <p className="text-[10px] text-gray-600 leading-relaxed pt-6 mb-4 text-center" style={{ borderTop: `1px solid ${borderC}` }}>
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
                      <span className="underline">이용약관</span> 및 <span className="underline">개인정보처리방침</span>에 동의합니다 *
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
