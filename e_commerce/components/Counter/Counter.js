import { StatementSync } from "node:sqlite";
import { useState } from "react";
const Counter = ({children}) =>{
    const initial=0   
    const [count, setCount] = useState (initial)

    console.log(state)
    const decrement = ()=> {
        if ( count >0){
            setCount(count - 1)

        }
       
    }
    const increment = ()=> {
        setCount(count + 1)
        
    }
    const reset = ()=> {
        setCount(initial )
    }
    return (
        <div>
            {children}
            <h1>{count} </h1>
            <button onclick= {decrement}>Aumentar</button>
            <button onclick= {increment}>Disminuir</button>
            <button onclick= {reset}>Reset</button>
        </div>
    )
}
export default Counter
