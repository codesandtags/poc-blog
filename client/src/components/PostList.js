import React from "react";
import PostItem from "./PostItem";

export default ({ posts, fetchPosts }) => {
  const renderedPost = Object.values(posts).map((post) => {
    return <PostItem post={post} key={post.id} fetchPosts={fetchPosts} />;
  });

  return (
    <div>
      <div className="row mb-2">
        <h2>The lastest posts</h2>
      </div>
      <div className="row mb-2">{renderedPost}</div>
    </div>
  );
};
