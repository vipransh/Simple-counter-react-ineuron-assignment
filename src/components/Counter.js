import React,{useState} from 'react'

function Counter() {
    const [count,setCount]=useState(0)

    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
  return (
    <div>
        <h1>Counter</h1>
        <div style={{"display": "flex"}}>
        <button onClick={()=>decrement()}>Decrement</button>
        <div style={{"margin-left": "8px", "margin-right": "8px"}}>{count}</div>
        <button onClick={()=>increment()}>Increment</button>
        </div>
    </div>
  )
}

export default Counter