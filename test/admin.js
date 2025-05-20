// 📁 server/scripts/make-admin.js

const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' }); // server/.env 경로 기준

const main = async () => {
  const username = process.argv[2]; // 실행 시 사용자 이름 인자로 받음

  if (!username) {
    console.error('사용자 아이디를 입력해주세요. 예: node make-admin.js hong');
    process.exit(1);
  }

  try {
    const conn = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    const [result] = await conn.execute(
      'UPDATE users SET is_admin = TRUE WHERE username = ?',
      [username]
    );

    if (result.affectedRows === 0) {
      console.log(`❌ 사용자 "${username}" 을(를) 찾을 수 없습니다.`);
    } else {
      console.log(`✅ 사용자 "${username}" 계정이 관리자 권한으로 전환되었습니다.`);
    }

    await conn.end();
  } catch (err) {
    console.error('⚠️ 관리자 설정 실패:', err.message);
  }
};

main();
