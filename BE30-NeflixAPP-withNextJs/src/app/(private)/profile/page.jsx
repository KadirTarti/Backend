import React from 'react'
import CardContainer from './components/CardContainer'

const Profile = () => {
  return (
    <div className='flex items-center justify-center pt-20'>
        <div className='flex flex-col'>
            <h1>Who is watsching?</h1>
            <CardContainer/>
        </div>
    </div>
  )
}

export default Profile


export const metadata = {
    title: "Profile",
    desc: "This is Profile Page",
}

