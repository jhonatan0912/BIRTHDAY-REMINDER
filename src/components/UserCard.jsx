import React from 'react'

function UserCard({ user }) {
  const { image, age, name } = user;
  return (
    <div className='flex gap-3'>
      <img className='rounded-full w-14 h-14' src={image} alt={name} />
      <div>
        <p className='font-semibold'>{name}</p>
        <p className='text-gray-600'>{age} years</p>
      </div>
    </div>
  )
}

export default UserCard