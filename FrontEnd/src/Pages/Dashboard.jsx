import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import logo from '../assets/logo.svg';
import img from '../assets/course.svg';
import imgs from '../assets/smallcard.svg';
import style from '../Css/Dashboard.module.css';
import { CgProfile } from 'react-icons/cg';
import { FiLogOut, FiSettings } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';

    const ActiveCourses = [
      {
        title: "Basics of Web Development",
        subtitle: "Basics Introduction to HTML & CSS",
      },
      {
        title: "Mastering HTML5 Markup",
        subtitle: "Advanced Techniques for Modern Web Development",
      },
      {
        title: "CSS Styling Essentials",
        subtitle: "Fundamental Principles and Best Practices",
      },
      {
        title: "Responsive Web Designing",
        subtitle: "Optimizing Layouts for All Devices with CSS3",
      },
      {
        title: "JavaScript Essentials",
        subtitle: "Building Interactivity and Dynamic Content",
      },
      {
        title: "Advanced JavaScript Techniques",
        subtitle: "Harnessing the Power of ES6 and Beyond",
      },
      {
        title: "Frontend Development Bootcamp",
        subtitle: "Mastering HTML, CSS, and JavaScript",
      },
      {
        title: "CSS Grid Layout Mastery",
        subtitle: "Unlocking the Potential of Grid-based Designs",
      },
      {
        title: "Modern JavaScript Frameworks",
        subtitle:
          "Exploring React, Angular, and Vue for Dynamic Web Applications",
      },
      {
        title: "Semantic HTML5 Structure",
        subtitle: "Creating Meaningful Markup for Enhanced Accessibility and SEO",
      },
      {
        title: "Advanced CSS Animations",
        subtitle:
          "Crafting Engaging Visual Experiences with CSS3 Transitions and Keyframes",
      },
      {
        title: "Data Structures and Algorithms",
        subtitle: "Optimizing Code Efficiency for Scalable Applications",
      },
      {
        title: "Web Performance Optimization",
        subtitle:
          "Improving Speed and Efficiency Through HTML, CSS, and JavaScript Techniques",
      },
      {
        title: "CSS Flexbox Fundamentals",
        subtitle: "Building Flexible and Responsive Layouts with Flexbox",
      },
      {
        title: "JavaScript Design Patterns",
        subtitle:
          "Architecting Maintainable and Scalable Codebases for Web Projects",
      },
      {
          title: "Basics of Html, Css, Javascript",
          subtitle:
            "Basics Introduction to HTML, CSS, Javascript ",
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
        <div className={style.background}>
            {/* Navigation bar */}
            <nav className="bg-gradient-to-bl from-sky-700 via-sky-900 to-sky-400 px-4 py-3 flex justify-between">
                <div className="flex items-center text-xl">
                    <span className="text-black font-semibold">
                        <img src={logo} style={{ height: '15px', width: '15px' }} alt="logo" />
                        Study Buddy
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
                                        <li className="mb-2 rounded hover:shadow hover:bg-gray-200 py-1 px-2" style={{ margin: '10px' }}>
                                            <span onClick={() => navigate('/profile')}>
                                                <Row>
                                                    <Col xs={4} style={{ marginTop: '3.5px' }}><CgProfile /></Col>
                                                    <Col xs={8}>Profile</Col>
                                                </Row>
                                            </span>
                                        </li>
                                        <li className="mb-2 rounded hover:shadow hover:bg-gray-200 py-1 px-2" style={{ margin: '10px' }}>
                                            <span onClick={() => navigate('/settings')}>
                                                <Row>
                                                    <Col xs={4} style={{ marginTop: '3.5px' }}><FiSettings /></Col>
                                                    <Col xs={8}>Settings</Col>
                                                </Row>
                                            </span>
                                        </li>
                                        <li className="mb-2 rounded hover:shadow hover:bg-gray-200 py-1 px-2" style={{ margin: '10px' }}>
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
            <div className="mt-4 ml-4">
                <h3 className="font-serif text-2xl mb-4">Explore Our Courses</h3>
                <hr />
                <Row>
                    <Col xs={4} className="mr-4">
                        <div className={`card ${style.card}`}>
                            <div className="card-body p-0">
                                <Row>
                                    <Col xs={7}>
                                        <img
                                            className={`card-img-top m-0 ${style.image1}`}
                                            src={imgs}
                                            alt="Course category"
                                        />
                                    </Col>
                                    <Col xs={5}>
                                        <h5 className="card-title text-center mt-3 text-lg font-serif">Language Courses</h5>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col xs={4}>
                        <div className={`card ${style.card}`}>
                            <div className="card-body p-0">
                                <Row>
                                    <Col xs={7}>
                                        <img
                                            className={`card-img-top m-0 ${style.image1}`}
                                            src={imgs}
                                            alt="Course category"
                                        />
                                    </Col>
                                    <Col xs={5}>
                                        <h5 className="card-title text-center mt-3 text-lg font-serif">Computer Courses</h5>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

            {/* Active Courses section */}
            <div className="mt-4 ml-4">
                <h3 className="font-serif text-2xl mb-4">Active Courses</h3>
                <hr />
                <Row className="px-4 mb-4 ">
                    {filteredCourses.map((course, index) => (
                        <Col key={index} className="mb-4">
                            <div className={`card ${style.Bigcard}`} style={{ height: '23rem', width: '20rem', marginTop: '18px' }}>
                                <div className="card-body">
                                    <img className={`card-img-top ${style.image2}`} src={img} alt="Course image" />
                                    <h5 className="card-title text-center mt-3 text-lg font-serif">
                                        {course.title}
                                    </h5>
                                    <p className="card-subtitle text-center text-sm font-serif">
                                        {course.subtitle}
                                    </p>
                                    <Row className="mt-3 px-4">
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
                                                className="btn bg-gradient-to-br from-sky-900 via-sky-600 to-sky-700 hover:bg-gradient-to-r"
                                            >
                                                More
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
