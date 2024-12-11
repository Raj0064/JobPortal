import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import { Contact2, Mail, Pen } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Label } from '@radix-ui/react-label';
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useSelector } from 'react-redux';

const Profile = () => {

  const {user}=useSelector(store=>store.auth);

  const [open,setOpen]=useState(false);
  const skills=["Html","Css","React","MERN","MongoDB"]
  const isResume=true;
  return (
    <div className="">
      <Navbar />
      <div className="mx-auto max-w-7xl bg-white border border-gray-300 rounded-2xl my-5 p-8">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-lg font-medium">{user?.fullname}</h1>
              <p className="text-sm">{user?.profile?.bio}</p>
            </div>
          </div>
          <Button
            onClick={() => {
              setOpen(true);
            }}
            variant="outline"
            className="text-right"
          >
            <Pen />
          </Button>
        </div>
        <div>
          <div className="flex items-center my-2 gap-3">
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className="flex items-center my-2 gap-3">
            <Contact2 />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>
        <div>
          <h1 className="font-medium text-lg">Skills</h1>
          <div className="flex items-center gap-4 my-3">
            {user?.profile?.skills.length > 0 ? (
              user?.profile?.skills.map((item, index) => (
                <Badge key={index}>{item}</Badge>
              ))
            ) : (
              <span>NA</span>
            )}
          </div>
        </div>
        {isResume ? (
          <div>
            <Label className="font-bold text-lg">Resume </Label>
            <a
              target="blank"
              href="#"
              className="text-blue-500 cursor-pointer hover:underline"
            >
              Resume
            </a>
          </div>
        ) : (
          <span></span>
        )}
      </div>

      {/* Applied Jobs */}
      <div className="mx-auto max-w-7xl bg-white my-5 p-8">
        <h1 className="text-lg font-bold">Applied Jobs</h1>
        <div>
          <AppliedJobTable />
        </div>
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
}

export default Profile;
