import React from 'react'
import Contact from './components/Contact'
function App() {
  const alertMessage = () => {
    alert('Alert from another page')
  }
  return (
    <>
    <Contact testdata="hello" alertMessage = {alertMessage}/>
    </>
  )
}

export default App