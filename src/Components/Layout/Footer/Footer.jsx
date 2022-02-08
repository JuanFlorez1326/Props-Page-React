import { Button } from "../../UI/Button/Button";
import React from 'react';
import './Footer.css'

export const Footer = () => {
  return(
    <div className="flex-foot">
        < Button text="GitHub" ButtonClass = "btnFooter"/>
        < Button text="Twitter" ButtonClass = "btnFooter"/>
        < Button text="LinkedIn" ButtonClass = "btnFooter"/>
    </div>
  );
};
