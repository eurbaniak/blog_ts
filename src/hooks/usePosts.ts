import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchPosts, createPost, fetchPost } from "../api/posts";
import { Post, NewPost } from "../interface/index";

interface UsePosts {
  posts?: Post[];
  post: Post;
  postError: Error | null;
  postStatus: string;
  error: any;
  status: string;
  addPost: any;
}

const usePosts = (postId: number | null): UsePosts => {
  const queryClient = useQueryClient();

  const {
    data: posts,
    error,
    status,
  } = useQuery<Post[], Error>("posts", fetchPosts);

  const {
    data: post = {} as Post,
    error: postError,
    status: postStatus,
  } = useQuery<Post, Error>(["post", postId], () => fetchPost(postId));

  const addPost = useMutation<NewPost, any, Post>((post) => createPost(post), {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
    },
  });

  return {
    posts,
    post,
    postError,
    postStatus,
    error,
    status,
    addPost,
  };
};

export default usePosts;
