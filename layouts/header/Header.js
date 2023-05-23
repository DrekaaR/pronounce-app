import React from 'react';
import s from "./Header.module.scss"

import Container from "components/UI/Container/Container";
import Logo from "components/UI/Logo/Logo";

const Header = () => {
  return (
    <header className={s.header}>
      <Container>
        <Logo/>
      </Container>
    </header>
);
};

export default Header;