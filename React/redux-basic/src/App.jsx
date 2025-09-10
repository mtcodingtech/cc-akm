import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SwitchTheme from './components/SwitchTheme'
import BooksList from './components/BooksList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SwitchTheme />
      <BooksList />
    </>
  )
}

export default App
