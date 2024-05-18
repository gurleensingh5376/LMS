import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

export default function RegistrationPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const formSubmission = () => {
    fetch("http://localhost:4000/api/auth", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email,password }),
    }).then((res) =>
      res.json().then((data) => {
        console.log(data);
        if (data.email == email && data.password == password) {
          navigate("/Dash");
        } else {
          navigate("/Login");
        }
      })
    );
    console.log("Email is " + email);
    console.log("Password is " + password);
  };
 
  const [formData, setformData] = useState({
    email: "",
    password: "",
    confirmpassword: ""
})


const [error, seterror] = useState({ email: "", password: "", confirmpassword: "" })


const [buttonStatus, setbuttonStatus] = useState(false);


const validationSchema = Yup.object(
    {
        email: Yup.string()
            .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Invaild email format")
            .required("Please enter email"),

        password: Yup.string()
            .min(8, "Password must be at least 8 characters")
            .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain atleast one symbol")
            .matches(/[0-9]/, "Password must contain one number")
            .required("Please enter password"),

        confirmpassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match")
            .required("Please re-enter password")



    })

const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value })
}
const handleChange1 = (e) => {
    const { name, value } = e.target;
    setEmail(e.target.value)
    setformData({ ...formData, [name]: value })
}
const handleChange2 = (e) => {
    const { name, value } = e.target;
    setPassword(e.target.value)
    setformData({ ...formData, [name]: value })
}


const handleSubmit = async (e) => {
  e.preventDefault();
 
  try {
      await validationSchema.validate(formData, { abortEarly: false })
      seterror({ email: '', password: '', confirmpassword: '' })
      
      setbuttonStatus(true)
      

  }
  catch (errors) {
      const newerror = {}

      errors.inner.forEach((err) => {
          newerror[err.path] = err.message;
      })
      seterror(newerror);
  }


}


    


}
const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col h-screen  mt-14">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-center text-4xl font-bold leading-tight text-black">
              Create your account
            </h2>

            <form className=" mt-8" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
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
                />

                {error.email && (
                  <div className="text-red-500 ml-6 opacity-85">{error.email}</div>
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
                  type={pass}
                  name="password"
                  className="flex h-10 w-full rounded-md border border-sky-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  id="floatingPassword"
                  value={formData.password}
                  onChange={handleChange2}
                  placeholder="Enter Password"
                />
                {error.password && (
                  <div className="text-red-500 ml-6 opacity-85">{error.password}</div>
                )}
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900 mt-2"
                >
                  Confirm Password
                </label>
                <input
                  type={pass}
                  className="flex h-10 w-full rounded-md border border-sky-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  id="floatingInput"
                  name="confirmpassword"
                  value={formData.confirmpassword}
                  onChange={handleChange}
                  placeholder="Re-Enter Password"
                />
                {error.confirmpassword && (
                  <div className="text-red-500 ml-6 opacity-85">{error.confirmpassword}</div>
                )}
              </div>
              <div className="mt-2 text-base text-gray-900">
                <span
                  onClick={() => {
                    navigate("/Login");
                  }}
                  className=" text-base text-gray-900 transition-all duration-200 hover:underline ms-1 mt-1 cursor-pointer"
                  
                 
                >
                  Already have an account?
                </span>
              </div>

              <button
                type="submit"
                onClick={() => {
                  if (buttonStatus === true) {
                     formSubmission ();
                      
                      
                  }
              }
            }
                size="lg"
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 mt-2 font-semibold leading-7 text-white hover:bg-black/80 shadow-lg shadow-black-500/50 dark:shadow-lg dark:shadow-blue-800/80"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );

