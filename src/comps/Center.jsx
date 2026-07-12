import React from 'react'

const Center = ({users}) => {
  const total = users.length;
  const active = users.filter(user => user.isActive).length;
  const inactive = total - active;
  return (
    <div className='flex justify-around bg-[#FADCAC] py-5 text-xl font-semibold mt-1'>
        <h1>Total : {total}</h1>
        <h1>Active : {active}</h1>
        <h1>Inactive : {inactive}</h1>
    </div>
  )
}

export default Center