import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { batchGetSelector } from "../post/selector";
import { fetchPosts } from "../post/slice";

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
  const dispatch = useDispatch();
  const posts = useSelector(batchGetSelector);

  useEffect(() => {
    fetch(url.toString())
      .then((res) => res.json())
      .then((data) => dispatch(fetchPosts(data)));
  }, [url, dispatch]);

  return {
    fetchedPosts: posts,
  };
};
