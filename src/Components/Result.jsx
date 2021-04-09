import React from "react";
import { Link } from "react-router-dom";
import { CommentIcon } from "./Icons";

function ResultTitle({ children: title, domain, url }) {
  return (
    <div className="flex flex-row flex-wrap items-center">
      <a className="mr-2 font-semibold" href={domain ? url : url.replace("item?id=", "/item/")} target="_blank" rel="nofollow noopener noreferrer">
        {title}
      </a>
      <div className="text-xs text-black dark:text-white text-opacity-80">({domain ? domain : "self.hackernews"})</div>
    </div>
  );
}

function ResultMetaData({ index, score }) {
  return (
    <div className="flex flex-row justify-between sm:items-center sm:justify-start sm:w-24">
      {index && <div className="order-2 text-xs text-black dark:text-white sm:inline sm:order-1 text-opacity-80">{index}</div>}
      <div className="order-1 pr-2 text-lg font-bold sm:order-2 sm:pl-3 text-orange">{score}</div>
    </div>
  );
}

function ResultInfo({ user, numComments, timeAgo, time, id }) {
  return (
    <div className="flex flex-row text-sm text-black divide-x divide-black dark:divide-white dark:text-white text-opacity-80 divide-opacity-25">

      <div className="py-1 pr-2">
        <span title={(new Date(time * 1000)).toLocaleString()}>
          {timeAgo}
        </span>
        {user && <span> by <Link className="ml-0.5 hover:text-black dark:hover:text-white" to={`/user/${user}`}><b>{user}</b></Link></span>}
      </div>

      <Link to={`/item/${id}`}>
        <div className="pl-2">
          <div className="flex flex-row items-center py-1 rounded hover:text-black dark:hover:text-white">
            <CommentIcon size={15} /> {numComments} {numComments === 1 ? "comment" : "comments"}
          </div>
        </div>
      </Link>

    </div>
  );
}

function Result({ children: [metaData, title, postInfo] }) {
  return (
    <div className="flex flex-col px-4 py-6 sm:items-center sm:flex-row">
      {metaData}

      <div className="flex flex-col space-y-2">
        {title}
        {postInfo}
      </div>
    </div>
  );
}

function Results({ children }) {
  return (
    <div className="flex flex-col divide-y dark:divide-gray-700">
      {children}
    </div>
  );
}

export { Results, Result, ResultTitle, ResultMetaData, ResultInfo };