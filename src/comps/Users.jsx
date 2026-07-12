import React from 'react'

const Users = ({user, deleteEmployee, editEmployee}) => {

    const deleteId = (e)=>{
        deleteEmployee(user.id);
    }
    const edited = ()=>{
        editEmployee(user);
    }
  return (
    
    <div className='py-10 px-5'>
        <div className='p-5 py-8 w-fit border border-black flex flex-col flex-wrap items-center justify-center gap-2 bg-[#c6cbd3] rounded-2xl'>
            <img className='h-[130px] w-[130px] rounded-full object-cover' src={user.image} alt="emplyee's image" />
            <div className='flex flex-col justify-start w-full '>
                <h1 className='font-semibold text-xl'>Name : {user.name}</h1>
                <h1 className='font-semibold text-xl'>{user.role}</h1>
                <h1>age : {user.age}</h1>
                <h1>email : {user.email}</h1>
                <h1>salary : {user.salary}</h1>
                <h1>{user.department}</h1>
                <h1 className={`w-fit font-bold  ${user.isActive  ? "text-green-600" : "text-red-600"}`}>{user.isActive  ? "Active" : "inActive"} </h1>
            </div>
            <div className='w-full flex gap-10 mt-2'>
                <button className='p-1 px-3 bg-[#102127] text-[#FADCAC] rounded-md'onClick={edited} >Edit</button>
                <button className='p-1 bg-[#102127] text-[#FADCAC] rounded-md'onClick={deleteId} >Delete</button>
            </div>
        </div>
    </div>
    
  )
}

export default Users