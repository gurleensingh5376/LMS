import { Button, Card, Form } from "react-bootstrap";
import style from "./Css/Form.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ShimmerEffect from "./ShimmerEffect";
import loginbg from "./assets/1072.jpg"

const backgroundImageStyle = {
  backgroundImage: `url(${loginbg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center"
};
export default function Loginpage() {
  const navigate = useNavigate();
  const [buttonClicked, setButtonClicked] = useState(true);


  return (
    <div className="d-flex justify-content-center align-items-center vh-100"style={backgroundImageStyle} >
      {buttonClicked ? (
        <div className={`bg-grey p-3 rounded w-25${style.cardd}`}>
            <Card  style={{backgroundColor:"#e7e5e4", color:""}}className={style.card}>
              <Card.Body >
              <h1 className={style.h}>Login</h1>
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
                  <Button
                    variant="light"
                    style={{alignContent:"center", textAlign:"center"}}

                    onClick={() => {
                      setButtonClicked(false);
                      setTimeout(() => {
                        navigate("/Dash");
                      }, 2000);
                    }}
                  >
                    Submit
                  </Button></center>
                </Form>
              </Card.Body>
            </Card>
        </div>
      ) : (
       <ShimmerEffect></ShimmerEffect>
      
      )}</div>
  );
}
