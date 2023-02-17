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
      const res = await axios.get("http://myblog.com/posts");

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
        <PostCreate fetchPosts={fetchPosts} />
        <hr />
        <PostList posts={posts} fetchPosts={fetchPosts} />
      </main>
    </div>
  );
};
