import React, { useState } from 'react'
import Header from './Header'
import { UserCircleIcon } from '@heroicons/react/24/solid'

function EmployeePage() {
  return (
    <div className='border border-gray-600 w-1/2'>
    <div>
        <h1 className='text-xl font-bold p-3'>Employee</h1>
    </div>
    <div className='p-3'>
    <div className='flex justify-center border border-gray-300 p-4 rounded-md'>
      <div className='flex items-center py-3'>
      <UserCircleIcon/>
        <div>
            <h1 className='font-bold'>Julie Taylor</h1>
            <p className='text-gray-500'>VP of Marketing</p>
        </div>
      </div>
    </div>
    <div className='flex flex-col justify-center text-left border border-gray-300 p-3'>
        <h1 className='font-bold'>Call Office</h1>
        <p>781-000-0002</p>
    </div>     
    <div className='flex flex-col justify-center text-left border border-gray-300 p-3'>
        <h1 className='font-bold'>Call Mobile</h1>
        <p>781-000-0002</p>
    </div>     
    <div className='flex flex-col justify-center text-left border border-gray-300 p-3'>
        <h1 className='font-bold'>SMS</h1>
        <p>617-000-0002</p>
    </div>     
    <div className='flex flex-col justify-center text-left border border-gray-300 p-3'>
        <h1 className='font-bold'>Email</h1>
        <p>jtaylor@fakeemail.com</p>
    </div>     
    </div>
       
</div>
)
}

export default EmployeePage