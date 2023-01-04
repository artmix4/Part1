import React from 'react'
import ReactDOM from 'react-dom'

const course = 'Half Stack application development'
const exercises1 = 10
const exercises2 = 7
const exercises3 = 14

const Part = (props) => {
return (
<div>
<p>{props.part} {props.exercises}</p>
</div>
)
}

const Header = () => {
  return (
    <div>
      <h1>{course}</h1>
    </div>
  )
}
const Content = () =>{
  return (
    <div>
      <Part part='Fundamentals of React' exercises='10'/>
      <Part part='Using props to pass data' exercises='7'/>
      <Part part='State of component' exercises='14'/>
    </div>
  )
}
const Total = () => {
  return (
    <div>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}


const App = () => {
  //const-definitions
  return (
      <div>
          <Header />
          <Content />
          <Total />
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))