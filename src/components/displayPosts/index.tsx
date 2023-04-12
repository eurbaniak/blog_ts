import React from "react";
import { Post } from "../../interface/index";
import usePosts from "../../hooks/usePosts";

const DisplayPosts: React.FC = () => {
  const { posts, status, error } = usePosts();

  if (status === "loading") {
    return <div>...loading</div>;
  }

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>all posts: </h2>
      {posts?.map((post: Post) => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
};

export default DisplayPosts;
