import { useState } from 'react';
import { SiCoursera } from "react-icons/si";
import { Link } from 'react-router-dom';
import { FaFilePdf } from "react-icons/fa6";
import { BiSolidVideos } from "react-icons/bi";
import { MdAssignment } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import PropTypes from 'prop-types';
import { RiFilePpt2Fill } from "react-icons/ri";

const Sidebar = ({ sidebarToggle, setclicked, setdetail, setvideo, setassignment ,setppt}) => {
  const [activeOption, setActiveOption] = useState(null);

  const handleOptionClick = (option) => {
    setActiveOption(option);
    if (option === "details") {
      setdetail(true);
      setvideo(false);
      setclicked(false);
      setassignment(false);
      setppt(false);
    } else if (option === "pdf") {
      setclicked(true);
      setdetail(false);
      setvideo(false);
      setassignment(false);
      setppt(false);
    } else if (option === "videos") {
      setvideo(true);
      setclicked(false);
      setdetail(false);
      setassignment(false);
      setppt(false);
    } else if (option === "ppt") {
      setassignment(false);
      setvideo(false);
      setclicked(false);
      setdetail(false);
      setppt(true);
    }
   else if (option === "assignment") {
    setassignment(true);
    setvideo(false);
    setclicked(false);
    setdetail(false);
    setppt(false);
  }
  };

  return (
    <div className={`${sidebarToggle ? " hidden " : " block "}w-64 bg-sky-800 fixed h-full px-4 py-2`}>
      <div className='my-2 mb-4'>
        <h1 className='text-2x text-white font-bold' style={{ fontSize: "22px", marginTop: "12px" }}>Course Content</h1>
      </div>
      <hr style={{ borderColor: 'white', height: "10px" }} />
      <ul className='mt-3 text-white font-bold'>
        <Link to="/dash">
          <li
            className={`mb-2 rounded hover:shadow hover:bg-sky-500 py-2 px-2 ${activeOption === "home" ? 'bg-sky-800' : ''}`}
            onClick={() => handleOptionClick("home")}
          >
            <AiFillHome className='inline-block w-6 h-6 mr-2 -mt-2'></AiFillHome>
            Home
          </li>
        </Link>
        <Link>
          <li
            className={`mb-2 rounded hover:shadow hover:bg-sky-500 py-2 px-2 ${activeOption === "details" ? 'bg-sky-800' : ''}`}
            onClick={() => handleOptionClick("details")}
          >
            <SiCoursera className='inline-block w-6 h-6 mr-2 -mt-2'></SiCoursera>
            Course Details
          </li>
        </Link>
        <Link>
          <li
            className={`mb-2 rounded hover:shadow hover:bg-sky-500 py-2 px-2 ${activeOption === "pdf" ? 'bg-sky-800' : ''}`}
            onClick={() => handleOptionClick("pdf")}
          >
            <FaFilePdf className='inline-block w-6 h-6 mr-2 -mt-2'></FaFilePdf>
            Course Pdf
          </li>
        </Link>
        <Link>
          <li
            className={`mb-2 rounded hover:shadow hover:bg-sky-500 py-2 px-2 ${activeOption === "videos" ? 'bg-sky-800' : ''}`}
            onClick={() => handleOptionClick("videos")}
          >
            <BiSolidVideos className='inline-block w-6 h-6 mr-2 -mt-2'></BiSolidVideos>
            Course Videos
          </li>
        </Link>
        
        <Link>
          <li
            className={`mb-2 rounded hover:shadow hover:bg-sky-500 py-2 px-2 ${activeOption === "ppt" ? 'bg-sky-800' : ''}`}
            onClick={() => handleOptionClick("ppt")}
          >
            <RiFilePpt2Fill className='inline-block w-6 h-6 mr-2 -mt-2'></RiFilePpt2Fill>
            Course Ppt
          </li>
        </Link>

        <Link>
          <li
            className={`mb-2 rounded hover:shadow hover:bg-sky-500 py-2 px-2 ${activeOption === "assignment" ? 'bg-sky-800' : ''}`}
            onClick={() => handleOptionClick("assignment")}
          >
            <MdAssignment className='inline-block w-6 h-6 mr-2 -mt-2'></MdAssignment>
            Assignment
          </li>
        </Link>
        
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  sidebarToggle: PropTypes.bool.isRequired,
  setclicked: PropTypes.func.isRequired,
  setdetail: PropTypes.func.isRequired,
  setvideo: PropTypes.func.isRequired,
  setassignment: PropTypes.func.isRequired,
  setppt: PropTypes.func.isRequired,
};

export default Sidebar;
