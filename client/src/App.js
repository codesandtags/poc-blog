import React from "react";
import Header from "./components/Header";
import PostCreate from "./components/PostCreate";
import PostList from "./components/PostList";

import "./styles.css";

export default () => {
  return (
    <div>
      <Header />
      <main className="container">
        <PostCreate></PostCreate>
        <hr />
        <PostList />
      </main>
    </div>
  );
};
