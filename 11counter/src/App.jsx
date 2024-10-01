import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(0)
  let [message,setMessage] = useState('') 


const addValue = () => {
  if(counter<20){
    counter = counter + 1
  setCounter(counter) 
  }else {
    setMessage("You can not go above 20") 
  }
  
}

const removeValue = () => {
  if(counter>0){
    setCounter(counter-1)
  } else {
    setMessage("You can not go bellow zero")  
  }
}
  return (
    <>
      <h1>I had all and then most of you
      </h1>
      <h1>some and now none of you</h1>  
      <h2>counter value: {counter}</h2>  
      <button
      onClick={addValue}
      >Add Value {counter}</button> 
      <br/> 
      <button
      onClick={removeValue}
      >Remove Value {counter}</button>  
      <p>{message}</p>  
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
