import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import "./MyReviewDetail.css";
import star from "../icon/star2.png";

function MyReviewDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [reviews, setReviews] = useState([
    { id: 1, title: "무난하게 맛있음", content: "다음에는 다른 메뉴도 먹어봐야겠음", starRating: 4.5, type: "파스타", menu: "알리오올리오", time: "1시간 전" },
    { id: 2, title: "학식최고존엄", content: "맛있음 또 먹을거임", starRating: 5.0, type: "군산카츠", menu: "", time: "2일 전" },
    { id: 3, title: "그냥 그래요", content: "가성비 별로...", starRating: 2.0, type: "한우사골마라탕", menu: "한우사골마라탕", time: "1주 전" },
  ]);

  // 해당 ID에 맞는 리뷰 찾기
  const review = reviews.find((review) => review.id === parseInt(id));

  // 리뷰 수정 이벤트 핸들러
  const handleReviewEdit = () => {
    // 수정된 리뷰 정보를 서버로 전송하거나 저장하는 로직을 추가할 수 있습니다.
    // 여기에서는 수정된 리뷰 정보를 로그로 출력합니다.
    console.log("수정된 리뷰 정보:", review);

    // ReviewEdit 페이지로 이동
    navigate(`/myreview/${id}/myreviewdetail/reviewedit`);
  };

  // 리뷰 삭제 이벤트 핸들러
  const handleReviewDelete = () => {
    // 리뷰 삭제 로직을 구현할 수 있습니다.
    // 여기에서는 삭제 여부를 확인하는 알림창을 띄웁니다.
    const confirmDelete = window.confirm("리뷰를 삭제하시겠습니까?");
    if (confirmDelete) {
      // 삭제 확인 시, 서버로 리뷰 삭제 요청을 보내고 삭제 후 이전 페이지로 이동할 수 있습니다.
      // 이 예시에서는 삭제 확인 시 이전 페이지로 이동하는 예시만 제시합니다.
      navigate(-1); // 이전 페이지로 이동
    }
  };

  return (
    <div className="my-review-detail-page">
      <Header logoText="내 후기" />

      {/* 리뷰 상세 내용 */}
      <div className="my-review-detail-content">
        <h3>{review.title}</h3>
        <p>{review.content}</p>
        <p>종류: {review.type}</p>
        <p>메뉴: {review.menu}</p>
        <div className="star-rating">
          <img className="star-icon" src={star} alt="Star" />
          <span>{review.starRating}</span>
        </div>
        <p>{review.time}</p>

        {/* 리뷰 수정 버튼 */}
        <button className="review-btns" onClick={handleReviewEdit}>
          수정
        </button>

        {/* 리뷰 삭제 버튼 */}
        <button className="review-btns" onClick={handleReviewDelete}>
          삭제
        </button>
      </div>
    </div>
  );
}

export default MyReviewDetail;
