import React, { useState,useEffect } from 'react';
import Header from '../header/Header';
import './ReviewMain.css';
import { Link } from 'react-router-dom';
// import ReviewWrite from './ReviewWrite';
import star from '../icon/star2.png';
import axiosInstance from '../api';

function ReviewMain() {
    const logoText = "후기 게시판";
    const [selectedOption1, setSelectedOption1] = useState("");
    const [selectedOption2, setSelectedOption2] = useState("");
    const [sortBy, setSortBy] = useState("new"); // 정렬 방식 상태 추가
    const [reviews, setReviews] = useState([]);

    // 리뷰 목록 상태 추가
    // const [reviews, setReviews] = useState([
    //     { id: 1, title: '무난하게 맛있음', name: '학식마스터', content: '무난하게 맛있음 다음에는 다른 메뉴도 먹어봐야겠음', starRating: 4.5 , type: '파스타', menu: '알리오올리오'},
    //     { id: 2, title: '맛있다옹', name: '미돼고지', content: '맛있다옹', starRating: 5.0, type: '군산카츠', menu: '돈카츠덮밥'},
    //     { id: 3, title: '좀 짰어요 그래도 맛은 있음', name: '나는아직배고프다', content: '좀 짰어요 그래도 맛은 있음', starRating: 4.0, type: '오늘의메뉴A', menu: '오늘의메뉴A'}
    // ]);

    const typeOptions1 = [
        "오늘의메뉴A",
        "오늘의메뉴B",
        "파스타",
        "군산카츠",
        "마성떡볶이",
        "한우사골마라탕",
        "토스트",
        "샌드위치카페"
    ];

    const typeOptions2 = {
        "오늘의메뉴A": ["오늘의메뉴A"],
        "오늘의메뉴B": ["오늘의메뉴B"],
        "파스타": ["고기리들기름파스타", "우삼겹알리오올리오", "클래식토마토파스타", "트러플버섯크림파스타", "4분돼지김치파스타", "대패삼겹크림파스타", "매콤로제파스타", "김치삼겹필라프"],
        "군산카츠":["카레덮밥", "고구마치즈돈까스", "돈카츠카레덮밥", "새우카레덮밥", "더블돈카츠"],
        "마성떡볶이": ["혼족세트", "마성세트", "패밀리세트", "마성떡볶이", "치킨꼬치떡볶이", "마성라면", "만두라면", "치즈라면", "부산어묵", "빨간어묵", "찰순대", "스팸참치덮밥", "버터장조림덮밥", "치킨마요덮밥", "마성김밥", "참치김밥", "야채튀김", "삼각잡채말이만두", "고추튀김", "모듬튀김", "통통김말이", "오징어튀김"],
        "한우사골마라탕": ["한우사골마라탕", "마라샹궈", "꿔바로우(소)", "꿔바로우(대)"],
        "토스트": ["햄치즈토스트", "프렌치토스트", "프렌치토스트&음료세트", "마카다미아쿠키", "스콘", "비스킷슈", "대만샌드위치", "크림치즈프렛즐", "글레이즈도넛", "바바리안크림도넛", "딸기크림도넛", "초코케익링도넛", "스모어쿠키", "티라미수스틱케익"],
        "샌드위치카페":["아메리카노", "헤이즐넛아메리카노", "카페라떼", "카푸치노", "바닐라라떼", "바닐라드림라떼", "헤이즐넛라떼", "헤이즐넛드림라떼", "카페모카", "카라멜라떼", "돌체라떼", "화이트아메리카노", "복숭아아이스티", "티라미수라떼", "초코라떼", "그린티라떼", "밀크티", "라이스믹스라떼", "민트초코라떼", "토피넛라떼", "타로라떼", "쿠키앤크림라떼", "딸기라떼", "허니자몽블랙티", "피스타치오라떼", "고구마라떼", "코코넛라떼", "메론소다", "허브차", "우유", "퓨어프로즌요거트", "블루베리스무디", "딸기스무디", "망고스무디", "유자스무디", "블루베리요거트스무디", "딸기요거트스무디", "망고요거트스무디", "자바칩프라페", "쿠키앤크림프라페", "민트초코칩프라페", "카라멜프라페"]
    };

    const handleDropdownChange1 = (e) => {
        setSelectedOption1(e.target.value);
        setSelectedOption2("");
    };

    const handleDropdownChange2 = (e) => {
        setSelectedOption2(e.target.value);
    };

    const handleSortByChange = (sortByValue) => {
        setSortBy(sortByValue);
        if (sortByValue === "new") {
            // 최신순으로 정렬
            reviewGet()
        } else if (sortByValue === "star") {
            // 별점순으로 정렬
            const sortedReviews = [...reviews].sort((a, b) => b.star - a.star);
            setReviews(sortedReviews);
        }
    };

    useEffect(() => {
        // 컴포넌트가 마운트될 때와 선택된 옵션값이 변경될 때 리뷰 목록을 가져옵니다.
        reviewGet();
    }, [selectedOption1, selectedOption2]);

    const reviewGet = async () => {
        try {
            // axios를 사용하여 API를 호출합니다. sort와 menu 값을 파라미터로 전달합니다.
            const response = await axiosInstance.get(`/users/posts/get-everyone/latest?sort=${selectedOption1}&menu=${selectedOption2}`)
            // API 응답에서 리뷰 데이터를 추출하고 상태에 설정합니다.
            setReviews(response.data.post);
            console.log(response.data.post)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="review-page">
            <Header logoText={logoText} />
            <div className="dropdown-select">
                <div className="type-select">
                    <select
                        value={selectedOption1}
                        onChange={handleDropdownChange1}
                    >
                        <option value="">종류</option>
                        {typeOptions1.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="menu-select">
                    <select
                        value={selectedOption2}
                        onChange={handleDropdownChange2}
                        disabled={!selectedOption1}
                    >
                        <option value="">메뉴</option>
                        {typeOptions2[selectedOption1] &&
                            typeOptions2[selectedOption1].map((option, index) => (
                                <option key={index} value={option}>
                                    {option}
                                </option>
                            ))}
                    </select>
                </div>
            </div>

            <div className="sortBtn">
                <button
                    className={`new ${sortBy === 'new' ? 'active' : ''}`}
                    onClick={() => handleSortByChange('new')}
                >
                    최신순
                </button>
                <button
                    className={`star ${sortBy === 'star' ? 'active' : ''}`}
                    onClick={() => handleSortByChange('star')}
                >
                    별점순
                </button>
            </div>

            <div className="writeBtn">
                <Link to="/ReviewWrite">
                    <button className="btnText">작성</button>
                </Link>
            </div>

            {/* 리뷰 목록 */}
            <div className="review-list">
                {reviews.map((review) => (
                    <Link to={`/review/${review.id}`} key={review.id}>
                        <div className="review-item">
                            <h3>{review.nickname}</h3>
                            <p>{review.content}</p>
                            <div className="star-rating">
                                <img src={star} alt="Star" />
                                <span>{review.star}</span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ReviewMain;
