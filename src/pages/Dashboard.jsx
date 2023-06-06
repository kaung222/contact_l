// import Content from "../components/Dashboard/Content";
// import LeftSidebar from "../components/Dashboard/LeftSidebar";
import { Loader } from "@mantine/core";
import { useGetContactQuery } from "../features/api/ContactApi";
import Content from "../components/Dashboard/Content"
// import Content from "../components/Dashboard/Content"



const Dashboard = () => {
  const token = localStorage.getItem("token")
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
      <div className="">
          <Content />
      </div>
    </>
  );
};

export default Dashboard;
