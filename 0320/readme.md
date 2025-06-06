element redering 예제 코드 및 레포트

<br>이미지 출처: https://i.ytimg.com/vi/R6fCqkNGScA/hqdefault.jpg 
돌아온 영웅 홍길동 (https://www.youtube.com/watch?v=R6fCqkNGScA)

# ⚛️ React - Element Rendering

## 📌 엘리먼트(Element)란?

- React에서 **엘리먼트(Element)** 는 화면에 보여질 **UI의 최소 단위**입니다.
- HTML의 태그(`<div>`, `<h1>` 등)와 유사하지만, React 내부에서는 **객체(Object)** 로 처리됩니다.
- React 엘리먼트는 **불변(immutable)** 하며, 한 번 생성된 엘리먼트는 수정되지 않고, 새로운 엘리먼트를 만들어서 갱신합니다.

```jsx
const element = <h1>Hello, world!</h1>;

