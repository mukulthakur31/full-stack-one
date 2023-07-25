import React, { useState } from 'react'
import Task from './Task';

const Home = () => {
  const [ tasks , settasks ]= useState([])
  const [title, settitle]=useState("");
  const [description,setdescrption]= useState("")
  const submithandler=(e)=>{
      e.preventDefault();
      settasks([...tasks,{title,description}])
  }
  return (
    <div className='container'>
        <form onSubmit={submithandler}> 
          <input type="text" placeholder='Title' value={title} onChange={(e)=>settitle(e.target.value)}/>
          <textarea placeholder='enter anything' value={description} onChange={(e)=>setdescrption(e.target.value)}></textarea>
          <button type='submit'>ADD</button>
        </form>
    {tasks.map((item ,index)=>(
      <Task key={index} title={item.title} description={item.description} />
    ))}
    </div>
  );
}

export default Home;