import Step_1 from "components/steps/Step_1";
import Step_2 from "components/steps/Step_2";
import Step_3 from "components/steps/Step_3";
import Container from "components/UI/Container/Container";
import React, { useState } from "react";
import s from "./Steps.module.scss";

const Steps = () => {
  const [widget, setWidget] = useState(false);

  return (
    <div className={s.steps}>
      <Container>
        <div className={s.items}>
          <Step_1 />
          <Step_2 />
          <Step_3 visible={widget} setWidget={setWidget} />
        </div>
      </Container>
    </div>
  );
};

export default Steps;
