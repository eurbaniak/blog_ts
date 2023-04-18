import { Post, NewPost } from "../interface/index";

const API_URL = import.meta.env.VITE_API;

export const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch(`${API_URL}/posts`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch");
  }
  return data;
};

export const fetchPost = async (id: number | null): Promise<Post> => {
  if (id !== null) {
    const res = await fetch(`${API_URL}/posts/${id}`);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message || "Failed to fetch a Post");
    }
    return data;
  }

  return Promise.reject(new Error("id must be provided"));
};

export const createPost = async (post: NewPost): Promise<NewPost> => {
  const res = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to create post");
  }
  return data;
};

export const deletePost = async (id: number): Promise<void> => {
  const res = await fetch(`${API_URL}/posts/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to delete post");
  }
};
export const editPost = async (
  id: number,
  updatedPost: NewPost
): Promise<NewPost> => {
  const res = await fetch(`${API_URL}/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPost),
  });
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to update post");
  }
  return data;
};
