import React from 'react'
import "./App.css"

const App = ({a1,a2,a3})=> {
  return (
    <div>
      <h1>NAME:{a1}</h1>
      <h2>EMAIL ID: {a2}</h2>
      <h2>College: {a3}</h2>
    </div>
  )
}

export default App