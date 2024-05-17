import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import logo from '../assets/logo.svg';
import js from '../assets/coursej.svg';
import html from '../assets/html.jpg';
import css from '../assets/css.svg';
import web from '../assets/j.svg';
import ll from '../assets/login.svg';
import aa from '../assets/aa.svg';
import imglg from '../assets/lc.svg';
import imgcp from '../assets/cc.svg';
import style from '../Css/Dashboard.module.css';
import { VscFeedback } from "react-icons/vsc";
import { FiLogOut } from 'react-icons/fi';
import { MdPhoneCallback } from "react-icons/md";
import { FaUserCircle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

    const ActiveCourses = [
        {
            title: "JavaScript Essentials",
            subtitle: "Building Interactivity and Dynamic Content",
            img:js
          },
          {
            title: "Advanced JavaScript Techniques",
            subtitle: "Harnessing the Power of ES6 and Beyond",
            img:web
          },
          {
            title: "Frontend Development Bootcamp",
            subtitle: "Mastering HTML, CSS, and JavaScript",
            img:html
          },
          {
            title: "CSS Grid Layout Mastery",
            subtitle: "Unlocking the Potential of Grid-based Designs",
            img:css
          },
          {
        title: "Basics of Web Development",
        subtitle: "Basics Introduction to HTML & CSS",
        img:ll
      },
      {
        title: "Mastering HTML5 Markup",
        subtitle: "Advanced Techniques for Modern Web Development",
        img:html
      },
      {
        title: "CSS Styling Essentials",
        subtitle: "Fundamental Principles and Best Practices",
        img:css
      },
      {
        title: "Responsive Web Designing",
        subtitle: "Optimizing Layouts for All Devices with CSS3",
        img:js
      },
     
      {
        title: "Modern JavaScript Frameworks",
        subtitle:
          "Exploring React, Angular, and Vue for Dynamic Web Applications",
          img:aa
      },
      {
        title: "Semantic HTML5 Structure",
        subtitle: "Creating Meaningful Markup for Enhanced Accessibility and SEO",
        img:web
      },
      {
        title: "Advanced CSS Animations",
        subtitle:
          "Crafting Engaging Visual Experiences with CSS3 Transitions and Keyframes",
          img:html
      },
      {
        title: "Data Structures and Algorithms",
        subtitle: "Optimizing Code Efficiency for Scalable Applications",
        img:ll
      },
      {
        title: "Web Performance Optimization",
        subtitle:
          "Improving Speed and Efficiency Through HTML, CSS, and JavaScript Techniques",
          img:js
      },
      {
        title: "CSS Flexbox Fundamentals",
        subtitle: "Building Flexible and Responsive Layouts with Flexbox",
        img:web
      },
      {
        title: "JavaScript Design Patterns",
        subtitle:
          "Architecting Maintainable and Scalable Codebases for Web Projects",
          img:css
      },
      {
          title: "Basics of Html, Css, Javascript",
          subtitle:
            "Basics Introduction to HTML, CSS, Javascript ",
            img:html
        },
    ];

export default function Dashboard() {
    // State to manage course ratings
    const [courseRatings, setCourseRatings] = useState(
        ActiveCourses.map(() => 0) // Initialize ratings to 0
    );

    // State to manage the search query
    const [searchQuery, setSearchQuery] = useState('');

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

    // Navigate hook to handle navigation
    const navigate = useNavigate();

    return (
        <div >
            {/* Navigation bar */}
            <nav className="bg-sky-700 px-4 py-3 flex justify-between shadow-lg">
                <div className="flex items-center text-xl">
                    <span className="text-black font-semibold">
                        <img src={logo} className='h-8' alt="logo" />
                    
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
                                        <li className="m-2 rounded hover:shadow hover:bg-gray-200 py-1 ">
                                            <span onClick={() => navigate('/feedback')}>
                                                <Row>
                                                    <Col xs={4} style={{ marginTop: '3.5px' }}><VscFeedback/></Col>
                                                    <Col xs={8}>feedback</Col>
                                                </Row>
                                            </span>
                                        </li>
                                        <li className="m-2 rounded hover:shadow hover:bg-gray-200 py-1" >
                                            <span onClick={() => navigate('/ContactUs')}>
                                                <Row>
                                                    <Col xs={4} style={{ marginTop: '3.5px' }}><MdPhoneCallback /></Col>
                                                    <Col xs={8}>ContactUs</Col>
                                                </Row>
                                            </span>
                                        </li>
                                        <li className="m-2 rounded hover:shadow hover:bg-gray-200 py-1 " >
                                            <span onClick={() => navigate('/login')}>
                                                <Row>
                                                    <Col xs={4} style={{ marginTop: '3.5px' }}><FiLogOut /></Col>
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
            <div className="mt-2 ml-4"data-aos="zoom-in-up">
                <center className="center font-serif text-4xl text-dark text-bold mt-4">Explore Our Courses</center>
                <h3 className="font-serif text-3xl mb-2">Free Courses</h3>
                <hr />
                <Row className='mt-2'>
                    <Col xs={4} className="mr-4">
                        <Link className={`card shadow-lg ${style.card}`}>
                            <div className="card-body  p-0">
                                <Row>
                                    <Col xs={7}>
                                        <img
                                            className="w-80 p-3 max-h-30 flex justify-center items-center"
                                            src={imglg}
                                            alt="Course category"
                                        />
                                    </Col>
                                    <Col xs={5} className='center mt-4'>
                                        <h5 className="text-lg mt-4  font-serif">Language Courses</h5>
                                    </Col>
                                </Row>
                            </div>
                        </Link>
                    </Col>
                    <Col xs={4}>
                        <Link className={`card shadow-lg ${style.card}`}>
                            <div className="card-body p-0">
                                <Row>
                                    <Col xs={7}>
                                        <img
                                            className="w-80 p-3 max-h-30 flex justify-center items-center"
                                            src={imgcp}
                                            alt="Course category"
                                        />
                                    </Col>
                                    <Col xs={5}className=' center mt-4'>
                                        <h5 className=" mt-4 text-lg font-serif">Computer Basics</h5>
                                    </Col>
                                </Row>
                            </div>
                        </Link>
                    </Col>
                </Row>
            </div>

            {/* Active Courses section */}
            <div className="mt-4 ml-4"data-aos="zoom-in-down">
                <h3 className="font-serif text-3xl mb-2">Paid Courses</h3>
                <hr />
                <Row className="px-4 mb-4  ">
                    {filteredCourses.map((course, index) => (
                        <Col key={index} className="mb-4">
                            <div className="card mt-2 h-96 w-80 flex flex-col justify-between shadow-lg">
                                <div className="card-body">
                                    <img className={`card-img-top ${style.image2}`} src={course.img} alt="Course image" />
                                  <div className='h-20'>  <h5 className="card-title text-center mt-3 text-lg font-serif">
                                        {course.title}
                                    </h5>
                                    <p className="card-subtitle text-center text-sm font-serif">
                                        {course.subtitle}
                                    </p></div>
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
                                                Enroll
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