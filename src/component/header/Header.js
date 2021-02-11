import React from "react";
import "./header.css";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Drop from "../drop/Drop";
import {
  AboutDrop,
  SchemeeDrop,
  MemberDrop,
  LoansDrop,
} from "../../fixtures/drop";

function Header({toggle}) {
  return (
    <div className="header">
         <div onClick={toggle} className="header__options">
         <MenuIcon/>
      </div>
      <div className="header__options">
        <a href="/">Home</a>
      </div>
      <div className="header__options">
        <a href="/">
          About
          <ArrowDropDownIcon />
        </a>
        <div className="header__optionsDropDown">
          <Drop options={AboutDrop} />
        </div>
      </div>
      <div className="header__options">
        <a href="/">
          Schemes
          <ArrowDropDownIcon />
        </a>
        <div className="header__optionsDropDown">
          <Drop options={SchemeeDrop} />
        </div>
      </div>
      <div className="header__options">
        <a href="/">
          Loans
          <ArrowDropDownIcon />
        </a>
        <div className="header__optionsDropDown">
          <Drop options={LoansDrop} />
        </div>
      </div>
      <div className="header__options">
        <a href="/">
          Member
          <ArrowDropDownIcon />
        </a>
        <div className="header__optionsDropDown">
          <Drop options={MemberDrop} />
        </div>
      </div>
      <div className="header__options">
        <a href="/">careers</a>
      </div>
      <div className="header__options">
        <a href="/">Gallery</a>
      </div>{" "}
      <div className="header__options">
        <a href="/">FAQs</a>
      </div>
      <div className="header__options">
        <a href="/">Contact Us</a>
      </div>
    </div>
  );
}

export default Header;
