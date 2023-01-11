import { useReducer, useState } from 'react';
import './App.css'


const reducer = (state, action) => {
  switch (action.type) {
    case 'Increment':
      return { ...state, count: state.count + 1 }
    case 'showText':
      return { ...state, showText: !state.showText }
    case 'resetValues':
      return { count: 0, showText: true }
    default:
      return "This action doesn't exist"
  }
}

function FrontBeginnersApp() {

  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    showText: true,
  })

  const { count, showText } = state

  const handleClick = () => {
    dispatch({ type: 'Increment' })
    dispatch({ type: 'showText' })
  }

  const resetApp = () => {
    dispatch({ type: 'resetValues' })
  }

  return (
    <div className='App'>
      <h1>Front Begginers</h1>
      <h3>{count}</h3>
      <button onClick={handleClick}>add</button>
      <button onClick={resetApp}>reset</button>
      {showText && <p>Welcome to the best frontend channel.</p>}
    </div>
  )
}


export default FrontBeginnersApp