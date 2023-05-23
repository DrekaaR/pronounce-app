import React from 'react';
import s from "./Search.module.scss";

const Results = ({ resultsData }) => {

  return (
    <div className={s.results}>
      {resultsData.length
        ? resultsData.map(result =>
          <a href={result.link} key={result.id} className={s.resultsItem}>
            {result.word}
          </a>
        )
        : "No exact match found. Try a different key word or check for typos."
      }
    </div>
  );
};

export default Results;