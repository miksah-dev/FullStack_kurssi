import React from 'react'


const Content = (props) => {
  return (
    <div>
      <p>
        {props.content1} {props.number1}
        </p>
      <p>
        {props.content2} {props.number2}
        </p>
      <p>
        {props.content3} {props.number3}
        </p>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
        <p>
          {props.name}
        </p>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.sum}</p>
  )
}

const Part = () => {
  return (
    <div>

    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course} />
      <Content content1={part1} number1={exercises1} content2={part2} number2={exercises2} content3={part3} number3={exercises3}/>
      <Total sum={exercises1 + exercises2 + exercises3}  />
    </div>
  )
}

export default App