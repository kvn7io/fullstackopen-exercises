import React from 'react'

const App = () => {
  // Data to be displayed
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  // Component definition
  const Header = (props) => {
    return(
      <h1>{props.course}</h1>
    )
  }

  const Part = (part) => {
    return(
      <p>{part.name} {part.exercises}</p>
    )
  }

  const Content = (props) => {
    return(
      <div>
        {
          props.parts.map(part => (
            <Part name={part.name} exercises={part.exercises} />
          ))
        }
      </div>
    )
  }

  const Total = (props) => {
    return(
      <p><b>Number of exercises {props.sum}</b></p>
    )
  }

  // Return app
  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total sum={parts[0].exercises+parts[0].exercises+parts[0].exercises} />
    </div>
  )

}

export default App