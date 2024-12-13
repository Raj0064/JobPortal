import React, { useEffect, useState } from 'react';
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import CompaniesTable from './CompaniesTable';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchCompanyByText } from '@/redux/companySlice';
import useGetAllCompanies from '@/hooks/useGetAllCompanies';

const Companies = () => {
  useGetAllCompanies();
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const [input,setInput]=useState("");

useEffect(()=>{
  dispatch(setSearchCompanyByText(input));
},[input]);

  return (
    <div>
      <Navbar/>
      <div className='mx-auto max-w-7xl bg-white border my-5 p-8'>
        <div className='flex justify-between items-center'>
          <Input className="w-fit" placeholder="Filter by name" onChange={(e)=>setInput(e.target.value)}/>
          <Button onClick={()=>navigate("/admin/companies/create")}>New Company</Button>
        </div>
        <CompaniesTable/>
      </div>
    </div>
  );
}

export default Companies;
