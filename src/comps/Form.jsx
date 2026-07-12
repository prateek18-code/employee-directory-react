
import React, { useEffect, useState } from 'react'

const Form = ({addEmployee, editingEmployee, updateEmployee, setEditingEmployee, setShowForm}) => {


  const [inputs, setInputs] = useState({})
  const handle = (e)=>{
    e.preventDefault();
    if(editingEmployee){
      updateEmployee(inputs);
    }else{
      addEmployee(inputs);
    }
    setInputs({});
    setEditingEmployee(null);
    setShowForm(false);
  }
  useEffect(()=>{
    if(editingEmployee){
      setInputs(editingEmployee);
    }
  }, [editingEmployee]
  )
  return (
    <div className='p-5 flex items-start justify-start'>
      <form onSubmit={handle} className='h-fit w-[20rem] bg-red-300  flex flex-col gap-2 p-10'>
        <input required  type="text" placeholder='name' value={inputs.name || ""} className='border p-2' onChange={(e)=> setInputs({...inputs, name: e.target.value})}/>
        <input required type="text" placeholder='image'value={inputs.image || ""} className='border p-2' onChange={(e)=> setInputs({...inputs, image: e.target.value})} />
        <input required  type="number" placeholder='age' value={inputs.age || ""} className='border p-2' onChange={(e)=> setInputs({...inputs, age: Number(e.target.value)})} />
        <input required  type="text" placeholder='Role' value={inputs.role || ""} className='border p-2' onChange={(e)=> setInputs({...inputs, role : e.target.value})} />
        <input required type="text" placeholder='department' value={inputs.department || ""} className='border p-2' onChange={(e)=> setInputs({...inputs, department: e.target.value})} />
        <input required  type="number" placeholder='Salary' value={inputs.salary || ""} className='border p-2' onChange={(e)=> setInputs({...inputs, salary: Number(e.target.value)})} />
        <input required  type="email" placeholder='email' value={inputs.email || ""} className='border p-2' onChange={(e)=> setInputs({...inputs, email: e.target.value})} />
        <input required  type="text" placeholder='isactive(t/f)' value={inputs.isActive || ""} className='border p-2' onChange={(e)=> setInputs({...inputs, isActive: e.target.value})} />

        <button className='bg-blue-300 w-[50%]'>submit</button>
      </form>
    </div>
  )
}

export default Form