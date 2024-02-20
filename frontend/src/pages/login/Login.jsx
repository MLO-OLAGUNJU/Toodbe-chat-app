import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import "./login.css";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();
  const Handlesubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };
  return (
    <>
      <main className="lolly w-[80%] h-[80%] flex items-center justify-between mx-auto">
        <div className=" logodiv mx-auto w-60 flex justify-center items-center">
          <img className="w-full" src="/Toodbe-nobg.png" alt="Toodbe Logo" />
        </div>
        <div className="thecontainer flex flex-col items-center justify-center min-w-96 mx-auto">
          <div className="w-full p-12 border-blue-600 border-2 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className=" max-[480px]:text-3xl text-5xl font-semibold text-center text-gray-300">
              Sign In <span className=" text-blue-600">ToodBE.</span>
            </h1>

            <form onSubmit={Handlesubmit}>
              <div className="flex w-72 flex-col gap-6 mt-5">
                <Input
                  className="text-white"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <Link
                to="/join"
                className="text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
              >
                Don't have an account?
              </Link>

              <div>
                <button
                  className="flex w-72 flex-col gap-6 mt-5 btn btn-block btn-sm mt-2 bg-blue-600"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    " Sign In"
                  )}
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
