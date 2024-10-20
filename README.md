# 와이즐리 클론 코딩

## 기존 서비스 분석

- 성능 측정(lighthouse)
- 개선 가능 요소 파악
- 프론트 아키텍처 분석

### 성능 측정

#### Lighthouse

- FCP 2.6초
- LCP 4.1초
- Total Blocking Time 690밀리초
- Cumulative Layout Shift 0.425

#### 개발자 도구 성능 패널

- render blocking 요소

  - js 파일
    - cdn.jsdelivr
    - cid.generate
    - swiper
    - i18n
  - css 파일
    - optimizer
    - swiper-bundle.css

- layout Shift 요소
  - 아이템 섹션 (swiper)

### 프론트 아키텍처 분석

- 카페 24 기반
- 라이브러리
  - swiper (캐러셀)

## 클론 프로젝트

- 아키텍처
- 성능 악영향 요소 개선

### 성능 악영향 요소 개선

- layout shift
  swiper js가 로드된 후, html 문서를 확인하여 각 요소에 스타일을 주입하는 방식으로 동작하고 있음
  이로 인해, 서버 사이드에서 렌더링된 페이지에 대해 layoutShift가 발생함.

  - layout shift가 발생하는 케이스에 따라, shift가 발생하지 않도록 크기를 고정값으로 부여하는 방법
