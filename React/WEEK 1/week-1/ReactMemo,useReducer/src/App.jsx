import { useState,useReducer,createContext } from 'react'

import Child from './Child'


export  const shareVal = createContext()

function App() {
  const [count, setCount] = useState(0)


  function reducerFun(state,action){
    console.log(action)
    switch(action.type){
      case 'fastTimer':
          return {current : state.current+1}
      case 'spacilTime':
          return {current : state.current*2}
      case 'reset' :
          return {current : state.current*0}
    }

  }
  const [state,dispatch] = useReducer(reducerFun,{current:0})
  const [dark,setDark] = useState(false)

  function fastTimer(){
      dispatch({type:'fastTimer'})
  }
  function spacialTime(){
    dispatch({type:'spacilTime'})
}
function reset(){
    dispatch({type:'reset'})
}



  return (
    <>
    <shareVal.Provider value={'hellow developer'} >
        <label htmlFor="slowTimer">SlowTimer : {count}</label> <br/>
        <input id='slowTimer' type="submit" value={'click me'}  onClick={()=>{setCount((val)=> val+1)}}/> <br />
        <label htmlFor="fastTimer">fastTimer : {state.current}</label> <br/>
        <input id='fastTimer' type="submit" value={'click me'}  onClick={fastTimer}/>
        <input id='fastTimer' type="submit" value={'spcial click'}  onClick={spacialTime}/>
        <input id='fastTimer' type="submit" value={'reset me'}  onClick={reset}/>

        < Child val={dark}/>

        <button onClick={()=>setDark((data)=> !data)}>Boolean</button>
    </shareVal.Provider>
    </>
  )
}

export default App
