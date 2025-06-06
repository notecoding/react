# ⚛️ JSX (JavaScript XML)

## 📌 JSX란 무엇인가?

**JSX(JavaScript XML)**는 JavaScript에서 HTML을 작성할 수 있도록 해주는 **React의 확장 문법**입니다.  
JSX를 사용하면 **UI를 더 직관적이고 선언적으로** 작성할 수 있습니다.  
HTML과 매우 비슷하게 생겼지만, 실제로는 JavaScript의 문법 일부이며, 브라우저가 직접 실행할 수는 없습니다. 따라서 Babel과 같은 트랜스파일러가 JSX 코드를 JavaScript 코드로 변환해줍니다.

---

## ✅ 왜 JSX를 사용하는가?

- **직관적인 UI 구성**  
  마치 HTML을 작성하듯이 UI를 구성할 수 있어 가독성이 좋습니다.

- **논리와 UI를 함께 구성 가능**  
  JavaScript 표현식을 `{}` 안에 삽입하여 동적인 UI를 쉽게 만들 수 있습니다.

- **React의 선언형 프로그래밍 스타일과 잘 맞음**  
  어떤 UI를 “어떻게 동작하게 할지”가 아니라, “무엇이 보여져야 하는지”에 집중할 수 있습니다.

---

## 🧩 JSX와 일반 JavaScript의 차이

JSX는 컴파일될 때 `React.createElement()` 함수 호출로 변환됩니다.

```jsx
const element = <h1>Hello, world!</h1>;
