import React, {  useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Main from './components/main/Main'
import Task from './components/task/Task'
import { ToastContainer } from 'react-toastify'
import 'font-awesome/css/font-awesome.min.css';





const App:React.FC = () => {
  const [showAdd,setAdd]= useState<Boolean>(false);
  
 

  return (
    <div>
      <ToastContainer/>
      {
        showAdd&&<Task setAdd={setAdd} />
      }
        
       <Navbar/>
       <Main setAdd={setAdd}/>
    </div>
  )
}

export default App
