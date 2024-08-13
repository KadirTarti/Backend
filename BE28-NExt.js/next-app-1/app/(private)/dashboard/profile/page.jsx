import React from 'react'
import GoBack from "@/components/GoBack";

export const metadata = {
  title: "Profile Page",
  description: "Profile Page",
};

const Profile = () => {
  return (
    <div className='text-xl font-bold underline text-center'>
        <h1>PROFILE PAGE</h1>
        <GoBack/>
    </div>
  )
}

export default Profile