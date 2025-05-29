 import React from 'react';
 import { Outlet, useNavigate} from 'react-router-dom';
 const Layout= () => {
 const navigate= useNavigate();
 const goBack= () => {
 // 이전페이지로이동
navigate(-1);
 };
 const goArticles= () => {
 // articles경로로이동
navigate('/articles');
 };
 return(
 <div>
 <header style={{ background: 'lightgray', padding: 16, fontSize: 24 }}>
 <button onClick={goBack}>뒤로가기</button>
 <button onClick={goArticles}>게시글목록</button>
 </header>
 <main>
 <Outlet/>
 </main>
 </div>
 );
 };
 export default Layout;
