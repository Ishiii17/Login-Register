import React, { useState } from 'react';
import './LogInRegister.css';

const LogInRegister = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [action, setAction] = useState("Register");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword((prevShowConfirmPassword) => !prevShowConfirmPassword);
  };

  return (
    <>
    <div id="header-content">WELCOME TO METAMORPHOSIS GYM</div>
    <div id="contents-container">
      <div id="header">
        <div id="text">{action}</div>
      </div>
      <form id="inputs">
          {action==="Login"?<div></div>:<div id="text-label">USERNAME</div>}
        <div id="input">
          {action==="Login"?<div></div>:<input type="text" id="username" />}       
        </div>
        <div id="text-label">EMAIL</div>
        <div id="input">
          <input type="email" id="email" />
        </div>
        <div id="text-label">PASSWORD</div>
        <div id="input">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <input
            type="checkbox"
            onChange={handleTogglePassword}
          />
        </div>
        {action==="Login"?<div></div>:<div id="text-label">CONFIRM PASSWORD</div>}
        <div id="input">
          {action === "Login" ? ( <div></div>):(<><input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange}
      />
      <input type="checkbox" onChange={handleToggleConfirmPassword}
      />
      </>
    )}
  </div>
      </form>
      {action==="Register"?<div></div>:<div id="forget-password">
        Forget Password? <span>Click here!</span>
      </div>} 
      <div id="register-container">
        <div id={action==="Register"?"submit gray":"submit"} onClick={()=>{setAction("Register")}}>Register</div>
        <div id={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
      </div>
    </div>
    </>
  );
};
export default LogInRegister;
