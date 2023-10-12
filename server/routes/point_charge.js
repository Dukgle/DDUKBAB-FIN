const express = require("express");
const jwt = require('jsonwebtoken');
const router = express.Router();
const bcrypt = require('bcrypt');
const port = process.env.PORT || 3000;
const db = require('../config/dbConfig');
// const { pool, select } = require("../dbHeroku");

function verifyToken(req, res, next) {
  // 헤더에서 인증 토큰을 추출
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1]; // Bearer 다음의 토큰값
  // console.log(token)
  if (!token) {
    return res.status(401).json({ error: "인증 토큰이 없습니다" });
  }

  // 토큰 검증
  jwt.verify(token, "your-secret-key", (err, decoded) => {
    if (err) {
      console.error(err);
      return res.status(401).json({ error: "인증 토큰이 유효하지 않습니다" });
    }

    // 토큰에서 추출한 정보를 request 객체에 저장
    req.userId = decoded.userId; // 예시: 사용자 ID
    req.role = decoded.role; // 예시: 사용자 역할
    next();
  });
}

// CORS 설정 (개발 중에는 모든 도메인에서 요청을 허용해도 괜찮습니다)
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// 아임포트 관련 설정 (이 부분은 실제 아임포트 계정 정보로 설정해야 합니다)
const Iamport = require('iamport');
const iamport = new Iamport({
  impKey: "1713323658251555", // 아임포트 API 키
  impSecret: "HZUg9K01LoCyxxzG4z0NHiri25SvroSSdk2Nnu1J0jo4LabyDIT693uN2qZu2tc97yaeFGbHV1tjNThM", // 아임포트 API 시크릿 키
});


// 충전 API 엔드포인트
router.post('/mypage/charge/point', (req, res) => {
    const params = req.body.params;
    const amount = params.amount;
    const uni_num = params.uni_num;
    const merchant_uid = params.merchant_uid;

    // 1. uni_num을 사용하여 데이터베이스에서 현재 포인트를 가져옵니다.
    db.query('SELECT point FROM users WHERE uni_num = ?', [uni_num], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: '데이터베이스 오류' });
            return;
        }

        if (results.length === 0) {
            // uni_num에 해당하는 사용자가 없으면 오류 응답을 보냅니다.
            res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
        } else {
            const currentPoint = results[0].point;

            // 2. 클라이언트에서 받아온 point를 현재 포인트에 더합니다.
            const updatedPoint = currentPoint + amount;

            // 3. 데이터베이스에 업데이트된 포인트를 저장합니다.
            db.query('UPDATE users SET point = ? WHERE uni_num = ?', [updatedPoint, uni_num], (err, results) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: '데이터베이스 업데이트 오류' });
                    return;
                }

                // 업데이트가 성공하면 클라이언트에 성공 응답을 보냅니다.
                res.json({ success: true, message: '포인트가 성공적으로 업데이트되었습니다.' });
            });
        }
    });
});

router.put('/point-update', verifyToken, (req, res) => {
  const userId = req.userId; // 클라이언트에서 보내는 user_id
  let userPoint, orderTotalPrice;

  // 1. users 테이블에서 user_id를 기반으로 현재 사용자의 포인트를 가져옴
  const getUserPointQuery = 'SELECT point FROM users WHERE user_id = ?';
  db.query(getUserPointQuery, [userId], (err, result) => {
    if (err) {
      console.error('사용자 포인트 조회 오류:', err);
      res.status(500).json({ error: '사용자 포인트 조회 실패' });
      return;
    }

    if (result.length === 0) {
      res.status(404).json({ error: '사용자를 찾을 수 없습니다' });
      return;
    }

    userPoint = result[0].point;
    console.log(userPoint)

    // 2. orders 테이블에서 user_id를 기반으로 가장 최근 주문의 total_price를 가져옴
    const getOrderTotalPriceQuery = 'SELECT total_price FROM orders WHERE user_id = ? ORDER BY created_at DESC LIMIT 1';
    db.query(getOrderTotalPriceQuery, [userId], (err, result) => {
      if (err) {
        console.error('주문의 total_price 조회 오류:', err);
        res.status(500).json({ error: '주문의 total_price 조회 실패' });
        return;
      }

      if (result.length === 0) {
        res.status(404).json({ error: '주문을 찾을 수 없습니다' });
        return;
      }

      orderTotalPrice = result[0].total_price;

      // 3. 사용자의 포인트가 주문의 가격보다 작으면 에러 응답
      if (userPoint < orderTotalPrice) {
        res.status(400).json({ error: '포인트가 부족합니다' });
        return;
      }

      // 4. 사용자의 포인트에서 주문 가격을 차감하고 업데이트
      const updatedPoint = userPoint - orderTotalPrice;
      const updateUserPointQuery = 'UPDATE users SET point = ? WHERE user_id = ?';

      db.query(updateUserPointQuery, [updatedPoint, userId], (err, result) => {
        if (err) {
          console.error('포인트 업데이트 오류:', err);
          res.status(500).json({ error: '포인트 업데이트 실패' });
          return;
        }

        if (result.affectedRows === 0) {
          res.status(404).json({ error: '포인트 업데이트 실패' });
          return;
        }

        // 5. 업데이트가 성공하면 응답
        res.json({ message: '포인트가 성공적으로 변경되었습니다' });
      });
    });
  });
});


module.exports = router;