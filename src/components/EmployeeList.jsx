import React, { useState } from 'react'
import EmployeeListItem from './EmployeeListItem'
// import { useState } from 'react'
import { UserCircleIcon } from '@heroicons/react/24/solid'
import SearchBar from './SearchBar'
import Header from './Header'


function EmployeeList() {
    const [items, setItem] = useState([{name:"James King", title:"President and CEO", image:""}, {name:"Julie Taylor", title:"VP of Marketing", image:""},
    {name:"Eugene Lee", title:"CFO", image:""}, {name:"John William", title:"VP of Engineering", image:""}, {name:"Ray Moore", title:"VP of sales", image:""},
    {name:"Paul Jones ", title:"QA Manager", image:""}])
  return (
    <div className='border-solid border-pink-400 border-2 p-1'>
        {
        items.map(({name, title, image}, index)=>(
            <div className='border-solid border-red-700 border-2 m-2' key={index}>
                <UserCircleIcon className="size-6 text-blue-500 w-8"  />
                <EmployeeListItem name={name} title={title} image={image}/>

            </div>
        ))
    }
        </div>

  )
}

export default EmployeeList
