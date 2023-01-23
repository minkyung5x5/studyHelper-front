import logoImg from "./images/login.png";
import "./Login.css";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Login() {
  const [testStr, setTestStr] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const onPasswordHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    JSON.stringify({ email: Email, password: Password });

    console.log(JSON.stringify({ email: Email, password: Password }));
  };

  // 변수 초기화
  function callback(handleSubmit: string) {
    setTestStr(handleSubmit);
  }

  // 첫 번째 렌더링을 마친 후 실행
  useEffect(() => {
    axios
      .post("http://localhost:8080/user/login")
      .then((response) => {
        const { accessToken } = response.data;
        axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
        callback(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="LoginWrap">
      <img src={logoImg} alt="logo" className="loginLogo" />

      <form className="loginForm" onSubmit={handleSubmit}>
        <input onChange={onEmailHandler} value={Email} className="email" type="email" placeholder="이메일" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required title="이메일 형식에 맞춰주세요." />
        <input onChange={onPasswordHandler} value={Password} className="password" type="password" placeholder="비밀번호" minLength={8} maxLength={20} required />
        <input type="checkbox" id="keepLogin" />
        <label htmlFor="keepLogin">로그인 유지</label>
        <input className="login" type="submit" value="로그인" />
      </form>

      <div className="loginSignup">
        <Link to="/user/signup">이메일 찾기</Link>
        <span>|</span>
        <Link to="/user/signup">회원가입</Link>
        <span>|</span>
        <Link to="/user/signup">비밀번호 찾기</Link>
      </div>

      <div className="Oauth">카카오칸</div>
      <div className="Oauth">네이버칸</div>
      <div>{testStr}</div>
    </div>
  );
}
export default Login;
