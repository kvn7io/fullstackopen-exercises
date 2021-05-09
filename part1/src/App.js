import React, { useState } from 'react'

const Button = ({text, onClick}) => {
  return(
    <button onClick={() => onClick()}>{text}</button>
  )
}

const Statistic = ({text, value}) => {
  return(
    <tr>
      <td>{text}</td><td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {

  const getSum = () => good + neutral + bad
  const getAverage = () => (1*good + -1*bad) / getSum()
  const getPositive = () => good / getSum() * 100 + " %"

  if (getSum() === 0) return(<p>No feedback given</p>)
  
  return(
    <div>
      <h1>statistics</h1>
      <table>
        <Statistic text="good" value ={good} />
        <Statistic text="neutral" value ={neutral} />
        <Statistic text="bad" value ={bad} />
        <Statistic text="all" value ={getSum()} />
        <Statistic text="average" value ={getAverage()} />
        <Statistic text="positive" value ={getPositive()} />
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" onClick={() => setGood(good+1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral+1)} />
      <Button text="bad" onClick={() => setBad(bad+1)} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App