import { useState } from 'react'
import { Container, Col, Row} from 'react-bootstrap'
import style from '../Css/register.module.css'
import image from '../assets/Login.png'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export default function RegistrationPage() {

    const [pass, setpass] = useState("password");
    

    

    const [formData, setformData] = useState({
        email: "",
        password: "",
        confirmpassword: ""
    })

    const [error, seterror] = useState({ email: "", password: "", confirmpassword: "" })
    const [buttonStatus, setbuttonStatus] = useState(false);

    const validationSchema = Yup.object({
        email: Yup.string()
            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Invalid email format")
            .required("Please enter email"),

        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one symbol")
            .matches(/[0-9]/, "Password must contain one number")
            .required("Please enter password"),

        confirmpassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match")
            .required("Please re-enter password")
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await validationSchema.validate(formData, { abortEarly: false })
            seterror({ email: '', password: '', confirmpassword: '' })
            setbuttonStatus(true);
        } catch (errors) {
            const newerror = {}
            errors.inner.forEach((err) => {
                newerror[err.path] = err.message;
            })
            seterror(newerror);
        }
    }

    const [buttonClick, setbuttonClick] = useState(true);
    const navigate = useNavigate();

    return (
        <>
            <div style={{ backgroundColor: '#fff', height: '100vh', width: '100%', position: 'relative' }}>
                {buttonClick ?
                    <Container className={style.card}>
                        <div className={`card ${style.ccard}`}>
                            <h2 className={style.heading}>
                                Create your account
                            </h2>
                            <div className={`card-body ${style.cardbody}`}>
                                <Row>
                                    <Col style={{ marginTop: "4vh" }}>
                                        <img className={style.img1} src={image} />
                                    </Col>
                                    <Col>
                                        <form style={{ marginLeft: "20px", marginTop: "5vh" }} onSubmit={handleSubmit}>
                                            <div style={{ marginBottom: "20px" }} className="form-floating">
                                                <input type="email" className="form-control" id="floatingInput" name='email' value={formData.email} onChange={handleChange} />
                                                <label htmlFor="floatingInput">Enter Email</label>
                                                {error.email && <div className={style.alert}>{error.email}</div>}
                                            </div>
                                            <div style={{ marginBottom: "20px", marginTop: "20px" }} className="form-floating">
                                                <input type="text" className="form-control" id="floatingInput" name='password' value={formData.password} onChange={handleChange} />
                                                <label htmlFor="floatingInput">Enter Password</label>
                                                {error.password && <div className={style.alert}>{error.password}</div>}
                                            </div>
                                            <div style={{ marginBottom: "20px", marginTop: "20px" }} className="form-floating">
                                                <input type={pass} className="form-control" id="floatingInput" name='confirmpassword' value={formData.confirmpassword} onChange={handleChange} />
                                                <label htmlFor="floatingInput">Confirm Password</label>
                                                                                                    {error.confirmpassword && <div className={style.alert}>{error.confirmpassword}</div>}
                                            </div>
                                            <p onClick={() => navigate("/login")} className={style.p} style={{ transform: "translateY(-100%)" }}>Already have an account?</p>
                                            <div className={style.button}>
                                                <button 
                                            className="text-white bg-black shadow-lg shadow-black-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  "
                                            type='submit'
                                                    onClick={() => {
                                                        if (buttonStatus === true) {
                                                            setbuttonClick(false)
                                                            setTimeout(() => {
                                                                navigate("/login")
                                                            }, 0);
                                                        }
                                                    }}
                                                   
                                                >
                                                    Register
                                                </button>
                                            </div>
                                        </form>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Container>
                    : () => { navigate("/loading") }
                }
            </div>
        </>
    )
}
