
import { setApplicants } from "@/redux/applicantSlice";
import { APPLICATION_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const useGetAllApplicants = (jobId) => {
  const {applicants}=useSelector(store=>store.applicant)
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const res = await axios.get(`${APPLICATION_API_END_POINT}/${jobId}/applicants`, {
          withCredentials: true,
        });
        if(res.data.success)
        {
          dispatch(setApplicants(res.data.job.application));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchApplicants();
  }, [dispatch,applicants]);
};

export default useGetAllApplicants;
