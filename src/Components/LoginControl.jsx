import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setIsLoggedIn(true);
    navigate('/Login');
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="login-control">
      {isLoggedIn ? (
        <div className="login-content">
          <button className="login-btn" onClick={handleLogoutClick}>
            로그아웃
          </button>
          <div className="welcome-message">
            <p>환영합니다!</p>
          </div>
        </div>
      ) : (
        <div className="login-content">
          <button className="login-btn" onClick={handleLoginClick}>
            로그인
          </button>
          <div className="welcome-message">
            <p>로그인 해주세요!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoginControl;
