import React from "react";
import PostItem from "./PostItem";

export default ({ posts, fetchPosts }) => {
  const renderedPost = Object.values(posts).map((post) => {
    return <PostItem post={post} key={post.id} fetchPosts={fetchPosts} />;
  });

  return (
    <div className="my-4">
      <div className="flex">
        <h2 className="text-2xl font-bold">The lastest posts</h2>
      </div>
      <div className="py-4 flex flex-col md:flex-row gap-4">{renderedPost}</div>
    </div>
  );
};
