import React from 'react';
 import { Link} from 'react-router-dom';
 const Home = () => {
 return(
 <div>
 <h1>홈</h1>
 <p>가장먼저보여지는페이지입니다.</p>
 <ul>
 <li>
 <Link to="/about">소개</Link>
 </li>
 <li>
 <Link to="/profiles/velopert">velopert의프로필</Link>
 </li>
 <li>
 <Link to="/profiles/gildong">gildong의프로필</Link>
 </li>
 <li>
 <Link to="/profiles/void">존재하지않는프로필</Link>
 </li>
 <li>
 <Link to="/articles">게시글목록</Link>
 </li>
 </ul>
 </div>
 );
 };
 export default Home;
