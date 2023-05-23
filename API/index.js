import axios from "axios";

export const getWord = async (word) => {
   const response = await axios.get(`api${word}`);
   return response;
}

export const getWordDict = async (word) => {
   const response = await axios.get(`api{word}`);
   return response;
}
export const getWordPronunciation = async (word) => {
   const response = await axios.get(`api${word}`);
   return response && `api${word}`
}
