import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection';
import CategoryCarousel from './CategoryCarousel';
import LatestJobs from './LatestJobs';
import Footer from './Footer';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  useGetAllJobs();
  const {user}=useSelector(store=>store.auth);
  useEffect(()=>{
    if(user ?.role==='recruiter')
    {
      navigate("/admin/companies")
    }
  },[]);
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <CategoryCarousel/>
      <LatestJobs/>
      <Footer/>
    </div>
  );
}

export default Home;