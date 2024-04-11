import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loginpage from "./Loginpage";
import Registerpage from "./Registerpage";
import Dashboard from "./Dashboard";
import ContentCourse from "./ContentCourse";



export default function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Loginpage/>}/>
          <Route path="/Register" element={<Registerpage/>} />
          <Route path="/Dash" element={<Dashboard/>}/>
          <Route path="/Course" element={<ContentCourse/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
