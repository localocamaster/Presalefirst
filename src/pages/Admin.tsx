import { Link, Outlet, useLocation, Navigate } from 'react-router-dom';
import { Home, Users, BarChart3, Shield } from 'lucide-react';
import SeoHead from '../components/SeoHead';

const navItems = [
  { to: '/admin/customers', label: '관심고객 관리', icon: Users },
  { to: '/admin/stats', label: '접속통계 관리', icon: BarChart3 },
  { to: '/admin/fraud', label: '부정클릭 관리', icon: Shield },
];

export default function Admin() {
  const { pathname } = useLocation();

  return (
    <>
      <SeoHead title="관리자" description="분양퍼스트 관리자 대시보드" path="/admin" />
      <div className="min-h-screen bg-gray-100 flex">
        {/* Sidebar */}
        <aside className="w-64 shrink-0 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-6 border-b border-gray-200">
            <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors">
              <Home className="w-5 h-5" />
              <span className="font-bold text-lg">분양퍼스트</span>
            </Link>
            <p className="mt-1 text-xs text-gray-500">관리자 대시보드</p>
          </div>
          <nav className="flex-1 p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="p-4 border-t border-gray-200">
            <span className="text-xs text-gray-500 block mb-2">프리미엄 데모</span>
            <Link
              to="/inquiry"
              className="block w-full py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors text-center"
            >
              데모신청
            </Link>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-6xl mx-auto p-6 lg:p-8">
            <Outlet />
          </div>
          <footer className="py-6 text-center text-sm text-gray-500 border-t border-gray-200 mt-8">
            <p>본 페이지는 데모용 관리자 대시보드입니다.</p>
            <Link to="/" className="mt-2 inline-block text-primary hover:underline">
              분양퍼스트 홈으로
            </Link>
          </footer>
        </main>
      </div>
    </>
  );
}
