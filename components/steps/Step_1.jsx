import { ReactComponent as LoadingIcon } from "assets/images/icons/loading.svg"
import s from "components/steps/Steps.module.scss";
import Button from "components/steps/UI/Button";
import Word from "components/steps/UI/Word/Word";
import Wrapper from "components/steps/UI/Wrapper";
import Loader from "components/UI/Loader/Loader";
import { WordContext } from "context";
import { useWord } from "hooks/useWord";
import React, { useContext, useEffect, useState } from 'react';
import { BiVolumeFull as ListenIcon } from "react-icons/bi";
import { capitalizeFirstLetter } from "utils/formatters";

const Step1 = () => {
  const [playing, setPlaying] = useState(false);
  const { word } = useContext(WordContext);

  const { fetchDict, fetchTranscr, isDictLoading, dictError, fetchPron, isPronLoading } = useWord();

  useEffect(() => {
    if (word.text) {
      fetchDict();
      fetchPron();
      fetchTranscr();
    }
  }, [word.text])


  function listenForWord() {
    const audio = new Audio(word.pronunciation);
    audio.play();
    setPlaying(true);
    audio.addEventListener('ended', () => setPlaying(false));
  }

  const Definition = () => {
    const definitions = word.definitions;

    return (
      <div>
        <div className={s.infoTitle}>Definition:</div>
        <div>
          <div className={s.infoText}>
            {definitions
              ? (
                isDictLoading ? <Loader /> : capitalizeFirstLetter(definitions)
              )
              : "Nothing found"
            }
            {dictError && "Something went wrong"}
          </div>
        </div>
      </div>
    )
  }

  const Examples = () => {
    const examples = word.examples;
    return (
      <div>
        <div className={s.infoTitle}>Examples:</div>
        <div>
          <div className={s.infoText}>
            {examples
              ? (
                isDictLoading
                  ? <Loader />
                  : capitalizeFirstLetter(examples)
              )
              : "Empty"
            }
            {dictError && "Something went wrong"}
          </div>
        </div>
      </div>
    )
  }

  return (
    <Wrapper title="Step 1" subtitle="Listen to the pronunciation">

      <div className={s.itemContent}>
        <Word isTranscription />
        <Definition />
        <Examples />
      </div>

      {word.pronunciation
        ? (
          <Button disabled={(playing || isPronLoading)} onClick={listenForWord}>
            <span>{(playing || isPronLoading) ? <LoadingIcon /> : <ListenIcon />}</span>
            Listen to the word
          </Button>
        )
        : <Loader />
      }
    </Wrapper>
  );
};

export default Step1;