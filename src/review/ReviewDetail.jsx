import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import { useParams, useNavigate } from "react-router-dom";
import star from "../icon/star2.png";
import like from "../icon/like.png";
import likeempty from "../icon/like-empty.png";
import axiosInstance from "../api";
import "./ReviewDetail.css";

function ReviewDetail() {
  const logoText = "후기 게시판";
  const { post_id } = useParams();
  const navigate = useNavigate();

  const [isLiked, setIsLiked] = useState(false); // 아이콘 상태를 저장하는 상태 변수
  const [review, setReview] = useState([]);
  console.log(review);

  // 리뷰 목록 하드코딩
  // const reviews = [
  //   { id: 1, title: "무난하게 맛있음", name: "학식마스터", content: "무난하게 맛있음 다음에는 다른 메뉴도 먹어봐야겠음", starRating: 4.5, type: "파스타", menu: "알리오올리오" },
  //   { id: 2, title: "맛있다옹", name: "미돼고지", content: "맛있다옹", starRating: 3.0, type: "군산카츠", menu: "돈카츠덮밥" },
  //   { id: 3, title: "좀 짰어요 그래도 맛은 있음", name: "나는아직배고프다", content: "좀 짰어요 그래도 맛은 있음", starRating: 5.0, type: "오늘의메뉴A", menu: "오늘의메뉴A" },
  // ];

  // 주어진 ID와 일치하는 리뷰를 찾아 반환하는 함수
  // const getReviewById = (id) => {
  //   return reviews.find((review) => review.id.toString() === id);
  // };

  // const review = getReviewById(id);

  // if (!review) {
  //   return <div>리뷰를 찾을 수 없습니다.</div>;
  // }

  // 같은 작성자의 리뷰를 찾는 함수
  // const getReviewsByAuthor = (authorName) => {
  //   return review.filter((review) => review.name === authorName);
  // };

  // const authorReviews = getReviewsByAuthor(review.name);

  const goBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };
  useEffect(() => {
    // 컴포넌트가 마운트될 때와 선택된 옵션값이 변경될 때 리뷰 목록을 가져옵니다.
    reviewGet();
}, [post_id]);


  // console.log(post_id)

  const reviewGet = async () => {
    try {
        // axios를 사용하여 API를 호출합니다. sort와 menu 값을 파라미터로 전달합니다.
        const response = await axiosInstance.get(`/users/posts/get-one?post_id=${post_id}`)
        // API 응답에서 리뷰 데이터를 추출하고 상태에 설정합니다.
        setReview(response.data.post);

        const authorResponse = await axiosInstance.get(`/users/posts/by-author?user_id=${response.data.post.user_id}`);
      // API 응답에서 같은 작성자의 리뷰 목록을 추출하고 상태에 설정합니다.
      // setAuthorReviews(authorResponse.data.posts);
        // console.log(response.data.post)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
const toggleLike = async () => {
  try {
    // 좋아요 상태를 토글하기 위해 서버에 요청을 보냅니다.
    await axiosInstance.post(`/users/posts/like-post/${post_id}`);

    // 좋아요 상태를 클라이언트에서 업데이트합니다.
    setIsLiked(!isLiked);
  } catch (error) {
    console.error('Error toggling like:', error);
  }
};



  return (
    <div className="review-page">
      <Header logoText={logoText} />
      <div className="review-detail-container">
        <h3 className="review-title">{review.title}</h3>
        <h3 className="review-name">{review.nickname}</h3>
        <p className="type">종류:  {review[`sort`]}</p>
        <p className="menu">메뉴: {review.menu}</p>
        <div className="star-rating">
          <img className="star-icon" src={star} alt="Star" />
          <span>{review.star}</span>
        </div>
        <p className="review-content">{review.content}</p>
        <div className="like" onClick={toggleLike}>
          <img src={isLiked ? like : likeempty} alt="Like" style={{ width: "20px", height: "20px" }} />
          <span>{review.likes}</span>
        </div>
        <button className="review-back-button" onClick={goBack}>
          뒤로 가기
        </button>
        {/* 같은 작성자의 리뷰 목록을 표시 (isLiked가 true일 때만 표시) */}
        {/* {isLiked && authorReviews.length > 0 && (
          <div className="author-reviews">
            <h3>{review.nickname}님이 작성한 다른 후기</h3>
            <ul>
              {authorReviews.map((authorReview) => (
                <li key={authorReview.post_id}>
                  <p>제목: {authorReview.title}</p>
                  <p>별점: {authorReview.star}</p>
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
