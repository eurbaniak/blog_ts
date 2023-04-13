import React from "react";
import { Link, useParams } from "react-router-dom";
import usePosts from "../../hooks/usePosts";

const ShowPost = () => {
  const { id } = useParams<{ id: string }>();
  const { post, postError, postStatus } = usePosts(id ? parseInt(id) : null);

  if (postStatus === "loading") {
    return <div>Loading...</div>;
  }

  if (postStatus === "error" || !post) {
    return <div>Error: {postError?.message}</div>;
  }

  return (
    <div className="container">
      <div className="column mt-2">
        <nav className="breadcrumb has-dot-separator is-centered">
          <ul>
            <li>
              <Link to="/">Blogg</Link>
            </li>
            <li className="is-active">
              <a href="#" aria-current="page">
                {post.title}
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="columns content mt-5 mb-5">
        <div className="column">
          <h1 className="title is-1">{post.title}</h1>
          <p className="subtitle is-5">
            by <b>{post.author}</b>
          </p>
          <p className="content">{post.body}</p>
        </div>
      </div>
      <br />
      <div className="columns mt-5">
        <Link to="/">
          <button className="button is-light is-info">Go back</button>
        </Link>
      </div>
    </div>
  );
};

export default ShowPost;
