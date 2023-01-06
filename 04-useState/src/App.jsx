import { useState } from 'react';
import './App.css'

function FrontBeginnersApp() {
  const [count, setCount] = useState(0)
  const [inputData, setInputData] = useState('Fernando')

  const add = () => {
    setCount(count + 1)
  }

  const changeInput = (event) => {
    setInputData(event.target.value)
  }

  return (
    <div className='App'>
      <h1>Front Begginers</h1>
      <h3>{count}</h3>
      <button onClick={add}>add</button>
      <div>
        <input onChange={changeInput} />
      </div>
      <h3>{inputData}</h3>
    </div>
  )
}


export default FrontBeginnersApp