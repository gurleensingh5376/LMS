import { useEffect, useState } from "react";
import SidebarNav from "./Sidebar";
import OpenSiderBar from "./OpenSideBar";
import bg from "../assets/background1.jpg";

export default function Calling() {
  const [clicked, setclicked] = useState(false);
  const [detail, setdetail] = useState(false);
  const [sidebarToggle, setsidebarToggle] = useState(false);
  const [video, setvideo] = useState(false);
  const [assignment, setassignment] = useState(false);
  const [ppt, setppt] = useState(false);
  const [quiz, setquiz] = useState(false);
  const [Content, setContents] = useState([]);
  const styles = {
    backgroundImage: `url(${bg})`, // Use `url()` to specify the path to the image
    backgroundSize: "964px", // Adjust the background size
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
    width: "100%",
    position: "relative",
  };

  const backgroundOverlay = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  };
  const contents =()=>{
    fetch("http://localhost:4000/contents",{
        method: "get",
    }).then((res)=>{

        res.json().then((data)=>{
          console.log(data)
          setContents(data)
        })
    })

}
  useEffect(() => {
    contents()
  },[])

  return (
    <>
      <div style={styles}>
        <div style={backgroundOverlay}></div>
        <div className="flex" style={{ position: "relative", zIndex: 1 }}>
          <SidebarNav
            sidebarToggle={sidebarToggle}
            clicked={clicked}
            setclicked={setclicked}
            detail={detail}
            setdetail={setdetail}
            video={video}
            setvideo={setvideo}
            assignment={assignment}
            setassignment={setassignment}
            ppt={ppt}
            setppt={setppt}
            quiz={quiz}
            setquiz={setquiz}
          />
{Content.length > 0 && (
  <OpenSiderBar
            sidebarToggle={sidebarToggle}
            setsidebarToggle={setsidebarToggle}
            clicked={clicked}
            detail={detail}
            setdetail={setdetail}
            video={video}
            setvideo={setvideo}
            assignment={assignment}
            setassignment={setassignment}
            ppt={ppt}
            setppt={setppt}
            quiz={quiz}
            setquiz={setquiz}
            content={Content}
          />
)}
          
        </div>
      </div>
      <div>
        
      </div>
    </>
  );
}
