import { FileInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import LeftSidebar from "../components/Dashboard/LeftSidebar";
import Navbar from "../components/Layout/Navbar";
import { useEditContactMutation } from "../features/api/ContactApi";

const Edit = () => {
  const token = JSON.parse(localStorage.getItem("token"))
  console.log(token);
  const [editContact] = useEditContactMutation();
  return (
    <>
      <Navbar />
      <div className="flex gap-5 mt-20">
        <LeftSidebar />

        <div className="flex justify-center mt-4 ml-[300px] px-20 flex-col w-full items-center h-full">
          <form className="flex flex-col gap-5">
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
