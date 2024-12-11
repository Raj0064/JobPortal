import React from 'react';
import { Button } from "../ui/button";
import { Link } from 'react-router-dom';
const NavLoginBtn = () => {
  return (
    <div className="flex gap-3">
      <Button variant="outline">
        <Link to="/login">Login</Link>
      </Button>
      <Button className="hover:bg-purple-700 bg-purple-900">
        {" "}
        <Link to="/signup">Sign Up</Link>
      </Button>
    </div>
  );
}

export default NavLoginBtn;
