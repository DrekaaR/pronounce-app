import s from "components/steps/Steps.module.scss";
import StatusCloud from "components/steps/UI/Status/Cloud";
import StatusBar from "components/steps/UI/Status/StatusBar";
import {WordContext} from "context";
import React, {useContext, useState} from 'react';
import {results} from "config/wordConfig"

const Result = () => {
   const {word, setWord} = useContext(WordContext)
   const [result, setResult] = useState(results['correct'])

   return (
      <StatusCloud>
         <div className={s.status}>
            <div className={s.statusTitle} style={{color: result.color}}>
               {result.title}
            </div>
            <div className={s.statusText}>
               You sound <b>92%</b> like a native speaker
            </div>
            <StatusBar/>
         </div>
      </StatusCloud>
   );
};

export default Result;