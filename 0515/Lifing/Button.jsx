 function Button({ children, color }) {
 return <button style={{ backgroundColor: color }}>{children}</button>;
 }
 function App() {
 return (
 <div>
 <Button color="blue">파란 버튼</Button>
 <Button color="red">빨간 버튼</Button>
 </div>
 );
 }
 export default App;
