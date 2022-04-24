import { useEffect, useState } from "react"
import axios  from 'axios'
export const AddData=()=>{
    const [data , setData] = useState([])
    const [text,setText] = useState("")
    const [text1,setText1] = useState("")
    const [text2,setText2] = useState("")
    const [text3,setText3]=useState("")
   useEffect(()=>{
    axios.get(`http://localhost:8080/posts`)
    .then((res)=>{
        
        setData(res.data)
       // setLoading(false)
    })
   },[])
 
       
  
    return(
   <div>
       <input type="text" placeholder="enter first name" onChange={(e)=>setText(e.target.value)} /><br></br>
       <input type="text" placeholder="enter last name" onChange={(e)=>setText1(e.target.value)} /><br></br>
       <input type="email" placeholder="enter email" onChange={(e)=>setText2(e.target.value)} /><br></br>
       <input type="gender" placeholder="Disclose your gender" onChange={(e)=>setText3(e.target.value)} /><br></br>
       <button onClick={
           ()=>{
               const payload={
                   first_name:text,
                   last_name:text1,
                   email:text2,
                   gender:text3,
                   status:false
               };
            //    fetch(`http://localhost:8080/posts`,{
            //        method:"POST",
            //        headers:{
            //            "content-type":"application/json"
            //        },
            //        body:JSON.stringify(payload)
            //        //axios.post("url",payload)
            //    });
        axios.post("http://localhost:8080/posts",payload)   
        }
       }>Add data</button>
   </div>
    )
   
    
}