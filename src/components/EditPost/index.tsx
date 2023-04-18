import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import usePosts from "../../hooks/usePosts";

type FormValues = {
  title: string;
  body: string;
  author: string;
};

const EditPost = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>();
  const { id } = useParams<{ id: string }>();
  const { updatePost, post } = usePosts(Number(id));
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    if (updatePost) {
      await updatePost({ id: Number(id), updatedPost: data });
    }
    navigate("/");
  };

  useEffect(() => {
    if (post) {
      setValue("title", post.title);
      setValue("body", post.body);
      setValue("author", post.author);
    }
  }, [post, setValue]);

  return (
    <div className="box">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="title has-text-centered">Edit Post</h1>
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

export default EditPost;
