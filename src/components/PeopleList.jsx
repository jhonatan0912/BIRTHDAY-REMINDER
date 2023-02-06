import React, { useState, useEffect } from 'react'
import data from "./../api/data";
import UserCard from './UserCard';

function PeopleList() {
  const [people, setPeople] = useState(data)

  return (
    <div className='bg-white p-4 rounded-md w-80 flex flex-col gap-6'>
      <h1 className='font-semibold text-2xl'>{people.length} birthdays today</h1>
      <div className='flex flex-col gap-5'>
        {
          people.map((user) => (
            <UserCard user={user} key={user.id} />
          ))
        }
      </div>
      <button
        className='bg-pink-400 text-white font-semibold block w-full py-2 rounded active:scale-95'
        onClick={() => setPeople([])}>Clear all</button>
    </div>
  )
}

export default PeopleList