import React from "react";
import { Post } from "../../interface/index";
import usePosts from "../../hooks/usePosts";
import { Link } from "react-router-dom";

const DisplayPosts: React.FC = () => {
  const { posts, status, error } = usePosts(null);

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
                <Link to={`/show/${id}`}>
                  <button className="button is-outlined is-info">Read</button>
                </Link>
              </p>
              <p className="card-footer-item">
                <Link to={`/edit/${id}`}>
                  <button className="button is-outlined is-success">
                    Edit
                  </button>
                </Link>
              </p>
            </footer>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayPosts;
