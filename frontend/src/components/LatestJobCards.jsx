import React from 'react';
import { Badge } from './ui/badge';

const LatestJobCards = () => {
  return (
    <div className='border border-gray-200 cursor-pointer p-5 shadow-xl bg-white'>
      <div>
        <h1 className="font-medium text-lg">Company Name</h1>
        <p className="text-sm">India</p>
      </div>
      <div>
        <h1 className="font-bold text-lg my-2">Job Title</h1>
        <p className='text-sm text-gray-700'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          tenetur facere enim.
        </p>
      </div>
      <div className='gap-4 flex items-center my-2'>
        <Badge
          variant="secondary"
          className={`text-blue-700 font-bold bg-blue-200`}
        >
          12 Positions
        </Badge>
        <Badge
          variant="secondary"
          className={`text-blue-700 font-bold bg-blue-200`}
        >
          12 Positions
        </Badge>
        <Badge
          variant="secondary"
          className={`text-blue-700 font-bold bg-blue-200`}
        >
          12 Positions
        </Badge>
      </div>
    </div>
  );
}

export default LatestJobCards;
