import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
    <div>
      <h1>{props.coursename}</h1>
    </div>
  )
}
const Content = (props) =>{
  return (
    <div>
      <p>{props.parts}</p>
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.sum}</p>
    </div>
  )
}


const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
  return (
      <div>
          <Header coursename={course} />
          <Content parts={<p>{part1.name} {part1.exercises}</p>}/>
          <Content parts={<p>{part2.name} {part2.exercises}</p>}/>
          <Content parts={<p>{part3.name} {part3.exercises}</p>}/>
          <Total sum={part1.exercises + part2.exercises + part3.exercises}/>
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))