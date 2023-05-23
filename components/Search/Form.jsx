import s from "components/Search/Search.module.scss";
import {WordContext} from "context";
import {useUpdateUrl} from "hooks/useUpdateUrl";
import React, {useContext, useEffect, useRef} from 'react';
import {FiSearch as SearchIcon} from "react-icons/fi";

const Form = ({search}) => {
   const inputRef = useRef(null);
   const {word, setWord} = useContext(WordContext);
   const {updateUrl} = useUpdateUrl();

   const setNewWord = (newWord) => {
      const oldWord = word.text;
      updateUrl(oldWord, newWord);
   }

   const getWordDataFromSearch = (e) => {
      e.preventDefault();
      search.value && setNewWord(search.value.toLowerCase());
      resetInput();
   }

   const resetInput = () => {
      search.setValue('');
      inputRef.current.blur();
   }

   return (
      <form onSubmit={getWordDataFromSearch} className={s.searchActions}>
         <input
            ref={inputRef}
            onChange={search.onChange}
            value={search.value}
            placeholder="Type the Word Here"
         />
         <button className={s.button}>
            <SearchIcon/>
         </button>
      </form>
   );
};

export default Form;