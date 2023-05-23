import axios from "axios";
import {WordContext} from "context";
import {useState, useContext} from "react";

export const usePost = (file) => {
   const {word} = useContext(WordContext)
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState("")
   const url = "api";

   const postHandler = async () => {
      setIsLoading(true);

      // Create a new FormData object and append the text and mp3 file
      const formData = new FormData();
      formData.append('text', word.text);
      formData.append('mp3', file);

      // Make the request using fetch
      fetch(url, {
         method: 'POST',
         body: formData
      })
         .then(response => {
            response &&  setIsLoading(false);
            console.log(response)
         })
         .catch(error => {
            setIsLoading(false);
            setError(error);
            console.log(error)
         });

   }

   return {postHandler, isLoading, error}
}

