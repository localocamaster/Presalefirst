const fraudLogs = [
  { time: '2023-02-17 11:00', ip: '192.168.1.100', page: '홈페이지', status: '차단' },
  { time: '2023-02-17 10:45', ip: '175.122.95.88', page: '사업안내', status: '미차단' },
  { time: '2023-02-17 10:30', ip: '59.5.151.200', page: '홈페이지', status: '차단' },
  { time: '2023-02-17 10:15', ip: '211.201.21.61', page: '프리미엄', status: '미차단' },
  { time: '2023-02-17 10:00', ip: '207.241.229.87', page: '오시는길', status: '차단' },
];

const topFraudIPs = [
  { ip: '210.117.18.98', count: 205 },
  { ip: '175.122.95.88', count: 100 },
  { ip: '59.5.151.200', count: 75 },
  { ip: '211.201.21.61', count: 60 },
  { ip: '207.241.229.87', count: 40 },
];

const visitorLabels = ['2/11', '2/12', '2/13', '2/14', '2/15', '2/16', '2/17'];
const maxFraud = Math.max(...topFraudIPs.map((d) => d.count));

export default function AdminFraud() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">부정클릭 관리</h2>
      <div
        className="rounded-xl p-4 flex items-center justify-between"
        style={{ background: 'linear-gradient(135deg, #1a56db 0%, #2563eb 50%, #3b82f6 100%)' }}
      >
        <p className="text-white font-medium">프리미엄 데모</p>
        <p className="text-white/80 text-sm">데모 데이터</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {[
          { label: '오늘 정상', value: '187', color: 'text-green-600' },
          { label: '오늘 차단', value: '23', color: 'text-red-600' },
          { label: '중복클릭', value: '12', color: 'text-amber-600' },
          { label: '빠른반복', value: '7', color: 'text-orange-600' },
          { label: '봇차단', value: '4', color: 'text-primary' },
          { label: '블랙리스트', value: '15', color: 'text-gray-600' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white rounded-xl border border-gray-200 p-5 text-center">
            <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-6">최근 7개월 유효/부정클릭</h3>
          <div className="flex items-end justify-between gap-2 h-48">
            {[18, 25, 22, 30, 28, 35, 32].map((v, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="flex gap-1 w-full justify-center items-end" style={{ height: 120 }}>
                  <div
                    className="w-3 bg-green-500 rounded-t"
                    style={{ height: `${(v / 35) * 80}px` }}
                  />
                  <div
                    className="w-3 bg-red-500 rounded-t"
                    style={{ height: `${((35 - v) / 35) * 80}px` }}
                  />
                </div>
                <span className="text-xs text-gray-500">{visitorLabels[i]}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-4 mt-4 justify-center">
            <span className="flex items-center gap-2 text-sm">
              <span className="w-3 h-3 rounded bg-green-500" /> 유효 클릭
            </span>
            <span className="flex items-center gap-2 text-sm">
              <span className="w-3 h-3 rounded bg-red-500" /> 부정 클릭
            </span>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-gray-900 mb-6">최다 부정클릭 IP</h3>
          <div className="space-y-4">
            {topFraudIPs.map((d) => (
              <div key={d.ip} className="flex items-center gap-3">
                <span className="text-sm text-gray-700 w-32 shrink-0 font-mono">{d.ip}</span>
                <div className="flex-1 h-6 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-red-500 transition-all"
                    style={{ width: `${(d.count / maxFraud) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-600 w-10 text-right">{d.count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <h3 className="font-bold text-gray-900 p-6 pb-0">최근 부정클릭 로그</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">시간</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">IP 주소</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">페이지</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">상태</th>
              </tr>
            </thead>
            <tbody>
              {fraudLogs.map((log, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-700">{log.time}</td>
                  <td className="px-6 py-4 text-sm font-mono text-gray-700">{log.ip}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{log.page}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
                        log.status === '차단' ? 'bg-red-100 text-red-700' : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {log.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
