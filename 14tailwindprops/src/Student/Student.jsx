import React from 'react'

function Student(props) {
  return (
    <div>
        <p>Name: {props.name}</p> 
        <p>Age: {props.age}</p>
        <p>Student: {props.isStudent ? "yes" :"No"}</p>  
    </div>
  )
}

export default Student