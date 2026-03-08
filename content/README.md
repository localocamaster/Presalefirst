# 고객 프로젝트 콘텐츠 작업 가이드

고객이 주문하고 **사진, 영상, 문구** 등 자료를 보내오면, **JSON 파일만 수정**하면 됩니다.
코드를 건드리지 않고 **config.json 편집**과 **이미지 교체**만으로 작업할 수 있습니다.

---

## 작업 순서

1. **고객 문의** → 템플릿 선택 (더포레스트, 제니스, 쌍용, 달서 등)
2. **프로젝트 폴더 생성** → `public/content/projects/{프로젝트ID}/`
3. **이미지 저장** → `public/images/projects/{프로젝트ID}/` 에 고객 제공 이미지 저장
4. **config.json 편집** → 문구, 연락처, 주소 등 텍스트 입력
5. **레지스트리 등록** → `public/content/projects/projectRegistry.json` 에 프로젝트 추가

---

## 폴더 구조

```
public/
├── content/
│   └── projects/
│       ├── projectRegistry.json  ← 등록된 프로젝트 목록 (여기에 추가)
│       ├── forest-example/        ← 더포레스트(프리미엄형) 예시
│       │   └── config.json
│       ├── zenith-example/        ← 제니스(모던형) 예시
│       │   └── config.json
│       └── {고객프로젝트ID}/
│           └── config.json
│
└── images/
    └── projects/
        └── {고객프로젝트ID}/   ← 고객 제공 이미지 저장
            ├── main01.jpg
            ├── main02.jpg
            ├── luxury1.jpg
            └── ...
```

---

## 이미지 파일명 규칙 (더포레스트/프리미엄형)

| 용도 | 파일명 | 개수 |
|------|--------|------|
| 히어로 슬라이드 | main01.jpg, main02.jpg, main03.jpg | 3개 |
| 사업개요 | section05_1.jpg | 1개 |
| 프리미엄7 | luxury1.jpg ~ luxury7.jpg | 7개 |
| 오시는길/모델하우스 | section05_1.jpg (공용 가능) | - |
| 방문예약 배경 | visual_01.jpg | 1개 |

고객이 보내준 이미지를 위 파일명으로 저장하거나, config.json에서 경로를 지정할 수 있습니다.

---

## config.json 편집

JSON 형식이므로 **쉼표(,)** 와 **따옴표(")** 를 정확히 입력해야 합니다.
에디터에서 `public/content/projects/{프로젝트ID}/config.json` 을 열어 수정하세요.

### 필수 입력 항목

- **projectName** : 아파트/분양명 (예: 더포레스트)
- **contactPhone** : 연락처 (예: 0000-0000)
- **overview.items** : 사업개요 표 (위치, 규모, 타입, 시행, 시공 등)
- **hero.slides** : 히어로 슬라이드 제목/부제목
- **premium.features** : 프리미엄7 항목 (제목, 설명)

---

## URL

- 샘플: `/demo/premium-forest`, `/demo/zenith` 등
- 고객 프로젝트: `/p/{프로젝트ID}` (예: `/p/forest-example`)
