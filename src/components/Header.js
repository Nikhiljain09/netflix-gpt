import React from "react";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ isSignInForm }) => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  console.log(user);

  const handleSignOut = () => {
    // const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.

        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div
      className=" absolute w-screen
     px-4 py-2 bg-gradient-to-b from-black z-20 flex justify-between"
    >
      <img
        className=" w-44 "
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      {!isSignInForm && (
        <div className="m-2 p-2 ">
          <img className="w-6 " src={user?.photoURL} />
          <button
            onClick={handleSignOut}
            className="p-2 -ms-12 font-bold text-white"
          >
            Sign Out Of Netflix
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
