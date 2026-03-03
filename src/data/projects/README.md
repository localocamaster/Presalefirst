# 고객 프로젝트 설정

고객이 템플릿(zenith, luxia, ssy, dalseo)을 선택하면, 이 폴더에 고객별 설정 파일을 추가합니다.

## 작업 순서

1. **고객 문의** → 템플릿 선택 확인 (zenith/luxia/ssy/dalseo)
2. **프로젝트 폴더 생성** → `public/images/projects/{projectId}/` 에 고객 제공 이미지 저장
3. **설정 파일 생성** → `zenith-example.ts`를 복사하여 `{projectId}.ts` 생성 후 편집
4. **레지스트리 등록** → `projectRegistry.ts`의 `projectConfigs`에 추가

## 설정 파일 작성

`zenith-example.ts`를 복사하여 `{projectId}.ts`로 저장 후 편집합니다.
(템플릿이 luxia/ssy/dalseo인 경우 해당 템플릿 샘플의 navItems, sections 구조를 참고)

### 필수 편집 항목

| 필드 | 설명 |
|------|------|
| templateId | zenith / luxia / ssy / dalseo |
| projectId | 고객 프로젝트 고유 ID (URL에 사용, 예: customer-001) |
| projectName | 아파트/분양명 (예: 강남 푸르지오 시그니처) |
| projectNameEn | 영문명 (헤더 로고용) |
| brandLine | 부가 브랜드 라인 (예: 강남, 서면) |
| address | 주소 |
| contactPhone | 연락처 |
| modelHouse | 모델하우스 주소, 운영시간, 전화 |
| sections | 이미지 경로 (고객 제공 이미지) |
| theme.footerText | 푸터 문구 |

### 이미지 경로

- 저장 위치: `public/images/projects/{projectId}/slide1.png`, slide2.png, ...
- sections.src: `/images/projects/{projectId}/slide1.png`

### navItems / sections

템플릿별로 구조가 다릅니다. `src/data/templateData.ts`의 해당 템플릿 샘플을 참고하세요.

## URL

- 샘플: `/demo/zenith`, `/demo/luxia`, `/demo/ssy`, `/demo/dalseo`
- 고객 프로젝트: `/p/{projectId}` (예: `/p/zenith-example`)
- 또는: `/demo/zenith?project=zenith-example`
