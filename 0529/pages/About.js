 import React from 'react';
 import { useSearchParams} from 'react-router-dom';
 const About= () => {
 const [searchParams, setSearchParams] = useSearchParams();
 const detail= searchParams.get('detail');
 const mode= searchParams.get('mode');
 const onToggleDetail= () => {
 setSearchParams({ mode, detail: detail=== 'true' ? false: true});
 };
 const onIncreaseMode= () => {
 const nextMode= mode=== null? 1 : parseInt(mode) + 1;
 setSearchParams({ mode: nextMode, detail });
 };
 return(
 <div>
 <h1>소개</h1>
 <p>리액트라우터를사용해보는프로젝트입니다.</p>
 <p>detail: {detail}</p>
 <p>mode: {mode}</p>
 <button onClick={onToggleDetail}>Toggledetail</button>
 <button onClick={onIncreaseMode}>mode+ 1</button>
 </div>
 );
 };
 export default About;
