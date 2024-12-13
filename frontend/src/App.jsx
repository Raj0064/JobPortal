import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Login from './components/auth/Login';
import SignUp from './components/auth/SignUp';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Browse from './components/Browse';
import Profile from './components/Profile';
import JobDescription from './components/JobDescription';
import Companies from './components/admin/Companies';
import CompanyCreate from './components/admin/CompanyCreate';
import CompanySetup from './components/admin/CompanySetup';
import CompanyJobs from './components/admin/CompanyJobs';
import PostJob from './components/admin/PostJob';
import Applicants from './components/admin/Applicants';
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/description/:id",
    element: <JobDescription />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  //Admin Side
  {
    path: "/admin/companies",
    element: <Companies />,
  },
  {
    path: "/admin/companies/create",
    element: <CompanyCreate />,
  },
  {
    path: "/admin/companies/:id",
    element: <CompanySetup />,
  },
  {
    path: "admin/jobs",
    element: <CompanyJobs />,
  },
  {
    path: "admin/job/create",
    element: <PostJob />,
  },
  {
    path: "/admin/companies/:id/applicants",
    element: <Applicants />,
  },
  
]);

function App() {
  
  return (
    <>
      <RouterProvider router={appRouter} />
      
    </>
  );
}

export default App
