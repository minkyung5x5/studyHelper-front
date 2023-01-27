import styled from "styled-components";
import "../Login/Login.css";
import "./Signup.css";
function Signup() {
  return (
    <div>
      <Header>회원가입</Header>
      <Line />
      <SignUpForm>
        <Form action="post">
          <Lable htmlFor="name">성명</Lable>
          <Input placeholder="성명" id="name" minLength={3} maxLength={4} title="정확한 성명을 적어주세요." required />
          <Lable htmlFor="email">이메일</Lable>
          <Input placeholder="이메일" email={true} id="email" type="email" required />
          <EmailButton>인증</EmailButton>
          <Lable htmlFor="password">비밀번호</Lable>
          <Input type="password" id="password" placeholder="비밀번호" minLength={8} maxLength={20} required title="비밀번호를 입력해주세요." />
          <Input type="password" placeholder="비밀번호 재입력" minLength={8} maxLength={20} required />
          <Lable>닉네임</Lable>
          <Input placeholder="닉네임" required title="닉네임을 입력해주세요." />
          <div className="agree">
            <input type="checkbox" id="checkBox" />
            <label htmlFor="checkBox">
              서비스 이용을 위한 <span>이용약관</span> 및 <span>개인정보처리방침</span>에 동의합니다.
            </label>
          </div>
        </Form>
      </SignUpForm>
    </div>
  );
}

const Header = styled.h2`
  font-size: 2em;
  color: #fff;
  padding: 0 20px;
  margin: 3.29em 0 1.7em 0;
`;
const Line = styled.span`
  background: #333333;
  height: 1px;
  display: block;
  margin: 1.71em 0 0.29em 0;
`;
const SignUpForm = styled.div`
  padding: 0 20px;
`;

const Form = styled.form`
  overflow: hidden;
`;

const Lable = styled.label`
  color: #d9d9d9;
  display: block;
  margin-top: 2.14em;
`;
interface WidthProps {
  width: {
    email?: boolean;
  };
}
const Input = styled.input<WidthProps["width"]>`
  background: #212121;
  border: 1px solid #313131;
  height: 3.45em;
  padding-left: 12px;
  margin-top: 0.57em;
  width: ${(props) => (props.email ? "70%" : "100%")};
  color: #fff;
`;

const EmailButton = styled.button`
  display: inline-block;
  width: 5.71em;
  height: 3.77em;
  background: #212121;
  border: 1px solid #175129;
  color: #3cd36c;
  margin-left: 10px;
  margin-top: 0.57em;
`;
export default Signup;
