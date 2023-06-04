import Content from "../Dashboard/Content";
import LeftSidebar from "../Dashboard/LeftSidebar";
// import Navbar from "./Navbar";

const Layout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="container">
        <div className="row flex justify-center w-screen">
          <div className="col">
            <LeftSidebar />
          </div>
          <div className="col">
            <Content />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
