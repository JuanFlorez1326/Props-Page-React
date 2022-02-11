import { Button } from "../../UI/Button/Button";
import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

export const Header = () => {
    return(
      <div className="flex-nav"> 
      
        <NavLink to="/"><Button ButtonClass="button1" text="Home"/></NavLink>
        <NavLink to="/about"><Button ButtonClass="button1" text="About Us" /></NavLink>
        <NavLink to="/contact"><Button ButtonClass="button1" text="Contact" /></NavLink>

        {/* <Button ButtonClass="button1" text="Home"/>
        <Button ButtonClass="button1" text="About Us" />
        <Button ButtonClass="button1" text="Contact" /> */}
      </div>
  )
};

