import React from "react";

export default () => {
  return (
    <div
      className="container flex items-center justify-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYXZlbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        height: "400px",
      }}
    >
      <header className="">
        <div className="text-5xl font-bold text-green-300 shadow-lg shadow-cyan-500">
          <h1>The Travel Blog</h1>
        </div>
      </header>
    </div>
  );
};
