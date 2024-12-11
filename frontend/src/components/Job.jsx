import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";

const Job = () => {
  const navigate=useNavigate();
  let jobId="vnjbhdsjvsjhlnvnkl";
  const JobDescriptionHandler=()=>{
    navigate(`/description/${jobId}`)
  }
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-200">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
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
          <h1 className="font-bold text-lg">Company Name</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Title</h1>
        <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta cupiditate veritatis neque?</p>
      </div>
      <div className='gap-4 flex items-center my-2'>
        <Badge
          variant="secondary"
          className={`text-blue-700 font-bold `}
        >
          12 Positions
        </Badge>
        <Badge
          variant="secondary"
          className={`text-blue-700 font-bold `}
        >
          12 Positions
        </Badge>
        <Badge
          variant="secondary"
          className={`text-blue-700 font-bold `}
        >
          12 Positions
        </Badge>
      </div>
      <div className="flex items-center gap-4 mt-3">
        <Button variant="outline" onClick={JobDescriptionHandler}>Details</Button>
        <Button className="bg-violet-800">Save for Later</Button>
      </div>
    </div>
  );
};

export default Job;
