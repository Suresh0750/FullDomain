import React,{ useState,Suspense } from 'react'

// import Count from './Count.jsx'

const CountComp = React.lazy(()=> import("./Count.jsx"))


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Suspense fallback="Loading lazy...">
      <CountComp />
    </Suspense>
    </>
  )

}

export default App
