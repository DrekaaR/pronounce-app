import s from "components/steps/Steps.module.scss";
import Button from "components/steps/UI/Button";
import Loader from "components/UI/Loader/Loader";
import {WordContext} from "context";
import {useAudioRecorder} from "hooks/useAudioRecorder";
import React, {useContext} from 'react';
import {BiMicrophone as MicrophoneIcon} from "react-icons/bi";

const ButtonRecord = () => {
   const {word} = useContext(WordContext)
   const {startRecord, isRecording, isLoading, isResponseEmpty} = useAudioRecorder()

   const ButtonText = () => {
      if (word.result) {
         return isRecording ? "Listening..." : "Try again"
      } else {
         if (isRecording) {
            return "Listening..."
         } else if (isResponseEmpty) {
            return "Try again"
         } else if (isLoading) {
            return "Loading..."
         } else {
            return "Say the word"
         }
      }
   }

   return (
      <>
         {isResponseEmpty && <div className={s.error}>
            Sorry, we were unable to recognize your voice. Please try again
         </div>}
         <Button disabled={isRecording || isLoading} onClick={startRecord}>
            <span className={isRecording ? s.recording : ""}>
               {isLoading ? <Loader/> : <MicrophoneIcon/>}
            </span>
            <ButtonText/>
         </Button>
      </>
   );
};

export default ButtonRecord;