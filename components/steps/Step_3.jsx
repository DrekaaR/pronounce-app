import Wrapper from "components/steps/UI/Wrapper";
import Widget from "components/Widget/Widget";
import React from 'react';
import s from "./Steps.module.scss"

const Step3 = ({ setWidget, visible }) => {
  return (
    <Wrapper
      style={{ display: visible ? "block" : "none" }}
      isLarge
      title="Step 3"
      subtitle="Explore how others say it"
    >
      <Widget setWidget={setWidget} />
      <div className={s.plug} />
    </Wrapper>
  );
};

export default Step3;