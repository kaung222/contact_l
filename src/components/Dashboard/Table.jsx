import { BsHeart, BsPencil, BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";

const Table = ({ contact, contacts }) => {
  const [showActions, setShowActions] = useState(false);
  const [isChecked, setIsChecked]=useState(false);

  // mouse hover function
  let checkList = [];
  //   const isInCheckList = checkList.find((contact) => contact.id === contact.id);
  const handleMouseEnter = (id) => {
    if (id == contact.id) {
      setShowActions(true);
    }
  };
  const handleMouseLeave = (id) => {
    if (id == contact.id && checkList.length === 0) {
      setShowActions(false);
    }
  };
  const handleCheck = (check, id) => {
    // console.log(isCheck, id);
    const newCheck = contacts.find((contact) => contact.id === id);
    if (check && id == contact.id) {
      setIsChecked(true);
      checkList.push(newCheck);
    // [...checkList,newCheck]
      console.log(checkList);
    }
  };
  return (
    <tr
      key={contact.id}
      className="hover-item h-10 hover:bg-slate-100"
      onMouseEnter={() => handleMouseEnter(contact.id)}
      onMouseLeave={() => handleMouseLeave(contact.id)}
    >
      <td className="text-center pt-5 flex items-center gap-2 text-sm">
        <h1
          className={`w-7 h-7 bg-blue-200 pt-1 rounded-full ${
            showActions || isChecked? "hidden" : ""
          }`}
        >
          {contact.name.substring(0, 1)}
        </h1>
        <input
          type="checkbox"
          className={`${!showActions && !isChecked ? "hidden" : ""} w-5 h-5 check-item `}
          //   checked={showActions}
          onChange={(e) => handleCheck(e.target.checked, contact.id)}
        />
        <h2 className="text-center ">{contact?.name}</h2>
      </td>
      <td className="text-center text-sm">{contact.email}</td>
      <td className="text-center text-sm">{contact.phone}</td>
      <td className={`${showActions || isChecked ? "" : "hidden"} mx-3`}>
        <button className=" mx-3">
          <BsHeart />
        </button>
        <button className=" mx-3">
          <BsPencil />
        </button>
        <button className=" mx-3">
          <BsThreeDotsVertical />
        </button>
      </td>
    </tr>
  );
};

export default Table;
