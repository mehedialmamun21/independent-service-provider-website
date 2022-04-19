import React from "react";
import {Link} from "react-router-dom";
import "./Header.css";
import {useAuthState} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import {signOut} from "firebase/auth";
const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <div className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/service-detail">Service Detail</Link>
        <Link to="/blogs">Blogs</Link>
        <Link to="/about">About Me</Link>

        {user ? (
          <button className="sign-out" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
