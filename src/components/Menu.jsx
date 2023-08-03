import React from "react";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleTasksClick = () => {
    navigate("/tasks");
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  return (
    <nav>
      <ul>
        <li>
          <button type = "button" onClick={handleHomeClick}>Home</button>
        </li>
        <li>
          <button type = "button" onClick={handleTasksClick}>Tasks</button>
        </li>
        <li>
          <button type = "button"  onClick={handleAboutClick}>About Us</button>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;