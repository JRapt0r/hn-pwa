import React from "react";
import {Link} from "react-router-dom";
import { NextIcon, PreviousIcon } from "./Icons";

function NextPage({ currentPage, currentSort }) {
  return (
    <div className="flex flex-row py-4 justify-evenly">
      {(+currentPage) > 1 ? <Link to={`/${currentSort}/${(+currentPage)-1}`}>
        <div className="flex flex-row items-center px-4 py-2 font-bold text-center rounded-md dark:hover:bg-white hover:bg-black hover:bg-opacity-10 focus-within:outline-none">
          <PreviousIcon size={20}/>
          <div className="ml-2">Previous Page</div>
        </div>
      </Link> : null}
      {(+currentPage) < 10 ? <Link to={`/${currentSort}/${(+currentPage)+1}`}>
        <div className="flex flex-row items-center px-4 py-2 font-bold text-center rounded-md dark:hover:bg-white hover:bg-black hover:bg-opacity-10 focus-within:outline-none">
          <div className="mr-2">Next Page</div>
          <NextIcon size={20}/>
        </div>
      </Link> : null}
    </div>
  );
}

export default NextPage;