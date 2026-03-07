import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-1.5 mb-4">
              <Logo className="w-10 h-10 text-primary-light" />
              <span className="text-xl font-bold text-white tracking-tight">분양퍼스트</span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 break-words">
              분양 홍보 홈페이지 제작 전문 솔루션.<br />
              빠르고 합리적인 비용으로 전문적인 홈페이지를 제작해드립니다.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">서비스</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/service" className="hover:text-white transition-colors">서비스 소개</Link></li>
              <li><Link to="/process" className="hover:text-white transition-colors">제작과정</Link></li>
              <li><Link to="/samples" className="hover:text-white transition-colors">샘플 보기</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">요금제</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">고객지원</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/inquiry" className="hover:text-white transition-colors">제작 문의</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">블로그</Link></li>
              <li><Link to="/map" className="hover:text-white transition-colors">지역별 제작</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">연락처</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary-light shrink-0" />
                0507-1339-3982
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary-light shrink-0" />
                localoca.master@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col md:flex-row md:items-start md:justify-between gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500">
          <div className="text-left space-y-1 break-words min-w-0 overflow-hidden">
            <p>상호명 : 주식회사 로카로카 대표자 : 이병헌</p>
            <p>소재지 : 인천광역시 미추홀구 인하로 100 인하대학교 인하드림센터 1관 206에이호</p>
            <p>사업자 등록번호 : 888-86-03395 통신판매신고번호 : 2025-인천미추홀-0661</p>
            <p>대표전화번호 : 0507-1339-3982 대표이메일 : localoca.master@gmail.com</p>
            <p>개인정보관리책임자 : 김진우</p>
          </div>
          <div className="shrink-0 md:text-right">
            © {new Date().getFullYear()} 분양퍼스트. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
