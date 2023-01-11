import './App.css'
import pokemonInstance from './helper/axios-instance'
import { useEffect, useState } from 'react'
import useAxios from './hook/useAxios'

function App() {
  const [pokemonList, loading, error] = useAxios({
    axiosInstance: pokemonInstance,
    method: 'get',
    url: 'pokemon',
  })

  console.log(pokemonList, loading, error)

  if (loading) {
    return <div>Loading</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <div className="App">
      <h1>Front Begginers</h1>
      <div>
        {pokemonList.results.map(
          (pokemon, index) => (
            <div key={index}>{pokemon.name}</div>
          ))}
      </div>
    </div>
  )
}

export default App
