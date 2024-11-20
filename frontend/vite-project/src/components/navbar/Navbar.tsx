import React, { ChangeEvent, useState } from 'react';
import "./navbar.css";
import axios from 'axios';

const Navbar: React.FC = () => {

    
  const [selectedCategory, setSelectedCategory] = useState<string>('filter'); 

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value); 
  };
const toggle=(e:React.ChangeEvent<HTMLInputElement>)=>{
  console.log(e.target.value)
} 
const tt=async(e:React.ChangeEvent<HTMLInputElement>)=>{
  try {
     const response = await axios.get(`http://localhost:5000/api/tasks/${e.target.value}`);
     console.log(response.data.task);
  } catch (error) {
     console.log(error);
  }
  
}



  return (
    <nav className="nav-cont">
      <input type="search" className="search-nav" placeholder="search"  onChange={tt}  />

      <section>
        <select title='filter'
          name="category"
          className="category"
          value={selectedCategory}
          onChange={handleCategoryChange} 
        >
          <option value="filter" disabled hidden>Filter</option> 
          <option value="todo">ToDo</option>
          <option value="running">Running</option>
          <option value="completed">Completed</option>
        </select>
      </section>
    </nav>
  );
};

export default Navbar;
