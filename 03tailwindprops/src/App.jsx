import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card  from './components/Card'    

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    userName: "uzair Naeem",
    age: "24"
  }
  return (
    <>
      
      <h1 className='bg-green-400 text-black p-8 rounded-2xl mb-4' >Tailwind test</h1>  
      <Card userName="chaiaurcode" btnText="click me"/>     
      <Card userName="uzair" btnText="visit me"/>     
    </>
  )
}

export default App   
