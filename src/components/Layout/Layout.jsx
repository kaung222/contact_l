import Content from '../Dashboard/Content'
import LeftSidebar from '../Dashboard/LeftSidebar'
import RightSidebar from '../Dashboard/RightSidebar'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <>
    <Navbar/>
    <div className="flex justify-between">
        <LeftSidebar/>
        <Content/>
        <RightSidebar/>
    </div>
    </>
  )
}

export default Layout