import React, { useState } from "react";
import Header from "../header/Header";
import { useParams, useNavigate } from "react-router-dom";
import star from "../icon/star2.png";
import "./MyReview.css";

function MyReview() {
    const logoText = "내 후기";
    const navigate = useNavigate();

    // 리뷰 목록 상태 추가
    const [reviews, setReviews] = useState([
        { id: 1, title: '무난하게 맛있음', content: '다음에는 다른 메뉴도 먹어봐야겠음', starRating: 4.5 , type: '파스타', menu: '알리오올리오', time: '1시간 전'},
        { id: 2, title: '학식최고존엄', content: '맛있음 또 먹을거임', starRating: 5.0 , type: '군산카츠', menu: '', time: '2일 전'},
        { id: 3, title: '그냥 그래요', content: '가성비 별로...', starRating: 2.0 , type: '한우사골마라탕', menu: '한우사골마라탕', time: '1주 전'}
    ]);

    // 리뷰 클릭 시 해당 리뷰의 수정 페이지로 이동
    const handleReviewClick = (reviewId) => {
        navigate(`/myreview/${reviewId}/MyReviewDetail`);
    };

    return (
        <div className="my-review-page">
            <Header logoText={logoText} />

            {/* 리뷰 목록 */}
            <div className="my-review-list">
                {reviews.map((review) => (
                    <div className="my-review-item" key={review.id} onClick={() => handleReviewClick(review.id)}>
                        <p>{review.content}</p>
                        <p className="my-time">{review.time}</p>
                        <div className="my-star-rating">
                            <span>{review.starRating}</span>
                            <img src={star} alt="Star" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyReview;
