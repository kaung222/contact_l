import { AiFillPrinter } from "react-icons/ai";
import { BiDotsVerticalRounded, BiExport, BiImport } from "react-icons/bi";
import { useGetContactsQuery } from "../../features/api/ContactApi";
import { useState } from "react";
import { BsHeart, BsPencil, BsThreeDotsVertical } from "react-icons/bs";

const Content = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const response = useGetContactsQuery(token);
  const [showActions, setShowActions] = useState(false);
  const contacts = response?.data?.contacts.data;
  console.log(contacts);
  // mouse hover function
  const hoverHandler = (id) => {
    console.log(id);
  };
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
                return (
                  <tr
                    key={contact.id}
                    className="hover-item h-10 hover:bg-slate-100"
                    // onMouseOver={() => hoverHandler(contact.id)}
                  >
                    <td className="text-center pt-5 flex items-center gap-2 text-sm">
                      <h1 className="w-7 h-7 hover-invisible bg-blue-200 pt-1 rounded-full">
                        {contact.name.substring(0, 1)}
                      </h1>
                      <input type="checkbox" className="hidden w-5 h-5 check-item hover-visible" />
                      <h2 className="text-center ">{contact.name}</h2>
                    </td>
                    <td className="text-center text-sm">{contact.email}</td>
                    <td className="text-center text-sm">{contact.phone}</td>
                    <td className=" hidden hover-visible mx-3">
                      <button className=" mx-3"><BsHeart /></button>
                      <button className=" mx-3"><BsPencil /></button>
                      <button className=" mx-3"><BsThreeDotsVertical /></button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
};

export default Content;
