
import { useMemo } from "react";


const Calculating = () => {

    const calc = useMemo(() => {
        const arr = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        console.log("render calc");
        return arr.reduce((acc, val) => acc + val, 0)
        
        
    })

  return (
    <div>
        <h2>calculating - {calc}</h2>
    </div>
  )
}

export default Calculating