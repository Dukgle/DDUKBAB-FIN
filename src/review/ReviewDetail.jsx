import React, { useState } from "react";
import Header from "../header/Header";
import { useParams, useNavigate } from "react-router-dom";
import star from "../icon/star2.png";
import like from "../icon/like.png";
import likeempty from "../icon/like-empty.png";
import "./ReviewDetail.css";

function ReviewDetail() {
  const logoText = "후기 게시판";
  const { id } = useParams();
  const navigate = useNavigate();

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0); // 좋아요 수를 저장하는 상태 변수

  const toggleLike = () => {
    if (!isLiked) {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const reviews = [
    { id: 1, title: "무난하게 맛있음", name: "학식마스터", content: "다음에는 다른 메뉴도 먹어봐야겠음", starRating: 4.5, type: "파스타", menu: "알리오올리오", time: '1시간 전' },
    { id: 2, title: "맛있다옹", name: "미돼고지", content: "맛있다옹", starRating: 5.0, type: "군산카츠", menu: "돈카츠덮밥", time: '2시간 전' },
    { id: 3, title: "좀 짰어요", name: "나는아직배고프다", content: "그래도 맛은 있음", starRating: 4.0, type: "오늘의메뉴A", menu: "오늘의메뉴A", time: '3시간 전' },
  ];

  const getReviewById = (id) => {
    return reviews.find((review) => review.id.toString() === id);
  };

  const review = getReviewById(id);

  if (!review) {
    return <div>리뷰를 찾을 수 없습니다.</div>;
  }

  const getReviewsByAuthor = (authorName) => {
    return reviews.filter((review) => review.name === authorName);
  };

  const authorReviews = getReviewsByAuthor(review.name);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="review-page">
      <Header logoText={logoText} />
      <div className="review-detail-container">
        <h3 className="review-title">{review.title}</h3>
        <h3 className="review-name">{review.name}</h3>
        <p className="type">종류: {review.type}</p>
        <p className="menu">메뉴: {review.menu}</p>
        <p className="time">{review.time}</p>
        <div className="star-rating">
          <img className="star-icon" src={star} alt="Star" />
          <span>{review.starRating}</span>
        </div>
        <p className="review-content">{review.content}</p>
        <div className="like" onClick={toggleLike}>
          <img src={isLiked ? like : likeempty} alt="Like" style={{ width: "20px", height: "20px" }} />
          <span>   {likeCount}</span> {/* 좋아요 수를 표시 */}
        </div>

        {/* {isLiked && authorReviews.length > 0 && (
          <div className="author-reviews">
            <h3>{review.name}님이 작성한 다른 후기</h3>
            <ul>
              {authorReviews.map((authorReview) => (
                <li key={authorReview.id}>
                  <p>제목: {authorReview.title}</p>
                  <p>별점: {authorReview.starRating}</p>
                  <p>내용: {authorReview.content}</p>
                </li>
              ))}
            </ul>
          </div>
        )} */}
      </div>
    </div>
  );
}

export default ReviewDetail;
