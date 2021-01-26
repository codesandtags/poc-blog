import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import axios from "axios";

export default ({ comments }) => {
  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === "approved") {
      content = comment.comment;
    }

    if (comment.status === "pending") {
      content = "This comment is awaiting moderation";
    }

    if (comment.status === "rejected") {
      content = "This comment has been rejected.";
    }

    return <li key={comment.id}>{content}</li>;
  });

  return (
    <div className="mt-2 mb-2">
      <hr />
      <h5>Comments ({comments.length})</h5>
      <ul>{renderedComments}</ul>
    </div>
  );
};
