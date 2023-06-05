import { Table } from "@mantine/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetContactQuery } from "../../features/api/ContactApi";
import { addContacts } from "../../features/services/ContactSlice";

const Content = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const { data } = useGetContactQuery(token);
  console.log(data?.contacts.data);
  const contacts = useSelector((state) => state.ContactSlice.contacts);
  const dispatch = useDispatch();
  console.log(contacts);
  useEffect(() => {
    dispatch(addContacts(data?.contacts.data));
  }, [data, dispatch]);

  return (
    <>
      <div className="w-full ml-[280px]">
        <Table horizontalSpacing="xl">
          <thead className="fixed w-[1180px]">
            <tr className=" flex justify-around items-center  py-4 px-1 text-center bg-white ">
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Job</th>
            </tr>
          </thead>
          <tbody className="">
            {contacts?.map((contact,index) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <Link to={`/detail/${contact?.id}`} state={contact}>
                  <tr
                    key={contact?.id}
                    className={`flex justify-around items-center border py-8 ${index === 0 && "mt-10"} shadow hover:bg-slate-100`}
                  >
                    <td>{contact?.name}</td>
                    <td colSpan={2}>{contact?.email}</td>
                    <td>{contact?.phone}</td>
                    <td>{contact?.address.substring(0, 10)}...</td>
                  </tr>
                 </Link>
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Content;
 