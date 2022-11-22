import React, { useState } from 'react'
import Tag from './Tag';


const Student = ({student}) => {
    const [expandedView, setExpandedView] = useState(false)
    const [dispTags, setDispTags] = useState(false)

    //convert student grades from string to int
    const convertToInt = student.grades.map(Number)
    //find average of grades
    function calculateAverage(array) {
        return array.reduce((a, b) => a + b) / array.length;
    }
    //View full grades list
    const expandHandler = () => {
        setExpandedView(!expandedView)
        setDispTags(true)
    }

    //Generates a tag
    const makeTag = (e) => {     
        if(e.key === 'Enter') {
            student.tags.push(e.target.value)
            setDispTags(true)
        }
    }


  return (
    <div className='row border-bottom pt-2'>
        <div className='col-2 p-2 m-4'>
            <img className='pic-student' src={student.pic} />
        </div>
        <div className='col-8 info-student'>
            <h1>{student.firstName.toUpperCase()} {student.lastName.toUpperCase()}</h1>
            <p>Email: {student.email}</p>
            <p>Company: {student.company}</p>
            <p>Skill: {student.skill}</p>
            <p>Average: {calculateAverage(convertToInt)}%</p>
        </div>
        <div className='col-1 text-gray'>
            <h1 onClick={expandHandler}>{expandedView ? '-' : '+'}</h1>
        </div>
        {expandedView && 
        <>
            <div className='col-2'></div>
            <div className='col-7 info-student pt-3'>
                {convertToInt.map((score, i) =>
                    <p className='px-5' key={i}>test {i + 1}: <span className='mx-4'>{score}%</span></p>
                )}
            </div>
        </>
        }
        <div className='row'>
            <div className='col-3' />
            <div className='col-7'>
                <div className='row px-2'>
                    {dispTags && student.tags.map((tag, index) => {
                        return <Tag tag={tag} key={index} /> 
                    })}                                           
                </div>
                <input type='text' placeholder='Add a tag' className='input-tag mb-3 mt-2' onKeyPress={makeTag} />
            </div>
        </div>
    </div>
  )
}

export default Student