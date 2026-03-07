import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, MessageCircle, X, Menu, UserPlus,
  ChevronLeft, ChevronRight, ChevronDown,
  MapPin, Train, Trees, GraduationCap, ShoppingBag,
} from 'lucide-react';
import type {
  Category2TemplateData,
  Category2SubPage,
  OverviewSubPage,
  ImageSubPage,
  LocationSubPage,
  UnitSubPage,
  DirectionsSubPage,
} from './category2Types';

const poiIcons: Record<string, React.ReactNode> = {
  traffic: <Train className="w-4 h-4" />,
  nature: <Trees className="w-4 h-4" />,
  edu: <GraduationCap className="w-4 h-4" />,
  shopping: <ShoppingBag className="w-4 h-4" />,
};

interface Props {
  data: Category2TemplateData;
}

export default function Category2Layout({ data }: Props) {
  const [currentPage, setCurrentPage] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGnb, setOpenGnb] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const [stickySnb, setStickySnb] = useState(false);
  const snbRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Form
  const [formName, setFormName] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formDate, setFormDate] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const tc = data.theme.primary;

  // Find current sub page data
  const currentSubPage = currentPage
    ? data.subPages.find(p => p.pageId === currentPage)
    : null;

  // Find which nav group the current page belongs to
  const currentNavGroup = currentPage
    ? data.navItems.find(nav => nav.children.some(c => c.pageId === currentPage))
    : null;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowFab(window.scrollY > 400);
      // SNB sticky logic
      if (snbRef.current && contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        setStickySnb(rect.top < 80);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Auto slide
  useEffect(() => {
    if (currentPage || data.mainSlides.length <= 1) return;
    const timer = setInterval(() => {
      setSlideIdx(i => (i + 1) % data.mainSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentPage, data.mainSlides.length]);

  const navigateTo = useCallback((pageId: string) => {
    if (pageId === 'reservation') {
      setShowModal(true);
      setMobileOpen(false);
      setOpenGnb(null);
      return;
    }
    setCurrentPage(pageId);
    setMobileOpen(false);
    setOpenGnb(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goHome = useCallback(() => {
    setCurrentPage(null);
    setMobileOpen(false);
    setOpenGnb(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      setFormMessage('');
      setAgreed(false);
    }, 2000);
  };

  // ─── Renderers ───

  const renderOverview = (page: OverviewSubPage) => (
    <div>
      {page.description && (
        <p className="text-sm text-gray-600 leading-relaxed mb-8">{page.description}</p>
      )}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <tbody>
            {page.infoTable.map((row, i) => (
              <tr key={i} className="border-b border-gray-200">
                <th
                  className="text-left py-4 px-5 text-sm font-bold text-white w-36 md:w-44"
                  style={{ background: tc }}
                >
                  {row.label}
                </th>
                <td className="py-4 px-5 text-sm text-gray-700 bg-white">{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {page.mainImage && (
        <div className="mt-8 rounded-xl overflow-hidden shadow-md">
          <img src={page.mainImage} alt={page.title} className="w-full object-cover" loading="lazy" />
        </div>
      )}
    </div>
  );

  const renderImage = (page: ImageSubPage) => (
    <div>
      {page.description && (
        <p className="text-sm text-gray-600 leading-relaxed mb-8">{page.description}</p>
      )}
      <div className="space-y-6">
        {page.images.map((img, i) => (
          <div key={i}>
            <div className="rounded-xl overflow-hidden shadow-md">
              <img src={img.src} alt={img.alt} className="w-full object-cover" loading="lazy" />
            </div>
            {img.caption && (
              <p className="mt-2 text-xs text-gray-500 text-center">{img.caption}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderLocation = (page: LocationSubPage) => (
    <div>
      {page.description && (
        <p className="text-sm text-gray-600 leading-relaxed mb-8">{page.description}</p>
      )}
      <div className="rounded-xl overflow-hidden shadow-md mb-8">
        <img src={page.mainImage} alt={page.title} className="w-full object-cover" loading="lazy" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {page.poiGroups.map((group, i) => (
          <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
            <h4 className="flex items-center gap-2 font-bold text-gray-900 mb-3">
              <span className="w-7 h-7 rounded-full flex items-center justify-center text-white" style={{ background: tc }}>
                {group.icon ? (poiIcons[group.icon] ?? <MapPin className="w-3.5 h-3.5" />) : <MapPin className="w-3.5 h-3.5" />}
              </span>
              {group.category}
            </h4>
            <ul className="space-y-1.5">
              {group.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5" style={{ background: tc }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  const renderUnit = (page: UnitSubPage) => (
    <div>
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="px-4 py-1.5 rounded-full text-sm font-bold text-white" style={{ background: tc }}>
          {page.unitName}
        </span>
        <span className="text-sm text-gray-500">{page.area}</span>
      </div>
      <div className="rounded-xl overflow-hidden shadow-md mb-6 bg-white p-4">
        <img src={page.floorPlanImage} alt={`${page.unitName} 평면도`} className="w-full object-contain max-h-[500px] mx-auto" loading="lazy" />
      </div>
      {page.roomInfo && page.roomInfo.length > 0 && (
        <div className="overflow-x-auto mb-6">
          <table className="w-full border-collapse">
            <tbody>
              {page.roomInfo.map((info, i) => (
                <tr key={i} className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-bold bg-gray-50 text-gray-700 w-32">{info.label}</th>
                  <td className="py-3 px-4 text-sm text-gray-600">{info.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {page.features && page.features.length > 0 && (
        <ul className="space-y-2">
          {page.features.map((feat, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-1.5" style={{ background: tc }} />
              {feat}
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const renderDirections = (page: DirectionsSubPage) => (
    <div>
      {page.mapImage && (
        <div className="rounded-xl overflow-hidden shadow-md mb-8">
          <img src={page.mapImage} alt="오시는길" className="w-full object-cover" loading="lazy" />
        </div>
      )}
      <div className="space-y-4">
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
          <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4" style={{ color: tc }} /> 견본주택
          </h4>
          <p className="text-sm text-gray-600">{page.modelHouseAddress}</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
          <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4" style={{ color: tc }} /> 현장 위치
          </h4>
          <p className="text-sm text-gray-600">{page.siteAddress}</p>
        </div>
        <div className="flex gap-3">
          {page.kakaoMapUrl && (
            <a href={page.kakaoMapUrl} target="_blank" rel="noopener noreferrer"
              className="flex-1 py-3 rounded-xl text-center text-sm font-bold transition-colors"
              style={{ background: '#FEE500', color: '#3c1e1e' }}>
              카카오맵
            </a>
          )}
          {page.naverMapUrl && (
            <a href={page.naverMapUrl} target="_blank" rel="noopener noreferrer"
              className="flex-1 py-3 rounded-xl text-center text-sm font-bold text-white transition-colors"
              style={{ background: '#03C75A' }}>
              네이버지도
            </a>
          )}
        </div>
      </div>
    </div>
  );

  const renderReservationForm = () => (
    <div className="max-w-lg">
      {submitted ? (
        <div className="text-center py-12 bg-gray-50 rounded-2xl">
          <div className="text-4xl mb-4">&#10003;</div>
          <h3 className="text-xl font-bold text-gray-900">예약 완료</h3>
          <p className="text-sm text-gray-500 mt-2">방문예약 신청이 완료되었습니다.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="이름 *" value={formName} onChange={e => setFormName(e.target.value)} required
            className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 text-sm" />
          <input type="tel" placeholder="연락처 * (01012345678)" value={formPhone} onChange={e => setFormPhone(e.target.value)} required
            className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 text-sm" />
          <input type="date" placeholder="방문 희망일" value={formDate} onChange={e => setFormDate(e.target.value)}
            className="w-full h-12 px-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 text-sm" />
          <textarea placeholder="문의내용" value={formMessage} onChange={e => setFormMessage(e.target.value)} rows={4}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 text-sm resize-none" />
          <label className="flex items-start gap-2 cursor-pointer">
            <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-0.5 w-4 h-4 rounded" />
            <span className="text-sm text-gray-600">
              <Link to="/terms" target="_blank" className="underline">이용약관</Link> 및{' '}
              <Link to="/privacy" target="_blank" className="underline">개인정보처리방침</Link>에 동의합니다 *
            </span>
          </label>
          <button type="submit" disabled={!agreed}
            className="w-full h-14 font-bold text-base rounded-xl text-white transition-colors shadow-lg disabled:opacity-50"
            style={{ background: tc }}>
            방문예약 신청하기
          </button>
        </form>
      )}
    </div>
  );

  const renderSubPageContent = (page: Category2SubPage) => {
    switch (page.type) {
      case 'overview': return renderOverview(page);
      case 'image': return renderImage(page);
      case 'location': return renderLocation(page);
      case 'unit': return renderUnit(page);
      case 'directions': return renderDirections(page);
      case 'reservation': return renderReservationForm();
    }
  };

  // ─── Main Render ───

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
          {/* Logo */}
          <button onClick={goHome} className="flex flex-col items-start min-w-0">
            {data.projectNameEn && (
              <span className="text-[10px] md:text-xs font-bold tracking-widest text-gray-400 uppercase">
                {data.projectNameEn}
              </span>
            )}
            <span className="text-sm md:text-base font-black text-gray-900 tracking-tight leading-tight">
              {data.projectName}
            </span>
          </button>

          {/* Desktop GNB */}
          <nav className="hidden md:flex items-center gap-0.5">
            {data.navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenGnb(item.label)}
                onMouseLeave={() => setOpenGnb(null)}
              >
                <button
                  className="px-3 xl:px-4 py-2 text-[13px] xl:text-[14px] font-bold text-gray-700 hover:transition-colors flex items-center gap-1"
                  onMouseEnter={(e) => (e.currentTarget.style.color = tc)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                  onClick={() => {
                    if (item.children.length > 0) navigateTo(item.children[0].pageId);
                  }}
                >
                  {item.label}
                  <ChevronDown className="w-3 h-3" />
                </button>
                {openGnb === item.label && (
                  <div className="absolute top-full left-0 bg-white border border-gray-100 rounded-lg shadow-xl min-w-[160px] py-1 z-50">
                    {item.children.map((child) => (
                      <button
                        key={child.pageId}
                        onClick={() => navigateTo(child.pageId)}
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
              onClick={() => setShowModal(true)}
              className="ml-3 px-5 py-2 rounded-lg text-[13px] font-extrabold text-white flex items-center gap-1.5 transition-colors"
              style={{ background: tc }}
            >
              <Phone className="w-3.5 h-3.5" /> {data.contactPhone}
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
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
                <div className="px-5 py-3 text-[13px] font-bold text-gray-800 border-b border-gray-100 bg-gray-50">
                  {item.label}
                </div>
                {item.children.map((child) => (
                  <button
                    key={child.pageId}
                    onClick={() => navigateTo(child.pageId)}
                    className="block w-full text-left px-8 py-2.5 text-[12px] text-gray-600 border-b border-gray-50 hover:bg-gray-50"
                  >
                    {child.label}
                  </button>
                ))}
              </div>
            ))}
            <button
              onClick={() => { setShowModal(true); setMobileOpen(false); }}
              className="block w-full text-left px-5 py-3 text-[13px] font-bold border-b border-gray-100"
              style={{ color: tc }}
            >
              방문예약신청
            </button>
          </div>
        )}
      </header>

      {/* ── Content ── */}
      {currentSubPage ? (
        /* ── Sub Page ── */
        <>
          {/* Sub Visual */}
          <div
            className="relative pt-14 md:pt-16 h-48 md:h-64 flex items-center justify-center overflow-hidden"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${currentSubPage.subVisualImage})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 text-center">
              <h2 className="text-2xl md:text-3xl font-black text-white drop-shadow-lg">
                {currentSubPage.title}
              </h2>
              <p className="mt-2 text-sm text-white/70">{data.projectName}</p>
            </div>
          </div>

          {/* SNB + Content */}
          <div ref={contentRef} className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-16">
            <div className="flex gap-8 md:gap-12">
              {/* SNB - Desktop */}
              <div ref={snbRef} className="hidden lg:block w-56 flex-shrink-0">
                <div className={`${stickySnb ? 'fixed top-20 w-56' : ''}`}>
                  <h3
                    className="text-base font-black text-white px-5 py-3 rounded-t-xl"
                    style={{ background: tc }}
                  >
                    {currentNavGroup?.label}
                  </h3>
                  <div className="border border-gray-200 rounded-b-xl overflow-hidden">
                    {currentNavGroup?.children.map((child) => (
                      <button
                        key={child.pageId}
                        onClick={() => navigateTo(child.pageId)}
                        className={`block w-full text-left px-5 py-3 text-sm border-b border-gray-100 last:border-0 transition-colors ${
                          child.pageId === currentPage
                            ? 'font-bold bg-gray-50'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                        style={child.pageId === currentPage ? { color: tc } : undefined}
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile SNB (horizontal scroll) */}
              <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg">
                <div className="flex overflow-x-auto">
                  {currentNavGroup?.children.map((child) => (
                    <button
                      key={child.pageId}
                      onClick={() => navigateTo(child.pageId)}
                      className={`flex-shrink-0 px-4 py-3 text-xs font-bold border-r border-gray-100 last:border-0 transition-colors ${
                        child.pageId === currentPage ? 'text-white' : 'text-gray-600'
                      }`}
                      style={child.pageId === currentPage ? { background: tc } : undefined}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Content Area */}
              <div className="flex-1 min-w-0 pb-16 lg:pb-0">
                <div className="mb-6 flex items-center gap-2 text-xs text-gray-400">
                  <button onClick={goHome} className="hover:text-gray-600">HOME</button>
                  <span>/</span>
                  <span>{currentNavGroup?.label}</span>
                  <span>/</span>
                  <span className="font-semibold text-gray-600">{currentSubPage.title}</span>
                </div>
                {renderSubPageContent(currentSubPage)}
              </div>
            </div>
          </div>
        </>
      ) : (
        /* ── Main Page ── */
        <>
          {/* Hero Slider */}
          <section className="relative pt-14 md:pt-16 min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden">
            {data.mainSlides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === slideIdx ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }} />
                <div className="absolute inset-0 bg-black/40" />
              </div>
            ))}
            <div className="relative z-10 text-center px-4">
              {data.mainSlides[slideIdx]?.title.map((line, i) => (
                <h1 key={i} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight md:leading-snug drop-shadow-lg">
                  {line}
                </h1>
              ))}
              {data.mainSlides[slideIdx]?.subtitle && (
                <p className="mt-4 md:mt-6 text-base md:text-xl text-white/90 font-medium drop-shadow">
                  {data.mainSlides[slideIdx].subtitle}
                </p>
              )}
              <button
                onClick={() => setShowModal(true)}
                className="mt-6 md:mt-8 px-8 py-3.5 rounded-full text-sm md:text-base font-bold text-white border-2 border-white/60 hover:bg-white/20 transition-colors"
              >
                방문예약 신청
              </button>
            </div>
            {/* Slide controls */}
            {data.mainSlides.length > 1 && (
              <>
                <button
                  onClick={() => setSlideIdx(i => (i - 1 + data.mainSlides.length) % data.mainSlides.length)}
                  className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>
                <button
                  onClick={() => setSlideIdx(i => (i + 1) % data.mainSlides.length)}
                  className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </button>
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2">
                  {data.mainSlides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSlideIdx(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        i === slideIdx ? 'bg-white scale-125' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </section>

          {/* Main Sections Preview */}
          {data.mainSections.map((section, i) => (
            <section
              key={section.id}
              className={`py-16 md:py-24 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            >
              <div className="max-w-6xl mx-auto px-4">
                <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${i % 2 === 1 ? 'md:[direction:rtl] md:*:[direction:ltr]' : ''}`}>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img src={section.image} alt={section.title} className="w-full h-64 md:h-80 object-cover" loading="lazy" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase" style={{ color: tc }}>
                      {data.projectName}
                    </span>
                    <h2 className="mt-3 text-2xl md:text-3xl font-black text-gray-900 leading-snug">
                      {section.title}
                    </h2>
                    {section.subtitle && (
                      <p className="mt-3 text-sm text-gray-500 leading-relaxed">{section.subtitle}</p>
                    )}
                    {section.linkTo && (
                      <button
                        onClick={() => navigateTo(section.linkTo!)}
                        className="mt-6 px-6 py-2.5 rounded-lg text-sm font-bold text-white transition-colors"
                        style={{ background: tc }}
                      >
                        자세히 보기
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </section>
          ))}

          {/* Inline Reservation */}
          <section className="py-16 md:py-24 bg-white">
            <div className="max-w-xl mx-auto px-4">
              <div className="text-center mb-8">
                <span className="text-xs font-bold tracking-widest uppercase" style={{ color: tc }}>RESERVATION</span>
                <h2 className="mt-2 text-2xl md:text-3xl font-black text-gray-900">방문예약 신청</h2>
                <p className="mt-2 text-sm text-gray-500">아래 정보를 입력하시면 빠르게 상담을 도와드립니다.</p>
              </div>
              {renderReservationForm()}
            </div>
          </section>
        </>
      )}

      {/* ── Footer ── */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <p className="font-bold text-white text-sm mb-3">{data.theme.footerText}</p>
              {data.theme.footerInfo.developer && <p className="text-xs mb-1">시행 | {data.theme.footerInfo.developer}</p>}
              {data.theme.footerInfo.constructor && <p className="text-xs mb-1">시공 | {data.theme.footerInfo.constructor}</p>}
              {data.theme.footerInfo.trustee && <p className="text-xs mb-1">신탁 | {data.theme.footerInfo.trustee}</p>}
              {data.theme.footerInfo.sales && <p className="text-xs mb-1">분양대행 | {data.theme.footerInfo.sales}</p>}
            </div>
            <div>
              <p className="font-bold text-white text-sm mb-3">연락처</p>
              <p className="text-xs mb-1">대표번호: {data.contactPhone}</p>
              {data.theme.footerInfo.bizNumber && <p className="text-xs">사업자등록번호: {data.theme.footerInfo.bizNumber}</p>}
            </div>
            <div>
              <p className="font-bold text-white text-sm mb-3">링크</p>
              <div className="flex gap-4 text-xs">
                <Link to="/privacy" className="hover:text-white underline">개인정보처리방침</Link>
                <Link to="/terms" className="hover:text-white underline">이용약관</Link>
              </div>
            </div>
          </div>
          {data.theme.disclaimers && data.theme.disclaimers.length > 0 && (
            <div className="border-t border-gray-800 pt-6 mb-4 space-y-1">
              {data.theme.disclaimers.map((d, i) => (
                <p key={i} className="text-[10px] text-gray-500 leading-relaxed">※ {d}</p>
              ))}
            </div>
          )}
          <p className="text-[11px] text-gray-600 text-center border-t border-gray-800 pt-4">
            본 페이지는 분양퍼스트에서 제작한 데모 템플릿입니다.{' '}
            <Link to="/" className="underline hover:text-gray-400">분양퍼스트</Link>
          </p>
        </div>
      </footer>

      {/* ── FAB ── */}
      {showFab && !currentSubPage && (
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

      {/* Back to Samples */}
      <div className="fixed bottom-3 md:bottom-4 left-3 md:left-4 z-50">
        <Link
          to="/samples"
          className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-black/70 text-white text-[11px] md:text-sm rounded-lg hover:bg-black/90 transition-colors"
        >
          샘플 목록으로
        </Link>
      </div>

      {/* ── Modal ── */}
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
                  <input type="text" placeholder="이름 *" value={formName} onChange={e => setFormName(e.target.value)} required
                    className="w-full h-12 px-4 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-gray-400" />
                  <input type="tel" placeholder="휴대폰 번호 * (01012345678)" value={formPhone} onChange={e => setFormPhone(e.target.value)} required
                    className="w-full h-12 px-4 bg-gray-50 border border-gray-100 rounded-lg focus:outline-none focus:border-gray-400" />
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-0.5 w-4 h-4 rounded" />
                    <span className="text-sm text-gray-600">
                      <Link to="/terms" target="_blank" className="underline">이용약관</Link> 및{' '}
                      <Link to="/privacy" target="_blank" className="underline">개인정보처리방침</Link>에 동의합니다 *
                    </span>
                  </label>
                  <button type="submit" disabled={!agreed}
                    className="w-full h-14 font-bold text-lg rounded-xl text-white transition-colors shadow-lg disabled:opacity-50"
                    style={{ background: tc }}>
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
