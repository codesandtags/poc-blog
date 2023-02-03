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
    <div className="w-full md:w-1/2 my-8">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label text-xl font-bold">Add a post</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          ></input>
        </div>
        <button className="px-4 py-2 font-semibold text-sm bg-orange-700 text-white rounded-full shadow-sm">
          Submit
        </button>
      </form>
    </div>
  );
};
