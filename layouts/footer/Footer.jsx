import Container from "components/UI/Container/Container";
import Logo from "components/UI/Logo/Logo";
import Socials from "layouts/footer/Socials";
import StoresButtons from "components/StoresButtons/StoresButtons";
import React from 'react';
import { Link } from "react-router-dom";
import s from "./Footer.module.scss"


const Footer = () => {

  const upPage = () => {
    window.scrollTo(0, 0);
  }

  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.main}>
          <Logo textColor="#fff" />
          <StoresButtons />
        </div>
        <div className={s.bottom}>
          <div className={s.info}>
            <span>© 2023 Say It Right. All Rights Reserved</span>
            <Link to="/privacy" onClick={upPage}>Privacy policy</Link>
          </div>
          <Socials />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;