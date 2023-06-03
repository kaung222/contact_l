import { Table } from "@mantine/core";
import Cookies from "js-cookie";
import { useGetContactQuery } from "../../redux/api/contactApi";

const Content = () => {
  const token = Cookies.get('token')
  const {data} = useGetContactQuery(token);
  console.log(data);
  return (
    <>
      <div>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Mg Mg</th>
              <th>09123456</th>
              <th>mgmg@gmail.com</th>
              <th>Rangoon, Burma</th>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default Content
