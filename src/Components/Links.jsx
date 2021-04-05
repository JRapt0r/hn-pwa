import React from "react";
import {
  Results,
  Result,
  ResultTitle as Title,
  ResultMetaData as MetaData,
  ResultInfo as Info
} from "./Result";

import NextPage from "./NextPage";

function Links({ children: results, currentPage, currentSort }) {
  return (
    <Results>
      {
        results.map((result, i) => {
          return (
            <Result key={(result.id).toString()}>
              <MetaData index={(i + 1) + ((currentPage-1)*30)} score={result.points} />

              <Title domain={result.domain} url={result.url}>
                {result.title}
              </Title>

              <Info
                id={result.id}
                user={result.user}
                numComments={result.comments_count}
                timeAgo={result.time_ago}
                time={result.time}
              />
            </Result>
          );
        })
      }

      <NextPage currentPage={currentPage} currentSort={currentSort} />
    </Results>
  );
}

export default Links;