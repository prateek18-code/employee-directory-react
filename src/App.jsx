import React, { useEffect, useState } from 'react'
import Users from './comps/Users'
import Navbar from './comps/Navbar'
import Center from './comps/Center'
import { nanoid } from 'nanoid'
import Form from './comps/Form'
import Search from './comps/Search'

const defaultUsers =  [
    {
      id: nanoid(),
      name: "Vijay Patidar",
      image: "https://plus.unsplash.com/premium_photo-1727942419945-1908baae3c8e?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      age:20,
      role: "Frontend Developer",
      department: "IT",
      salary: 35000,
      email:"vijaypatidar@fakemail.com",
      isActive: true
    },
    {
      id: nanoid(),
      name: "Rahul Sharma",
      image: "https://images.unsplash.com/photo-1582015752624-e8b1c75e3711?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      age:22,
      role: "Fullstack developer",
      department: "IT",
      salary: 350000,
      email:"rahulsharmaaaaa@fakemail.com",
      isActive: true
    },
    {
      id: nanoid(),
      name: "Rohit Sharma",
      image: "https://images.unsplash.com/photo-1640531005376-4bd5aacd57c6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      age: 26,
      role: "Data Analyst",
      department: "IT",
      salary: 25000,
      email:"rohitdata@fakemail.com",
      isActive: false
    },
   ]

const App = () => { 

  let [users, setUsers] = useState(
    ()=>{
      const savedData = localStorage.getItem("employee");
      if(savedData){
        return JSON.parse(savedData);
      }else{
        return defaultUsers;
      }
    }
  )
  const addEmployee = (employee)=>{
    setUsers((prev) => 
      [...prev, {
        ...employee,
        id: nanoid()
      }
      ]);
  }
  const deleteEmployee = (employeeId)=>{
    setUsers(users.filter(user => user.id !== employeeId))
  }
  let [showForm, setShowForm] = useState(false);
  let [editingEmployee, setEditingEmployee] = useState(null);

  const editEmployee = (editEm)=>{
    setEditingEmployee(editEm);
    setShowForm(true);
  }
  const updateEmployee = (updatedEmployee) =>{
    setUsers(users.map((user)=>{
      if(user.id === updatedEmployee.id){
        return updatedEmployee;
      }
      return user;
    }))
  }
  useEffect(()=>{
    localStorage.setItem("employee", JSON.stringify(users))
  }, [users])

  let id=17;
  let [showSearch, setShowSearch] = useState(false);
  let [search, setSearch] = useState("")
  
  
  return (
    <div className='min-h-screen w-[100%] bg-[#634F40] p-6' >
      <Navbar setform={setShowForm} setEditingEmployee={setEditingEmployee} setShowSearch={setShowSearch}/>
      <Center users={users} />
      {
        showSearch && <Search search={search} setSearch={setSearch} />
      }
      {
        showForm && <Form key={id} addEmployee ={addEmployee} editingEmployee={editingEmployee} updateEmployee={updateEmployee} setEditingEmployee={setEditingEmployee} setShowForm={setShowForm} />
      }
      <div className='flex flex-wrap'>
        {
          users.filter((user)=>{
            return user.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((obj)=>{
            return <Users key={obj.id} user={obj} deleteEmployee={deleteEmployee} editEmployee={editEmployee} />
          })
        }
      </div>
    </div>
  )
}

export default App