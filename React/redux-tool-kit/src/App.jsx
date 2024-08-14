import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { decrement, increament } from '../slice/countSlice'


function App() {
  // const [count, setCount] = useState(0)
  const counter = useSelector((state)=> state.user.count)
  const dispatch = useDispatch()
  console.log(counter)
  

  return(
    <>
    <button onClick={()=>dispatch(increament())}>+</button>{counter} <button onClick={()=>dispatch(decrement())}>-</button>
    </>
  )
  
}

export default App
