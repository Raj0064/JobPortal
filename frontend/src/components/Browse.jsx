import React from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";

const randomjobs = [1, 2, 3, 4,7,8,9,10,11,12];
const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl">Search Results({randomjobs.length})</h1>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {randomjobs.map((item, index) => (
            <Job />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
