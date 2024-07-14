

import React,{useState,useEffect,useCallback,useMemo} from 'react'

const Button = React.lazy(()=> import('./Button.jsx'))
const List = React.lazy(()=> import('./List.jsx'))


const Count = () => {

  const [val,setVal] = useState(0)

  console.log(val)

  const getItem = useCallback((value)=>{
      return [value+1,value+2,value+3]
  },[val])

  const style = useMemo(()=>{
    return {
    backgroundColor : val%2==0 ? 'black' : 'white',
    color:  val%2==0 ? "white" : 'black',
    marginTop : '5em'
  }
},[val])

  return (
    <div style={style}>
      <input type="text" onChange={(e)=>setVal(e.target.value)} />
      <Button />
      <List getItem={getItem}/>
    </div>
  )
}

export default Count
