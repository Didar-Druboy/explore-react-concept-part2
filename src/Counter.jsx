import { useState } from "react"

export default function Counter() {
    const [count, setCount] = useState(0)
    
    const addHandler = () => {
        const newCount = count + 1
        setCount(newCount);
        // setCount(count + 1)
    }
    const reduceHandler = () => {
        // const newCount = count - 1
        // setCount(newCount)
        setCount(count - 1)
    }
    return (
        <div>
            <h3>Counter: {count}</h3>
            <button onClick={addHandler}>Add</button>
            <button onClick={reduceHandler}>Reduce</button>
        </div>
    )
}