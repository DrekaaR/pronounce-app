import s from "components/steps/UI/Word/Word.module.scss";
import {WordContext} from "context";
import React, {useContext, useState, useEffect} from 'react';
import {FiInfo as InfoIcon} from "react-icons/fi";
import wordRate, {colorsHex} from "config/wordConfig";

const Word = ({buttonClick, colors, isTranscription, isPosAbsolute}) => {
   const {word} = useContext(WordContext);
   const [phonemes, setPhonemes] = useState(null);

   useEffect(() => {
      word.result && setPhonemes(word.result.words[0].phonemes)
   }, [word.result])

   function wordFormatter(word) {
      // Split word into letters
      const letters = word.split('');

      return (
         phonemes && letters.map((letter, index) => {
            const letterScore = phonemes[index]?.accuracyScore;

            // Make first latter upper case
            const formattedLetter = index === 0 ? letter.toUpperCase() : letter;

            // Add color to letters
            const color =
               wordRate.correct(letterScore) ? colorsHex.green :
                  wordRate.medium(letterScore) ? colorsHex.yellow : colorsHex.red;

            return (
               <span style={{color: color}} key={letter + index}>
                  {formattedLetter}
               </span>
            )
         })
      )
   }

   return (
      <div className={isPosAbsolute ? [s.word, s.absolute].join(" ") : s.word}>
         <h4 className={s.wordTitle}>
            {word.result && colors
               // ? wordFormatter(word.text)
               ? word.text.charAt(0).toUpperCase() + word.text.slice(1)
               : word.text.charAt(0).toUpperCase() + word.text.slice(1)
            }
         </h4>

         {buttonClick &&
            <button onClick={buttonClick}>
               <InfoIcon/>
            </button>
         }

         {(isTranscription && word.transcription) &&
            <div className={s.transcription}>
               [{word.transcription}]
            </div>
         }
      </div>
   );
};

export default Word;

