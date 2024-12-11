import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setAllJobs, setSinglejob } from "@/redux/jobSlice";
import { toast } from "sonner";

const JobDescription = () => {
  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);

    const initiallyApplied =
      singleJob?.application?.some(
        (application) => application.applicant === user?._id
      ) || false;
    const [isApplied,setisApplied]=useState(initiallyApplied);

  console.log(singleJob);
  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        console.log("response", res);
        if (res.data.success) {
          dispatch(setSinglejob(res.data.job));
          setisApplied(res.data.job.application.some(application=>application.applicant===user._id))
        }
      } catch (error) {
        console.log("Error Fetcching Single Job", error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch]);




  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,{withCredentials:true}
      );
      if (res.data.success) {
        setisApplied(true);//update the local state
        const updatedSingleJob={...singleJob,application:[...singleJob.application,{applicant:user?._id}]}
        dispatch(setSinglejob(updatedSingleJob)); //helps to update real time 
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="mx-auto max-w-7xl bg-white my-5 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{singleJob?.title}</h1>
          <div className="mt-3">
            <Badge variant="secondary" className={`text-blue-700 font-bold`}>
              {singleJob?.position} Positions
            </Badge>
            <Badge variant="secondary" className={`text-red-700 font-bold `}>
              {singleJob?.jobType}
            </Badge>
            <Badge variant="secondary" className={`text-violet-700 font-bold`}>
              {singleJob?.salary} LPA
            </Badge>
          </div>
        </div>
        <div>
          <Button
            disabled={isApplied}
            onClick={applyJobHandler}
            className={`rounded-lg ${
              isApplied
                ? "bg-gray-900 cursor-not-allowed"
                : "bg-violet-900 hover:bg-violet-700"
            } ' `}
          >
            {isApplied ? "Already Applied" : "Apply Now"}
          </Button>
        </div>
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-bold text-xl my-4 py-2">
        Job Description
      </h1>
      <div>
        <h1 className="font-bold my-1">
          Role:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.title}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Location:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.location}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Description:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.description}
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Experience:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.experienceLevel} years
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Salary:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.salary} LPA
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Total Applicants:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.application?.length} people
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Posted Date:
          <span className="pl-4 font-normal text-gray-800">
            {singleJob?.createdAt.split("T")[0]}
          </span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
