import React from 'react';
import {Link} from "react-router-dom";
import s from "./Logo.module.scss"
import logoIcon from "assets/images/logo.svg";

const Logo = (props) => {
   const textColor = props.textColor && {color: props.textColor};

   return (
      <Link to="/" className={s.logo}>
         <div className={s.logoImage}>
            <img src={logoIcon} alt="logo pronounce how to"/>
         </div>
         <span style={textColor}>
           Say It Right
         </span>
      </Link>
   );
};

export default Logo;