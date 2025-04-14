import React, { useState } from "react";
import campData from "../components/camp.json"
import Card from "./Card";

const AllCamp = () => {
  const [selectedCamp, setSelectedCamp] = useState("all");

  const handleSelectChange = (event) => {
    setSelectedCamp(event.target.value);
  };

  // Filter camps based on selected type
  const filteredCamps = campData.filter(
    (camp) => selectedCamp === "all" || camp.type === selectedCamp
  );

  return (
    <div className="p-4">
      {/* Dropdown Button */}
      <div className="flex md:w-[57%] justify-between px-4">
          <select
        className="border p-2 rounded h-15"
        value={selectedCamp}
        onChange={handleSelectChange}
      >
        <option value="all">All</option>
        <option value="base">Base Camp</option>
        <option value="gold">Gold Camp</option>
      </select>
    <h1 className="md:text-6xl text-2xl font-bold text-center bg-yellow-400 p-2 rounded">{selectedCamp}</h1>
      </div>
    

      {/* Display Camp Cards */}
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredCamps.length > 0 ? (
          filteredCamps.map((camp) => (


           <Card id={camp.id} name={camp.name} type={camp.type}  price={camp.price} title={camp.title} image={camp.image}/>
          
         
        
        ))
        ) : (
          <p>No camps available.</p>
        )}
      </div>
    </div>
  );
};

export default AllCamp;
