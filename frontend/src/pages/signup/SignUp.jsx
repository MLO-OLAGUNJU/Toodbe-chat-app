import React, { useState } from "react";
import ChekBox from "./ChekBox";
import { Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import useSignUp from "../../hooks/useSignUp";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignUp();

  const handleCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };
  return (
    <>
      <main className="carrier w-[80%] h-[80%] flex items-center justify-between mx-auto max-[768px]:flex-col max-[768px]:justify-center max-[480px]:mr-20">
        <div className="logoCarrier w-60 max-[768px]:w-[150px] flex justify-center items-center flex-col max-[480px]:pl-10">
          <img className="w-full" src="/Toodbe-nobg.png" alt="Toodbe Logo" />
        </div>
        <div className="shift flex flex-col items-center justify-center min-w-96 mx-auto">
          <div className="w-full p-12 border-blue-600 border-2 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-5xl font-semibold text-center text-gray-300">
              Join <span className=" text-blue-600">ToodBE.</span>
            </h1>

            <form onSubmit={handleSubmit}>
              <div className="flex w-72 flex-col gap-6 mt-5">
                <Input
                  variant="outlined"
                  className="text-white"
                  input={inputs.fullName}
                  onChange={(e) =>
                    setInputs({ ...inputs, fullName: e.target.value })
                  }
                  label="Full Name"
                  color="blue"
                />
              </div>

              <div className="flex w-72 flex-col gap-6 mt-5">
                <Input
                  className="text-white"
                  variant="outlined"
                  value={inputs.username}
                  onChange={(e) =>
                    setInputs({ ...inputs, username: e.target.value })
                  }
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
                  value={inputs.password}
                  onChange={(e) =>
                    setInputs({ ...inputs, password: e.target.value })
                  }
                />
              </div>

              <div className="flex w-72 flex-col gap-6 mt-5">
                <Input
                  className="text-white"
                  type="password"
                  label="Re-enter your Password"
                  color="blue"
                  value={inputs.confirmPassword}
                  onChange={(e) =>
                    setInputs({ ...inputs, confirmPassword: e.target.value })
                  }
                />
              </div>

              {/* Gender checkbox */}
              <ChekBox
                onCheckboxChange={handleCheckBoxChange}
                selectedGender={inputs.gender}
              />

              <Link
                to="/login"
                className="flex w-72 flex-col gap-6 mt-5 text-sm  hover:underline hover:text-blue-600 mt-2 inline-block"
              >
                Already have an account?
              </Link>

              <div>
                <button
                  className="btn btn-block btn-sm mt-2 bg-blue-600"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="loading loading-spinner"></span>
                  ) : (
                    "Join Now!"
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

export default SignUp;
