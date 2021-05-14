import React from 'react'

const Header = ({text}) => {
    return <h2>{text}</h2>
  }
  
const Part = ({part}) => {
  return <p>{part.name} {part.exercises}</p>
}
  
const Content = ({parts}) => {
  return(
    <div>
      {parts.map((part) => {
        return <Part key={part.id} part={part} />
      })}
    </div>
  )
}
  
const Sum = ({parts}) => {
    return <p><b>total of {parts.reduce((sum, part) => sum + part.exercises, 0)} exercises</b></p>
}
  
const Course = ({course}) => {
  return(
    <div>
      <Header text={course.name} />
      <Content parts={course.parts} />
      <Sum parts={course.parts} />
    </div>
  )
}

export default Course