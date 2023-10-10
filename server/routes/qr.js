const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const QRCode = require('qrcode-generator');
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

  router.post('/generatedQRCode', async (req, res) => {
    try {
      const { text, reservation_datetime } = req.body;
      const qr = QRCode(0, 'M'); // QR 코드 유형과 오류 수정 수준 설정
      qr.addData(`Seat: ${text}\nReservation Datetime: ${reservation_datetime}`); // QR 코드에 포함될 텍스트
      qr.make();
  
      // QR 코드 이미지 데이터를 클라이언트에게 반환
      res.json({ qrCodeData: qr.createDataURL(4) });
    } catch (error) {
      console.error('QR 코드 생성 오류:', error);
      res.status(500).json({ error: 'QR 코드 생성 중 오류가 발생했습니다.' });
    }
  });

  module.exports = router;