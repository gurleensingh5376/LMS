import { Button, Card, Form } from "react-bootstrap";
import style from "./Css/Form.module.css";
import {Link} from "react-router-dom";
import loginbg from "./assets/1072.jpg"

const backgroundImageStyle = {
  backgroundImage: `url(${loginbg})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center"
};
export default function Registerpage() {
 

  return (
    <div className="d-flex justify-content-center align-items-center vh-100"style={backgroundImageStyle} >
      { (
        <div className={`bg-grey p-3 rounded w-25${style.cardd}`}>
            <Card  style={{backgroundColor:"#e7e5e4", color:""}}className={style.card}>
              <Card.Body >
              <h1 className={style.h}>Register</h1>
              <Form>
<Form.Group className="mb-3" controlId="formGroupEmail">
<Form.Label >Email address</Form.Label>
<Form.Control type="email" placeholder="Enter email" />
</Form.Group>
<Form.Group className="mb-3" controlId="formGroupPassword">
<Form.Label >Password</Form.Label>
<Form.Control type="password" placeholder="Password" />
</Form.Group>

<Form.Group className="mb-3" controlId="formGroupPassword">
<Form.Label  className="d-flex justify-content-right align-items-right">
  Re-Password
</Form.Label>
<Form.Control
  type="password"
  placeholder="Re-Enter Password"
/><Link to="/"><u>Already have account</u> </Link>
</Form.Group> <center>
<Button
variant="light"
style={{alignContent:"center", textAlign:"center"}}
>
Submit
</Button></center>
</Form>
              </Card.Body>
            </Card>
        </div>
     
      
      )}</div>
  );
}
