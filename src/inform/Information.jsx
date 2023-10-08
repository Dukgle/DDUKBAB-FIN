import React, { useState } from "react";
import Header_mypage from "../header/Header_mypage";
import { Link } from "react-router-dom";

import "./Information.css";

function Information() {
  const logoText = "내 정보";
  const [username, setUsername] = useState("");

  return (
    <div className="inform-page">
      <Header_mypage logoText={logoText} />

      <div className="my-things">
        <div className="my-name">
          <div className="name-title">
            <p>닉네임 변경</p>
          </div>
          <form action="" className="inform-change-form" method="post">
            <div className="name-box">
              <input type="text" name="" id="username" className="input-field" placeholder="닉네임" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div className="inform-change-btns">
              <Link to="/MyPage">
                <button className="change-none-btn">취소</button>
              </Link>
              <input id="" type="submit" className="change-save-btn" value="저장" />
            </div>
          </form>

          <div className="informs-notchange">
            <hr />
          </div>

          <div className="informs-notchange">
            <div className="name-title">
              <p>이름</p>
            </div>
            <div className="name-box">
              <p>김덕우</p>
            </div>
          </div>
        </div>

        <div className="informs-notchange">
          <div className="name-title">
            <p>학번</p>
          </div>
          <div className="name-box">
            <p>20210000</p>
          </div>
        </div>

        <div className="informs-notchange">
          <div className="name-title">
            <p>역할</p>
          </div>
          <div className="name-box">
            <p>학생</p>
          </div>
        </div>

        <div className="informs-notchange">
          <hr />
        </div>

        <div className="informs-notchange">
          <Link to="/">
            <p className="informs-out">탈퇴하기</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Information;