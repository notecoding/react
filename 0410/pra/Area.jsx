import { useState} from "react";
 const Area= () => {
 const [size, setSize] = useState({ width: 200, height: 100 });
 return(
 <div>
 <h1>
너비: {size.width}, 높이: {size.height} 
 </h1>

 <button
 onClick={() => {
 const copy= { ...size};
 copy.width = size.width >=200 ? 200 : size.width+10;
 setSize(copy);
 }}
 >
너비키우기
</button>


 <button
 onClick={() => {
 const copy= { ...size};
 copy.width= size.width <=0 ? 0 : size.width-10;
 setSize(copy);
 }}
 >
너비줄이기
</button>


 <button
 onClick={() => {
 const copy= { ...size};
 copy.height = size.height >=200 ? 200 : size.height+10;
 setSize(copy);
 }}
 >
높이키우기
</button>

<button
 onClick={() => {
 const copy= { ...size};
 copy.height= size.height <=0 ? 0 : size.height-10;;
 setSize(copy);
 }}
 >
높이줄이기
</button>

 </div>
 ); };
 export default Area;