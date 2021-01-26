import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import PostCreate from "./components/PostCreate";
import PostList from "./components/PostList";
import axios from "axios";

import "./styles.css";

export default () => {
  const [posts, setPosts] = useState({});
  const fetchPosts = async () => {
    setTimeout(async () => {
      const res = await axios.get("http://localhost:4002/posts");

      setPosts(res.data);
    }, 1000);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <main className="container">
        <hr />
        <PostList posts={posts} fetchPosts={fetchPosts} />
        <hr />
        <PostCreate fetchPosts={fetchPosts} />
      </main>
    </div>
  );
};
