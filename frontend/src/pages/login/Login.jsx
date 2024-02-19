import React from "react";

const Login = () => {
  return (
    <>
      <main className="w-[80%] h-[80%] flex items-center justify-between mx-auto">
        <div>
          <img className="w-full" src="/Toodbe-nobg.png" alt="Toodbe Logo" />
        </div>
        <div className="flex flex-col items-center justify-center min-w-96 ">
          <div className="w-full p-6 rounded-lg shadow-md bg-[#F5F5F5] bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className=" text-5xl font-semibold text-center text-gray-300">
              Sign In
            </h1>

            <form>
              <div>
                <label className="label p-2">
                  <span className="text-base label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="w-full input input-bordered h-10"
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
