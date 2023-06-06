import { FileInput, TextInput } from "@mantine/core";
import Navbar from "../components/Layout/Navbar";

import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import LeftSidebar from "../components/Dashboard/LeftSidebar";
// import { useEditContactMutation } from "../features/api/ContactApi";
// import { hasLength, useForm } from "@mantine/form";

const Edit = () => {
//   const token = localStorage.getItem("token");
//   const [editContact] = useEditContactMutation();
//   const location = useLocation();
//  const contact = location.state
//   const form = useForm({
//     // initialValues: {
//     //   name: {contact?.name},
//     //   email: {contact?.email},
//     //   phone: {contact?.phone},
//     //   address: {contact?.address},
//     // },

  //   validations: {
  //     name: (contact) =>
  //       contact.length > 2 ? null : "Name must have at least 2 letters",
  //     email: (contact) => (/^\S+@\S+$/.test(contact) ? null : "Invalid email"),
  //     phone: hasLength({ min: 9, max: 11 }),
  //     address: (contact) =>
  //       contact.length > 5 ? null : "Address must have at least 5 letters",
  //   },
  // });
  return (
    <div>
      <Navbar/>
      <br />

      <div className="flex w-full mt-20">
        <LeftSidebar />

        <div className="flex justify-center mt-[150px] ml-[300px] px-20 flex-col w-full items-center h-full">
          <form className="flex flex-col gap-5">
            <h2 className="text-lg mx-auto font-bold my-5">Edit Contact</h2>
            <FileInput
              placeholder="Choose"
              label="Upload New Picture"
              radius="xl"
              size="md"
              className="rounded-full"
              accept="image/jpg"
              icon="+"
              withAsterisk
            />

            <hr />
            <div className=" border px-4 py-2 bg-slate-50">
              <div className="flex gap-5">
                <TextInput
                  placeholder="Update name"
                  label="Full name"
                  withAsterisk
                />
                <TextInput
                  placeholder="Update phone number"
                  label="Phone Number"
                  withAsterisk
                />
              </div>
              <div className="flex gap-5">
                <TextInput
                  placeholder="Update email"
                  label="Email Address"
                  withAsterisk
                />
                <TextInput
                  placeholder="Update address"
                  label="Home Address"
                  withAsterisk
                />
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
            <Link to="/">
              <div className=" font-bold text-lg flex gap-2 items-center">
                <BsArrowLeft />
                Back
              </div>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
