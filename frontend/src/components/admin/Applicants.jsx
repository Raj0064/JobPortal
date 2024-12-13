import React from 'react';
import Navbar from '../shared/Navbar';
import ApplicantsTable from './ApplicantsTable';
import useGetAllApplicants from '@/hooks/useGetAllApplicants';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Applicants = () => {
  const {id}=useParams();
  useGetAllApplicants(id);
  const {applicants}=useSelector(store=>store.applicant)
  return (
    <div>
      <Navbar/>
      <div className='max-w-6xl mx-auto bg-white m-2 p-2'>
      <h1 className='font-bold text-lg my-2'>Applicants({applicants?.length})</h1>
      <ApplicantsTable/>
      </div>
    </div>
  );
}

export default Applicants;
