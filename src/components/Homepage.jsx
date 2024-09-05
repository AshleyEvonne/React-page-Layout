import React from 'react'
import EmployeeList from './EmployeeList'
import Header from './Header'
import SearchBar from './SearchBar'

function Homepage() {
  return (
    
    
      <div className='border-solid border-orange-400 border-2 p-1 w-6/12'>
        <Header/>
        <SearchBar/>
        <EmployeeList />
        </div>
  )
}

export default Homepage