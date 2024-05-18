import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function LoginPage() {
  // const [pass, setpass] = useState("password");

  // const [iconColor, seticonColor] = useState("currentColor");

  // const handlleClick = () => {
  //   seticonColor(iconColor === "currentColor" ? "Darkblue" : "currentColor");
  //   setpass(pass === "password" ? "text" : "password");
  // };

  // const [buttonStatus, setbuttonStatus] = useState(false);
  
  // const navigate = useNavigate();

  // const [formData, setformdata] = useState({
  //   email: "",
  //   password: "",
  // });

  // const [error, seterror] = useState({ password: "", email: "" });
  // const validationSchema = Yup.object({
  //   email: Yup.string()

  //     .matches(
  //       /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
  //       "Invaild email format"
  //     )
  //     .required("Please enter email"),

  //   password: Yup.string()
  //   .required("Please enter password"),
  // });

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     await validationSchema.validate(formData, { abortEarly: false });
  //     seterror({ email: "", password: "" });
  //     setbuttonStatus(true);
  //   } catch (errors) {
  //     const newerror = {};

  //     errors.inner.forEach((err) => {
  //       newerror[err.path] = err.message;
  //     });
  //     seterror(newerror);
  //   }
  // };

  // const handleChange = (e) => {
  //   const { name, value } = e.target;

  //   setformdata({ ...formData, [name]: value });
  // };


  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const formSubmission = () => {
        fetch("http://localhost:4000/login", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email,password }),
        }).then((res) => 
          res.json().then((data) => {
            console.log(data);
            if (email === "" && password === "") {
              navigate("/Login");
            } else if (data)
             
            {
              navigate("/Dash");
            }
          })
        );
        console.log("Email is " + email);
        console.log("Password is " + password);
      };
  const [buttonStatus, setButtonStatus] = useState(false);
  
  const navigate = useNavigate();


  const [formData, setformdata] = useState({
      email: "",
      password: "",
  })

  const [error, seterror] = useState({ password: '', email: '' });
  const validationSchema = Yup.object({
      email: Yup.string()

          .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Invaild email format")
          .required("Please enter email"),

      password: Yup.string()

          
          .required("Please enter password")

  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    formSubmission();

    try {
        await validationSchema.validate(formData, { abortEarly: false })
        seterror({ email: '', password: '' });
        // setbuttonStatus(true)

    } catch (errors) {


        const newerror = {}

        errors.inner.forEach((err) => {
            newerror[err.path] = err.message;
        });
        seterror(newerror);

    }
};
const handleChange1 = (e) => {
  const { name, value } = e.target;
  setEmail(e.target.value);
  setformdata({ ...formData, [name]: value });


};

const handleChange2 = (e) => {
  const { name, value } = e.target;
  setPassword(e.target.value);
  setformdata({ ...formData, [name]: value });


};


  return (
    <div className="flex flex-col h-screen  mt-14">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-4xl font-bold leading-tight text-black">
            Login your account
          </h2>

          <form className=" mt-8" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="" className="text-base font-medium text-gray-900">
                Email address
              </label>

              <input
                type="email"
                name="email"
                className="flex h-10 w-full rounded-md border border-sky-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                id="floatingInput"
                value={formData.email}
                 onChange={handleChange1}
                placeholder="Enter Email"
                required
              />

              {error.email && (
                <div className="text-red-500 ml-6 opacity-85">
                  {error.email}
                </div>
              )}
            </div>
            <div>
              <label
                htmlFor=""
                className="text-base font-medium text-gray-900 mt-2"
              >
                Password
              </label>

              <input
                name="password"
                className="flex h-10 w-full rounded-md border border-sky-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                id="floatingPassword"
                value={formData.password}
                 onChange={handleChange2} 
                placeholder="Enter Password"
                required
              />
              {error.password && (
                <div className="text-red-500 ml-6 opacity-85">
                  {error.password}
                </div>
              )}
            </div>
            <div>
              <input type="checkbox" />
              <span className="text-base px-1 text-gray-900">Remember me</span>
            </div>
            <div className=" text-base text-gray-900">
              <span
                className="text-base text-gray-900 transition-all duration-200 hover:underline ms-1 cursor-pointer"
                onClick={() => {
                  navigate("/forgot");
                }}
              >
                Forgot Password
              </span>
              <span>|</span>
              <span
                onClick={() => {
                  navigate("/registration");
                }}
                className="text-base text-gray-900 transition-all duration-200 hover:underline ms-1 cursor-pointer"
              >
                Don't have an account? Register
              </span>
            </div>

            <button
              type="submit"
              onClick={() => {
                if (buttonStatus == true)
                  
                    navigate("/Dash");
                  
              }}
              size="lg"
              className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 mt-3 font-semibold leading-7 text-white hover:bg-black/80 shadow-xl"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
