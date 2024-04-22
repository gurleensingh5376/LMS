import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();

  const handleNavigate = () =>{
    navigate('/Dash')
  }
  return (
    <section className="mt-14">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-4xl font-bold leading-tight text-black">
            {toggle ? "Login" : "Register"}
          </h2>

          <form className="mt-8">
            <div className="space-y-5">
              {!toggle && (
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="name"
                      placeholder="Name"
                    ></input>
                  </div>
                </div>
              )}
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                  ></input>
                </div>
              </div>
              <p className="mt-2  text-sm text-gray-600 ">
                {toggle
                  ? " Don't have an account?"
                  : "Already have an account?"}
                <span
                  onClick={() => setToggle(!toggle)}
                  className="font-semibold text-black transition-all duration-200 hover:underline ms-1 cursor-pointer"
                >
                  {toggle ? "Create a account" : "Sign In"}
                </span>
              </p>
              <div>
                <button
                  type="button"
                  onClick={handleNavigate}
                  className=" w-full text-gray-900 bg-gradient-to-bl from-sky-900 via-sky-500 to-sky-900 hover:bg-gradient-to-r  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me- hover:bg-black/80"
                >
                  {toggle ? "Get started" : "Create"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;