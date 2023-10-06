import React, { useState } from 'react';
import Header from '../header/Header';
import './Reviewmain.css';

function ReviewMain() {
    const logoText = "후기 게시판";

    const [selectedOption1, setSelectedOption1] = useState("");
    const [selectedOption2, setSelectedOption2] = useState("");
    
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
        // 선택한 값에 따라서 두 번째 드롭다운 초기화
        setSelectedOption2("");
    }

    const handleDropdownChange2 = (e) => {
        setSelectedOption2(e.target.value);
    }

    return (
        <div className="review-page">
            <Header logoText={logoText} />
            <div className="">
                
                <div className="dropdown-select">    
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
                <div className="dropdown-select">
                    <select
                        value={selectedOption2}
                        onChange={handleDropdownChange2}
                        disabled={!selectedOption1} // 상위 옵션이 선택되지 않았을 때 비활성화
                    >
                        <option value="">메뉴</option>
                        {typeOptions2[selectedOption1] && typeOptions2[selectedOption1].map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
}

export default ReviewMain;
