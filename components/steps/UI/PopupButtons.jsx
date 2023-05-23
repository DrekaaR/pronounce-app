import s from "components/steps/UI/Popup/Popup.module.scss";
import Loader from "components/UI/Loader/Loader";
import {WordContext} from "context";
import React, {useContext, useState} from 'react';
import {BiVolumeFull as VolumeIcon} from "react-icons/bi";
import {FiHeadphones as HeadphonesIcon} from "react-icons/fi";

const PopupButtons = () => {
   const {word} = useContext(WordContext)
   const [playingWord, setPlayingWord] = useState(false)
   const [playingUser, setPlayingUser] = useState(false)

   const listenForWord = () => {
      const audio = new Audio(word.pronunciation);
      audio.play();
      setPlayingWord(true);
      audio.addEventListener('ended', () => setPlayingWord(false));
   }

   const listenForUserPron = () => {
      const audioURL = URL.createObjectURL(word.userAudio);
      const audio = new Audio(audioURL);
      audio.play();
      setPlayingUser(true);
      audio.addEventListener('ended', () => setPlayingUser(false));
   }

   return (
      <div className={s.actions}>
         <button onClick={listenForWord}>
            {playingWord
               ? <Loader small/>
               : <VolumeIcon/>
            }
         </button>
         <button onClick={listenForUserPron}>
            {playingUser
               ? <Loader small/>
               : <HeadphonesIcon/>
            }
         </button>
      </div>
   );
};

export default PopupButtons;