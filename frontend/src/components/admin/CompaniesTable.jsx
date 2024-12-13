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
import { Edit2, MoreHorizontal } from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import useGetAllCompanies from '@/hooks/useGetAllCompanies';
import { useSelector } from 'react-redux';

const CompaniesTable = () => {
  useGetAllCompanies();
    const {companies,searchCompanyByText}=useSelector(store=>store.company);
  const [filterCompany,setFilterCompany]=useState(companies);
  const navigate = useNavigate();
  useEffect(()=>{
    const filteredCompany=companies.length>0 && companies.filter((company)=>{
      if(!searchCompanyByText){
        return true
      };
      return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase())
    })
    setFilterCompany(filteredCompany);
  }, [companies, searchCompanyByText])
  return (
    <div>
      <Table className="w-full">
        <TableCaption>All of your registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.length == 0 ? <span>No Companies Found</span> : (
            filterCompany.map((company) => (
              <TableRow key={company._id}>
                <TableCell className="font-medium"><Avatar className="w-8 h-8">
                  <AvatarImage className='w-fit h-fit' src={company?.logo} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                </TableCell>
                <TableCell>{company?.name}</TableCell>
                <TableCell>{company?.createdAt.split("T")[0]}</TableCell>
                <TableCell className="text-right">
                  <Popover>
                    <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                    <PopoverContent className="max-w-fit shadow-xl bg-white cursor-pointer m-2">
                      <Button onClick={() => navigate(`/admin/companies/${company._id}`)} variant="outline" className='flex items-center gap-3'>
                        <Edit2 className='w-4' /> <span>Edit</span>
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

export default CompaniesTable;
