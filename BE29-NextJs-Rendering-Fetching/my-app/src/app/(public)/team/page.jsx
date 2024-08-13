import { getUsers } from '@/helpers/apiFunction';
import React from 'react'

const Team =async () => {
    const users = await getUsers();
    console.log(users)
  return (
    <div className='text-2xl text-center' >
    Team</div>
  )
}

export default Team