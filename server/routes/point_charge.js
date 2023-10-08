const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const port = process.env.PORT || 3000; // 포트 설정 (3000 포트를 사용하거나 환경 변수로 지정 가능)
const db = require('../config/dbConfig');

// CORS 설정 (개발 중에는 모든 도메인에서 요청을 허용해도 괜찮습니다)
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// 아임포트 관련 설정 (이 부분은 실제 아임포트 계정 정보로 설정해야 합니다)
const Iamport = require('iamport');
const iamport = new Iamport({
    impKey: '1713323658251555', // 아임포트 API 키
    impSecret: 'HZUg9K01LoCyxxzG4z0NHiri25SvroSSdk2Nnu1J0jo4LabyDIT693uN2qZu2tc97yaeFGbHV1tjNThM' // 아임포트 API 시크릿 키
});

// 충전 API 엔드포인트
router.get('/user/mypage/charge/point', (req, res) => {
    const { amount } = req.query;
    console.log(amount)

    // 아임포트 API를 사용하여 결제 처리하는 로직을 작성하세요
    iamport.payment.prepare({
        // 결제 정보 설정 (예: amount, buyer_email, buyer_name, ...)
        amount,
        buyer_name: username
        // 나머지 결제 정보 설정
    }).then((response) => {
        // 아임포트 결제 요청이 성공한 경우의 처리
        console.log(response);
        res.json(response); // 클라이언트에게 응답을 보내거나 처리 결과를 전달하세요
    }).catch((error) => {
        // 아임포트 결제 요청이 실패한 경우의 처리
        console.error(error);
        res.status(500).json({ error: '결제 요청 실패' }); // 실패 시 클라이언트에게 오류 응답을 보내세요
    });
});

// 서버 시작
router.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
