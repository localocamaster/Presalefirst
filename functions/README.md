# Firebase Functions - 문의 이메일 발송

## 설정 방법

### 1. 의존성 설치

```bash
cd functions
npm install
```

### 2. 환경 변수 설정

**로컬/에뮬레이터**: `functions/.env` 파일이 이미 설정되어 있습니다.

**프로덕션 배포 시**: Firebase Console > 프로젝트 > Functions > sendInquiryEmail > 환경 변수에서 동일한 값 설정:
- SMTP_USER
- SMTP_PASS
- INQUIRY_TO_EMAIL (선택)

### 3. 배포

```bash
cd functions
npm run build
firebase deploy --only functions
```

배포 후 콘솔에 표시되는 Function URL을 복사하여 프로젝트 루트 `.env`에 설정:

```
VITE_INQUIRY_API_URL=https://us-central1-YOUR_PROJECT_ID.cloudfunctions.net/sendInquiryEmail
```

### 4. 프론트엔드 빌드

```bash
npm run build
```
