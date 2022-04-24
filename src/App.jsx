import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Fetchdata } from './components/Fetchdata'
import { AddData } from './components/addData'
import { Counter } from './components/counter'

function App() {
  const [show,setshow] =useState(true)
  const [count, setCount] = useState(0)
  const handleclick =()=>{
    if(count>10){
      return
    }
    setCount(count+1)
   
  }
  const handleclick1 =()=>{
    if(count<0){
      return
    }
    setCount(count-1)
  }
  const handleclick2 =()=>{
   
    setCount(0)
  }

  return (
    <div className="App">
    <Counter/>
    <br></br>
    <br></br>
    <h3>counter:{count}</h3>
    
    <button onClick={ handleclick}>Add1</button>
    <button onClick={ handleclick1}>sub1</button>
    <button onClick={ handleclick2}>Reset</button><br></br>
    <br></br>
    <br></br>
    { show ?
    <AddData/>:null
    
} 
{show ? <Fetchdata/> :null}
    <button onClick={()=>{
    setshow(!show)
    }}>{show?"hidedata":"showdata"}</button>
         
    </div>
  )
}

export default App
