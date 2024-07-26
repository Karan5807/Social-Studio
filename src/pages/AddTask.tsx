import React, { useState } from 'react';

const AddTask = () => {
  interface Task{
    Title:string;
    content:string;
  }
  const Tasklist: Task[] = [];

  const [task, setTask] = useState();
  Tasklist.push(task);

  const handleSubmit = (e:React.FormEvent) =>{
    e.preventDefault();
    Tasklist.push(task);
    console.log(task);
    
  }
  console.log(task, "LL");
  

  
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
      <div className='container text-black border-2 border-black'>
        <input className='border-black rounded-lg p-2 m-2 w-48' type='text' value={task} onChange={(e: React.FormEvent) => setTask(e.target.value)}/>
      </div>
      </form>

      <button type='submit'>Submit</button>
      
    </div>
  )
}

export default AddTask;