const handleEvent = (type, data, posts) => {
  if (type === "PostCreated") {
    const { id, title } = data;

    posts[id] = {
      id,
      title,
      comments: [],
    };
  }

  if (type === "CommentCreated") {
    const { id, comment, postId, status } = data;
    const post = posts[postId];
    post.comments.push({ id, comment, status });
  }

  if (type === "CommentUpdated") {
    const { id, comment, postId, status } = data;

    const post = posts[postId];
    const commentFound = post.comments.find((comment) => comment.id === id);

    if (commentFound) {
      commentFound.status = status;
      commentFound.comment = comment;
    }
  }
};

module.exports = {
  handleEvent: handleEvent,
};
