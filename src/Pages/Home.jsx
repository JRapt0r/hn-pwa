import React from "react";
import { useParams } from "react-router-dom";
import Links from "../Components/Links";
import useFetch from "../Helpers/useFetch";

function Home({ sort }) {
  const { pageNum = 1 } = useParams();
  const [loading, res, error] = useFetch(`https://api.hackerwebapp.com/${sort}?page=${pageNum}`);

  return (
    error || loading ||
    <Links currentPage={pageNum} currentSort={sort}>
      {res}
    </Links>
  );
}

export default Home;