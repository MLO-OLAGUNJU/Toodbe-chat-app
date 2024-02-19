import React from "react";

const Login = () => {
  return (
    <>
      <main className="w-[80%] h-[80%] flex items-center justify-between mx-auto max-[768px]:flex-col max-[768px]:justify-center max-[480px]:mr-20">
        <div className=" w-60 max-[768px]:w-[150px] flex justify-center items-center max-[480px]:pl-10">
          <img className="w-full" src="/Toodbe-nobg.png" alt="Toodbe Logo" />
        </div>
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
          <div className="w-full p-12 border-blue-600 border-2 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className=" max-[480px]:text-3xl text-5xl font-semibold text-center text-gray-300">
              Sign In <span className=" text-blue-600">ToodBE.</span>
            </h1>

            <form>
              <div>
                <label className="label p-2 ">
                  <span className="text-base  text-blue-600 label-text">
                    Username
                  </span>
                </label>
                <input
                  type="text"
                  autoFocus
                  placeholder="Enter username"
                  className="w-full input input-bordered h-10 focus:border-blue-600 "
                />
              </div>

              <div>
                <label className="label p-2">
                  <span className="text-base  text-blue-600 label-text">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="Enter password"
                  className="w-full input input-bordered h-10 focus:border-blue-600 "
                />
              </div>

              <a
                href="#"
                className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
              >
                Don't have an account?
              </a>

              <div>
                <button className="btn btn-block btn-sm mt-2 bg-blue-600">
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
