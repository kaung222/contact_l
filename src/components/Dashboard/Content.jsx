import { AiFillPrinter } from "react-icons/ai";
import { BiDotsVerticalRounded, BiExport, BiImport } from "react-icons/bi";
import { useGetContactsQuery } from "../../features/api/ContactApi";
import Table from "./Table";

const Content = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = useGetContactsQuery(token);
  const contacts = response?.data?.contacts.data;
  console.log(contacts);

  // const checkedItem =
  return (
    <>
      <div className="w-full">
        <table className="table w-full mx-2 md:mx-5 mt-5">
          <thead className=" text-slate-500">
            <tr className=" border-b-[1px] border-slate-200 ">
              <th className="py-4">Name</th>
              <th className=" ">Email</th>
              <th className=" ">Phone No.</th>
              <th>
                <button className="px-2 md:px-3 text-lg">
                  <AiFillPrinter />
                </button>
                <button className="px-2 md:px-3 text-lg">
                  <BiExport />
                </button>
                <button className="px-2 md:px-3 text-lg">
                  <BiImport />
                </button>
                <button className="px-2 md:px-3 text-lg">
                  <BiDotsVerticalRounded />
                </button>
              </th>
            </tr>
          </thead>
          {contacts?.length < 1 ? (
            <div className="">
              <p className="text-center">No Contact </p>
              <button className=" btn-primary">Create new</button>
            </div>
          ) : (
            <tbody>
              {contacts?.map((contact) => {
                return <Table contact={contact} contacts={contacts} key={contact.id}/>;
              })}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default Content;
