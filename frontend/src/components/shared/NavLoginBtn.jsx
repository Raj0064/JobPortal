import React from 'react';
import { Button } from "../ui/button";
const NavLoginBtn = () => {
  return (
    <div className='flex gap-3'>
      <Button variant="outline">Login</Button>
      <Button className="hover:bg-purple-700 bg-purple-900">Sign Up</Button>
    </div>
  );
}

export default NavLoginBtn;
