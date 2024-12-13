import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import FilterCard from "./FilterCard";
import Job from "./Job";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import useGetAllJobs from "@/hooks/useGetAllJobs";

const Jobs = () => {
  useGetAllJobs();
  const {allJobs,searchedQuery} = useSelector((store) => store.job);
  const [filterJobs,setFilterJobs]=useState(allJobs);
  useEffect(()=>{
    if(searchedQuery){
      const filteredJobs=allJobs.filter((job)=>{
        return job.title.toLowerCase().includes(searchedQuery.toLowerCase()) || 
        job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchedQuery.toLowerCase()) ;
      })
     setFilterJobs(filteredJobs);
    }else{
      setFilterJobs(allJobs)
    }
  },[allJobs,searchedQuery])
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto mt-5">
        <div className="flex gap-5">
          <div className="w-20% h-[88vh] overflow-y-auto">
            <FilterCard />
          </div>
          {allJobs.length == 0 || filterJobs.length == 0 ? (
            <span>No Jobs Available</span>
          ) : (
            <div className="flex-1 h-[88vh] overflow-y-auto pb-5">
              <div className="grid grid-cols-3 gap-4">
                {filterJobs.length > 0 ? (
                    filterJobs.map((job) => (
                    <div>
                      <Job job={job} key={job._id} />
                    </div>
                  ))
                ) : (
                  <span>No Jobs Available </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
