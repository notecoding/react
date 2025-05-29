import React from 'react';
 import { useParams} from 'react-router-dom';
 const data = {
 tealighting: {
 name: '김다빈',
 description: '보안에관심있는학생',
 },
 dew: {
 name: '이이슬',
 description: 'DB에관심있는학생',
 },
 yellow: {
 name: '조윤정',
 description: '컴퓨터에관심있는학생',
 },
 frontend: {
 name: '최예진',
 description: 'front-end에관심있는학생',
 },
 };
 const Profile = () => {
 const params= useParams();
 const profile = data[params.username];
 return (
 <div>
 <h1>사용자프로필</h1>
 {profile ? (
 <div>
 <h2>{profile.name}</h2>
 <p>{profile.description}</p>
 </div>
 ) : (
 <p>존재하지않는프로필입니다.</p>
 )}
 </div>
 );
 };
 export default Profile;
