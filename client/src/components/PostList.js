import React, { useEffect, useState } from "react";
import PostItem from "./PostItem";
import axios from "axios";

export default () => {
  const [posts, setPosts] = useState({});
  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4000/posts");

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPost = Object.values(posts).map((post) => {
    return <PostItem post={post} key={post.id} />;
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
