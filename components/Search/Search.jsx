import Form from "components/Search/Form";
import Container from "components/UI/Container/Container";
import { useInput } from "hooks/useInput";
import React from 'react';
import s from "./Search.module.scss"

const Search = () => {
  const search = useInput("");

  return (
    <div className={s.block}>
      <Container>
        <h2 className={s.title}>
          Start With a Word You Want to Learn
        </h2>

        <div className={s.search}>
          <Form search={search} />
        </div>
      </Container>
    </div>
  );
};

export default Search;