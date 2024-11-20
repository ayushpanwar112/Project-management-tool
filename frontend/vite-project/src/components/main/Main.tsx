import React, { useContext } from 'react';
import './main.css';
import Task from '../task/Task';
import Todo from '../toDo/Todo';
import Status from '../status/Status';
import { StoreContext } from '../../context/Context';

interface MainProps {
  setAdd: (value: boolean) => void;
}

const Main: React.FC<MainProps> = ({ setAdd }) => {
  const context = useContext(StoreContext);

  if (!context) {
    return <div>Sorry, no context found</div>;
  }

  const { data } = context;

  // Filter data based on progress
  const todo = data.filter((item) => item.progress === 'todo');
  const onProgress = data.filter((item) => item.progress === 'working');
  const done = data.filter((item) => item.progress === 'completed');

  // Handle Add Task button
  const TriggerAdd = () => {
    setAdd(true);
  };

  return (
    <div className="main-cont">
      {/* Info Section */}
      <div className="info flex flex-col">
        <Status />
        <button
          className="flex justify-center items-center bg-black text-white py-2 px-4 rounded-lg shadow-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black ml-auto w-full"
          onClick={TriggerAdd}
        >
          Add Task
        </button>
      </div>

      {/* Task Sections */}
      <div className="list-info bg-zinc-200">
        <Todo name="To Do" color="bg-blue-700" data={todo} />
      </div>
      <div className="list-info bg-zinc-200">
        <Todo name="On Progress" color="bg-orange-500" data={onProgress} />
      </div>
      <div className="list-info bg-zinc-200">
        <Todo name="Done" color="bg-green-500" data={done} />
      </div>
    </div>
  );
};

export default Main;
