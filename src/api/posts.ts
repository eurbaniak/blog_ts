import { Post } from "../interface/index";

const API_URL = import.meta.env.VITE_API;

export const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch(`${API_URL}/posts`);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.message || "Failed to fetch");
  }
  return data;
};

export const createPost = async (post: Post): Promise<Post> => {
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
