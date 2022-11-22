import React, { useState, useContext } from 'react'
import { StudentContext } from "../Context/StudentContext";
import Student from './Student'


const Roster = () => {
    const [searchInput, setSearchInput] = useState('')
    const [searchTagInput, setSearchTagInput] = useState('')
    const {studentsContext, setStudentsContext} = useContext(StudentContext)
    

    const nameSearchHandler = (e) => {
        setSearchInput(e.target.value)
    }
    const tagSearchHandler = (e) => {
        setSearchTagInput(e.target.value)
    }

    //filter by name
    const filterData = (d) => {
        //if no input the return the original
        if (searchInput === '' && searchTagInput === '') {
            return d
        }
        else if (searchTagInput !== '' && searchInput === '') {
            return d.filter(p => p.tags.includes(searchTagInput))
        }
        //return the item which contains the user input
        else if (searchInput !== '') {
            return d.filter(p => p.firstName.includes(searchInput) || p.lastName.includes(searchInput)
            || p.firstName.toLowerCase().includes(searchInput) || p.lastName.toLowerCase().includes(searchInput))
        }

    }

    const filteredData = filterData(studentsContext)


  return (   
    <div className='roster mt-3'>
        <input 
            type='text' 
            className='search-bar mx-3 mt-3' 
            placeholder='Search by name' 
            onChange={nameSearchHandler}
        />
        <input 
            type='text' 
            className='search-bar mx-3 mt-3' 
            placeholder='Search by tag' 
            onChange={tagSearchHandler}         
        />
        {filteredData && filteredData.map((student, index) => 
            <Student student={student} key={index} />
        )}
    </div>
  )
}

export default Roster