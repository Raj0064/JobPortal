import React from "react";
import { Link } from "react-router-dom";
import NavbarProfilePic from "./NavbarProfilePic";
import NavLoginBtn from "./NavLoginBtn";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {user}=useSelector((store)=>store.auth);
  console.log(user);
  
  return (
    <div className="bg-white">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-red-500">Portal</span>
          </h1>
        </div>
        <div className="flex items-center gap-10">
          <ul className="flex font-medium items-center gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/jobs">Jobs</Link>
            </li>
            <li>
              <Link to="/browse">Browse</Link>
            </li>
          </ul>
          {!user ? <NavLoginBtn /> : <NavbarProfilePic />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
