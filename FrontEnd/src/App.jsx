import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpage from "./Pages/Loginpage";
import Dashboard from "./Pages/Dashboard";
import ContentCourse from "./ContentCourse";
import HomePage from "./Pages/Homepage";
import Calling from './SideBarAndNavBar/Calling';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import RegistrationPage from "./Pages/Registerationpage";



export default function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage/>}/>
          <Route path="/Login" element={<Loginpage/>}/>
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/Dash" element={<Dashboard/>}/>
          <Route path="/Course" element={<ContentCourse/>}/>
          <Route path='/calling' element={<Calling/>} />
          <Route path='/forgot' element={<ForgotPassword />} />
          <Route path='/resetpassword' element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
