import { useState, useEffect, useContext } from "react"
import AppStyles from "../Components/AppStyles";
import Roster from "../Components/Roster";
import { StudentContext } from "../Context/StudentContext";

const MainPage = () => {
  const {studentsContext, setStudentsContext} = useContext(StudentContext)
  const [data, setData] = useState()

    //Fetch students
    useEffect(() => {
        const fetchScores = async () => {
          const response = await fetch(
            'https://api.hatchways.io/assessment/students'
          );
          if (!response.ok) {
            throw new Error("Something went wrong!");
          }
          
          const responseData = await response.json();
          const taggedData = responseData.students.map((obj) => ({
            ...obj, tags: []
          }));
            setStudentsContext(taggedData)
            setData(taggedData)
        };
            
        fetchScores().catch((error) => {
            console.log('Oops, there was an error', error)         
        })
      }, [])


  return (
    <AppStyles className='d-flex justify-content-center'>
    {data &&
      <Roster data={data} />
    }
    </AppStyles>
  )
}

export default MainPage