import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import usePosts from "../../hooks/usePosts";
import { Link } from "react-router-dom";

const DeletePost = () => {
  const { id } = useParams<{ id: string }>();
  const { deletePost } = usePosts(Number(id));
  const navigate = useNavigate();

  const backLink = `/show/${id}`;

  const handleDelete = () => {
    deletePost(Number(id));
    navigate("/");
  };

  return (
    <div className="box">
      <h2 className="title has-text-centered mb-5">
        Do you want to delete post?
      </h2>
      <div className="column is-flex is-justify-content-space-between mt-5">
        <Link to={backLink}>
          <button className="button is-light is-info">Cancel</button>
        </Link>
        <button onClick={handleDelete} className="button is-light is-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default DeletePost;
