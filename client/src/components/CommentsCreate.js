import React, { useState } from "react";
import axios from "axios";

export default ({ postId, fetchPosts }) => {
  const [comment, setComment] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      comment,
    });

    setComment("");
    fetchPosts();
  };

  return (
    <div className="mt-3">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label fw-bold">New comment</label>
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="form-control"
          ></input>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
