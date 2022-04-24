import { useEffect, useState } from "react"

export const Counter =()=>{
    const [count,setCount] = useState(10)
    useEffect(()=>{
      const id =  setInterval(()=>{
          setCount((prevValue)=>{
              
              if(prevValue<=1){
                console.log("end",prevValue)
                clearInterval(id)
                  return 0
                  
                 
              }
              return prevValue-1
          })
            
        },1000)
    },[])
    return(
        <div>
            <button>counter:{count}</button>
        </div>
    )
}