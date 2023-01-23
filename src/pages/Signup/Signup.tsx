import styled from "styled-components";

function Signup() {
  return (
    <div>
      <Header>회원가입</Header>
      <Line />
      <SignUpForm>
        <Form action="post">
          <Lable htmlFor="name">성명</Lable>
          <Input placeholder="성명" id="name" minLength={3} maxLength={4} title="정확한 성명을 적어주세요." />
          <Lable htmlFor="email">이메일</Lable>
          <Input placeholder="이메일" email={true} id="email" type="email" />
          <EmailButton>인증</EmailButton>
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
  width: ${(props) => (props.email ? "75%" : "100%")};
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
