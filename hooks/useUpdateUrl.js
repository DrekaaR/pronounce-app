import {WordContext} from "context";
import {useContext} from "react";

export const useUpdateUrl = () => {
   const {word, setWord} = useContext(WordContext);

   const updateUrl = (oldWord, newWord) => {
      let url = window.location.href;
      if (url.includes(oldWord)) {
         window.history.pushState(null, oldWord, newWord);
         setWord(prevState => ({...prevState, text: newWord, result: null, userAudio: null}));
      } else {
         window.history.pushState(null, '', newWord);
         setWord(prevState => ({...prevState, text: newWord, result: null, userAudio: null}));
      }
   }

   return {updateUrl};
}