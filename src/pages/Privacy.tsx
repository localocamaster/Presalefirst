import { Link } from 'react-router-dom';
import SeoHead from '../components/SeoHead';
import { getWebPageSchema } from '../utils/schema';

export default function Privacy() {
  return (
    <>
      <SeoHead
        title="개인정보처리방침"
        description="분양웹사이트제작 | 분양퍼스트 개인정보처리방침. 개인정보 수집, 이용, 보호에 관한 안내."
        path="/privacy"
        schema={getWebPageSchema({
          name: '개인정보처리방침 | 분양퍼스트',
          description: '개인정보 수집, 이용, 보호에 관한 안내.',
          path: '/privacy',
          breadcrumbs: [
            { name: '홈', path: '/' },
            { name: '개인정보처리방침', path: '/privacy' },
          ],
        })}
      />
      <section className="pt-32 pb-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-dark mb-10">개인정보처리방침</h1>
          <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-dark mt-8 mb-3">제1조 (목적)</h2>
              <p>주식회사 로카로카(이하 "회사")는 이용자의 개인정보를 중요시하며, 「개인정보 보호법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련 법령을 준수합니다. 본 개인정보처리방침은 회사가 수집하는 개인정보의 항목, 이용 목적, 보유 기간, 보호 조치 등을 안내합니다.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-dark mt-8 mb-3">제2조 (수집하는 개인정보 항목)</h2>
              <p>회사는 서비스 이용을 위해 아래와 같은 개인정보를 수집할 수 있습니다.</p>
              <div className="mt-3">
                <p className="font-medium text-dark">① 홈페이지 제작 문의 시</p>
                <ul className="list-disc mt-1 pl-6 space-y-1">
                  <li>필수항목: 성명, 연락처</li>
                  <li>선택항목: 이메일, 문의 내용</li>
                </ul>
              </div>
              <div className="mt-3">
                <p className="font-medium text-dark">② 홈페이지 제작 신청 및 결제 시</p>
                <ul className="list-disc mt-1 pl-6 space-y-1">
                  <li>필수항목: 성명, 연락처, 이메일, 결제 정보</li>
                  <li>선택항목: 제작자료(사진, 문구 등)에 포함된 개인정보</li>
                </ul>
              </div>
              <div className="mt-3">
                <p className="font-medium text-dark">③ 자동 수집 항목</p>
                <ul className="list-disc mt-1 pl-6 space-y-1">
                  <li>IP주소, 쿠키, 서비스 이용 기록, 접속 로그 등</li>
                </ul>
              </div>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-dark mt-8 mb-3">제3조 (개인정보의 이용 목적)</h2>
              <p>수집된 개인정보는 다음의 목적을 위해 활용됩니다.</p>
              <ul className="list-disc mt-2 pl-6 space-y-1">
                <li>홈페이지 제작 신청 접수 및 처리</li>
                <li>서비스 제공 및 문의 응대</li>
                <li>결제 및 결제 내역 안내</li>
                <li>서비스 개선, 안내 및 마케팅(동의 시)</li>
                <li>부정 이용 방지 및 서비스 안정성 확보</li>
                <li>관련 법령에 따른 이용</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-dark mt-8 mb-3">제4조 (개인정보의 보유 및 이용 기간)</h2>
              <p>① 회사는 서비스 제공 목적을 달성한 후에는 해당 정보를 지체 없이 파기합니다.</p>
              <p className="mt-2">② 다만, 관련 법령에 따라 보존할 필요가 있는 경우 해당 기간 동안 보관합니다.</p>
              <ul className="list-disc mt-2 pl-6 space-y-1">
                <li>계약 또는 청약철회 등에 관한 기록: 5년</li>
                <li>대금결제 및 재화 등의 공급에 관한 기록: 5년</li>
                <li>소비자 불만 또는 분쟁처리에 관한 기록: 3년</li>
                <li>표시·광고에 관한 기록: 6개월</li>
                <li>웹사이트 방문 기록: 3개월</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-dark mt-8 mb-3">제5조 (개인정보의 제3자 제공)</h2>
              <p>회사는 이용자의 개인정보를 원칙적으로 제3자에게 제공하지 않습니다. 다만, 다음의 경우에는 예외로 합니다.</p>
              <ul className="list-disc mt-2 pl-6 space-y-1">
                <li>이용자가 사전에 동의한 경우</li>
                <li>법령에 의해 요구되는 경우</li>
                <li>서비스 제공에 따른 요금 정산을 위해 필요한 경우(결제 대행사 등)</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-dark mt-8 mb-3">제6조 (개인정보의 파기)</h2>
              <p>회사는 개인정보 보유 기간의 경과, 처리 목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다. 파기 절차 및 방법은 다음과 같습니다.</p>
              <ul className="list-disc mt-2 pl-6 space-y-1">
                <li>전자적 파일: 복구 불가능한 방법으로 영구 삭제</li>
                <li>종이 문서: 분쇄기로 분쇄하거나 소각</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-dark mt-8 mb-3">제7조 (이용자의 권리)</h2>
              <p>이용자는 언제든지 다음의 권리를 행사할 수 있습니다.</p>
              <ul className="list-disc mt-2 pl-6 space-y-1">
                <li>개인정보 열람 요청</li>
                <li>오류 등이 있을 경우 정정 요청</li>
                <li>삭제 요청</li>
                <li>처리 정지 요청</li>
              </ul>
              <p className="mt-2">위 권리 행사는 회사에 서면, 전화, 이메일 등을 통해 하실 수 있으며, 회사는 이에 대해 지체 없이 조치하겠습니다.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-dark mt-8 mb-3">제8조 (개인정보 보호책임자)</h2>
              <p>회사는 개인정보 처리에 관한 업무를 총괄하여 책임지고, 개인정보 처리와 관련한 이용자의 불만처리 및 피해구제를 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.</p>
              <div className="mt-4 p-4 bg-gray-100 rounded-xl">
                <p className="font-medium text-dark">개인정보관리책임자</p>
                <p className="mt-1">이메일: localoca.master@gmail.com</p>
                <p>전화: 0507-1339-3982</p>
              </div>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-dark mt-8 mb-3">제9조 (권익침해 구제방법)</h2>
              <p>이용자는 개인정보침해로 인한 구제를 받기 위하여 다음 기관에 분쟁해결이나 상담을 신청할 수 있습니다.</p>
              <ul className="list-disc mt-2 pl-6 space-y-1">
                <li>개인정보분쟁조정위원회: (국번없이) 1833-6972</li>
                <li>한국인터넷진흥원 개인정보침해신고센터: (국번없이) 118</li>
                <li>대검찰청 사이버수사과: (국번없이) 1301</li>
                <li>경찰청 사이버안전국: (국번없이) 182</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-dark mt-8 mb-3">제10조 (개인정보처리방침의 변경)</h2>
              <p>본 개인정보처리방침은 법령 및 방침에 따라 변경될 수 있으며, 변경 시 서비스 내 공지사항을 통해 공지합니다.</p>
            </section>
            <p className="mt-12 text-sm text-gray-500">시행일 : 본 방침은 2026.02.27부터 시행합니다.</p>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <Link to="/" className="text-primary font-semibold hover:underline">← 분양퍼스트 홈으로</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
