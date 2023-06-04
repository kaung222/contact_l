// import Content from "../components/Dashboard/Content";
// import LeftSidebar from "../components/Dashboard/LeftSidebar";
import { Loader } from "@mantine/core";
import Layout from "../components/Layout/Layout";
import Navbar from "../components/Layout/Navbar";
import { useGetContactQuery } from "../features/api/ContactApi";



const Dashboard = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const { isLoading } = useGetContactQuery(token);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader/>
      </div>
    );
  }
  return (
    <>
      <Navbar />
      <div className="flex w-full">
        {/* <LeftSidebar />
         <Content/> */}
         <Layout/>
      </div>
    </>
  );
};

export default Dashboard;
