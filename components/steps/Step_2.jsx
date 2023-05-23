import s from "components/steps/Steps.module.scss";
import ButtonRecord from "components/steps/UI/ButtonRecord";
import WordPopup from "components/steps/UI/Popup/Popup";
import PronResults from "components/steps/UI/PronResults";
import StatusCloud from "components/steps/UI/Status/Cloud";
import Word from "components/steps/UI/Word/Word";
import Wrapper from "components/steps/UI/Wrapper";
import wordRate, { pronRateData, } from "config/wordConfig";
import { WordContext } from "context";
import React, { useContext, useState, useEffect } from 'react';


const Step2 = () => {
  const { word } = useContext(WordContext)
  const [selectedRate, setSelectedRate] = useState(null)
  const [popupVisible, setPopupVisible] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    if (word.result) {
      setScore(Math.round(word.result.accuracyScore))
      if (score) {
        if (wordRate.correct(score)) {
          setSelectedRate(pronRateData.correct)
        } else if (wordRate.medium(score)) {
          setSelectedRate(pronRateData.medium)
        } else {
          setSelectedRate(pronRateData.wrong)
        }
      }
    }
  }, [word.result, score])

  const closePopupClickAway = () => {
    if (popupVisible) setPopupVisible(false)
  }

  return (
    <Wrapper
      title="Step 2"
      subtitle="Let's hear how you pronounce it"
      onClick={closePopupClickAway}
    >

      <WordPopup
        selectedRate={selectedRate}
        visible={popupVisible}
        setVisible={setPopupVisible}
      />

      {word.result
        ? (
          <PronResults
            score={score}
            selectedRate={selectedRate}
            setPopupVisible={setPopupVisible}
          />
        )
        : (
          <div className={s.itemContent}>
            <StatusCloud>
              <Word isTranscription isPosAbsolute />
            </StatusCloud>
          </div>
        )
      }

      <ButtonRecord />

    </Wrapper>
  )
}

export default Step2;