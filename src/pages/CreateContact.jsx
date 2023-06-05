// import React from 'react'

const CreateContact = () => {
  return (
    <div className=''>
    <div className=" flex">
      <div className=" mt-20 p-10 ml-20 border rounded-md border-stone-300 bg-stone-100 w-[600px] shadow-xl h-screen">
        <form action="">
        <div className=" mt-5">
          <label htmlFor="">Name</label>
          <input
          name='name'
          type="text" className="bg-white mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="" required/>
        </div>
        <div className=" mt-5">
          <label htmlFor="">Phone</label>
          <input
          name='phone'
          type="number" className="bg-white mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="" required/>
        </div>
        <div className=" mt-5">
          <label htmlFor="">Email</label>
          <input
          name='email'
          type="email" className="bg-white mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 " placeholder="" required/>
        </div>
        <div className=" mt-5">
          <label htmlFor="">Address</label>
          <input
          name='address' 
          type="text" className="bg-white mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block pl-10 p-2.5 w-full " placeholder="" required/>
        </div>
        <div className=" mt-5 modal-action">
          <label htmlFor=" my-modal-6">
          <button type='submit' className=' bg-[#0C3549] text-white px-8 rounded-md py-2'>Create</button>
          </label>
        </div>
        </form>
      </div>
    </div>
</div>
  )
}

export default CreateContact
