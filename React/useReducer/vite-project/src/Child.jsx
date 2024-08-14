import React,{useContext} from 'react'
import { Themcontext } from './App'

const Child = () => {

    const {name} = useContext(Themcontext)
  return (
    <div>
      {name}
    </div>
  )
}

export default Child
