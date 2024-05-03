import React from 'react'
import Card from "./Card"

const Cards = ({courses}) => {

    let allCourses = [];
    const getCourses = () => {
        Object.values(courses).forEach((coursesCategory) => {
            coursesCategory.forEach((courses) => {
                allCourses.push(courses);
            })
        })

        return allCourses;
    }



  return (
    <div>
        {getCourses().map ( (course) => {
          return   <Card course = {course}/>
        })}
    </div>
  )
}

export default Cards
