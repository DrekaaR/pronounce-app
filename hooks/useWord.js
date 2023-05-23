import {getWord, getWordDict, getWordPronunciation} from "API";
import {WordContext} from "context/index";
import {useFetching} from "hooks/useFetching";
import {useContext, useState} from "react";
import {colorsHex} from "config/wordConfig"

export const useWord = () => {
   const {word, setWord} = useContext(WordContext);

   // Get transcription and text
   const [fetchTranscr, isTranscrLoading, transcrError] = useFetching(async () => {
      const response = await getWord(word.text);
      setWord(prevState => ({
         ...prevState,
         transcription: response.data.pronunciation
      }));
   })

   // Get assets
   const [fetchDict, isDictLoading, dictError] = useFetching(async () => {
      const response = await getWordDict(word.text);
      setWord(prevState => ({
         ...prevState,
         definitions: response.data.definitions,
         examples: response.data.examples
      }));
   })

   // Get pronunciation
   const [fetchPron, isPronLoading, pronError] = useFetching(async () => {
      const response = await getWordPronunciation(word.text);
      setWord(prevState => ({
         ...prevState,
         pronunciation: response
      }));
   })

   return {
      fetchTranscr, isTranscrLoading, transcrError,
      fetchDict, isDictLoading, dictError,
      fetchPron, isPronLoading, pronError
   };
}

export const useWordConfig = (score) => {
   const [resultObject, setResultObject] = useState({});

   const isCorrect = score >= 80 && score <= 100;
   const isMedium = score >= 60 && score < 80;
   const isWrong = score >= 0 && score < 60;

   const textCorrect = `You sound <b>${score}%</b> like a native speaker`;
   const textMedium = `"Great job! You've already achieved <b>${score}%</b> accuracy. With a bit more practice, you'll be sounding like a native speaker in no time!"`;
   const textWrong = `You got only <b>${score}%</b>, practice more`;

   switch (score) {
      case isCorrect:
         setResultObject({
            color: colorsHex.green,
            title: "Correct!",
            textCorrect,
         });
      case isMedium:
         setResultObject({
            color: colorsHex.yellow,
            title: "Particular right",
            textMedium,
         });
      case isWrong:
         setResultObject({
            color: colorsHex.red,
            title: "Wrong!",
            textWrong,
         });
      default:
         return null;
   }
   return resultObject;
}