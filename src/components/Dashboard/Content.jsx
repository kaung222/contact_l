import { Table } from "@mantine/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetContactQuery } from "../../features/api/ContactApi";
import { addContacts } from "../../features/services/ContactSlice";


const Content = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const {data} = useGetContactQuery(token);
  console.log(data?.contacts.data);
  const contacts = useSelector((state) => state.ContactSlice.contacts);
  const dispatch = useDispatch();
  console.log(contacts);
  useEffect(() => {
    dispatch(addContacts(data?.contacts.data));
  }, [data, dispatch])

  const row = contacts?.map((contact) =>{
    return (
      <tr
        key={contact?.id}
        className="flex justify-between items-center border bg-slate-50 w-full py-6 text-right hover:bg-slate-100 "
      >
        <td>{contact?.name}</td>
        <td>{contact?.email}</td>
        <td>{contact?.phone}</td>
        <td>{contact?.address}</td>
      </tr>
    );
  } )


  return (
    <>
      <div>
        <Table >
          <thead>
            <tr className=" flex justify-around items-center border  py-4 text-center bg-blue-400 shadow">
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody className="flex flex-wrap">{row}</tbody>
        </Table>
      </div>
    </>
  );
};

export default Content;
