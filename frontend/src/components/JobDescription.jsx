import React from "react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const isApplied = true
const JobDescription = () => {
  return (
    <div className="mx-auto max-w-7xl bg-white my-5 p-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Frontend Developer</h1>
          <div className="mt-3">
            {[1, 2, 3, 4].map((item, index) => (
              <Badge
                key={index}
                variant="secondary"
                className={`text-blue-700 font-bold `}
              >
                12 Positions
              </Badge>
            ))}
          </div>
        </div>
        <div>
          <Button
            disabled={isApplied}
            onClick={() => console.log("Clicked")}
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
          Role:{" "}
          <span className="pl-4 font-normal text-gray-800">
            Frontend Developer
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Role:{" "}
          <span className="pl-4 font-normal text-gray-800">
            Frontend Developer
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Role:{" "}
          <span className="pl-4 font-normal text-gray-800">
            Frontend Developer
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Role:{" "}
          <span className="pl-4 font-normal text-gray-800">
            Frontend Developer
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Role:{" "}
          <span className="pl-4 font-normal text-gray-800">
            Frontend Developer
          </span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
