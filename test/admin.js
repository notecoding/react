// 📁 server/scripts/make-admin.js

const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const main = async () => {
  const username = process.argv[2];
  const password = process.argv[3];
  const name = process.argv[4] || '관리자';

  if (!username || !password) {
    console.error('사용법: node make-admin.js [username] [password] [name]');
    process.exit(1);
  }

  try {
    const conn = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });

    // 사용자 존재 여부 확인
    const [rows] = await conn.execute('SELECT * FROM users WHERE username = ?', [username]);

    if (rows.length > 0) {
      console.log(`❌ 사용자 "${username}" 이(가) 이미 존재합니다.`);
      await conn.end();
      return;
    }

    // 비밀번호 해시 처리
    const hashed = await bcrypt.hash(password, 10);

    // 사용자 삽입
    await conn.execute(
      'INSERT INTO users (name, username, password, is_admin) VALUES (?, ?, ?, TRUE)',
      [name, username, hashed]
    );

    console.log(`✅ 관리자 계정 "${username}" 생성 완료 (이름: ${name})`);
    await conn.end();
  } catch (err) {
    console.error('⚠️ 관리자 생성 실패:', err.message);
  }
};

main();
