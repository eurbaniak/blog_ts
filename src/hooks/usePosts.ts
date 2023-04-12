import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchPosts, createPost } from "../api/posts";
import { Post } from "../interface/index";

interface UsePosts {
  posts?: Post[];
  error: any;
  status: string;
  addPost: any;
}

const usePosts = (): UsePosts => {
  const queryClient = useQueryClient();

  const {
    data: posts,
    error,
    status,
  } = useQuery<Post[], Error>("posts", fetchPosts);

  const addPost = useMutation<Post, any, Post>((post) => createPost(post), {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  return {
    posts,
    error,
    status,
    addPost,
  };
};

export default usePosts;
