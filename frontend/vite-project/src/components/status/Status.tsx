import React, { useContext } from 'react'
import  bag from "../../assets/bag.svg"
import clock from "../../assets/clock-regular.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBomb } from '@fortawesome/free-solid-svg-icons';
import { StoreContext,Task } from '../../context/Context';
const Status:React.FC = () => {

  const context = useContext(StoreContext);
  

      if(!context)
      {
        return<div>Sorry no context found</div>
      }
       const {data}= context; 
     const total = data.length;
     const completed = data.filter((item:Task)=>item.progress==="completed").length;
     
       
       
  return (
    <div>
         <div className='left-cont bg-zinc-200 w-full h-44  shadow-xl shadow-gray-500/50 rounded-lg p-4  my-5'>
       
       <FontAwesomeIcon icon={faBomb} style={{ color: '#ff0000' }} className='text-4xl' />
    <p className='text-[18px] my-3'>Expired Task</p>
    <p className='text-2xl my-3 font-bold'>5</p>
    </div>
    
    <div className='left-cont bg-zinc-200 w-full h-44  shadow-xl shadow-gray-500/50 rounded-lg p-4  my-5'>
   
    <img src={bag} alt='no img found' className='w-7'/>
<p className='text-[18px] my-3'>All Active Task</p>
<p className='text-2xl my-3 font-bold'>{total}</p>
</div>
<div className='left-cont bg-zinc-200 w-full h-44  shadow-xl shadow-gray-500/50 rounded-lg p-4  my-5'>
   
<img src={clock} alt='no img found' className='w-7'/>
    <p className='text-[18px] my-3'>Completed</p>
    <p className='text-2xl my-3 font-bold'>{completed}</p>
    </div>
    </div>
  )
}

export default Status
