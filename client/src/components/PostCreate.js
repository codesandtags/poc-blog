import React, { useState } from "react";
import axios from "axios";

export default ({ fetchPosts }) => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      title,
    });

    setTitle("");
    fetchPosts();
  };

  return (
    <div className="mt-3 mb-3">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label">Add a post</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          ></input>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
