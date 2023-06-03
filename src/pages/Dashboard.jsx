import Content from "../components/Dashboard/Content";
import LeftSidebar from "../components/Dashboard/LeftSidebar";
import Navbar from "../components/Layout/Navbar";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="flex w-full">
        <LeftSidebar />
         <Content/>
      </div>
    </>
  );
};

export default Dashboard;
