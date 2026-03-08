import { useState } from 'react';
import { X, MessageCircle, FileSpreadsheet } from 'lucide-react';

const customers = [
  { id: 18, name: '정재현', path: '네이버 검색', date: '2023-02-13 18:00', phone: '010-987-0000', entry: '미입장', memo: '' },
  { id: 16, name: '이한결', path: '직접 유입', date: '2023-02-12 14:30', phone: '010-1234-5678', entry: '2023-02-14 10:00', memo: '59㎡ 관심' },
  { id: 15, name: '김가람', path: '카카오톡', date: '2023-02-11 09:15', phone: '010-5555-1234', entry: '미입장', memo: '' },
  { id: 14, name: '박시후', path: '네이버 블로그', date: '2023-02-10 16:45', phone: '010-7777-9999', entry: '2023-02-12 15:30', memo: '84㎡ 문의' },
  { id: 13, name: '김건우', path: '구글 검색', date: '2023-02-09 11:20', phone: '010-2222-3333', entry: '미입장', memo: '' },
  { id: 12, name: '최민지', path: '직접 유입', date: '2023-02-08 13:00', phone: '010-8888-4444', entry: '2023-02-10 09:00', memo: '상담완료' },
  { id: 11, name: '한소희', path: '다음 검색', date: '2023-02-07 10:30', phone: '010-6666-1111', entry: '미입장', memo: '' },
  { id: 10, name: '윤도현', path: '네이버 검색', date: '2023-02-06 15:00', phone: '010-9999-0000', entry: '2023-02-08 14:00', memo: '114㎡ 관심' },
];

export default function AdminCustomers() {
  const [activeTab, setActiveTab] = useState<'all' | 'admin'>('all');

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">관심고객 관리</h2>
      <div
        className="rounded-xl p-4 flex items-center justify-between"
        style={{ background: 'linear-gradient(135deg, #1a56db 0%, #2563eb 50%, #3b82f6 100%)' }}
      >
        <div>
          <p className="text-white/90 text-sm">총 관심고객</p>
          <p className="text-3xl font-bold text-white">20명</p>
        </div>
        <p className="text-white/80 text-xs">202x년 O월 O일까지만 제공되는 데모 데이터입니다</p>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-4 flex flex-wrap items-center justify-end gap-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'all' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            전체 관심고객
          </button>
          <button
            onClick={() => setActiveTab('admin')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === 'admin' ? 'bg-primary text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            관리자
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
            <FileSpreadsheet className="w-4 h-4" />
            엑셀 다운로드
          </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {customers.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <span className="text-xs text-gray-500">No. {c.id}</span>
                <h3 className="font-bold text-gray-900">{c.name}</h3>
              </div>
              <button className="p-1 text-gray-400 hover:text-red-500 rounded">
                <X className="w-4 h-4" />
              </button>
            </div>
            <dl className="space-y-2 text-sm">
              <div>
                <dt className="text-gray-500">상담신청일</dt>
                <dd className="font-medium text-gray-900">{c.date}</dd>
              </div>
              <div>
                <dt className="text-gray-500">연락처</dt>
                <dd className="font-medium text-gray-900">{c.phone}</dd>
              </div>
              <div>
                <dt className="text-gray-500">상담메모</dt>
                <dd className="font-medium text-gray-900">{c.memo || '-'}</dd>
              </div>
            </dl>
            <button className="mt-4 w-full py-2.5 bg-primary text-white text-sm font-semibold rounded-lg hover:bg-primary-dark transition-colors flex items-center justify-center gap-2">
              <MessageCircle className="w-4 h-4" />
              상담하기
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
