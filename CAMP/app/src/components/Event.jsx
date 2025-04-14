import React from "react";
import "./Event.css";

const Event = ({ hasEvent }) => {
  if (!hasEvent) return null; // Render only if an event exists

  return (
    <div
      className="event-containerr md:h-screen h-[40vh]"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1608865413608-6cfd1fc622b3?q=80&w=2070&auto=format&fit=crop")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
       
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        
      }}
    >
      {/* Blurred Transparent Overlay */}
      <div
        className="overlay"
        style={{
            
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
          backdropFilter: "blur(8px)", // Adds blur effect
         
        }}
      ></div>

      {/* Event Text */}
      <h1
        className="event-heading"
        style={{
          color: "white",
          fontSize: "clamp(2rem, 5vw, 4rem)", // Responsive text size
          fontWeight: "bold",
          textAlign: "center",
          zIndex: 1, // Ensure text stays above overlay
          padding: "1rem",
          textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)", // Enhances readability
        }}
      >    
        🎉 Event is Holy! 🎊
      </h1>
    </div>
  );
};

export default Event;
