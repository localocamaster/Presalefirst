import { Link } from 'react-router-dom';
import SeoHead from '../components/SeoHead';
import { getWebPageSchema } from '../utils/schema';

export default function Terms() {
  return (
    <>
      <SeoHead
        title="이용약관"
        description="분양웹사이트제작 | 분양퍼스트 이용약관. 분양 홈페이지 제작 서비스 이용 조건 및 약관."
        path="/terms"
        schema={getWebPageSchema({
          name: '이용약관 | 분양퍼스트',
          description: '분양 홈페이지 제작 서비스 이용 조건 및 약관.',
          path: '/terms',
          breadcrumbs: [
            { name: '홈', path: '/' },
            { name: '이용약관', path: '/terms' },
          ],
        })}
      />
      <section className="pt-32 pb-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-dark mb-10">이용약관</h1>
          <div className="prose prose-gray max-w-none space-y-6 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-dark mt-8 mb-3">제1조 (목적)</h2>
              <p>본 약관은 주식회사 로카로카(이하 "회사")가 운영하는 분양퍼스트 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-dark mt-8 mb-3">제2조 (정의)</h2>
              <p>① "서비스"란 회사가 제공하는 분양 홈페이지 제작, 호스팅, 도메인 연결, 접속통계, 관심고객 관리 등 관련 부가서비스를 말합니다.</p>
              <p className="mt-2">② "이용자"란 본 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 말합니다.</p>
              <p className="mt-2">③ "플랜"이란 베이직, 디럭스, 프리미엄 등 서비스 이용 범위를 구분하는 요금제를 말합니다.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-dark mt-8 mb-3">제3조 (약관의 효력 및 변경)</h2>
              <p>① 본 약관은 서비스를 이용하고자 하는 모든 이용자에게 적용됩니다.</p>
              <p className="mt-2">② 회사는 필요한 경우 관련 법령을 위배하지 않는 범위에서 본 약관을 변경할 수 있으며, 변경된 약관은 서비스 내 공지사항을 통해 공지합니다.</p>
              <p className="mt-2">③ 변경된 약관은 공지 후 7일이 경과한 날부터 효력이 발생합니다. 이용자가 변경에 동의하지 않는 경우 서비스 이용을 중단하고 이용계약을 해지할 수 있습니다.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-dark mt-8 mb-3">제4조 (서비스의 제공)</h2>
              <p>① 회사는 분양 홈페이지 제작 서비스 및 다음의 부가서비스를 제공합니다.</p>
              <ul className="list-disc mt-2 pl-6 space-y-1">
                <li>홈페이지 제작 및 디자인 적용</li>
                <li>호스팅 및 기본 도메인 제공</li>
                <li>전화·카카오톡 상담 연결, 관심고객 접수 기능</li>
                <li>유튜브 영상, 팝업, 오시는 길 등 콘텐츠 설정</li>
                <li>도메인 연결, 검색엔진 최적화(SEO) 설정</li>
                <li>접속통계(플랜에 따라 제공)</li>
              </ul>
              <p className="mt-2">② 서비스의 구체적인 내용과 이용 범위는 선택한 플랜에 따르며, 별도 안내에 따릅니다.</p>
              <p className="mt-2">③ 기본 사용 기간은 제작 완료일로부터 1년이며, 분양 진행 중인 경우 만료 전 연락 시 무료 연장이 가능합니다.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-dark mt-8 mb-3">제5조 (서비스 이용)</h2>
              <p>① 이용자는 서비스 이용을 위해 필요한 정보(성명, 연락처, 이메일, 제작 자료 등)를 성실히 제공하여야 합니다.</p>
              <p className="mt-2">② 이용자는 회사의 서비스 이용 안내 및 제작 가이드를 준수하여야 합니다.</p>
              <p className="mt-2">③ 이용자는 제작 완료 후 1년간 서비스를 이용할 수 있으며, 연장이 필요한 경우 만료 전 회사에 연락하여 연장 절차를 진행하여야 합니다.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-dark mt-8 mb-3">제6조 (요금 및 결제)</h2>
              <p>① 서비스 이용 요금은 플랜별로 정해진 금액을 1회 결제하는 방식으로 부과됩니다.</p>
              <p className="mt-2">② 결제는 신청 후 담당자 안내에 따라 진행하며, 결제 완료 후 제작이 시작됩니다.</p>
              <p className="mt-2">③ 급행 옵션(6시간 이내 제작)은 별도 5만원이 추가됩니다.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-dark mt-8 mb-3">제7조 (환불)</h2>
              <p>① 제작 시작 전: 전액 환불 가능합니다.</p>
              <p className="mt-2">② 제작 진행 중: 진행 정도에 따라 환불 금액이 달라질 수 있으며, 구체적인 환불 조건은 담당자와 상담하여 결정합니다.</p>
              <p className="mt-2">③ 제작 완료 후: 서비스가 정상적으로 제공된 경우 환불이 제한될 수 있습니다.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-dark mt-8 mb-3">제8조 (저작권 및 지적재산권)</h2>
              <p>① 회사가 제공하는 템플릿, 디자인, 시스템에 대한 저작권 및 지적재산권은 회사에 귀속됩니다.</p>
              <p className="mt-2">② 이용자가 제공한 제작 자료(사진, 문구 등)에 대한 권리는 이용자에게 있으며, 서비스 제공을 위해 회사가 이용하는 데 동의한 것으로 봅니다.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-dark mt-8 mb-3">제9조 (면책)</h2>
              <p>① 회사는 천재지변, 전쟁, 서비스 설비 장애 등 불가항력적 사유로 인한 서비스 중단에 대해 책임을 지지 않습니다.</p>
              <p className="mt-2">② 회사는 이용자가 제공한 자료의 내용, 저작권 침해 등에 대해 책임을 지지 않습니다.</p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-dark mt-8 mb-3">제10조 (기타)</h2>
              <p>본 약관에 명시되지 않은 사항은 관련 법령 및 회사가 정한 서비스 이용 안내에 따릅니다.</p>
            </section>
            <p className="mt-12 text-sm text-gray-500">시행일 : 본 약관은 2026.02.27부터 시행합니다.</p>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <Link to="/" className="text-primary font-semibold hover:underline">← 분양퍼스트 홈으로</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
