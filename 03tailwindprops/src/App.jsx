import { useState } from 'react'
import './App.css'
import Card from '../components/card'

function App() {
  
  return (
    <>
    <h1 className="mb-4">Tailwind test</h1>
    <Card name="Aman" post="Electronics Engineer, Jaipur" />
    <Card post="Doctor, Jaipur"/>
    <Card name="Shanti"/>
    </>
  )
}

export default App
