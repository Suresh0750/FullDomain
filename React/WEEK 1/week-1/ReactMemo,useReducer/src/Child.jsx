import React,{useContext} from 'react'
import { shareVal } from './App'


const Child = React.memo(function Child ({val}) {
  const {value} = useContext(shareVal)

  alert(val)
  console.log(value)
  return (
    <div>
      {value}
       suresh : {val ? 'developer' : 'student'} 
    </div>
  )
})



export default Child
