import React, {createContext, useEffect, useState} from 'react';

export const WordContext = createContext();

//word.results.words[0].phonemes

const initialState = {
   text: "",
   transcription: "",
   pronunciation: null,
   definitions: null,
   examples: null,
   adModalVisible: false,
   interacted: false,
   userAudio: null,
   result: null
}


const WordContextProvider = (props) => {
   const [word, setWord] = useState(initialState)

   // URL changing
   useEffect(() => {
      if (window.location.pathname !== "/") {
         const wordFromUrl = window.location.pathname.split('/').pop();
         setWord({...word, text: wordFromUrl})
      } else {
         setWord({...word, text: "word"})
      }
   }, [word.text])

   // Is user interacted handler
   useEffect(() => {
      if (!word.interacted) {
         const timeoutId = setTimeout(() => {
            setWord(prevState => ({
               ...prevState,
               adModalVisible: true,
               interacted: true
            }))
         }, 13000);
         return () => clearTimeout(timeoutId);
      }
   }, [word.interacted])


   return (
      <WordContext.Provider value={{word, setWord}}>
         {props.children}
      </WordContext.Provider>
   );
};

export default WordContextProvider;