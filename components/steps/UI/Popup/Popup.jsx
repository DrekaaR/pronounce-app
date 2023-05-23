import s from "components/steps/UI/Popup/Popup.module.scss"
import RateTable from "components/steps/UI/Popup/RateTable"
import PopupButtons from "components/steps/UI/PopupButtons";
import StatusBar from "components/steps/UI/Status/StatusBar"
import Word from "components/steps/UI/Word/Word"
import {WordContext} from "context"
import {motion} from "framer-motion"
import React, {useContext, useState, useEffect} from 'react'
import {CgClose as CloseIcon} from "react-icons/cg"


const Popup = ({visible, setVisible, selectedRate}) => {
   const {word} = useContext(WordContext)
   const [sounds, setSounds] = useState(null)

   useEffect(() => {
      word.result && setSounds(word.result.words[0].phonemes)
   }, [word.result])

   const closePopupHandler = () => setVisible(false)

   return (
      <>
         {word.result && visible &&
            <motion.div
               initial={{opacity: 0, scale: 0.8}}
               animate={{opacity: 1, scale: 1}}
               className={s.wrapper}
               onClick={(e) => e.stopPropagation()}
            >
               <button className={s.closeButton} onClick={closePopupHandler}>
                  <CloseIcon/>
               </button>

               <div className={s.header}>
                  <Word colors/>
                  <PopupButtons/>
                  <StatusBar selectedRate={selectedRate}/>
               </div>

               <RateTable sounds={sounds}/>

            </motion.div>
         }
      </>
   );
};

export default Popup;