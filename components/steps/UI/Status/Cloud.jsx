import React from 'react';
import s from "components/steps/Steps.module.scss";
import сloudBg from "assets/images/icons/cloud_bg.svg";

const Cloud = ({children}) => {
   return (
      <div className={s.cloud}>
         <div className={s.cloudImage}>
            <img src={сloudBg} alt="cloud background for text"/>
         </div>
         {children}
      </div>
   );
};

export default Cloud;