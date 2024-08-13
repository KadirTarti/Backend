import GoBack from '@/components/GoBack'
import React from 'react'

export const metadata = {
  title: "Settings Page",
  description: "Settings Page",
};

const Settings = () => {
  return (
    <div className='text-xl font-bold underline text-center'>
        <h1>SETTINGS PAGE</h1>
        <GoBack/>
    </div>
  )
}

export default Settings