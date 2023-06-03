import { Table } from "@mantine/core";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetContactQuery } from "../../features/api/ContactApi";
import { addContacts } from "../../features/services/ContactSlice";


const Content = () => {
  const token = localStorage.getItem("token");
  const {data} = useGetContactQuery(token);
  console.log(data);
  const contacts = useSelector((state) => state.ContactSlice.contacts);
  const dispatch = useDispatch()
  console.log(contacts);
  useEffect(() => {
    dispatch(addContacts(data))
  }, [data])
  return (
    <>
      <div>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
    <tbody>
      <tr>
        <th>{data}</th>
      </tr>
    </tbody>
        </Table>
      </div>
    </>
  );
};

export default Content;
