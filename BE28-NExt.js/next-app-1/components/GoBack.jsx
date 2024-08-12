"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

const GoBack = () => {

    const router = useRouter()
  return (
    <button onClick={()=> router.back()} className='text-amber-800 hover:text-gray-400 hover:bg-gray-800 font-semibold px-4 border border-gray-800 rpunded shadow mt-4'>
        Go Back
    </button>
  )
}

export default GoBack