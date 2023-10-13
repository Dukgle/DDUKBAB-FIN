import React from "react";
import Header from "../header/Header";

import "./TournamentVote.css";

import vote from "../icon/Best-Menu.png";
import vs from "../icon/vote-vs.png";
import logo from "../icon/DDUKBAB.png";
import alio from "../img/pasta/우삼겹알리올리오.jpg"
import tomato from "../img/pasta/클래식토마토파스타.jpg"

function TournamentVote() {
  const logoText = "BEST 메뉴";

  return (
    <div className="tournamentvote-page">
      <Header logoText={logoText} />

      <div className="my-things">
        <div className="vote-title">
          <img src={vote} alt="vote" />
          <p>8강</p>
        </div>

        <div className="votes">
          <div className="votes-title">
            <p>당신의 선택은?</p>
          </div>

          <div className="votes-things-list">
            <div className="votes-thing">
              <button className="votes-thing-box">
                <img src={alio} alt="alio" class="votes-things-box-img" />
              </button>
              <p>알리오올리오</p>
            </div>

            <div className="votes-vs">
              <img src={vs} alt="vs" />
            </div>

            <div className="votes-thing">
              <button className="votes-thing-box">
                <img src={tomato} alt="tomato" class="votes-things-box-img" />
              </button>
              <p>토마토파스타</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TournamentVote;
