import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay, Navigation } from 'swiper/modules';
import {
  Phone, MessageCircle, X, Menu, UserPlus,
  ChevronLeft, ChevronRight, ChevronDown,
  Train, Trees, GraduationCap, Sparkles,
  MapPin, Check,
} from 'lucide-react';
import type { CategoryTemplateData, ComplexGuide, ComplexPremium, ComplexFloorPlan, ComplexPrime, UnitFloorPlan, UnitInterior } from './categoryTypes';
const locationIcons: Record<string, React.ReactNode> = {
  traffic: <Train className="w-5 h-5" />,
  nature: <Trees className="w-5 h-5" />,
  edu: <GraduationCap className="w-5 h-5" />,
  vision: <Sparkles className="w-5 h-5" />,
};

interface Props {
  data: CategoryTemplateData;
  subpage?: string;
  complexSubpage?: string;
  unitSubpage?: string;
}

export default function CategoryLayout({ data, subpage, complexSubpage, unitSubpage }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showFab, setShowFab] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Carousel states
  const [heroIdx, setHeroIdx] = useState(0);
  const [premiumIdx, setPremiumIdx] = useState(0);
  const [lifeIdx, setLifeIdx] = useState(0);
  const [megaIdx, setMegaIdx] = useState(0);
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

  useEffect(() => {
    if (!data.heroSlides || data.heroSlides.length <= 1) return;
    const id = setInterval(() => {
      setHeroIdx((i) => (i + 1) % data.heroSlides!.length);
    }, 5000);
    return () => clearInterval(id);
  }, [data.heroSlides]);

  const scrollTo = useCallback((href: string) => {
    if (href.startsWith('/')) return; // 경로는 Link로 처리
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

  const basePath = `/demo/${data.id}`;

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
  const businessPage = subpage ? data.businessSubPages?.[subpage] : undefined;
  const businessPageEntries = data.businessSubPages ? Object.entries(data.businessSubPages) : [];
  const overviewPage = data.businessSubPages?.overview;

  const complexPage = complexSubpage ? data.complexSubPages?.[complexSubpage] : undefined;
  const complexPageEntries = data.complexSubPages ? Object.entries(data.complexSubPages) : [];

  const unitPage = unitSubpage ? data.unitSubPages?.[unitSubpage] : undefined;
  const unitPageEntries = data.unitSubPages ? Object.entries(data.unitSubPages) : [];
  const [activeUnitTab, setActiveUnitTab] = useState(0);
  const brandHighlights = [
    {
      title: '브랜드 신뢰도',
      description: '우방 브랜드가 쌓아온 주거 노하우를 바탕으로 더 안정적인 주거 가치를 제안합니다.',
      image: data.premiumCards[0]?.image ?? data.hero.backgroundImage,
    },
    {
      title: '차별화된 커뮤니티',
      description: '입주민의 일상 만족도를 높이는 다양한 커뮤니티와 프리미엄 라이프 설계를 담았습니다.',
      image: data.community?.image ?? data.premiumLife[0]?.image ?? data.hero.backgroundImage,
    },
    {
      title: '미래가치 중심 입지',
      description: '교통, 생활, 교육, 비전을 두루 갖춘 입지 위에 더 큰 미래 프리미엄을 기대할 수 있습니다.',
      image: data.location.mainImage,
    },
  ];

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
          {(subpage || complexSubpage || unitSubpage) ? (
            <Link to={basePath} className="flex flex-col items-start min-w-0">
              {data.projectNameEn && (
                <span className="text-[11px] md:text-xs font-bold tracking-widest text-gray-400 uppercase">
                  {data.projectNameEn}
                </span>
              )}
              <span className="text-sm md:text-base font-black text-gray-900 tracking-tight leading-tight">
                {data.projectName}
              </span>
            </Link>
          ) : (
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
          )}

          <nav className="hidden md:flex items-center gap-0.5">
            {data.navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.href.startsWith('/') ? (
                  <Link
                    to={item.href}
                    className="px-3 xl:px-4 py-2 text-[13px] xl:text-[14px] font-bold text-gray-700 hover:transition-colors flex items-center gap-1"
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = tc; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = ''; }}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3 h-3" />}
                  </Link>
                ) : (
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="px-3 xl:px-4 py-2 text-[13px] xl:text-[14px] font-bold text-gray-700 hover:transition-colors flex items-center gap-1"
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = tc; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = ''; }}
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-3 h-3" />}
                  </button>
                )}
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 bg-white border border-gray-100 rounded-lg shadow-xl min-w-[160px] py-1 z-50">
                    {item.children.map((child) =>
                      child.href.startsWith('/') ? (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="block w-full text-left px-4 py-2.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:font-semibold"
                        >
                          {child.label}
                        </Link>
                      ) : (
                        <button
                          key={child.label}
                          onClick={() => scrollTo(child.href)}
                          className="block w-full text-left px-4 py-2.5 text-[13px] text-gray-600 hover:bg-gray-50 hover:font-semibold"
                        >
                          {child.label}
                        </button>
                      )
                    )}
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
                {item.href.startsWith('/') ? (
                  <Link to={item.href} className="block w-full text-left px-5 py-3 text-[13px] font-semibold text-gray-700 border-b border-gray-50">
                    {item.label}
                  </Link>
                ) : (
                  <button onClick={() => scrollTo(item.href)} className="block w-full text-left px-5 py-3 text-[13px] font-semibold text-gray-700 border-b border-gray-50">
                    {item.label}
                  </button>
                )}
                {item.children?.map((child) =>
                  child.href.startsWith('/') ? (
                    <Link key={child.label} to={child.href} className="block w-full text-left px-8 py-2.5 text-[12px] text-gray-500 border-b border-gray-50">
                      {child.label}
                    </Link>
                  ) : (
                    <button key={child.label} onClick={() => scrollTo(child.href)} className="block w-full text-left px-8 py-2.5 text-[12px] text-gray-500 border-b border-gray-50">
                      {child.label}
                    </button>
                  )
                )}
              </div>
            ))}
          </div>
        )}
      </header>

      {/* ── 서브페이지 (단지안내) ── */}
      {complexSubpage && complexPage ? (
        <>
          {/* sub-visual */}
          <div className="bn-section bn-visual">
            <div className="bn-sub-visual" style={{ backgroundImage: `url(${complexPage.subVisualImage || data.hero.backgroundImage})` }}>
            </div>
          </div>
          {/* snb */}
          <div className="bn-snb" id="snb" style={{ '--bn-theme': tc } as React.CSSProperties}>
            <div className="bn-snb-area">
              <ul>
                {complexPageEntries.map(([id, page]) => (
                  <li key={id} className={complexSubpage === id ? 'on' : ''}>
                    <Link to={`${basePath}/complex/${id}`}>{page.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* content */}
          <div className="bn-container">
            {/* 단지안내 */}
            {complexPage.type === 'guide' && (() => {
              const gd = complexPage as ComplexGuide;
              return (
                <section className="bn-section bn-life">
                  <div className="bn-main-life">
                    <div className="bn-content-title">
                      <h2 className="bn-maintit">{gd.title}</h2>
                      <div className="bn-subtit-text">{data.projectName}</div>
                    </div>
                    {gd.images.map((src, i) => (
                      <div key={i} className="bn-info-con bn-img">
                        <img src={src} alt={`${gd.title}-0${i + 1}`} />
                      </div>
                    ))}
                  </div>
                </section>
              );
            })()}
            {/* 프리미엄 */}
            {complexPage.type === 'premium' && (() => {
              const pm = complexPage as ComplexPremium;
              return (
                <section className="bn-section bn-premium">
                  <div className="bn-sub-premium">
                    <div className="bn-premium-title">
                      <div className="bn-premium-title-main">
                        {pm.caption && <div className="bn-caption">{pm.caption}</div>}
                        <div className="bn-premium-title-wrap">
                          {pm.captionEn && <div className="bn-text">{pm.captionEn}</div>}
                          {pm.count && <div className="bn-number">{pm.count}</div>}
                        </div>
                      </div>
                      <div className="bn-premium-title-sub">{data.projectName}</div>
                      {pm.headline && <h3 className="bn-premium-title-desc">{pm.headline}</h3>}
                    </div>
                    <div className="bn-premium-text-wrap">
                      {pm.items.map((item, i) => (
                        <div key={i} className={`bn-premium-con bn-item bn-item${i + 1}`}>
                          <dl className="bn-text-list">
                            <dt className="bn-text-title">
                              <span className="bn-list-icon"></span>
                              <span className="bn-list-title">{item.tag}</span>
                            </dt>
                            <dd className="bn-text-desc">
                              <h4 className="bn-dd-title">{item.title}</h4>
                              <h5 className="bn-dd-desc">{item.description}</h5>
                            </dd>
                          </dl>
                          <div className="bn-infoimg bn-img">
                            <img src={item.image} alt={item.title} />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bn-premium-thumb">
                      {pm.items.map((item, i) => (
                        <div key={i} className={`bn-infoimg bn-img bn-item${i + 1}`}>
                          <img src={item.image} alt={item.title} />
                        </div>
                      ))}
                    </div>
                    {pm.caution && pm.caution.length > 0 && (
                      <div className="bn-info-table">
                        <ul className="bn-caution">
                          {pm.caution.map((c, i) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </section>
              );
            })()}
            {/* 동호수배치도 */}
            {complexPage.type === 'floorplan' && (() => {
              const fp = complexPage as ComplexFloorPlan;
              return (
                <section className="bn-section bn-life">
                  <div className="bn-main-life">
                    <div className="bn-content-title">
                      <h2 className="bn-maintit">{fp.title}</h2>
                      <div className="bn-subtit-text">{data.projectName}</div>
                    </div>
                    {fp.images.map((src, i) => (
                      <div key={i} className="bn-info-con bn-img">
                        <img src={src} alt={`${fp.title}-0${i + 1}`} />
                      </div>
                    ))}
                  </div>
                </section>
              );
            })()}
            {/* 프라임 */}
            {complexPage.type === 'prime' && (() => {
              const pr = complexPage as ComplexPrime;
              return (
                <section className="bn-section bn-prime-section" style={{ backgroundImage: `url(/images/demo/woobangiushell/prime-bg.webp)` }}>
                  <div className="bn-sub-prime">
                    <div className="bn-prime-header">
                      <div className="bn-prime-titles">
                        <h2 className="bn-prime-maintit">{data.projectName}</h2>
                        <div className="bn-prime-subtit">{pr.headline}</div>
                      </div>
                      <div className="bn-prime-premium-title">
                        {pr.captionEn && <div className="bn-prime-text">{pr.captionEn}</div>}
                        {pr.count && <div className="bn-prime-number">{pr.count}</div>}
                      </div>
                    </div>
                    <div className="bn-prime-wrap">
                      <ul className="bn-prime-list">
                        {pr.points.map((p, i) => {
                          if (p.bold) {
                            const parts = p.text.split(p.bold);
                            return (
                              <li key={i}>
                                {parts[0]}<strong>{p.bold}</strong>{parts[1] || ''}
                              </li>
                            );
                          }
                          return <li key={i}>{p.text}</li>;
                        })}
                      </ul>
                    </div>
                    <div className="bn-prime-thumb">
                      {pr.images.map((src, i) => (
                        <div key={i} className="bn-infoimg bn-img">
                          <img src={src} alt={`${data.projectName}-0${i + 1}`} />
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              );
            })()}
          </div>
        </>
      ) :
      /* ── 서브페이지 (세대안내) ── */
      unitSubpage && unitPage ? (
        <>
          {/* sub-visual */}
          <div className="bn-section bn-visual">
            <div className="bn-sub-visual" style={{ backgroundImage: `url(${unitPage.subVisualImage || data.hero.backgroundImage})` }}>
            </div>
          </div>
          {/* snb */}
          <div className="bn-snb" id="snb" style={{ '--bn-theme': tc } as React.CSSProperties}>
            <div className="bn-snb-area">
              <ul>
                {unitPageEntries.map(([id, page]) => (
                  <li key={id} className={unitSubpage === id ? 'on' : ''}>
                    <Link to={`${basePath}/unit/${id}`}>{page.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* content */}
          <div className="bn-container">
            {/* 평면정보 */}
            {unitPage.type === 'floorplan' && (() => {
              const fp = unitPage as UnitFloorPlan;
              const activeItem = fp.items[activeUnitTab] || fp.items[0];
              return (
                <section className="bn-section bn-unit">
                  <div className="bn-sub-unit">
                    <div className="bn-content-title">
                      <h2 className="bn-maintit">{fp.sizeLabel}</h2>
                      <div className="bn-subtit-text">{data.projectName}</div>
                    </div>
                    {/* tab menu */}
                    <div className="bn-unit-tabs">
                      {fp.items.map((item, i) => (
                        <button
                          key={item.id}
                          className={`bn-unit-tab ${i === activeUnitTab ? 'active' : ''}`}
                          onClick={() => setActiveUnitTab(i)}
                          style={{ '--bn-theme': tc } as React.CSSProperties}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                    {/* unit detail */}
                    <div className="bn-unit-detail">
                      <div className="bn-unit-info">
                        {activeItem.description && (
                          <p className="bn-unit-desc">{activeItem.description}</p>
                        )}
                        <div className="bn-unit-type-wrap">
                          <div className="bn-unit-type-inner">
                            <div className="bn-unit-type-name">{activeItem.type}</div>
                            <div className="bn-unit-type-count">{activeItem.households}</div>
                          </div>
                        </div>
                        {activeItem.areas && (
                          <div className="bn-unit-areas">
                            {activeItem.areas.map((area, i) => (
                              <span key={i} className="bn-unit-area-item">{area.label} : {area.value}</span>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="bn-unit-img">
                        <img src={activeItem.floorPlanImage} alt={`${activeItem.type} 평면도`} />
                      </div>
                    </div>
                    {fp.caution && fp.caution.length > 0 && (
                      <div className="bn-info-table">
                        <ul className="bn-caution">
                          {fp.caution.map((c, i) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </section>
              );
            })()}
            {/* 인테리어 */}
            {unitPage.type === 'interior' && (() => {
              const it = unitPage as UnitInterior;
              return (
                <section className="bn-section bn-unit">
                  <div className="bn-sub-unit">
                    <div className="bn-content-title">
                      <h2 className="bn-maintit">{it.title}</h2>
                      <div className="bn-subtit-text">{data.projectName}</div>
                    </div>
                    <div className="bn-interior-main">
                      <img src={it.mainImage} alt={`${it.title} 메인`} />
                    </div>
                    <div className="bn-interior-grid">
                      {it.items.map((item, i) => (
                        <div key={i} className="bn-interior-item">
                          <div className="bn-interior-thumb">
                            <img src={item.image} alt={item.title} />
                            <div className="bn-interior-label">{item.title}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    {it.caution && it.caution.length > 0 && (
                      <div className="bn-info-table">
                        <ul className="bn-caution">
                          {it.caution.map((c, i) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </section>
              );
            })()}
          </div>
        </>
      ) :
      /* ── 서브페이지 (사업안내) ── */
      subpage && businessPage ? (
        <>
          {/* sub-visual */}
          <div className="bn-section bn-visual">
            <div className="bn-sub-visual" style={{ backgroundImage: `url(${businessPage.subVisualImage || data.hero.backgroundImage})` }}>
            </div>
          </div>
          {/* snb */}
          <div className="bn-snb" id="snb" style={{ '--bn-theme': tc } as React.CSSProperties}>
            <div className="bn-snb-area">
              <ul>
                {businessPageEntries.map(([id, page]) => (
                  <li key={id} className={subpage === id ? 'on' : ''}>
                    <Link to={`${basePath}/business/${id}`}>{page.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* content */}
          <div className="bn-container">
              {subpage === 'overview' && (() => {
                const overview = overviewPage;
                return (
                  <section id="section1" className="bn-section bn-summary">
                    <div className="bn-sub-summary">
                      <div className="bn-content-title">
                        <h3 className="bn-content-title-main" style={{ color: tc }}>
                          화성의 랜드마크가 될 <span className="bn-accent">1,157세대</span> 메가시티 탄생!
                        </h3>
                        <div className="bn-content-title-sub">주거ㆍ취미ㆍ휴식 등 단지에서 누릴수 있는 원스톱 라이프 단지</div>
                      </div>
                      <div className="bn-summary-desc bn-row-type">
                        <div className="bn-summary-img-wrap">
                          <div className="bn-summary-img">
                            <img src={overview?.mainImage || '/images/demo/woobangiushell/prime1.webp'} alt="사업개요-01" />
                          </div>
                          <div className="bn-summary-thumb">
                            {(overview?.thumbImages || ['/images/demo/woobangiushell/prime2.webp', '/images/demo/woobangiushell/prime3.webp']).map((src, i) => (
                              <div key={i} className="bn-infoimg">
                                <img src={src} alt={`사업개요-0${i + 2}`} />
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="bn-summary-tt">overview</div>
                        <div className="bn-summary-list-type">
                          {(overview?.infoTable || []).map((row, i) => (
                            <div key={i} className="bn-summary-list">
                              <span className="bn-dt">{row.label}</span>
                              <span className="bn-dd">{row.value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bn-info-table">
                        <ul className="bn-caution">
                          {(overview?.caution || []).map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                );
              })()}
              {subpage === 'location' && (
                <section className="bn-section bn-summary">
                  <div className="bn-sub-summary">
                    <div className="bn-content-title">
                      <h3 className="bn-content-title-main" style={{ color: tc }}>
                        화성 중심 입지의 빛나는 미래비전
                      </h3>
                      <div className="bn-content-title-sub">{data.location.subtitle}</div>
                    </div>
                    <div className="bn-summary-img">
                      <img src={data.location.mainImage} alt="입지환경 메인" />
                    </div>
                    <div className="bn-loc-tabs">
                      {data.location.tabs.map((tab) => (
                        <button
                          key={tab.id}
                          type="button"
                          onClick={() => setLocationTab(tab.id)}
                          className={`bn-loc-tab ${locationTab === tab.id ? 'on' : ''}`}
                          style={locationTab === tab.id ? { background: tc, borderColor: tc, color: '#fff' } : undefined}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                    {activeLocTab && (
                      <div className="bn-loc-detail">
                        <div className="bn-loc-detail-img">
                          <img src={activeLocTab.image ?? data.location.mainImage} alt={activeLocTab.title} />
                        </div>
                        <div className="bn-loc-detail-info">
                          <h4>{activeLocTab.title}</h4>
                          <ul>
                            {activeLocTab.points.map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              )}
              {subpage === 'brand' && (
                <section className="bn-section bn-summary">
                  <div className="bn-sub-summary">
                    <div className="bn-content-title">
                      <h3 className="bn-content-title-main" style={{ color: tc }}>
                        {data.brandLine ?? `${data.projectName}`}
                      </h3>
                      <div className="bn-content-title-sub">삶의 품격을 높이는 설계와 주거 철학을 브랜드 가치에 담았습니다.</div>
                    </div>
                    <div className="bn-summary-img">
                      <img src="/images/demo/woobangiushell/life3.webp" alt="브랜드소개" />
                    </div>
                    <div className="bn-brand-cards">
                      {brandHighlights.map((item, i) => (
                        <div key={i} className="bn-brand-card">
                          <div className="bn-brand-card-img"><img src={item.image} alt={item.title} /></div>
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              )}
              {subpage === 'map' && (
                <section className="bn-section bn-summary">
                  <div className="bn-sub-summary">
                    <div className="bn-content-title">
                      <h3 className="bn-content-title-main" style={{ color: tc }}>
                        {data.map.title}
                      </h3>
                      <div className="bn-content-title-sub">{data.map.subtitle}</div>
                    </div>
                    <div className="bn-summary-img">
                      <img src={data.map.image} alt="오시는길" />
                    </div>
                    <div className="bn-map-info">
                      <div className="bn-map-addr">
                        <h4>견본주택</h4>
                        <p>{data.map.modelHouseAddress}</p>
                      </div>
                      <div className="bn-map-addr">
                        <h4>현장</h4>
                        <p>{data.map.siteAddress}</p>
                      </div>
                      <div className="bn-map-links">
                        {data.map.kakaoMapUrl && (
                          <a href={data.map.kakaoMapUrl} target="_blank" rel="noopener noreferrer" className="bn-map-link kakao">카카오맵</a>
                        )}
                        {data.map.naverMapUrl && (
                          <a href={data.map.naverMapUrl} target="_blank" rel="noopener noreferrer" className="bn-map-link naver">네이버지도</a>
                        )}
                      </div>
                      <div className="bn-map-tel">
                        <span>분양문의</span>
                        <a href={`tel:${data.contactPhone}`} style={{ color: tc }}>{data.contactPhone}</a>
                      </div>
                    </div>
                    <div className="bn-info-table">
                      <ul className="bn-caution">
                        <li>{data.theme.disclaimer}</li>
                      </ul>
                    </div>
                  </div>
                </section>
              )}
          </div>
        </>
      ) : (
      <>
      {/* ── Hero ── */}
      <section
        id="hero"
        className="relative pt-14 md:pt-16 min-h-[60vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden"
      >
        {data.heroSlides && data.heroSlides.length > 1 ? (
          <>
            {data.heroSlides.map((slide, i) => (
              <div
                key={i}
                className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                  heroIdx === i ? 'opacity-100 z-0' : 'opacity-0 z-0'
                }`}
                style={{ backgroundImage: `url(${slide.backgroundImage})` }}
              />
            ))}
            <div className="absolute inset-0 bg-black/40 z-[1]" />
            <div className="relative z-10 text-center px-4">
              {data.heroSlides[heroIdx]?.title.map((line, i) => (
                <h1
                  key={i}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight md:leading-snug drop-shadow-lg"
                >
                  {line}
                </h1>
              ))}
              <p className="mt-4 md:mt-6 text-base md:text-xl text-white/90 font-medium drop-shadow">
                {data.heroSlides[heroIdx]?.subtitle}
              </p>
              <button
                onClick={() => scrollTo('#reservation')}
                className="mt-6 md:mt-8 px-8 py-3.5 rounded-full text-sm md:text-base font-bold text-white border-2 border-white/60 hover:bg-white/20 transition-colors"
              >
                방문예약 신청
              </button>
            </div>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {data.heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setHeroIdx(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    heroIdx === i ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => setHeroIdx((i) => (i - 1 + data.heroSlides!.length) % data.heroSlides!.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 flex items-center justify-center text-white hover:bg-black/50"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setHeroIdx((i) => (i + 1) % data.heroSlides!.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/30 flex items-center justify-center text-white hover:bg-black/50"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        ) : (
          <>
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
          </>
        )}
      </section>

      {/* ── Premium Cards (단지안내) - Swiper ── */}
      {data.premiumCards.length > 0 && (
        <section id="premium" className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10 md:mb-14">
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: tc }}>
                PREMIUM
              </span>
              <h2 className="mt-2 text-2xl md:text-3xl font-black text-gray-900">단지안내</h2>
              <p className="mt-1 text-sm text-gray-500">{data.projectName}</p>
            </div>
            <div className="relative">
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={1.2}
                breakpoints={{ 640: { slidesPerView: 2.5 }, 1024: { slidesPerView: 3.5 } }}
                loop
                navigation={{ prevEl: '.premium-swiper-prev', nextEl: '.premium-swiper-next' }}
                onSlideChange={(sw) => setPremiumIdx(sw.realIndex)}
                className="!overflow-visible !pb-14 premium-swiper"
              >
                {/* 5개 카드를 2번 복제해서 총 10개 슬라이드 (참고 사이트와 동일) */}
                {[...data.premiumCards, ...data.premiumCards].map((card, i) => {
                  const realNum = (i % data.premiumCards.length) + 1;
                  return (
                    <SwiperSlide key={i}>
                      <div className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300">
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
                          <p className="mt-1 text-xs text-gray-500 line-clamp-2">{card.subtitle}</p>
                          <span className="inline-block mt-2 text-[10px] font-bold text-gray-400">premium {String(realNum).padStart(2, '0')}</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-4 z-10">
                <button
                  type="button"
                  aria-label="이전"
                  className="premium-swiper-prev w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <span className="text-sm text-gray-500 font-medium tabular-nums min-w-[4rem] text-center">
                  {premiumIdx + 1} / 10
                </span>
                <button
                  type="button"
                  aria-label="다음"
                  className="premium-swiper-next w-10 h-10 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
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
                {data.projectNameEn || 'PREMIUM'}
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

      {/* ── Banners - Swiper Fade ── */}
      {data.banners.length > 0 && (
        <section className="relative h-48 md:h-64 overflow-hidden">
          <Swiper
            modules={[EffectFade, Pagination, Autoplay]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop
            className="h-full w-full"
          >
            {data.banners.map((banner, i) => (
              <SwiperSlide key={i}>
                <div className="relative h-48 md:h-64 flex items-center justify-center overflow-hidden">
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
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      {/* ── Premium Life Carousel ── */}
      {data.premiumLife.length > 0 && (
        <section id="life" className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: tc }}>
                PREMIUM LIFE
              </span>
              <h2 className="mt-2 text-2xl md:text-3xl font-black text-gray-900">프리미엄라이프</h2>
              <p className="mt-1 text-sm text-gray-500">{data.projectName}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
              <div className="rounded-2xl overflow-hidden shadow-lg relative">
                <img
                  src={data.premiumLife[lifeIdx]?.image}
                  alt={data.premiumLife[lifeIdx]?.title}
                  className="w-full object-contain transition-opacity duration-500"
                  loading="lazy"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-bold text-gray-400 tabular-nums">
                    <b className="text-gray-900">{String(lifeIdx + 1).padStart(2, '0')}</b> / <em>{String(data.premiumLife.length).padStart(2, '0')}</em>
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-[11px] font-bold text-white"
                    style={{ background: tc }}
                  >
                    {data.premiumLife[lifeIdx]?.tag}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3">
                  {data.premiumLife[lifeIdx]?.title}
                </h3>
                <p className="text-sm md:text-base text-gray-500 leading-relaxed">
                  {data.premiumLife[lifeIdx]?.description}
                </p>
                <div className="flex items-center gap-4 mt-6">
                  <button
                    onClick={() => setLifeIdx(i => (i - 1 + data.premiumLife.length) % data.premiumLife.length)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span className="text-sm font-medium">이전</span>
                  </button>
                  <button
                    onClick={() => setLifeIdx(i => (i + 1) % data.premiumLife.length)}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-sm font-medium">다음</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Mega Life (6 items) ── */}
      {data.megaLife && data.megaLife.length > 0 && (
        <section id="mega" className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: tc }}>
                PREMIUM
              </span>
              <h2 className="mt-2 text-2xl md:text-3xl font-black text-gray-900">프리미엄</h2>
              <p className="mt-1 text-sm text-gray-500">{data.projectName}</p>
              <p className="mt-2 text-sm text-gray-500">쾌적한 자연과 우수한 교육환경, 수준 높은 문화와 더 큰 미래가치까지!</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="order-2 md:order-1">
                <div className="space-y-4 max-h-[400px] overflow-y-auto md:max-h-none">
                  {data.megaLife.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => setMegaIdx(i)}
                      className={`flex gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                        megaIdx === i ? 'bg-gray-50 border-2' : 'hover:bg-gray-50 border-2 border-transparent'
                      }`}
                      style={megaIdx === i ? { borderColor: tc } : undefined}
                    >
                      <span className="text-xs font-bold shrink-0" style={{ color: tc }}>{item.tag}</span>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{item.title}</h4>
                        <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={data.megaLife[megaIdx]?.image}
                    alt={data.megaLife[megaIdx]?.title}
                    className="w-full object-contain transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {data.megaLife.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setMegaIdx(i)}
                      className={`shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        megaIdx === i ? 'border-gray-900 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </button>
                  ))}
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
            <div className="md:col-span-3 space-y-4">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={activeLocTab?.image ?? data.location.mainImage}
                  alt="입지환경"
                  className="w-full object-contain transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
              {data.location.tabs.some((t) => t.image) && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {data.location.tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setLocationTab(tab.id)}
                      className={`shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                        locationTab === tab.id ? 'border-gray-900 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      {tab.image ? (
                        <img src={tab.image} alt={tab.label} className="w-20 h-14 object-cover" />
                      ) : (
                        <div className="w-20 h-14 bg-gray-200 flex items-center justify-center text-xs font-bold">{tab.label}</div>
                      )}
                    </button>
                  ))}
                </div>
              )}
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

      {/* ── Community ── */}
      {data.community && (
        <section id="community" className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: tc }}>
                COMMUNITY
              </span>
              <h2 className="mt-2 text-2xl md:text-3xl font-black text-gray-900">커뮤니티</h2>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={data.community.image}
                alt={data.community.alt ?? '커뮤니티'}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>
      )}

      {/* ── Interior ── */}
      {data.interiors.length > 0 && (
        <section id="interior" className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-10">
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: tc }}>
                INTERIOR
              </span>
              <h2 className="mt-2 text-2xl md:text-3xl font-black text-gray-900">인테리어</h2>
              <p className="mt-1 text-sm text-gray-500">{data.projectName}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={data.interiors[interiorIdx]?.image}
                    alt={data.interiors[interiorIdx]?.title}
                    className="w-full object-contain transition-opacity duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {data.interiors.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => setInteriorIdx(i)}
                      className={`shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                        interiorIdx === i ? 'border-gray-900 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={item.image} alt={item.title} className="w-24 h-16 object-cover" />
                    </button>
                  ))}
                </div>
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
              <img src={data.map.image} alt="위치 안내" className="w-full object-contain" loading="lazy" />
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
                  <span className="underline cursor-default">이용약관</span> 및{' '}
                  <span className="underline cursor-default">개인정보처리방침</span>에 동의합니다 *
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

      </>
      )}

      {/* ── Footer ── */}
      <footer className="bg-gray-900 text-gray-400 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-8">
            <div className="text-left space-y-1">
              <p className="font-bold text-white text-sm">{data.theme.footerText}</p>
              {data.theme.footerInfo.developer && (
                <p className="text-xs">시행 | {data.theme.footerInfo.developer}</p>
              )}
              {data.theme.footerInfo.constructor && (
                <p className="text-xs">시공 | {data.theme.footerInfo.constructor}</p>
              )}
              {data.theme.footerInfo.trustee && (
                <p className="text-xs">위탁 | {data.theme.footerInfo.trustee}</p>
              )}
            </div>
            <div className="text-right space-y-1">
              <p className="font-bold text-white text-sm">연락처</p>
              <p className="text-xs">대표번호: {data.contactPhone}</p>
              {data.theme.footerInfo.bizNumber && (
                <p className="text-xs">사업자등록번호: {data.theme.footerInfo.bizNumber}</p>
              )}
            </div>
          </div>
          {data.theme.disclaimer && (
            <p className="text-[10px] text-gray-500 leading-relaxed border-t border-gray-800 pt-6 mb-4 text-center">
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
                      <span className="underline cursor-default">이용약관</span> 및{' '}
                      <span className="underline cursor-default">개인정보처리방침</span>에 동의합니다 *
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
