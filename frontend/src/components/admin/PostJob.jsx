import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/redux/authSlice';
import { Button } from '../ui/button';
import axios from 'axios';
import { toast } from 'sonner';
import { JOB_API_END_POINT } from '@/utils/constant';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



const PostJob = () => {

  // const param = useParams();
  // const jobId = param.id;
  // useGetSingleCompany(companyId);
  const navigate = useNavigate();
  const dispatch = useDispatch();
   const { companies } = useSelector(store => store.company);
  //const companies=[]
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: "",
    companyId: ""

  });

  // useEffect(() => {
  //   setInput({
  //     name: singleCompany.name || "",
  //     description: singleCompany.description || "",
  //     website: singleCompany.website || "",
  //     location: singleCompany.location || "",
  //     file: "",
  //   })
  // }, [singleCompany])

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeCompanyHandler = (value) => {
    const selectedCompany=companies.find((company)=>company?._id===value)
    setInput({ ...input, companyId:selectedCompany._id });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(input);

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${JOB_API_END_POINT}/post`, input, {
        headers: {
          "Content-Type": "application/json"
        },
        withCredentials: true,
      })
      if (res.data.success) {
        navigate("/admin/jobs")
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      dispatch(setLoading(false));
    }
  };


  return (
    <div>
      <Navbar />

      <div className='w-1/3 max-w-6xl bg-white my-5 mx-auto shadow-2xl px-7'>
        <div>
          <h1 className='font-bold text-2xl my-5 pt-10'>New Job</h1>
        </div>
        <div className='grid grid-cols-2 gap-5'>
          <div>
            <Label className='font-bold text-md '>Title</Label>
            <Input type="text" placeholder="job Title" name="title" value={input.title} onChange={changeEventHandler} />
          </div>
          <div>
            <Label className='font-bold text-md '>Description</Label>
            <Input type="text" placeholder="Description" name="description" value={input.description} onChange={changeEventHandler} />
          </div>
          <div>
            <Label className='font-bold text-md '>Requirements</Label>
            <Input type="text" placeholder="Website name" name="requirements" value={input.requirements} onChange={changeEventHandler} />
          </div>
          <div>
            <Label className='font-bold text-md '>Salary</Label>
            <Input type="number" placeholder="salary" name="salary" value={input.salary} onChange={changeEventHandler} />
          </div>
          <div>
            <Label className='font-bold text-md '>Location</Label>
            <Input type="text" placeholder="Location" name="location" value={input.location} onChange={changeEventHandler} />
          </div>
          <div>
            <Label className='font-bold text-md '>JobType</Label>
            <Input type="text" placeholder="jobType" name="jobType" value={input.jobType} onChange={changeEventHandler} />
          </div>
          <div>
            <Label className='font-bold text-md '>Experience level</Label>
            <Input type="number" placeholder="experience" name="experience" value={input.experience} onChange={changeEventHandler} />
          </div>
          <div>
            <Label className='font-bold text-md '>No of positions</Label>
            <Input type="number" placeholder="position" name="position" value={input.position} onChange={changeEventHandler} />
          </div>
          <div>
            {companies.length == 0 ? <span className='text-red-600 font-semibold'>No Companies Available</span> :
              <Select onValueChange={changeCompanyHandler}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Company" />
              </SelectTrigger>
                <SelectContent >
                {companies.map((company)=>(
                  <SelectItem key={company._id} value={company._id} className="cursor-pointer">{company?.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>}
          </div>
        </div>
        <div className="w-full my-10 pb-10">
          <Button onClick={submitHandler} type="submit" className="w-full">
          Post New Job
        </Button>
        {companies.length==0 &&<span className='text-red-600 font-xl'>* Please create a company before posting a job</span>}
        </div>
      </div>
    </div>
  );
}

export default PostJob;
