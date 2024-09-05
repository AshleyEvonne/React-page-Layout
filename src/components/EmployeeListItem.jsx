import React from 'react'

function EmployeeListItem({name, title, image}) {
  return (
    <div className='text-bold'>
        <h1>{name}</h1>
        <h2>{title}</h2>


    </div>
  )
}

export default EmployeeListItem