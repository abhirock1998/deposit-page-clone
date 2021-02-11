import React from "react";
import "./sidebar.css";
import { SidebarOptiuons } from "../../fixtures/side";
function Sidebar() {
  return (
    <div className="sidebar">
       <h1>OUR SCHEMES</h1>
      {SidebarOptiuons?.map((option) => (
        <div className="sidebar__options">
         
            <a href={option.heading} key={option.heading}>
          {option.heading}
        </a>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
