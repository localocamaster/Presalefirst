import { useState } from 'react';
import { Link } from 'react-router-dom';
import { X, Monitor, Smartphone, ExternalLink } from 'lucide-react';

interface Props {
  slug: string;
  title: string;
  onClose: () => void;
}

export default function PreviewModal({ slug, title, onClose }: Props) {
  const [mode, setMode] = useState<'pc' | 'mobile'>('pc');

  return (
    <>
      <div className="fixed inset-0 z-[99] bg-black/60" onClick={onClose} />
      <div className="fixed inset-2 sm:inset-4 lg:inset-y-10 z-[100] flex flex-col rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl lg:left-1/2 lg:-translate-x-1/2 lg:w-[960px] xl:w-[1040px]">
        {/* Top Bar */}
        <div className="bg-[#1e293b] text-white flex items-center justify-between px-4 py-3 shrink-0">
          <div>
            <h3 className="font-bold text-sm">{title}</h3>
            <p className="text-xs text-gray-400">실제 홈페이지 미리보기</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-white/10 rounded-lg overflow-hidden">
              <button
                onClick={() => setMode('pc')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold transition-colors ${mode === 'pc' ? 'bg-white text-gray-800' : 'text-gray-300 hover:text-white'}`}
              >
                <Monitor className="w-3.5 h-3.5" /> PC
              </button>
              <button
                onClick={() => setMode('mobile')}
                className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold transition-colors ${mode === 'mobile' ? 'bg-white text-gray-800' : 'text-gray-300 hover:text-white'}`}
              >
                <Smartphone className="w-3.5 h-3.5" /> 모바일
              </button>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Iframe */}
        <div className="flex-1 flex items-start justify-center overflow-hidden bg-gray-800 p-4">
          <div
            className="bg-white rounded-lg overflow-hidden shadow-2xl h-full transition-all duration-300"
            style={{ width: mode === 'pc' ? '100%' : '390px', maxWidth: '100%' }}
          >
            <iframe
              src={`/demo/${slug}`}
              title="미리보기"
              className="w-full h-full border-0"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-[#1e293b] text-white flex items-center justify-end gap-3 px-4 py-3 shrink-0">
          <Link
            to={`/demo/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold text-gray-300 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" /> 새 창 열기
          </Link>
          <Link
            to="/inquiry"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-bold rounded-lg transition-colors"
          >
            이 스타일로 신청하기
          </Link>
        </div>
      </div>
    </>
  );
}
