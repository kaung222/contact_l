import { Table } from "@mantine/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useGetContactQuery } from "../../features/api/ContactApi"
import { addContacts } from "../../features/services/ContactSlice"
import { useSearchByNameQuery } from "../../features/api/ContactApi"


const Content = () => {
  const token = localStorage.getItem("token")
  const { data } = useGetContactQuery(token);
  const contacts = useSelector((state) => state.ContactSlice.contacts);
  const search = useSelector((state) => state?.ContactSlice.search)
  const page = 1;
  const searchContent = useSearchByNameQuery({token,search,page})
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addContacts(data?.contacts.data));
  }, [data, dispatch]);
  const newContact = search === '' ? contacts : searchContent?.data?.contacts?.data;
  console.log(newContact)
  return (
    <>
      <div className="w-full">
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
            {newContact.map((contact,index) => {
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
 