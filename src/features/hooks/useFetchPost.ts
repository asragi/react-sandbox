import { useEffect, useState } from "react";

export interface Props {}

export type FetchedPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const useFetchPost = (props: Props) => {
  const [posts, setPosts] = useState<FetchedPost[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return {
    fetchedPosts: posts,
  };
};
