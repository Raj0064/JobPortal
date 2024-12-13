import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "./ui/badge";
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const { appliedJobs } = useSelector(store => store.job)
  console.log(appliedJobs);

  return (
    <Table className="w-full">
      <TableCaption>List of Applied Jobs</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Job Role</TableHead>
          <TableHead>Company</TableHead>
          <TableHead className="text-right">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {appliedJobs.map((job) => (
          <TableRow key={job._id}>
            <TableCell className="font-medium">{job?.createdAt?.split("T")[0]}</TableCell>
            <TableCell>{job?.job?.title}</TableCell>
            <TableCell>{job?.job?.company?.name}</TableCell>
            <TableCell className="text-right">
              <Badge className={`${job?.status === "pending" ? `bg-gray-600` : `${job?.status === "accepted" ? `bg-green-600` : `bg-red-600`}`} `}>{job?.status}</Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default AppliedJobTable;
