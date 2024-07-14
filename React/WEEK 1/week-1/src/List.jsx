import React,{useState,useEffect} from 'react'

const List = ({getItem}) => {
    console.log('getItem\n',getItem)

    const [list,setList] = useState([])
    useEffect(()=>{
        setList(getItem(1))
    },[getItem])
    
  return (
    <div>
        <ul>
            {list.map((val,i)=>{
                return <li key={i}>{val}</li>
            })}
        </ul>
    </div>
  )
}

export default List
