import React from 'react';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const LatestJobCards = ({job}) => {
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/description/${job._id}`)} className="border border-gray-200 cursor-pointer p-5 shadow-xl bg-white">
      <div>
        <h1 className="font-medium text-lg">{job.company.name}</h1>
        <p className="text-sm">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">{job.title}</h1>
        <p className="text-sm text-gray-700">{job.description}</p>
      </div>
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
  );
}

export default LatestJobCards;
