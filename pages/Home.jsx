import GreetingBanner from "components/GreetingBanner/GreetingBanner";
import Search from "components/Search/Search";
import Steps from "components/steps/Steps";
import React from "react";

const Home = (props) => {
  return (
    <>
      <GreetingBanner ga={props.ga} />
      <Search />
      <Steps />
      {/*<Reviews/>*/}
      {/*<Companies/>*/}
      {/*<Rating/>*/}
    </>
  );
};

export default Home;
