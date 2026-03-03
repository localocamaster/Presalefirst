import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const navLinks = [
  { to: '/', label: '홈' },
  { to: '/service', label: '서비스 소개' },
  { to: '/process', label: '제작과정' },
  { to: '/samples', label: '샘플 보기' },
  { to: '/pricing', label: '요금제' },
  { to: '/blog', label: '블로그' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const transparent = isHome && !scrolled && !mobileOpen;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {isHome ? (
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-1.5 group"
            >
              <Logo className={`w-10 h-10 transition-colors ${
                transparent ? 'text-white' : 'text-primary'
              }`} />
              <span className={`text-xl font-bold tracking-tight transition-colors ${
                transparent ? 'text-white' : 'text-dark'
              }`}>
                분양퍼스트
              </span>
            </button>
          ) : (
            <Link to="/" className="flex items-center gap-1.5 group" onClick={() => setMobileOpen(false)}>
              <Logo className={`w-10 h-10 transition-colors ${
                transparent ? 'text-white' : 'text-primary'
              }`} />
              <span className={`text-xl font-bold tracking-tight transition-colors ${
                transparent ? 'text-white' : 'text-dark'
              }`}>
                분양퍼스트
              </span>
            </Link>
          )}

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  transparent
                    ? pathname === link.to
                      ? 'text-white bg-white/15'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                    : pathname === link.to
                      ? 'text-primary bg-blue-50'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/inquiry"
              className={`ml-2 px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 ${
                transparent
                  ? 'bg-white/20 backdrop-blur text-white border border-white/30 hover:bg-white/30'
                  : 'bg-primary text-white hover:bg-primary-dark hover:shadow-lg'
              }`}
            >
              무료 상담
            </Link>
          </nav>

          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              transparent ? 'text-white hover:bg-white/10' : 'hover:bg-gray-100'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="메뉴 토글"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-3 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.to
                    ? 'text-primary bg-blue-50'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/inquiry"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-4 py-3 bg-primary text-white text-sm font-semibold rounded-lg text-center"
            >
              무료 상담
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
