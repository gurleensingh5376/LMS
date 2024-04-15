import img from "./assets/c3.jpg";
import style from "./Css/Dashboard.module.css";
import { Row, Col } from "react-bootstrap";
import StarRatings from 'react-star-ratings';
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import logo from './assets/logo.png'

const ActiveCourses = [
    { title: "Learn Python", image: img, link: "/Course" },
    { title: "Python Pro", image: img, link: "/Course"},
    { title: "Learn Java", image: img, link: "/course"},
    { title: "Java Pro", image: img, link: "/Course" },
    { title: "Learn CSS and HTML", image: img, link: "/Course" },
];

export default function Dashboard() {
    // State to manage ratings for each course
    const [courseRatings, setCourseRatings] = useState(
        ActiveCourses.map(course => course.rating)
    );

    // State to manage search query
    const [searchQuery, setSearchQuery] = useState('');

    // Handle search input change
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    // Handle rating change
    const handleRatingChange = (index, newRating) => {
        const updatedRatings = [...courseRatings];
        updatedRatings[index] = newRating;
        setCourseRatings(updatedRatings);
    };

    // Filtered courses based on search query
    const filteredCourses = ActiveCourses.filter(course =>
        course.title.toLowerCase().includes(searchQuery)
    );

    return (
        <div className={`${style.background}`}>
            <nav className="bg-zinc-500 px-4 py-3 flex justify-between">
                <div className="flex items-center text-xl">
                    <span className="text-white font-semibold"><img src={logo} style={{height:"15px",width:"15px"}}></img>Study Buddy</span>
                </div>
                <div className="flex items-center gap-x-5">
                    {/* Search bar */}
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <button className="p-1 focus:outline-none text-black"></button>
                        </span>
                        <input
                            type="text"
                            className="w-full px-5 py-1 pl-12 rounded shadow outline-none md:block bg-white text-black"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className="btn-group">
  
  <button type="button" className="btn  dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown">
    <span className="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul className="dropdown-menu">
    <li><Link to={'/'} className="dropdown-item"  
        >Login</Link></li>
    <li><a className="dropdown-item"  
        to={'/Register'}>Sign Up</a></li>
    <li><a className="dropdown-item" href="#">Favourite</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><Link className="dropdown-item"  to={'/'} 
        >Logout</Link></li>
  </ul>
</div>
                </div>
            </nav>

            {/* Explore Our Courses */}
            <h3
                style={{
                    marginTop: "22px",
                    position: "relative",
                    marginLeft: "22px",
                    fontFamily: "Georgia, 'Times New Roman', Times, serif",
                    fontSize: "30px",
                    marginBottom: "10px",
                }}
            >
                Explore our Courses
            </h3>
            <hr />
            <Row className="pt-3">
                <Col xs="4" style={{ marginLeft: "35px" }}>
                    <div className={`card ${style.card}`}>
                        <div className="card-body p-0">
                            <Row>
                                <Col xs="7">
                                    <img
                                        className={`card-img-top m-0 ${style.image1}`}
                                        src={img}
                                        alt="..."
                                    />
                                </Col>
                                <Col xs="5">
                                    <h5
                                        style={{
                                            marginTop: "28px",
                                            fontFamily: "Georgia, 'Times New Roman', Times, serif",
                                            fontSize: "21px",
                                        }}
                                        className="card-title"
                                    >
                                        Language Courses
                                    </h5>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
                <Col xs="4">
                    <div className={`card ${style.card}`}>
                        <div className="card-body p-0">
                            <Row>
                                <Col xs="7">
                                    <img
                                        className={`card-img-top m-0 ${style.image1}`}
                                        src={img}
                                        alt="..."
                                    />
                                </Col>
                                <Col xs="5">
                                    <h5
                                        style={{
                                            marginTop: "38px",
                                            fontFamily: "Georgia, 'Times New Roman', Times, serif",
                                            fontSize: "21px",
                                        }}
                                        className="card-title"
                                    >
                                        IT Courses
                                    </h5>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>

            {/* Active Courses section */}
            <hr style={{ marginTop: "22px" }} />
            <h3
                style={{
                    marginTop: "8px",
                    position: "relative",
                    marginLeft: "22px",
                    fontFamily: "Georgia, 'Times New Roman', Times, serif",
                    fontSize: "30px",
                    marginBottom: "10px",
                }}
            >
                Active Courses
            </h3>
            <hr />

            <Row>
                {filteredCourses.map((course, index) => (
                    <Col key={index}>
                        <div className={`card ${style.carddash}`}>
                            <div className="card-body" style={{ padding: "0" }}>
                                <img
                                    className={`card-img-top ${style.image1}`}
                                    src={course.image}
                                    alt="..."
                                />
                                <h5
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontFamily: "Georgia, 'Times New Roman', Times, serif",
                                        fontSize: "21px",
                                    }}
                                    className="card-title"
                                >
                                    {course.title}
                                </h5>
                                <Row style={{ padding: "0px 0px 8px 6px" }}>
                                    <Col xs="7" style={{ paddingTop: "3px" }}>
                                        {/* Star Ratings */}
                                        <StarRatings
                                            rating={courseRatings[index]}
                                            starRatedColor="gold"
                                            numberOfStars={5}
                                            starDimension="20px"
                                            starSpacing="2px"
                                            changeRating={(newRating) => handleRatingChange(index, newRating)}
                                        />
                                    </Col>
                                    <Col xs="2">
                                        <Link to={course.link} type="button" className="btn btn-outline-warning">
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
    );
}
