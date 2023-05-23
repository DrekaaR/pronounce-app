import s from "components/steps/UI/Popup/Popup.module.scss";
import wordRate, {colorsHex} from "config/wordConfig";
import React from 'react';

const RateTable = ({sounds}) => {
   const rateWordByScore = (score) => {
      if (wordRate.correct(score)) {
         return (
            <div className={s.tableRate} style={{color: colorsHex.green}}>
               Excellent
            </div>
         )
      } else if (wordRate.medium(score)) {
         return (
            <div className={s.tableRate} style={{color: colorsHex.yellow}}>
               Normal
            </div>
         )
      } else {
         return (
            <div className={s.tableRate} style={{color: colorsHex.red}}>
               Bad
            </div>
         )
      }
   }

   return (
      <div className={s.table}>

         <div className={s.tableHeader}>
            <div className={s.tableSound}>Sound</div>
            <div className={s.tableRate}>You Said</div>
         </div>

         <div className={s.tableBody}>
            {sounds.map((sound, index) =>
               <div key={sound.phoneme + index} className={s.tableItem}>
                  <div className={s.tableSound}>
                     / {sound.phoneme} /
                  </div>
                  {rateWordByScore(sound.accuracyScore)}
               </div>
            )}
         </div>

      </div>
   );
};

export default RateTable;