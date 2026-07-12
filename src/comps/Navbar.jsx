import React from 'react'


  const Navbar = ({setform, setEditingEmployee, setShowSearch}) => {
    const togSearch = ()=>{
      setShowSearch(prev => !prev)
    }
  return (
    <div className='w-full text-[#634F40] bg-[#FADCAC] py-5 flex flex-col gap-5 items-center'>
      <h1 className='text-3xl font-serif font-bold text-center'>Employee Directory</h1>
      <div className='flex gap-[5rem] w-[50%] justify-center font-bold'>
        <button className='border p-2 rounded-lg' onClick={togSearch}>Search</button>
        <button className='border p-2 rounded-lg' onClick={()=> {
          setEditingEmployee(null);
          setform(prev => !prev);
        }}>+ Add Employee</button>
      </div>
    </div>
  )
}

export default Navbar