import { useEffect, useState } from "react";
import { PresenterProps } from "./presenter";
import { FetchedPost } from "./types";

export interface Props {}

export const ContainerComponent = (props: Props): PresenterProps => {
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
