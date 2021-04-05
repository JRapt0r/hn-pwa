import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CommentIcon, LinkIcon, ChevronUp, ChevronDown } from "./Icons";

function ThreadTitle({ title, numComments, domain, timeAgo, user, time, url, children: content }) {
  return (
    <div className="flex flex-row items-center px-4 py-4 text-lg sm:pb-7">
      <div className="flex flex-col min-w-full">

        {domain && <div className="flex flex-row items-center order-1 text-sm text-black sm:hidden dark:text-white text-opacity-80">{domain}</div>}

        <div className="flex flex-col items-start order-2 my-2">
          <a className="mr-2 font-semibold sm:text-xl lg:text-2xl" target="_blank" rel="nofollow noopener noreferrer" href={url}>
            {title}
          </a>
        </div>

        <div className="flex flex-row flex-wrap order-3 text-sm text-black divide-x divide-black dark:text-white text-opacity-80 dark:divide-white divide-opacity-25 sm:order-2">
          <div className="pr-1"><time title={(new Date(time * 1000)).toLocaleString()}>
            {timeAgo} by</time><Link to={`/user/${user}`}><b className="px-2 dark:hover:text-white hover:text-black">{user}</b></Link>
          </div>

          <div className="flex flex-row items-center px-2"><CommentIcon size={15} />{numComments} {numComments === 1 ? "comment" : "comments"}</div>
          {domain && <div className="flex-row items-center order-1 hidden pl-2 text-sm text-black sm:flex dark:text-white text-opacity-80"><LinkIcon size={15}/>{domain}</div>}
        </div>

        {content && <div className="order-4 mt-4 space-y-4 text-base"
          dangerouslySetInnerHTML={{ __html: content.replace(/rel="nofollow"/g, `rel="nofollow noopener noreferrer" target="_blank"`) }}>
        </div>}
      </div>
    </div>
  );
}

function CommentInfo({ username, timeAgo }) {
  return (
    <div className="flex flex-row items-center justify-between sm:justify-start">
      { /* Handle deleted comments */
        username && <div className="mr-2 font-medium">
          <Link to={`/user/${username}`}>{username}</Link>
        </div>
      }
      <div className="mr-2 text-xs text-black dark:text-white text-opacity-80">{timeAgo}</div>
    </div>
  );
}

function Comment({ children: body, username, timeAgo }) {
  return (
    <div className="flex flex-col px-4 py-4">
      <CommentInfo username={username} timeAgo={timeAgo} />
      <div className="pt-2">{body}</div>
    </div>
  );
}

function CommentThread({ children: { content, user, time_ago, comments: commentThreads } }) {
  const [visible, setVisible] = useState(false);

  const toggle_visibility = () => {
    setVisible(!visible);
  };

  return (
    <Comment username={user} timeAgo={time_ago}>
      <div className="space-y-2 comment-body"
        dangerouslySetInnerHTML={{ __html: content.replace(/rel="nofollow"/g, `rel="nofollow noopener noreferrer" target="_blank"`) }}>
      </div>

      { /* Collapsable comment threads */
        commentThreads.length !== 0 ? (
          <button className="flex flex-row items-center justify-end w-full py-2 space-x-2 font-medium focus-within:outline-none" onClick={toggle_visibility}>
            <div>{visible ? "Hide" : "Show"} {commentThreads.length} {commentThreads.length > 1 ? "replies" : "reply"}</div>
            {visible ? <ChevronUp /> : <ChevronDown />}
          </button>
        ) : null
      }

      {/* Recursively create child threads */
        commentThreads.map((topLevelComment) => {
          return (visible &&
            <CommentThread key={topLevelComment.id.toString()}>
              {topLevelComment}
            </CommentThread>
          );
        })}
    </Comment>
  )
}

function Comments({ children: commentThreads }) {
  return (
    <div className="flex flex-col pb-12 divide-y dark:divide-gray-700">
      {commentThreads}
    </div>
  );
}

export { Comments, CommentThread, ThreadTitle };