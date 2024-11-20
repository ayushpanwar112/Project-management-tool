import React, {  useState } from 'react';
import {  Task } from '../../context/Context';
import axios from 'axios';

interface Todoprop {
  name: string;
  color: string;
  data:Task[];
}

const Todo: React.FC<Todoprop> = ({ name, color,data}) => {
 
  const [activeDot, setActiveDot] = useState<string | null>(null);

 

  const priorityClasses: Record<string, string> = {
    low: 'bg-gray-400',
    med: 'bg-orange-400',
    high: 'bg-red-400',
  };

  const getPriorityClass = (priority: string) =>
    priorityClasses[priority] || 'bg-gray-400';

  const handleButtonEvent = async (
    e: React.MouseEvent<HTMLButtonElement>,
    itemId: string
  ) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;
    setActiveDot((prev) => (prev === itemId ? null : itemId))

    try {
      const response = await axios.put(
        `http://localhost:5000/api/tasks/${itemId}`,
        { [name]: value }
      );
      console.log('Task updated successfully:', response.data);
    } catch (error: unknown) {
      console.error('Error updating task:', error);
    }
  };

  const priorityOptions = [
    { name: 'progress', value: 'todo', label: 'todo' },
    { name: 'progress', value: 'working', label: 'working' },
    { name: 'progress', value: 'completed', label: 'completed' },
  ];

  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="flex justify-center items-center gap-4">
        <div className={`w-2 h-2 ${color} rounded-full`}></div>
        <p className="text-[18px] font-bold">
          {name}
          <span> 3</span>
        </p>
      </div>
      <hr className={`h-1 ${color} w-full`} />
      {data && data.length > 0 ? (
        data.map((item: Task) => (
          <div
            key={item._id}
            className="w-[90%] min-h-[150px] bg-white h-full p-5 rounded-md"
            draggable
          >
            <div className="flex justify-between">
              <p
                className={`w-10 h-6 text-white ${getPriorityClass(
                  item.priority
                )} rounded-[2px] px-1`}
              >
                {item.priority}
              </p>
              <div className="relative">
                {activeDot === item._id && (
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 z-[1] flex flex-col bg-white rounded-sm shadow-md">
                    {priorityOptions.map((option) => (
                      <button  
                        key={option.value}
                        className="px-4 py-2 hover:bg-gray-100"
                        name={option.name}
                        value={option.value}
                        onClick={(e) => handleButtonEvent(e, item._id)}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                )}
                <button
                  className="bg-cyan-800 flex flex-col items-center justify-center w-[2px]"
                  onClick={() =>
                    setActiveDot((prev) => (prev === item._id ? null : item._id))
                  }
                >
                  <span className="text-4xl h-2">.</span>
                  <span className="text-4xl h-2">.</span>
                  <span className="text-4xl h-2">.</span>
                </button>
              </div>
            </div>
            <p className="text-2xl">{item.name}</p>
            <p className="mb-5">
              {item.description ||
                'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, tempore modi aut ratione eveniet officia deleniti consequatur a facilis magnam in cupiditate vel, quo quod ipsam hic consectetur voluptates odit.'}
            </p>
            <p className="flex items-center gap-1">
              <span className="font-bold font-mono">Deadline:</span> 12/5/24
            </p>
          </div>
        ))
      ) : (
        <p>No jobs added</p>
      )}
    </div>
  );
};

export default Todo;
