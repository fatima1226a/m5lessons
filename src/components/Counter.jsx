import { useState } from "react"


const Counter = () => {
    const [count, setCount] = useState(0)
    // console.log(count);
    
    const onClick = () => {
        setCount((prev) => prev + 1)

    }

  return (
    <div>
        <h2>Counter - {count}</h2>
        <button onClick={onClick}>click</button>
    </div>
  )
}

export default Counter