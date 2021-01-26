import React from "react";
import CommentList from "./CommentList";
import CommentsCreate from "./CommentsCreate";

export default ({ post }) => {
  const topics = ["Nature", "Adventures", "Cities", "Beach", "Food"];
  const topic = topics[Math.floor(Math.random() * topics.length)];

  return (
    <div className="col-md-6">
      <div className="row card bg-white g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative">
        <div className="col p-4 d-flex flex-column position-static">
          <strong className="d-inline-block mb-2 text-primary">{topic}</strong>
          <h3 className="mb-0">{post.title}</h3>
          <div className="mb-1 text-muted">Nov 12</div>
          <p className="card-text mb-auto">
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </p>

          <a href="#" className="">
            Continue reading
          </a>

          <CommentsCreate postId={post.id} />
          <CommentList postId={post.id} />
        </div>
        <div className="col-auto d-none d-lg-block h-md-300">
          <div
            className="p-5 text-center bg-image"
            style={{
              backgroundImage: 'url("https://picsum.photos/200/300")',
              height: "300px",
              width: "200px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
