// 📁 server/controllers/authController.js

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../config/db');

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // 1. 사용자 조회
    const [rows] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);

    if (rows.length === 0) {
      return res.status(401).json({ message: '존재하지 않는 사용자입니다.' });
    }

    const user = rows[0];

    // 2. 비밀번호 확인
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: '비밀번호가 일치하지 않습니다.' });
    }

    // 3. 사용자 정보 구성 (프론트 전달용)
    const userData = {
      id: user.id,
      name: user.name,
      username: user.username,
      isAdmin: user.is_admin === 1 || user.is_admin === true // ✅ 핵심: 관리자 여부 포함
    };

    // 4. JWT 생성
    const token = jwt.sign(userData, process.env.JWT_SECRET, { expiresIn: '1d' });

    // 5. 응답 반환
    res.json({ token, user: userData });
  } catch (err) {
    console.error('로그인 실패:', err);
    res.status(500).json({ message: '서버 오류', error: err.message });
  }
};
