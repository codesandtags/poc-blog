import React from "react";

export default () => {
  return (
    <div
      className="container py-2"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1635&q=80")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        height: "500px",
      }}
    >
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <h1>The Travel Blog</h1>
        </div>
      </header>
    </div>
  );
};
