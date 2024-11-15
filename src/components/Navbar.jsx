import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div>{user && user.email}</div>
      <div className="nav space-x-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/career">Career</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
      <div className="login flex gap-2 items-center">
        <div>
          {
            user && user?.email ?
              (
            <div>
              <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
              <p>{user.displayName}</p>
            </div>
              ) : (<img src={userIcon} alt="User Icon" />)}
          
        </div>
        {user && user?.email ? (
          <button onClick={logOut} className="btn btn-neutral rounded-none">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-neutral rounded-none">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
