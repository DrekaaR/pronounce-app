import s from "components/steps/UI/Status/Status.module.scss"
import {WordContext} from "context";
import React, {useContext} from 'react';

const StatusBar = ({selectedRate}) => {
   const {word} = useContext(WordContext)
   const score = Math.round(word.result.accuracyScore)

   return (
      <div className={s.statusBar}>
         <div className={s.body}>
            <div
               className={s.progress}
               style={{width: `${score}%`, backgroundColor: selectedRate?.color}}
            />
         </div>
         <div
            className={s.percent}
            style={{left: `${score}%`, backgroundColor: selectedRate?.color}}
         >
            {score}%
            <span style={{backgroundColor: selectedRate?.color}} className={s.arrow}/>
         </div>
      </div>
   );
};

export default StatusBar;