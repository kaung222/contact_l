import {AiFillPrinter} from "react-icons/ai"
import {BiDotsVerticalRounded, BiExport, BiImport} from "react-icons/bi"

const Content = () => {
  return (
    <>
      <div className="w-full">
        <table className="table w-full mt-5">
          <thead className="">
            <tr className=" border-b-[1px] border-slate-200">
              <th className="py-4">Name</th>
              <th>Email</th>
              <th>Phone No.</th>
              <th>
                <button className="px-3 text-lg"><AiFillPrinter/></button>
                <button className="px-3 text-lg"><BiExport/></button>
                <button className="px-3 text-lg"><BiImport/></button>
                <button className="px-3 text-lg"><BiDotsVerticalRounded/></button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center pt-5 text-sm">James</td>
              <td className="text-center pt-5 text-sm">James@gmail.com</td>
              <td className="text-center pt-5 text-sm">09797961628</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Content;
