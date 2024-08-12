import { useState, useRef } from "react";
import Header from "./Header";
import validateData from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "../utils/userSlice";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignIn = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);
    const msg = validateData(email.current.value, password.current.value);

    // console.log(msg);
    // console.log();

    // console.log(isSignInForm);

    if (msg) {
      setErrorMessage(msg);
      return;
    }

    if (!isSignInForm) {
      //   console.log(msg);

      //   //Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://lh3.googleusercontent.com/a/ACg8ocI4OdXwyd4RWxf4uzlNEP34bRKMjr15VFazk_crxdCevZvRjZg=s83-c-mo",
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );

              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });

          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
          setErrorMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }

    // console.log(msg);
  };

  return (
    <div>
      <Header isSignInForm={isSignInForm} />
      <div className="absolute">
        <img
          className=""
          alt="netflix"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_medium.jpg"
        />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="absolute bg-black p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 "
      >
        <h1 className="font-bold text-3xl px-1 pb-4">
          {" "}
          {isSignInForm ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!isSignInForm ? (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="p-2 m-2 w-full bg-gray-600"
          />
        ) : (
          " "
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 w-full bg-gray-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 w-full bg-gray-600"
        />
        {isSignInForm ? (
          <button className="p-2 m-2 w-full  bg-red-600" onClick={handleSignIn}>
            {" "}
            Sign In
          </button>
        ) : (
          <button className="p-2 m-2 w-full  bg-red-600" onClick={handleSignIn}>
            {" "}
            Sign Up
          </button>
        )}
        <p className="text-red-500 p-2">{errorMessage}</p>
        {isSignInForm ? (
          <p className="p-2 m-2 cursor-pointer" onClick={toggleSignInForm}>
            New to Netflix? Sign Up Now
          </p>
        ) : (
          <p className="p-2 m-2 cursor-pointer" onClick={toggleSignInForm}>
            Already Registered? Sign In Now
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
