import s from "components/steps/Steps.module.scss";
import StatusCloud from "components/steps/UI/Status/Cloud";
import StatusBar from "components/steps/UI/Status/StatusBar";
import Word from "components/steps/UI/Word/Word";
import {pronRateData} from "config/wordConfig";
import React from 'react';

const PronResults = ({selectedRate, score, setPopupVisible}) => {
   return (

      <div className={s.itemContent} >

         <Word
            colors
            isTranscription
            buttonClick={() => setPopupVisible(true)}
            pronRateData={pronRateData}
         />

         <StatusCloud>
            <div className={s.status}>

               <div className={s.statusTitle} style={{color: selectedRate?.color}}>
                  {selectedRate?.title}
               </div>

               <div
                  className={s.statusText}
                  dangerouslySetInnerHTML={{__html: selectedRate?.text.join(` <b>${score}%</b> `)}}
               />

               <StatusBar selectedRate={selectedRate}/>

            </div>
         </StatusCloud>
      </div>
   )
}

export default PronResults;