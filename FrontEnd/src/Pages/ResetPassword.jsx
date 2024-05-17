import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as Yup from "yup";

export default function ResetPassword() {
  const [pass, setpass] = useState("password");

  const [formData, setformData] = useState({
    password: "",
    confirmpassword: "",
  });

  const [error, seterror] = useState({ password: "", confirmpassword: "" });

  const [buttonStatus, setbuttonStatus] = useState(false);

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .matches(
        /[!@#$%^&*(),.?":{}|<>]/,
        "Password must contain atleast one symbol"
      )
      .matches(/[0-9]/, "Password must contain one number")
      .required("Please enter password"),

    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Please re-enter password"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      seterror({ password: "", confirmpassword: "" });
      setbuttonStatus(true);
    } catch (errors) {
      const newerror = {};

      errors.inner.forEach((err) => {
        newerror[err.path] = err.message;
      });
      seterror(newerror);
    }
  };

  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-col h-screen  mt-14">
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-center text-4xl font-bold leading-tight text-black">
              Reset Password
            </h2>

            <form className=" mt-8" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900 mt-2"
                >
                  New Password
                </label>

                <input
                  type={pass}
                  name="password"
                  className="flex h-10 w-full rounded-md border border-sky-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-sky-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  id="floatingPassword"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder=" Set New Password"
                />
                {error.password && (
                  <div className="text-red-500 ml-6 opacity-85">
                    {error.password}
                  </div>
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
                  <div className="text-red-500 ml-6 opacity-85">
                    {error.confirmpassword}
                  </div>
                )}
              </div>
              <div className=" mt-2 text-base text-gray-900">
                <span
                  onClick={() => {
                    navigate("/Login");
                  }}
                  className=" text-base text-gray-900  transition-all duration-200 hover:underline ms-1 mt-1 cursor-pointer"
                >
                  Already have an account? Login here
                </span>
              </div>

              <button
                type="submit"
                onClick={() => {
                  if (buttonStatus) {
                    setTimeout(() => {
                      navigate("/Login");
                    });
                  }
                }}
                size="lg"
                className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 mt-3 font-semibold leading-7 text-white hover:bg-black/80 shadow-lg shadow-black-500/50 dark:shadow-lg dark:shadow-blue-800/80"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
