import React from 'react'
import './App.css'

function App() {

  const array1 = [1, 4, 9, 16];

  //pass a function to map
  const map1 = array1.map(x => x * 2);

  console.log(map1);
  // expected output: [2, 8, 18, 32]

  return (
    <div className="App">
      Front Australia
    </div>
  )
}

export default App
