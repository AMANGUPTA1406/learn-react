import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/Profile';
import Login from './components/Login';

function App() {
  const [count, setCount] = useState(0);

  return (
    <UserContextProvider>
      <h1>Aman and react</h1>
      <div> </div>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
