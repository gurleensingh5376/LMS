import { Button, Card, Form } from "react-bootstrap";
import style from "./Css/Form.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ShimmerEffect from "./ShimmerEffect";

export default function Loginpage() {
  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState(true);


  return (
    <div className="bg-grey d-flex justify-content-center align-items-center vh-100" >
      {buttonClicked ? (
        <div className={` p-3${style.cardd}`}>
            <Card  className={style.card}>
              <Card.Body >
              <h1 className={style.h}>Sign In</h1>
                <Form>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGroupPassword">
                    <Form.Label >Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Form.Group>
                 <Form.Check 
                      type="checkbox"
                      label="Remember me"
                      className="remember-forgot"
                              /><Link to="/Register" style={{ textAlign:"right"}}><u> Dont have account register</u></Link>
                  </Form.Group><center>
                  <button
                  
                  type="button"
                  className="text-gray-900 bg-gradient-to-r from-sky-400 via-sky-400 to-sky-900 hover:bg-gradient-to-bl  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 font-medium"
              
                         onClick={() => {
                      setButtonClicked(false);
                      setTimeout(() => {
                        navigate("/Dash");
                      }, 2000);
                    }}
                  >
                   Login
                  </button></center>
                </Form>
              </Card.Body>
            </Card>
        </div>
      ) : (
       <ShimmerEffect></ShimmerEffect>
      
      )}</div>
  );
}
