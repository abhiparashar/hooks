import React,{useState} from 'react'

function HookCounterTwo() {
    const initialcount = 0
    const [count, setCount] = useState(initialcount)
    return (
        <div>
            count:{count}
            <button onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(initialcount)}>Reset</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
    )
}

export default HookCounterTwo
