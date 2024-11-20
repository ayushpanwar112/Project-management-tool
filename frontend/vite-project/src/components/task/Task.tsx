import React, { FC, FormEvent, useContext, useState } from 'react';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './task.css';
import axios from "axios"
import { StoreContext } from '../../context/Context';

interface Taskprops {
  setAdd:(value:Boolean)=>void
}
interface InputArea {
  name:string,
  description:string,
  priority:string,
  date:string
}
          

const Task: React.FC<Taskprops> = ({setAdd}) => {
 const context = useContext(StoreContext);
    if(!context)
    {
      return<div>Store context is not available</div>
    }
       
  const {Toggle} = context

  const [dot, setDot] = useState(false);

  const [inputValue, setInputValue] = useState<InputArea>(
    {
      name:"",
      description:"",
      priority:"low",
      date:"",
    }
  );
 
  const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
              const name=e.target.name;  
               const value=e.target.value;
               setInputValue(inputValue=>({...inputValue,[name]:value}));
                       
  };
   const onButtonClick=(e:React.MouseEvent<HTMLButtonElement>)=>{
     const name = e.currentTarget.name;
     const value =e.currentTarget.value;
     console.log(name);
     console.log(value);
     setInputValue(inputValue=>({...inputValue,[name]:value}))
     setDot(false)


   }


       const submitToggle=async(e:FormEvent)=>{
           e.preventDefault();
           try {
               const response = await axios.post("http://localhost:5000/api/tasks",inputValue);
               if(response.data.success)
               { console.log(response.data.message);
                 toast.success(response.data.message);
               }
               else toast.error(response.data.message)
           } catch (error:unknown) {
               console.log(error);
           }
                        setInputValue({
                          name:"",
                          description:"",
                          priority:"",
                          date:"",
                        })
                        setAdd(false);
                        Toggle();
       }


  return (
    <>
      <div className='task-cont'>
        <form className='form-cont' onSubmit={submitToggle}>
          <div className='flex justify-between px-2'>
              <h1 className='font-sans text-xl m-2 font-bold'>Add Task</h1>
          <button type="button" onClick={()=>setAdd(false)}>close</button>
          </div>
        
          <div className='task-input'>
            <input
              type='text'
              placeholder='Enter Task'
              required name='name' value={inputValue.name} onChange={onChangeHandler}
              className='typing-input w-80 h-8 border-none outline-none p-1 font-mono' 
              spellCheck='false' />
           
          <div className='flex flex-col'>

          
            <div className="three-dot-button"  aria-label="Options" onClick={()=>setDot(!dot)} title='set priority' >
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            {
              dot && <div className='fixed flex flex-col top-[185px] right-[600px] btn-sec bg-white mt-2'>
            <button className="option-item" type='button'  name="priority"value="low" onClick={onButtonClick}>Low</button>
          <button className="option-item"  type='button' name="priority"value="med" onClick={onButtonClick}>Med</button>
          <button className="option-item"  type='button' name="priority"value="high" onClick={onButtonClick}>High</button>
            </div>
            }
           
           </div>
          </div> 
          <hr className='w-full bg-black h-[3px] mb-2' />
          
          <textarea
            rows={20}
            cols={50}
            placeholder="Enter text here..."
            onChange={onChangeHandler}
            name='description'
            className='outline-none px-2 text-2xl resize-none'
            spellCheck="false"
            value={inputValue.description} required
          />

          <div className='flex justify-between p-3'>
          <div className="flex justify-center items-center gap-1-">
          <input 
  type="date" 
  id="deadline" 
  name="date" 
  value={inputValue.date} 
  onChange={onChangeHandler} 
  required 
  title="Select a deadline for the task"
/>
  
</div>
            
            <button type='submit'>Assigned To</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Task;
