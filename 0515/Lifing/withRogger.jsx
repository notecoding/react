 function withLogger(WrappedComponent) {
 return function EnhancedComponent(props) {
 console.log("컴포넌트가 렌더링됨:", WrappedComponent.name);
 return <WrappedComponent {...props} />;
 };
 }
 function Hello() {
 return <h1>안녕하세요!</h1>;
 }
 const HelloWithLogger = withLogger(Hello);
 function App() {
 return <HelloWithLogger />;
 }
 export default App;
