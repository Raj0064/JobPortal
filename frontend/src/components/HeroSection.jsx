import React, { useState } from 'react';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [query,setQuery]=useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const searchJobHandler=()=>{
    dispatch(setSearchedQuery(query));
    navigate("/browse")
  }
  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <span className="mx-auto bg-gray-100 rounded-full px-4 py-2 text-red-800 font-bold">
          No. 1 Job Hunt Website
        </span>
        <h1 className="text-5xl font-bold">
          Search, Apply & <br /> Get Your{" "}
          <span className="text-violet-800">Dream Jobs</span>
        </h1>
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quae
          alias possimus.
        </p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <input
          onChange={(e)=>setQuery(e.target.value)}
            type="text"
            placeholder="Find your dream jobs"
            className="py-2 outline-none border-none w-full"
          />
          <Button onClick={searchJobHandler} className="bg-violet-800 hover:bg-violet-700 rounded-r-full py-2">
            <Search className='h-5 w-5' />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
