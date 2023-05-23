import React from 'react';
import s from "./Companies.module.scss"
import Container from "components/UI/Container/Container";
import logo01 from "assets/images/companies/01.svg"
import logo02 from "assets/images/companies/02.svg"
import logo03 from "assets/images/companies/03.svg"
import logo04 from "assets/images/companies/04.svg"
import logo05 from "assets/images/companies/05.svg"
import logo06 from "assets/images/companies/06.svg"

const companiesData = [logo01, logo02, logo03, logo04, logo05, logo06]

const Companies = () => {
   return (
      <section className={s.companies}>
         <Container>
            <h3 className={s.title}>As seen in</h3>
            <div className={s.items}>
               {companiesData.map(logo =>
                  <div key={logo} className={s.logo}>
                     <img src={logo} alt="company logo" />
                  </div>
               )}
            </div>
         </Container>
      </section>
   );
};

export default Companies;