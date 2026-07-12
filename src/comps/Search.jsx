import React from 'react'

const Search = ({search, setSearch}) => {
  return (
    <div className='flex justify-center items-center gap-9'>
      <input type="text" onChange={e=> setSearch(e.target.value)} value={search} placeholder='Search Employee...'className='w-[50%] p-3 ps-9 text-black border-none my-4 rounded-3xl bg-white' />
    </div>
  )
}

export default Search