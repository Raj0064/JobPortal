import React, { useState } from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '@radix-ui/react-label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { COMPANY_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { useDispatch } from 'react-redux';
import { setSingleCompany } from '@/redux/companySlice';

const CompanyCreate = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState();

  const registerNewCompany = async () => {
    try {
      const res = await axios.post(`${COMPANY_API_END_POINT}/register`, { companyName }, {
        headers: {
          'Content-Type': 'application/json'
        }
        , withCredentials: true
      })
      console.log(res)
      if (res?.data?.success) {
        dispatch(setSingleCompany(res.data.company));
        toast.success(res.data.message);
        const companyId = res?.data?.company?._id;
        navigate(`/admin/companies/${companyId}`);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  }
  return (
    <div>
      <Navbar />
      <div className='mx-auto max-w-7xl bg-white shadow-xl my-5 p-8'>
        <div className='mb-10'>
          <h1 className='font-bold text-2xl '>Your Company Name</h1>
          <p className='text-gray-500 text-sm'>What would you like to give your company name? You can change this later.</p>
        </div>
        <Label className='font-bold text-lg'>Company Name</Label>
        <Input type="text" onChange={(e) => setCompanyName(e.target.value)} className="my-2" placeholder="JobHunt , Microsoft " />

        <div className='flex gap-4 my-8'>
          <Button variant="outline" onClick={() => navigate("/admin/companies")}>Cancel</Button>
          <Button onClick={registerNewCompany}>Continue</Button>
        </div>
      </div>
    </div>
  );
}

export default CompanyCreate;
