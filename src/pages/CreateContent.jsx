import { FileInput, TextInput } from "@mantine/core";
import { hasLength, useForm } from "@mantine/form";
import { Link, useNavigate } from "react-router-dom";
import LeftSidebar from "../components/Dashboard/LeftSidebar";
import Navbar from "../components/Layout/Navbar";
import { useCreateContactMutation } from "../features/api/ContactApi";
import { BsArrowLeft } from "react-icons/bs";

const CreateContent = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  const [createContact] = useCreateContactMutation();
  const nav = useNavigate();

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },

    validations: {
      name: (contact) =>
        contact.length > 2 ? null : "Name must have at least 2 letters",
      email: (contact) => (/^\S+@\S+$/.test(contact) ? null : "Invalid email"),
      phone: hasLength({ min: 9, max: 11 }),
      address: (contact) =>
        contact.length > 5 ? null : "Address must have at least 5 letters",
    },
  });

  return (
    <div>
      <Navbar />
      <div className="flex w-full mt-20">
        <LeftSidebar />

        <div className="flex justify-center mt-4 ml-[300px] px-20 flex-col w-full items-center h-full">
          <form
            onSubmit={form.onSubmit(async (values) => {
              const { data } = await createContact({
                token,
                data: values,
              });
              if (data?.success){
                nav("/");
              }
                console.log(data);

            })}
            className="flex flex-col gap-5"
          >
            <Link to="/">
              <div className=" font-bold text-lg flex gap-2 items-center mt-5">
                <BsArrowLeft />
                Back
              </div>
            </Link>
            <h2 className="text-lg mx-auto font-bold my-5">Create Contact</h2>
            <FileInput
              placeholder="Choose"
              label="Upload Profile Picture"
              radius="xl"
              size="md"
              className="rounded-full"
              accept="image/jpg"
              icon="+"
              withAsterisk
            />

            <hr />
            <div className=" border px-6 py-3 bg-slate-50 flex flex-col gap-10">
              <div className="flex gap-5">
                <TextInput
                  placeholder="Enter name"
                  label="Full name"
                  withAsterisk
                  {...form.getInputProps("name")}
                />
                <TextInput
                  placeholder="Enter phone number"
                  label="Phone Number"
                  withAsterisk
                  {...form.getInputProps("phone")}
                />
              </div>
              <div className="flex gap-5">
                <TextInput
                  placeholder="Enter email"
                  label="Email Address"
                  withAsterisk
                  {...form.getInputProps("email")}
                />
                <TextInput
                  placeholder="Enter address"
                  label="Home Address"
                  withAsterisk
                  {...form.getInputProps("address")}
                />
              </div>
              <div className="flex justify-center items-center">
                <button
                  type="submit"
                  className="px-4 py-1 bg-blue-400 text-white rounded-lg mt-5"
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateContent;
