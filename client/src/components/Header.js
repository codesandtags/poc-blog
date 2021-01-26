import React from "react";

export default () => {
  return (
    <div
      className="container py-2"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=40")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        height: "400px",
      }}
    >
      <header className="blog-header py-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-2 pt-1"></div>
          <div className="col-8 text-center">
            <a className="blog-header-logo" href="#">
              The Travel Blog
            </a>
          </div>
          <div className="col-2 d-flex justify-content-end align-items-center"></div>
        </div>
      </header>
    </div>
  );
};
