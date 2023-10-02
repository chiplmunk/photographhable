import React from 'react'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between'>
       <div className='flex p-4'>
            <h1 className='font-bold text-3xl mr-4'>Photographable</h1>
            <img src='/images.png' style={{ height: '36x', width: '36px' }} alt='Your Image Alt Text'/>
       </div>
       <div className='flex p-6'>
            <Link href='/profile' className='font-medium text-xl mr-8'>Profile</Link>
            <Link href='/' className='font-medium text-xl mr=8'>Gallery</Link>
            <div className='px-8'>
            <UserButton/>
            </div>
       </div>
    </div>
  )
}

export default Navbar
