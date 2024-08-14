import { useState , useReducer,createContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Child from './Child'


export const Themcontext = createContext()
function App() {
  // const [count, setCount] = useState(0)
  function reducerFun(state,action){

    switch(action.type){
      case 'increment':
          return {current : state.current+1} 
      case 'dicrement' : 
          return {current : state.current-1}
    }
  }
  function increment(){
    setCount({type:'increment'})
  }
  function dicrement(){
    setCount({type:'dicrement'})
  }
  const [count,setCount] = useReducer(reducerFun,{current:0})

  return (
    <Themcontext.Provider value={{name:'suresh'}}>
  
      <button onClick={increment}>+</button> {count.current} <button onClick={dicrement}>-</button>

      <Child />
    </Themcontext.Provider>
  )
}

export default App
