import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const navigate = useNavigate();
  let jobId = job._id;
  const JobDescriptionHandler = () => {
    navigate(`/description/${jobId}`);
  };

  const DaysAgoFunction=(mongodbTime)=>{
    const createdAt=new Date(mongodbTime);
    const currentTime=new Date();
    const timeDiff=currentTime-createdAt;
    return Math.floor(timeDiff/(24*60*60*1000))
  }


  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">
          {DaysAgoFunction(job.createdAt) === 0
            ? "Today"
            : `${DaysAgoFunction(job.createdAt)} days ago`}
        </p>
        <Button variant="outline" classname="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>
      <div className="flex items-center gap-2 my-2">
        <Button variant="outline" classname="rounded-full" size="icon">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Button>
        <div>
          <h1 className="font-bold text-lg">{job.company.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job.title}</h1>
        <p className="text-sm text-gray-700">{job.description}</p>
      </div>
      <div className="gap-4 flex items-center my-2">
        <div className="gap-4 flex items-center my-2">
          <Badge variant="secondary" className={`text-blue-700 font-bold`}>
            {job?.position} Positions
          </Badge>
          <Badge variant="secondary" className={`text-red-700 font-bold `}>
            {job?.jobType}
          </Badge>
          <Badge variant="secondary" className={`text-violet-700 font-bold`}>
            {job?.salary} LPA
          </Badge>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-3">
        <Button variant="outline" onClick={JobDescriptionHandler}>
          Details
        </Button>
        <Button className="bg-violet-800">Save for Later</Button>
      </div>
    </div>
  );
};

export default Job;
