import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import usePosts from "../../hooks/usePosts";

type Props = {};

type FormValues = {
  title: string;
  body: string;
  author: string;
};

const NewPost = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { addPost } = usePosts(null);

  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    if (addPost) {
      await addPost.mutateAsync(data);
    }
    navigate("/");
  };

  return (
    <div className="box">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title has-text-centered">Add New Post</h1>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              {...register("title", { required: true })}
              className={`input ${errors.title ? "is-danger" : ""}`}
            />
            {errors.title && (
              <p className="help is-danger">Title is required</p>
            )}
          </div>
        </div>
        <div className="field">
          <label className="label">Author</label>
          <div className="control">
            <input
              {...register("author", { required: true })}
              className={`input ${errors.title ? "is-danger" : ""}`}
            />
            {errors.title && (
              <p className="help is-danger">Author is required</p>
            )}
          </div>
        </div>
        <div className="field">
          <label className="label">Body</label>
          <div className="control">
            <textarea
              {...register("body", { required: true })}
              className={`textarea ${errors.body ? "is-danger" : ""}`}
            />
            {errors.body && (
              <p className="help is-danger">Content is required</p>
            )}
          </div>
        </div>
        <div className="column is-flex is-justify-content-space-between">
          <button
            type="submit"
            className="button is-info is-light"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button type="submit" className="button is-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
