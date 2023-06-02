// import React from 'react'
import {RiContactsLine} from 'react-icons/ri'

import { NavLink } from "react-router-dom"

const LeftSidebar = () => {
  return (
<div className=' w-[300px] bg-stone-200 h-[1000px] hidden sm:block text-black'>
        <div className="">
            <h1 className=' text-2xl text-white font-bold text-center'>MMS-Contact</h1>
        </div>
        <div className=" text-[#7C8A97]">
            <ul className='flex-col flex gap-6 items-center'>
                <NavLink to={'/'}>
                    <li className=' text-xl'>
                      <div className=" flex gap-5 items-center">
                          <RiContactsLine />
                            <h1>Contacts</h1>
                      </div>
                    </li>
                </NavLink>
                <NavLink to={'/'}>
                    <li className=' text-xl'>
                        <h1>Create contact</h1>
                    </li>
                </NavLink>
                <NavLink to={'/'}>
                    <li className=' text-xl'>
                        <h1>Profile</h1>
                    </li>
                </NavLink>
            </ul>
        </div>
    </div>
  );
};

export default LeftSidebar;
