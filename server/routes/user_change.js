const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../config/dbConfig');

function verifyToken(req, res, next) {
  // 헤더에서 인증 토큰을 추출
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1]; // Bearer 다음의 토큰값
  // console.log(token)
  if (!token) {
    return res.status(401).json({ error: '인증 토큰이 없습니다' });
  }

  // 토큰 검증
  jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) {
      console.error(err);
      return res.status(401).json({ error: '인증 토큰이 유효하지 않습니다' });
    }

    // 토큰에서 추출한 정보를 request 객체에 저장
    req.userId = decoded.userId; // 예시: 사용자 ID
    req.role = decoded.role; // 예시: 사용자 역할
    next();
  });
}

router.put('/nickname-update', verifyToken, (req, res) => {
    const userId = req.userId;
    const { nickname } = req.body;
  
    const query = `UPDATE users SET nickname=? WHERE user_id= ?`;
    db.query(query, [nickname, userId], (err, result) => {
        if (err) {
            console.error('닉네임 업데이트 오류:', err);
            res.status(500).json({ error: '닉네임 업데이트 실패' });
            return;
        }
        res.json({ message: '닉네임 업데이트 성공' });
    });
  })
router.get('/users-info', verifyToken, (req, res) => {
    const userId = req.userId;
    const query = `SELECT username, point, uni_num, role, nickname FROM users WHERE user_id = ?`;

    db.query(query, [userId],(err, result) => {

        if (err) {
            console.error('정보 조회 오류:', err);
            res.status(500).json({ error: '정보 조회 실패' });
            return;
        }
        if (result.length === 0) {
            res.status(404).json({ error: '정보를 찾을 수 없습니다' });
            return;
        }
        const user_info = result[0];
        res.json({ user_info });
    
    });
});



module.exports = router;