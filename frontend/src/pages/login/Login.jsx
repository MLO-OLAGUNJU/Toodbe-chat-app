import React from "react";
import { Link } from "react-router-dom";
import { Input } from "@material-tailwind/react";

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
              <div className="flex w-72 flex-col gap-6 mt-5">
                <Input
                  className="text-white"
                  variant="outlined"
                  //   value={inputs.username}
                  //   onChange={(e) =>
                  //     setInputs({ ...inputs, username: e.target.value })
                  //   }
                  label="Username"
                  color="blue"
                />
              </div>

              <div className="flex w-72 flex-col gap-6 mt-5">
                <Input
                  className="text-white"
                  type="password"
                  label="Password"
                  color="blue"
                  // value={inputs.password}
                  // onChange={(e) =>
                  //   setInputs({ ...inputs, password: e.target.value })
                  // }
                />
              </div>

              <Link
                to="/join"
                className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
              >
                Don't have an account?
              </Link>

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
