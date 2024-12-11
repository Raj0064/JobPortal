import { Label } from "@radix-ui/react-label";
import React from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Bangalore", "Hyderabad", "Kolkata", "Pune", "Mumbai"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "42k-1L", "1 Lakh to 5 lakhs"],
  },
  {
    filterType: "Industry",
    array: [
      "Frontend Developer",
      "Data Science",
      "Backend Developer",
      "Graphic Designer",
      "FullStack Developer"
    ],
  },
];
const FilterCard = () => {
  return (
    <div className="bg-white rounded-md p-3 w-full ">
      <h1 className="font-medium text-lg bg-slate-50 rounded-md">
        Filter Jobs
      </h1>
      <hr className="my-1" />

      {filterData.map((data, index) => (
        <RadioGroup>
          <div>
            <h1 className="font-medium ">{data.filterType}</h1>
            {data.array.map((item, index) => {
              return (
                <div className="flex space-x-2 my-2 items-center">
                  <RadioGroupItem key={index} value={item} />
                  <Label>{item}</Label>
                </div>
              );
            })}
          </div>
        </RadioGroup>
      ))}
    </div>
  );
};

export default FilterCard;
