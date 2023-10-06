import React, { useState } from "react";
import Header from "../header/Header";
import Modal from "react-modal";

import "./TournamentVoteWin.css";

import vote from "../icon/Best-Menu.png";
import logo from "../icon/DDUKBAB.png";
import win from "../icon/fireworks.png";
import win2 from "../icon/fireworks-2.png";

function TournamentVoteWin() {
  const logoText = "BEST 메뉴";

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true); // 모달창이 열릴 수 있는 상태
  };

  const closeModal = () => {
    setModalIsOpen(false); // 모달창을 닫을 수 있는 상태
  };

  return (
    <div className="tournamentvote-page">
      <Header logoText={logoText} />

      <div className="my-things">
        <div className="vote-title">
          <img src={vote} alt="vote" />
        </div>

        <div className="votes-win">
          <div className="votes-win-title">
            <img src={win} alt="winImg" />
            <p>우승</p>
            <img src={win2} alt="winImg" />
          </div>

          <div className="votes-things-win-list">
            <div className="votes-thing-win">
              <div className="votes-thing-box-win">
                <img src={logo} alt="logo" />
              </div>
              <p>알리오올리오</p>
            </div>
          </div>
        </div>

        {/* 포인트 투자 버튼 */}
        <div className="point-vote-button">
          <button onClick={openModal}>
            투표하고
            <br />
            해당 메뉴 식권 얻기
          </button>
        </div>

        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="QR Code Modal" className="vote-modal-container">
          <h3>
            베스트 메뉴 1위 예측에
            <br />
            100포인트를 투자하시겠습니까?
          </h3>
          <p>쩝쩝박사님이 투표하신 메뉴와 일주일 후 공개되는 최종 1위 메뉴가 같을 경우 추첨을 통해 1등 투표 인원에게 해당 메뉴 식권이 주어집니다 ✓</p>

          <div className="point-vote-button-click">
            <button>이벤트 참여하기</button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default TournamentVoteWin;
