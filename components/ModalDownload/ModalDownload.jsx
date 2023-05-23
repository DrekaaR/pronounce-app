import logo from "assets/images/download-modal/logo.webp";
import { ReactComponent as CrossIcon } from "assets/images/icons/cross-modal.svg";
import { WordContext } from "context";
import StoresButtons from "components/StoresButtons/StoresButtons";
import React, { useContext, useEffect, useState } from 'react';
import { createPortal } from "react-dom";
import s from "./ModalDownload.module.scss"
import { motion } from "framer-motion";

const ModalDownload = (props) => {
  const { word, setWord } = useContext(WordContext);

  const closeModal = () => {
    setWord({
      ...word,
      adModalVisible: false,
    })
  }

  return (
    <>
      {word.adModalVisible && createPortal(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={s.modal}
        >
          <div className={s.modalWrapper} onClick={closeModal}>
            <div className={s.modalBody}>

              <button onClick={closeModal} className={s.closeBtn}>
                <CrossIcon />
              </button>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={s.modalContent}
                onClick={(e) => e.stopPropagation()}
              >

                <div className={s.logo}>
                  <img src={logo} alt="say it right logo" />
                </div>

                <StoresButtons isBlock ga={props.ga} />

              </motion.div>
            </div>
          </div>
        </motion.div>,
        document.body
      )}
    </>
  );
};

export default ModalDownload;