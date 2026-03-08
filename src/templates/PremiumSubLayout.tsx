import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone, X, Menu, UserPlus, ChevronDown, ChevronUp, MessageCircle,
} from 'lucide-react';
import type {
  PremiumTemplateData,
  PremiumOverviewSubPage,
  PremiumLocationSubPage,
  PremiumBrandSubPage,
  PremiumDirectionsSubPage,
  PremiumComplexCommunitySubPage,
  PremiumComplexPremiumSubPage,
  PremiumComplexFloorplanSubPage,
  PremiumComplexPrimeSubPage,
  PremiumComplexInfoSubPage,
  PremiumUnitSubPage,
  PremiumUnitFloorplanSubPage,
  PremiumUnitInteriorSubPage,
  PremiumVideoSubPage,
  PremiumNewsSubPage,
  PremiumNoticeSubPage,
  PremiumDocumentSubPage,
  PremiumSubscriptionEligibilitySubPage,
  PremiumRegistrationSubPage,
  PremiumGallerySubPage,
} from './premiumTypes';

interface Props {
  data: PremiumTemplateData;
  slug: string;
  subpageId: string;
}

const baseUrl = (slug: string) => `/demo/${slug}`;
const subUrl = (slug: string, pageId: string) => `/demo/${slug}/${pageId}`;

export default function PremiumSubLayout({ data, slug, subpageId }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openGnb, setOpenGnb] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isFreshHouse = slug === 'premium-freshhouse';
  const [unitVariantIdx, setUnitVariantIdx] = useState(0);
  const [formName, setFormName] = useState('');
  useEffect(() => setUnitVariantIdx(0), [subpageId]);
  const [formPhone, setFormPhone] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  // 관심고객등록 폼 state
  const [regName, setRegName] = useState('');
  const [regPhone1, setRegPhone1] = useState('010');
  const [regPhone2, setRegPhone2] = useState('');
  const [regPhone3, setRegPhone3] = useState('');
  const [regSi, setRegSi] = useState('');
  const [regGu, setRegGu] = useState('');
  const [regDong, setRegDong] = useState('');
  const [regUnitTypes, setRegUnitTypes] = useState<string[]>([]);
  const [regAgree1, setRegAgree1] = useState(false);
  const [regAgree2, setRegAgree2] = useState(false);
  const [regAgreeAll, setRegAgreeAll] = useState(false);
  const [regAgreeSimple, setRegAgreeSimple] = useState(true);
  const [regGender, setRegGender] = useState<string>('');
  const [regAge, setRegAge] = useState<string>('');
  const [regPhoneSimple, setRegPhoneSimple] = useState('');
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [trustOpen, setTrustOpen] = useState(false);
  const [headerHovered, setHeaderHovered] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    onScroll(); // Initial check
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const ac = data.theme.accent;
  const baseBg = data.theme.baseBg;
  const altBg = data.theme.altBg;
  const cardBg = data.theme.cardBg;
  const borderC = data.theme.borderColor;
  const hdrBg = scrolled ? (data.theme.headerScrollBg || data.theme.headerBg) : data.theme.headerBg;
  const currentHdrBg = headerHovered ? (data.theme.headerScrollBg || data.theme.headerBg) : hdrBg;
  const textPrimary = data.theme.textPrimary || '#212121';
  const textSecondary = data.theme.textSecondary || '#666666';
  const isLightTheme = baseBg === '#ffffff' || baseBg.startsWith('#fff') || baseBg.includes('255');
  const isLightHeader = currentHdrBg === '#ffffff' || currentHdrBg.startsWith('#fff') || currentHdrBg.includes('255') || currentHdrBg.includes('rgba(255');

  const currentPage = data.subPages?.find(p => p.pageId === subpageId);
  const lifeNav = data.navItems.find(n => n.label === '사업안내');
  const complexNav = data.navItems.find(n => n.label === '단지안내');
  const unitNav = data.navItems.find(n => n.label === '세대안내');
  const newsNav = data.navItems.find(n => n.label === '홍보센터' || n.label === '홍보안내');
  const scheduleNav = data.navItems.find(n => n.label === '분양안내');
  const subscriptionNav = data.navItems.find(n => n.label === '청약안내');
  const registrationNav = data.navItems.find(n => n.label === '관심고객등록');
  const visitNav = data.navItems.find(n => n.label === '방문예약신청');
  const lifeChildren = lifeNav?.children ?? [];
  const complexChildren = complexNav?.children ?? [];
  const unitChildren = unitNav?.children ?? [];
  const newsChildren = newsNav?.children ?? [];
  const scheduleChildren = scheduleNav?.children ?? [];
  const subscriptionChildren = subscriptionNav?.children ?? [];
  const registrationChildren = registrationNav?.children ?? [];
  const visitChildren = visitNav?.children ?? [];
  const isComplexPage = subpageId.startsWith('complex') || complexChildren.some(c => (c as { pageId?: string }).pageId === subpageId);
  const isUnitPage = subpageId.startsWith('unit');
  const isNewsPage = subpageId.startsWith('news');
  const isSchedulePage = subpageId.startsWith('schedule');
  const isInfoPage = subpageId.startsWith('info-');
  const isSubscriptionPage = subpageId.startsWith('subscription');
  const isRegistrationPage = subpageId.startsWith('registration');
  const isVisitPage = visitChildren.some(c => (c as { pageId?: string }).pageId === subpageId);
  const snbChildren = isRegistrationPage ? registrationChildren : isSubscriptionPage ? subscriptionChildren : isNewsPage ? newsChildren : isVisitPage ? visitChildren : isSchedulePage || isInfoPage ? scheduleChildren : isUnitPage ? unitChildren : isComplexPage ? complexChildren : lifeChildren;
  const breadcrumbParent = isRegistrationPage ? '관심고객등록' : isSubscriptionPage ? '청약안내' : isNewsPage ? '홍보안내' : isVisitPage ? '방문예약신청' : isSchedulePage || isInfoPage ? '분양안내' : isUnitPage ? '세대안내' : isComplexPage ? '단지안내' : '사업안내';

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

  if (!currentPage) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: baseBg }}>
        <div className="text-center text-white">
          <h1 className="text-2xl font-bold mb-4">페이지를 찾을 수 없습니다</h1>
          <Link to={baseUrl(slug)} className="underline" style={{ color: ac }}>메인으로 돌아가기</Link>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (currentPage.type) {
      case 'overview': {
        const p = currentPage as PremiumOverviewSubPage;
        return (
          <section className="py-12 md:py-16">
            <div className="max-w-5xl mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-black" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{p.title}</h2>
                <p className="mt-2" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{p.subtitle}</p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{p.contentTitle}</h3>
                {p.contentSubtitle && <p className="text-sm mb-2" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{p.contentSubtitle}</p>}
                {p.contentDesc && <p className="text-sm leading-relaxed" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }} dangerouslySetInnerHTML={{ __html: p.contentDesc }} />}
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <div className="rounded-xl overflow-hidden">
                  <img src={p.mainImage} alt={p.title} className="w-full object-contain" loading="lazy" />
                </div>
                <div>
                  {p.infoLabel && <p className="text-xs font-bold tracking-widest mb-4 uppercase" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{p.infoLabel}</p>}
                  <div className="space-y-3">
                    {p.items.map((item, i) => (
                      <div key={i} className="flex border-b pb-3" style={{ borderColor: isLightTheme ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.1)' }}>
                        <span className="text-sm font-bold w-28 flex-shrink-0" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{item.label}</span>
                        <span className="text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {p.caution && p.caution.length > 0 && (
                <ul className="mt-10 space-y-2 text-xs leading-relaxed" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>
                  {p.caution.map((c, i) => <li key={i}>• {c}</li>)}
                </ul>
              )}
            </div>
          </section>
        );
      }
      case 'location': {
        const p = currentPage as PremiumLocationSubPage;
        return (
          <section className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4">
              {/* 제목 섹션 */}
              <div className="text-center mb-14 md:mb-20">
                <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-3" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{p.title}</h2>
                <p className="text-base md:text-lg font-medium mb-4" style={{ color: ac }}>{p.subtitle}</p>
                {p.contentDesc && (
                  <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }} dangerouslySetInnerHTML={{ __html: p.contentDesc }} />
                )}
              </div>

              {/* 4개 카테고리 카드 - 2x2 그리드 */}
              {p.poiGroups && p.poiGroups.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
                  {p.poiGroups.map((group, i) => (
                    <div
                      key={i}
                      className="group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                      style={{
                        background: cardBg,
                        border: `1px solid ${borderC}`,
                        boxShadow: isLightTheme ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
                      }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={group.image}
                          alt={group.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div
                          className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider"
                          style={{ background: ac, color: '#fff' }}
                        >
                          {group.category}
                        </div>
                        {group.icon && (
                          <div className="absolute bottom-4 right-4 w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.95)' }}>
                            <img src={group.icon} alt="" className="w-8 h-8 object-contain" />
                          </div>
                        )}
                      </div>
                      <div className="p-6 md:p-8">
                        <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{group.title}</h3>
                        <ul className="space-y-2">
                          {group.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm leading-relaxed" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>
                              <span className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full" style={{ background: ac }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* 메인 입지환경 이미지 */}
              {p.mainImage && (
                <div className="rounded-2xl overflow-hidden mb-16" style={{ boxShadow: isLightTheme ? '0 8px 30px rgba(0,0,0,0.12)' : '0 8px 30px rgba(0,0,0,0.3)' }}>
                  <img src={p.mainImage} alt={`${p.title} 전체 조망`} className="w-full h-auto object-contain" loading="lazy" />
                  <div className="p-4 md:p-6 text-center" style={{ background: isLightTheme ? '#fafafa' : 'rgba(0,0,0,0.2)' }}>
                    <p className="text-sm font-medium" style={{ color: isLightTheme ? textSecondary : 'rgba(255,255,255,0.9)' }}>{p.contentTitle || `${data.projectName} 입지 전경`}</p>
                  </div>
                </div>
              )}

              {/* 주의사항 */}
              {p.caution && p.caution.length > 0 && (
                <div className="rounded-xl p-6 md:p-8" style={{ background: isLightTheme ? '#f8f8f8' : cardBg, border: `1px solid ${borderC}` }}>
                  <p className="text-xs font-bold mb-4 uppercase tracking-wider" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>유의사항</p>
                  <ul className="space-y-2 text-xs md:text-sm leading-relaxed" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>
                    {p.caution.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="flex-shrink-0 mt-0.5" style={{ color: ac }}>※</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        );
      }
      case 'brand': {
        const p = currentPage as PremiumBrandSubPage;
        return (
          <section className="py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-black" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{p.title}</h2>
                <p className="mt-2" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{p.subtitle}</p>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img 
                  src={p.mobileImage && isMobile ? p.mobileImage : p.image} 
                  alt={p.title} 
                  className="w-full h-auto object-contain" 
                  loading="lazy" 
                />
              </div>
            </div>
          </section>
        );
      }
      case 'directions': {
        const p = currentPage as PremiumDirectionsSubPage;
        const kakaoUrl = p.kakaoMapUrl ?? `https://map.kakao.com/link/search/${encodeURIComponent(p.modelHouseAddress || '')}`;
        const naverUrl = p.naverMapUrl ?? `https://map.naver.com/v5/search/${encodeURIComponent(p.modelHouseAddress || '')}`;
        return (
          <section className="py-12 md:py-16">
            <div className="max-w-5xl mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-black" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{p.title}</h2>
                <p className="mt-2" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{p.subtitle}</p>
              </div>
              {p.descTitle && <p className="text-lg font-bold mb-6" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{p.descTitle}</p>}
              <div className="space-y-4 mb-6">
                {p.addresses?.map((a, i) => (
                  <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-sm font-bold w-24" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{a.label}</span>
                    <span className="text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{a.address}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a href={kakaoUrl} target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 rounded text-sm font-bold" style={{ background: '#FEE500', color: '#3c1e1e' }}>카카오맵</a>
                <a href={naverUrl} target="_blank" rel="noopener noreferrer"
                  className="px-4 py-2 rounded text-sm font-bold text-white" style={{ background: '#03C75A' }}>네이버지도</a>
                <span className="text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>|</span>
                <span className="text-sm font-bold" style={{ color: ac }}>분양문의</span>
                <a href={`tel:${data.contactPhone}`} className="font-bold" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{data.contactPhone}</a>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="rounded-xl overflow-hidden" style={{ background: cardBg, border: `1px solid ${borderC}` }}>
                  <div className="overflow-hidden">
                    <img src={p.modelHouseImage} alt="견본주택" className="w-full object-contain" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold mb-1" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>견본주택</h4>
                    <p className="text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{p.modelHouseAddress}</p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden" style={{ background: cardBg, border: `1px solid ${borderC}` }}>
                  <div className="overflow-hidden">
                    <img src={p.siteImage} alt="현장" className="w-full object-contain" loading="lazy" />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold mb-1" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>현장</h4>
                    <p className="text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{p.siteAddress}</p>
                  </div>
                </div>
              </div>
              {p.caution && p.caution.length > 0 && (
                <ul className="mt-10 space-y-2 text-xs leading-relaxed" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>
                  {p.caution.map((c, i) => <li key={i}>• {c}</li>)}
                </ul>
              )}
            </div>
          </section>
        );
      }
      case 'complexCommunity': {
        const p = currentPage as PremiumComplexCommunitySubPage;
        return (
          <section className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-3" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{p.title}</h2>
                <p className="text-base md:text-lg font-medium mb-4" style={{ color: ac }}>{p.subtitle}</p>
                {p.caption && (
                  <p className="text-sm md:text-base font-medium mb-4" style={{ color: isLightTheme ? textPrimary : 'rgba(255,255,255,0.9)' }}>{p.caption}</p>
                )}
                {p.contentTitle && (
                  <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{p.contentTitle}</h3>
                )}
                {p.contentDesc && (
                  <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }} dangerouslySetInnerHTML={{ __html: p.contentDesc }} />
                )}
              </div>
              <div className="rounded-2xl overflow-hidden mb-12" style={{ boxShadow: isLightTheme ? '0 8px 30px rgba(0,0,0,0.12)' : '0 8px 30px rgba(0,0,0,0.3)' }}>
                <img 
                  src={p.mobileImage && isMobile ? p.mobileImage : p.mainImage} 
                  alt={p.title} 
                  className="w-full h-auto object-contain" 
                  loading="lazy" 
                />
              </div>
              {p.caution && p.caution.length > 0 && (
                <div className="rounded-xl p-6 md:p-8" style={{ background: isLightTheme ? '#f8f8f8' : cardBg, border: `1px solid ${borderC}` }}>
                  <p className="text-xs font-bold mb-4 uppercase tracking-wider" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>유의사항</p>
                  <ul className="space-y-2 text-xs md:text-sm leading-relaxed" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>
                    {p.caution.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="flex-shrink-0 mt-0.5" style={{ color: ac }}>※</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        );
      }
      case 'complexPremium': {
        const p = currentPage as PremiumComplexPremiumSubPage;
        return (
          <section className="py-12 md:py-16">
            <div className="max-w-5xl mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-black" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{p.title}</h2>
                <p className="mt-2" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{p.subtitle}</p>
                {p.caption && (
                  <p className="mt-4 text-lg font-medium" style={{ color: isLightTheme ? textPrimary : 'rgba(255,255,255,0.8)' }}>{p.caption}</p>
                )}
                {p.premiumSubtitle && (
                  <p className="mt-2 text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{p.premiumSubtitle}</p>
                )}
                {p.premiumDesc && (
                  <p className="mt-2 text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{p.premiumDesc}</p>
                )}
              </div>
              <div className="space-y-12 md:space-y-16">
                {p.items.map((item, i) => (
                  <div key={i} className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="order-2 md:order-1">
                      <p className="text-xs font-bold tracking-wider mb-2" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>premium {item.number}</p>
                      <h3 className="text-xl font-bold mb-2" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{item.title}</h3>
                      <p className="text-sm leading-relaxed whitespace-pre-line" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{item.description}</p>
                    </div>
                    <div className="order-1 md:order-2 rounded-xl overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full object-contain" loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
              {p.caution && p.caution.length > 0 && (
                <ul className="mt-10 space-y-2 text-xs leading-relaxed" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>
                  {p.caution.map((c, i) => <li key={i}>• {c}</li>)}
                </ul>
              )}
            </div>
          </section>
        );
      }
      case 'complexFloorplan': {
        const p = currentPage as PremiumComplexFloorplanSubPage;
        const imagesToShow = p.images && p.images.length > 0 ? p.images : (p.mainImage ? [p.mainImage] : []);
        return (
          <section className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-3" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{p.title}</h2>
                <p className="text-base md:text-lg font-medium" style={{ color: ac }}>{p.subtitle}</p>
              </div>
              <div className="space-y-6 mb-12">
                {imagesToShow.map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden" style={{ boxShadow: isLightTheme ? '0 8px 30px rgba(0,0,0,0.12)' : '0 8px 30px rgba(0,0,0,0.3)' }}>
                    <img src={img} alt={`${p.title} ${i + 1}`} className="w-full h-auto object-contain" loading="lazy" />
                  </div>
                ))}
              </div>
              {p.caution && p.caution.length > 0 && (
                <div className="rounded-xl p-6 md:p-8" style={{ background: isLightTheme ? '#f8f8f8' : cardBg, border: `1px solid ${borderC}` }}>
                  <p className="text-xs font-bold mb-4 uppercase tracking-wider" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>유의사항</p>
                  <ul className="space-y-2 text-xs md:text-sm leading-relaxed" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>
                    {p.caution.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="flex-shrink-0 mt-0.5" style={{ color: ac }}>※</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        );
      }
      case 'complexPrime': {
        const p = currentPage as PremiumComplexPrimeSubPage;
        return (
          <section className="py-12 md:py-16">
            <div className="max-w-5xl mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-black text-white">{p.title}</h2>
                <p className="mt-2 text-gray-500">{p.subtitle}</p>
                {p.premiumLabel && p.premiumNumber && (
                  <div className="mt-4 flex items-center justify-center gap-2">
                    <span className="text-2xl font-bold text-white/80">{p.premiumLabel}</span>
                    <span className="text-3xl font-black" style={{ color: ac }}>{p.premiumNumber}</span>
                  </div>
                )}
              </div>
              <ul className="flex flex-wrap gap-3 mb-10">
                {p.items.map((item, i) => (
                  <li
                    key={i}
                    className="px-5 py-3 rounded-full text-sm font-medium"
                    style={{ background: cardBg, border: `1px solid ${borderC}` }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {p.images.map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden" style={{ border: `1px solid ${borderC}` }}>
                    <img src={img} alt="" className="w-full object-contain" loading="lazy" />
                  </div>
                ))}
              </div>
              {p.caution && p.caution.length > 0 && (
                <ul className="mt-10 space-y-2 text-xs text-gray-500 leading-relaxed">
                  {p.caution.map((c, i) => <li key={i}>• {c}</li>)}
                </ul>
              )}
            </div>
          </section>
        );
      }
      case 'complexInfo': {
        const p = currentPage as PremiumComplexInfoSubPage;
        const hasMultipleWithDesc = p.images.length > 1 && p.images.some(img => img.title || img.description);
        return (
          <section className="py-12 md:py-20">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-12 md:mb-16">
                <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-3" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{p.title}</h2>
                <p className="text-base md:text-lg font-medium mb-4" style={{ color: ac }}>{p.subtitle}</p>
                {p.caption && (
                  <p className="text-sm md:text-base font-medium mb-4" style={{ color: isLightTheme ? textPrimary : 'rgba(255,255,255,0.9)' }}>{p.caption}</p>
                )}
                {p.contentTitle && (
                  <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{p.contentTitle}</h3>
                )}
                {p.contentDesc && (
                  <p className="text-sm md:text-base leading-relaxed max-w-2xl mx-auto" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }} dangerouslySetInnerHTML={{ __html: p.contentDesc }} />
                )}
              </div>
              {hasMultipleWithDesc ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
                  {p.images.map((item, i) => (
                    <div
                      key={i}
                      className="group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                      style={{
                        background: cardBg,
                        border: `1px solid ${borderC}`,
                        boxShadow: isLightTheme ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
                      }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title || `${p.title} ${i + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        {item.title && (
                          <h4 className="text-lg font-bold mb-2" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{item.title}</h4>
                        )}
                        {item.description && (
                          <p className="text-sm leading-relaxed" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{item.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6 mb-12">
                  {p.images.map((item, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden" style={{ boxShadow: isLightTheme ? '0 8px 30px rgba(0,0,0,0.12)' : '0 8px 30px rgba(0,0,0,0.3)' }}>
                      <img src={item.image} alt={item.title || `${p.title} ${i + 1}`} className="w-full h-auto object-contain" loading="lazy" />
                      {(item.title || item.description) && (
                        <div className="p-6 text-center" style={{ background: isLightTheme ? '#fafafa' : 'rgba(0,0,0,0.2)' }}>
                          {item.title && <p className="text-lg font-medium mb-1" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{item.title}</p>}
                          {item.description && <p className="text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{item.description}</p>}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
              {p.caution && p.caution.length > 0 && (
                <div className="rounded-xl p-6 md:p-8" style={{ background: isLightTheme ? '#f8f8f8' : cardBg, border: `1px solid ${borderC}` }}>
                  <p className="text-xs font-bold mb-4 uppercase tracking-wider" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>유의사항</p>
                  <ul className="space-y-2 text-xs md:text-sm leading-relaxed" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>
                    {p.caution.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="flex-shrink-0 mt-0.5" style={{ color: ac }}>※</span>
                        <span dangerouslySetInnerHTML={{ __html: c }} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        );
      }
      case 'unit': {
        const p = currentPage as PremiumUnitSubPage;
        const variant = p.variants[unitVariantIdx] ?? p.variants[0];
        return (
          <section className="py-12 md:py-16">
            <div className="max-w-5xl mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-black" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{p.title}</h2>
                <p className="mt-2" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{p.subtitle}</p>
              </div>
              {p.variants.length > 1 && (
                <div className="flex justify-center gap-2 mb-10">
                  {p.variants.map((v, i) => (
                    <button
                      key={i}
                      onClick={() => setUnitVariantIdx(i)}
                      className="px-6 py-2.5 rounded-full text-sm font-bold transition-all"
                      style={unitVariantIdx === i ? { background: ac, color: '#fff' } : { background: cardBg, color: isLightTheme ? textSecondary : '#9ca3af', border: `1px solid ${borderC}` }}
                    >
                      {v.typeLabel}
                    </button>
                  ))}
                </div>
              )}
              {variant && (
                <div className="space-y-6">
                  {(variant.description || variant.count) && (
                    <div className="rounded-xl p-6" style={{ background: cardBg, border: `1px solid ${borderC}` }}>
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="text-2xl font-black" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{variant.typeLabel}</span>
                        {variant.count && (
                          <span className="px-4 py-1.5 rounded-full text-sm font-bold" style={{ background: ac, color: '#fff' }}>
                            {variant.count}
                          </span>
                        )}
                      </div>
                      {variant.description && (
                        <p className="text-sm leading-relaxed mb-4 whitespace-pre-line" style={{ color: isLightTheme ? textSecondary : '#d1d5db' }}>{variant.description}</p>
                      )}
                      {variant.areas && variant.areas.length > 0 && (
                        <div className="mt-4 pt-4 space-y-2" style={{ borderTop: `1px solid ${borderC}` }}>
                          {variant.areas.map((a, i) => (
                            <div key={i} className="flex justify-between text-sm">
                              <span style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{a.label}</span>
                              <span className="font-medium" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{a.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  <div className="rounded-xl overflow-hidden" style={{ border: `1px solid ${borderC}` }}>
                    <img src={variant.image} alt={variant.typeLabel} className="w-full object-contain bg-white" loading="lazy" />
                  </div>
                </div>
              )}
              {p.caution && p.caution.length > 0 && (
                <ul className="mt-10 space-y-2 text-xs leading-relaxed" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>
                  {p.caution.map((c, i) => <li key={i}>• {c}</li>)}
                </ul>
              )}
            </div>
          </section>
        );
      }
      case 'unitFloorplan': {
        const p = currentPage as PremiumUnitFloorplanSubPage;
        const activeTab = p.tabs[unitVariantIdx] ?? p.tabs[0];
        return (
          <section className="py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-black" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{p.title}</h2>
                <p className="mt-2" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{p.subtitle}</p>
              </div>
              {p.tabs.length > 1 && (
                <div className="flex justify-center gap-0 mb-10 border-t overflow-x-auto" style={{ borderColor: isLightTheme ? borderC : '#362f2a' }}>
                  {p.tabs.map((tab, i) => (
                    <button
                      key={i}
                      onClick={() => setUnitVariantIdx(i)}
                      className="px-6 py-3 text-sm font-medium transition-all whitespace-nowrap"
                      style={{
                        background: unitVariantIdx === i ? (isLightTheme ? ac : '#362f2a') : 'transparent',
                        borderTop: `1px solid ${isLightTheme ? borderC : '#362f2a'}`,
                        color: unitVariantIdx === i ? '#fff' : (isLightTheme ? textPrimary : '#362f2a'),
                      }}
                      onMouseEnter={(e) => {
                        if (unitVariantIdx !== i) {
                          e.currentTarget.style.background = isLightTheme ? ac : '#362f2a';
                          e.currentTarget.style.color = '#fff';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (unitVariantIdx !== i) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = isLightTheme ? textPrimary : '#362f2a';
                        }
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              )}
              {activeTab && (
                <div className="rounded-xl overflow-hidden">
                  <img src={activeTab.image} alt={activeTab.label} className="w-full h-auto object-contain" loading="lazy" />
                </div>
              )}
              {p.caution && p.caution.length > 0 && (
                <ul className="mt-10 space-y-2 text-xs leading-relaxed" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>
                  {p.caution.map((c, i) => <li key={i}>• {c}</li>)}
                </ul>
              )}
            </div>
          </section>
        );
      }
      case 'unitInterior': {
        const p = currentPage as PremiumUnitInteriorSubPage;
        const activeTab = p.tabs[unitVariantIdx] ?? p.tabs[0];
        return (
          <section className="py-12 md:py-16 relative">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-black" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{p.title}</h2>
                <p className="mt-2" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{p.subtitle}</p>
              </div>
              {p.tabs.length > 1 && (
                <div className="flex justify-center gap-0 mb-10 border-t overflow-x-auto" style={{ borderColor: isLightTheme ? borderC : '#362f2a' }}>
                  {p.tabs.map((tab, i) => (
                    <button
                      key={i}
                      onClick={() => setUnitVariantIdx(i)}
                      className="px-6 py-3 text-sm font-medium transition-all whitespace-nowrap"
                      style={{
                        background: unitVariantIdx === i ? (isLightTheme ? ac : '#362f2a') : 'transparent',
                        borderTop: `1px solid ${isLightTheme ? borderC : '#362f2a'}`,
                        color: unitVariantIdx === i ? '#fff' : (isLightTheme ? textPrimary : '#362f2a'),
                      }}
                      onMouseEnter={(e) => {
                        if (unitVariantIdx !== i) {
                          e.currentTarget.style.background = isLightTheme ? ac : '#362f2a';
                          e.currentTarget.style.color = '#fff';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (unitVariantIdx !== i) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = isLightTheme ? textPrimary : '#362f2a';
                        }
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              )}
              {activeTab && (
                <div className="rounded-xl overflow-hidden">
                  <img src={activeTab.image} alt={activeTab.label} className="w-full h-auto object-contain" loading="lazy" />
                </div>
              )}
              {p.caution && p.caution.length > 0 && (
                <ul className="mt-10 space-y-2 text-xs leading-relaxed" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>
                  {p.caution.map((c, i) => <li key={i}>• {c}</li>)}
                </ul>
              )}
            </div>
            {!isLightTheme && (
              <div
                className="absolute left-0 right-0 z-0"
                style={{
                  backgroundColor: '#362f2a',
                  width: '100%',
                  height: '100vw',
                  maxHeight: '960px',
                  minHeight: '300px',
                  top: '52vw',
                  marginTop: '150px',
                }}
              />
            )}
          </section>
        );
      }
      case 'document': {
        const p = currentPage as PremiumDocumentSubPage;
        const docAlign = isVisitPage ? 'text-left' : 'text-center';
        return (
          <section className="py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className={`mb-10 ${docAlign}`}>
                <h2 className="text-2xl md:text-3xl font-black" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{p.title}</h2>
                <p className="mt-2" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{p.subtitle}</p>
              </div>
              <div className="rounded-xl overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-auto object-contain" loading="lazy" />
              </div>
              {p.caution && p.caution.length > 0 && (
                <ul className="mt-10 space-y-2 text-xs leading-relaxed" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>
                  {p.caution.map((c, i) => <li key={i}>• {c}</li>)}
                </ul>
              )}
            </div>
          </section>
        );
      }
      case 'subscriptionEligibility': {
        const p = currentPage as PremiumSubscriptionEligibilitySubPage;
        const activeTab = p.tabs[unitVariantIdx] ?? p.tabs[0];
        return (
          <section className="py-12 md:py-16 relative">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-black text-white">{p.title}</h2>
                <p className="mt-2 text-gray-500">{p.subtitle}</p>
              </div>
              {p.tabs.length > 1 && (
                <div className="flex flex-wrap justify-center gap-0 mb-10 border-t" style={{ borderColor: '#122941' }}>
                  {p.tabs.map((tab, i) => (
                    <button
                      key={i}
                      onClick={() => setUnitVariantIdx(i)}
                      className={`px-4 md:px-6 py-3 text-sm font-medium transition-all flex-1 md:flex-none ${
                        unitVariantIdx === i ? 'text-white' : 'text-gray-500'
                      }`}
                      style={{
                        background: unitVariantIdx === i ? '#122941' : 'transparent',
                        borderTop: '1px solid #122941',
                        color: unitVariantIdx === i ? '#fff' : '#122941',
                      }}
                      onMouseEnter={(e) => {
                        if (unitVariantIdx !== i) {
                          e.currentTarget.style.background = '#122941';
                          e.currentTarget.style.color = '#fff';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (unitVariantIdx !== i) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#122941';
                        }
                      }}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              )}
              <div className="rounded-xl overflow-hidden">
                <img src={activeTab.image} alt={activeTab.label} className="w-full h-auto object-contain" loading="lazy" />
              </div>
              {p.caution && p.caution.length > 0 && (
                <ul className="mt-10 space-y-2 text-xs text-gray-500 leading-relaxed">
                  {p.caution.map((c, i) => <li key={i}>• {c}</li>)}
                </ul>
              )}
            </div>
          </section>
        );
      }
      case 'video': {
        const p = currentPage as PremiumVideoSubPage;
        const activeVideo = p.videos[unitVariantIdx] ?? p.videos[0];
        return (
          <section className="py-12 md:py-16 relative">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-black" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{p.title}</h2>
                <p className="mt-2" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{p.subtitle}</p>
              </div>
              <div className="mb-8">
                <p className="text-center text-lg font-medium mb-6" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{activeVideo.title}</p>
                <div className="relative pb-[56.25%] rounded-xl overflow-hidden bg-black">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${activeVideo.videoId}`}
                    title={activeVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              {p.videos.length > 1 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                  {p.videos.map((video, i) => (
                    <button
                      key={i}
                      onClick={() => setUnitVariantIdx(i)}
                      className={`relative pb-[56.25%] rounded-lg overflow-hidden transition-all ${
                        unitVariantIdx === i ? 'ring-2' : 'opacity-70 hover:opacity-100'
                      }`}
                      style={{
                        border: unitVariantIdx === i ? `2px solid ${ac}` : 'none',
                      }}
                    >
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="absolute top-0 left-0 w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </section>
        );
      }
      case 'news': {
        const p = currentPage as PremiumNewsSubPage;
        const firstItem = p.items[0];
        const useListFormat = isVisitPage && p.featuredImage && firstItem;
        return (
          <section className="py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-black" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{p.title}</h2>
                <p className="mt-2" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{p.subtitle}</p>
              </div>
              {isVisitPage && (
                <form method="get" className="mb-6">
                  <div className="flex gap-2">
                    <input type="text" name="search" placeholder="검색" className="flex-1 h-11 px-4 rounded-lg" style={{ background: cardBg, border: `1px solid ${borderC}`, color: isLightTheme ? textPrimary : '#ffffff' }} />
                    <button type="submit" className="px-6 h-11 rounded-lg font-bold text-white" style={{ background: ac }}>검색</button>
                  </div>
                </form>
              )}
              {useListFormat && (
                <>
                  <figure className="flex flex-col md:flex-row gap-6 mb-10 p-6 rounded-xl" style={{ background: cardBg, border: `1px solid ${borderC}` }}>
                    <img src={p.featuredImage} alt="" className="w-full md:w-80 flex-shrink-0 object-cover rounded-lg" />
                    <div className="flex-1 min-w-0">
                      <span className="text-sm font-bold" style={{ color: ac }}>{firstItem.source}</span>
                      <h3 className="text-lg font-bold mt-1" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{firstItem.title}</h3>
                      <p className="text-sm mt-2 line-clamp-4" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>
                        {(firstItem as { summary?: string }).summary || '건폐율에 대한 수요자들의 관심이 상승하고 있다. 건폐율은 대지면적 대비 건축면적 비율을 뜻하는 용어로 해당 비율이 낮을 수록 건물이 차지하는 공간이 적어진다.'}
                      </p>
                      <a href={firstItem.url} className="inline-block mt-3 text-sm font-bold" style={{ color: ac }}>more</a>
                    </div>
                  </figure>
                  <ul className="space-y-0 divide-y" style={{ borderColor: borderC }}>
                    {p.items.map((item, i) => (
                      <li key={i} style={{ borderColor: borderC }}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block py-4 px-2 hover:opacity-80 transition-opacity"
                        >
                          <span className="text-sm font-bold" style={{ color: ac }}>[ {item.source} ]</span>
                          <h4 className="text-base font-bold mt-1 mb-2" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{item.title}</h4>
                          {(item as { summary?: string }).summary && (
                            <div className="text-sm line-clamp-2 mb-2" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>
                              {(item as { summary?: string }).summary}
                            </div>
                          )}
                          <span className="text-sm font-bold" style={{ color: ac }}>more</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {!useListFormat && (
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse" style={{ borderColor: borderC }}>
                    <thead>
                      <tr style={{ background: cardBg, borderBottom: `1px solid ${borderC}` }}>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase" style={{ borderRight: `1px solid ${borderC}`, color: isLightTheme ? textSecondary : '#9ca3af' }}>번호</th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase" style={{ borderRight: `1px solid ${borderC}`, color: isLightTheme ? textSecondary : '#9ca3af' }}>제목</th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase" style={{ borderRight: `1px solid ${borderC}`, color: isLightTheme ? textSecondary : '#9ca3af' }}>언론사</th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>등록일</th>
                      </tr>
                    </thead>
                    <tbody>
                      {p.items.map((item, i) => (
                        <tr
                          key={i}
                          className="border-b transition-colors"
                          style={{ borderColor: borderC, background: isLightTheme ? (i % 2 === 0 ? '#ffffff' : '#f8f8f8') : 'transparent' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = isLightTheme ? '#f0f0f0' : 'rgba(255,255,255,0.05)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = isLightTheme ? (i % 2 === 0 ? '#ffffff' : '#f8f8f8') : 'transparent';
                          }}
                        >
                          <td className="px-4 py-3 text-sm" style={{ borderRight: `1px solid ${borderC}`, color: isLightTheme ? textSecondary : '#9ca3af' }}>
                            {item.number ?? i + 1}
                          </td>
                          <td className="px-4 py-3 text-sm" style={{ borderRight: `1px solid ${borderC}`, color: isLightTheme ? textPrimary : '#ffffff' }}>
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                              style={{ color: isLightTheme ? textPrimary : '#ffffff' }}
                            >
                              {item.title}
                            </a>
                          </td>
                          <td className="px-4 py-3 text-sm" style={{ borderRight: `1px solid ${borderC}`, color: isLightTheme ? textSecondary : '#9ca3af' }}>
                            {item.source}
                          </td>
                          <td className="px-4 py-3 text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>
                            {item.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </section>
        );
      }
      case 'notice': {
        const p = currentPage as PremiumNoticeSubPage;
        return (
          <section className="py-12 md:py-16">
            <div className="max-w-5xl mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-black text-white">{p.title}</h2>
                <p className="mt-2 text-gray-500">{p.subtitle}</p>
              </div>
              <div className="mb-8">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="검색어를 입력하세요."
                    className="flex-1 h-11 px-4 rounded-lg text-white placeholder-gray-500 focus:outline-none"
                    style={{ background: cardBg, border: `1px solid ${borderC}` }}
                  />
                  <button
                    type="button"
                    className="px-6 h-11 rounded-lg font-bold text-white"
                    style={{ background: ac }}
                  >
                    검색
                  </button>
                </div>
              </div>
              <ul className="divide-y" style={{ borderColor: borderC }}>
                {p.items.map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="flex items-center gap-4 py-4 px-2 hover:bg-white/5 transition-colors rounded-lg"
                    >
                      <span className="w-10 text-center text-sm font-bold text-gray-500 flex-shrink-0">{item.number}</span>
                      <span className="flex-1 font-medium text-white truncate">{item.title}</span>
                      <span className="text-sm text-gray-500 flex-shrink-0">{item.date}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        );
      }
      case 'registration': {
        const p = currentPage as PremiumRegistrationSubPage;
        if (p.formVariant === 'simple') {
          const handleSimpleSubmit = (e: React.FormEvent) => {
            e.preventDefault();
            if (!regAgreeSimple) {
              alert('개인정보 수집에 동의해 주세요.');
              return;
            }
            if (!regName.trim()) {
              alert('이름을 입력해 주세요.');
              return;
            }
            if (!regPhoneSimple.trim() || regPhoneSimple.replace(/\D/g, '').length < 10) {
              alert('연락처를 입력해 주세요.');
              return;
            }
            if (!regGender) {
              alert('성별을 선택해 주세요.');
              return;
            }
            if (!regAge) {
              alert('연령대를 선택해 주세요.');
              return;
            }
            alert('방문예약신청이 완료되었습니다.');
            setRegName('');
            setRegPhoneSimple('');
            setRegGender('');
            setRegAge('');
            setRegAgreeSimple(true);
          };
          return (
            <section className="py-8 md:py-12">
              <div className="max-w-xl">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-black" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{p.title}</h2>
                  <p className="mt-2 text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{p.subtitle}</p>
                </div>
                <div className="mb-6 p-4 rounded-lg overflow-hidden" style={{ background: cardBg, border: `1px solid ${borderC}` }}>
                  <p className="text-sm font-bold mb-3" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>개인정보 수집 및 이용에 대한 동의</p>
                  <div className="h-24 overflow-y-auto text-xs mb-4" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>
                    <p>고객님의 개인정보는 개인정보보호법 및 정보통신망법에 따라 안전하게 보관되며 분양완료 후 자동파기됩니다.</p>
                    <p className="mt-2">고객님의 소중한 정보는 분양 이외의 목적으로 사용되지 않습니다.</p>
                    <p className="mt-2">서비스 제공을 위해서 필요한 최소한의 개인정보이므로 동의를 해주셔야 서비스를 이용하실 수 있습니다.</p>
                  </div>
                </div>
                <form onSubmit={handleSimpleSubmit} className="space-y-4">
                  <div className="flex flex-wrap items-center gap-4 py-2">
                    <span className="text-sm" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>(필수)위 개인정보의 수집에 동의합니다.</span>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="agreeSimple" checked={regAgreeSimple} onChange={() => setRegAgreeSimple(true)} className="w-4 h-4" />
                        <span className="text-sm" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>동의함</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="agreeSimple" checked={!regAgreeSimple} onChange={() => setRegAgreeSimple(false)} className="w-4 h-4" />
                        <span className="text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>동의안함</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>이름</label>
                    <input type="text" value={regName} onChange={(e) => setRegName(e.target.value)} placeholder="이름입력" className="w-full h-11 px-4 rounded-lg" style={{ background: cardBg, border: `1px solid ${borderC}`, color: isLightTheme ? textPrimary : '#ffffff' }} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>연락처</label>
                    <input type="tel" value={regPhoneSimple} onChange={(e) => setRegPhoneSimple(e.target.value.replace(/\D/g, ''))} placeholder="-없이 숫자만입력" className="w-full h-11 px-4 rounded-lg" style={{ background: cardBg, border: `1px solid ${borderC}`, color: isLightTheme ? textPrimary : '#ffffff' }} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>성별</label>
                    <div className="flex gap-6">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="gender" checked={regGender === '남'} onChange={() => setRegGender('남')} className="w-4 h-4" />
                        <span className="text-sm" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>남</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="gender" checked={regGender === '여'} onChange={() => setRegGender('여')} className="w-4 h-4" />
                        <span className="text-sm" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>여</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>나이</label>
                    <select value={regAge} onChange={(e) => setRegAge(e.target.value)} className="w-full h-11 px-4 rounded-lg" style={{ background: cardBg, border: `1px solid ${borderC}`, color: isLightTheme ? textPrimary : '#ffffff' }}>
                      <option value="">나이를 선택해주세요.</option>
                      <option value="20">20대</option>
                      <option value="30">30대</option>
                      <option value="40">40대</option>
                      <option value="50">50대</option>
                      <option value="60">60대</option>
                    </select>
                  </div>
                  <ul className="text-xs space-y-1 py-4 list-none" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>
                    <li>• 고객님의 개인정보는 개인정보보호법 및 정보통신망법에 따라 안전하게 보관되며 분양완료 후 자동파기됩니다.</li>
                    <li>• 고객님의 소중한 정보는 분양 이외의 목적으로 사용되지 않습니다.</li>
                    <li>• 서비스 제공을 위해서 필요한 최소한의 개인정보이므로 동의를 해주셔야 서비스를 이용하실 수 있습니다.</li>
                  </ul>
                  <button type="submit" className="w-full py-4 rounded-lg font-bold text-white" style={{ background: ac }}>방문예약신청하기</button>
                </form>
              </div>
            </section>
          );
        }
        const koreanProvinces = ['강원', '경기', '경남', '경북', '광주', '대구', '대전', '부산', '서울', '세종', '울산', '인천', '전남', '전북', '제주', '충남', '충북'];
        const phonePrefixes = ['010', '011', '016', '019', '017', '018'];
        
        const handleRegSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          if (!regAgree1 || !regAgree2) {
            alert('개인정보 수집 및 이용 동의와 마케팅 목적 활용 동의가 필요합니다.');
            return;
          }
          if (!regName.trim()) {
            alert('이름을 입력하세요.');
            return;
          }
          if (!regPhone2.trim() || regPhone2.length !== 4) {
            alert('올바른 휴대폰번호를 입력하세요.');
            return;
          }
          if (!regPhone3.trim() || regPhone3.length !== 4) {
            alert('올바른 휴대폰번호를 입력하세요.');
            return;
          }
          if (!regSi || !regGu) {
            alert('주소를 선택하세요.');
            return;
          }
          if (regUnitTypes.length === 0) {
            alert('관심평형을 선택해 주세요.');
            return;
          }
          alert('등록이 완료되었습니다.');
          // 폼 초기화
          setRegName('');
          setRegPhone1('010');
          setRegPhone2('');
          setRegPhone3('');
          setRegSi('');
          setRegGu('');
          setRegDong('');
          setRegUnitTypes([]);
          setRegAgree1(false);
          setRegAgree2(false);
          setRegAgreeAll(false);
        };

        const handleAgreeAll = (checked: boolean) => {
          setRegAgreeAll(checked);
          setRegAgree1(checked);
          setRegAgree2(checked);
        };

        const handleUnitTypeToggle = (type: string) => {
          setRegUnitTypes(prev => 
            prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
          );
        };

        return (
          <section className="py-12 md:py-16 relative">
            <div className="max-w-4xl mx-auto px-4 relative z-10">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-black text-white">{p.title}</h2>
                <p className="mt-2 text-gray-500">{p.subtitle}</p>
              </div>

              <form onSubmit={handleRegSubmit} className="space-y-6">
                {/* 개인정보 수집 및 이용 동의 */}
                <div className="rounded-xl overflow-hidden" style={{ background: cardBg, border: `1px solid ${borderC}` }}>
                  <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => setPrivacyOpen(!privacyOpen)}>
                    <span className="text-white font-medium">개인정보 수집 및 이용 동의</span>
                    <button type="button" className="text-gray-400">
                      {privacyOpen ? '▲' : '▼'}
                    </button>
                  </div>
                  {privacyOpen && (
                    <div className="px-4 pb-4 border-t" style={{ borderColor: borderC }}>
                      <div className="mt-4 text-sm text-gray-400 leading-relaxed max-h-60 overflow-y-auto">
                        <p className="mb-4">
                          '학익4구역 주택재개발정비사업조합'(이하 '회사')는 고객님의 개인정보를 중요시하며, "개인정보보호법" 및 "정보통신망 이용촉진 및 정보보호 등에 관한 법률" 등 관련 법령을 준수하고 있습니다.
                        </p>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-bold text-white mb-2">1. 개인정보의 수집 및 이용목적</h4>
                            <p className="mb-2">회사는 원활한 업무를 위하여 아래와 같이 개인정보를 수집합니다.</p>
                            <p className="font-semibold mb-1">수집 항목 및 방법</p>
                            <ul className="list-disc list-inside mb-2">
                              <li>필수항목 : 성명, 핸드폰번호, 주소, 관심평형, 접속로그, 접속IP</li>
                              <li>개인정보 수집방법 : 홈페이지(관심고객등록)</li>
                            </ul>
                            <p className="font-semibold mb-1">이용목적</p>
                            <ul className="list-disc list-inside">
                              <li>이름, 핸드폰번호 : 분양상품에 대한 주요사항 안내, 고지, 분양상담 및 이벤트 등 광고성 정보전달</li>
                              <li>접속로그 : 방문자 통계분석</li>
                              <li>접속IP : 중복 등록자 확인</li>
                              <li>관심평형, 주소 : 고객성향분석</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-white mb-2">2. 개인정보의 보유 및 이용기간</h4>
                            <p>개인정보는 동의 시점부터 최대 2년간 보유 및 이용하게 됩니다.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="px-4 py-4 border-t" style={{ borderColor: borderC }}>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-400 mb-3">필수 항목 수집 및 이용에 대하여 동의하십니까?</p>
                        <div className="flex gap-6">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="agree1" checked={regAgree1} onChange={() => setRegAgree1(true)} className="w-4 h-4" />
                            <span className="text-sm text-white">동의함</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="agree1" checked={!regAgree1} onChange={() => setRegAgree1(false)} className="w-4 h-4" />
                            <span className="text-sm text-gray-400">미동의</span>
                          </label>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-3">필수 항목의 마케팅 목적의 활용에 대하여 동의하십니까?</p>
                        <div className="flex gap-6">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="agree2" checked={regAgree2} onChange={() => setRegAgree2(true)} className="w-4 h-4" />
                            <span className="text-sm text-white">동의함</span>
                          </label>
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input type="radio" name="agree2" checked={!regAgree2} onChange={() => setRegAgree2(false)} className="w-4 h-4" />
                            <span className="text-sm text-gray-400">미동의</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 개인정보 취급위탁 고지 */}
                <div className="rounded-xl overflow-hidden" style={{ background: cardBg, border: `1px solid ${borderC}` }}>
                  <div className="p-4 flex items-center justify-between cursor-pointer" onClick={() => setTrustOpen(!trustOpen)}>
                    <span className="text-white font-medium">개인정보 취급위탁 고지</span>
                    <button type="button" className="text-gray-400">
                      {trustOpen ? '▲' : '▼'}
                    </button>
                  </div>
                  {trustOpen && (
                    <div className="px-4 pb-4 border-t" style={{ borderColor: borderC }}>
                      <p className="mt-4 text-sm text-gray-400 mb-4">회사는 원활한 업무 진행 및 서비스 이행을 위해 아래와 같이 외부 전문 업체에 위탁하여 운영하고 있습니다.</p>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm" style={{ borderColor: borderC }}>
                          <thead>
                            <tr style={{ background: altBg }}>
                              <th className="px-3 py-2 text-left border" style={{ borderColor: borderC }}>위탁 대상자</th>
                              <th className="px-3 py-2 text-left border" style={{ borderColor: borderC }}>위탁업무내용</th>
                              <th className="px-3 py-2 text-left border" style={{ borderColor: borderC }}>제공하는 개인정보 항목</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="px-3 py-2 border" style={{ borderColor: borderC }}>㈜ 히어앤나우<br />㈜ 포애드원</td>
                              <td className="px-3 py-2 border" style={{ borderColor: borderC }}>홈페이지 제작</td>
                              <td className="px-3 py-2 border" style={{ borderColor: borderC }}>성명, 핸드폰번호, 접속 IP, 접속로그</td>
                            </tr>
                            <tr>
                              <td className="px-3 py-2 border" style={{ borderColor: borderC }}>㈜ 히어앤나우<br />㈜ 포애드원</td>
                              <td className="px-3 py-2 border" style={{ borderColor: borderC }}>홈페이지 유지관리</td>
                              <td className="px-3 py-2 border" style={{ borderColor: borderC }}>접속 IP, 접속로그</td>
                            </tr>
                            <tr>
                              <td className="px-3 py-2 border" style={{ borderColor: borderC }}>㈜루트이앤씨</td>
                              <td className="px-3 py-2 border" style={{ borderColor: borderC }}>분양대행</td>
                              <td className="px-3 py-2 border" style={{ borderColor: borderC }}>성명, 핸드폰번호</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}
                  {p.caution && p.caution.length > 0 && (
                    <div className="px-4 py-4 border-t" style={{ borderColor: borderC }}>
                      <ul className="space-y-1 text-xs text-gray-500 leading-relaxed">
                        {p.caution.map((c, i) => <li key={i}>※ {c}</li>)}
                      </ul>
                    </div>
                  )}
                </div>

                {/* 전체동의 */}
                <div className="rounded-xl overflow-hidden" style={{ background: cardBg, border: `1px solid ${borderC}` }}>
                  <div className="p-4">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" checked={regAgreeAll} onChange={(e) => handleAgreeAll(e.target.checked)} className="w-5 h-5 rounded" />
                      <span className="text-white font-medium">전체동의</span>
                    </label>
                  </div>
                </div>

                {/* 입력 폼 */}
                <div className="rounded-xl overflow-hidden" style={{ background: cardBg, border: `1px solid ${borderC}` }}>
                  <div className="p-6 space-y-6">
                    <div>
                      <label className="block text-white font-medium mb-2">
                        <span className="text-red-500">*</span> 성명
                      </label>
                      <input
                        type="text"
                        value={regName}
                        onChange={(e) => setRegName(e.target.value)}
                        required
                        className="w-full h-12 px-4 rounded-lg text-white placeholder-gray-500 focus:outline-none"
                        style={{ background: altBg, border: `1px solid ${borderC}` }}
                        placeholder="이름을 입력하세요"
                      />
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        <span className="text-red-500">*</span> 핸드폰 번호
                      </label>
                      <div className="flex items-center gap-2">
                        <select
                          value={regPhone1}
                          onChange={(e) => setRegPhone1(e.target.value)}
                          className="h-12 px-3 rounded-lg text-white focus:outline-none"
                          style={{ background: altBg, border: `1px solid ${borderC}` }}
                        >
                          {phonePrefixes.map(p => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                        <span className="text-gray-400">-</span>
                        <input
                          type="text"
                          value={regPhone2}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, '').slice(0, 4);
                            setRegPhone2(val);
                          }}
                          required
                          maxLength={4}
                          className="flex-1 h-12 px-4 rounded-lg text-white placeholder-gray-500 focus:outline-none"
                          style={{ background: altBg, border: `1px solid ${borderC}` }}
                          placeholder="0000"
                        />
                        <span className="text-gray-400">-</span>
                        <input
                          type="text"
                          value={regPhone3}
                          onChange={(e) => {
                            const val = e.target.value.replace(/\D/g, '').slice(0, 4);
                            setRegPhone3(val);
                          }}
                          required
                          maxLength={4}
                          className="flex-1 h-12 px-4 rounded-lg text-white placeholder-gray-500 focus:outline-none"
                          style={{ background: altBg, border: `1px solid ${borderC}` }}
                          placeholder="0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        <span className="text-red-500">*</span> 주소
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={regSi}
                          onChange={(e) => {
                            setRegSi(e.target.value);
                            setRegGu('');
                            setRegDong('');
                          }}
                          required
                          className="flex-1 h-12 px-4 rounded-lg text-white focus:outline-none"
                          style={{ background: altBg, border: `1px solid ${borderC}` }}
                        >
                          <option value="">광역시/도</option>
                          {koreanProvinces.map(p => (
                            <option key={p} value={p}>{p}</option>
                          ))}
                        </select>
                        <select
                          value={regGu}
                          onChange={(e) => {
                            setRegGu(e.target.value);
                            setRegDong('');
                          }}
                          required
                          disabled={!regSi}
                          className="flex-1 h-12 px-4 rounded-lg text-white focus:outline-none disabled:opacity-50"
                          style={{ background: altBg, border: `1px solid ${borderC}` }}
                        >
                          <option value="">시/군/구</option>
                        </select>
                        <select
                          value={regDong}
                          onChange={(e) => setRegDong(e.target.value)}
                          required
                          disabled={!regGu}
                          className="flex-1 h-12 px-4 rounded-lg text-white focus:outline-none disabled:opacity-50"
                          style={{ background: altBg, border: `1px solid ${borderC}` }}
                        >
                          <option value="">읍/면/동</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">
                        <span className="text-red-500">*</span> 관심평형
                      </label>
                      <div className="flex flex-wrap gap-4">
                        {p.unitTypes.map((type) => (
                          <label key={type} className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={regUnitTypes.includes(type)}
                              onChange={() => handleUnitTypeToggle(type)}
                              className="w-5 h-5 rounded"
                            />
                            <span className="text-white">{type}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 버튼 */}
                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 h-14 font-bold rounded-xl text-white"
                    style={{ background: ac }}
                  >
                    등록
                  </button>
                  <button
                    type="reset"
                    onClick={() => {
                      setRegName('');
                      setRegPhone1('010');
                      setRegPhone2('');
                      setRegPhone3('');
                      setRegSi('');
                      setRegGu('');
                      setRegDong('');
                      setRegUnitTypes([]);
                      setRegAgree1(false);
                      setRegAgree2(false);
                      setRegAgreeAll(false);
                    }}
                    className="flex-1 h-14 font-bold rounded-xl text-white"
                    style={{ background: cardBg, border: `1px solid ${borderC}` }}
                  >
                    취소
                  </button>
                </div>

                <p className="text-xs text-gray-500 text-center">
                  <span className="text-red-500">*</span> 는 필수입력사항 입니다.
                </p>
              </form>
            </div>
          </section>
        );
      }
      case 'gallery': {
        const p = currentPage as PremiumGallerySubPage;
        return (
          <section className="py-12 md:py-16">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-black" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{p.title}</h2>
                <p className="mt-2" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{p.subtitle}</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {p.images.map((item, i) => (
                  <div key={i} className="group relative overflow-hidden rounded-xl cursor-pointer" style={{ aspectRatio: '1' }}>
                    <img 
                      src={item.image} 
                      alt={item.title || `${p.title} ${i + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" 
                      loading="lazy" 
                    />
                    {(item.title || item.description) && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        {item.title && (
                          <p className="text-white font-medium mb-1 text-sm md:text-base">{item.title}</p>
                        )}
                        {item.description && (
                          <p className="text-white/80 text-xs md:text-sm">{item.description}</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {p.caution && p.caution.length > 0 && (
                <div className="mt-10 rounded-xl p-6" style={{ background: isLightTheme ? '#f7f7f7' : cardBg, border: `1px solid ${borderC}` }}>
                  <ul className="space-y-2 text-xs md:text-sm leading-relaxed" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>
                    {p.caution.map((c, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="flex-shrink-0 mt-0.5">※</span>
                        <span dangerouslySetInnerHTML={{ __html: c }} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        );
      }
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen text-white" style={{ background: baseBg, fontFamily: "'Noto Sans KR', sans-serif" }}>
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{ background: currentHdrBg, backdropFilter: 'blur(12px)', borderBottom: `1px solid ${borderC}` }}
        onMouseEnter={() => {
          setHeaderHovered(true);
          if (isFreshHouse) setOpenGnb(true);
        }}
        onMouseLeave={() => {
          setHeaderHovered(false);
          if (isFreshHouse) setOpenGnb(false);
        }}
      >
        <div className={`h-24 md:h-28 w-full ${isFreshHouse ? '' : 'pl-2 md:pl-4 lg:pl-6 pr-4 md:pr-8'}`}>
          {isFreshHouse ? (
            <div className="max-w-7xl mx-auto px-4 md:px-8 h-full flex items-center justify-between">
              <Link to={baseUrl(slug)} className="flex flex-col items-start shrink-0">
                <span className={`text-lg md:text-2xl font-light tracking-[0.2em] ${isLightHeader ? 'text-gray-900' : 'text-white'}`}>{data.projectNameEn}</span>
                <span className={`text-xs md:text-sm font-bold -mt-0.5 tracking-tight ${isLightHeader ? 'text-gray-600' : 'text-gray-400'}`}>{data.brandLine}</span>
              </Link>

              <nav className="hidden lg:grid items-center" style={{ gridTemplateColumns: `repeat(${data.navItems.length}, minmax(70px, 1fr))`, gap: '0 1rem', alignItems: 'center' }}>
                {data.navItems.map((item) => (
                  <div key={item.label} className="flex items-center">
                    {item.children && item.children.some(c => data.subPages?.some(sp => sp.pageId === (c as { pageId?: string }).pageId)) ? (
                      <Link to={baseUrl(slug)} className={`text-lg xl:text-xl font-medium transition-colors flex items-center gap-1 ${isLightHeader ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'}`}>
                        {item.label}
                        <ChevronDown className="w-5 h-5" />
                      </Link>
                    ) : (
                      <Link to={baseUrl(slug)} className={`text-lg xl:text-xl font-medium transition-colors block ${isLightHeader ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'}`}>
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="flex items-center justify-end gap-2">
                <button onClick={() => setShowModal(true)} className="hidden lg:flex px-8 py-3 rounded-full text-xl xl:text-2xl font-bold items-center gap-2" style={{ background: ac, color: '#fff' }}>
                  <Phone className="w-5 h-5" /> {data.contactPhone}
                </button>
                <button className="lg:hidden p-2.5" onClick={() => setMobileOpen(!mobileOpen)}>
                  {mobileOpen ? <X className={`w-7 h-7 ${isLightHeader ? 'text-gray-900' : 'text-white'}`} /> : <Menu className={`w-7 h-7 ${isLightHeader ? 'text-gray-900' : 'text-white'}`} />}
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between h-full">
              <Link to={baseUrl(slug)} className="flex flex-col items-start shrink-0">
                <span className={`text-lg md:text-2xl font-light tracking-[0.2em] ${isLightHeader ? 'text-gray-900' : 'text-white'}`}>{data.projectNameEn}</span>
                <span className={`text-xs md:text-sm font-bold -mt-0.5 tracking-tight ${isLightHeader ? 'text-gray-600' : 'text-gray-400'}`}>{data.brandLine}</span>
              </Link>

              <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
                {data.navItems.map((item) => {
                  // premium-forest 포함, pageId가 있는 children이 있으면 드롭다운 표시
                  const hasSubPages = item.children?.some(c => data.subPages?.some(sp => sp.pageId === (c as { pageId?: string }).pageId));
                  if (hasSubPages && slug) {
                    return (
                      <div
                        key={item.label}
                        className="relative"
                        onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <Link to={baseUrl(slug)} className={`px-5 xl:px-6 py-3 text-lg xl:text-xl font-medium transition-colors flex items-center gap-1 ${isLightHeader ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'}`}>
                          {item.label}
                          <ChevronDown className="w-5 h-5" />
                        </Link>
                        {openDropdown === item.label && (
                          <div
                            className="absolute top-full left-0 pt-1 min-w-[160px] py-2 rounded-b-lg z-50"
                            style={{ background: hdrBg, border: `1px solid ${borderC}` }}
                          >
                            <div className="flex flex-col">
                              {item.children!.map((child) => {
                                const pageId = (child as { pageId?: string }).pageId;
                                return data.subPages?.some(sp => sp.pageId === pageId) ? (
                                  <Link key={child.label} to={subUrl(slug, pageId!)} className={`block w-full text-left px-8 py-2.5 text-[15px] transition-colors ${isLightHeader ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}>
                                    {child.label}
                                  </Link>
                                ) : (
                                  <Link key={child.label} to={baseUrl(slug)} className={`block w-full text-left px-8 py-2.5 text-[15px] transition-colors ${isLightHeader ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}>
                                    {child.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  }
                  
                  // 기존 드롭다운 로직 (다른 프로젝트용)
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.children && item.children.some(c => data.subPages?.some(sp => sp.pageId === (c as { pageId?: string }).pageId)) && slug !== 'premium-aurum' ? (
                        <>
                          <Link to={baseUrl(slug)} className={`px-5 xl:px-6 py-3 text-lg xl:text-xl font-medium transition-colors flex items-center gap-1 ${isLightHeader ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'}`}>
                            {item.label}
                            <ChevronDown className="w-5 h-5" />
                          </Link>
                          {openDropdown === item.label && (
                            <div
                              className="absolute top-full left-0 pt-1 min-w-[160px] py-2 rounded-b-lg z-50"
                              style={{ background: hdrBg, border: `1px solid ${borderC}` }}
                            >
                              <div className="flex flex-col">
                                {item.children.map((child) => {
                                  const pageId = (child as { pageId?: string }).pageId;
                                  return data.subPages?.some(sp => sp.pageId === pageId) ? (
                                    <Link key={child.label} to={subUrl(slug, pageId!)} className={`block w-full text-left px-8 py-2.5 text-[15px] transition-colors ${isLightHeader ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}>
                                      {child.label}
                                    </Link>
                                  ) : (
                                    <Link key={child.label} to={baseUrl(slug)} className={`block w-full text-left px-8 py-2.5 text-[15px] transition-colors ${isLightHeader ? 'text-gray-600 hover:text-gray-900' : 'text-gray-400 hover:text-white'}`}>
                                      {child.label}
                                    </Link>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </>
                      ) : (
                        <Link to={baseUrl(slug)} className={`px-5 xl:px-6 py-3 text-lg xl:text-xl font-medium transition-colors block ${isLightHeader ? 'text-gray-700 hover:text-gray-900' : 'text-gray-300 hover:text-white'}`}>
                          {item.label}
                        </Link>
                      )}
                    </div>
                  );
                })}
                <button onClick={() => setShowModal(true)} className="ml-4 px-8 py-3 rounded-full text-xl xl:text-2xl font-bold flex items-center gap-2" style={{ background: ac, color: '#fff' }}>
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
            style={{ background: hdrBg, borderTop: `1px solid ${borderC}` }}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8">
              <div
                className="grid gap-x-4 gap-y-4 items-start justify-items-start"
                style={{ gridTemplateColumns: `repeat(${data.navItems.length}, minmax(70px, 1fr))` }}
              >
                {data.navItems.map((item) => (
                  <div key={item.label} className="flex flex-col gap-2 min-w-0 w-full">
                    <span className="text-xs font-bold text-white/70 uppercase tracking-wider">{item.label}</span>
                    {item.children && item.children.length > 0 ? (
                      <div className="flex flex-col gap-0.5">
                        {item.children.map((child) => {
                          const pageId = (child as { pageId?: string }).pageId;
                          return data.subPages?.some(sp => sp.pageId === pageId) ? (
                            <Link key={child.label} to={subUrl(slug, pageId!)} className="text-[15px] text-gray-400 hover:text-white transition-colors py-1">
                              {child.label}
                            </Link>
                          ) : (
                            <Link key={child.label} to={baseUrl(slug)} className="text-[15px] text-gray-400 hover:text-white transition-colors py-1">
                              {child.label}
                            </Link>
                          );
                        })}
                      </div>
                    ) : (
                      <Link to={baseUrl(slug)} className="text-[15px] text-gray-400 hover:text-white transition-colors py-1">
                        바로가기
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {mobileOpen && (
          <div className="lg:hidden max-h-[70vh] overflow-y-auto" style={{ background: baseBg, borderTop: `1px solid ${borderC}` }}>
            <Link to={baseUrl(slug)} className={`block px-5 py-3.5 text-[15px] font-medium border-b ${isLightHeader ? 'text-gray-700' : 'text-gray-300'}`} style={{ borderColor: borderC }}>메인으로</Link>
            {lifeChildren.length > 0 && (
              <>
                <p className={`px-5 py-2.5 text-xs font-bold uppercase ${isLightHeader ? 'text-gray-600' : 'text-gray-500'}`}>사업안내</p>
                {lifeChildren.map((c) => {
                  const pageId = (c as { pageId?: string }).pageId;
                  return pageId && data.subPages?.some(sp => sp.pageId === pageId) ? (
                    <Link key={c.label} to={subUrl(slug, pageId)} onClick={() => setMobileOpen(false)}
                      className={`block px-8 py-3 text-[14px] border-b ${subpageId === pageId ? (isLightHeader ? 'text-gray-900 font-bold' : 'text-white font-bold') : (isLightHeader ? 'text-gray-600' : 'text-gray-500')}`}
                      style={{ borderColor: borderC }}>
                      {c.label}
                    </Link>
                  ) : null;
                })}
              </>
            )}
            {complexChildren.length > 0 && (
              <>
                <p className={`px-5 py-2.5 text-xs font-bold uppercase ${isLightHeader ? 'text-gray-600' : 'text-gray-500'}`}>단지안내</p>
                {complexChildren.map((c) => {
                  const pageId = (c as { pageId?: string }).pageId;
                  return pageId && data.subPages?.some(sp => sp.pageId === pageId) ? (
                    <Link key={c.label} to={subUrl(slug, pageId)} onClick={() => setMobileOpen(false)}
                      className={`block px-8 py-3 text-[14px] border-b ${subpageId === pageId ? (isLightHeader ? 'text-gray-900 font-bold' : 'text-white font-bold') : (isLightHeader ? 'text-gray-600' : 'text-gray-500')}`}
                      style={{ borderColor: borderC }}>
                      {c.label}
                    </Link>
                  ) : null;
                })}
              </>
            )}
            {unitChildren.length > 0 && (
              <>
                <p className={`px-5 py-2.5 text-xs font-bold uppercase ${isLightHeader ? 'text-gray-600' : 'text-gray-500'}`}>세대안내</p>
                {unitChildren.map((c) => {
                  const pageId = (c as { pageId?: string }).pageId;
                  return pageId && data.subPages?.some(sp => sp.pageId === pageId) ? (
                    <Link key={c.label} to={subUrl(slug, pageId)} onClick={() => setMobileOpen(false)}
                      className={`block px-8 py-3 text-[14px] border-b ${subpageId === pageId ? (isLightHeader ? 'text-gray-900 font-bold' : 'text-white font-bold') : (isLightHeader ? 'text-gray-600' : 'text-gray-500')}`}
                      style={{ borderColor: borderC }}>
                      {c.label}
                    </Link>
                  ) : null;
                })}
              </>
            )}
            {scheduleChildren.length > 0 && (
              <>
                <p className={`px-5 py-2.5 text-xs font-bold uppercase ${isLightHeader ? 'text-gray-600' : 'text-gray-500'}`}>분양안내</p>
                {scheduleChildren.map((c) => {
                  const pageId = (c as { pageId?: string }).pageId;
                  return pageId && data.subPages?.some(sp => sp.pageId === pageId) ? (
                    <Link key={c.label} to={subUrl(slug, pageId)} onClick={() => setMobileOpen(false)}
                      className={`block px-8 py-3 text-[14px] border-b ${subpageId === pageId ? (isLightHeader ? 'text-gray-900 font-bold' : 'text-white font-bold') : (isLightHeader ? 'text-gray-600' : 'text-gray-500')}`}
                      style={{ borderColor: borderC }}>
                      {c.label}
                    </Link>
                  ) : null;
                })}
              </>
            )}
            {subscriptionChildren.length > 0 && (
              <>
                <p className={`px-5 py-2.5 text-xs font-bold uppercase ${isLightHeader ? 'text-gray-600' : 'text-gray-500'}`}>청약안내</p>
                {subscriptionChildren.map((c) => {
                  const pageId = (c as { pageId?: string }).pageId;
                  return pageId && data.subPages?.some(sp => sp.pageId === pageId) ? (
                    <Link key={c.label} to={subUrl(slug, pageId)} onClick={() => setMobileOpen(false)}
                      className={`block px-8 py-3 text-[14px] border-b ${subpageId === pageId ? (isLightHeader ? 'text-gray-900 font-bold' : 'text-white font-bold') : (isLightHeader ? 'text-gray-600' : 'text-gray-500')}`}
                      style={{ borderColor: borderC }}>
                      {c.label}
                    </Link>
                  ) : null;
                })}
              </>
            )}
            {newsChildren.length > 0 && (
              <>
                <p className={`px-5 py-2.5 text-xs font-bold uppercase ${isLightHeader ? 'text-gray-600' : 'text-gray-500'}`}>홍보안내</p>
                {newsChildren.map((c) => {
                  const pageId = (c as { pageId?: string }).pageId;
                  return pageId && data.subPages?.some(sp => sp.pageId === pageId) ? (
                    <Link key={c.label} to={subUrl(slug, pageId)} onClick={() => setMobileOpen(false)}
                      className={`block px-8 py-3 text-[14px] border-b ${subpageId === pageId ? (isLightHeader ? 'text-gray-900 font-bold' : 'text-white font-bold') : (isLightHeader ? 'text-gray-600' : 'text-gray-500')}`}
                      style={{ borderColor: borderC }}>
                      {c.label}
                    </Link>
                  ) : null;
                })}
              </>
            )}
            {visitChildren.length > 0 && (
              <>
                <p className={`px-5 py-2.5 text-xs font-bold uppercase ${isLightHeader ? 'text-gray-600' : 'text-gray-500'}`}>방문예약신청</p>
                {visitChildren.map((c) => {
                  const pageId = (c as { pageId?: string }).pageId;
                  return pageId && data.subPages?.some(sp => sp.pageId === pageId) ? (
                    <Link key={c.label} to={subUrl(slug, pageId)} onClick={() => setMobileOpen(false)}
                      className={`block px-8 py-3 text-[14px] border-b ${subpageId === pageId ? (isLightHeader ? 'text-gray-900 font-bold' : 'text-white font-bold') : (isLightHeader ? 'text-gray-600' : 'text-gray-500')}`}
                      style={{ borderColor: borderC }}>
                      {c.label}
                    </Link>
                  ) : null;
                })}
              </>
            )}
            {registrationChildren.length > 0 && (
              <>
                <p className={`px-5 py-2.5 text-xs font-bold uppercase ${isLightHeader ? 'text-gray-600' : 'text-gray-500'}`}>관심고객등록</p>
                {registrationChildren.map((c) => {
                  const pageId = (c as { pageId?: string }).pageId;
                  return pageId && data.subPages?.some(sp => sp.pageId === pageId) ? (
                    <Link key={c.label} to={subUrl(slug, pageId)} onClick={() => setMobileOpen(false)}
                      className={`block px-8 py-3 text-[14px] border-b ${subpageId === pageId ? (isLightHeader ? 'text-gray-900 font-bold' : 'text-white font-bold') : (isLightHeader ? 'text-gray-600' : 'text-gray-500')}`}
                      style={{ borderColor: borderC }}>
                      {c.label}
                    </Link>
                  ) : null;
                })}
              </>
            )}
          </div>
        )}
      </header>

      {/* Sub-visual - 배경 이미지 천천히 움직이는 애니메이션 */}
      <div className="h-48 md:h-64 pt-28 relative overflow-hidden flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center animate-sub-visual-pan"
          style={{ backgroundImage: `url(${currentPage.subVisualImage})` }}
        />
        <div className="absolute inset-0 z-10 bg-black/50" />
        {isVisitPage && (
          <div className="relative z-20 px-6 md:px-12 text-white">
            <b className="block text-sm md:text-base opacity-90">Perfect</b>
            <span className="block text-2xl md:text-3xl font-black mt-1">방문예약신청</span>
            <span className="block text-sm md:text-base mt-2 opacity-90">방문예약신청을 하시면 분양정보를 발빠르게 받아보실 수 있습니다.</span>
          </div>
        )}
      </div>

      {/* SNB + Content */}
      <div className={`flex flex-col md:flex-row max-w-6xl mx-auto ${isFreshHouse && openGnb ? 'mt-12' : ''}`}>
        {snbChildren.length > 0 && (
          <aside className="md:w-56 flex-shrink-0 px-4 py-8 md:py-12">
            <div className="sticky top-28 space-y-1">
              <p className="text-xs font-bold mb-4" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{breadcrumbParent}</p>
              {snbChildren.map((c) => {
                const pageId = (c as { pageId?: string }).pageId;
                if (!pageId || !data.subPages?.some(sp => sp.pageId === pageId)) return null;
                const isActive = subpageId === pageId;
                return (
                  <Link key={c.label} to={subUrl(slug, pageId)}
                    className={`block py-2.5 px-4 rounded-lg text-sm transition-colors ${isActive ? 'font-bold' : ''}`}
                    style={{
                      ...(isActive ? { background: ac, color: '#fff' } : { color: isLightTheme ? textSecondary : '#9ca3af' }),
                    }}>
                    {c.label}
                  </Link>
                );
              })}
            </div>
          </aside>
        )}
        <main className={`flex-1 min-w-0 ${slug === 'premium-forest' ? '' : ''}`}>
          {isVisitPage && (() => {
            const page = currentPage as { backgroundImage?: string };
            const visitPage = data.subPages?.find(sp => sp.pageId === 'visit') as { backgroundImage?: string } | undefined;
            const visitBg = page?.backgroundImage || visitPage?.backgroundImage || (data.registration && 'backgroundImage' in data.registration ? (data.registration as { backgroundImage?: string }).backgroundImage : undefined);
            return visitBg ? (
              <div className="flex flex-col md:flex-row min-h-[480px]">
                <div className="hidden md:block md:w-[48%] flex-shrink-0 bg-cover bg-center" style={{ backgroundImage: `url(${visitBg})` }} />
                <div className="flex-1 min-w-0 px-4 py-8 md:py-12">{renderContent()}</div>
              </div>
            ) : renderContent();
          })()}
          {!isVisitPage && renderContent()}
        </main>
      </div>

      {/* Footer */}
      <footer className="py-10 px-4 mt-12" style={{ background: altBg, borderTop: `1px solid ${borderC}` }}>
        <div className="max-w-6xl mx-auto">
          <p className="font-bold text-sm mb-3" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>{data.theme.footerText}</p>
          {data.theme.footerInfo.developer && <p className="text-xs mb-1" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>시행 {data.theme.footerInfo.developer}</p>}
          {data.theme.footerInfo.constructor && <p className="text-xs mb-1" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>시공 {data.theme.footerInfo.constructor}</p>}
          <p className="text-xs mb-1" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>대표번호: {data.contactPhone}</p>
          {data.theme.footerInfo.bizNumber && <p className="text-xs mb-4" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>사업자등록번호: {data.theme.footerInfo.bizNumber}</p>}
          {data.theme.disclaimer && <p className="text-[10px] leading-relaxed text-center" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>{data.theme.disclaimer}</p>}
          <p className="text-[11px] mt-4 text-center" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}>
            본 페이지는 분양퍼스트에서 제작한 데모 템플릿입니다.{' '}
            <Link to="/" className="underline hover:opacity-80" style={{ color: 'inherit' }}>분양퍼스트</Link>
          </p>
        </div>
      </footer>

      {/* FAB */}
      <div className="fixed bottom-10 right-3 md:right-5 flex flex-col gap-2.5 z-50">
        <button onClick={() => setShowModal(true)} className="flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full shadow-2xl text-white" style={{ background: ac }} title="관심고객 등록">
          <UserPlus className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <a href={`tel:${data.contactPhone}`} className="flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full shadow-2xl" style={{ background: cardBg, border: `1px solid ${borderC}`, color: isLightTheme ? textPrimary : '#ffffff' }} title="전화">
          <Phone className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'inherit' }} />
        </a>
        <a href="#" className="flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full shadow-2xl bg-[#FEE500]" style={{ color: '#3c1e1e' }} title="카카오톡 상담">
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'inherit' }} />
        </a>
        <Link to={baseUrl(slug)} className="flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-full shadow-2xl" style={{ background: cardBg, border: `1px solid ${borderC}`, color: isLightTheme ? textPrimary : '#ffffff' }} title="맨 위로">
          <ChevronUp className="w-5 h-5 md:w-6 md:h-6" style={{ color: 'inherit' }} />
        </Link>
      </div>

      <div className="fixed bottom-3 left-3 z-50">
        <Link to="/samples" className="inline-block px-3 py-2 text-[11px] rounded-lg" style={{ background: cardBg, border: `1px solid ${borderC}`, color: isLightTheme ? textPrimary : '#ffffff' }}>
          샘플 목록으로
        </Link>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl" style={{ background: altBg }}>
            <button onClick={() => setShowModal(false)} className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full">
              <X className="w-5 h-5 text-black" />
            </button>
            <div className="p-6 text-center text-white" style={{ background: ac }}>
              <h3 className="text-lg font-black">관심고객 등록</h3>
              <p className="text-sm text-white/80 mt-1">분양 정보를 가장 먼저 상담받으세요.</p>
            </div>
            <div className="p-6">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="text-4xl mb-4">&#10003;</div>
                  <h3 className="text-xl font-bold" style={{ color: isLightTheme ? textPrimary : '#ffffff' }}>등록 완료</h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input type="text" placeholder="이름 *" value={formName} onChange={(e) => setFormName(e.target.value)} required
                    className="w-full h-12 px-4 rounded-lg placeholder-gray-500 focus:outline-none"
                    style={{ background: cardBg, border: `1px solid ${borderC}`, color: isLightTheme ? textPrimary : '#ffffff' }} />
                  <input type="tel" placeholder="휴대폰 *" value={formPhone} onChange={(e) => setFormPhone(e.target.value)} required
                    className="w-full h-12 px-4 rounded-lg placeholder-gray-500 focus:outline-none"
                    style={{ background: cardBg, border: `1px solid ${borderC}`, color: isLightTheme ? textPrimary : '#ffffff' }} />
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" checked={agreed} onChange={(e) => setAgreed(e.target.checked)} className="mt-0.5 w-4 h-4 rounded" />
                    <span className="text-sm" style={{ color: isLightTheme ? textSecondary : '#9ca3af' }}><span className="underline">개인정보처리방침</span>에 동의합니다 *</span>
                  </label>
                  <button type="submit" disabled={!agreed}
                    className="w-full h-14 font-bold rounded-xl text-white disabled:opacity-50"
                    style={{ background: ac }}>등록하기</button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
