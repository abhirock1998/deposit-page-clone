import React from "react";
import "./menu-sidebar.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Drop from "../drop/Drop";
import CloseIcon from '@material-ui/icons/Close';
import PersonIcon from "@material-ui/icons/Person";
import {
  AboutDrop,
  SchemeeDrop,
  MemberDrop,
  LoansDrop,
} from "../../fixtures/drop";
import { Button,IconButton } from "@material-ui/core";
function MenuSidebar({isSlide,toggle}) {
  return (
    <div  style={{left:`${isSlide?"0px":"-100%"}`}}  className="menuSidebar">
      <div className="menuSidebar__options">
        <a href="/">Home   </a><span  onClick={toggle} ><CloseIcon/></span>
      </div>
      <div className="menuSidebar__options">
        <a href="/">
          About
          
        </a><ArrowDropDownIcon />
        <div className="menuSidebar__optionsDropDown">
          <Drop options={AboutDrop} />
        </div>
      </div>
      <div className="menuSidebar__options">
        <a href="/">
          Schemes
        
        </a>  <ArrowDropDownIcon />
        <div className="menuSidebar__optionsDropDown">
          <Drop options={SchemeeDrop} />
        </div>
      </div>
      <div className="menuSidebar__options">
        <a href="/">
          Loans
         
        </a> <ArrowDropDownIcon />
        <div className="menuSidebar__optionsDropDown">
          <Drop options={LoansDrop} />
        </div>
      </div>
      <div className="menuSidebar__options">
        <a href="/">
          Member
         
        </a> <ArrowDropDownIcon />
        <div className="menuSidebar__optionsDropDown">
          <Drop options={MemberDrop} />
        </div>
      </div>
      <div className="menuSidebar__options">
        <a href="/">careers</a>
      </div>
      <div className="menuSidebar__options">
        <a href="/">Gallery</a>
      </div>{" "}
      <div className="menuSidebar__options">
        <a href="/">FAQs</a>
      </div>
      <div className="menuSidebar__options">
        <a href="/">Contact Us</a>
      </div>
      <div className="menuSidebar__options">
        <Button variant="outlined">
          <PersonIcon />
          For Member Only
        </Button>
      </div>
    </div>
  );
}

export default MenuSidebar;
