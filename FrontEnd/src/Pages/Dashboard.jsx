import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import logo from "../assets/logo.svg";
import imglg from "../assets/lc.svg";
import imgcp from "../assets/cc.svg";
import style from "../Css/Dashboard.module.css";
import { VscFeedback } from "react-icons/vsc";
import { FiLogOut } from "react-icons/fi";
import { MdPhoneCallback } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();


export default function Dashboard() {

    const [ActiveCourses, SetActiveCourses] = useState([]);
  // State to manage course ratings
  const [courseRatings, setCourseRatings] = useState(
    ActiveCourses.map(() => 0) // Initialize ratings to 0
  );

  // State to manage the search query
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Handle rating change for a specific course
  const handleRatingChange = (index, newRating) => {
    const updatedRatings = [...courseRatings];
    updatedRatings[index] = newRating;
    setCourseRatings(updatedRatings);
  };

  // Filter courses based on search query
  const filteredCourses = ActiveCourses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery)
  );
  const courses =()=>{
    fetch("http://localhost:4000/courses",{
        method: "get",
    }).then((res)=>{

        res.json().then((data)=>{
            SetActiveCourses(data)
        })
    })

}
  useEffect(() => {
    courses()
  },[])

  // Navigate hook to handle navigation
  const navigate = useNavigate();

  return (
    <div>
      {/* Navigation bar */}
      <nav className="bg-sky-700 px-4 py-3 flex justify-between shadow-lg">
        <div className="flex items-center text-xl">
          <span className="text-black font-semibold">
            <img src={logo} className="h-8" alt="logo" />
          </span>
        </div>
        {/* Navigation options */}
        <nav className="flex items-center gap-x-5">
          {/* Search bar */}
          <div className="relative">
            <input
              type="text"
              className="w-full px-5 py-1 pl-12 rounded shadow outline-none md:block bg-white text-black"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div className="flex items-center gap-x-5">
            {/* User profile and settings dropdown */}
            <div className="relative">
              <button className="text-white group">
                <FaUserCircle className="w-6 h-6 mt-1" />
                <div className="z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0">
                  <ul className="py-2 text-sm text-gray-950">
                    <li
                      className="m-2 rounded hover:shadow hover:bg-gray-200 py-1 px-2"
                      style={{ margin: "10px" }}
                    >
                      <span onClick={() => navigate("/feedback")}>
                        <Row>
                          <Col xs={4} style={{ marginTop: "3.5px" }}>
                            <VscFeedback />
                          </Col>
                          <Col xs={8}>feedback</Col>
                        </Row>
                      </span>
                    </li>
                    <li
                      className="m-2 rounded hover:shadow hover:bg-gray-200 py-1 px-2"
                      style={{ margin: "10px" }}
                    >
                      <span onClick={() => navigate("/ContactUs")}>
                        <Row>
                          <Col xs={4} style={{ marginTop: "3.5px" }}>
                            <MdPhoneCallback />
                          </Col>
                          <Col xs={8}>ContactUs</Col>
                        </Row>
                      </span>
                    </li>
                    <li
                      className="m-2 rounded hover:shadow hover:bg-gray-200 py-1 px-2"
                      style={{ margin: "10px" }}
                    >
                      <span onClick={() => navigate("/login")}>
                        <Row>
                          <Col xs={4} style={{ marginTop: "3.5px" }}>
                            <FiLogOut />
                          </Col>
                          <Col xs={8}>Logout</Col>
                        </Row>
                      </span>
                    </li>
                  </ul>
                </div>
              </button>
            </div>
          </div>
        </nav>
      </nav>

      {/* Explore Our Courses section */}
      <div className="mt-2 ml-4" data-aos="zoom-in-up">
        <h3 className="font-serif text-3xl mb-2">Explore our Courses</h3>
        <hr />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 mt-2">
          <Link className={`card shadow-lg ${style.card}`}to="/Calling">
            <div className="card-body  p-0">
              <Row>
                <Col xs={7}>
                  <img
                    className="w-80 p-3 max-h-30 flex justify-center items-center"
                    src={imglg}
                    alt="Course category"
                  />
                </Col>
                <Col xs={5} className="center mt-4">
                  <h5 className="text-lg mt-4  font-serif">Language Courses</h5>
                </Col>
              </Row>
            </div>
          </Link>
          <Link className={`card shadow-lg ${style.card}`}to="/Calling">
            <div className="card-body p-0">
              <Row>
                <Col xs={7}>
                  <img
                    className="w-80 p-3 max-h-30 flex justify-center items-center"
                    src={imgcp}
                    alt="Course category"
                  />
                </Col>
                <Col xs={5} className=" center mt-4">
                  <h5 className=" mt-4 text-lg font-serif">Computer Basics</h5>
                </Col>
              </Row>
            </div>
          </Link>
        </div>
      </div>

      {/* Active Courses section */}
      <div className="mt-4 ml-4" data-aos="zoom-in-down">
        <h3 className="font-serif text-3xl mb-2">Active Courses</h3>
        <hr />
        <Row className="px-4 mb-4  ">
          {filteredCourses.map((course, index) => (
            <Col key={index} className="mb-4">
              <div className="card mt-2 h-96 w-80 flex flex-col justify-between shadow-lg">
                <div className="card-body">
                  <img
                    className={`card-img-top ${style.image2} object-contain`}
                    src={course.img}
                    alt="Course image"
                  />
                  <div className="h-20">
                    {" "}
                    <h5 className="card-title text-center mt-3 text-lg font-serif">
                      {course.title}
                    </h5>
                    <p className="card-subtitle text-center text-sm font-serif">
                      {course.subtitle}
                    </p>
                  </div>
                  <Row className="mt-3 px-4 ">
                    <Col xs={8}>
                      {/* Star Ratings */}
                      <StarRatings
                        rating={courseRatings[index]}
                        starRatedColor="gold"
                        numberOfStars={5}
                        starDimension="20px"
                        starSpacing="2px"
                        changeRating={(newRating) =>
                          handleRatingChange(index, newRating)
                        }
                      />
                    </Col>
                    <Col xs={4}>
                      <Link
                        to="/Calling"
                        className="btn text-white bg-black  rounded-lg text-sm mx-2  text-center"
                      >
                        Explore
                      </Link>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
