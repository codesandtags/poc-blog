import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import axios from "axios";

export default ({ postId }) => {
  const [comments, setComments] = useState([]);
  const fetchComments = async () => {
    const res = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );

    setComments(res.data);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.comment}</li>;
  });

  return (
    <div className="mt-2 mb-2">
      <hr />
      <h5>Comments ({comments.length})</h5>
      <ul>{renderedComments}</ul>
    </div>
  );
};
