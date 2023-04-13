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
      {posts?.map(({ id, title, author }: Post) => {
        return (
          <div className="card m-5 has-background-light" key={id}>
            <div className="card-content has-text-centered">
              <p className="title">“{title}”</p>
              <p className="subtitle">{author}</p>
            </div>
            <footer className="card-footer">
              <p className="card-footer-item">
                <button className="button is-outlined is-info">Read</button>
              </p>
              <p className="card-footer-item">
                <button className="button is-outlined is-danger">Delete</button>
              </p>
            </footer>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPosts;
