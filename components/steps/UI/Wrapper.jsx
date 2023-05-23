import s from "components/steps/Steps.module.scss";
import React from 'react';

const Wrapper = ({title, subtitle, children, isLarge, ...props}) => {
   const itemClasses = isLarge ? [s.item, s.itemLarge].join(' ') : s.item;

   return (
      <article {...props} className={itemClasses}>
         <div className={s.itemHeader}>
            <h3 className={s.itemTitle}>{title}</h3>
            <div className={s.itemSubtitle}>{subtitle}</div>
         </div>
         <div className={s.itemBody}>
            {children}
         </div>
      </article>
   );
};

export default Wrapper;