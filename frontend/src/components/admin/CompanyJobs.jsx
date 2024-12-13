import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchJobByText } from '@/redux/jobSlice';
import AdminJobsTable from './AdminJobsTable';
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs';

const CompanyJobs = () => {
  useGetAllAdminJobs();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input]);

  return (
    <div>
      <Navbar />
      <div className='mx-auto max-w-7xl bg-white border my-5 p-8'>
        <div className='flex justify-between items-center'>
          <Input className="w-fit" placeholder="Filter by name" onChange={(e) => setInput(e.target.value)} />
          <Button onClick={() => navigate("/admin/job/create")}>New Job</Button>
        </div>
        <AdminJobsTable/>
      </div>
    </div>
  );
}

export default CompanyJobs;
