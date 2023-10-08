const express = require('express');
const router = express.Router();
const Iamport = require('iamport');
const bcrypt = require('bcrypt');
const port = process.env.PORT || 3000; // 포트 설정 (3000 포트를 사용하거나 환경 변수로 지정 가능)
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

// CORS 설정 (개발 중에는 모든 도메인에서 요청을 허용해도 괜찮습니다)
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// 아임포트 관련 설정 (이 부분은 실제 아임포트 계정 정보로 설정해야 합니다)
const iamport = new Iamport({
    impKey: '1713323658251555', // 아임포트 API 키
    impSecret: 'HZUg9K01LoCyxxzG4z0NHiri25SvroSSdk2Nnu1J0jo4LabyDIT693uN2qZu2tc97yaeFGbHV1tjNThM' // 아임포트 API 시크릿 키
});

// ...
router.put('/mypage/charge-point', verifyToken, (req, res) => {
    const { amount } = req.query;
    const userId = req.userId; // 사용자 ID 가져오기
  
    // 아임포트 API를 사용하여 결제 처리하는 로직을 작성하세요
    // 먼저 사용자의 username을 데이터베이스에서 가져오세요.
    // const getUsernameQuery = `SELECT username FROM users WHERE user_id = ?`;
  
    // db.query(getUsernameQuery, [userId], (dbErr, usernameResults) => {
    //   if (dbErr) {
    //     console.error('데이터베이스 오류:', dbErr);
    //     res.status(500).json({ error: '데이터베이스 오류' });
    //     return;
    //   }
  
    //   if (usernameResults.length === 0) {
    //     console.error('사용자를 찾을 수 없음');
    //     res.status(404).json({ error: '사용자를 찾을 수 없음' });
    //     return;
    //   }
  
    //   const username = usernameResults[0].username;
  
      // 아임포트 결제 요청 초기화
      iamport.payment.prepare({
        // 결제 정보 설정 (예: amount, buyer_email, buyer_name, ...)
        amount
        // 나머지 결제 정보 설정
      }).then((response) => {
        // 아임포트 결제 요청이 성공한 경우의 처리
        console.log(response);
  
        // 사용자의 point 업데이트
        const updatePointQuery = `UPDATE users SET point = point + ? WHERE user_id = ?`;
  
        db.query(updatePointQuery, [amount, userId], (updateErr, result) => {
          if (updateErr) {
            console.error('데이터베이스 오류:', updateErr);
            res.status(500).json({ error: '데이터베이스 오류' });
            return;
          }
  
          if (result.affectedRows === 0) {
            console.error('사용자를 찾을 수 없음');
            res.status(404).json({ error: '사용자를 찾을 수 없음' });
            return;
          }
  
          // 업데이트된 point 값을 클라이언트에게 응답
          res.json({ message: '결제와 포인트 업데이트가 성공했습니다.' });
        });
      }).catch((error) => {
        // 아임포트 결제 요청이 실패한 경우의 처리
        console.error('결제 요청 실패:', error);
        res.status(500).json({ error: '결제 요청 실패' });
      });
    });
  // ...
  

module.exports = router;

