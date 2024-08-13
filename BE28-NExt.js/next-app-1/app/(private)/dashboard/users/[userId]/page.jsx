import GoBack from '@/components/GoBack'
import React from 'react'

const UserDetail = ({params}) => {
    const {userId }= params
  return (
    <div>
    <h1 className='text-3xl text-center'> USER Details {userId}</h1>
    <GoBack/>
    </div>
  )
}

export default UserDetail

//* dinamik sayfalar için meta-data oluşturma
export async function generateStaticParams() {
    const userArray = [ 1,2,3,4]
    return userArray.map(userId => {
        userId: userId.toString()
    })
}