import { Button } from "../../UI/Button/Button";
import React from "react";
import './Header.css'

export const Header = () => {
    return(
      <div className="flex-nav"> 
        <Button ButtonClass="button1" text="Home" />
        <Button ButtonClass="button1" text="About Us" />
        <Button ButtonClass="button1" text="Contact" />
      </div>
  )
};

