import React from "react";
import { Link } from "react-router-dom";
import "./Splash.css";

import Logo from "../icon/DDUKBAB.png";

function Splash() {
  return (
    <>
      <div className="splash">
        <img src={Logo} alt="Logo" />
        <div className="signup-button">
          <Link to="/signup">
            <button>회원가입</button>
          </Link>
        </div>
        <div className="login-button">
          <Link to="/login">
            <button>로그인</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Splash;
