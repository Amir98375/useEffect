import { useEffect, useState } from "react"
import axios  from 'axios'
export const Fetchdata=()=>{
    const [data , setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [next ,setNext] = useState()
    const [page ,setPage] = useState(1)
    
    useEffect(()=>{
        getdata()
        console.log("mounted data")
        return ()=>{
            console.log("unmounted data")
        }
    },[page])


    const getdata = ()=>{
        axios.get(`http://localhost:8080/posts?_page=${page}&_limit=10`)
        .then((res)=>{
            
            setData(res.data)
            setLoading(false)
        })
       
    }
   
    return(
   <div>
       <table style={{border:"1px solid"}}>
       <th style={{border:"1px solid"}}>id
           </th>
           <th style={{border:"1px solid"}}>first_name
           </th>
           <th style={{border:"1px solid"}}>last_name</th>
           <th style={{border:"1px solid"}}>email</th>
           <th style={{border:"1px solid"}}>gender</th>
        
      {data.map((e)=>{
          return(
            <tr ><td style={{border:"1px solid"}}>{e.id}</td>
                <td style={{border:"1px solid"}}>{e.first_name}</td>
            <td style={{border:"1px solid"}}>{e.last_name}</td>
            <td style={{border:"1px solid"}}>{e.email}</td>
            <td style={{border:"1px solid"}}>{e.gender}</td></tr>
          )
         
      })}
           </table>
           <button onClick={()=>{
               if(page<1) return;
               setPage(page-1)}}>prev</button>
           <button onClick={()=>{
               setPage(page+1)}}>next</button>
   </div>
  
    )
        
    
}