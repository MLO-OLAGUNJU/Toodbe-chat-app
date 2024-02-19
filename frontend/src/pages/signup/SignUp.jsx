import React from "react";

const SignUp = () => {
  return (
    <>
      <main className="w-[80%] h-[80%] flex items-center justify-between mx-auto">
        <div>
          <img className="w-full" src="/Toodbe-nobg.png" alt="Toodbe Logo" />
        </div>
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
          <div className="w-full p-12 border-blue-600 border-2 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className=" text-5xl font-semibold text-center text-gray-300">
              Join <span className=" text-blue-600">ToodBE</span> Today.
            </h1>

            <form>
              <div>
                <label className="label p-2 ">
                  <span className="text-base  text-blue-600 label-text">
                    Full Name
                  </span>
                </label>
                <input
                  type="text"
                  autoFocus
                  placeholder="Austin Walker"
                  className="w-full input input-bordered h-10 focus:border-blue-600 authinput"
                />
              </div>

              <div>
                <label className="label p-2 ">
                  <span className="text-base  text-blue-600 label-text">
                    Username
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="austinwalker"
                  className="w-full input input-bordered h-10 focus:border-blue-600 authinput"
                />
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
