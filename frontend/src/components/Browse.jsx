import React, { useEffect } from "react";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const Browse = () => {
  useGetAllJobs();
   const { allJobs } = useSelector((store) => store.job);
   const dispatch=useDispatch();
   useEffect(()=>{
    dispatch(setSearchedQuery(""));
   },[]);
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto my-10">
        <h1 className="font-bold text-xl">
          Search Results({allJobs.length})
        </h1>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {allJobs.map((job) => (
            <Job job={job} key={job._id}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
