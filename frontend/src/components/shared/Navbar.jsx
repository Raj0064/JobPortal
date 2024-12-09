import React from "react";
import { Link } from "react-router-dom";
import NavbarProfilePic from "./NavbarProfilePic";

import NavLoginBtn from "./NavLoginBtn";

const Navbar = () => {
  const user=true;
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
              <Link>Home</Link>
            </li>
            <li>
              <Link>Jobs</Link>
            </li>
            <li>
              <Link>Browse</Link>
             
            </li>
          </ul>
          {!user ? <NavLoginBtn /> : <NavbarProfilePic />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
