import React from 'react';
import s from "components/steps/Steps.module.scss";

const Button = ({children, href, ...props}) => {
   if (href){
      return (
         <a href={href} target="_blank"
            className={s.itemButton}
            {...props}
         >
            {children}
         </a>
      );
   }
   return (
      <button
         type="button"
         className={s.itemButton}
         {...props}
      >
         {children}
      </button>
   );
};

export default Button;