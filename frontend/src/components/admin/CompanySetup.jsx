import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '@/redux/authSlice';
import { Loader2 } from 'lucide-react';
import { Button } from '../ui/button';
import useGetSingleCompany from '@/hooks/useGetSingleCompany';
import axios from 'axios';
import { toast } from 'sonner';
import { COMPANY_API_END_POINT } from '@/utils/constant';

const CompanySetup = () => {

  const param = useParams();
  const companyId = param.id;
  useGetSingleCompany(companyId);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { Loading } = useSelector(store => store.auth);
  const { singleCompany } = useSelector(store => store.company);
  const [input, setInput] = useState({
    name:"",
    description:  "",
    website: "",
    location:"",
    file: "",
  });

  useEffect(()=>{
    setInput({
      name: singleCompany.name || "",
      description: singleCompany.description || "",
      website: singleCompany.website || "",
      location: singleCompany.location || "",
      file: "",
    })
  },[singleCompany])
  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("website", input.website);
    formData.append("location", input.location);
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${COMPANY_API_END_POINT}/update/${companyId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true,
      })
      if (res.data.success) {
        navigate("/admin/companies")
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

      <div className='w-1/3 max-w-6xl bg-white my-5 mx-auto shadow-xl px-7'>
        <div>
          <h1 className='font-bold text-2xl my-5 pt-10 pb-5'>Company Setup</h1>
        </div>
        <div className='grid grid-cols-2 gap-5'>
          <div>
            <Label className='font-bold text-md '>Company Name</Label>
            <Input type="text" placeholder="Company name" name="name" value={input.name} onChange={changeEventHandler} />
          </div>
          <div>
            <Label className='font-bold text-md '>Description</Label>
            <Input type="text" placeholder="Description" name="description" value={input.description} onChange={changeEventHandler} />
          </div>
          <div>
            <Label className='font-bold text-md '>Website</Label>
            <Input type="text" placeholder="Website name" name="website" value={input.website} onChange={changeEventHandler} />
          </div>
          <div>
            <Label className='font-bold text-md '>Location</Label>
            <Input type="text" placeholder="Location" name="location" value={input.location} onChange={changeEventHandler} />
          </div>
          <div>
            <Label className='font-bold text-md '>Logo</Label>
            <Input type="file" placeholder="Logo" name="name"  onChange={changeFileHandler} />
          </div>
        </div>
        {Loading ? (
          <Button  className="w-full my-3">
            <Loader2 /> Please Wait!!!{" "}
          </Button>
        ) : (
            <Button onClick={submitHandler} type="submit" className="w-full mt-5 mb-10">
            {" "}
            Update{" "}
          </Button>
        )}

      </div>
    </div>
  );
}

export default CompanySetup;
