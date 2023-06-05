import Content from "../Dashboard/Content";
import LeftSidebar from "../Dashboard/LeftSidebar";
// import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
    <div className="flex w-full mt-20">
      <LeftSidebar/>
      <Content/>
    </div>
    </>
  );
};

export default Layout;
