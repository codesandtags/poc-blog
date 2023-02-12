import React from "react";
import CommentList from "./CommentList";
import CommentsCreate from "./CommentsCreate";

export default ({ post, fetchPosts }) => {
  const topics = ["Nature", "Adventures", "Cities", "Beach", "Food"];

  return (
    <div class="max-w p-6 bg-white border border-gray-200 rounded-lg shadow">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {post.title}
        </h5>
      </a>
      <CommentsCreate postId={post.id} fetchPosts={fetchPosts} />
      <CommentList comments={post.comments} />
    </div>
  );
};
