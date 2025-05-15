 function Dialog({ title, message}) {
 return(
 <div style={{ border: "1px solidblack", padding: "10px" }}>
 <h3>{title}</h3>
 <p>{message}</p>
 </div>
 );
 }
 function WarningDialog() {
 return<Dialogtitle="경고!" message="이작업은취소할수없습니다." />;
 }
 function SuccessDialog() {
 return<Dialogtitle="성공!" message="작업이완료되었습니다." />;
 }
 function App() {
 return(
 <div>
 <WarningDialog/>
 <SuccessDialog/>
 </div>
 );
 }
 export default App;
