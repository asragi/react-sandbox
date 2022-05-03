import { useFetchPost } from "../hooks/useFetchPost";
import { postPresenter } from "./presenter";
import { PostView } from "./view";

export const PostList = () => {
  const url = new URL(process.env.REACT_APP_POST_FETCH_URL || '');
  return PostView(postPresenter(useFetchPost({ url })));
};
