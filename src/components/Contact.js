import React from 'react'

//destructure
const Contact = ({testdata, alertMessage}) => {
    return (
        <>
        <h1>This is my React app</h1>
        <p>{testdata}</p>
        <button onClick={alertMessage}>show message</button>
        </>
    )
  }

//using props
// const Contact = (props) => {
//   return (
//       <>
//       <h1>This is my React app</h1>
//       <p>{props.testdata}</p>
//       <button onClick={props.alertMessage}>show message</button>
//       </>
//   )
// }
export default Contact