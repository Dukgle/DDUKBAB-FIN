import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../header/Header";
import "./ReviewEdit.css";

function ReviewEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  // 예시 리뷰 데이터
  const exampleReview = {
    id: 1,
    title: "무난하게 맛있음",
    content: "무난하게 맛있음 다음에는 다른 메뉴도 먹어봐야겠음",
    starRating: 4.5,
    type: "파스타",
    menu: "알리오올리오",
    time: "1시간 전",
  };

  // 수정할 리뷰 상태
  const [review, setReview] = useState(exampleReview);

  // 리뷰 수정 완료 핸들러
  const handleReviewComplete = () => {
    // 수정된 리뷰 정보를 서버로 전송하거나 저장하는 로직을 추가할 수 있습니다.
    // 여기에서는 수정된 리뷰 정보를 로그로 출력합니다.
    console.log("수정된 리뷰 정보:", review);

    // 수정이 완료되었다는 알림을 띄우기
    alert("수정이 완료되었습니다.");

    // 이전 페이지로 이동합니다.
    navigate(`/myreview/`);
  };

  // 리뷰 수정 취소 핸들러
  const handleReviewCancel = () => {
    // 수정이 취소되었다는 알림을 띄우기
    alert("수정이 취소되었습니다.");
    // 이전 페이지로 이동합니다.
    navigate(`/myreview/`);
  };

  return (
    <div className="review-edit-page">
      <Header logoText="내 후기 수정" />

      {/* 리뷰 수정 폼 */}
      <div className="review-edit-content">
        <form>
          <div className="form-group">
            <label htmlFor="title">제목</label>
            <input type="text" className="review-input" id="title" name="title" value={review.title} onChange={(e) => setReview({ ...review, title: e.target.value })} />
          </div>
          <div className="form-group">
            <label htmlFor="content">내용</label>
            <textarea id="content" name="content" value={review.content} onChange={(e) => setReview({ ...review, content: e.target.value })}></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="starRating">별점</label>
            <select id="starRating" name="starRating" value={review.starRating} onChange={(e) => setReview({ ...review, starRating: parseFloat(e.target.value) })}>
              {/* 0.5부터 5.0까지 0.5 단위로 선택할 수 있도록 옵션 추가 */}
              {Array.from({ length: 10 }, (_, i) => i * 0.5 + 0.5).map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
        </form>

        {/* 완료 버튼 */}
        <button onClick={handleReviewComplete}>완료</button>
        {/* 취소 버튼 */}
        <button onClick={handleReviewCancel}>취소</button>
      </div>
    </div>
  );
}

export default ReviewEdit;
