import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_medium.jpg"
        />
      </div>

      <form className="absolute bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 ">
        <h1 className="font-bold text-3xl px-1 pb-4">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!isSignInForm ? (
          <input
            type="text"
            placeholder="Name"
            className="p-2 m-2 w-full bg-gray-600"
          />
        ) : (
          " "
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full bg-gray-600"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-600"
        />
        {isSignInForm ? (
          <button className="p-2 m-2 w-full  bg-red-600"> Sign In</button>
        ) : (
          <button className="p-2 m-2 w-full  bg-red-600"> Sign Up</button>
        )}
        {isSignInForm ? (
          <p className="p-2 m-2 cursor-pointer" onClick={toggleSignInForm}>
            New to Netflix? Sign Up Now
          </p>
        ) : (
          " "
        )}
      </form>
    </div>
  );
};

export default Login;
