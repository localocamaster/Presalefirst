const visitorData = [18, 30, 39, 34, 27, 44, 48];
const visitorLabels = ['2/11', '2/12', '2/13', '2/14', '2/15', '2/16', '2/17'];

const inflowData = [
  { label: '네이버', value: 8500 },
  { label: '다음', value: 3500 },
  { label: '구글', value: 2000 },
  { label: '직접유입', value: 1800 },
  { label: '기타', value: 1100 },
];

const maxInflow = Math.max(...inflowData.map((d) => d.value));
const maxVisitor = Math.max(...visitorData);

export default function AdminStats() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">접속통계 관리</h2>
      <div
        className="rounded-xl p-4 flex items-center justify-between"
        style={{ background: 'linear-gradient(135deg, #1a56db 0%, #2563eb 50%, #3b82f6 100%)' }}
      >
        <p className="text-white font-medium">프리미엄 데모</p>
        <p className="text-white/80 text-sm">데모 데이터</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[
          { label: '오늘', value: '12', color: 'text-green-600' },
          { label: '어제', value: '28', color: 'text-primary' },
          { label: '이번주', value: '156', color: 'text-amber-600' },
          { label: '이번달', value: '892', color: 'text-red-600' },
          { label: '총 방문', value: '3,892', color: 'text-gray-600' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-5 text-center">
            <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-6">최근 7일 방문자</h3>
          <div className="flex items-end justify-between gap-2 h-48">
            {visitorData.map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <span className="text-xs font-medium text-gray-600">{v}</span>
                <div
                  className="w-full rounded-t bg-primary min-h-[4px] transition-all"
                  style={{ height: `${(v / maxVisitor) * 100}%` }}
                />
                <span className="text-xs text-gray-500">{visitorLabels[i]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-6">페이지별 클릭수</h3>
          <div className="space-y-4">
            {inflowData.map((d) => (
              <div key={d.label} className="flex items-center gap-3">
                <span className="text-sm text-gray-700 w-20 shrink-0">{d.label}</span>
                <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-primary transition-all"
                    style={{ width: `${(d.value / maxInflow) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-600 w-12 text-right">{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
