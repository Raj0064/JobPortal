import { Label } from "@radix-ui/react-label";
import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { Button } from "./ui/button";

const filterData = [
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
  {
    filterType: "Location",
    array: ["India","Bangalore","Kolkata"],
  },
  // {
  //   filterType: "Salary",
  //   array: ["0-40k", "42k-1L", "1 Lakh to 5 lakhs"],
  // },
];
const FilterCard = () => {
  const dispatch=useDispatch();
  const [selectedValue, setSelectedValue] = useState("");
  const changeHandler = (value) => {
    setSelectedValue(value);
  }
  useEffect(()=>{
    console.log(selectedValue);
    dispatch(setSearchedQuery(""));
    dispatch(setSearchedQuery(selectedValue));
  },[selectedValue])

  return (
    <div className="bg-white rounded-md p-3 w-full ">
      <h1 className="font-medium text-lg bg-slate-50 rounded-md">
        Filter Jobs
      </h1>
      <Button variant="link" onClick={()=>setSelectedValue("")}>Clear Filter</Button>
      <hr className="my-1" />

      {filterData.map((data, index) => (
        <RadioGroup value={selectedValue} onValueChange={changeHandler}>
          <div>
            <h1 className="font-medium ">{data.filterType}</h1>
            {data.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`
              return (
                <div className="flex space-x-2 my-2 items-center">
                  <RadioGroupItem key={itemId} value={item} />
                  <Label htmlFor={item}>{item}</Label>
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
