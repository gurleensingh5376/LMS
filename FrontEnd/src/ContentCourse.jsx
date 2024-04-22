import { BsBellFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { FiSettings, FiLogOut } from "react-icons/fi";
import { SiCoursera } from "react-icons/si";
import { FaFilePdf } from "react-icons/fa6";
import { BiSolidVideos } from "react-icons/bi";
import { MdAssignment } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { RiFilePpt2Fill } from "react-icons/ri";


export default function ContentCourse() {

 const navigate = useNavigate();

    return (
        <div >
            {/* Navigation Bar */}
            <nav className='bg-sky-900 px-4 py-3 flex justify-between' style={{position:"fixed"}}>
                <div className='flex items-center text-xl'>
                    <span className='text-white font-semibold'>Content Course</span>
                </div>

                <div className='flex items-center gap-x-5'> 

                    {/* User Icon with Dropdown Menu */}
                    <div className='relative'>
                        <button className='text-white relative group'>
                            <FaUserCircle className='w-6 h-6' />
                            {/* Dropdown Menu */}
                            <div className='hidden group-focus:block absolute top-full right-0 w-32 bg-white rounded shadow-lg'>
                                <ul className='py-2 text-sm text-gray-950'>
                                    {/* Profile Option */}
                                    <li className='px-2 py-1 hover:bg-gray-200 cursor-pointer' onClick={() => navigate("")}>
                                        <div className='flex items-center'>
                                            <CgProfile className='mr-2' />
                                            Profile
                                        </div>
                                    </li>
                                    {/* Settings Option */}
                                    <li className='px-2 py-1 hover:bg-gray-200 cursor-pointer' onClick={() => navigate("")}>
                                        <div className='flex items-center'>
                                            <FiSettings className='mr-2' />
                                            Settings
                                        </div>
                                    </li>
                                    {/* Logout Option */}
                                    <li className='px-2 py-1 hover:bg-gray-200 cursor-pointer' onClick={() => navigate("/login")}>
                                        <div className='flex items-center'>
                                            <FiLogOut className='mr-2' />
                                            Logout
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            <div className='bg-sky-900 text-white w-64 min-h-screen fixed'>
            <ul className='mt-3 text-white font-bold'>
        <Link to="/dash">
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-2 `}
          >
            <AiFillHome className='inline-block w-6 h-6 mr-2 -mt-2'></AiFillHome>
            All courses
          </li>
        </Link>
        <Link>
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-2 `}
          >
            <SiCoursera className='inline-block w-6 h-6 mr-2 -mt-2'></SiCoursera>
            Course Details
          </li>
        </Link>
        <Link>
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-2 `}
            
          >
            <FaFilePdf className='inline-block w-6 h-6 mr-2 -mt-2'></FaFilePdf>
            Course Pdf
          </li>
        </Link>
        <Link>
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-2 `}
            
          >
            <BiSolidVideos className='inline-block w-6 h-6 mr-2 -mt-2'></BiSolidVideos>
            Course Videos
          </li>
        </Link>
        
        <Link>
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-2 `}
            
          >
            <RiFilePpt2Fill className='inline-block w-6 h-6 mr-2 -mt-2'></RiFilePpt2Fill>
            Course Ppt
          </li>
        </Link>

        <Link>
          <li
            className={`mb-2 rounded hover:shadow hover:bg-blue-500 py-2 px-2 `}
          >
            <MdAssignment className='inline-block w-6 h-6 mr-2 -mt-2'></MdAssignment>
            Assignment
          </li>
        </Link>
        
      </ul>
            </div>

            {/* Main Content */}
            <div className='ml-64 p-8 flex-1'>
                {/* Add main content here */}
                <h2 className='text-2xl font-bold'>Main Content</h2>
                <p>This is where your main content will go.</p>
            </div>
        </div>
    );
}
