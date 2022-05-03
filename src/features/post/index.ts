import { useFetchPost, Props } from "../hooks/useFetchPost";
import { postPresenter } from "./presenter";
import { PostView } from "./view";

export const PostList = () => {
  const url = new URL("https://jsonplaceholder.typicode.com/posts");
  return PostView(postPresenter(useFetchPost({ url })));
};
