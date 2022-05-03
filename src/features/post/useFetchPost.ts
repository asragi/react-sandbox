import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { batchGetSelector } from "./selector";
import { fetchPosts } from "./slice";

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
  const urlString = url.toString();

  useEffect(() => {
    fetch(urlString)
      .then((res) => res.json())
      .then((data) => dispatch(fetchPosts(data)));
  }, [dispatch, urlString]);

  return {
    fetchedPosts: posts,
  };
};
