"use client"
import React from 'react'
import ProfileCard from './ProfileCard'
import { useSelector } from 'react-redux';

const profileImages = [
    "/images/default-blue.png",
    "/images/default-red.png",
    "/images/default-slate.png",
    "/images/default-green.png",
  ];

const CardContainer = () => {
    const {currentUser}= useSelector(state => state.auth)
  return (
    <div className='flex flex-col md:flex-row'>
    {profileImages.map((image, index) => {
        
    <ProfileCard key={index} image={image} name={index == 0 && currentUser ? currentUser?.display : `Guest-${index+1}`}/>
    })}
    </div>
  )
}

export default CardContainer