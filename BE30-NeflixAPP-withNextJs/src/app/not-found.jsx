import Image from 'next/image'
import React from 'react'

const NotFound = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center'>
    <Image src='/images/404-page-not-found.png' width={700} height={700} className='m-auto' alt='not-found' />
    </div>
  )
}

export default NotFound