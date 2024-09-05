import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeeList from './components/EmployeeList'
import SearchBar from './components/SearchBar'
import Homepage from './components/Homepage'
import EmployeePage from './components/EmployeePage'


function App() {

  return (
    <div className='flex flex-row w-screen'>
    <Homepage/>
     <EmployeePage/>

    </div>
  )
}

export default App
