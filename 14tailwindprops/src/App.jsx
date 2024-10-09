import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Student from './Student/Student'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Student name="Spongebob" age="25" isStudent={true}/>
    </>
  )
}

export default App
