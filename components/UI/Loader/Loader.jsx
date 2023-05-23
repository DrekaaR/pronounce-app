import React from 'react';
import s from "./Loader.module.scss"
import {ReactComponent as LoadingIcon} from "assets/images/icons/loading.svg"

const Loader = ({small}) => {
   return (
      <div className={small ? [s.loader, s.small].join(" ") : s.loader}>
         <LoadingIcon/>
      </div>
   );
};

export default Loader;