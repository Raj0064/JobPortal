import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useDispatch, useSelector } from 'react-redux';
import { FileIcon, FileImageIcon } from 'lucide-react';
import { Button } from '../ui/button';
import axios from 'axios';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import { toast } from 'sonner';
import { setApplicants } from '@/redux/applicantSlice';

const ApplicantsTable = () => {
  const dispatch = useDispatch();
  const { applicants } = useSelector(store => store.applicant)
  const statusHandler = async (status, appId) => {
    try {
      const res = await axios.post(`${APPLICATION_API_END_POINT}/status/${appId}/update`, { status }, { withCredentials: true })
      if (res.data.success) {
        setApplicants((prev) => prev.map((app) => app._id === appId ? { ...app, status } : app)
        );
        toast.success(res.data.message)
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <div>
      <Table>
        <TableCaption>A list of applications.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead >Full Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Contact</TableHead>
            <TableHead>Resume</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Accepted/Rejected</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants.length == 0 ? <span>No Applicants</span> : (
            applicants.map((app) => (
              <TableRow key={app._id}>
                <TableCell className="font-medium">{app?.applicant?.fullname}</TableCell>
                <TableCell>{app?.applicant?.email}</TableCell>
                <TableCell>{app?.applicant?.phoneNumber}</TableCell>
                {app?.applicant?.profile?.resume ? <TableCell ><a href={app?.applicant?.profile?.resume}><FileIcon className='w-5 ' /></a></TableCell> : <TableCell>NA</TableCell>}
                <TableCell>{app?.applicant?.createdAt.split("T")[0]}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-center items-center space-x-2">
                    {app?.status === "pending" ? (
                      <>
                        <Button
                          className="bg-green-900 text-white px-4 py-2"
                          onClick={() => statusHandler("accepted", app._id)}
                        >
                          Accept
                        </Button>
                        <Button
                          className="bg-red-600 text-white px-4 py-2"
                          onClick={() => statusHandler("rejected", app._id)}
                        >
                          Reject
                        </Button>
                      </>
                    ) : (
                      <span className={`text-sm font-medium ${app?.status === "accepted" ? "text-green-600" : "text-red-600"}`}>
                        {app?.status.charAt(0).toUpperCase() + app?.status.slice(1)}
                      </span>
                    )}
                  </div>
                </TableCell>

              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

    </div>
  );
}

export default ApplicantsTable;
