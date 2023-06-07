import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import LeftSidebar from "../components/Dashboard/LeftSidebar";
import Navbar from "../components/Layout/Navbar";
import {
  useEditContactMutation,
  useSingleGetContactQuery,
} from "../features/api/ContactApi";

const Edit = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const { id } = useParams();
  const { data } = useSingleGetContactQuery({ id, token });
  const contacts = data?.contact;

  const [name, setName] = useState(contacts?.name);
  const [phone, setPhone] = useState(contacts?.phone);
  const [email, setEmail] = useState(contacts?.email);
  const [address, setAddress] = useState(contacts?.address);



  const nav = useNavigate();

  const [editContact] = useEditContactMutation();

  useEffect(() => {
    setName(contacts?.name)
    setPhone(contacts?.phone)
    setEmail(contacts?.email)
    setAddress(contacts?.address)
  }, []);

  const editContactHandler = (e) => {
    e.preventDefault();
    const newData = { id, name, phone, email, address};
    editContact(newData);
    nav("/");
  };
  return (
    <>
      <Navbar />
      <div className="flex gap-5 mt-20">
        <LeftSidebar />

        <div className="flex justify-center mt-4 ml-[300px] px-20 flex-col w-full items-center h-full">
          <form className="flex flex-col gap-5" onSubmit={editContactHandler}>
            <Link to="/">
              <div className=" font-bold text-lg flex gap-2 items-center mt-5">
                <BsArrowLeft />
                Back
              </div>
            </Link>
            <h2 className="text-lg mx-auto font-bold my-5">Edit Contact</h2>
            <div className=" flex flex-col gap-2">
              <label htmlFor="name" className="font-bold">
                Edit Your Picture
              </label>
              <input
                type="file"
                placeholder="Edit your picture"
                className="  px-4 py-1 rounded-full bg-slate-50"
                radius="xl"
                size="md"
                accept="image/jpg"
              />
            </div>

            <div className="flex flex-col gap-5 bg-slate-50 px-10 py-10 rounded shadow-lg">
              <div className="flex flex-wrap gap-5">
                <div className=" flex flex-col gap-2">
                  <label htmlFor="name" className="font-bold">
                    Name :
                  </label>
                  <input
                    type="text"
                    placeholder="Edit your name"
                    className="  px-4 py-1 rounded"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className=" flex flex-col gap-2">
                  <label htmlFor="name" className="font-bold">
                    Phone :
                  </label>
                  <input
                    type="text"
                    placeholder="Edit your number"
                    className="  px-4 py-1 rounded"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-5">
                <div className=" flex flex-col gap-2">
                  <label htmlFor="name" className="font-bold">
                    Email :
                  </label>
                  <input
                    type="text"
                    placeholder="Edit your email"
                    className=" px-4 py-1 rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className=" flex flex-col gap-2">
                  <label htmlFor="name" className="font-bold">
                    Address :
                  </label>
                  <input
                    type="text"
                    placeholder="Edit your address"
                    className=" px-4 py-1 rounded"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="px-4 py-1 bg-blue-400 text-white rounded-lg mt-5"
                >
                  Edit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Edit;
