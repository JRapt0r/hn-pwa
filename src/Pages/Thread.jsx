import React from "react";
import { useParams } from "react-router-dom";
import { Comments, CommentThread, ThreadTitle } from "../Components/Comments";
import useFetch from "../Helpers/useFetch";

function Thread() {
  const { itemId } = useParams();
  const [loading, res, error] = useFetch(`https://api.hackerwebapp.com/item/${itemId}`);

  return (
    error || loading ||
    <Comments>
      <ThreadTitle url={res.url} time={res.time} timeAgo={res.time_ago}
        user={res.user} domain={res.domain} title={res.title} numComments={res.comments_count}>
          {res.content}
      </ThreadTitle>

      {(res.comments).map((topLevelComment, i) => {
        return (
          <CommentThread key={i.toString()}>
            {topLevelComment}
          </CommentThread>
        );
      })}
    </Comments>
  );
}

export default Thread;