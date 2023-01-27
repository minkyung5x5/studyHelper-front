import { Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Main from "./Main/Main";
function Navigator() {
  return (
    <div>
      <Routes>
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </div>
  );
}
export default Navigator;
