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

const App = () => {

  const curriculum = "Web Development Curriculum"

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return(
    <div>
      <h1>{curriculum}</h1>
      {courses.map(course => <Course key={course.id} course={course} />)}
    </div>
  )
}

export default App