import axios from "axios";
import {WordContext} from "context";
import {useFetching} from "hooks/useFetching";
import {useContext, useEffect, useState} from "react";

export const useAudioRecorder = () => {
   const {word, setWord} = useContext(WordContext);
   const [audioBlob, setAudioBlob] = useState(null);
   const [isRecording, setIsRecording] = useState(false);
   const [isResponseEmpty, setIsResponseEmpty] = useState(false);

   const constraints = {audio: true, video: false}
   const url = "api";
   const recordDuration = 3000;

   let stream = null
   let chunks = []
   let mediaRecorder = null

   useEffect(() => {
      // Send data to server
      audioBlob && fetching()
   }, [audioBlob])

   const [fetching, isLoading, error] = useFetching(async () => {
      resetResponseEmpty()
      const formData = new FormData()
      formData.append('text', word.text)
      formData.append('mp3', audioBlob, `${word.text}.mp3`)
      const response = await axios.post(url, formData, {
         headers: {
            'Content-Type': 'multipart/form-data'
         }
      });
      if (response.data.error){
         setIsResponseEmpty(true)
      } else {
         console.log(response.data)
         setWord(prevState => ({
            ...prevState,
            result: response.data,
            userAudio: audioBlob
         }))
         resetResponseEmpty()
         resetRecord()
      }
   })
   
   const resetResponseEmpty = () => {
      isResponseEmpty && setIsResponseEmpty(false)
   }


   const openModal = () => {
      setTimeout(() => {
         setWord({
            ...word,
            interacted: true,
            adModalVisible: true
         })
      }, 3000)
   }


   async function startRecord() {
      resetResponseEmpty()
      // Check recorder support
      if (!navigator.mediaDevices && !navigator.mediaDevices.getUserMedia) {
         return console.warn('Not supported')
      }

      // Get access from user. If not => throw error
      navigator.mediaDevices.getUserMedia(constraints)
         .then((_stream) => {
            stream = _stream
         })
         .catch((err) => {
            console.error(`Not allowed or not found: ${err}`)
         })

      // Recording
      try {
         setIsRecording(true)

         const stream = await navigator.mediaDevices.getUserMedia({
            audio: true
         })

         mediaRecorder = new MediaRecorder(stream)
         mediaRecorder.start()
         mediaRecorder.ondataavailable = (e) => chunks.push(e.data)
         mediaRecorder.onstop = () => {
            mediaRecorderStop();
         }

         // Stop recording after 3 seconds
         setTimeout(() => {
            setIsRecording(false)
            mediaRecorder.stop()
         }, recordDuration)

      } catch (e) {
         setIsRecording(false)
         console.error(e)
      }

   }

   async function mediaRecorderStop() {
      const blob = new Blob(chunks, {type: 'audio/mp3'});
      setAudioBlob(blob);
      mediaRecorder = null
      chunks = []
      (!isResponseEmpty && !word.interacted) && openModal();
   }

   function resetRecord() {
      setAudioBlob(null)
   }

   return {startRecord, isRecording, isLoading, error, fetching, isResponseEmpty}

}

