import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CircleUserRound, LogOut } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

const NavbarProfilePic = () => {

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Avatar className="cursor-pointer">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </PopoverTrigger>
        <PopoverContent className="max-w-40 p-2">
          <div className="flex flex-col items-start">
            <div className="flex gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-medium">Name</h4>
                <p className="text-sm text-muted-foreground">
                  Lorem ipsum dolor sit amet.
                </p>
              </div>
            </div>
            <Button variant="link" className="flex gap-3">
              <CircleUserRound />
              <span className="font-medium"><Link to="/profile"> Profile </Link></span>
            </Button>
            <Button variant="link" className="flex gap-3">
              <LogOut />
              <span className="font-medium">Log Out</span>
            </Button>
          </div>
        </PopoverContent>
      </Popover>

    </>
  );
};

export default NavbarProfilePic;
