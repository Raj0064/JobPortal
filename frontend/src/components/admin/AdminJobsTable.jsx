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
import { Avatar } from '../ui/avatar';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover';
import { Edit2, FileUser, MoreHorizontal, } from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs';

const AdminJobsTable = () => {
  useGetAllAdminJobs();
  const { allAdminJobs, searchJobByText } = useSelector(store => store.job);
  const [filterJobs, setFilterjobs] = useState(allAdminJobs);
  const navigate = useNavigate();


  useEffect(() => {
    const filteredJob = allAdminJobs.length > 0 && allAdminJobs.filter((job) => {
      if (!searchJobByText) {
        return true;
      };
      return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase())
    })
    setFilterjobs(filteredJob);
  }, [allAdminJobs, searchJobByText])
  return (
    <div>
      <Table className="w-full">
        <TableCaption>A list of your recently posted jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allAdminJobs.length == 0 ? <span>No Jobs Found</span> : (
            filterJobs.map((job) => (
              <TableRow key={job._id}>
                <TableCell className="font-medium">{job?.company?.name}</TableCell>
                <TableCell>{job?.title}</TableCell>
                <TableCell>{job?.createdAt?.split("T")[0]}</TableCell>
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                    <PopoverContent className="max-w-fit shadow-xl bg-white cursor-pointer m-2 border-none">
                      <Button onClick={() => navigate(`/admin/companies/${job._id}`)} variant="link" className='flex items-center gap-3'>
                        <Edit2 className='w-4' /> <span>Edit</span>
                      </Button>
                      <Button onClick={() => navigate(`/admin/companies/${job._id}/applicants`)} variant="link" className='flex items-center gap-3'>
                        <FileUser className='w-4' /> <span>Applicants</span>
                      </Button>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            )))}
        </TableBody>
      </Table>
    </div>
  );
}

export default AdminJobsTable;
