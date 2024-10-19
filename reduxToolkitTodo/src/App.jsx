import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todo'

function App() {

  return (
    <>
      <div className='px-10 flex flex-col items-center'>
        <AddTodo/>
        <Todo/>
      </div>
    </>
  )
}

export default App
