import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../header/Header';
import "./TwoFourPage.css";
import TwoFourSeatModal from './ResModal24'; // 수정: 파일 이름 변경

function TwoFourPage() {
    const logoText = '좌석 예약';
    const [selectedOption, setSelectedOption] = useState('');
    const dropdownOptions = ['1인석', '2인석, 4인석'];

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedSeatCount, setSelectedSeatCount] = useState(0);
    const [selectedTableLabel, setSelectedTableLabel] = useState(''); // 추가: 선택된 테이블 라벨
    const [selectedChairLabel, setSelectedChairLabel] = useState(''); // 추가: 선택된 의자 라벨

    const openModal = (seatCount, tableLabel, chairLabel) => { // 수정: 테이블 라벨과 의자 라벨 추가
        setSelectedSeatCount(seatCount);
        setSelectedTableLabel(tableLabel); // 선택된 테이블 라벨 설정
        setSelectedChairLabel(chairLabel); // 선택된 의자 라벨 설정
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const navigate = useNavigate();

    const handleDropdownChange = (e) => {
        setSelectedOption(e.target.value);
    };

    useEffect(() => {
        if (selectedOption === '1인석') {
            navigate('/Reservation');
        } else if (selectedOption === '2인석, 4인석') {
            setSelectedSeatCount(0);
            setSelectedTableLabel('');
            setSelectedChairLabel('');
            openModal(0);
        }
    }, [selectedOption, navigate]);

    const ftableLabels = ['A', 'B', 'C', 'D'];
    const fchairLabels = ['a', 'b', 'c', 'd'];

    const ftables = [];
    for (let i = 0; i < ftableLabels.length; i++) {
        const ftableLabel = ftableLabels[i];
        const ftopChairLabel = fchairLabels[i];
        const fbottomChairLabel = fchairLabels[i];

        ftables.push(
            <div key={i} className="ftable" onClick={() => openModal(4, ftableLabel, null)}>
                <div className="f-table-text">{ftableLabel}</div>
                <div className="f-table-top-chairs">
                    <div className="fchair">
                        <div className="chair-seat">
                            <span>{ftopChairLabel}</span>
                        </div>
                    </div>
                </div>
                <div className="f-table-bottom-chairs">
                    <div className="fchair">
                        <div className="chair-seat">
                            <span>{fbottomChairLabel}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const ttableLabels = ['E', 'F', 'G', 'O'];
    const tchairLabels = ['e', 'f', 'g', 'o'];

    const ttables = [];
    for (let i = 0; i < ttableLabels.length; i++) {
        const ttableLabel = ttableLabels[i];
        const ttopChairLabel = tchairLabels[i];
        const tbottomChairLabel = tchairLabels[i];

        ttables.push(
            <div key={i} className="ttable" onClick={() => openModal(2, ttableLabel, null)}>
                <div className="t-table-text">{ttableLabel}</div>
                <div className="t-table-top-chairs">
                    <div className="tchair">
                        <div className="chair-seat">
                            <span>{ttopChairLabel}</span>
                        </div>
                    </div>
                </div>
                <div className="t-table-bottom-chairs">
                    <div className="tchair">
                        <div className="chair-seat">
                            <span>{tbottomChairLabel}</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="reservation-page">
            <Header logoText={logoText} />
            <div className="reserv-select-content">
                <div>
                    <select id="reserv-select" value={selectedOption} onChange={handleDropdownChange}>
                        <option value="">좌석 이용 인원 ▼</option>
                        {dropdownOptions.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="reserv-content">
                    <div className="reserv-content-box">
                        <div className="reserv-content-box-yes"></div>
                        <p>예약 가능</p>
                    </div>
                    <div className="reserv-content-box">
                        <div className="reserv-content-box-no"></div>
                        <p>예약 불가</p>
                    </div>
                </div>
            </div>

            <TwoFourSeatModal
                isOpen={modalIsOpen}
                closeModal={closeModal}
                seatCount={selectedSeatCount}
                tableInfo={`${selectedTableLabel}`} // 수정: 테이블 라벨과 의자 라벨 전달
            />

            <div className="tables-container-box">
                <div className="f-tables-container">{ftables}</div>
                <div className="t-tables-container">{ttables}</div>
            </div>
        </div>
    );
}

export default TwoFourPage;
