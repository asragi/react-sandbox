import { useEffect, useState } from "react";

export interface Props {
  url: URL
}

export type FetchedPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const useFetchPost = ({ url }: Props) => {
  const [posts, setPosts] = useState<FetchedPost[]>([]);

  useEffect(() => {
    fetch(url.toString())
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, [url]);

  return {
    fetchedPosts: posts,
  };
};
